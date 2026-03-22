import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/sections/Navbar";
import PublicAdjusterFaqPage from "@/components/about/PublicAdjusterFaqPage";

const Footer = dynamic(() => import("@/components/sections/Footer"), {
    loading: () => null,
});

export const metadata: Metadata = {
    title: "Public Adjuster FAQ",
    description:
        "Answers to common questions about public adjusting in Florida — licensing, fees, inspections, letters of representation, and when to hire BLACKLINE.",
};

export default function AboutFaqRoute() {
    return (
        <main className="min-h-screen bg-brand-navy text-brand-white font-sans">
            <Navbar />
            <PublicAdjusterFaqPage />
            <Footer />
        </main>
    );
}
