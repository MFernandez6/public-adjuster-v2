"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

const stepMeta = [{ number: "01" }, { number: "02" }, { number: "03" }, { number: "04" }] as const;

export default function Process() {
    const { t } = useLanguage();

    return (
        <section id="process" className="scroll-mt-24 py-32 bg-[#020617] text-brand-white relative overflow-hidden">
            {/* Background Graphic */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent opacity-30" />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 lg:mb-32 gap-12">
                    <div className="max-w-2xl space-y-4">
                        <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.5em] text-brand-gold font-bold">
                            {t("process.eyebrow")}
                        </span>
                        <h2 className="font-serif text-4xl md:text-6xl leading-[1] tracking-tighter">
                            {t("process.heading")}
                        </h2>
                    </div>
                    <p className="text-brand-slate text-lg lg:text-xl max-w-sm font-sans tracking-wide leading-relaxed pb-2">
                        {t("process.sub")}
                    </p>
                </div>

                {/* Dynamic Timeline Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stepMeta.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
                            className="group relative p-8 md:p-10 flex flex-col items-center text-center border border-brand-gold/15 hover:border-brand-gold/40 transition-all rounded-2xl overflow-hidden glass"
                        >
                            {/* Background Number */}
                            <div className="absolute top-0 right-0 font-serif text-[10rem] font-black opacity-[0.02] translate-x-1/4 -translate-y-1/4 group-hover:opacity-[0.05] transition-all duration-1000 select-none">
                                {step.number}
                            </div>

                            <div className="space-y-6 relative z-10 flex flex-col items-center">
                                <div className="w-12 h-1 bg-brand-gold rounded-full group-hover:w-20 transition-all duration-500 mx-auto" />
                                <span className="block font-sans text-[9px] uppercase tracking-[0.5em] text-brand-gold font-bold">
                                    {t(`process.steps.${i}.tagline`)}
                                </span>
                                <h3 className="font-serif text-3xl font-bold leading-tight tracking-tight lg:min-h-[2.5em]">
                                    {t(`process.steps.${i}.title`)}
                                </h3>
                            </div>

                            <p className="relative z-10 mt-5 text-brand-slate text-sm leading-relaxed transition-opacity duration-500">
                                {t(`process.steps.${i}.description`)}
                            </p>
                            <div className="relative z-10 mt-auto flex w-full items-center gap-4 pt-8 text-brand-gold/40 group-hover:text-brand-gold transition-colors duration-500">
                                <div className="h-[1px] flex-1 bg-current" />
                                <span className="font-serif text-xl font-bold">{step.number}</span>
                                <div className="h-[1px] flex-1 bg-current" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
