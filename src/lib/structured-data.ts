import {
    siteUrl,
    businessPhoneE164,
    primaryContactEmail,
    getBusinessAddressLines,
} from "@/config/site";
import { legalEntityName } from "@/config/branding";

/** JSON-LD for search engines — ProfessionalService aligns with regulated representation. */
export function professionalServiceStructuredData(): Record<string, unknown> {
    const lines = getBusinessAddressLines();
    const data: Record<string, unknown> = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: legalEntityName,
        url: siteUrl,
        email: primaryContactEmail,
        description:
            "Blackline PA (Blackline Public Adjusters LLC) — Florida licensed public adjusting documenting property losses and negotiating insurance claims.",
        areaServed: {
            "@type": "AdministrativeArea",
            name: "Florida",
        },
        priceRange: "$$",
    };

    const phone = businessPhoneE164.trim();
    if (phone) {
        data.telephone = phone;
    }

    if (lines.length > 0) {
        data.address = {
            "@type": "PostalAddress",
            streetAddress: lines[0],
            ...(lines[1]
                ? { addressLocality: lines.slice(1).join(", ").replace(/\s+/g, " ").trim() }
                : {}),
            addressCountry: "US",
        };
    }

    return data;
}
