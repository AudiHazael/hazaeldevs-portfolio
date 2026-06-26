import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
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
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Haza'ElDevs — React Developer for Small Business Websites",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@hazaeltweets",
    creator: "@hazaeltweets",
    title: "Haza'ElDevs | React Developer for Small Business Websites",
    description:
      "Fast, credible websites for small businesses and startups. Based in Lagos, serving clients globally.",
    images: ["/og-preview.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  alternates: {
    canonical: "https://www.hazaeldevs.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
