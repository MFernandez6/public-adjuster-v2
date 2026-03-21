"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Lock, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function LoginPageContent() {
    const { t } = useLanguage();

    return (
        <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden noise-bg py-16 md:py-24 lg:py-28">
            <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-brand-navy/30 via-transparent to-brand-navy" />
            <div className="pointer-events-none absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-brand-gold/5 blur-[120px] md:-right-20" />
            <div className="pointer-events-none absolute -left-24 bottom-0 h-[320px] w-[320px] rounded-full bg-brand-gold/4 blur-[100px]" />

            <div className="container relative z-10 mx-auto max-w-7xl px-4">
                <div className="relative overflow-hidden rounded-[32px] border border-brand-white/10 glass p-5 shadow-2xl md:rounded-[40px] md:p-10 lg:p-16">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(198,168,91,0.12),transparent_52%)]" />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(15,28,46,0.5),transparent_45%)]" />

                    <div className="relative z-10 grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
                        {/* Brand column */}
                        <div className="space-y-8 text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="inline-flex items-center justify-center gap-3 rounded-full border border-brand-gold/20 bg-brand-navy/40 px-5 py-2.5 shadow-[0_0_20px_rgba(198,168,91,0.1)] lg:justify-start"
                            >
                                <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold animate-pulse" />
                                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold md:text-xs">
                                    {t("login.badge")}
                                </span>
                                <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold animate-pulse" />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.65, delay: 0.08 }}
                            >
                                <h1 className="font-serif text-4xl leading-[0.95] tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                                    {t("login.h1a")} <br />
                                    <span className="gold-gradient text-glow">{t("login.h1b")}</span>
                                </h1>
                                <p className="mx-auto mt-8 max-w-lg font-sans text-base leading-relaxed tracking-wide text-brand-slate lg:mx-0 md:text-lg">
                                    {t("login.body")}
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.55, delay: 0.2 }}
                                className="grid grid-cols-2 gap-8 border-t border-brand-white/10 pt-10"
                            >
                                <div className="space-y-2">
                                    <span className="block font-serif text-3xl font-bold tracking-tight text-brand-white md:text-4xl">
                                        {t("login.https")}
                                    </span>
                                    <span className="block font-sans text-[10px] uppercase tracking-widest text-brand-slate">
                                        {t("login.httpsSub")}
                                    </span>
                                </div>
                                <div className="space-y-2">
                                    <span className="block font-serif text-3xl font-bold tracking-tight text-brand-white md:text-4xl">
                                        {t("login.private")}
                                    </span>
                                    <span className="block font-sans text-[10px] uppercase tracking-widest text-brand-slate">
                                        {t("login.privateSub")}
                                    </span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Form column */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.97 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.55, delay: 0.12 }}
                            className="bg-white/4 backdrop-blur-3xl rounded-3xl border border-brand-white/10 p-6 shadow-2xl sm:p-8 md:p-10"
                        >
                            <div className="mb-8 space-y-2 border-b border-brand-white/10 pb-8">
                                <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.35em] text-brand-gold">
                                    <Lock className="h-3.5 w-3.5" aria-hidden />
                                    {t("login.auth")}
                                </div>
                                <h2 className="font-serif text-2xl font-bold tracking-tight text-brand-white md:text-3xl">
                                    {t("login.formTitle")}
                                </h2>
                                <p className="font-sans text-sm leading-relaxed text-brand-slate">
                                    {t("login.formSub")}
                                </p>
                            </div>

                            <form className="space-y-6" action="#" method="post">
                                <div className="space-y-1.5">
                                    <label
                                        htmlFor="client-email"
                                        className="ml-1 font-sans text-[10px] font-bold uppercase tracking-widest text-brand-gold"
                                    >
                                        {t("login.email")}
                                    </label>
                                    <Input
                                        id="client-email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        placeholder={t("login.phEmail")}
                                        className="h-14 rounded-xl border-brand-white/10 bg-brand-navy/60 text-brand-white placeholder:text-brand-slate/45 transition-all focus-visible:border-brand-gold focus-visible:ring-brand-gold/20"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label
                                        htmlFor="client-password"
                                        className="ml-1 font-sans text-[10px] font-bold uppercase tracking-widest text-brand-gold"
                                    >
                                        {t("login.password")}
                                    </label>
                                    <Input
                                        id="client-password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        placeholder={t("login.phPassword")}
                                        className="h-14 rounded-xl border-brand-white/10 bg-brand-navy/60 text-brand-white placeholder:text-brand-slate/45 transition-all focus-visible:border-brand-gold focus-visible:ring-brand-gold/20"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="group h-16 w-full bg-brand-gold font-sans text-xs font-black uppercase tracking-[0.2em] text-brand-navy shadow-[0_10px_40px_rgba(198,168,91,0.25)] transition-all hover:scale-[1.02] sm:tracking-[0.28em]"
                                >
                                    {t("login.submit")}
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </form>

                            <p className="mt-6 text-center font-sans text-sm text-brand-slate">
                                {t("login.trouble")}{" "}
                                <Link href="/#contact" className="font-medium text-brand-gold hover:underline">
                                    {t("login.contactLink")}
                                </Link>
                            </p>

                            <div className="mt-8 flex items-center justify-center gap-2 border-t border-brand-white/10 pt-6 font-sans text-[10px] uppercase tracking-[0.2em] text-brand-slate/60">
                                <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-brand-gold/80" aria-hidden />
                                {t("login.footer")}
                            </div>
                        </motion.div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35 }}
                        className="relative z-10 mt-12 text-center font-sans text-xs text-brand-slate/55"
                    >
                        <Link href="/" className="text-brand-gold/90 transition-colors hover:text-brand-gold">
                            {t("login.back")}
                        </Link>
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
