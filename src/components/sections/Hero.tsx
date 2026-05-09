"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ShieldCheck, Scale, Microscope } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

import Image from "next/image";

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden noise-bg py-20">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0">
                    <Image
                        src="/images/properties/commercial.png"
                        alt={t("hero.imageAlt")}
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                        quality={72}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA3gAA//9k="
                    />
                    <div className="absolute inset-0 bg-[#020617]/75" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/20 via-transparent to-brand-navy" />
            </div>

            <div className="container relative z-10 mx-auto max-w-7xl px-4">
                <div className="flex flex-col items-center space-y-16 text-center md:space-y-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className="mt-2 inline-flex items-center gap-3 rounded-full border border-brand-gold/20 bg-white/[0.03] px-5 py-2.5 shadow-[0_0_20px_rgba(198,168,91,0.1)] md:mt-4"
                    >
                        <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-gold" />
                        <span className="mr-[-0.4em] font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold md:text-xs">
                            {t("hero.badge")}
                        </span>
                        <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-gold" />
                    </motion.div>

                    <div className="relative w-full max-w-5xl">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                            className="mb-4 font-sans text-[10px] font-bold uppercase tracking-[0.45em] text-brand-gold md:text-xs md:tracking-[0.5em]"
                        >
                            {t("hero.accentLine")}
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="font-serif text-4xl leading-[1.1] tracking-tighter sm:text-5xl md:text-7xl md:leading-[1] lg:text-8xl"
                        >
                            {t("hero.line1")} <br />
                            <span className="gold-gradient text-glow">{t("hero.line2")}</span> <br />
                            {t("hero.line3")}
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="mx-auto mt-8 grid w-full max-w-3xl grid-cols-1 divide-y divide-brand-white/10 rounded-[24px] border border-brand-gold/20 bg-white/[0.03] shadow-[0_0_40px_rgba(198,168,91,0.1)] md:mt-12 md:grid-cols-2 md:divide-x md:divide-y-0 md:rounded-[30px]"
                        >
                            <div className="flex min-h-[9.5rem] flex-col items-center justify-center gap-3 px-6 py-8 text-center sm:min-h-[10rem] md:min-h-[11rem] md:px-8 md:py-10">
                                <span className="font-serif text-2xl font-black gold-gradient md:text-4xl">{t("hero.sameDay")}</span>
                                <span className="w-full max-w-[280px] whitespace-pre-line font-sans text-[8px] uppercase leading-relaxed tracking-[0.22em] text-brand-white/70 md:text-[9px] md:tracking-[0.25em]">
                                    {t("hero.sameDaySub")}
                                </span>
                            </div>
                            <div className="flex min-h-[9.5rem] flex-col items-center justify-center gap-3 px-6 py-8 text-center sm:min-h-[10rem] md:min-h-[11rem] md:px-8 md:py-10">
                                <span className="font-serif text-2xl font-black gold-gradient md:text-4xl">{t("hero.weekly")}</span>
                                <span className="w-full max-w-[280px] whitespace-pre-line font-sans text-[8px] uppercase leading-relaxed tracking-[0.22em] text-brand-white/70 md:text-[9px] md:tracking-[0.25em]">
                                    {t("hero.weeklySub")}
                                </span>
                            </div>
                        </motion.div>

                        <div className="pointer-events-none absolute -top-12 left-1/2 -z-10 -translate-x-1/2 overflow-hidden font-serif text-[18vw] text-brand-white/[0.02] select-none">
                            BLACK
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="flex w-full flex-col items-center space-y-12"
                    >
                        <p className="max-w-2xl px-4 font-sans text-sm leading-relaxed tracking-wide text-brand-slate sm:text-base md:text-lg lg:text-xl">
                            {t("hero.body")}
                        </p>

                        <div className="flex w-full flex-col items-center gap-4 px-6 sm:w-auto sm:flex-row sm:px-0 md:gap-6">
                            <Button
                                size="lg"
                                className="group relative h-14 w-full overflow-hidden bg-brand-gold px-8 font-sans text-sm font-bold uppercase tracking-[0.1em] text-brand-navy shadow-[0_10px_40px_rgba(198,168,91,0.3)] transition-transform duration-300 hover:scale-105 md:h-16 md:w-auto md:px-10 md:text-lg"
                                asChild
                            >
                                <Link href="/#contact" className="flex items-center justify-center">
                                    {t("hero.ctaPrimary")}
                                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 md:h-5 md:w-5" />
                                </Link>
                            </Button>

                            <Link
                                href="/#philosophy"
                                className="group flex h-14 items-center justify-center px-8 font-sans text-sm uppercase tracking-[0.1em] text-brand-white/80 transition-colors hover:text-brand-gold md:h-16 md:px-10 md:text-lg"
                            >
                                {t("hero.ctaSecondary")}
                                <div className="ml-4 hidden h-[1px] w-12 bg-brand-white/20 transition-all group-hover:w-16 group-hover:bg-brand-gold sm:block" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 opacity-25 motion-reduce:hidden md:block">
                <div className="h-16 w-px animate-bounce bg-gradient-to-b from-brand-gold to-transparent [animation-duration:2.5s]" />
            </div>

            <div className="absolute bottom-12 left-12 hidden space-y-4 font-sans text-[10px] uppercase tracking-[0.4em] opacity-30 lg:block">
                <div className="flex items-center gap-4">
                    <ShieldCheck className="h-4 w-4 text-brand-gold" />
                    <span>{t("hero.side1")}</span>
                </div>
                <div className="flex items-center gap-4">
                    <Scale className="h-4 w-4 text-brand-gold" />
                    <span>{t("hero.side2")}</span>
                </div>
                <div className="flex items-center gap-4">
                    <Microscope className="h-4 w-4 text-brand-gold" />
                    <span>{t("hero.side3")}</span>
                </div>
            </div>
        </section>
    );
}
