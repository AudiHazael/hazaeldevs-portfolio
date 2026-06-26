import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import CTA from "@/components/sections/CTA";
import Reviews from "@/components/sections/Reviews/ReviewComp";
import ClientLogoSwiper from "@/components/sections/ClientLogoSwiper";
import Tools from "@/components/sections/Tools";
import Process from "@/components/sections/Process";
import HaulConnectPreview from "@/components/sections/HaulConnectPreview";
import Contact from "@/components/sections/Contact";

// ─── METADATA ────────────────────────────────────────────────────────────────
export const metadata = {
  alternates: {
    canonical: "https://www.hazaeldevs.com",
  },
};

// ─── JSON-LD SCHEMAS ─────────────────────────────────────────────────────────
// WebSite: enables Google Sitelinks search box and establishes the site entity.
// ProfessionalService: local SEO signal — appears in Google Business-style results.
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Haza'ElDevs",
  url: "https://www.hazaeldevs.com",
  description:
    "Websites, landing pages, and business systems for small businesses and startups. Built by Audi Hazael in Lagos, Nigeria.",
  author: { "@type": "Person", name: "Audi Hazael" },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.hazaeldevs.com/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Haza'ElDevs",
  url: "https://www.hazaeldevs.com",
  logo: "https://www.hazaeldevs.com/Logo-Image.png",
  image: "https://www.hazaeldevs.com/og-preview.png",
  description:
    "Website design, development, and business systems for small businesses and startups. Based in Lagos, Nigeria — serving clients globally.",
  founder: {
    "@type": "Person",
    name: "Audi Hazael",
    sameAs: ["https://x.com/hazaeltweets", "https://github.com/AudiHazael"],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  areaServed: [
    "Nigeria",
    "United Kingdom",
    "United States",
    "Canada",
    "Global",
  ],
  priceRange: "$300 – $1500+",
  currenciesAccepted: "USD",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Business Website" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Landing Page" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Systems & Workflows",
        },
      },
    ],
  },
  sameAs: ["https://x.com/hazaeltweets", "https://github.com/AudiHazael"],
};

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />

      <Navbar />
      <main>
        <Hero />
        <About />
        <ClientLogoSwiper />
        <Services />
        <Tools />
        <Portfolio />
        <HaulConnectPreview />
        <Reviews />
        <CTA />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
