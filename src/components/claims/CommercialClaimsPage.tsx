"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ScrollText,
    Scale,
    BadgePercent,
    Camera,
    FileSearch,
    Clock,
    FolderOpen,
    Handshake,
    ShieldCheck,
    Snowflake,
    Wind,
    Waves,
    Flame,
    Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

const HIGHLIGHT_COUNT = 3;
const SERVICE_COUNT = 6;
const LOSS_COUNT = 4;
const STEP_COUNT = 3;
const ADVOCATE_BULLET_COUNT = 3;

const highlightIcons = [ScrollText, Scale, BadgePercent] as const;
const serviceIcons = [Camera, FileSearch, Clock, FolderOpen, Handshake, ShieldCheck] as const;
const lossIcons = [Snowflake, Wind, Waves, Flame] as const;

export default function CommercialClaimsPage() {
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
                        {t("commercialClaimsPage.heroEyebrow")}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 }}
                        className="mt-4 font-serif text-4xl leading-[1.05] tracking-tighter text-brand-white md:text-6xl"
                    >
                        {t("commercialClaimsPage.heroTitle")}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mx-auto mt-8 max-w-3xl font-sans text-base leading-relaxed text-brand-slate md:text-lg"
                    >
                        {t("commercialClaimsPage.heroBody")}
                    </motion.p>
                </div>
            </section>

            <section className="border-b border-brand-white/10 bg-[#020617] py-16 md:py-20">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="grid gap-6 md:grid-cols-3">
                        {Array.from({ length: HIGHLIGHT_COUNT }, (_, i) => {
                            const Icon = highlightIcons[i];
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.06 }}
                                    className="rounded-2xl border border-brand-white/10 bg-brand-white/2 p-6 md:p-8"
                                >
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-gold/25 bg-brand-navy text-brand-gold">
                                        <Icon className="h-5 w-5" aria-hidden />
                                    </div>
                                    <h2 className="mt-5 font-serif text-lg font-bold tracking-tight text-brand-white md:text-xl">
                                        {t(`commercialClaimsPage.highlights.${i}.title`)}
                                    </h2>
                                    <p className="mt-3 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                                        {t(`commercialClaimsPage.highlights.${i}.body`)}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                    <p className="mx-auto mt-10 max-w-3xl rounded-xl border border-brand-gold/15 bg-brand-navy/50 px-6 py-4 text-center font-sans text-sm leading-relaxed text-brand-slate/95">
                        {t("commercialClaimsPage.feeBanner")}
                    </p>
                    <p className="mx-auto mt-8 max-w-3xl text-center font-sans text-xs leading-relaxed text-brand-slate/70 md:text-sm">
                        {t("commercialClaimsPage.stat")}
                    </p>
                </div>
            </section>

            <section className="border-b border-brand-white/10 bg-[#020617] py-20 md:py-28">
                <div className="container mx-auto max-w-3xl px-4 text-center md:text-left">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.45em] text-brand-gold md:text-xs">
                        {t("commercialClaimsPage.licensedEyebrow")}
                    </span>
                    <h2 className="mt-3 font-serif text-3xl tracking-tighter text-brand-white md:text-4xl">
                        {t("commercialClaimsPage.licensedTitle")}
                    </h2>
                    <p className="mt-6 font-sans text-base leading-relaxed text-brand-slate md:text-lg">
                        {t("commercialClaimsPage.licensedBody")}
                    </p>
                </div>
            </section>

            <section className="border-b border-brand-white/10 bg-[#020617] py-20 md:py-28">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="mb-12 text-center md:mb-16">
                        <span className="font-sans text-[10px] font-bold uppercase tracking-[0.45em] text-brand-gold md:text-xs">
                            {t("commercialClaimsPage.servicesEyebrow")}
                        </span>
                        <h2 className="mt-3 font-serif text-3xl tracking-tighter text-brand-white md:text-4xl">
                            {t("commercialClaimsPage.servicesTitle")}
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl font-sans text-sm text-brand-slate md:text-base">
                            {t("commercialClaimsPage.servicesIntro")}
                        </p>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {Array.from({ length: SERVICE_COUNT }, (_, i) => {
                            const Icon = serviceIcons[i];
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="flex gap-4 rounded-2xl border border-brand-white/10 bg-brand-white/2 p-6 md:p-7"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-gold/20 bg-brand-navy text-brand-gold">
                                        <Icon className="h-5 w-5" aria-hidden />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-lg font-bold text-brand-white">
                                            {t(`commercialClaimsPage.services.${i}.title`)}
                                        </h3>
                                        <p className="mt-2 font-sans text-sm leading-relaxed text-brand-slate">
                                            {t(`commercialClaimsPage.services.${i}.body`)}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="border-b border-brand-white/10 bg-[#020617] py-20 md:py-28">
                <div className="container mx-auto max-w-3xl px-4">
                    <span className="block text-center font-sans text-[10px] font-bold uppercase tracking-[0.45em] text-brand-gold md:text-xs">
                        {t("commercialClaimsPage.advocateEyebrow")}
                    </span>
                    <h2 className="mt-3 text-center font-serif text-3xl tracking-tighter text-brand-white md:text-4xl">
                        {t("commercialClaimsPage.advocateTitle")}
                    </h2>
                    <p className="mt-8 font-sans text-base leading-relaxed text-brand-slate md:text-lg">
                        {t("commercialClaimsPage.advocateBody")}
                    </p>
                    <ul className="mx-auto mt-8 max-w-2xl space-y-4">
                        {Array.from({ length: ADVOCATE_BULLET_COUNT }, (_, i) => (
                            <li key={i} className="flex gap-3 font-sans text-sm text-brand-slate/95 md:text-[15px]">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden />
                                <span>{t(`commercialClaimsPage.advocateBullets.${i}`)}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-brand-white/10 bg-[#020617] py-20 md:py-28">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="mb-12 text-center">
                        <span className="font-sans text-[10px] font-bold uppercase tracking-[0.45em] text-brand-gold md:text-xs">
                            {t("commercialClaimsPage.typesEyebrow")}
                        </span>
                        <h2 className="mt-3 font-serif text-3xl tracking-tighter text-brand-white md:text-4xl">
                            {t("commercialClaimsPage.typesTitle")}
                        </h2>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                        {Array.from({ length: LOSS_COUNT }, (_, i) => {
                            const Icon = lossIcons[i];
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="flex gap-5 rounded-2xl border border-brand-white/10 bg-brand-navy/30 p-6 md:p-8"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-gold/20 bg-brand-navy text-brand-gold">
                                        <Icon className="h-6 w-6" aria-hidden />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-xl font-bold text-brand-white">
                                            {t(`commercialClaimsPage.lossTypes.${i}.title`)}
                                        </h3>
                                        <p className="mt-2 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                                            {t(`commercialClaimsPage.lossTypes.${i}.body`)}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="border-b border-brand-white/10 bg-[#020617] py-20 md:py-28">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="mb-14 text-center">
                        <span className="font-sans text-[10px] font-bold uppercase tracking-[0.45em] text-brand-gold md:text-xs">
                            {t("commercialClaimsPage.stepsEyebrow")}
                        </span>
                        <h2 className="mt-3 font-serif text-3xl tracking-tighter text-brand-white md:text-5xl">
                            {t("commercialClaimsPage.stepsTitle")}
                        </h2>
                        <p className="mx-auto mt-5 max-w-2xl font-sans text-sm text-brand-slate md:text-base">
                            {t("commercialClaimsPage.stepsIntro")}
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                        {Array.from({ length: STEP_COUNT }, (_, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="relative rounded-2xl border border-brand-gold/15 bg-brand-white/2 p-8 glass"
                            >
                                <span className="font-serif text-5xl font-black text-brand-gold/25">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <h3 className="mt-4 font-serif text-xl font-bold text-brand-white">
                                    {t(`commercialClaimsPage.steps.${i}.title`)}
                                </h3>
                                <p className="mt-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                                    {t(`commercialClaimsPage.steps.${i}.body`)}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#020617] py-20">
                <div className="container mx-auto max-w-2xl px-4 text-center">
                    <p className="font-serif text-xl text-brand-white/90 md:text-2xl">{t("commercialClaimsPage.ctaTitle")}</p>
                    <Button
                        asChild
                        size="lg"
                        className="mt-8 h-14 bg-brand-gold px-10 font-sans text-sm font-bold uppercase tracking-[0.15em] text-brand-navy hover:scale-[1.02]"
                    >
                        <Link href="/#contact">{t("commercialClaimsPage.ctaButton")}</Link>
                    </Button>
                    <p className="mt-8 font-sans text-xs text-brand-slate">
                        <Link href="/" className="text-brand-gold/90 hover:text-brand-gold">
                            {t("aboutPage.ctaBack")}
                        </Link>
                    </p>
                </div>
            </section>
        </>
    );
}
