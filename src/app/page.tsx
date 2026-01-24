import dynamic from "next/dynamic";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";

// Dynamic imports for below-the-fold sections
const Philosophy = dynamic(() => import("@/components/sections/Philosophy"), {
  loading: () => null,
});
const ClaimTypes = dynamic(() => import("@/components/sections/ClaimTypes"), {
  loading: () => null,
});
const Process = dynamic(() => import("@/components/sections/Process"), {
  loading: () => null,
});
const Contact = dynamic(() => import("@/components/sections/Contact"), {
  loading: () => null,
});
const Footer = dynamic(() => import("@/components/sections/Footer"), {
  loading: () => null,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-navy text-brand-white font-sans">
      <Navbar />
      <Hero />
      <Philosophy />
      <ClaimTypes />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}

