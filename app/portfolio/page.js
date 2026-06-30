import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

// ─── SCHEMAS ─────────────────────────────────────────────────────────────────
const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Haza'ElDevs Portfolio",
  description:
    "Websites, landing pages, and business systems built for small businesses and startups by Audi Hazael.",
  url: "https://www.hazaeldevs.com/portfolio",
  author: {
    "@type": "Person",
    name: "Audi Hazael",
    url: "https://www.hazaeldevs.com",
    jobTitle: "Website & Systems Developer",
    worksFor: { "@type": "Organization", name: "Haza'ElDevs" },
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "CreativeWork",
          name: "HaulConnect",
          description:
            "Full-stack logistics operator platform for the Nigerian haulage market.",
          url: "https://haulconnect.com.ng",
          creator: { "@type": "Person", name: "Audi Hazael" },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "CreativeWork",
          name: "Artist Kelle",
          url: "https://www.artistkelle.com/",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "CreativeWork",
          name: "Karez Nigeria Limited",
          url: "https://www.kareznigeria.com/",
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
      name: "Portfolio",
      item: "https://www.hazaeldevs.com/portfolio",
    },
  ],
};

export const metadata = {
  title: "Portfolio — Websites & Systems Built for Real Businesses",
  description:
    "See the websites, landing pages, and business systems Audi Hazael has built for small businesses and startups. Every project solved a real problem.",
  keywords: [
    "web developer portfolio Nigeria",
    "small business website examples",
    "Next.js portfolio Lagos",
    "HaulConnect logistics platform",
    "business systems developer portfolio",
  ],
  alternates: { canonical: "https://www.hazaeldevs.com/portfolio" },
  openGraph: {
    title:
      "Portfolio — Websites & Systems Built for Real Businesses | Haza'ElDevs",
    description:
      "Websites, landing pages, and business systems built for small businesses and startups.",
    url: "https://www.hazaeldevs.com/portfolio",
    images: [
      {
        url: "/og-portfolio.png",
        width: 1200,
        height: 630,
        alt: "Haza'ElDevs Portfolio",
      },
    ],
  },
  other: {
    "schema-portfolio": JSON.stringify(portfolioSchema),
    "schema-breadcrumb": JSON.stringify(breadcrumbSchema),
  },
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const waLink = (msg) =>
  `https://wa.me/2347039404909?text=${encodeURIComponent(msg)}`;

// Featured project — HaulConnect gets its own elevated treatment
const featured = {
  title: "HaulConnect",
  tag: "Systems & Platform",
  tagline: "A logistics company, engineered end-to-end.",
  desc: "Full-stack logistics operator platform for the Nigerian haulage market. Public website, complete operations dashboard, 7 transactional emails, PDF generation, and a white-label product ready to sell — built solo, from scratch.",
  img: "/dashboard-screenshot.png",
  siteImg: "/haulconnect-site.png",
  url: "https://haulconnect.com.ng",
  caseStudy: "/systems",
  stats: [
    { value: "2 in 1", label: "Live business + sellable product" },
    { value: "7", label: "Branded transactional emails" },
    { value: "0", label: "Third-party ops tools" },
    { value: "8", label: "Nigerian cities covered" },
  ],
  stack: ["Next.js 14", "Supabase", "Tailwind CSS", "Resend", "Vercel"],
};

// Regular projects — grid
const projects = [
  {
    title: "Artist Kelle",
    tag: "Business Website",
    desc: "A platform to showcase artwork, handle commission requests, and manage orders without confusing clients. Built with a clear gallery structure, simple enquiry flow, and mobile-friendly experience.",
    img: "/art-by-kelle.png",
    url: "https://www.artistkelle.com/",
    repo: "https://github.com/AudiHazael/Kelle-Art",
  },
  {
    title: "Karez Nigeria",
    tag: "Business Website",
    desc: "A modern, responsive website for an automotive service company offering repair, diagnostics, and maintenance — designed to build trust and convert visitors into customers.",
    img: "/karez-nigeria.png",
    url: "https://www.kareznigeria.com/",
    repo: null,
  },
  // {
  //   title: "Soy-Joy",
  //   tag: "Landing Page",
  //   desc: "A clean, product-focused landing page that introduces the brand, communicates its values clearly, and works reliably across all devices.",
  //   img: "/soyjoy.png",
  //   url: "https://soy-joy.vercel.app/",
  //   repo: "https://github.com/AudiHazael/soy-joy",
  // },
  {
    title: "Luxor",
    tag: "Landing Page",
    desc: "A bold, elegant digital presence for a premium watch brand — crafted to reflect the premium nature of the product.",
    img: "/Luxor.png",
    url: "https://luxor-seven.vercel.app/",
    repo: "https://github.com/AudiHazael/Luxor",
  },
  {
    title: "Extensive Academy",
    tag: "Web App UI",
    desc: "Frontend development for an educational platform — translating designs into a responsive, accessible interface for students and administrators.",
    img: "/Extensive (1).png",
    url: "https://academy-web-oasis.vercel.app/",
    repo: null,
    collab: { name: "CodeMax", url: "https://preciousamos.dev" },
  },
  {
    title: "i4DT",
    tag: "Landing Page",
    desc: "A clean informational landing page for a volunteer-driven initiative that teaches tech skills to students — showcasing the mission and capturing sign-ups.",
    img: "/i4dt.png",
    url: "https://i4-dt.vercel.app/",
    repo: null,
  },
  {
    title: "KwikRide",
    tag: "Admin Dashboard",
    desc: "Frontend for the admin dashboard of a Nigerian ride-hailing platform — built to manage riders, trips, and operations. Django backend by a separate developer; integration in progress.",
    img: "/kwikride-ng-1.png",
    url: "https://kwikride.ng",
    repo: "#",
    collab: { name: "Firebreather", url: "#" },
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 text-zinc-100">
        {/* ── HERO ── */}
        <section className="px-6 md:px-10 pt-16 pb-20 md:max-w-[80%] mx-auto">
          <span className="text-purple-300/50 text-sm font-semibold uppercase tracking-widest">
            Portfolio
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-zinc-50 leading-none tracking-tight max-w-3xl">
            Work that{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-300 to-fuchsia-400">
              speaks
            </span>{" "}
            for itself.
          </h1>
          <p className="mt-6 text-gray-300 text-lg max-w-xl leading-relaxed">
            Three years of client work across business websites, marketing
            pages, and full-stack systems. Every project here started with a
            real business problem.
          </p>
        </section>

        {/* ── FEATURED: HAULCONNECT ── */}
        <section className="px-6 md:px-10 py-16 border-t border-zinc-800">
          <div className="md:max-w-[80%] mx-auto space-y-10">
            {/* Label row */}
            <div className="flex items-center gap-4">
              <span className="text-purple-300/50 text-sm font-semibold uppercase tracking-widest">
                Featured project
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/20 text-purple-300 font-semibold">
                {featured.tag}
              </span>
            </div>

            {/* Headline + stats */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-bold text-zinc-50 leading-[1.05] tracking-tight">
                  Haul
                  <span className="bg-clip-text text-transparent bg-linear-to-r from-orange-400 to-orange-400">
                    Connect
                  </span>
                </h2>
                <p className="text-gray-300 leading-relaxed max-w-md">
                  {featured.desc}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {featured.stack.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-zinc-800/60 border border-zinc-700 rounded-full text-xs text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {featured.stats.map(({ value, label }) => (
                  <div
                    key={label}
                    className="bg-zinc-900/50 border border-zinc-800 rounded-xl px-5 py-4"
                  >
                    <p className="text-2xl font-bold text-purple-300">
                      {value}
                    </p>
                    <p className="text-gray-400 text-sm mt-1 leading-snug">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard screenshot */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-purple-600/15 blur-2xl rounded-3xl -z-10 group-hover:bg-purple-600/25 transition-all duration-700" />
              <div className="rounded-2xl overflow-hidden border border-zinc-700/60 shadow-2xl shadow-black/60">
                <Image
                  src={featured.img}
                  alt="HaulConnect operations dashboard"
                  width={1400}
                  height={900}
                  className="w-full object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950/60 to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm border border-zinc-700 rounded-lg px-3 py-1.5">
                  <p className="text-xs font-semibold text-zinc-300">
                    Operations Dashboard
                  </p>
                  <p className="text-[10px] text-zinc-500">
                    Leads & Jobs Kanban · Margin Calculator · Carrier DB
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href={featured.caseStudy}
                className="group inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm bg-linear-to-r from-purple-500 to-fuchsia-500 hover:opacity-90 transition text-white"
              >
                Read the full case study
                <ArrowLongRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <a
                href={featured.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm border border-zinc-700 hover:border-purple-500/50 text-zinc-300 hover:text-white transition"
              >
                View live site ↗
              </a>
            </div>
          </div>
        </section>

        {/* ── PROJECT GRID ── */}
        <section className="px-6 md:px-10 py-16 border-t border-zinc-800">
          <div className="md:max-w-[80%] mx-auto space-y-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-50">
                Other projects
              </h2>
              <p className="mt-2 text-gray-400 max-w-lg">
                Client work, collaborations, and builds across three years.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="group flex flex-col bg-zinc-900/40 hover:bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-purple-900/40 mix-blend-multiply pointer-events-none" />
                    <span className="absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm text-purple-300 border border-purple-500/20">
                      {project.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6 gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-bold text-zinc-50 text-lg">
                          {project.title}
                        </h3>
                        {project.collab && (
                          <span className="text-xs text-zinc-500">
                            w/{" "}
                            <a
                              href={project.collab.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-400 hover:text-purple-300 transition"
                            >
                              {project.collab.name}
                            </a>
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {project.desc}
                      </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 mt-auto">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border border-purple-500/30 hover:border-purple-400/60 text-purple-300 hover:text-white transition"
                      >
                        Live site ↗
                      </a>
                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border border-zinc-700 hover:border-zinc-500 text-zinc-400 hover:text-white transition"
                        >
                          GitHub ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MORE WORK CTA ── */}
        <section className="px-6 md:px-10 py-16 border-t border-zinc-800">
          <div className="md:max-w-[80%] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-zinc-50">
                Want to see more?
              </h2>
              <p className="text-gray-400 text-sm max-w-md">
                More projects live on GitHub. Or just reach out — I&apos;m happy
                to walk through any of these in detail or share work that&apos;s
                not publicly listed.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href="https://github.com/AudiHazael"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white transition"
              >
                GitHub ↗
              </a>
              <a
                href={waLink(
                  "Hi Hazael, I'd like to see more of your work and discuss a project.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-linear-to-r from-purple-500 to-fuchsia-500 hover:opacity-90 transition text-white"
              >
                Let&apos;s talk
                <ArrowLongRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
