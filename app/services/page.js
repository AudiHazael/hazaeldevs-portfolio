import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import CTA from "@/components/sections/CTA";
import Image from "next/image";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import {
  GlobeAltIcon,
  MegaphoneIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

// ─── SCHEMAS ─────────────────────────────────────────────────────────────────
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Web Design and Development",
  provider: {
    "@type": "ProfessionalService",
    name: "Haza'ElDevs",
    url: "https://www.hazaeldevs.com",
    founder: { "@type": "Person", name: "Audi Hazael" },
    areaServed: [
      "Nigeria",
      "United Kingdom",
      "United States",
      "Canada",
      "Global",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Website & Systems Packages",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Starter Website",
        description:
          "1–3 page mobile-responsive website with contact form and basic SEO.",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          minPrice: "300",
          maxPrice: "500",
        },
      },
      {
        "@type": "Offer",
        name: "Standard Website",
        description:
          "4–6 page custom-designed website, SEO optimised, CMS if needed.",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          minPrice: "600",
          maxPrice: "1200",
        },
      },
      {
        "@type": "Offer",
        name: "Growth Website & Systems",
        description:
          "6+ pages, animations, integrations, business workflow systems, and ongoing support.",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          minPrice: "1500",
        },
      },
    ],
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
      name: "Services",
      item: "https://www.hazaeldevs.com/services",
    },
  ],
};

export const metadata = {
  title: "Web Design & Development Services for Small Businesses",
  description:
    "Custom websites, landing pages, and business systems for small businesses and startups. Built with Next.js, designed for clarity and conversion. Based in Lagos, Nigeria — serving clients globally.",
  keywords: [
    "web design services for small businesses",
    "affordable website packages Nigeria",
    "landing page developer Lagos",
    "business website designer",
    "Next.js developer Nigeria",
    "business systems developer",
    "workflow automation developer Nigeria",
  ],
  alternates: { canonical: "https://www.hazaeldevs.com/services" },
  openGraph: {
    title: "Web Design & Development Services | Haza'ElDevs",
    description:
      "Websites, landing pages, and business systems for small businesses and startups.",
    url: "https://www.hazaeldevs.com/services",
    images: [
      {
        url: "/og-services.png",
        width: 1200,
        height: 630,
        alt: "Haza'ElDevs Services",
      },
    ],
  },
  other: {
    "schema-service": JSON.stringify(serviceSchema),
    "schema-breadcrumb": JSON.stringify(breadcrumbSchema),
  },
};

// ─── DATA ────────────────────────────────────────────────────────────────────
const offerings = [
  {
    icon: GlobeAltIcon,
    tag: "Most popular",
    title: "Business Website",
    desc: "A clear, professional website that helps people quickly understand who you are, what you do, and how to get in touch — before the first call.",
    deliverables: [
      "Up to 6 pages, fully responsive",
      "Service pages written for real visitors",
      "Contact and enquiry flow",
      "Basic on-page SEO",
      "Mobile-first design",
    ],
    img: "/business.png",
    cta: "Start with a website",
  },
  {
    icon: MegaphoneIcon,
    tag: null,
    title: "Landing & Marketing Page",
    desc: "A single-purpose page with one clear goal — a booking, a sign-up, a quote request. Designed to explain fast and convert.",
    deliverables: [
      "One focused conversion goal",
      "Benefit-led copywriting structure",
      "Mobile-optimised layout",
      "Fast load, easy to share",
      "Analytics-ready",
    ],
    img: "/landing.png",
    cta: "Build a landing page",
  },
  {
    icon: CpuChipIcon,
    tag: "New",
    title: "Business Systems & Workflows",
    desc: "When a website isn't enough — I build the internal tools and automated workflows that replace spreadsheets and let your business run without you managing every step.",
    deliverables: [
      "Operations dashboards & admin panels",
      "Lead and pipeline management",
      "Automated email notifications",
      "PDF and document generation",
      "WhatsApp workflow integration",
    ],
    img: "/ecommerce.png",
    cta: "See a real example",
    ctaHref: "/systems",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    desc: "You describe your business and what you need. No lengthy forms — a WhatsApp message is fine. I ask the right questions.",
  },
  {
    step: "02",
    title: "Scope & Quote",
    desc: "I send a clear scope document with timeline and price. You know exactly what you're getting before any work begins.",
  },
  {
    step: "03",
    title: "Design & Build",
    desc: "Work starts. I send written updates at each milestone — no unnecessary calls, no disappearing for weeks.",
  },
  {
    step: "04",
    title: "Review & Refine",
    desc: "You review the work and request changes. Revisions are included. Nothing ships until you're satisfied.",
  },
  {
    step: "05",
    title: "Launch & Hand-off",
    desc: "Your site goes live. You get everything — code, credentials, and a walkthrough of how to manage it yourself.",
  },
];

const qualities = [
  {
    icon: DevicePhoneMobileIcon,
    title: "Mobile-first",
    desc: "Most of your visitors are on their phones. Every layout is designed for mobile and scaled up — not the other way around.",
  },
  {
    icon: BoltIcon,
    title: "Fast by default",
    desc: "Built with Next.js — server-rendered, image-optimised, and scored well on Core Web Vitals out of the box.",
  },
  {
    icon: MagnifyingGlassIcon,
    title: "SEO-structured",
    desc: "Semantic HTML, meta tags, Open Graph, auto-generated sitemaps, and structured data on every page.",
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: "Scope-first process",
    desc: "Nothing ambiguous. Scope, price, and timeline are agreed in writing before a single line of code is written.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "$300 – $500",
    desc: "For businesses that need a clean, credible online presence fast.",
    features: [
      "1–3 pages",
      "Mobile responsive",
      "Contact form",
      "Basic on-page SEO",
      "Deployed & handed off",
    ],
    highlight: false,
    cta: "Get a quote",
  },
  {
    name: "Standard",
    price: "$600 – $1,200",
    desc: "For businesses ready to invest in a proper website that works hard.",
    features: [
      "4–6 pages",
      "Custom design",
      "SEO optimised",
      "CMS (if needed)",
      "2 rounds of revisions",
      "30-day post-launch support",
    ],
    highlight: true,
    cta: "Get a quote",
  },
  {
    name: "Growth",
    price: "$1,500+",
    desc: "For businesses that need more — a full site plus the systems behind it.",
    features: [
      "6+ pages",
      "Animations & interactions",
      "Third-party integrations",
      "Business systems / dashboard",
      "Ongoing support available",
      "Custom quote",
    ],
    highlight: false,
    cta: "Discuss your project",
  },
];

const waLink = (msg) =>
  `https://wa.me/2347039404909?text=${encodeURIComponent(msg)}`;

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 text-zinc-100">
        {/* ── HERO ── */}
        <section className="px-6 md:px-10 pt-16 pb-20 md:max-w-[80%] mx-auto">
          <span className="text-purple-300/50 text-sm font-semibold uppercase tracking-widest">
            Services
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-zinc-50 leading-none tracking-tight max-w-3xl">
            What I{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-300 to-fuchsia-400">
              build
            </span>{" "}
            for you.
          </h1>
          <p className="mt-6 text-gray-300 text-lg max-w-2xl leading-relaxed">
            Websites that establish credibility. Landing pages that convert.
            Internal systems that replace the manual work slowing your business
            down. All of it designed to actually work — not just look good.
          </p>

          {/* Quick trust signals */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-400">
            {[
              "Based in Lagos, working globally",
              "USD pricing, clear scope",
              "Built with Next.js",
              "Replies within 24 hours",
            ].map((signal) => (
              <span key={signal} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400/60 shrink-0" />
                {signal}
              </span>
            ))}
          </div>
        </section>

        {/* ── OFFERINGS ── */}
        <section className="px-6 md:px-10 py-20 border-t border-zinc-800 md:max-w-[80%] mx-auto space-y-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-50">
              What I offer
            </h2>
            <p className="mt-2 text-gray-400 max-w-lg">
              Three types of work, each with a clear purpose.
            </p>
          </div>

          <div className="space-y-5">
            {offerings.map((offer, i) => {
              const Icon = offer.icon;
              return (
                <div
                  key={offer.title}
                  className="group grid grid-cols-1 lg:grid-cols-5 gap-0 bg-zinc-900/40 hover:bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  {/* Image — 2 cols */}
                  <div className="lg:col-span-2 relative h-56 lg:h-auto min-h-50">
                    <Image
                      src={offer.img}
                      alt={offer.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-purple-900/50 mix-blend-multiply pointer-events-none" />
                  </div>

                  {/* Content — 3 cols */}
                  <div className="lg:col-span-3 p-8 flex flex-col justify-between gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-purple-400/80" />
                        {offer.tag && (
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/20">
                            {offer.tag}
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-zinc-50">
                        {offer.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {offer.desc}
                      </p>

                      {/* Deliverables */}
                      <ul className="space-y-1.5 pt-2">
                        {offer.deliverables.map((d) => (
                          <li
                            key={d}
                            className="flex items-start gap-2 text-sm text-gray-400"
                          >
                            <span className="text-purple-400 mt-0.5 shrink-0">
                              ✦
                            </span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={
                        offer.ctaHref
                          ? undefined
                          : waLink(
                              `Hi Hazael, I'm interested in a ${offer.title}. Here's what I need: [brief description]`,
                            )
                      }
                      {...(offer.ctaHref
                        ? { href: offer.ctaHref }
                        : { target: "_blank", rel: "noopener noreferrer" })}
                      className="self-start inline-flex items-center gap-2 text-sm font-semibold text-purple-300 hover:text-white transition-colors group/link"
                    >
                      {offer.cta}
                      <ArrowLongRightIcon className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="px-6 md:px-10 py-20 border-t border-zinc-800">
          <div className="md:max-w-[80%] mx-auto">
            <div className="mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-50">
                How it works
              </h2>
              <p className="mt-2 text-gray-400 max-w-lg">
                A defined process from first message to launch. No surprises.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line — desktop only */}
              <div className="hidden md:block absolute left-4.75 top-2 bottom-2 w-px bg-zinc-800" />

              <div className="space-y-10">
                {process.map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-8 items-start">
                    {/* Step marker */}
                    <div className="shrink-0 w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center z-10">
                      <span className="text-xs font-bold text-purple-400">
                        {step}
                      </span>
                    </div>
                    <div className="pb-2">
                      <h3 className="font-semibold text-zinc-50 text-lg">
                        {title}
                      </h3>
                      <p className="mt-1 text-gray-400 text-sm leading-relaxed max-w-xl">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── QUALITIES ── */}
        <section className="px-6 md:px-10 py-20 border-t border-zinc-800">
          <div className="md:max-w-[80%] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden order-last lg:order-first">
                <Image
                  src="/hazael-audi (2).jpg"
                  alt="Audi Hazael — Website and systems developer"
                  width={600}
                  height={700}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-purple-900/40 mix-blend-multiply pointer-events-none" />
                {/* Floating badge */}
                <div className="absolute bottom-5 left-5 bg-black/70 backdrop-blur-sm border border-zinc-700 rounded-xl px-4 py-3">
                  <p className="text-sm font-semibold text-zinc-200">
                    Audi Hazael
                  </p>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Website & Systems Developer · Lagos, NG
                  </p>
                </div>
              </div>

              {/* Qualities grid */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-zinc-50">
                    Built to a standard, not a template.
                  </h2>
                  <p className="mt-3 text-gray-400 leading-relaxed">
                    Every project ships with these as baseline — not upgrades
                    you have to ask for.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {qualities.map(({ icon: Icon, title, desc }) => (
                    <div
                      key={title}
                      className="bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 rounded-xl p-5 space-y-2 transition-colors duration-200"
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-purple-400/80 shrink-0" />
                        <h4 className="font-semibold text-zinc-50 text-sm">
                          {title}
                        </h4>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section
          className="px-6 md:px-10 py-20 border-t border-zinc-800"
          id="pricing"
        >
          <div className="md:max-w-[80%] mx-auto space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-50">
                Transparent pricing
              </h2>
              <p className="mt-2 text-gray-400 max-w-lg">
                Fixed packages as a starting point. Every project gets a custom
                quote based on actual scope.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {plans.map(({ name, price, desc, features, highlight, cta }) => (
                <div
                  key={name}
                  className={`relative flex flex-col rounded-2xl p-7 border transition-all duration-200 ${
                    highlight
                      ? "bg-purple-900/20 border-purple-500/40 shadow-lg shadow-purple-900/20"
                      : "bg-zinc-900/40 border-zinc-800 hover:border-zinc-700"
                  }`}
                >
                  {highlight && (
                    <span className="absolute -top-3 left-6 text-xs font-semibold px-3 py-1 rounded-full bg-purple-500 text-white">
                      Most chosen
                    </span>
                  )}

                  <div className="space-y-1 mb-6">
                    <h3 className="font-bold text-zinc-50 text-xl">{name}</h3>
                    <p className="text-2xl font-bold text-purple-300">
                      {price}
                    </p>
                    <p className="text-gray-400 text-sm leading-snug pt-1">
                      {desc}
                    </p>
                  </div>

                  <ul className="space-y-2.5 flex-1 mb-8">
                    {features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-gray-300"
                      >
                        <span className="text-purple-400 shrink-0 mt-0.5">
                          ✦
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={waLink(
                      `Hi Hazael, I'm interested in the ${name} package. Here's what I need: [brief description]`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full text-center py-3 rounded-full text-sm font-semibold transition ${
                      highlight
                        ? "bg-linear-to-r from-purple-500 to-fuchsia-500 hover:opacity-90 text-white"
                        : "border border-zinc-700 hover:border-purple-500/50 text-zinc-300 hover:text-white"
                    }`}
                  >
                    {cta}
                  </a>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-500 text-center">
              All prices in USD. Nigerian businesses can pay in NGN equivalent.
              Final price depends on scope — you&apos;ll always get a written
              quote before work begins.
            </p>
          </div>
        </section>

        {/* ── WHAT I DON'T DO ── */}
        <section className="px-6 md:px-10 py-16 border-t border-zinc-800">
          <div className="md:max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-bold text-zinc-50">
                What I don&apos;t do
              </h2>
              <p className="mt-2 text-gray-400 text-sm leading-relaxed max-w-sm">
                Knowing this upfront saves everyone time.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  [
                    "E-commerce stores",
                    "Shopify or WooCommerce stores with product catalogues and checkout flows.",
                  ],
                  [
                    "Complex SaaS dashboards",
                    "Multi-tenant platforms with complex user permission systems are outside scope.",
                  ],
                  [
                    "Logo & brand design",
                    "I work with your existing brand. For brand identity, I can refer you to someone.",
                  ],
                  [
                    "Maintenance-only contracts",
                    "I build and hand off — I don't offer ongoing monthly maintenance retainers.",
                  ],
                ].map(([title, desc]) => (
                  <li key={title} className="flex gap-3 text-sm">
                    <span className="text-zinc-600 mt-0.5 shrink-0">✕</span>
                    <span>
                      <span className="text-zinc-300 font-medium">{title}</span>
                      <span className="text-gray-500"> — {desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-7 space-y-4">
              <h3 className="font-bold text-zinc-50 text-lg">
                Not sure if I&apos;m the right fit?
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Send me a message with what you have in mind. If it&apos;s
                something I can&apos;t do well, I&apos;ll tell you honestly and
                point you somewhere that can.
              </p>
              <a
                href={waLink(
                  "Hi Hazael, I have a project I'd like to discuss: [brief description]",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-purple-300 hover:text-white transition-colors group"
              >
                Send a message
                <ArrowLongRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
