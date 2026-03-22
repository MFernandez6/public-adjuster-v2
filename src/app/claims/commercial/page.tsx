import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/sections/Navbar";
import CommercialClaimsPage from "@/components/claims/CommercialClaimsPage";

const Footer = dynamic(() => import("@/components/sections/Footer"), {
    loading: () => null,
});

export const metadata: Metadata = {
    title: "Commercial Claims",
    description:
        "Why Florida commercial property owners choose BLACKLINE — forensic documentation, stakeholder coordination, and negotiation for business and industrial losses.",
};

export default function CommercialClaimsRoute() {
    return (
        <main className="min-h-screen bg-brand-navy text-brand-white font-sans">
            <Navbar />
            <CommercialClaimsPage />
            <Footer />
        </main>
    );
}
