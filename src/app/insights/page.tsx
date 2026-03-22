import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/sections/Navbar";
import InsightsPage from "@/components/insights/InsightsPage";
import { en } from "@/i18n/en";

const Footer = dynamic(() => import("@/components/sections/Footer"), {
    loading: () => null,
});

export const metadata: Metadata = {
    title: en.insightsPage.metaTitle,
    description: en.insightsPage.metaDescription,
};

export default function InsightsRoute() {
    return (
        <main className="min-h-screen bg-brand-navy text-brand-white font-sans">
            <Navbar />
            <InsightsPage />
            <Footer />
        </main>
    );
}
