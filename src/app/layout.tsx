import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import { siteUrl } from "@/config/site";
import { legalEntityName, tradeName } from "@/config/branding";
import { professionalServiceStructuredData } from "@/lib/structured-data";

const structuredDataJson = JSON.stringify(professionalServiceStructuredData());

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
  weight: ["400", "500", "600", "700"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${tradeName} LLC | We Hold the Policy Accountable`,
    template: `%s | ${tradeName}`,
  },
  description: "Professional, authority-based public adjusting firm enforcing insurance contracts with precision. Expert claims management for residential, commercial, and industrial losses.",
  keywords: ["public adjuster", "insurance claims", "fire damage", "water damage", "storm damage", "forensic public adjusting", "insurance advocate"],
  authors: [{ name: legalEntityName }],
  openGraph: {
    title: `${tradeName} LLC | We Hold the Policy Accountable`,
    description: "Professional, authority-based public adjusting firm enforcing insurance contracts with precision.",
    url: siteUrl,
    siteName: tradeName,
    images: [
      {
        url: "/images/properties/commercial.png",
        width: 1200,
        height: 630,
        alt: `${tradeName} — Commercial Property Analysis`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${tradeName} LLC | We Hold the Policy Accountable`,
    description: "Professional, authority-based public adjusting firm enforcing insurance contracts with precision.",
    images: ["/images/properties/commercial.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${cinzel.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <Providers>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: structuredDataJson }}
          />
          {children}
        </Providers>
      </body>
    </html>
  );
}

