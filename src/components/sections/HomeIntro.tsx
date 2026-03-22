"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function HomeIntro() {
    const { t } = useLanguage();

    return (
        <section className="relative border-y border-brand-white/10 bg-brand-navy py-20 md:py-28">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(198,168,91,0.06),transparent_50%)]" />
            <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center">
                <motion.span
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-sans text-[10px] font-bold uppercase tracking-[0.45em] text-brand-gold md:text-xs"
                >
                    {t("homeIntro.eyebrow")}
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 }}
                    className="mt-4 font-serif text-3xl tracking-tighter text-brand-white md:text-5xl"
                >
                    {t("homeIntro.title")}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mx-auto mt-8 max-w-3xl font-sans text-base leading-relaxed text-brand-slate md:text-lg"
                >
                    {t("homeIntro.body")}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8"
                >
                    <Link
                        href="/about/faq"
                        className="group inline-flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold transition-colors hover:text-brand-white"
                    >
                        {t("homeIntro.linkFaq")}
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                    <span className="hidden h-4 w-px bg-brand-white/15 sm:block" aria-hidden />
                    <Link
                        href="/insights"
                        className="group inline-flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold transition-colors hover:text-brand-white"
                    >
                        {t("homeIntro.linkInsights")}
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
