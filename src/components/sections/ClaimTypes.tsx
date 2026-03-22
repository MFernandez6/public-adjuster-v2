"use client";

import { motion } from "framer-motion";
import { Wind, Flame, CloudLightning, Waves, Ghost, Sparkles } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";

/** Order: wind, fire, storm, hail, water, vandalism — aligned with `claims.items` indices */
const claimMeta = [
    { icon: <Wind className="w-8 h-8" />, image: "/images/properties/wind.png" },
    { icon: <Flame className="w-8 h-8" />, image: "/images/properties/residential.png" },
    { icon: <CloudLightning className="w-8 h-8" />, image: "/images/properties/commercial.png" },
    { icon: <Sparkles className="w-8 h-8" />, image: "/images/properties/forensic.png" },
    { icon: <Waves className="w-8 h-8" />, image: "/images/properties/industrial.png" },
    { icon: <Ghost className="w-8 h-8" />, image: "/images/properties/vandalism.png" },
] as const;

export default function ClaimTypes() {
    const { t } = useLanguage();

    return (
        <section id="claims" className="scroll-mt-24 py-24 bg-[#020617] text-brand-white relative">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col items-center text-center space-y-6 mb-20">
                    <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.5em] text-brand-gold font-bold">
                        {t("claims.eyebrow")}
                    </span>
                    <h2 className="font-serif text-4xl md:text-6xl tracking-tighter">
                        {t("claims.title")} <span className="gold-gradient">{t("claims.titleAccent")}</span>
                    </h2>
                    <p className="max-w-xl text-brand-slate text-lg font-sans">
                        {t("claims.subtitle")}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {claimMeta.map((type, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            className="group relative p-10 glass rounded-3xl border-brand-white/5 hover:border-brand-gold/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(198,168,91,0.1)] overflow-hidden"
                        >
                            {type.image && (
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={type.image}
                                        alt={t(`claims.items.${i}.title`)}
                                        fill
                                        className="object-cover opacity-[0.2] md:opacity-[0.15] group-hover:opacity-30 transition-opacity duration-700 blur-[1px] group-hover:blur-0"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        quality={75}
                                        placeholder="blur"
                                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA3gAA//9k="
                                    />
                                </div>
                            )}
                            <div className="mb-8 text-brand-gold group-hover:scale-110 transition-transform duration-500">
                                {type.icon}
                            </div>
                            <h3 className="font-serif text-2xl font-bold mb-4 tracking-tight group-hover:text-brand-gold transition-colors">
                                {t(`claims.items.${i}.title`)}
                            </h3>
                            <p className="text-brand-slate text-sm leading-relaxed font-sans transition-colors group-hover:text-brand-white">
                                {t(`claims.items.${i}.description`)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
