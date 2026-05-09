"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Briefcase,
    Code2,
    GraduationCap,
    Sparkles,
    ChevronRight,
    Shield,
    Lightbulb,
    Compass,
    Heart,
    Mountain,
    Microscope,
    User,
} from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { publicAdjusterLicenseNumber } from "@/config/site";

const EDU_COUNT = 6;
const VALUES_COUNT = 5;

const valueIcons = [Shield, Lightbulb, Compass, Heart, Mountain] as const;

export default function FoundingAdjusterPage() {
    const { t } = useLanguage();

    return (
        <>
            {/* Page intro */}
            <section className="relative overflow-hidden border-b border-brand-white/10 bg-[#020617] pb-16 pt-28 md:pb-20 md:pt-32">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(198,168,91,0.08),transparent_55%)]" />
                <div className="container relative z-10 mx-auto max-w-3xl px-4 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="font-sans text-[10px] font-bold uppercase tracking-[0.45em] text-brand-gold md:text-xs"
                    >
                        {t("aboutPage.brand")}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.05 }}
                        className="mt-4 font-serif text-4xl leading-[0.98] tracking-tighter text-brand-white md:text-6xl"
                    >
                        {t("aboutPage.heroTitle")} <span className="gold-gradient">{t("aboutPage.heroTitleAccent")}</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.12 }}
                        className="mt-6 font-sans text-sm leading-relaxed text-brand-slate md:text-base"
                    >
                        {t("aboutPage.heroSub")}
                    </motion.p>
                </div>
            </section>

            {/* Who we are */}
            <section
                id="who-we-are"
                className="scroll-mt-28 border-b border-brand-white/10 bg-[#020617] py-20 md:py-28"
            >
                <div className="container mx-auto max-w-3xl px-4">
                    <div className="mb-10 text-center">
                        <span className="font-sans text-[10px] font-bold uppercase tracking-[0.45em] text-brand-gold md:text-xs">
                            {t("aboutPage.whoEyebrow")}
                        </span>
                        <h2 className="mt-2 font-serif text-3xl tracking-tighter text-brand-white md:text-4xl">
                            {t("aboutPage.whoHeading")}
                        </h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 font-sans text-base leading-relaxed tracking-wide text-brand-slate md:text-lg"
                    >
                        <p>{t("aboutPage.whoP1")}</p>
                        <p>{t("aboutPage.whoP2")}</p>
                        <p className="text-brand-white/90">{t("aboutPage.whoP3")}</p>
                    </motion.div>
                </div>
            </section>

            {/* Adjusters */}
            <section id="adjusters" className="scroll-mt-28 bg-[#020617] pb-8 pt-20 md:pt-28">
                <div className="container mx-auto max-w-5xl px-4">
                    {/* Mission */}
                    <div className="mb-20 text-center md:mb-24">
                        <span className="font-sans text-[10px] font-bold uppercase tracking-[0.45em] text-brand-gold md:text-xs">
                            {t("aboutPage.adjustersMissionEyebrow")}
                        </span>
                        <h2 className="mx-auto mt-4 max-w-4xl font-serif text-3xl leading-[1.05] tracking-tighter text-brand-white sm:text-4xl md:text-6xl">
                            <span className="block">{t("aboutPage.adjustersMissionTitleLine1")}</span>
                            <span className="block gold-gradient text-glow">{t("aboutPage.adjustersMissionTitleLine2")}</span>
                        </h2>
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55 }}
                            className="mx-auto mt-10 max-w-3xl space-y-6 text-left font-sans text-base leading-relaxed text-brand-slate md:text-center md:text-lg"
                        >
                            <p>{t("aboutPage.adjustersMissionP1")}</p>
                            <p className="text-brand-white/90">{t("aboutPage.adjustersMissionP2")}</p>
                        </motion.div>
                    </div>

                    {/* Values */}
                    <div className="mb-20 border-y border-brand-white/10 py-16 md:mb-24 md:py-20">
                        <div className="mb-12 text-center">
                            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.45em] text-brand-gold md:text-xs">
                                {t("aboutPage.valuesEyebrow")}
                            </span>
                            <h3 className="mt-3 font-serif text-3xl tracking-tighter text-brand-white md:text-4xl">
                                {t("aboutPage.valuesTitle")}
                            </h3>
                            <p className="mx-auto mt-4 max-w-2xl font-sans text-sm leading-relaxed text-brand-slate md:text-base">
                                {t("aboutPage.valuesIntro")}
                            </p>
                        </div>
                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                            {Array.from({ length: VALUES_COUNT }, (_, i) => {
                                const Icon = valueIcons[i];
                                return (
                                    <motion.article
                                        key={i}
                                        initial={{ opacity: 0, y: 14 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: Math.min(i * 0.05, 0.25) }}
                                        className="flex flex-col rounded-2xl border border-brand-white/10 bg-brand-white/2 p-6 text-left transition-colors hover:border-brand-gold/25"
                                    >
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-gold/20 bg-brand-navy text-brand-gold">
                                            <Icon className="h-5 w-5" aria-hidden />
                                        </div>
                                        <h4 className="mt-4 font-serif text-lg font-bold tracking-tight text-brand-white">
                                            {t(`aboutPage.values.${i}.title`)}
                                        </h4>
                                        <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-brand-slate">
                                            {t(`aboutPage.values.${i}.body`)}
                                        </p>
                                    </motion.article>
                                );
                            })}
                        </div>
                    </div>

                    {/* Field capability */}
                    <div className="mb-20 rounded-2xl border border-brand-gold/20 bg-[radial-gradient(ellipse_at_50%_0%,rgba(198,168,91,0.06),transparent_55%)] p-8 md:mb-24 md:p-12">
                        <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-brand-gold/25 bg-brand-navy text-brand-gold">
                                <Microscope className="h-7 w-7" aria-hidden />
                            </div>
                            <div>
                                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.45em] text-brand-gold md:text-xs">
                                    {t("aboutPage.adjustersCapabilityEyebrow")}
                                </span>
                                <h3 className="mt-3 font-serif text-2xl tracking-tighter text-brand-white md:text-3xl">
                                    {t("aboutPage.adjustersCapabilityTitle")}
                                </h3>
                                <p className="mt-5 font-sans text-base leading-relaxed text-brand-slate md:text-[17px]">
                                    {t("aboutPage.adjustersCapabilityBody")}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16 text-center">
                        <span className="font-sans text-[10px] font-bold uppercase tracking-[0.45em] text-brand-gold md:text-xs">
                            {t("aboutPage.teamEyebrow")}
                        </span>
                        <h2 className="mt-2 font-serif text-3xl tracking-tighter text-brand-white md:text-5xl">
                            {t("aboutPage.teamHeading")}
                        </h2>
                        <p className="mx-auto mt-3 max-w-xl font-sans text-xs leading-relaxed text-brand-slate md:mt-4 md:text-sm">
                            {t("aboutPage.teamSub")}
                        </p>
                    </div>

                    {/* Miguel — founding adjuster */}
                    <article className="rounded-2xl border border-brand-gold/20 bg-brand-white/2 p-6 md:p-10">
                        <div className="border-b border-brand-white/10 pb-6 md:pb-8">
                            <div className="flex flex-col items-center gap-5 md:flex-row md:items-start md:justify-between md:gap-8">
                                <div className="min-w-0 flex-1 text-center md:text-left">
                                    <p className="font-sans text-[10px] font-bold uppercase tracking-[0.35em] text-brand-gold md:text-xs">
                                        {t("aboutPage.founding")}
                                    </p>
                                    <h3 className="mt-2 font-serif text-3xl tracking-tighter text-brand-white sm:text-4xl md:text-5xl lg:text-6xl">
                                        MIGUEL A. <span className="gold-gradient">FERNANDEZ</span>
                                        <span className="text-brand-white/85">, MSc.</span>
                                    </h3>
                                    <p className="mt-3 font-sans text-xs leading-snug text-brand-slate/90 md:mt-4 md:text-sm">
                                        {t("aboutPage.miguelLine")}
                                    </p>
                                    {publicAdjusterLicenseNumber.trim().length > 0 ? (
                                        <p className="mt-3 rounded-lg border border-brand-white/10 bg-brand-navy/60 px-3 py-2.5 font-sans text-[10px] uppercase leading-snug tracking-[0.15em] text-brand-gold/90 md:mt-4 md:text-[11px] md:tracking-[0.18em]">
                                            <span className="mr-2 tracking-[0.25em]">{t("aboutPage.paLicenseBadge")}</span>
                                            <span className="tracking-normal text-brand-white">
                                                {publicAdjusterLicenseNumber.trim()}
                                            </span>
                                        </p>
                                    ) : null}
                                </div>

                                <div
                                    className="flex aspect-square w-[7.75rem] shrink-0 items-center justify-center rounded-2xl border border-dashed border-brand-white/18 bg-brand-navy/50 sm:w-[8.75rem] md:mt-0.5 md:w-[9.5rem]"
                                    role="img"
                                    aria-label={t("aboutPage.headshotPlaceholderAria")}
                                >
                                    <User
                                        strokeWidth={1}
                                        className="h-14 w-14 text-brand-white/28 sm:h-16 sm:w-16"
                                        aria-hidden
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-10">
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.55 }}
                                className="lg:col-span-5"
                            >
                                <p className="font-sans text-sm leading-relaxed text-brand-slate md:text-[15px] md:leading-relaxed">
                                    {t("aboutPage.miguelBio")}
                                </p>
                                <div className="mt-5 flex flex-wrap gap-2 font-sans text-[10px] uppercase tracking-[0.22em] text-brand-white/55 md:text-[11px] md:tracking-[0.26em]">
                                    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-white/10 bg-brand-white/3 px-3 py-1.5 md:gap-2 md:px-3.5 md:py-2">
                                        <Sparkles className="h-3.5 w-3.5 text-brand-gold" aria-hidden />
                                        {t("aboutPage.chip1")}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-white/10 bg-brand-white/3 px-3 py-1.5 md:gap-2 md:px-3.5 md:py-2">
                                        <Briefcase className="h-3.5 w-3.5 text-brand-gold" aria-hidden />
                                        {t("aboutPage.chip2")}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-white/10 bg-brand-white/3 px-3 py-1.5 md:gap-2 md:px-3.5 md:py-2">
                                        <Code2 className="h-3.5 w-3.5 text-brand-gold" aria-hidden />
                                        {t("aboutPage.chip3")}
                                    </span>
                                </div>
                            </motion.div>

                            <div className="lg:col-span-7">
                                <div className="mb-4 flex items-start justify-between gap-4">
                                    <div>
                                        <span className="font-sans text-[10px] font-bold uppercase tracking-[0.45em] text-brand-gold md:text-xs">
                                            {t("aboutPage.eduEyebrow")}
                                        </span>
                                        <h4 className="mt-1.5 font-serif text-lg tracking-tighter text-brand-white md:text-xl">
                                            {t("aboutPage.eduHeading")}
                                        </h4>
                                    </div>
                                    <div
                                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-white/10 bg-brand-navy text-brand-gold md:h-12 md:w-12"
                                        aria-hidden
                                    >
                                        <GraduationCap className="h-5 w-5 md:h-6 md:w-6" />
                                    </div>
                                </div>
                                <ul className="flex flex-col gap-3 font-sans md:gap-3.5">
                                    {Array.from({ length: EDU_COUNT }, (_, i) => (
                                        <li
                                            key={i}
                                            className="rounded-lg border border-brand-white/5 bg-brand-white/2 px-3 py-2.5 md:px-3.5 md:py-3"
                                        >
                                            <div className="flex gap-2.5 md:gap-3">
                                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-gold/70 md:mt-2.5" />
                                                <div className="min-w-0 flex-1">
                                                    <p className="text-[13px] font-semibold leading-snug text-brand-white md:text-sm">
                                                        {t(`aboutPage.educationCredentials.${i}.title`)}
                                                    </p>
                                                    <p className="mt-1.5 text-[12px] leading-relaxed text-brand-white/80 md:mt-2 md:text-[13px] md:leading-relaxed">
                                                        {t(`aboutPage.educationCredentials.${i}.detail`)}
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <section className="border-t border-brand-white/10 bg-[#020617] py-20">
                <div className="container mx-auto max-w-2xl px-4 text-center">
                    <p className="font-serif text-xl text-brand-white/90 md:text-2xl">{t("aboutPage.cta")}</p>
                    <Button
                        asChild
                        size="lg"
                        className="mt-8 h-14 bg-brand-gold px-10 font-sans text-sm font-bold uppercase tracking-[0.15em] text-brand-navy hover:scale-[1.02]"
                    >
                        <Link href="/#contact" className="inline-flex items-center gap-2">
                            {t("aboutPage.ctaBtn")}
                            <ChevronRight className="h-4 w-4" />
                        </Link>
                    </Button>
                    <p className="mt-6 font-sans text-xs text-brand-slate">
                        <Link href="/" className="text-brand-gold/90 hover:text-brand-gold">
                            {t("aboutPage.ctaBack")}
                        </Link>
                    </p>
                </div>
            </section>
        </>
    );
}
