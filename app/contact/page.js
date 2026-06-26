import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

// ─── SCHEMAS ─────────────────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Audi Hazael",
  url: "https://www.hazaeldevs.com",
  jobTitle: "Website & Systems Developer",
  worksFor: {
    "@type": "Organization",
    name: "Haza'ElDevs",
    url: "https://www.hazaeldevs.com",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  sameAs: ["https://x.com/hazaeltweets", "https://github.com/AudiHazael"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer enquiries",
    availableLanguage: "English",
    url: "https://wa.me/2347039404909",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Work With Haza'ElDevs",
  description:
    "Contact Audi Hazael for website design, development, and business systems work.",
  url: "https://www.hazaeldevs.com/contact",
  mainEntity: { "@type": "Person", name: "Audi Hazael" },
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
      name: "Contact",
      item: "https://www.hazaeldevs.com/contact",
    },
  ],
};

export const metadata = {
  title: "Work With Me — Hire a Website & Systems Developer",
  description:
    "Ready to get your business online or replace your manual workflows? Describe your project and Audi Hazael will get back to you within 24 hours. Based in Lagos, serving clients globally.",
  keywords: [
    "hire a web developer Nigeria",
    "freelance developer for hire Lagos",
    "get a business website",
    "hire a systems developer",
    "web developer contact Lagos",
  ],
  alternates: { canonical: "https://www.hazaeldevs.com/contact" },
  openGraph: {
    title: "Work With Me | Haza'ElDevs",
    description:
      "Describe your project and Audi Hazael will get back to you within 24 hours.",
    url: "https://www.hazaeldevs.com/contact",
    images: [
      {
        url: "/og-contact.png",
        width: 1200,
        height: 630,
        alt: "Contact Haza'ElDevs",
      },
    ],
  },
  other: {
    "schema-person": JSON.stringify(personSchema),
    "schema-contact": JSON.stringify(contactPageSchema),
    "schema-breadcrumb": JSON.stringify(breadcrumbSchema),
  },
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const waLink = (msg) =>
  `https://wa.me/2347039404909?text=${encodeURIComponent(msg)}`;

const projectTypes = [
  {
    title: "Business Website",
    desc: "You need a credible online presence that wins customers before the first call.",
    msg: "Hi Hazael, I need a business website. Here's what I'm looking for: [brief description]",
  },
  {
    title: "Landing Page",
    desc: "You have an offer, a product, or a launch — and you need a page built around one clear goal.",
    msg: "Hi Hazael, I need a landing page for: [brief description of offer or campaign]",
  },
  {
    title: "Business System",
    desc: "Your operation runs on spreadsheets and WhatsApp. You need a proper tool to replace that.",
    msg: "Hi Hazael, I saw the HaulConnect case study and I'd like to discuss a similar system for my business: [brief description]",
  },
  {
    title: "Something else",
    desc: "Not sure which category fits — just describe what you're trying to solve.",
    msg: "Hi Hazael, I have a project I'd like to discuss: [brief description]",
  },
];

const faqs = [
  {
    q: "How quickly do you reply?",
    a: "Within 24 hours on weekdays. Usually faster.",
  },
  {
    q: "Do I need to prepare a brief?",
    a: "No. A plain-language message about what you need is enough to start. I'll ask the right questions.",
  },
  {
    q: "Can I pay in Naira?",
    a: "Yes. Nigerian clients can pay in NGN at the equivalent rate. Pricing is quoted in USD.",
  },
  {
    q: "Do you work with clients outside Nigeria?",
    a: "Yes — all communication is remote and async. Most of my clients are international.",
  },
  {
    q: "What if I'm not sure what I need?",
    a: "That's fine. Describe your business and the problem you're trying to solve. We'll figure out the right solution together.",
  },
  {
    q: "How long does a project take?",
    a: "A Starter website: 1–2 weeks. Standard: 2–4 weeks. Systems projects vary by scope. You'll always get a timeline estimate before work begins.",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 text-zinc-100">
        {/* ── HERO ── */}
        <section className="px-6 md:px-10 pt-16 pb-20 border-b border-zinc-800">
          <div className="md:max-w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — heading + channels */}
            <div className="space-y-8">
              <div>
                <span className="text-purple-300/50 text-sm font-semibold uppercase tracking-widest">
                  Contact
                </span>
                <h1 className="mt-3 text-5xl md:text-6xl font-bold text-zinc-50 leading-[1.05] tracking-tight">
                  Let&apos;s build{" "}
                  <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-300 to-fuchsia-400">
                    something
                  </span>{" "}
                  that works.
                </h1>
                <p className="mt-5 text-gray-300 text-lg leading-relaxed">
                  Describe your project in plain language. I&apos;ll get back to
                  you within 24 hours with a clear next step — no sales pitch,
                  no obligation.
                </p>
              </div>

              {/* Primary channel */}
              <div className="space-y-3">
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
                  Preferred contact
                </p>
                <a
                  href={waLink(
                    "Hi Hazael, I'd like to discuss a project: [brief description]",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 hover:border-purple-500/40 rounded-2xl px-6 py-5 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-full bg-green-500/15 border border-green-500/20 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-zinc-100 group-hover:text-white transition">
                      WhatsApp
                    </p>
                    <p className="text-sm text-zinc-400">
                      +234 703 940 4909 · Replies within 24h
                    </p>
                  </div>
                  <ArrowLongRightIcon className="w-5 h-5 text-zinc-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-200 shrink-0" />
                </a>

                {/* Secondary channel */}
                <a
                  href="https://x.com/hazaeltweets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-2xl px-6 py-5 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 text-zinc-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-zinc-100 group-hover:text-white transition">
                      X / Twitter
                    </p>
                    <p className="text-sm text-zinc-400">
                      @hazaeltweets · DMs open
                    </p>
                  </div>
                  <ArrowLongRightIcon className="w-5 h-5 text-zinc-600 group-hover:text-zinc-400 group-hover:translate-x-1 transition-all duration-200 shrink-0" />
                </a>
              </div>
            </div>

            {/* Right — quick info card */}
            <div className="space-y-5 lg:pt-16">
              {/* Availability */}
              <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm font-semibold text-emerald-400">
                    Available for projects
                  </span>
                </div>
                <div className="space-y-3 text-sm">
                  {[
                    ["Based in", "Lagos, Nigeria"],
                    ["Working hours", "Mon – Fri, 9am – 6pm WAT"],
                    ["Response time", "Within 24 hours"],
                    ["Client types", "Global · Nigeria · Startups · SMEs"],
                    ["Pricing", "USD · NGN equivalent accepted"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between gap-4">
                      <span className="text-zinc-500">{label}</span>
                      <span className="text-zinc-300 text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick links */}
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/services#pricing"
                  className="bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-xl p-4 transition-all duration-200 group"
                >
                  <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">
                    View
                  </p>
                  <p className="font-semibold text-zinc-200 group-hover:text-white text-sm transition">
                    Pricing →
                  </p>
                </Link>
                <Link
                  href="/portfolio"
                  className="bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-xl p-4 transition-all duration-200 group"
                >
                  <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">
                    See
                  </p>
                  <p className="font-semibold text-zinc-200 group-hover:text-white text-sm transition">
                    Portfolio →
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── START BY PROJECT TYPE ── */}
        <section className="px-6 md:px-10 py-20 border-b border-zinc-800">
          <div className="md:max-w-[80%] mx-auto space-y-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-50">
                What are you building?
              </h2>
              <p className="mt-2 text-gray-400 max-w-lg">
                Pick the one that fits and it&apos;ll open a WhatsApp message
                with the right context already filled in.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projectTypes.map(({ title, desc, msg }) => (
                <a
                  key={title}
                  href={waLink(msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-3 bg-zinc-900/40 hover:bg-zinc-900/70 border border-zinc-800 hover:border-purple-500/30 rounded-2xl p-6 transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-zinc-50 group-hover:text-white transition">
                      {title}
                    </h3>
                    <ArrowLongRightIcon className="w-4 h-4 text-zinc-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-200 shrink-0" />
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {desc}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="px-6 md:px-10 py-20 border-b border-zinc-800">
          <div className="md:max-w-[80%] mx-auto space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-50">
                What happens after you message
              </h2>
              <p className="mt-2 text-gray-400 max-w-lg">
                No sales calls. No waiting weeks for a proposal. Here&apos;s
                exactly what to expect.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  step: "01",
                  title: "You describe the project",
                  body: "Send a message — plain language, no brief needed. Tell me what your business does and what you're trying to solve.",
                },
                {
                  step: "02",
                  title: "I reply with a next step",
                  body: "Within 24 hours, I'll reply with clarifying questions, a rough scope, or a direct quote — whichever fits.",
                },
                {
                  step: "03",
                  title: "We agree scope and start",
                  body: "Once scope, price, and timeline are confirmed in writing, work begins. No ambiguity, no surprises.",
                },
              ].map(({ step, title, body }) => (
                <div
                  key={step}
                  className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-7 space-y-3"
                >
                  <span className="text-4xl font-bold text-purple-500/20">
                    {step}
                  </span>
                  <h3 className="font-semibold text-zinc-50">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="px-6 md:px-10 py-20 border-b border-zinc-800">
          <div className="md:max-w-[80%] mx-auto space-y-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-50">
                Common questions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {faqs.map(({ q, a }) => (
                <div
                  key={q}
                  className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6 space-y-2"
                >
                  <h3 className="font-semibold text-zinc-100 text-sm">{q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="px-6 md:px-10 py-24">
          <div className="md:max-w-[80%] mx-auto">
            <div className="relative bg-linear-to-br from-purple-900/30 to-zinc-900/60 border border-purple-500/20 rounded-3xl px-8 md:px-14 py-16 overflow-hidden text-center space-y-6">
              {/* Glow */}
              <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-purple-600/20 blur-3xl rounded-full" />
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-zinc-50 leading-tight">
                Ready when you are.
              </h2>
              <p className="text-gray-300 max-w-xl mx-auto leading-relaxed">
                No long intake forms. No discovery calls before you&apos;re
                ready. Just a message — and we&apos;ll take it from there.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <a
                  href={waLink(
                    "Hi Hazael, I'd like to discuss a project: [brief description]",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold bg-linear-to-r from-purple-500 to-fuchsia-500 hover:opacity-90 transition text-white"
                >
                  Send a message on WhatsApp
                  <ArrowLongRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white transition"
                >
                  See services first
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
