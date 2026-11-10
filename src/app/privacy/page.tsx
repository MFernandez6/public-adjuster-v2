import type { Metadata } from "next";
import PrivacyTermsLayout from "@/components/legal/PrivacyTermsLayout";
import Link from "next/link";
import { primaryContactEmail, publicAdjusterLicenseNumber, siteUrl } from "@/config/site";

export const metadata: Metadata = {
    title: "Privacy policy",
    description:
        "How Blackline Public Adjusters LLC uses information you send through this website, including the contact form and optional text messages.",
};

export default function PrivacyPage() {
    const publishedSite = siteUrl.startsWith("https://") ? siteUrl : "this website";
    return (
        <PrivacyTermsLayout>
            <h1 className="font-serif text-4xl tracking-tighter text-brand-white md:text-5xl">
                Privacy policy
            </h1>
            <p className="mt-4 font-sans text-sm text-brand-slate md:text-base">
                Last updated <time dateTime="2026-11-09">November 9, 2026</time>. This policy describes how Blackline Public Adjusters LLC (“Blackline,” “we”) handles information collected on{" "}
                <span className="text-brand-white/85">{publishedSite}</span>
                {publicAdjusterLicenseNumber ? `. Florida DFS license ${publicAdjusterLicenseNumber}` : "."}
            </p>

            <section className="mt-14 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">What this policy covers</h2>
                <p>
                    It covers this website and the contact form. A signed public-adjuster contract, if you later hire us, controls the claim file. Submitting the form does not hire us and does not create an attorney-client relationship. We are public adjusters, not a law firm.
                </p>
            </section>

            <section className="mt-12 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">Information we collect</h2>
                <p>If you use the contact form, we receive the details you type:</p>
                <ul className="list-disc space-y-2 pl-5">
                    <li>Name, email, phone, property address, ZIP code, and the type of damage you select.</li>
                    <li>Whether you checked the optional text-message box.</li>
                    <li>The time of the submission.</li>
                </ul>
                <p>
                    Our host also records ordinary server logs, such as IP address and browser type, so we can run the site and limit spam. We do not ask you to create an account on this site.
                </p>
            </section>

            <section className="mt-12 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">How we use it</h2>
                <p>We use a submission to:</p>
                <ul className="list-disc space-y-2 pl-5">
                    <li>Reply to you about the loss you described.</li>
                    <li>Decide whether we can take the matter.</li>
                    <li>Keep a record of the inquiry.</li>
                    <li>Block repeated or automated submissions.</li>
                </ul>
                <p>We do not sell this information. We do not use the form to promise a settlement amount.</p>
            </section>

            <section className="mt-12 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">Who receives it</h2>
                <p>
                    The form is emailed to {primaryContactEmail}. If automatic email is unavailable, your own mail app can send the same details to that address. The company that hosts the site, and the company that delivers the email, process the message so it can reach us. We may also share information if a law, a regulator, or a signed contract requires it.
                </p>
            </section>

            <section className="mt-12 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">Text messages</h2>
                <p>
                    The text-message box is optional. Leaving it unchecked does not stop you from submitting the form. If you check it, we may text the number you gave us about that inquiry. Reply STOP to opt out and HELP for help. Your carrier’s message and data rates may apply.
                </p>
            </section>

            <section className="mt-12 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">How long we keep it</h2>
                <p>
                    We keep inquiry records long enough to respond, and longer when a claim file, a fee question, or a legal duty requires it. You can ask us to correct or delete an inquiry that did not become a claim file. Write to {primaryContactEmail}. We may need to confirm you are the person who submitted it, and we may keep what the law requires us to keep.
                </p>
            </section>

            <section className="mt-12 space-y-4 font-sans text-sm leading-relaxed text-brand-slate md:text-[15px]">
                <h2 className="font-serif text-2xl text-brand-white md:text-3xl">Changes</h2>
                <p>
                    If we change this policy, we will update the date at the top. The change applies to later use of the site. It does not rewrite a contract you have already signed.
                </p>
                <p>
                    Questions about this policy:{" "}
                    <a className="text-brand-gold hover:underline" href={`mailto:${primaryContactEmail}`}>
                        {primaryContactEmail}
                    </a>
                    , or the{" "}
                    <Link href="/#contact" className="text-brand-gold hover:underline">
                        contact form
                    </Link>
                    .
                </p>
            </section>
        </PrivacyTermsLayout>
    );
}
