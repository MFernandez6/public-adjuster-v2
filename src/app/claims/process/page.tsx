import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/sections/Navbar";
import ClaimsProcessPage from "@/components/claims/ClaimsProcessPage";
import { en } from "@/i18n/en";

const Footer = dynamic(() => import("@/components/sections/Footer"), {
    loading: () => null,
});

export const metadata: Metadata = {
    title: en.claimsProcessPage.metaTitle,
    description: en.claimsProcessPage.metaDescription,
};

export default function ClaimsProcessRoute() {
    return (
        <main className="min-h-screen bg-brand-navy text-brand-white font-sans">
            <Navbar />
            <ClaimsProcessPage />
            <Footer />
        </main>
    );
}
