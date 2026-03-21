import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/sections/Navbar";
import FoundingAdjusterPage from "@/components/about/FoundingAdjusterPage";

const Footer = dynamic(() => import("@/components/sections/Footer"), {
    loading: () => null,
});

export const metadata: Metadata = {
    title: "About",
    description:
        "How BLACKLINE ADJUSTING LLC was created, and our adjusters — led by founding adjuster Miguel Angel Fernandez. Law, insurance, technology, and professional credentials.",
};

export default function AboutRoute() {
    return (
        <main className="min-h-screen bg-brand-navy text-brand-white font-sans">
            <Navbar />
            <FoundingAdjusterPage />
            <Footer />
        </main>
    );
}
