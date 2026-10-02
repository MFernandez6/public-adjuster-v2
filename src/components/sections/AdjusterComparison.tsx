"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, Users, Scale } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

/** Order: company, independent, public — aligned with `adjusterComparison.cards` indices */
const cardMeta = [
    { Icon: Building2, image: "/images/adjusters/company.jpg" },
    { Icon: Users, image: "/images/adjusters/independent.jpg" },
    { Icon: Scale, image: "/images/adjusters/public.jpg" },
] as const;

export default function AdjusterComparison() {
    const { t } = useLanguage();

    return (
        <section className="border-b border-brand-white/10 bg-brand-deep py-24 md:py-32">
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
                    {cardMeta.map(({ Icon, image }, i) => (
                        <motion.article
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
                            className="group relative flex min-h-[440px] flex-col overflow-hidden rounded-2xl border border-brand-gold/15 bg-brand-white/2 p-8 text-left transition-colors hover:border-brand-gold/40 md:min-h-[480px]"
                        >
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={image}
                                    alt=""
                                    fill
                                    className="object-cover opacity-[0.5] transition-opacity duration-700 group-hover:opacity-[0.7]"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    quality={75}
                                />
                            </div>
                            <div className="absolute inset-0 z-0 bg-gradient-to-t from-brand-deep from-35% via-brand-deep/75 to-brand-deep/20" />

                            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-brand-gold/25 bg-brand-navy text-brand-gold">
                                <Icon className="h-6 w-6" aria-hidden />
                            </div>
                            <h3 className="relative z-10 mt-auto pt-6 font-serif text-xl font-bold text-brand-white">
                                {t(`adjusterComparison.cards.${i}.title`)}
                            </h3>
                            <p className="relative z-10 mt-2 font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-brand-slate/90">
                                {t(`adjusterComparison.cards.${i}.subtitle`)}
                            </p>
                            <p className="relative z-10 mt-4 font-sans text-sm leading-relaxed text-brand-slate">
                                <span className="font-semibold text-brand-white/90">{t("adjusterComparison.obligationLabel")} </span>
                                {t(`adjusterComparison.cards.${i}.obligation`)}
                            </p>
                            <p className="relative z-10 mt-3 font-sans text-sm leading-relaxed text-brand-slate">
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
