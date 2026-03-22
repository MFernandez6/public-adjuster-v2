import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/sections/Navbar";
import HomeownerClaimsPage from "@/components/claims/HomeownerClaimsPage";

const Footer = dynamic(() => import("@/components/sections/Footer"), {
    loading: () => null,
});

export const metadata: Metadata = {
    title: "Homeowner Claims",
    description:
        "Why Florida homeowners choose BLACKLINE — policy review, forensic documentation, and negotiation for residential property claims.",
};

export default function HomeownerClaimsRoute() {
    return (
        <main className="min-h-screen bg-brand-navy text-brand-white font-sans">
            <Navbar />
            <HomeownerClaimsPage />
            <Footer />
        </main>
    );
}
