"use client";

import { motion } from "framer-motion";
import { Clock, MonitorSmartphone } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function PositioningStrip() {
    const { t, locale } = useLanguage();

    return (
        <section
            aria-label={t("positioning.aria")}
            className="relative border-y border-brand-white/6 bg-[#020617]/90 backdrop-blur-sm"
        >
            <div className="absolute inset-0 bg-linear-to-r from-brand-gold/3 via-transparent to-brand-gold/3 pointer-events-none" />
            <div className="container relative z-10 mx-auto max-w-5xl px-4 py-8 md:py-10">
                <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center font-serif text-lg md:text-xl lg:text-[1.35rem] leading-snug tracking-tight text-brand-white/95"
                >
                    {locale === "en" ? (
                        <>
                            Defining a higher standard for{" "}
                            <span className="text-brand-white">{t("positioning.responsiveness")}</span>,{" "}
                            <span className="text-brand-white">{t("positioning.transparency")}</span>, and{" "}
                            <span className="text-brand-white">{t("positioning.sophisticated")}</span> claims handling in Florida.
                        </>
                    ) : (
                        t("positioning.line")
                    )}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.08 }}
                    className="mt-6 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-0"
                >
                    <div className="flex items-center justify-center gap-2.5 text-[11px] font-sans uppercase tracking-[0.22em] text-brand-slate md:text-xs">
                        <Clock className="h-3.5 w-3.5 shrink-0 text-brand-gold/80" aria-hidden />
                        <span>{t("positioning.sameDay")}</span>
                    </div>
                    <span className="hidden h-4 w-px shrink-0 bg-brand-white/15 sm:mx-8 md:block" aria-hidden />
                    <div className="flex items-center justify-center gap-2.5 text-[11px] font-sans uppercase tracking-[0.22em] text-brand-slate md:text-xs">
                        <MonitorSmartphone className="h-3.5 w-3.5 shrink-0 text-brand-gold/80" aria-hidden />
                        <span>{t("positioning.weekly")}</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
