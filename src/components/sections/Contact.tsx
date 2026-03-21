"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Lock, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="scroll-mt-24 py-32 bg-[#020617] overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="relative glass rounded-[40px] p-5 md:p-20 overflow-hidden border-brand-white/5">

                    {/* Background Ambient Light */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_rgba(198,168,91,0.1),_transparent_50%)]" />

                    <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
                        <div className="space-y-10">
                            <div className="space-y-4">
                                <span className="font-sans text-xs uppercase tracking-[0.5em] text-brand-gold font-bold flex items-center gap-3">
                                    <Lock className="w-3 h-3" />
                                    {t("contact.eyebrow")}
                                </span>
                                <h2 className="font-serif text-4xl sm:text-5xl md:text-8xl leading-[0.9] md:leading-[0.85] tracking-tighter">
                                    {t("contact.title1")} <br />
                                    <span className="gold-gradient">{t("contact.title2")}</span>
                                </h2>
                            </div>

                            <p className="text-brand-slate text-xl leading-relaxed max-w-md font-sans tracking-wide">
                                {t("contact.body")}
                            </p>

                            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-brand-white/10">
                                <div className="space-y-2">
                                    <span className="block font-serif text-3xl font-bold">{t("contact.stat1")}</span>
                                    <span className="block font-sans text-[10px] uppercase tracking-widest text-brand-slate">{t("contact.stat1Label")}</span>
                                </div>
                                <div className="space-y-2">
                                    <span className="block font-serif text-3xl font-bold">{t("contact.stat2")}</span>
                                    <span className="block font-sans text-[10px] uppercase tracking-widest text-brand-slate">{t("contact.stat2Label")}</span>
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
                                <h3 className="font-serif text-3xl font-bold tracking-tight">{t("contact.formTitle")}</h3>
                                <p className="text-brand-slate text-sm">{t("contact.formSub")}</p>
                            </div>

                            <div className="grid gap-6">
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold ml-1">{t("contact.labelName")}</label>
                                    <Input placeholder={t("contact.phName")} className="h-14 bg-brand-navy/50 border-brand-white/10 focus:border-brand-gold transition-all rounded-xl text-brand-white" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold ml-1">{t("contact.labelLocation")}</label>
                                    <Input placeholder={t("contact.phLocation")} className="h-14 bg-brand-navy/50 border-brand-white/10 focus:border-brand-gold transition-all rounded-xl text-brand-white" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold ml-1">{t("contact.labelCarrier")}</label>
                                    <Input placeholder={t("contact.phCarrier")} className="h-14 bg-brand-navy/50 border-brand-white/10 focus:border-brand-gold transition-all rounded-xl text-brand-white" />
                                </div>

                                <Button className="w-full h-16 bg-brand-gold text-brand-navy hover:scale-[1.02] transition-all font-sans uppercase tracking-[0.1em] sm:tracking-[0.3em] font-black text-[10px] sm:text-xs shadow-[0_10px_40px_rgba(198,168,91,0.2)] group">
                                    {t("contact.submit")}
                                    <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </div>

                            <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] text-brand-slate/60">
                                <ShieldCheck className="w-3 h-3" />
                                {t("contact.secure")}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
