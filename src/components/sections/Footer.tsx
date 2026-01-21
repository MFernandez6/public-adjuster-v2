"use client";

import { motion } from "framer-motion";
import Logo from "@/components/brand/Logo";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";

const footerLinks = [
    {
        title: "Platform",
        links: [
            { name: "Philosophy", href: "#philosophy" },
            { name: "The Iron Process", href: "#process" },
            { name: "Forensic Scope", href: "#claims" },
            { name: "Contact", href: "#contact" },
        ],
    },
    {
        title: "Claims",
        links: [
            { name: "Homeowner Claims", href: "#homeowner" },
            { name: "Commercial Claims", href: "#commercial" },
            { name: "Claims Process", href: "#process" },
            { name: "Emergency Check", href: "#" },
        ],
    },
    {
        title: "Contact",
        links: [
            { name: "Audit Request", href: "#contact" },
            { name: "Direct Portal", href: "#" },
            { name: "Email Analysis", href: "mailto:contact@ironclause.com" },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="relative bg-[#020617] pt-32 pb-12 overflow-hidden border-t border-brand-white/5">
            {/* Background Watermark */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 pointer-events-none select-none opacity-[0.02] font-serif text-[20vw] leading-none whitespace-nowrap text-brand-white">
                IRONCLAUSE
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 mb-24">

                    {/* Brand Column */}
                    <div className="lg:col-span-4 space-y-8">
                        <Logo className="scale-125 origin-left" />
                        <p className="text-brand-slate text-sm leading-relaxed max-w-sm font-sans">
                            A policy-driven powerhouse treating insurance contracts as absolute authority. We hold the carrier to the strict letter of the policy until the claim is settled in full.
                        </p>
                        <div className="flex items-center gap-4">
                            {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full glass border border-brand-white/10 flex items-center justify-center text-brand-slate hover:text-brand-gold hover:border-brand-gold transition-all duration-300"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-12">
                        {footerLinks.map((section, i) => (
                            <div key={i} className="space-y-6">
                                <h4 className="font-serif text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold">
                                    {section.title}
                                </h4>
                                <ul className="space-y-4">
                                    {section.links.map((link, j) => (
                                        <li key={j}>
                                            <a
                                                href={link.href}
                                                className="text-brand-white/60 hover:text-brand-gold text-xs font-sans tracking-widest transition-colors"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Contact Info Column */}
                    <div className="lg:col-span-3 space-y-8">
                        <h4 className="font-serif text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold">
                            HQ Protocol
                        </h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 group">
                                <div className="p-2 rounded-lg bg-brand-white/5 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <div className="text-brand-slate text-xs font-sans tracking-wide leading-relaxed transition-opacity">
                                    123 Forensic Plaza <br />
                                    Suite 500, Iron City, IC 90210
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="p-2 rounded-lg bg-brand-white/5 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <div className="text-brand-slate text-xs font-sans tracking-wide transition-opacity">
                                    +1 (800) IRON-999
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="p-2 rounded-lg bg-brand-white/5 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <div className="text-brand-slate text-xs font-sans tracking-wide transition-opacity">
                                    audit@ironclause.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-brand-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-brand-slate/60 text-center md:text-left">
                        © 2026 IRONCLAUSE ADJUSTING LLC. ALL PROPERTY DATA PROTECTED BY SECURE FORENSIC PROTOCOL.
                    </p>
                    <div className="flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] text-brand-slate/60">
                        <a href="#" className="hover:text-brand-gold transition-colors">Privacy Protocol</a>
                        <a href="#" className="hover:text-brand-gold transition-colors">Terms of Authority</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
