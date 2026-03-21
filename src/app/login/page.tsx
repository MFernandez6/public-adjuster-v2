import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/sections/Navbar";
import LoginPageContent from "@/components/login/LoginPageContent";

const Footer = dynamic(() => import("@/components/sections/Footer"), {
    loading: () => null,
});

export const metadata: Metadata = {
    title: "Client login",
    description: "Sign in to your BLACKLINE Adjusting client portal for claim status and documents.",
};

export default function LoginPage() {
    return (
        <main className="min-h-screen bg-brand-navy text-brand-white font-sans">
            <Navbar />
            <LoginPageContent />
            <Footer />
        </main>
    );
}
