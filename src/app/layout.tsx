import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "IRONCLAUSE Adjusting LLC | We Hold the Policy Accountable",
    template: "%s | IRONCLAUSE Adjusting"
  },
  description: "Professional, authority-based public adjusting firm enforcing insurance contracts with precision. Expert claims management for residential, commercial, and industrial losses.",
  keywords: ["public adjuster", "insurance claims", "fire damage", "water damage", "storm damage", "forensic public adjusting", "insurance advocate"],
  authors: [{ name: "IRONCLAUSE Adjusting LLC" }],
  openGraph: {
    title: "IRONCLAUSE Adjusting LLC | We Hold the Policy Accountable",
    description: "Professional, authority-based public adjusting firm enforcing insurance contracts with precision.",
    url: "https://ironclause.com",
    siteName: "IRONCLAUSE Adjusting",
    images: [
      {
        url: "/images/properties/commercial.png",
        width: 1200,
        height: 630,
        alt: "IRONCLAUSE Adjusting - Commercial Property Analysis",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IRONCLAUSE Adjusting LLC | We Hold the Policy Accountable",
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

