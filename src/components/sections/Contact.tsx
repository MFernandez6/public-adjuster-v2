"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Lock, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const DAMAGE_COUNT = 7;

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="scroll-mt-24 py-32 bg-[#020617] overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="relative glass rounded-[40px] p-5 md:p-20 overflow-hidden border-brand-white/5">

                    {/* Background Ambient Light */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_rgba(198,168,91,0.1),_transparent_50%)]" />

                    <div className="grid lg:grid-cols-2 gap-20 items-start relative z-10">
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

                            <p className="text-brand-slate text-lg leading-relaxed max-w-md font-sans tracking-wide border-l-2 border-brand-gold/30 pl-5">
                                {t("contact.definition")}
                            </p>

                            <p className="text-brand-slate text-xl leading-relaxed max-w-md font-sans tracking-wide">
                                {t("contact.body")}
                            </p>

                            <p className="text-brand-slate/90 text-sm leading-relaxed max-w-md font-sans">
                                {t("contact.note")}
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

                            <div className="grid gap-5">
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div className="space-y-1">
                                        <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold ml-1">{t("contact.labelFirstName")}</label>
                                        <Input placeholder={t("contact.phFirstName")} className="h-14 bg-brand-navy/50 border-brand-white/10 focus:border-brand-gold transition-all rounded-xl text-brand-white" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold ml-1">{t("contact.labelLastName")}</label>
                                        <Input placeholder={t("contact.phLastName")} className="h-14 bg-brand-navy/50 border-brand-white/10 focus:border-brand-gold transition-all rounded-xl text-brand-white" />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold ml-1">{t("contact.labelEmail")}</label>
                                    <Input type="email" placeholder={t("contact.phEmail")} className="h-14 bg-brand-navy/50 border-brand-white/10 focus:border-brand-gold transition-all rounded-xl text-brand-white" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold ml-1">{t("contact.labelPhone")}</label>
                                    <Input type="tel" placeholder={t("contact.phPhone")} className="h-14 bg-brand-navy/50 border-brand-white/10 focus:border-brand-gold transition-all rounded-xl text-brand-white" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold ml-1">{t("contact.labelAddress")}</label>
                                    <Input placeholder={t("contact.phAddress")} className="h-14 bg-brand-navy/50 border-brand-white/10 focus:border-brand-gold transition-all rounded-xl text-brand-white" />
                                </div>
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div className="space-y-1">
                                        <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold ml-1">{t("contact.labelZip")}</label>
                                        <Input placeholder={t("contact.phZip")} className="h-14 bg-brand-navy/50 border-brand-white/10 focus:border-brand-gold transition-all rounded-xl text-brand-white" />
                                    </div>
                                    <div className="space-y-1 sm:col-span-2">
                                        <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold ml-1">{t("contact.labelDamageType")}</label>
                                        <select
                                            defaultValue=""
                                            className="flex h-14 w-full rounded-xl border border-brand-white/10 bg-brand-navy/50 px-4 text-sm text-brand-white focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold/40"
                                        >
                                            <option value="" disabled>
                                                {t("contact.damagePlaceholder")}
                                            </option>
                                            {Array.from({ length: DAMAGE_COUNT }, (_, i) => (
                                                <option key={i} value={String(i)} className="bg-brand-navy">
                                                    {t(`contact.damageOptions.${i}`)}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <label className="flex cursor-pointer items-start gap-3 text-left">
                                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-brand-white/20 bg-brand-navy/50 text-brand-gold focus:ring-brand-gold/40" />
                                    <span className="font-sans text-[11px] leading-relaxed text-brand-slate/90">{t("contact.smsConsent")}</span>
                                </label>

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
