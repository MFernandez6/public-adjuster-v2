"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Forensic Audit",
        tagline: "Total Policy Dissection",
        description: "Our policy experts deconstruct every clause, rider, and endorsement to identify hidden coverage lines that carriers often ignore."
    },
    {
        number: "02",
        title: "Forensic Survey",
        tagline: "Scientific Documentation",
        description: "We deploy engineers and forensic specialists to document loss with precision, creating an indisputable record of damages."
    },
    {
        number: "03",
        title: "The Iron Demand",
        tagline: "Absolute Precision",
        description: "A comprehensive, evidence-backed demand package built on forensic truth, leaving no room for insurer interpretation."
    },
    {
        number: "04",
        title: "Enforcement",
        tagline: "Contractual Victory",
        description: "We hold the carrier to the strict letter of the policy until the claim is settled correctly and in full."
    }
];

export default function Process() {
    return (
        <section className="py-32 bg-[#020617] text-brand-white relative">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 lg:mb-32 gap-12">
                    <div className="max-w-2xl space-y-4">
                        <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.5em] text-brand-gold font-bold">
                            Execution Protocol
                        </span>
                        <h2 className="font-serif text-4xl md:text-6xl leading-[1] tracking-tighter">
                            THE <span className="gold-gradient">IRON</span> <br />
                            PROCESS.
                        </h2>
                    </div>
                    <p className="text-brand-slate text-lg lg:text-xl max-w-xs font-sans tracking-wide leading-relaxed opacity-80 pb-2">
                        A methodical, forensic-first protocol designed for maximum contractual recovery.
                    </p>
                </div>

                {/* Dynamic Timeline Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className="group relative p-8 h-[400px] flex flex-col justify-between border border-brand-white/10 hover:bg-brand-white/[0.03] transition-all rounded-2xl overflow-hidden glass"
                        >
                            <div className="absolute top-0 right-0 font-serif text-9xl font-black opacity-[0.03] translate-x-1/4 -translate-y-1/4 group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-1000 select-none">
                                {step.number}
                            </div>

                            <div className="space-y-4 relative z-10">
                                <div className="w-10 h-1 bg-brand-gold group-hover:w-16 transition-all duration-500" />
                                <span className="block font-sans text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold">
                                    {step.tagline}
                                </span>
                                <h3 className="font-serif text-2xl font-bold tracking-tight">
                                    {step.title}
                                </h3>
                            </div>

                            <div className="relative z-10 space-y-4">
                                <p className="text-brand-slate text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                                    {step.description}
                                </p>
                                <div className="font-serif text-4xl font-black text-white/5 group-hover:text-brand-gold/20 transition-colors">
                                    {step.number}
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-gold group-hover:w-full transition-all duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
