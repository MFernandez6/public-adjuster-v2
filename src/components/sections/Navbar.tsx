"use client";

import { useState } from "react";
import Logo from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, FileText, Home, Building2, Workflow, Shield, Users, HelpCircle } from "lucide-react";

const aboutMenu = [
    {
        title: "Philosophy",
        href: "#philosophy",
        icon: <Shield className="w-4 h-4" />,
        description: "The Ironclad commitment to policy accountability."
    },
    {
        title: "Adjusters",
        href: "#adjusters",
        icon: <Users className="w-4 h-4" />,
        description: "Expert recovery specialists working for you."
    },
    {
        title: "FAQ",
        href: "#faq",
        icon: <HelpCircle className="w-4 h-4" />,
        description: "Clarity on the public adjusting process."
    },
];

const claimsMenu = [
    {
        title: "Claims Process",
        href: "#process",
        icon: <Workflow className="w-4 h-4" />,
        description: "The Iron Process from audit to recovery."
    },
    {
        title: "Homeowner Claims",
        href: "#homeowner",
        icon: <Home className="w-4 h-4" />,
        description: "Professional representation for residential losses."
    },
    {
        title: "Commercial Claims",
        href: "#commercial",
        icon: <Building2 className="w-4 h-4" />,
        description: "High-stakes adjusting for business and industrial assets."
    },
];

export default function Navbar() {
    const [isClaimsOpen, setIsClaimsOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-brand-white/5 bg-brand-navy/80 backdrop-blur-md">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Logo />

                <div className="hidden md:flex items-center space-x-10 text-[10px] font-sans uppercase tracking-[0.2em] text-brand-white/70">
                    {/* About Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsAboutOpen(true)}
                        onMouseLeave={() => setIsAboutOpen(false)}
                    >
                        <button className="flex items-center gap-1 hover:text-brand-gold transition-colors group">
                            ABOUT
                            <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isAboutOpen ? 'rotate-180 text-brand-gold' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {isAboutOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="absolute top-full -left-4 mt-2 w-72 glass rounded-2xl p-4 border-brand-gold/10 shadow-2xl"
                                >
                                    <div className="space-y-2">
                                        {aboutMenu.map((item, i) => (
                                            <a
                                                key={i}
                                                href={item.href}
                                                className="flex items-start gap-4 p-3 rounded-xl hover:bg-brand-white/5 transition-colors group/item"
                                            >
                                                <div className="mt-1 text-brand-gold group-hover/item:scale-110 transition-transform">
                                                    {item.icon}
                                                </div>
                                                <div className="space-y-1 text-left">
                                                    <div className="text-[10px] font-bold tracking-widest text-brand-white group-hover/item:text-brand-gold transition-colors">
                                                        {item.title}
                                                    </div>
                                                    <p className="text-[9px] lowercase tracking-normal text-brand-slate leading-tight opacity-60">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Claims Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsClaimsOpen(true)}
                        onMouseLeave={() => setIsClaimsOpen(false)}
                    >
                        <button className="flex items-center gap-1 hover:text-brand-gold transition-colors group">
                            CLAIMS
                            <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isClaimsOpen ? 'rotate-180 text-brand-gold' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {isClaimsOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="absolute top-full -left-4 mt-2 w-72 glass rounded-2xl p-4 border-brand-gold/10 shadow-2xl"
                                >
                                    <div className="space-y-2">
                                        {claimsMenu.map((item, i) => (
                                            <a
                                                key={i}
                                                href={item.href}
                                                className="flex items-start gap-4 p-3 rounded-xl hover:bg-brand-white/5 transition-colors group/item"
                                            >
                                                <div className="mt-1 text-brand-gold group-hover/item:scale-110 transition-transform">
                                                    {item.icon}
                                                </div>
                                                <div className="space-y-1 text-left">
                                                    <div className="text-[10px] font-bold tracking-widest text-brand-white group-hover/item:text-brand-gold transition-colors">
                                                        {item.title}
                                                    </div>
                                                    <p className="text-[9px] lowercase tracking-normal text-brand-slate leading-tight opacity-60">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <a href="#precision" className="hover:text-brand-gold transition-colors">Precision</a>
                    <a href="#contact" className="hover:text-brand-gold transition-colors">Contact</a>
                </div>

                <div className="flex items-center gap-4">
                    <Button size="sm" className="hidden lg:inline-flex bg-brand-navy border border-brand-gold/20 text-brand-gold hover:bg-brand-gold hover:text-brand-navy transition-all font-sans uppercase tracking-tighter font-bold text-[10px] px-6">
                        Emergency Check
                    </Button>
                    <Button size="sm" className="bg-brand-white text-brand-navy hover:bg-brand-gold transition-all font-sans uppercase tracking-tighter font-bold text-[10px] px-6">
                        Get Started
                    </Button>
                </div>
            </div>
        </nav>
    );
}
