import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import ClaimTypes from "@/components/sections/ClaimTypes";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

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

