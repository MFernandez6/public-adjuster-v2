"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ShieldCheck, Scale, Microscope } from "lucide-react";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useLanguage } from "@/contexts/language-context";

import Image from "next/image";

export default function Hero() {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLElement>(null);
    const prefersReducedMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ["0%", "0%"] : ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], prefersReducedMotion ? [1, 1] : [1, 0.9]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg py-20"
        >
            {/* Cinematic Background Elements */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    style={{ y, opacity, scale }}
                    className="absolute inset-0"
                >
                    <Image
                        src="/images/properties/commercial.png"
                        alt={t("hero.imageAlt")}
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                        quality={85}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA3gAA//9k="
                    />
                    <div className="absolute inset-0 bg-[#020617]/70 backdrop-blur-[1px]" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/20 via-transparent to-brand-navy" />
            </div>

            <div className="container relative z-10 px-4 mx-auto max-w-7xl">
                <div className="flex flex-col items-center text-center space-y-16 md:space-y-20">

                    {/* Animated Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="mt-2 md:mt-4 inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass border border-brand-gold/20 shadow-[0_0_20px_rgba(198,168,91,0.1)]"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                        <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] text-brand-gold font-bold mr-[-0.4em]">
                            {t("hero.badge")}
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                    </motion.div>

                    {/* Main Balanced Heading */}
                    <div className="relative w-full max-w-5xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1] md:leading-[1] tracking-tighter"
                        >
                            {t("hero.line1")} <br />
                            <span className="gold-gradient text-glow">{t("hero.line2")}</span> <br />
                            {t("hero.line3")}
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="mt-8 md:mt-12 mx-auto flex max-w-xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:gap-0 md:px-10 md:py-6 glass rounded-[24px] md:rounded-[30px] border-brand-gold/20 shadow-[0_0_40px_rgba(198,168,91,0.1)]"
                        >
                            <div className="flex flex-col items-center gap-1 border-b border-brand-white/10 px-2 pb-4 md:border-b-0 md:border-r md:px-6 md:pb-0 md:pr-10">
                                <span className="font-serif text-2xl font-black gold-gradient md:text-4xl">{t("hero.sameDay")}</span>
                                <span className="max-w-[240px] text-center font-sans text-[7px] uppercase tracking-[0.22em] text-brand-white/70 md:text-[9px] md:tracking-[0.25em]">
                                    {t("hero.sameDaySub")}
                                </span>
                            </div>
                            <div className="flex flex-col items-center gap-1 px-2 pt-2 md:px-6 md:pt-0 md:pl-10">
                                <span className="font-serif text-2xl font-black text-brand-white/95 md:text-4xl">{t("hero.weekly")}</span>
                                <span className="max-w-[240px] text-center font-sans text-[7px] uppercase tracking-[0.22em] text-brand-white/70 md:text-[9px] md:tracking-[0.25em]">
                                    {t("hero.weeklySub")}
                                </span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.02 }}
                            transition={{ duration: 2, delay: 1 }}
                            className="absolute -top-12 left-1/2 -translate-x-1/2 -z-10 font-serif text-[18vw] pointer-events-none select-none overflow-hidden"
                        >
                            BLACK
                        </motion.div>
                    </div>

                    {/* Value Prop & CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col items-center space-y-12 w-full"
                    >
                        <p className="max-w-2xl text-brand-slate text-sm sm:text-base md:text-lg lg:text-xl font-sans leading-relaxed tracking-wide px-4">
                            {t("hero.body")}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full sm:w-auto px-6 sm:px-0">
                            <Button size="lg" className="h-14 md:h-16 w-full sm:w-auto px-8 md:px-10 text-sm md:text-lg font-sans tracking-[0.1em] uppercase bg-brand-gold text-brand-navy hover:scale-105 transition-transform duration-300 shadow-[0_10px_40px_rgba(198,168,91,0.3)] group relative overflow-hidden" asChild>
                                <Link href="/#contact" className="relative z-10 flex items-center justify-center">
                                    {t("hero.ctaPrimary")}
                                    <ChevronRight className="ml-2 w-4 md:w-5 h-4 md:h-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>

                            <Link href="/#philosophy" className="h-14 md:h-16 px-8 md:px-10 text-sm md:text-lg font-sans tracking-[0.1em] uppercase text-brand-white/80 hover:text-brand-gold transition-colors flex items-center justify-center group">
                                {t("hero.ctaSecondary")}
                                <div className="hidden sm:block ml-4 w-12 h-[1px] bg-brand-white/20 group-hover:w-16 group-hover:bg-brand-gold transition-all" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Side Details */}
            <div className="hidden lg:block absolute left-12 bottom-12 space-y-4 opacity-30 font-sans text-[10px] tracking-[0.4em] uppercase">
                <div className="flex items-center gap-4">
                    <ShieldCheck className="w-4 h-4 text-brand-gold" />
                    <span>{t("hero.side1")}</span>
                </div>
                <div className="flex items-center gap-4">
                    <Scale className="w-4 h-4 text-brand-gold" />
                    <span>{t("hero.side2")}</span>
                </div>
                <div className="flex items-center gap-4">
                    <Microscope className="w-4 h-4 text-brand-gold" />
                    <span>{t("hero.side3")}</span>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-brand-gold to-transparent" />
            </motion.div>
        </section>
    );
}
