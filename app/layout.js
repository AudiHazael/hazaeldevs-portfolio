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
    default: "Haza'ElDevs | React Developer for Small Business Websites",
    template: "%s | Haza'ElDevs",
  },

  description:
    "Audi Hazael builds fast, credible websites and landing pages for small businesses and startups. Based in Lagos, Nigeria — serving clients globally.",

  keywords: [
    "React developer for small businesses",
    "freelance web developer Nigeria",
    "business website designer Lagos",
    "landing page developer",
    "startup website developer",
    "affordable website packages",
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
    title: "Haza'ElDevs | React Developer for Small Business Websites",
    description:
      "Fast, credible websites for small businesses and startups. Based in Lagos, serving clients globally.",
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
    title: "Haza'ElDevs | React Developer for Small Business Websites",
    description:
      "Fast, credible websites for small businesses and startups. Based in Lagos, serving clients globally.",
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
