"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Lock, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const DAMAGE_COUNT = 7;

type SubmitStatus =
    | { type: null }
    | { type: "ok" | "validation" | "rate" | "delivery" | "config" };

export default function Contact() {
    const { t } = useLanguage();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [zip, setZip] = useState("");
    const [damageIdx, setDamageIdx] = useState("");
    const [smsConsent, setSmsConsent] = useState(false);
    const [_hp, setHp] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [status, setStatus] = useState<SubmitStatus>({ type: null });

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus({ type: null });

        const phoneDigits = phone.replace(/\D/g, "");
        if (!damageIdx || damageIdx === "") {
            setStatus({ type: "validation" });
            return;
        }
        if (phoneDigits.length < 10) {
            setStatus({ type: "validation" });
            return;
        }

        const damageOpt = Number.parseInt(damageIdx, 10);
        const damageLabel = Number.isFinite(damageOpt) ? t(`contact.damageOptions.${damageOpt}` as const) : "";

        setSubmitting(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstName: firstName.trim(),
                    lastName: lastName.trim(),
                    email: email.trim(),
                    phone: phone.trim(),
                    address: address.trim(),
                    zip: zip.trim(),
                    damageType: damageLabel,
                    smsConsent,
                    _hp,
                }),
            });

            const payload = (await res.json().catch(() => ({}))) as { error?: string };

            if (res.ok) {
                setStatus({ type: "ok" });
                setFirstName("");
                setLastName("");
                setEmail("");
                setPhone("");
                setAddress("");
                setZip("");
                setDamageIdx("");
                setSmsConsent(false);
                setHp("");
            } else if (res.status === 429) {
                setStatus({ type: "rate" });
            } else if (res.status === 503 && payload.error === "delivery_not_configured") {
                setStatus({ type: "config" });
            } else if (res.status === 422) {
                setStatus({ type: "validation" });
            } else {
                setStatus({ type: "delivery" });
            }
        } catch {
            setStatus({ type: "delivery" });
        } finally {
            setSubmitting(false);
        }
    }

    const statusMessage =
        status.type === "ok"
            ? t("contact.formSuccess")
            : status.type === "validation"
              ? t("contact.formErrorValidation")
              : status.type === "rate"
                ? t("contact.formErrorRate")
                : status.type === "config"
                  ? t("contact.formErrorConfig")
                  : status.type === "delivery"
                    ? t("contact.formErrorDelivery")
                    : null;

    return (
        <section id="contact" className="scroll-mt-24 py-32 bg-[#020617] overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="relative glass rounded-[40px] p-5 md:p-20 overflow-hidden border-brand-white/5">
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

                            <p className="text-brand-slate/90 text-sm leading-relaxed max-w-md font-sans">{t("contact.note")}</p>

                            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-brand-white/10">
                                <div className="space-y-2">
                                    <span className="block font-serif text-3xl font-bold">{t("contact.stat1")}</span>
                                    <span className="block font-sans text-[10px] uppercase tracking-widest text-brand-slate">
                                        {t("contact.stat1Label")}
                                    </span>
                                </div>
                                <div className="space-y-2">
                                    <span className="block font-serif text-3xl font-bold">{t("contact.stat2")}</span>
                                    <span className="block font-sans text-[10px] uppercase tracking-widest text-brand-slate">
                                        {t("contact.stat2Label")}
                                    </span>
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

                            {statusMessage ? (
                                <p
                                    role="status"
                                    aria-live="polite"
                                    className={`rounded-xl border px-4 py-3 font-sans text-sm leading-relaxed ${
                                        status.type === "ok"
                                            ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-100"
                                            : "border-amber-500/30 bg-amber-500/10 text-amber-100"
                                    }`}
                                >
                                    {statusMessage}
                                </p>
                            ) : null}

                            <form className="relative grid gap-5" onSubmit={handleSubmit} noValidate>
                                <input
                                    type="text"
                                    name="_hp"
                                    value={_hp}
                                    onChange={(e) => setHp(e.target.value)}
                                    tabIndex={-1}
                                    autoComplete="off"
                                    className="absolute h-0 w-0 overflow-hidden opacity-0"
                                    aria-hidden
                                />
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div className="space-y-1">
                                        <label
                                            htmlFor="contact-first"
                                            className="text-[10px] uppercase tracking-widest text-brand-gold font-bold ml-1"
                                        >
                                            {t("contact.labelFirstName")}
                                        </label>
                                        <Input
                                            id="contact-first"
                                            required
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            placeholder={t("contact.phFirstName")}
                                            className="h-14 bg-brand-navy/50 border-brand-white/10 focus:border-brand-gold transition-all rounded-xl text-brand-white"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label
                                            htmlFor="contact-last"
                                            className="text-[10px] uppercase tracking-widest text-brand-gold font-bold ml-1"
                                        >
                                            {t("contact.labelLastName")}
                                        </label>
                                        <Input
                                            id="contact-last"
                                            required
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            placeholder={t("contact.phLastName")}
                                            className="h-14 bg-brand-navy/50 border-brand-white/10 focus:border-brand-gold transition-all rounded-xl text-brand-white"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label
                                        htmlFor="contact-email"
                                        className="text-[10px] uppercase tracking-widest text-brand-gold font-bold ml-1"
                                    >
                                        {t("contact.labelEmail")}
                                    </label>
                                    <Input
                                        id="contact-email"
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder={t("contact.phEmail")}
                                        className="h-14 bg-brand-navy/50 border-brand-white/10 focus:border-brand-gold transition-all rounded-xl text-brand-white"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label
                                        htmlFor="contact-phone"
                                        className="text-[10px] uppercase tracking-widest text-brand-gold font-bold ml-1"
                                    >
                                        {t("contact.labelPhone")}
                                    </label>
                                    <Input
                                        id="contact-phone"
                                        type="tel"
                                        required
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder={t("contact.phPhone")}
                                        className="h-14 bg-brand-navy/50 border-brand-white/10 focus:border-brand-gold transition-all rounded-xl text-brand-white"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label
                                        htmlFor="contact-address"
                                        className="text-[10px] uppercase tracking-widest text-brand-gold font-bold ml-1"
                                    >
                                        {t("contact.labelAddress")}
                                    </label>
                                    <Input
                                        id="contact-address"
                                        required
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        placeholder={t("contact.phAddress")}
                                        className="h-14 bg-brand-navy/50 border-brand-white/10 focus:border-brand-gold transition-all rounded-xl text-brand-white"
                                    />
                                </div>
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div className="space-y-1">
                                        <label
                                            htmlFor="contact-zip"
                                            className="text-[10px] uppercase tracking-widest text-brand-gold font-bold ml-1"
                                        >
                                            {t("contact.labelZip")}
                                        </label>
                                        <Input
                                            id="contact-zip"
                                            required
                                            value={zip}
                                            onChange={(e) => setZip(e.target.value)}
                                            placeholder={t("contact.phZip")}
                                            className="h-14 bg-brand-navy/50 border-brand-white/10 focus:border-brand-gold transition-all rounded-xl text-brand-white"
                                        />
                                    </div>
                                    <div className="space-y-1 sm:col-span-2">
                                        <label
                                            htmlFor="contact-damage"
                                            className="text-[10px] uppercase tracking-widest text-brand-gold font-bold ml-1"
                                        >
                                            {t("contact.labelDamageType")}
                                        </label>
                                        <select
                                            id="contact-damage"
                                            required
                                            value={damageIdx}
                                            onChange={(e) => setDamageIdx(e.target.value)}
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
                                    <input
                                        type="checkbox"
                                        checked={smsConsent}
                                        onChange={(e) => setSmsConsent(e.target.checked)}
                                        className="mt-1 h-4 w-4 rounded border-brand-white/20 bg-brand-navy/50 text-brand-gold focus:ring-brand-gold/40"
                                    />
                                    <span className="font-sans text-[11px] leading-relaxed text-brand-slate/90">
                                        {t("contact.smsConsentIntro")}{" "}
                                        {t("contact.smsConsentRead")}{" "}
                                        <Link href="/privacy" className="text-brand-gold underline-offset-2 hover:underline">
                                            {t("contact.smsConsentPrivacyLink")}
                                        </Link>{" "}
                                        {t("contact.smsConsentMiddle")}{" "}
                                        <Link href="/terms" className="text-brand-gold underline-offset-2 hover:underline">
                                            {t("contact.smsConsentTermsLink")}
                                        </Link>{" "}
                                        {t("contact.smsConsentEnding")}
                                    </span>
                                </label>

                                <Button
                                    type="submit"
                                    disabled={submitting}
                                    className="w-full h-16 bg-brand-gold text-brand-navy hover:scale-[1.02] transition-all font-sans uppercase tracking-[0.1em] sm:tracking-[0.3em] font-black text-[10px] sm:text-xs shadow-[0_10px_40px_rgba(198,168,91,0.2)] group disabled:opacity-60"
                                >
                                    {submitting ? t("contact.submitting") : t("contact.submit")}
                                    <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </form>

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
