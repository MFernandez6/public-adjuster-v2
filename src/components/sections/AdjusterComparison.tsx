"use client";

import { motion } from "framer-motion";
import { Building2, Users, Scale } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const icons = [Building2, Users, Scale] as const;

export default function AdjusterComparison() {
    const { t } = useLanguage();

    return (
        <section className="border-b border-brand-white/10 bg-[#020617] py-24 md:py-32">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.45em] text-brand-gold md:text-xs">
                        {t("adjusterComparison.eyebrow")}
                    </span>
                    <h2 className="mt-4 font-serif text-3xl tracking-tighter text-brand-white md:text-5xl">
                        {t("adjusterComparison.title")}
                    </h2>
                    <p className="mt-6 font-sans text-base leading-relaxed text-brand-slate md:text-lg">
                        {t("adjusterComparison.lead")}
                    </p>
                </div>

                <div className="mt-16 grid gap-6 md:grid-cols-3">
                    {icons.map((Icon, i) => (
                        <motion.article
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="flex flex-col rounded-2xl border border-brand-white/10 bg-brand-white/2 p-8 text-left transition-colors hover:border-brand-gold/25"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-gold/25 bg-brand-navy text-brand-gold">
                                <Icon className="h-6 w-6" aria-hidden />
                            </div>
                            <h3 className="mt-6 font-serif text-xl font-bold text-brand-white">
                                {t(`adjusterComparison.cards.${i}.title`)}
                            </h3>
                            <p className="mt-2 font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-brand-slate/90">
                                {t(`adjusterComparison.cards.${i}.subtitle`)}
                            </p>
                            <p className="mt-4 font-sans text-sm leading-relaxed text-brand-slate">
                                <span className="font-semibold text-brand-white/90">{t("adjusterComparison.obligationLabel")} </span>
                                {t(`adjusterComparison.cards.${i}.obligation`)}
                            </p>
                            <p className="mt-3 font-sans text-sm leading-relaxed text-brand-slate">
                                <span className="font-semibold text-brand-white/90">{t("adjusterComparison.goalLabel")} </span>
                                {t(`adjusterComparison.cards.${i}.goal`)}
                            </p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
