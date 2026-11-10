/**
 * Public site configuration. Set via environment variables in production
 * (see `.env.example`). Never commit secrets.
 */
function resolveSiteUrl(): string {
    const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
    if (explicit) return explicit.replace(/\/$/, "");
    const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
    if (vercel) return `https://${vercel}`;
    return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();

/** E.164 for tel: links, e.g. +13055550100 */
export const businessPhoneE164 = process.env.NEXT_PUBLIC_BUSINESS_PHONE_E164?.trim() || "+17864173869";

/** Human-readable phone for display (optional) */
export const businessPhoneDisplay =
    process.env.NEXT_PUBLIC_BUSINESS_PHONE_DISPLAY?.trim() || "(786) 417-3869";

/**
 * Physical / mailing address lines. Use `|` in env to separate lines:
 * NEXT_PUBLIC_BUSINESS_ADDRESS_LINES=123 Main St|Miami, FL 33101
 * If unset, UI shows a truthful service-area line instead of placeholders.
 */
export function getBusinessAddressLines(): string[] {
    const raw = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_LINES?.trim();
    if (raw) {
        return raw.split("|").map((s) => s.trim()).filter(Boolean);
    }
    return [];
}

/**
 * Advertising disclosure. Empty until NEXT_PUBLIC_PUBLIC_ADJUSTER_LICENSE is
 * the public-adjuster number counsel approves. G279764 is a 6-20 license and
 * must not be printed as the public-adjuster number.
 */
const BLOCKED_LICENSE_NUMBERS = new Set(["G279764"]);

export const publicAdjusterLicenseNumber = (() => {
    const value = process.env.NEXT_PUBLIC_PUBLIC_ADJUSTER_LICENSE?.trim() ?? "";
    if (!value || BLOCKED_LICENSE_NUMBERS.has(value.toUpperCase())) return "";
    return value;
})();

export const primaryContactEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "contact@blacklinepa.com";

export const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL?.trim() ?? "";
export const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() ?? "";
export const twitterUrl = process.env.NEXT_PUBLIC_TWITTER_URL?.trim() ?? "";

export function hasAnySocialUrl(): boolean {
    return Boolean(instagramUrl || linkedinUrl || twitterUrl);
}
