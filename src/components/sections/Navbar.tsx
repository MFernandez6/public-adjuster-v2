"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Logo from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Home, Building2, Users, Landmark, Menu, X, Plus, ListChecks, CircleHelp } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import LanguageSwitcher from "@/components/i18n/LanguageSwitcher";

export default function Navbar() {
    const { t } = useLanguage();
    const [isClaimsOpen, setIsClaimsOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);

    const aboutMenu = useMemo(
        () => [
            {
                title: t("navAbout.whoWeAre.title"),
                href: "/about#who-we-are",
                icon: <Landmark className="w-4 h-4" />,
                description: t("navAbout.whoWeAre.description"),
            },
            {
                title: t("navAbout.adjusters.title"),
                href: "/about#adjusters",
                icon: <Users className="w-4 h-4" />,
                description: t("navAbout.adjusters.description"),
            },
            {
                title: t("navAbout.faq.title"),
                href: "/about/faq",
                icon: <CircleHelp className="w-4 h-4" />,
                description: t("navAbout.faq.description"),
            },
        ],
        [t]
    );

    const claimsMenu = useMemo(
        () => [
            {
                title: t("navClaims.processPage.title"),
                href: "/claims/process",
                icon: <ListChecks className="w-4 h-4" />,
                description: t("navClaims.processPage.description"),
            },
            {
                title: t("navClaims.homeowner.title"),
                href: "/claims/homeowners",
                icon: <Home className="w-4 h-4" />,
                description: t("navClaims.homeowner.description"),
            },
            {
                title: t("navClaims.commercial.title"),
                href: "/claims/commercial",
                icon: <Building2 className="w-4 h-4" />,
                description: t("navClaims.commercial.description"),
            },
        ],
        [t]
    );

    const toggleMobileSection = (section: string) => {
        setExpandedMobileSection(expandedMobileSection === section ? null : section);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-brand-white/5 bg-brand-navy/80 backdrop-blur-md">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/50 rounded-sm" aria-label={t("footer.homeAria")}>
                    <Logo />
                </Link>

                <div className="hidden md:flex items-center space-x-10 text-[10px] font-sans uppercase tracking-[0.2em] text-brand-white/70">
                    {/* About Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsAboutOpen(true)}
                        onMouseLeave={() => setIsAboutOpen(false)}
                    >
                        <button className="flex items-center gap-1 hover:text-brand-gold transition-colors group">
                            {t("nav.about")}
                            <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isAboutOpen ? 'rotate-180 text-brand-gold' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {isAboutOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="absolute top-full -left-4 mt-2 w-80 glass rounded-2xl p-4 border-brand-gold/10 shadow-2xl"
                                >
                                    <div className="space-y-2">
                                        {aboutMenu.map((item, i) => (
                                            <Link
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
                                            </Link>
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
                            {t("nav.claims")}
                            <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isClaimsOpen ? 'rotate-180 text-brand-gold' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {isClaimsOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="absolute top-full -left-4 mt-2 w-80 glass rounded-2xl p-4 border-brand-gold/10 shadow-2xl"
                                >
                                    <div className="space-y-2">
                                        {claimsMenu.map((item, i) => (
                                            <Link
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
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link href="/insights" className="hover:text-brand-gold transition-colors">
                        {t("nav.insights")}
                    </Link>

                    <Link href="/#contact" className="hover:text-brand-gold transition-colors">{t("nav.contact")}</Link>
                    <LanguageSwitcher />
                </div>

                <div className="flex items-center gap-3 md:gap-4">
                    <div className="md:hidden">
                        <LanguageSwitcher />
                    </div>
                    <Link
                        href="/#contact"
                        className="hidden sm:flex items-center rounded-md border border-brand-gold/25 bg-brand-navy/90 px-5 py-2.5 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold shadow-[0_0_24px_rgba(198,168,91,0.08)] transition-colors hover:bg-brand-gold hover:text-brand-navy"
                    >
                        {t("nav.ctaContact")}
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-brand-white/80 hover:text-brand-gold transition-colors"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-brand-white/5 bg-brand-navy/95 backdrop-blur-xl overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-10 space-y-8">
                            <div className="space-y-6">
                                {/* About Section */}
                                <div className="space-y-4">
                                    <button
                                        onClick={() => toggleMobileSection('about')}
                                        className="w-full flex items-center justify-between text-xs font-sans uppercase tracking-[0.2em] text-brand-white/90"
                                    >
                                        {t("nav.aboutSection")}
                                        <Plus className={`w-4 h-4 transition-transform duration-300 ${expandedMobileSection === 'about' ? 'rotate-45 text-brand-gold' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {expandedMobileSection === 'about' && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="pl-4 space-y-4 pt-2"
                                            >
                                                {aboutMenu.map((item, i) => (
                                                    <Link
                                                        key={i}
                                                        href={item.href}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className="flex items-center gap-4 py-2"
                                                    >
                                                        <div className="text-brand-gold">{item.icon}</div>
                                                        <span className="text-[10px] uppercase tracking-widest text-brand-white/70">{item.title}</span>
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Claims Section */}
                                <div className="space-y-4">
                                    <button
                                        onClick={() => toggleMobileSection('claims')}
                                        className="w-full flex items-center justify-between text-xs font-sans uppercase tracking-[0.2em] text-brand-white/90"
                                    >
                                        {t("nav.claimsSection")}
                                        <Plus className={`w-4 h-4 transition-transform duration-300 ${expandedMobileSection === 'claims' ? 'rotate-45 text-brand-gold' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {expandedMobileSection === 'claims' && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="pl-4 space-y-4 pt-2"
                                            >
                                                {claimsMenu.map((item, i) => (
                                                    <Link
                                                        key={i}
                                                        href={item.href}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className="flex items-center gap-4 py-2"
                                                    >
                                                        <div className="text-brand-gold">{item.icon}</div>
                                                        <span className="text-[10px] uppercase tracking-widest text-brand-white/70">{item.title}</span>
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <Link
                                    href="/insights"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-xs font-sans uppercase tracking-[0.2em] text-brand-white/90"
                                >
                                    {t("nav.insights")}
                                </Link>

                                <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs font-sans uppercase tracking-[0.2em] text-brand-white/90">{t("nav.contact")}</Link>
                            </div>

                            <div className="pt-8 border-t border-brand-white/10 flex flex-col gap-4">
                                <p className="text-center font-sans text-[11px] leading-relaxed text-brand-slate/90 px-1">
                                    {t("nav.emailUpdatesPitch")}
                                </p>
                                <Button size="lg" className="w-full bg-brand-gold text-brand-navy font-bold uppercase tracking-widest text-[10px]" asChild>
                                    <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>{t("nav.ctaContact")}</Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
