"use client";

import { motion } from "framer-motion";
import { Wind, Flame, CloudLightning, Waves, Ghost, CloudFog } from "lucide-react";

const claimTypes = [
    {
        icon: <Flame className="w-8 h-8" />,
        title: "Fire Damage",
        description: "Complete forensic analysis of smoke, char, and structural integrity following fire loss."
    },
    {
        icon: <Waves className="w-8 h-8" />,
        title: "Water Damage",
        description: "Precision moisture mapping and hidden leak detection to ensure total remediation coverage."
    },
    {
        icon: <CloudLightning className="w-8 h-8" />,
        title: "Storm Damage",
        description: "Atmospheric data-driven documentation for hurricanes, tornadoes, and catastrophic weather."
    },
    {
        icon: <CloudFog className="w-8 h-8" />,
        title: "Wind Damage",
        description: "Detailed uplift and shingle analysis to protect the building envelope from systemic failure."
    },
    {
        icon: <Ghost className="w-8 h-8" />,
        title: "Vandalism",
        description: "Theft and intentional damage assessments focused on restoration to pre-loss security levels."
    },
    {
        icon: <Wind className="w-8 h-8" />,
        title: "Hail Damage",
        description: "Surgical inspection of soft metals and roof components using high-resolution forensic imaging."
    }
];

export default function ClaimTypes() {
    return (
        <section className="py-24 bg-[#020617] text-brand-white relative">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col items-center text-center space-y-6 mb-20">
                    <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.5em] text-brand-gold font-bold">
                        Forensic Scope
                    </span>
                    <h2 className="font-serif text-4xl md:text-6xl tracking-tighter">
                        LOSS CATEGORIES WE <span className="gold-gradient">COMMAND.</span>
                    </h2>
                    <p className="max-w-xl text-brand-slate text-lg font-sans">
                        Precision adjusting across all major loss vectors. No detail too small, no claim too complex.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {claimTypes.map((type, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group p-10 glass rounded-3xl border-brand-white/5 hover:border-brand-gold/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(198,168,91,0.1)]"
                        >
                            <div className="mb-8 text-brand-gold group-hover:scale-110 transition-transform duration-500">
                                {type.icon}
                            </div>
                            <h3 className="font-serif text-2xl font-bold mb-4 tracking-tight group-hover:text-brand-gold transition-colors">
                                {type.title}
                            </h3>
                            <p className="text-brand-slate text-sm leading-relaxed font-sans transition-opacity">
                                {type.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
