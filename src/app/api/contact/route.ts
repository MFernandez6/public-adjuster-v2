import { NextResponse } from "next/server";
import { z } from "zod";
import { slidingWindowAllowed, clientIp } from "@/lib/rate-limit";
import { primaryContactEmail, siteUrl } from "@/config/site";
import { brandShortName, legalEntityName } from "@/config/branding";

const contactSchema = z.object({
    firstName: z.string().trim().min(1).max(120),
    lastName: z.string().trim().min(1).max(120),
    email: z.string().trim().email().max(254),
    phone: z.string().trim().min(10).max(40),
    address: z.string().trim().min(5).max(500),
    zip: z.string().trim().min(3).max(20),
    damageType: z.string().trim().min(1).max(240),
    smsConsent: z.boolean(),
    _hp: z.string().optional(),
});

export async function POST(req: Request) {
    const ip = clientIp(req.headers);
    if (!slidingWindowAllowed(`contact:${ip}`, 12, 60 * 60 * 1000)) {
        return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
    }

    let json: unknown;
    try {
        json = await req.json();
    } catch {
        return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
    }

    const parsed = contactSchema.safeParse(json);
    if (!parsed.success) {
        return NextResponse.json({ ok: false, error: "validation" }, { status: 422 });
    }
    if ((parsed.data._hp ?? "").trim().length > 0) {
        return NextResponse.json({ ok: true }, { status: 200 });
    }

    const payload = parsed.data;
    const textBody = [
        `New ${brandShortName} / ${legalEntityName} contact — ${siteUrl}`,
        "",
        `Name: ${payload.firstName} ${payload.lastName}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.phone}`,
        `Property address: ${payload.address}`,
        `ZIP: ${payload.zip}`,
        `Damage type: ${payload.damageType}`,
        `SMS consent: ${payload.smsConsent ? "yes" : "no"}`,
        `Submitted (UTC): ${new Date().toISOString()}`,
    ].join("\n");

    const resendKey = process.env.RESEND_API_KEY?.trim();
    const to = process.env.CONTACT_NOTIFICATION_EMAIL?.trim() || primaryContactEmail;
    const from = process.env.RESEND_FROM_EMAIL?.trim();

    if (!resendKey || !from) {
        console.warn(
            "[contact] RESEND_API_KEY or RESEND_FROM_EMAIL missing — submission logged only:",
            textBody.replace(/\n/g, " · ")
        );
        return NextResponse.json(
            {
                ok: false,
                error: "delivery_not_configured",
                message:
                    "Form received but outbound email is not configured. Set RESEND_API_KEY and RESEND_FROM_EMAIL.",
            },
            { status: 503 }
        );
    }

    const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            from,
            to: [to],
            reply_to: payload.email,
            subject: `${brandShortName} contact — ${payload.lastName}, ${payload.zip}`,
            text: textBody,
        }),
    });

    if (!res.ok) {
        const msg = await res.text();
        console.error("[contact] Resend error", res.status, msg);
        return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
}
