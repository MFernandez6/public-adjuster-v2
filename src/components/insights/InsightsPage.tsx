"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

const POST_COUNT = 12;

export default function InsightsPage() {
    const { t } = useLanguage();

    return (
        <>
            <section className="relative overflow-hidden border-b border-brand-white/10 bg-[#020617] pb-16 pt-28 md:pb-24 md:pt-32">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(198,168,91,0.08),transparent_55%)]" />
                <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-sans text-[10px] font-bold uppercase tracking-[0.45em] text-brand-gold md:text-xs"
                    >
                        {t("insightsPage.heroEyebrow")}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 }}
                        className="mt-4 font-serif text-4xl leading-[1.05] tracking-tighter text-brand-white md:text-6xl"
                    >
                        {t("insightsPage.heroTitle")}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mx-auto mt-8 max-w-3xl font-sans text-base leading-relaxed text-brand-slate md:text-lg"
                    >
                        {t("insightsPage.heroBody")}
                    </motion.p>
                </div>
            </section>

            <section className="border-b border-brand-white/10 bg-brand-navy py-14 md:py-20">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {Array.from({ length: POST_COUNT }, (_, i) => (
                            <motion.article
                                key={i}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: Math.min(i * 0.03, 0.35) }}
                                className="flex flex-col rounded-2xl border border-brand-white/10 bg-brand-white/[0.02] p-6 transition-colors hover:border-brand-gold/25 hover:bg-brand-white/[0.04]"
                            >
                                <span className="font-sans text-[9px] font-bold uppercase tracking-[0.35em] text-brand-gold/90">
                                    {t(`insightsPage.posts.${i}.category`)}
                                </span>
                                <h2 className="mt-3 font-serif text-lg font-bold leading-snug tracking-tight text-brand-white md:text-xl">
                                    {t(`insightsPage.posts.${i}.title`)}
                                </h2>
                                <p className="mt-4 flex-1 font-sans text-sm leading-relaxed text-brand-slate">
                                    {t(`insightsPage.posts.${i}.excerpt`)}
                                </p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-brand-white/10 bg-[#020617] py-16 md:py-20">
                <div className="container mx-auto max-w-3xl px-4 text-center">
                    <p className="font-sans text-sm leading-relaxed text-brand-slate md:text-base">{t("insightsPage.footnote")}</p>
                    <Button size="lg" className="mt-8 bg-brand-gold font-bold uppercase tracking-widest text-brand-navy" asChild>
                        <Link href="/#contact">{t("insightsPage.ctaLabel")}</Link>
                    </Button>
                </div>
            </section>
        </>
    );
}
