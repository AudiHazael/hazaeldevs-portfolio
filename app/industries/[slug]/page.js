import { notFound } from "next/navigation";

import { industries, getIndustryBySlug } from "@/lib/industries-data";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import IndustryHero from "@/components/industry/IndustryHero";
import LeadLeak from "@/components/industry/LeadLeak";
import SystemFix from "@/components/industry/SystemFix";
import IndustryFAQ from "@/components/industry/IndustryFAQ";
import IndustryCTA from "@/components/industry/IndustryCTA";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};

  const url = `https://www.hazaeldevs.com/industries/${industry.slug}`;

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    keywords: industry.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: industry.metaTitle,
      description: industry.metaDescription,
    },
  };
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `Website & Lead Generation System for ${industry.name}`,
    provider: {
      "@type": "ProfessionalService",
      name: "Haza'ElDevs",
      url: "https://www.hazaeldevs.com",
    },
    areaServed: "Global",
    audience: {
      "@type": "Audience",
      audienceType: industry.name,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: industry.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <main>
      <Navbar />
      {/* If your existing pages inject JSON-LD via metadata.other instead,
          move these two objects there for consistency — kept as inline
          scripts here since that's the documented App Router approach. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <IndustryHero industry={industry} />
      <LeadLeak industry={industry} />
      <SystemFix industry={industry} />
      <IndustryFAQ industry={industry} />
      <IndustryCTA industry={industry} />
      <Footer />
    </main>
  );
}
