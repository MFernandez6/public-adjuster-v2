/** Stable slugs for Insights posts (order matches `insightsPage.posts` in dictionaries). */
export const INSIGHT_SLUGS = [
    "hurricane-claim-tips",
    "six-reasons-hire-public-adjuster",
    "public-adjuster-fees-negotiable",
    "documentation-that-moves-the-file",
    "storm-claim-mistakes",
    "wind-claim-documentation",
    "sudden-vs-gradual-water-damage",
    "fire-claims-structure-contents",
    "hail-roofs-investment",
    "how-public-adjuster-strengthens-file",
    "total-loss-vs-partial",
    "deductible-planning",
] as const;

export type InsightSlug = (typeof INSIGHT_SLUGS)[number];

export function getInsightSlugIndex(slug: string): number {
    const i = INSIGHT_SLUGS.indexOf(slug as InsightSlug);
    return i;
}
