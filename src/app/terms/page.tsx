import type { Metadata } from "next";
import PrivacyTermsLayout from "@/components/legal/PrivacyTermsLayout";
import Link from "next/link";
import { primaryContactEmail, publicAdjusterLicenseNumber, siteUrl } from "@/config/site";

export const metadata: Metadata = {
    title: "Terms of use",
    description:
        "Rules for using the Blackline Public Adjusters website. A signed contract, not these terms, is what hires the firm.",
};

export default function TermsPage() {
    const publishedSite = siteUrl.startsWith("https://") ? siteUrl : "this website";
    return (
        <PrivacyTermsLayout>
            <h1 className="font-serif text-4xl tracking-tighter text-brand-white md:text-5xl">
                Terms of use
            </h1>
            <p className="mt-4 font-sans text-sm text-brand-slate md:text-base">
                Last updated <time dateTime="2026-11-09">November 9, 2026</time>. These terms apply to {publishedSite}, operated by Blackline Public Adjusters LLC
                {publicAdjusterLicenseNumber ? `. Florida DFS license ${publicAdjusterLicenseNumber}` : "."}
            </p>

            <section className="mt-14 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">Using the site</h2>
                <p>
                    You may read the site and send the contact form. Do not use it to send false information, to impersonate someone else, or to interfere with the site. If you do not agree with these terms, do not use the form.
                </p>
            </section>

            <section className="mt-12 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">We are not your adjuster until you sign a contract</h2>
                <p>
                    Information on this site is general. It is not a review of your policy, not a coverage opinion, and not legal advice. We are not a law firm. Sending the contact form, calling, or emailing does not hire Blackline and does not stop any deadline in your policy or under Florida law.
                </p>
                <p>
                    Representation starts only when a licensed public adjuster accepts the claim and you sign a written contract. That contract states the fee. Florida law caps a public adjuster’s fee. Nothing on this website promises a settlement amount or a result.
                </p>
            </section>

            <section className="mt-12 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">What you send us</h2>
                <p>
                    Tell us the facts as you know them. Do not leave out a fact you know matters to the claim. Our{" "}
                    <Link href="/privacy" className="text-brand-gold hover:underline">
                        privacy policy
                    </Link>{" "}
                    explains what we do with the form.
                </p>
            </section>

            <section className="mt-12 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">Text messages</h2>
                <p>
                    We text you only if you check the consent box. Consent is not required to contact us by phone or email. Reply STOP to opt out. Message frequency varies. Message and data rates may apply.
                </p>
            </section>

            <section className="mt-12 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">Our material</h2>
                <p>
                    The Blackline name, logo, and the text and photographs on this site belong to us unless a credit says otherwise. You may not copy them for your own commercial use.
                </p>
            </section>

            <section className="mt-12 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">No warranty for the website</h2>
                <p>
                    The site is provided as it is. We may change or remove pages. We do not warrant that the site will be available at all times. A claim’s outcome depends on the policy, the facts, and the carrier’s position. These terms do not limit a duty we cannot disclaim under Florida law once you have signed a contract with us.
                </p>
            </section>

            <section className="mt-12 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">Disputes about the website</h2>
                <p>
                    A dispute that is only about use of this website, and not about a signed adjusting contract, is governed by Florida law. Venue is in Miami-Dade County, Florida. A complaint to the Department of Financial Services about a license is not limited by this sentence.
                </p>
            </section>

            <section className="mt-12 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">Contact</h2>
                <p>
                    <a className="text-brand-gold hover:underline" href={`mailto:${primaryContactEmail}`}>
                        {primaryContactEmail}
                    </a>
                    {" · "}
                    <Link href="/#contact" className="text-brand-gold hover:underline">
                        Contact form
                    </Link>
                </p>
            </section>
        </PrivacyTermsLayout>
    );
}
