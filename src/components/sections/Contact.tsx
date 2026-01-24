"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Lock, ShieldCheck } from "lucide-react";

export default function Contact() {
    return (
        <section className="py-32 bg-[#020617] overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="relative glass rounded-[40px] p-5 md:p-20 overflow-hidden border-brand-white/5">

                    {/* Background Ambient Light */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_rgba(198,168,91,0.1),_transparent_50%)]" />

                    <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
                        <div className="space-y-10">
                            <div className="space-y-4">
                                <span className="font-sans text-xs uppercase tracking-[0.5em] text-brand-gold font-bold flex items-center gap-3">
                                    <Lock className="w-3 h-3" />
                                    Secure Protocol Initiation
                                </span>
                                <h2 className="font-serif text-4xl sm:text-5xl md:text-8xl leading-[0.9] md:leading-[0.85] tracking-tighter">
                                    SECURE YOUR <br />
                                    <span className="gold-gradient">FINALITY.</span>
                                </h2>
                            </div>

                            <p className="text-brand-slate text-xl leading-relaxed max-w-md font-sans tracking-wide">
                                Recovery isn't a suggestion; it's a contractual obligation. Initiate our forensic review protocol to reclaim what is rightfully yours.
                            </p>

                            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-brand-white/10">
                                <div className="space-y-2">
                                    <span className="block font-serif text-3xl font-bold">100%</span>
                                    <span className="block font-sans text-[10px] uppercase tracking-widest text-brand-slate">Contingency Based</span>
                                </div>
                                <div className="space-y-2">
                                    <span className="block font-serif text-3xl font-bold">24HR</span>
                                    <span className="block font-sans text-[10px] uppercase tracking-widest text-brand-slate">Forensic Response</span>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white/[0.03] backdrop-blur-3xl rounded-3xl p-5 md:p-10 border border-brand-white/10 shadow-2xl space-y-8"
                        >
                            <div className="space-y-2">
                                <h3 className="font-serif text-3xl font-bold tracking-tight">Claim Submission</h3>
                                <p className="text-brand-slate text-sm">Please provide the preliminary claim details for forensic auditing.</p>
                            </div>

                            <div className="grid gap-6">
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold ml-1">Principal Name</label>
                                    <Input placeholder="E.g. Alexander Sterling" className="h-14 bg-brand-navy/50 border-brand-white/10 focus:border-brand-gold transition-all rounded-xl text-brand-white" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold ml-1">Asset Location</label>
                                    <Input placeholder="Primary residence or commercial address" className="h-14 bg-brand-navy/50 border-brand-white/10 focus:border-brand-gold transition-all rounded-xl text-brand-white" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold ml-1">Carrier Details</label>
                                    <Input placeholder="Existing insurance provider" className="h-14 bg-brand-navy/50 border-brand-white/10 focus:border-brand-gold transition-all rounded-xl text-brand-white" />
                                </div>

                                <Button className="w-full h-16 bg-brand-gold text-brand-navy hover:scale-[1.02] transition-all font-sans uppercase tracking-[0.1em] sm:tracking-[0.3em] font-black text-[10px] sm:text-xs shadow-[0_10px_40px_rgba(198,168,91,0.2)] group">
                                    Initiate Forensic Audit
                                    <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </div>

                            <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] text-brand-slate/60">
                                <ShieldCheck className="w-3 h-3" />
                                Secure Data Encryption Active
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
