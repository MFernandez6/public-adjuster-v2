/**
 * Public site configuration. Set via environment variables in production
 * (see `.env.example`). Never commit secrets.
 */
export const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://blacklineadjusting.com";

/** E.164 for tel: links, e.g. +13055550100 */
export const businessPhoneE164 = process.env.NEXT_PUBLIC_BUSINESS_PHONE_E164?.trim() ?? "";

/** Human-readable phone for display (optional) */
export const businessPhoneDisplay =
    process.env.NEXT_PUBLIC_BUSINESS_PHONE_DISPLAY?.trim() ?? "";

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

export const publicAdjusterLicenseNumber =
    process.env.NEXT_PUBLIC_PUBLIC_ADJUSTER_LICENSE?.trim() ?? "";

export const primaryContactEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ?? "contact@blacklineadjusting.com";

export const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL?.trim() ?? "";
export const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() ?? "";
export const twitterUrl = process.env.NEXT_PUBLIC_TWITTER_URL?.trim() ?? "";

export function hasAnySocialUrl(): boolean {
    return Boolean(instagramUrl || linkedinUrl || twitterUrl);
}
