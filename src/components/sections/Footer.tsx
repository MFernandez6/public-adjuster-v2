"use client";

import { useMemo } from "react";
import Link from "next/link";
import Logo from "@/components/brand/Logo";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import {
    businessPhoneDisplay,
    businessPhoneE164,
    primaryContactEmail,
    getBusinessAddressLines,
    instagramUrl,
    linkedinUrl,
    twitterUrl,
    publicAdjusterLicenseNumber,
    hasAnySocialUrl,
} from "@/config/site";

function SmartLink({
    href,
    className,
    children,
}: {
    href: string;
    className: string;
    children: React.ReactNode;
}) {
    const internal = href.startsWith("/") && !href.startsWith("//");
    if (internal) {
        return (
            <Link href={href} className={className}>
                {children}
            </Link>
        );
    }
    return (
        <a href={href} className={className}>
            {children}
        </a>
    );
}

export default function Footer() {
    const { t } = useLanguage();

    const footerLinks = useMemo(
        () => [
            {
                title: t("footer.platform"),
                links: [
                    { name: t("footer.links.about"), href: "/about" },
                    { name: t("footer.links.faq"), href: "/about/faq" },
                    { name: t("footer.links.insights"), href: "/insights" },
                    { name: t("footer.links.philosophy"), href: "/#philosophy" },
                    { name: t("footer.links.standard"), href: "/#process" },
                    { name: t("footer.links.scope"), href: "/#claims" },
                    { name: t("footer.links.contact"), href: "/#contact" },
                ],
            },
            {
                title: t("footer.claims"),
                links: [
                    { name: t("footer.links.homeowner"), href: "/claims/homeowners" },
                    { name: t("footer.links.commercial"), href: "/claims/commercial" },
                    { name: t("footer.links.process"), href: "/claims/process" },
                    { name: t("footer.links.statusByEmail"), href: "/#contact" },
                ],
            },
            {
                title: t("footer.contact"),
                links: [
                    { name: t("footer.links.audit"), href: "/#contact" },
                    { name: t("footer.links.email"), href: `mailto:${primaryContactEmail}` },
                ],
            },
        ],
        [t]
    );

    const addressLines = getBusinessAddressLines();
    const telE164 = businessPhoneE164.trim();
    const phoneLabel =
        businessPhoneDisplay.trim().length > 0 ? businessPhoneDisplay.trim() : telE164;
    const license = publicAdjusterLicenseNumber.trim();

    const socials = (
        [
            { Icon: Instagram, url: instagramUrl, label: "Instagram" },
            { Icon: Linkedin, url: linkedinUrl, label: "LinkedIn" },
            { Icon: Twitter, url: twitterUrl, label: "X / Twitter" },
        ] as const
    ).filter((s) => s.url.trim().length > 0);

    return (
        <footer className="relative bg-[#020617] pt-32 pb-12 overflow-hidden border-t border-brand-white/5">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[22%] pointer-events-none select-none text-center leading-none opacity-[0.02] text-brand-white">
                <div className="font-serif text-[18vw] whitespace-nowrap tracking-tight md:text-[16vw]">BLACKLINE</div>
                <div className="mx-auto mt-1 max-w-[95vw] font-sans text-[3.25vw] font-semibold uppercase tracking-[0.28em] md:text-[2.85vw] md:tracking-[0.32em]">
                    PUBLIC ADJUSTERS
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 mb-24">
                    <div className="lg:col-span-4 space-y-8">
                        <Link
                            href="/"
                            className="inline-block outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/50 rounded-sm"
                            aria-label={t("footer.homeAria")}
                        >
                            <Logo className="scale-100 md:scale-125 origin-left" />
                        </Link>
                        <p className="text-brand-slate text-sm leading-relaxed max-w-sm font-sans">{t("footer.blurb")}</p>
                        {hasAnySocialUrl() ? (
                            <div className="flex items-center gap-4">
                                {socials.map(({ Icon, url, label }) => (
                                    <a
                                        key={label}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="w-10 h-10 rounded-full glass border border-brand-white/10 flex items-center justify-center text-brand-slate hover:text-brand-gold hover:border-brand-gold transition-all duration-300"
                                    >
                                        <Icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>
                        ) : null}
                    </div>

                    <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-12">
                        {footerLinks.map((section, i) => (
                            <div key={i} className="space-y-6">
                                <h4 className="font-serif text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold">
                                    {section.title}
                                </h4>
                                <ul className="space-y-4">
                                    {section.links.map((link, j) => (
                                        <li key={j}>
                                            <SmartLink href={link.href} className="text-brand-white/60 hover:text-brand-gold text-xs font-sans tracking-widest transition-colors">
                                                {link.name}
                                            </SmartLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="lg:col-span-3 space-y-8">
                        <h4 className="font-serif text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold">
                            {t("footer.hq")}
                        </h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 group">
                                <div className="p-2 rounded-lg bg-brand-white/5 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <div className="text-brand-slate text-xs font-sans tracking-wide leading-relaxed transition-opacity">
                                    {addressLines.length > 0 ? (
                                        addressLines.map((line, i) => (
                                            <span key={i} className="block">
                                                {line}
                                            </span>
                                        ))
                                    ) : (
                                        <span>{t("footer.addressFallback")}</span>
                                    )}
                                </div>
                            </div>
                            {telE164 ? (
                                <a
                                    href={`tel:${telE164}`}
                                    className="flex items-center gap-4 group outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/50 rounded-lg"
                                >
                                    <div className="p-2 rounded-lg bg-brand-white/5 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <div className="text-brand-slate text-xs font-sans tracking-wide transition-opacity group-hover:text-brand-white/85">
                                        {phoneLabel}
                                    </div>
                                </a>
                            ) : null}
                            <div className="flex items-center gap-4 group">
                                <div className="p-2 rounded-lg bg-brand-white/5 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <a
                                    href={`mailto:${primaryContactEmail}`}
                                    className="text-brand-slate text-xs font-sans tracking-wide transition-opacity hover:text-brand-gold outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/50 rounded-sm"
                                >
                                    {primaryContactEmail}
                                </a>
                            </div>
                            {license ? (
                                <p className="pl-14 font-sans text-[10px] uppercase tracking-[0.25em] text-brand-white/55">
                                    {t("footer.licenseLead")}{" "}
                                    <span className="tracking-normal normal-case text-brand-white/80">{license}</span>
                                </p>
                            ) : null}
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-brand-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-brand-slate/60 text-center md:text-left">
                        {t("footer.copyright")}
                    </p>
                    <div className="flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] text-brand-slate/60">
                        <Link href="/privacy" className="hover:text-brand-gold transition-colors">
                            {t("footer.privacy")}
                        </Link>
                        <Link href="/terms" className="hover:text-brand-gold transition-colors">
                            {t("footer.terms")}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
