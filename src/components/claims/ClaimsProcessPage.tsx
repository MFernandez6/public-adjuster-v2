"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    Phone,
    UserCheck,
    FileSignature,
    FileSearch,
    Camera,
    ClipboardList,
    Scale,
    Snowflake,
    Wind,
    Waves,
    Flame,
    Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

const STEP_COUNT = 3;
const OPS_COUNT = 7;
const LOSS_COUNT = 4;
const HOME_BULLET_COUNT = 3;

const opIcons = [Phone, UserCheck, FileSignature, FileSearch, Camera, ClipboardList, Scale] as const;
const lossIcons = [Snowflake, Wind, Waves, Flame] as const;

export default function ClaimsProcessPage() {
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
                        {t("claimsProcessPage.heroEyebrow")}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 }}
                        className="mt-6 max-w-5xl mx-auto font-serif text-4xl leading-[1.08] tracking-tighter text-brand-white sm:text-5xl md:text-7xl lg:text-8xl"
                    >
                        <span className="block">{t("claimsProcessPage.heroTitleLine1")}</span>
                        <span className="block gold-gradient text-glow">{t("claimsProcessPage.heroTitleLine2")}</span>
                        <span className="block">{t("claimsProcessPage.heroTitleLine3")}</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mx-auto mt-8 max-w-3xl font-sans text-base leading-relaxed text-brand-slate md:text-lg"
                    >
                        {t("claimsProcessPage.heroBody")}
                    </motion.p>
                </div>
            </section>

            {/* Three steps */}
            <section className="border-b border-brand-white/10 bg-[#020617] py-20 md:py-28">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="mb-14 text-center md:mb-20">
                        <span className="font-sans text-[10px] font-bold uppercase tracking-[0.45em] text-brand-gold md:text-xs">
                            {t("claimsProcessPage.stepsEyebrow")}
                        </span>
                        <h2 className="mt-3 font-serif text-3xl tracking-tighter text-brand-white md:text-5xl">
                            {t("claimsProcessPage.stepsTitle")}
                        </h2>
                        <p className="mx-auto mt-5 max-w-2xl font-sans text-sm leading-relaxed text-brand-slate md:text-base">
                            {t("claimsProcessPage.stepsIntro")}
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                        {Array.from({ length: STEP_COUNT }, (_, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="relative rounded-2xl border border-brand-white/10 bg-brand-white/2 p-8 glass"
                            >
                                <span className="font-serif text-5xl font-black text-brand-gold/25">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <h3 className="mt-4 font-serif text-xl font-bold tracking-tight text-brand-white md:text-2xl">
                                    {t(`claimsProcessPage.steps.${i}.title`)}
                                </h3>
                                <p className="mt-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                                    {t(`claimsProcessPage.steps.${i}.body`)}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mx-auto mt-12 max-w-3xl rounded-xl border border-brand-gold/15 bg-brand-navy/40 px-6 py-5 text-center font-sans text-sm leading-relaxed text-brand-slate/90"
                    >
                        {t("claimsProcessPage.commCallout")}
                    </motion.p>
                </div>
            </section>

            {/* Order of operations */}
            <section className="border-b border-brand-white/10 bg-[#020617] py-20 md:py-28">
                <div className="container mx-auto max-w-3xl px-4">
                    <div className="mb-12 text-center md:mb-16">
                        <span className="font-sans text-[10px] font-bold uppercase tracking-[0.45em] text-brand-gold md:text-xs">
                            {t("claimsProcessPage.opsEyebrow")}
                        </span>
                        <h2 className="mt-3 font-serif text-3xl tracking-tighter text-brand-white md:text-4xl">
                            {t("claimsProcessPage.opsTitle")}
                        </h2>
                        <p className="mx-auto mt-4 max-w-xl font-sans text-sm text-brand-slate md:text-base">
                            {t("claimsProcessPage.opsIntro")}
                        </p>
                    </div>
                    <ol className="relative space-y-0 border-l border-brand-gold/20 pl-8 md:pl-10">
                        {Array.from({ length: OPS_COUNT }, (_, i) => {
                            const Icon = opIcons[i];
                            return (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -8 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="relative pb-12 last:pb-0"
                                >
                                    <span className="absolute -left-[33px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-brand-gold/30 bg-brand-navy text-brand-gold md:-left-[41px] md:h-9 md:w-9">
                                        <Icon className="h-3.5 w-3.5 md:h-4 md:w-4" aria-hidden />
                                    </span>
                                    <h3 className="font-serif text-lg font-bold text-brand-white md:text-xl">
                                        {t(`claimsProcessPage.operations.${i}.title`)}
                                    </h3>
                                    <p className="mt-2 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                                        {t(`claimsProcessPage.operations.${i}.body`)}
                                    </p>
                                </motion.li>
                            );
                        })}
                    </ol>
                </div>
            </section>

            {/* Homeowners & Commercial */}
            <section className="border-b border-brand-white/10 bg-[#020617] py-20 md:py-28">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="rounded-2xl border border-brand-gold/15 bg-brand-white/2 p-8 md:p-10"
                        >
                            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold">
                                {t("claimsProcessPage.homeownerEyebrow")}
                            </span>
                            <h2 className="mt-3 font-serif text-2xl tracking-tighter text-brand-white md:text-3xl">
                                {t("claimsProcessPage.homeownerTitle")}
                            </h2>
                            <p className="mt-5 font-sans text-sm leading-relaxed text-brand-slate md:text-base">
                                {t("claimsProcessPage.homeownerBody")}
                            </p>
                            <ul className="mt-8 space-y-4">
                                {Array.from({ length: HOME_BULLET_COUNT }, (_, i) => (
                                    <li key={i} className="flex gap-3 font-sans text-sm text-brand-slate/95 md:text-[15px]">
                                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden />
                                        <span>{t(`claimsProcessPage.homeownerBullets.${i}`)}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.08 }}
                            className="rounded-2xl border border-brand-white/10 bg-brand-navy/40 p-8 md:p-10"
                        >
                            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold">
                                {t("claimsProcessPage.commercialEyebrow")}
                            </span>
                            <h2 className="mt-3 font-serif text-2xl tracking-tighter text-brand-white md:text-3xl">
                                {t("claimsProcessPage.commercialTitle")}
                            </h2>
                            <p className="mt-5 font-sans text-sm leading-relaxed text-brand-slate md:text-base">
                                {t("claimsProcessPage.commercialBody")}
                            </p>
                            <ul className="mt-8 space-y-4">
                                {Array.from({ length: HOME_BULLET_COUNT }, (_, i) => (
                                    <li key={i} className="flex gap-3 font-sans text-sm text-brand-slate/95 md:text-[15px]">
                                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden />
                                        <span>{t(`claimsProcessPage.commercialBullets.${i}`)}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Loss types */}
            <section className="border-b border-brand-white/10 bg-[#020617] py-20 md:py-28">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="mb-12 text-center">
                        <span className="font-sans text-[10px] font-bold uppercase tracking-[0.45em] text-brand-gold md:text-xs">
                            {t("claimsProcessPage.typesEyebrow")}
                        </span>
                        <h2 className="mt-3 font-serif text-3xl tracking-tighter text-brand-white md:text-4xl">
                            {t("claimsProcessPage.typesTitle")}
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
                                    className="flex gap-5 rounded-2xl border border-brand-white/10 bg-brand-white/2 p-6 md:p-8"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-gold/20 bg-brand-navy text-brand-gold">
                                        <Icon className="h-6 w-6" aria-hidden />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-xl font-bold text-brand-white">
                                            {t(`claimsProcessPage.lossTypes.${i}.title`)}
                                        </h3>
                                        <p className="mt-2 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                                            {t(`claimsProcessPage.lossTypes.${i}.body`)}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                    <p className="mx-auto mt-12 max-w-3xl text-center font-sans text-xs leading-relaxed text-brand-slate/70 md:text-sm">
                        {t("claimsProcessPage.stat")}
                    </p>
                </div>
            </section>

            <section className="bg-[#020617] py-20">
                <div className="container mx-auto max-w-2xl px-4 text-center">
                    <p className="font-serif text-xl text-brand-white/90 md:text-2xl">{t("claimsProcessPage.ctaTitle")}</p>
                    <Button
                        asChild
                        size="lg"
                        className="mt-8 h-14 bg-brand-gold px-10 font-sans text-sm font-bold uppercase tracking-[0.15em] text-brand-navy hover:scale-[1.02]"
                    >
                        <Link href="/#contact">{t("claimsProcessPage.ctaButton")}</Link>
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
