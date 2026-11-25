import { timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";

const DEFAULT_FROM = "Blackline Public Adjusters <noreply@blacklinepublicadjusters.com>";

function authorized(header: string | null, secret: string) {
  const token = header?.startsWith("Bearer ") ? header.slice(7) : "";
  const actual = Buffer.from(token);
  const expected = Buffer.from(secret);
  return actual.length === expected.length && actual.length > 0 && timingSafeEqual(actual, expected);
}

function resetLink(value: unknown) {
  if (typeof value !== "string") return null;
  try {
    const url = new URL(value);
    const hostOk =
      url.hostname === "box.blacklinepublicadjusters.com" ||
      url.hostname === "localhost" ||
      url.hostname === "127.0.0.1";
    if (url.protocol !== "https:" && url.hostname !== "localhost" && url.hostname !== "127.0.0.1") return null;
    if (!hostOk || url.pathname !== "/reset-password" || !url.searchParams.get("token")) return null;
    return url.toString();
  } catch {
    return null;
  }
}

export async function POST(req: Request) {
  const secret = process.env.RESET_MAIL_SECRET?.trim() ?? "";
  if (!secret || !authorized(req.headers.get("authorization"), secret)) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const to = typeof (body as { to?: unknown })?.to === "string" ? (body as { to: string }).to.trim().toLowerCase() : "";
  const link = resetLink((body as { link?: unknown })?.link);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to) || !link) {
    return NextResponse.json({ ok: false }, { status: 422 });
  }

  const key = process.env.RESEND_API_KEY?.trim();
  if (!key) return NextResponse.json({ ok: false, error: "unconfigured" }, { status: 503 });

  const safeLink = link.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL?.trim() || DEFAULT_FROM,
        to: [to],
        subject: "Reset your BLACKBOX password",
        text: [
          "A password reset was requested for your BLACKBOX staff account.",
          "",
          "This link expires in 30 minutes and works once:",
          link,
          "",
          "The same password signs you into Blackbox, Gate, Ledger, Letter, and Field.",
          "If you did not request this, ignore this email. Your password will not change.",
        ].join("\n"),
        html: `<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:22px;color:#1c1915;">
<p>A password reset was requested for your BLACKBOX staff account.</p>
<p><a href="${safeLink}">Reset your password</a></p>
<p>This link expires in 30 minutes and works once. The same password signs you into Blackbox, Gate, Ledger, Letter, and Field.</p>
<p>If you did not request this, ignore this email. Your password will not change.</p>
</div>`,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) return NextResponse.json({ ok: false }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
