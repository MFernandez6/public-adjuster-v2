"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Microscope, Scale, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";

const principleMeta = [
    { icon: <Microscope className="w-9 h-9" />, color: "from-brand-gold/20 to-transparent" },
    { icon: <Shield className="w-9 h-9" />, color: "from-brand-slate/20 to-transparent" },
    { icon: <Scale className="w-9 h-9" />, color: "from-brand-gold/10 to-transparent" },
] as const;

export default function Philosophy() {
    const { t } = useLanguage();

    return (
        <section id="philosophy" className="scroll-mt-24 py-32 bg-[#020617] text-brand-white relative overflow-hidden">
            {/* Decorative Blur */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] -mr-64 -mt-32" />

            <div className="container mx-auto px-4 relative z-10 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-24 items-start py-12">

                    {/* Legend / Intro */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="lg:sticky lg:top-32 max-w-lg space-y-12"
                    >
                        <div className="space-y-6">
                            <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.5em] text-brand-gold font-bold">
                                {t("philosophy.eyebrow")}
                            </span>
                            <h2 className="font-serif text-4xl md:text-6xl leading-[0.95] tracking-tighter">
                                {t("philosophy.h2a")} <br />
                                {t("philosophy.h2b")} <br />
                                <span className="text-brand-slate opacity-70">{t("philosophy.h2c")}</span>
                            </h2>
                        </div>

                        <p className="text-brand-slate text-lg leading-relaxed font-sans tracking-wide">
                            {t("philosophy.intro")}
                        </p>

                        <Link
                            href="/about#adjusters"
                            className="pt-10 border-t border-brand-white/10 flex items-center gap-6 group cursor-pointer transition-colors hover:border-brand-gold/20"
                        >
                            <div className="w-14 h-14 rounded-full border border-brand-gold/30 flex items-center justify-center group-hover:bg-brand-gold group-hover:border-brand-gold transition-all duration-500">
                                <ArrowUpRight className="w-5 h-5 text-brand-gold group-hover:text-brand-navy transition-colors" />
                            </div>
                            <span className="font-serif text-xl font-bold tracking-tight group-hover:text-brand-gold transition-colors">
                                {t("philosophy.meetTeam")}
                            </span>
                        </Link>

                        {/* Forensic Visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-2xl overflow-hidden border border-brand-gold/20 aspect-video group"
                        >
                            <Image
                                src="/images/properties/forensic.png"
                                alt={t("philosophy.imageAlt")}
                                fill
                                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                quality={85}
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA3gAA//9k="
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-4">
                                <span className="text-[8px] uppercase tracking-[0.3em] text-brand-gold font-bold">{t("philosophy.protocol")}</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Principles Grid */}
                    <div className="flex-1 grid gap-8 w-full">
                        {principleMeta.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.2 }}
                                whileHover={{ y: -5 }}
                                className={`group relative p-10 rounded-2xl glass overflow-hidden ${i % 2 === 1 ? 'lg:translate-x-8' : ''}`}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                                    <div className="p-4 rounded-xl bg-brand-navy border border-brand-white/5 text-brand-gold group-hover:scale-110 group-hover:text-white transition-all duration-500 shadow-xl">
                                        {p.icon}
                                    </div>
                                    <div className="space-y-3 flex-1">
                                        <h3 className="font-serif text-2xl font-bold tracking-tight">{t(`philosophy.principles.${i}.title`)}</h3>
                                        <p className="text-brand-slate text-base md:text-lg leading-relaxed max-w-md">
                                            {t(`philosophy.principles.${i}.description`)}
                                        </p>
                                    </div>
                                    <div className="hidden md:block opacity-0 group-hover:opacity-30 transition-opacity font-serif text-5xl font-black text-brand-white uppercase select-none">
                                        {t("philosophy.hoverWord")}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
