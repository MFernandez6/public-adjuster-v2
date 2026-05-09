import type { Metadata } from "next";
import PrivacyTermsLayout from "@/components/legal/PrivacyTermsLayout";
import Link from "next/link";
import { siteUrl } from "@/config/site";

export const metadata: Metadata = {
    title: "Terms of Service",
    description:
        "Website terms—including SMS etiquette, disclaimers about public adjusting—and relationship expectations before a signed representation agreement with Blackline PA.",
};

export default function TermsPage() {
    const updated = new Date("2026-05-09");
    return (
        <PrivacyTermsLayout>
            <h1 className="font-serif text-4xl tracking-tighter text-brand-white md:text-5xl">
                Terms of service
            </h1>
            <p className="mt-4 font-sans text-sm text-brand-slate md:text-base">
                Last updated{" "}
                <time dateTime={updated.toISOString().slice(0, 10)}>
                    {updated.toLocaleDateString("en-US", { dateStyle: "long" })}
                </time>
                . These Terms govern browsing and voluntary submissions on{" "}
                <span className="text-brand-white/85">{siteUrl}</span> (“Site”) by BLACKLINE PUBLIC ADJUSTERS LLC (“Blackline PA,” “BLACKLINE,” “we,” or “our”). They do{" "}
                <span className="text-brand-white/90">not</span> supersede executed representation agreements or regulatory obligations once you formally retain us beyond casual inquiry.
            </p>

            <section className="mt-14 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">1. Acceptance</h2>
                <p>
                    Accessing pages, toggling localization, transmitting forms, subscribing to texting with consent acknowledgement, retrieving PDFs hypothetically reachable, or analogous engagement constitutes agreeing to Site Terms concurrently with acknowledging our{" "}
                    <Link href="/privacy" className="text-brand-gold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/40 rounded-sm">
                        Privacy Policy
                    </Link>
                    . Discontinue use if dissatisfied.
                </p>
            </section>

            <section className="mt-12 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">2. Educational nature & no attorney‑client posture</h2>
                <p>
                    Information on the Site is explanatory—not exhaustive legal interpretation. Website interaction alone does{" "}
                    <span className="text-brand-white/90">not</span> forge attorney‑client rapport; licensed public adjusting remains distinct from practicing law absent separate counsel engagements.
                </p>
            </section>

            <section className="mt-12 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">3. Representation & licensing</h2>
                <p>
                    We adjust claims under Florida DFS licensing statutes with advertising disclosures visibly placed when mandated. Separate written compensation schedules control fees—negotiation does not circumvent regulatory ceilings pertinent to classifications of disasters.
                </p>
            </section>

            <section className="mt-12 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">4. Messaging & texting rules</h2>
                <p>
                    Texts require prior express consent evidenced by affirmative checkbox—not merely browsing. Transmitting STOP terminates further promotional or repeated advisory outreach where technically honored; transactional logistical texts necessary to finalize active claims may endure briefly—coordinate removal nuance referencing claim ID.
                </p>
                <p>
                    Proscribed content: impersonation of carriers, illicit threats via SMS, knowingly false proof submissions, abusive volume intended to degrade infrastructure. Suspected misconduct may spur investigation with authorities.
                </p>
            </section>

            <section className="mt-12 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">5. Accuracy of information you furnish</h2>
                <p>You warrant submission truthfulness—not omitting perilous omissions insurers later weaponize—for intake materials subject to underwriting ethics.</p>
            </section>

            <section className="mt-12 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">6. Intellectual property</h2>
                <p>
                    Branding assets, typography pairings curated, narrative copy, illustrative photographs—unless externally sourced with credits—stay proprietary. No scraping for model training circumventing contractual boundaries; citations require attribution lines we specify if ever granted narrowly.
                </p>
            </section>

            <section className="mt-12 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">7. Disclaimers</h2>
                <p className="uppercase tracking-wide text-[11px] text-brand-white/65">
                    Site furnished “AS IS”; no warranty of uptime, deterministic outcome of claims, underwriting carrier benevolence, or immunity from exclusions—expect adversarial underwriting tension.
                </p>
            </section>

            <section className="mt-12 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">8. Liability cap (Site-only)</h2>
                <p>
                    Exclusive of misconduct impossible to disclaim under Florida law intentionally, our cumulative liability stemming solely from gratuitous informational Site usage—absent contracted representation—typically caps at broader of $250 or fees you voluntarily paid attributable Site-only ancillary digital services (normally zero). Specialized statutory pathways may redefine caps—coordinate counsel if adjudicated.
                </p>
            </section>

            <section className="mt-12 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">9. Dispute anatomy</h2>
                <p>
                    Venue generally Miami-Dade County, Florida—or Federal SD FL if jurisdictional predicates align—excluding DFS administrative licensing enforcement channels unaffected.
                </p>
            </section>

            <section className="mt-12 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">10. Modifications</h2>
                <p>We may revise prose; conspicuous dating tracks iteration; persistent usage symbolizes awareness absent contrary written objection within reasonable interval if applicable consumer frameworks demand.</p>
            </section>

            <section className="mt-12 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">11. Reach us</h2>
                <p>
                    For Site-level policy discussions use{" "}
                    <Link href="/#contact" className="text-brand-gold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/40 rounded-sm">
                        the contact pathway
                    </Link>
                    . Active claim adjudication avenues follow executed representation instructions.
                </p>
            </section>
        </PrivacyTermsLayout>
    );
}
