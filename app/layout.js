import "./globals.css";

import { Geist, Outfit } from "next/font/google";

import Analytics from "@/components/ui/Analytics";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-body",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

// ─── Site-wide default metadata ─────────────────────────────────────────────
// Every page inherits this and can override specific fields via its own
// `export const metadata` — no react-helmet-async needed.
export const metadata = {
  metadataBase: new URL("https://www.hazaeldevs.com"),

  title: {
    default: "Web Design & Lead Generation Systems | Haza'ElDevs",
    template: "%s | Haza'ElDevs",
  },

  description:
    "Conversion-focused websites and lead-generation systems for small businesses and startups. Based in Lagos, working globally.",

  keywords: [
    "web designer for small business",
    "lead generation website developer",
    "website that converts leads",
    "small business website developer Nigeria",
    "business growth systems developer",
    "landing page developer for lead generation",
    "workflow automation developer Nigeria",
    "hire Next.js developer",
    "Haza'ElDevs",
    "Audi Hazael",
  ],
  authors: [{ name: "Audi Hazael", url: "https://www.hazaeldevs.com" }],
  creator: "Audi Hazael",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.hazaeldevs.com",
    siteName: "Haza'ElDevs",
    title: "Web Design & Business Systems Developer | Haza'ElDevs",
    description:
      "Conversion-focused websites, landing pages, and business systems for small businesses and startups.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Haza'ElDevs — React Developer for Small Business Websites",
      },
    ],
    icons: {
      icon: "/icon.png",
    },
  },

  twitter: {
    card: "summary_large_image",
    site: "@hazaeltweets",
    creator: "@hazaeltweets",
    title: "Web Design & Business Systems Developer | Haza'ElDevs",
    description:
      "Conversion-focused websites, landing pages, and business systems for small businesses and startups.",
    images: ["/hazaeldevs_og_preview.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://www.hazaeldevs.com",
  },
};

export const viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} ${outfit.variable}`}>
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
