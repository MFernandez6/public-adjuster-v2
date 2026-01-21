"use client";

import Logo from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-brand-white/5 bg-brand-navy/80 backdrop-blur-md">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Logo />

                <div className="hidden md:flex items-center space-x-8 text-sm font-sans uppercase tracking-widest text-brand-white/70">
                    <a href="#" className="hover:text-brand-gold transition-colors">Philosophy</a>
                    <a href="#" className="hover:text-brand-gold transition-colors">Precision</a>
                    <a href="#" className="hover:text-brand-gold transition-colors">Contact</a>
                </div>

                <Button size="sm" className="hidden sm:inline-flex bg-brand-white text-brand-navy hover:bg-brand-gold transition-colors font-sans uppercase tracking-tighter font-bold">
                    Emergency Check
                </Button>
            </div>
        </nav>
    );
}
