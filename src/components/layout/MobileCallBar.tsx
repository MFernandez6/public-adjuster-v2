"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { businessPhoneDisplay, businessPhoneE164 } from "@/config/site";

export default function MobileCallBar() {
    const { t } = useLanguage();
    const tel = businessPhoneE164.trim();
    if (!tel) return null;

    const label =
        businessPhoneDisplay.trim().length > 0 ? businessPhoneDisplay.trim() : tel;

    return (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] flex justify-center pb-[max(env(safe-area-inset-bottom),0.75rem)] md:hidden">
            <Link
                href={`tel:${tel}`}
                className="pointer-events-auto inline-flex items-center gap-3 rounded-full border border-brand-white/15 bg-brand-navy/95 px-5 py-3.5 font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-white shadow-xl backdrop-blur-md transition hover:border-brand-gold/35 hover:bg-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/50"
                aria-label={t("mobileCall.barAria")}
            >
                <Phone className="h-4 w-4 text-brand-gold" aria-hidden />
                <span className="text-brand-white/95">{label}</span>
                <span className="rounded-full bg-brand-gold px-3 py-1 text-[10px] tracking-wide text-brand-navy">{t("mobileCall.cta")}</span>
            </Link>
        </div>
    );
}
