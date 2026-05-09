"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { INSIGHT_SLUGS, type InsightSlug } from "@/lib/insights";
import { getInsightBody } from "@/content/insights-article-bodies";

export default function InsightArticle({ slug }: { slug: InsightSlug }) {
    const { t, locale } = useLanguage();
    const idx = INSIGHT_SLUGS.indexOf(slug);
    const paragraphs = getInsightBody(slug, locale);

    if (idx < 0 || !paragraphs?.length) {
        return (
            <p className="text-center font-sans text-brand-slate">
                {locale === "es" ? "No se encontró el artículo." : "Insight not available."}{" "}
                <Link href="/insights" className="text-brand-gold underline">
                    {locale === "es" ? "Volver" : "Back to Insights"}
                </Link>
            </p>
        );
    }

    return (
        <article className="mx-auto max-w-3xl">
            <Link
                href="/insights"
                className="mb-12 inline-flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold/90 transition hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/40 rounded-sm"
            >
                <ArrowLeft className="h-3 w-3" aria-hidden />
                {locale === "es" ? "Perspectivas" : "Insights"}
            </Link>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold/90 md:text-[11px]">
                    {t(`insightsPage.posts.${idx}.category`)}
                </span>
                <h1 className="mt-4 font-serif text-4xl leading-[1.05] tracking-tighter text-brand-white md:text-6xl">
                    {t(`insightsPage.posts.${idx}.title`)}
                </h1>
                <p className="mt-6 font-sans text-lg leading-relaxed text-brand-slate md:text-xl">
                    {t(`insightsPage.posts.${idx}.excerpt`)}
                </p>
            </motion.div>
            <div className="mt-14 space-y-6 border-t border-brand-white/10 pt-12 font-sans text-[15px] leading-relaxed text-brand-slate md:text-[17px] md:leading-relaxed">
                {paragraphs.map((p, i) => (
                    <p key={i} className="text-brand-white/85">
                        {p}
                    </p>
                ))}
            </div>
            <p className="mt-12 rounded-xl border border-brand-white/10 bg-brand-white/[0.02] p-6 font-sans text-sm italic leading-relaxed text-brand-slate">
                {locale === "es"
                    ? "Este artículo es orientación general, no asesoría legal; aplican los hechos y la póliza de su caso."
                    : "This article is general guidance—not legal advice. Your facts and policy control outcomes."}{" "}
                <Link href="/#contact" className="not-italic text-brand-gold hover:underline">
                    {locale === "es" ? "Hable con Blackline PA →" : "Talk with Blackline PA →"}
                </Link>
            </p>
        </article>
    );
}
