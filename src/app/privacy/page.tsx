import type { Metadata } from "next";
import PrivacyTermsLayout from "@/components/legal/PrivacyTermsLayout";
import Link from "next/link";
import { siteUrl } from "@/config/site";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "How Blackline Public Adjusters LLC collects, uses, and protects information—including contact forms and SMS—under Florida practices and TCPA awareness.",
};

export default function PrivacyPage() {
    const updated = new Date("2026-05-09");
    return (
        <PrivacyTermsLayout>
            <h1 className="font-serif text-4xl tracking-tighter text-brand-white md:text-5xl">
                Privacy policy
            </h1>
            <p className="mt-4 font-sans text-sm text-brand-slate md:text-base">
                Last updated{" "}
                <time dateTime={updated.toISOString().slice(0, 10)}>
                    {updated.toLocaleDateString("en-US", { dateStyle: "long" })}
                </time>
                . This explains how BLACKLINE PUBLIC ADJUSTERS LLC (“Blackline PA,” “BLACKLINE,” “we,” or “our”) treats information on{" "}
                <span className="text-brand-white/85">{siteUrl}</span>.
            </p>
            <p className="mt-6 rounded-xl border border-brand-gold/20 bg-brand-white/[0.02] px-5 py-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                Blackline PA renders professional services—not legal counsel. Policies and statutes change; facts of your situation may differ. Confirm material points with DFS, your insurer, legal counsel when appropriate, or us in writing related to representation.
            </p>

            <section className="mt-14 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">1. Scope</h2>
                <p>
                    This policy applies to visits to our website and information you voluntarily submit—including contact forms—unless a separate engagement letter or representation agreement expressly states otherwise regarding client files already in litigation or privileged contexts.
                </p>
            </section>

            <section className="mt-12 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">2. Categories of information</h2>
                <ul className="list-disc space-y-2 pl-5">
                    <li>
                        <span className="text-brand-white/90">Contact and intake inputs.</span> Name, telephone, email address, mailing or loss location descriptors, ZIP, loss category selection, timestamps, SMS consent checkbox state, honeypot fields for bot deterrence (not relied on elsewhere), browser technical metadata ordinarily captured in server logs, and correspondence you initiate.
                    </li>
                    <li>
                        <span className="text-brand-white/90">Operational metadata.</span> IP address, coarse geolocation inferred by infrastructure providers, approximate device/network details, referrer headers necessary for diagnostics, abuse prevention counters, TLS logs, deployment platform analytics if enabled.
                    </li>
                </ul>
            </section>

            <section className="mt-12 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">3. How we use information</h2>
                <p>
                    We use submissions to evaluate whether we may assist, schedule consultation, comply with insurer reporting expectations when you authorize us, deter fraud/spam/rate abuses, safeguard systems, comply with regulation, defend claims, satisfy accounting/bookkeeping necessities, analyze aggregate web performance internally, refine content without selling personal data as a commodity, and uphold Professional Service duties.
                </p>
                <p>
                    We do not sell “covered personal information” in the statutory sense deployed in certain state privacy regimes; inquire if you suspect otherwise for verification.
                </p>
            </section>

            <section className="mt-12 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">4. Electronic mail and transactional messaging</h2>
                <p>
                    Contact requests may spawn email via our transactional provider to operations staff designated in configuration. Operational staff may coordinate telephonically respecting your selections. Maintain accurate contact pathways; spoofing/third-party interception risks reside partly outside Blackline PA’s perimeter—use diligence.
                </p>
            </section>

            <section className="mt-12 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">5. SMS (text messaging) & consent</h2>
                <p>
                    If you check the SMS consent option and supply a wireless number we may initiate text correspondence consistent with disclosed purposes. Consent itself is unnecessary to request email contact. Frequency varies—reply STOP where supported to withdraw (record timing may persist for compliance); HELP obtains basic assistance cues. Charges from carriers may arise; we disclaim carrier billing nuances.
                </p>
                <p>
                    We align operational practices cognizant of TCPA contours; absolute guarantees about third-party aggregator behavior upstream cannot erase every compliance tail risk globally—coordinate concerns promptly.
                </p>
                <p>
                    See also our <Link href="/terms" className="text-brand-gold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/40 rounded-sm">Terms of Service</Link> describing acceptable use tied to texting.
                </p>
            </section>

            <section className="mt-12 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">6. Disclosure to others</h2>
                <p>
                    We may share information with indispensable subprocessors assisting deliverability/hosting/email (each subject to contractual constraints), governmental authorities compelled by lawful process proportionate necessity, successors in corporate transaction with continuity notice when feasible without compromising investigation, auditors (under confidentiality safeguards), counterpart insurers when mandated by lawful representation—you authorize narrower flows until explicit representation executed.
                </p>
            </section>

            <section className="mt-12 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">7. Retention</h2>
                <p>
                    Intake transcripts and operational logs endure per business requirements, DFS expectations, underwriting obligations, statutes of limitation for fee/adjusting disputes—often multi-year—even if deletion requested earlier when conflict may remain latent. Derivative sanitized analytics may dwell longer anonymously.
                </p>
            </section>

            <section className="mt-12 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">8. Security</h2>
                <p>
                    We implement proportionate safeguards (TLS transit, segmented environments, disciplined least-privilege)—no architecture prevents every intrusion; escalate suspected incidents quickly referencing incident references we supply if activating formal representation.
                </p>
            </section>

            <section className="mt-12 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">9. Your choices & rights</h2>
                <p>
                    Residents of jurisdictions awarding privacy rights (Florida among evolving landscapes) may request access/delete/correct/export subject to carve-outs preserving claims/defense equities. Responses require identity verification—we may withhold partial categories where exceptions apply. Arbitration or venue provisions in eventual representation agreements govern certain disputes—not this introductory policy exclusively.
                </p>
                <p>You may withhold optional SMS consent entirely while still emailing us.</p>
            </section>

            <section className="mt-12 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">10. Changes</h2>
                <p>
                    Modifications post with updated revision date above. Continuing use after conspicuous posting signifies acceptance materially regarding site interactions—not necessarily silent amendment to signed engagements.
                </p>
            </section>

            <section className="mt-12 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">11. Contact</h2>
                <p>
                    Questions about this Privacy Policy—not claim strategy—route through the contact channels published on{" "}
                    <Link href="/#contact" className="text-brand-gold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/40 rounded-sm">
                        the site intake form.
                    </Link>
                </p>
            </section>
        </PrivacyTermsLayout>
    );
}
