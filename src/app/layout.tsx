import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: {
    default: "BLACKLINE Adjusting LLC | We Hold the Policy Accountable",
    template: "%s | BLACKLINE Adjusting"
  },
  description: "Professional, authority-based public adjusting firm enforcing insurance contracts with precision. Expert claims management for residential, commercial, and industrial losses.",
  keywords: ["public adjuster", "insurance claims", "fire damage", "water damage", "storm damage", "forensic public adjusting", "insurance advocate"],
  authors: [{ name: "BLACKLINE Adjusting LLC" }],
  openGraph: {
    title: "BLACKLINE Adjusting LLC | We Hold the Policy Accountable",
    description: "Professional, authority-based public adjusting firm enforcing insurance contracts with precision.",
    url: "https://blacklineadjusting.com",
    siteName: "BLACKLINE Adjusting",
    images: [
      {
        url: "/images/properties/commercial.png",
        width: 1200,
        height: 630,
        alt: "BLACKLINE Adjusting - Commercial Property Analysis",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BLACKLINE Adjusting LLC | We Hold the Policy Accountable",
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
          {children}
        </Providers>
      </body>
    </html>
  );
}

