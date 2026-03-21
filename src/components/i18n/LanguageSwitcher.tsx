"use client";

import { useLanguage } from "@/contexts/language-context";

export default function LanguageSwitcher() {
    const { locale, setLocale } = useLanguage();

    const pill =
        "rounded-md px-2.5 py-1.5 font-sans text-[9px] font-bold uppercase tracking-[0.2em] transition-colors";

    return (
        <div
            className="flex items-center gap-1 border border-brand-white/15 bg-brand-navy/60 px-1 py-0.5"
            role="group"
            aria-label="Language"
        >
            <button
                type="button"
                onClick={() => setLocale("en")}
                className={`${pill} ${locale === "en" ? "bg-brand-gold/20 text-brand-gold" : "text-brand-slate/70 hover:text-brand-white"}`}
            >
                EN
            </button>
            <button
                type="button"
                onClick={() => setLocale("es")}
                className={`${pill} ${locale === "es" ? "bg-brand-gold/20 text-brand-gold" : "text-brand-slate/70 hover:text-brand-white"}`}
            >
                ES
            </button>
        </div>
    );
}
