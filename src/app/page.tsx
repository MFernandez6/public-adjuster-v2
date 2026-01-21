import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-navy text-brand-white font-sans">
      <Navbar />
      <Hero />
      <Philosophy />
      <Process />
      <Contact />
      <footer className="py-12 border-t border-brand-white/5 bg-brand-navy text-center">
        <div className="container mx-auto px-4 opacity-40">
          <p className="text-sm tracking-widest uppercase">
            © 2026 IRONCLAUSE Adjusting. Precision Adjusting for Policyholders.
          </p>
        </div>
      </footer>
    </main>
  );
}

