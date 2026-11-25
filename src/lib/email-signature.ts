import { tradeName } from "@/config/branding";
import {
    businessPhoneDisplay,
    businessPhoneE164,
    primaryContactEmail,
    publicAdjusterLicenseNumber,
    siteUrl,
} from "@/config/site";

/**
 * Temporary display names. Swap these for real staff names later;
 * the layout stays the same.
 */
export const mailIdentities = {
    contact: { localPart: "contact", name: "Fred Jones", title: "Client Contact" },
    intake: { localPart: "intake", name: "Velma Dinkley", title: "Claims Intake" },
    admin: { localPart: "admin", name: "Daphne Blake", title: "Administration" },
    files: { localPart: "files", name: "Norville Rogers", title: "Records" },
    noreply: { localPart: "noreply", name: "Scooby-Doo", title: "Notifications" },
} as const;

export type MailIdentityKey = keyof typeof mailIdentities;

const firmName = `${tradeName} LLC`;

function mailDomain(): string {
    const domain = primaryContactEmail.split("@")[1]?.trim();
    return domain || "blacklinepublicadjusters.com";
}

export function identityEmail(key: MailIdentityKey): string {
    return `${mailIdentities[key].localPart}@${mailDomain()}`;
}

export function escapeHtml(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function logoUrl(): string {
    return `${siteUrl}/brand/blackline-logo.png`;
}

/** Table layout so Gmail and other clients keep the columns. */
export function signatureHtml(key: MailIdentityKey): string {
    const identity = mailIdentities[key];
    const email = identityEmail(key);
    const phoneHref = `tel:${businessPhoneE164}`;
    const license = publicAdjusterLicenseNumber
        ? `<div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;color:#5c5346;">Florida public adjuster ${escapeHtml(publicAdjusterLicenseNumber)}</div>`
        : "";

    return `<table cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-collapse:collapse;">
  <tr>
    <td style="padding:0 16px 0 0;vertical-align:middle;">
      <img src="${escapeHtml(logoUrl())}" width="148" alt="${escapeHtml(firmName)}" style="display:block;width:148px;height:auto;border:0;background:#000000;" />
    </td>
    <td style="padding:0 0 0 16px;border-left:2px solid #b8956a;vertical-align:middle;">
      <div style="font-family:Georgia,'Times New Roman',serif;font-size:16px;line-height:20px;color:#1c1915;">${escapeHtml(identity.name)}</div>
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:16px;letter-spacing:0.14em;text-transform:uppercase;color:#8a7349;padding-top:2px;">${escapeHtml(identity.title)}</div>
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:18px;color:#1c1915;padding-top:8px;">${escapeHtml(firmName)}</div>
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;padding-top:4px;">
        <a href="mailto:${escapeHtml(email)}" style="color:#1c1915;text-decoration:none;">${escapeHtml(email)}</a>
      </div>
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;">
        <a href="${escapeHtml(phoneHref)}" style="color:#1c1915;text-decoration:none;">${escapeHtml(businessPhoneDisplay)}</a>
      </div>
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;">
        <a href="${escapeHtml(siteUrl)}" style="color:#1c1915;text-decoration:none;">${escapeHtml(siteUrl.replace(/^https?:\/\//, ""))}</a>
      </div>
      ${license}
    </td>
  </tr>
</table>`;
}

export function signatureText(key: MailIdentityKey): string {
    const identity = mailIdentities[key];
    const lines = [
        "--",
        identity.name,
        identity.title,
        firmName,
        identityEmail(key),
        businessPhoneDisplay,
        siteUrl,
    ];
    if (publicAdjusterLicenseNumber) {
        lines.push(`Florida public adjuster ${publicAdjusterLicenseNumber}`);
    }
    return lines.join("\n");
}

export function noreplyFromAddress(): string {
    return `${mailIdentities.noreply.name} <${identityEmail("noreply")}>`;
}
