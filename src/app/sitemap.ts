import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/site";
import { INSIGHT_SLUGS } from "@/lib/insights";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = new URL(siteUrl);
    const staticPaths = [
        "",
        "/about",
        "/about/faq",
        "/insights",
        "/claims/homeowners",
        "/claims/commercial",
        "/claims/process",
        "/privacy",
        "/terms",
        ...INSIGHT_SLUGS.map((slug) => `/insights/${slug}`),
    ];
    const now = new Date();
    return staticPaths.map((path) => ({
        url: new URL(path, base).href,
        lastModified: now,
        changeFrequency: path.startsWith("/insights/") ? "monthly" : "weekly",
        priority: path === "" ? 1 : path.startsWith("/claims") ? 0.85 : 0.7,
    }));
}
