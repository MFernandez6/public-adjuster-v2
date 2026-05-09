"use client";

import Navbar from "@/components/sections/Navbar";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/sections/Footer"), {
    loading: () => null,
});

export default function PrivacyTermsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen bg-brand-navy text-brand-white font-sans">
            <Navbar />
            <div className="border-b border-brand-white/10 bg-[#020617] pb-24 pt-28 md:pb-28 md:pt-32">
                <div className="container mx-auto max-w-3xl px-4">{children}</div>
            </div>
            <Footer />
        </main>
    );
}
