"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Briefcase, Code2, GraduationCap, Sparkles, ChevronRight } from "lucide-react";

const education = [
    "A.S. Cybersecurity, Miami Dade College — digital forensics, incident response, ethical hacking",
    "Certificate, Paralegal Studies, University of Miami — legal research, civil procedure, document preparation, paralegal ethics",
    "M.S. Law & Policy, Nova Southeastern University — magna cum laude; administrative, immigration, federal privacy law",
    "B.S. Political Science, Florida State University — American government, international relations, political theory, research methods",
    "Certificate, Full-Stack Web Development, University of Miami — JavaScript, Node, SQL, Docker, Spring",
    "A.A. Political Science, Miami Dade College — general education, political science core, research and writing fundamentals",
];

export default function FoundingAdjusterPage() {
    return (
        <>
            {/* Page intro */}
            <section className="relative overflow-hidden border-b border-brand-white/10 bg-[#020617] pb-16 pt-28 md:pb-20 md:pt-32">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(198,168,91,0.08),transparent_55%)]" />
                <div className="container relative z-10 mx-auto max-w-3xl px-4 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="font-sans text-[10px] font-bold uppercase tracking-[0.45em] text-brand-gold md:text-xs"
                    >
                        BLACKLINE ADJUSTING LLC
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.05 }}
                        className="mt-4 font-serif text-4xl leading-[0.98] tracking-tighter text-brand-white md:text-6xl"
                    >
                        ABOUT <span className="gold-gradient">BLACKLINE</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.12 }}
                        className="mt-6 font-sans text-sm leading-relaxed text-brand-slate md:text-base"
                    >
                        Who we are as a firm, and the professionals who represent you.
                    </motion.p>
                </div>
            </section>

            {/* Who we are */}
            <section
                id="who-we-are"
                className="scroll-mt-28 border-b border-brand-white/10 bg-[#020617] py-20 md:py-28"
            >
                <div className="container mx-auto max-w-3xl px-4">
                    <div className="mb-10 text-center">
                        <span className="font-sans text-[10px] font-bold uppercase tracking-[0.45em] text-brand-gold md:text-xs">
                            Who we are
                        </span>
                        <h2 className="mt-2 font-serif text-3xl tracking-tighter text-brand-white md:text-4xl">
                            HOW BLACKLINE WAS CREATED
                        </h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 font-sans text-base leading-relaxed tracking-wide text-brand-slate md:text-lg"
                    >
                        <p>
                            BLACKLINE ADJUSTING LLC was built for a straightforward purpose: to represent Florida
                            policyholders with claim documentation and communication that meet the moment — thorough,
                            timely, and defensible. The firm was founded on a single standard: professional rigor in
                            the file, respect for the client experience, and technology that reduces friction while
                            preserving accountability.
                        </p>
                        <p>
                            We operate as a policy-driven practice: contracts are read as contracts, evidence is
                            assembled for scrutiny, and clients receive clear expectations at every phase. That
                            standard exists because the firm was designed from the outset to combine insurance-side
                            fluency with legal-process discipline and modern systems — not as marketing language, but
                            as operating procedure.
                        </p>
                        <p className="text-brand-white/90">
                            BLACKLINE serves policyholders who expect precision without pretense. As the firm grows,
                            that same standard applies to every adjuster and every file we accept.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Adjusters */}
            <section id="adjusters" className="scroll-mt-28 bg-[#020617] pb-8 pt-20 md:pt-28">
                <div className="container mx-auto max-w-5xl px-4">
                    <div className="mb-16 text-center">
                        <span className="font-sans text-[10px] font-bold uppercase tracking-[0.45em] text-brand-gold md:text-xs">
                            Adjusters
                        </span>
                        <h2 className="mt-2 font-serif text-3xl tracking-tighter text-brand-white md:text-5xl">
                            OUR TEAM
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl font-sans text-sm leading-relaxed text-brand-slate md:text-base">
                            Licensed professionals listed in order of leadership. Full biographical and credential
                            detail is provided for transparency.
                        </p>
                    </div>

                    {/* Miguel — founding adjuster */}
                    <article className="rounded-2xl border border-brand-gold/20 bg-brand-white/2 p-8 md:p-12">
                        <div className="border-b border-brand-white/10 pb-10 text-center md:text-left">
                            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.35em] text-brand-gold md:text-xs">
                                Founding adjuster · Principal
                            </p>
                            <h3 className="mt-3 font-serif text-3xl tracking-tighter text-brand-white md:text-5xl lg:text-6xl">
                                MIGUEL ANGEL <span className="gold-gradient">FERNANDEZ</span>
                            </h3>
                            <p className="mt-4 font-sans text-sm leading-relaxed text-brand-slate/90 md:text-base">
                                English & Spanish · Service statewide with Miami-Dade operational base
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mx-auto mt-10 max-w-3xl space-y-6 font-sans text-base leading-relaxed tracking-wide text-brand-slate md:text-lg"
                        >
                            <p className="text-brand-white/95">
                                Public adjusting sits at the intersection of stress, fine print, and time — the same
                                pressures I navigated for years from the legal and technology sides. Hospitality
                                taught me how clients should feel when everything is on the line; the law taught me
                                structure, deadlines, and how arguments actually get built; engineering taught me to
                                ship systems that reduce chaos; insurance defense and construction defect work taught
                                me how carriers and counsel evaluate risk, documentation, and exposure.
                            </p>
                            <p>
                                Blackline is the synthesis: a tech-forward, white-glove practice where your claim
                                file is organized like litigation-ready work product, your questions get direct
                                answers, and the digital experience matches the seriousness of the loss.
                            </p>
                            <p>
                                I did not come up through adjusting alone — I came through courts, codebases, and
                                carrier-facing files. That is the lens I bring to every inspection, estimate review,
                                and conversation with your insurer.
                            </p>
                        </motion.div>

                        <div className="mx-auto mt-12 flex max-w-[560px] flex-wrap items-center justify-center gap-3 font-sans text-[11px] uppercase tracking-[0.3em] text-brand-white/55 md:text-xs">
                            <span className="inline-flex items-center gap-2 rounded-full border border-brand-white/10 bg-brand-white/3 px-4 py-2">
                                <Sparkles className="h-3.5 w-3.5 text-brand-gold" aria-hidden />
                                Hospitality-grade service
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full border border-brand-white/10 bg-brand-white/3 px-4 py-2">
                                <Briefcase className="h-3.5 w-3.5 text-brand-gold" aria-hidden />
                                Insurance-side fluency
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full border border-brand-white/10 bg-brand-white/3 px-4 py-2">
                                <Code2 className="h-3.5 w-3.5 text-brand-gold" aria-hidden />
                                Tech-forward operations
                            </span>
                        </div>
                    </article>

                    {/* Education — Miguel */}
                    <div className="mt-20 border-t border-brand-white/10 pt-16">
                        <div className="mb-10 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
                            <div>
                                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.45em] text-brand-gold md:text-xs">
                                    Miguel Fernandez — education
                                </span>
                                <h3 className="mt-2 font-serif text-2xl tracking-tighter text-brand-white md:text-3xl">
                                    ACADEMIC STACK
                                </h3>
                            </div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-white/10 bg-brand-navy text-brand-gold md:h-14 md:w-14">
                                <GraduationCap className="h-6 w-6 md:h-7 md:w-7" />
                            </div>
                        </div>
                        <ul className="grid gap-3 font-sans text-sm leading-relaxed text-brand-slate md:grid-cols-2 md:text-[15px]">
                            {education.map((line) => (
                                <li
                                    key={line}
                                    className="flex gap-3 rounded-xl border border-brand-white/5 bg-brand-white/2 px-4 py-3"
                                >
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold/70" />
                                    <span>{line}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="border-t border-brand-white/10 bg-[#020617] py-20">
                <div className="container mx-auto max-w-2xl px-4 text-center">
                    <p className="font-serif text-xl text-brand-white/90 md:text-2xl">Ready to discuss your loss?</p>
                    <Button
                        asChild
                        size="lg"
                        className="mt-8 h-14 bg-brand-gold px-10 font-sans text-sm font-bold uppercase tracking-[0.15em] text-brand-navy hover:scale-[1.02]"
                    >
                        <Link href="/#contact" className="inline-flex items-center gap-2">
                            Initiate contact
                            <ChevronRight className="h-4 w-4" />
                        </Link>
                    </Button>
                    <p className="mt-6 font-sans text-xs text-brand-slate">
                        <Link href="/" className="text-brand-gold/90 hover:text-brand-gold">
                            ← Back to Blackline home
                        </Link>
                    </p>
                </div>
            </section>
        </>
    );
}
