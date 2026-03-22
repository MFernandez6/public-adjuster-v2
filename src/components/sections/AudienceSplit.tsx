"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Home, Building2 } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const blurDataURL =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA3gAA//9k=";

const cards = [
    {
        href: "/claims/homeowners",
        image: "/images/properties/residential.png",
        ctaKey: "audienceSplit.homeownerCta" as const,
        titleKey: "audienceSplit.homeownerTitle" as const,
        bodyKey: "audienceSplit.homeownerBody" as const,
        icon: Home,
    },
    {
        href: "/claims/commercial",
        image: "/images/properties/commercial.png",
        ctaKey: "audienceSplit.commercialCta" as const,
        titleKey: "audienceSplit.commercialTitle" as const,
        bodyKey: "audienceSplit.commercialBody" as const,
        icon: Building2,
    },
] as const;

export default function AudienceSplit() {
    const { t } = useLanguage();

    return (
        <section className="relative border-b border-brand-white/10 bg-[#020617] py-24 md:py-32 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(198,168,91,0.07),transparent_55%)]" />

            <div className="container relative z-10 mx-auto max-w-7xl px-4">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.45em] text-brand-gold md:text-xs md:tracking-[0.5em]">
                        {t("audienceSplit.eyebrow")}
                    </span>
                    <h2 className="mt-4 font-serif text-4xl tracking-tighter text-brand-white md:text-6xl">
                        {t("audienceSplit.title")}
                    </h2>
                </div>

                <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
                    {cards.map((card, i) => {
                        const Icon = card.icon;
                        return (
                            <motion.article
                                key={card.href}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="group relative flex min-h-[420px] flex-col overflow-hidden rounded-[28px] border border-brand-white/5 glass transition-all duration-500 hover:border-brand-gold/35 hover:shadow-[0_0_40px_rgba(198,168,91,0.12)] md:min-h-[460px]"
                            >
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={card.image}
                                        alt=""
                                        fill
                                        className="object-cover opacity-[0.22] transition-all duration-700 group-hover:opacity-[0.38] group-hover:scale-105 blur-[1.5px] group-hover:blur-0"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        quality={80}
                                        placeholder="blur"
                                        blurDataURL={blurDataURL}
                                    />
                                </div>
                                <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#020617] via-[#020617]/88 to-[#020617]/40" />
                                <div className="absolute inset-0 z-[1] bg-gradient-to-br from-brand-navy/40 via-transparent to-brand-gold/[0.06] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                <div className="relative z-10 flex h-full flex-col p-10 md:p-12">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-brand-gold/25 bg-brand-navy/90 text-brand-gold shadow-[0_0_24px_rgba(198,168,91,0.12)] transition-transform duration-500 group-hover:scale-105 group-hover:border-brand-gold/45">
                                            <Icon className="h-7 w-7" aria-hidden />
                                        </div>
                                        <span className="font-sans text-[9px] font-bold uppercase tracking-[0.35em] text-brand-gold/80 md:text-[10px]">
                                            {i === 0 ? "01" : "02"}
                                        </span>
                                    </div>

                                    <div className="mt-8 w-12 h-1 rounded-full bg-brand-gold/60 transition-all duration-500 group-hover:w-20 group-hover:bg-brand-gold" />

                                    <h3 className="mt-6 font-serif text-2xl font-bold tracking-tight text-brand-white transition-colors duration-300 group-hover:text-brand-gold md:text-3xl">
                                        {t(card.titleKey)}
                                    </h3>

                                    <p className="mt-5 flex-1 font-sans text-sm leading-relaxed text-brand-slate transition-colors duration-300 group-hover:text-brand-white/90 md:text-base">
                                        {t(card.bodyKey)}
                                    </p>

                                    <Button
                                        size="lg"
                                        className="mt-10 h-14 w-full border-0 bg-brand-gold/15 font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold backdrop-blur-sm transition-all duration-300 hover:bg-brand-gold hover:text-brand-navy hover:shadow-[0_8px_32px_rgba(198,168,91,0.25)] md:text-xs md:tracking-[0.3em]"
                                        asChild
                                    >
                                        <Link href={card.href} className="flex items-center justify-center gap-2">
                                            {t(card.ctaKey)}
                                            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                        </Link>
                                    </Button>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
