"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, ClipboardList, FileSignature, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

const FAQ_COUNT = 7;
const KNOWHOW_COUNT = 3;

const topicCards = [
    { id: "inspection" as const, icon: ClipboardList },
    { id: "lor" as const, icon: FileSignature },
    { id: "materials" as const, icon: Microscope },
];

export default function PublicAdjusterFaqPage() {
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
                        {t("faqPage.heroEyebrow")}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 }}
                        className="mt-4 font-serif text-4xl leading-[1.05] tracking-tighter text-brand-white md:text-6xl"
                    >
                        {t("faqPage.heroTitle")}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mx-auto mt-8 max-w-3xl font-sans text-base leading-relaxed text-brand-slate md:text-lg"
                    >
                        {t("faqPage.heroBody")}
                    </motion.p>
                </div>
            </section>

            <section className="border-b border-brand-white/10 bg-[#020617] py-14 md:py-18">
                <div className="container mx-auto max-w-3xl px-4">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.45em] text-brand-gold md:text-xs">
                        {t("faqPage.floridaEyebrow")}
                    </span>
                    <h2 className="mt-3 font-serif text-2xl tracking-tighter text-brand-white md:text-3xl">
                        {t("faqPage.floridaTitle")}
                    </h2>
                    <p className="mt-5 font-sans text-base leading-relaxed text-brand-slate md:text-[17px]">
                        {t("faqPage.floridaBody")}
                    </p>
                    <p className="mt-6 font-sans text-sm text-brand-slate/80">
                        {t("faqPage.floridaHint")}{" "}
                        <a
                            href={t("faqPage.floridaLinkUrl")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-gold underline decoration-brand-gold/40 underline-offset-4 hover:text-brand-white"
                        >
                            {t("faqPage.floridaLinkLabel")}
                        </a>
                    </p>
                </div>
            </section>

            <section className="border-b border-brand-white/10 bg-[#020617] py-12 md:py-16">
                <div className="container mx-auto max-w-5xl px-4">
                    <div className="grid gap-4 md:grid-cols-3">
                        {topicCards.map(({ id, icon: Icon }, i) => (
                            <motion.a
                                key={id}
                                href={`#${id}`}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="group flex flex-col rounded-2xl border border-brand-white/10 bg-brand-white/2 p-6 transition-colors hover:border-brand-gold/30 hover:bg-brand-white/4"
                            >
                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-gold/20 bg-brand-navy text-brand-gold">
                                        <Icon className="h-5 w-5" aria-hidden />
                                    </div>
                                    <ChevronDown className="h-4 w-4 text-brand-slate/50 transition-transform group-hover:translate-y-0.5 group-hover:text-brand-gold" />
                                </div>
                                <h3 className="mt-4 font-serif text-lg font-bold leading-snug text-brand-white">
                                    {id === "inspection" && t("faqPage.topicInspectionTitle")}
                                    {id === "lor" && t("faqPage.topicLorTitle")}
                                    {id === "materials" && t("faqPage.topicMaterialsTitle")}
                                </h3>
                                <p className="mt-3 font-sans text-sm leading-relaxed text-brand-slate">
                                    {id === "inspection" && t("faqPage.topicInspectionLead")}
                                    {id === "lor" && t("faqPage.topicLorLead")}
                                    {id === "materials" && t("faqPage.topicMaterialsLead")}
                                </p>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            <section id="inspection" className="scroll-mt-28 border-b border-brand-white/10 bg-[#020617] py-16 md:py-22">
                <div className="container mx-auto max-w-3xl px-4">
                    <h2 className="font-serif text-2xl tracking-tighter text-brand-white md:text-3xl">
                        {t("faqPage.topicInspectionTitle")}
                    </h2>
                    <p className="mt-6 font-sans text-base leading-relaxed text-brand-slate md:text-[17px]">
                        {t("faqPage.topicInspectionBody")}
                    </p>
                </div>
            </section>

            <section id="lor" className="scroll-mt-28 border-b border-brand-white/10 bg-[#020617] py-16 md:py-22">
                <div className="container mx-auto max-w-3xl px-4">
                    <h2 className="font-serif text-2xl tracking-tighter text-brand-white md:text-3xl">
                        {t("faqPage.topicLorTitle")}
                    </h2>
                    <p className="mt-6 font-sans text-base leading-relaxed text-brand-slate md:text-[17px]">
                        {t("faqPage.topicLorBody")}
                    </p>
                </div>
            </section>

            <section id="materials" className="scroll-mt-28 border-b border-brand-white/10 bg-[#020617] py-16 md:py-22">
                <div className="container mx-auto max-w-3xl px-4">
                    <h2 className="font-serif text-2xl tracking-tighter text-brand-white md:text-3xl">
                        {t("faqPage.topicMaterialsTitle")}
                    </h2>
                    <p className="mt-6 font-sans text-base leading-relaxed text-brand-slate md:text-[17px]">
                        {t("faqPage.topicMaterialsBody")}
                    </p>
                </div>
            </section>

            <section className="border-b border-brand-white/10 bg-[#020617] py-16 md:py-24">
                <div className="container mx-auto max-w-3xl px-4">
                    <h2 className="text-center font-serif text-3xl tracking-tighter text-brand-white md:text-4xl">
                        {t("faqPage.faqSectionTitle")}
                    </h2>
                    <div className="mt-10 space-y-3">
                        {Array.from({ length: FAQ_COUNT }, (_, i) => (
                            <details
                                key={i}
                                className="group rounded-xl border border-brand-white/10 bg-brand-white/2 px-5 py-4 transition-colors open:border-brand-gold/25 open:bg-brand-navy/40"
                            >
                                <summary className="cursor-pointer list-none font-sans text-sm font-semibold text-brand-white md:text-base [&::-webkit-details-marker]:hidden">
                                    <span className="flex items-start justify-between gap-4">
                                        <span>{t(`faqPage.faqItems.${i}.q`)}</span>
                                        <ChevronDown className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold/70 transition-transform group-open:rotate-180" />
                                    </span>
                                </summary>
                                <p className="mt-4 border-t border-brand-white/10 pt-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                                    {t(`faqPage.faqItems.${i}.a`)}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-brand-white/10 bg-[#020617] py-16 md:py-22">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="mb-10 text-center">
                        <span className="font-sans text-[10px] font-bold uppercase tracking-[0.45em] text-brand-gold md:text-xs">
                            {t("faqPage.knowHowEyebrow")}
                        </span>
                        <h2 className="mt-3 font-serif text-3xl tracking-tighter text-brand-white md:text-4xl">
                            {t("faqPage.knowHowTitle")}
                        </h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {Array.from({ length: KNOWHOW_COUNT }, (_, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="rounded-2xl border border-brand-white/10 bg-brand-navy/30 p-6 md:p-8"
                            >
                                <h3 className="font-serif text-xl font-bold text-brand-white">
                                    {t(`faqPage.knowHowCards.${i}.title`)}
                                </h3>
                                <p className="mt-4 font-sans text-sm leading-relaxed text-brand-slate">
                                    {t(`faqPage.knowHowCards.${i}.body`)}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#020617] py-20">
                <div className="container mx-auto max-w-2xl px-4 text-center">
                    <p className="font-serif text-xl text-brand-white/90 md:text-2xl">{t("faqPage.ctaTitle")}</p>
                    <Button
                        asChild
                        size="lg"
                        className="mt-8 h-14 bg-brand-gold px-10 font-sans text-sm font-bold uppercase tracking-[0.15em] text-brand-navy hover:scale-[1.02]"
                    >
                        <Link href="/#contact">{t("faqPage.ctaButton")}</Link>
                    </Button>
                    <p className="mt-8 font-sans text-xs text-brand-slate">
                        <Link href="/about" className="text-brand-gold/90 hover:text-brand-gold">
                            {t("faqPage.backLink")}
                        </Link>
                    </p>
                </div>
            </section>
        </>
    );
}
