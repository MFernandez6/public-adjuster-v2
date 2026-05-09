import type { Metadata } from "next";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import Navbar from "@/components/sections/Navbar";
import { INSIGHT_SLUGS, type InsightSlug } from "@/lib/insights";
import { en } from "@/i18n/en";

const Footer = dynamic(() => import("@/components/sections/Footer"), { loading: () => null });
const InsightArticle = dynamic(() => import("@/components/insights/InsightArticle"));

export async function generateStaticParams() {
    return INSIGHT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const idx = INSIGHT_SLUGS.indexOf(slug as InsightSlug);
    if (idx < 0) {
        return { title: "Insight" };
    }
    const post = en.insightsPage.posts[idx];
    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
        },
    };
}

export default async function InsightDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    if (!INSIGHT_SLUGS.includes(slug as InsightSlug)) notFound();

    return (
        <main className="min-h-screen bg-brand-navy text-brand-white font-sans">
            <Navbar />
            <section className="relative overflow-hidden border-b border-brand-white/10 bg-[#020617] pb-20 pt-28 md:pb-28 md:pt-32">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(198,168,91,0.07),transparent_55%)]" />
                <div className="container relative z-10 mx-auto px-4">
                    <InsightArticle slug={slug as InsightSlug} />
                </div>
            </section>
            <Footer />
        </main>
    );
}
