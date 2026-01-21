"use client";

import { motion } from "framer-motion";
import { Shield, Microscope, Scale, ArrowUpRight } from "lucide-react";

const principles = [
    {
        icon: <Microscope className="w-9 h-9" />,
        title: "Surgical Precision",
        description: "We dissect policy language and disaster evidence to build an undeniable case. We don't adjust; we forensicize.",
        color: "from-brand-gold/20 to-transparent"
    },
    {
        icon: <Shield className="w-9 h-9" />,
        title: "Contractual Force",
        description: "Insurance policies are binding contractual documents. We ensure they are enforced exactly as written, with zero compromise.",
        color: "from-brand-slate/20 to-transparent"
    },
    {
        icon: <Scale className="w-9 h-9" />,
        title: "Evidence First",
        description: "Indisputable forensic reports and industry-standard data form the ironclad foundation of every claim we handle.",
        color: "from-brand-gold/10 to-transparent"
    }
];

export default function Philosophy() {
    return (
        <section className="py-32 bg-[#020617] text-brand-white relative overflow-hidden">
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
                                The Iron Ethos
                            </span>
                            <h2 className="font-serif text-4xl md:text-6xl leading-[0.95] tracking-tighter">
                                AUTHORITY <br />
                                IS RECLAIMED <br />
                                <span className="text-brand-slate opacity-70">THROUGH DATA.</span>
                            </h2>
                        </div>

                        <p className="text-brand-slate text-lg leading-relaxed font-sans tracking-wide">
                            IronClause was born from a refusal to accept "standard" settlement practices. We leverage forensic science and forensic rigor to shift the power dynamic in your favor.
                        </p>

                        <div className="pt-10 border-t border-brand-white/10 flex items-center gap-6 group cursor-pointer">
                            <div className="w-14 h-14 rounded-full border border-brand-gold/30 flex items-center justify-center group-hover:bg-brand-gold group-hover:border-brand-gold transition-all duration-500">
                                <ArrowUpRight className="w-5 h-5 text-brand-gold group-hover:text-brand-navy transition-colors" />
                            </div>
                            <span className="font-serif text-xl font-bold tracking-tight">Meet the Command Team</span>
                        </div>
                    </motion.div>

                    {/* Principles Grid */}
                    <div className="flex-1 grid gap-8 w-full">
                        {principles.map((p, i) => (
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
                                        <h3 className="font-serif text-2xl font-bold tracking-tight">{p.title}</h3>
                                        <p className="text-brand-slate text-base md:text-lg leading-relaxed max-w-md">
                                            {p.description}
                                        </p>
                                    </div>
                                    <div className="hidden md:block opacity-0 group-hover:opacity-30 transition-opacity font-serif text-5xl font-black text-brand-white uppercase select-none">
                                        FORCE
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
