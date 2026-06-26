import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import HaulConnect from "@/components/sections/HaulConnect";
import CTA from "@/components/sections/CTA";

// ─── SCHEMAS ─────────────────────────────────────────────────────────────────
const softwareServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Business Systems and Workflow Development",
  name: "Business Systems Development",
  description:
    "Design and development of internal tools, operations dashboards, and automated business workflows that replace manual processes and help businesses scale.",
  provider: {
    "@type": "ProfessionalService",
    name: "Haza'ElDevs",
    url: "https://www.hazaeldevs.com",
    founder: { "@type": "Person", name: "Audi Hazael" },
    areaServed: ["Nigeria", "Global"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Systems & Workflow Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Operations Dashboard",
        description:
          "Custom-built internal dashboards to manage leads, jobs, customers, and team workflows — replacing spreadsheets and third-party tools like Airtable.",
      },
      {
        "@type": "Offer",
        name: "Automated Workflow System",
        description:
          "Automated email notifications, document generation (PDFs, invoices, manifests), and status-based communication templates.",
      },
      {
        "@type": "Offer",
        name: "Business Platform (Full Stack)",
        description:
          "End-to-end platforms combining a public-facing website with a complete internal operations system — built to run a real business.",
      },
    ],
  },
};

const haulConnectAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "HaulConnect",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://haulconnect.com.ng",
  description:
    "A full-stack logistics operator platform for the Nigerian haulage market. Includes a public website, operations dashboard, carrier management, PDF generation, and transactional email system.",
  author: {
    "@type": "Person",
    name: "Audi Hazael",
    url: "https://www.hazaeldevs.com",
  },
  featureList: [
    "Dual Kanban pipeline for leads and jobs",
    "Real-time margin calculator",
    "PDF manifest generator with Naira symbol support",
    "Pre-filled WhatsApp message templates",
    "7 transactional email templates via Resend",
    "Sanitised read-only preview dashboard for buyers",
    "Blog CMS",
    "Carrier management with verification status",
  ],
  offers: {
    "@type": "Offer",
    description:
      "Available as a white-label product for haulage operators and entrepreneurs.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.hazaeldevs.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Systems",
      item: "https://www.hazaeldevs.com/systems",
    },
  ],
};

// ─── METADATA ────────────────────────────────────────────────────────────────
export const metadata = {
  title: "Business Systems & Workflow Development",
  description:
    "I design and build the internal tools and automated workflows that replace spreadsheets and WhatsApp threads — so your business can scale without the manual chaos. Based in Lagos, serving clients globally.",
  keywords: [
    "business systems developer Nigeria",
    "workflow automation developer Lagos",
    "operations dashboard developer",
    "internal tools developer Nigeria",
    "custom admin dashboard Next.js",
    "logistics platform developer",
    "business process automation Nigeria",
    "replace Airtable with custom dashboard",
  ],
  alternates: { canonical: "https://www.hazaeldevs.com/systems" },
  openGraph: {
    title: "Business Systems & Workflow Development | Haza'ElDevs",
    description:
      "Internal tools, operations dashboards, and automated workflows that replace manual processes. Based in Lagos, serving clients globally.",
    url: "https://www.hazaeldevs.com/systems",
    images: [
      {
        url: "/og-systems.png",
        width: 1200,
        height: 630,
        alt: "Haza'ElDevs — Business Systems",
      },
    ],
  },
  other: {
    "schema-service": JSON.stringify(softwareServiceSchema),
    "schema-app": JSON.stringify(haulConnectAppSchema),
    "schema-breadcrumb": JSON.stringify(breadcrumbSchema),
  },
};

// ─── STATIC DATA — server-rendered for SEO ───────────────────────────────────
const capabilities = [
  {
    title: "Operations Dashboards",
    desc: "Custom admin panels that give you a full view of your business — leads, jobs, customers, documents — in one place. No spreadsheets, no switching between apps.",
  },
  {
    title: "Automated Workflows",
    desc: "Status-triggered email notifications, pre-filled WhatsApp message templates, PDF generation, and document delivery — automated so you focus on the work, not the admin.",
  },
  {
    title: "Lead & Pipeline Management",
    desc: "Kanban-style pipeline tools that track enquiries from first contact to paid invoice, with one-click promotion between stages and full history on every record.",
  },
  {
    title: "Full-Stack Business Platforms",
    desc: "End-to-end platforms that combine a credible public website with a complete internal system — built to run a real business, not just look like one.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function SystemsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* ── Page header ── */}
        <section className="px-6 md:px-10 py-16 md:max-w-[80%] mx-auto">
          <span className="text-purple-300/50 text-sm font-semibold uppercase tracking-widest">
            Business Systems
          </span>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold text-zinc-50 leading-tight max-w-3xl">
            Replace the spreadsheets.{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-300 to-fuchsia-400">
              Build the system.
            </span>
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl leading-relaxed">
            Most small businesses hit a ceiling not because demand dries up, but
            because their operations can&apos;t keep up. Leads tracked on
            WhatsApp. Jobs managed in spreadsheets. Documents sent manually.
            <br />
            <br />I build the internal tools that replace all of that —
            custom-built for how your business actually works, not forced into a
            SaaS tool that almost fits.
          </p>
        </section>

        {/* ── Capabilities grid ── */}
        <section className="px-6 md:px-10 pb-16 md:max-w-[80%] mx-auto">
          <h2 className="text-2xl font-bold text-zinc-50 mb-8">What I build</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {capabilities.map(({ title, desc }) => (
              <div
                key={title}
                className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6 space-y-2"
              >
                <h3 className="text-zinc-50 font-semibold">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── HaulConnect case study ── */}
        <HaulConnect />

        <CTA />
      </main>
      <Footer />
    </>
  );
}
