import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

// ─── SCHEMAS ─────────────────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Audi Hazael",
  url: "https://www.hazaeldevs.com",
  jobTitle: "Website & Systems Developer",
  description:
    "Website and systems developer with 3 years of client work. Started with Figma and design, now builds full-stack platforms and business tools for small businesses and startups.",
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
  knowsAbout: [
    "Web Design",
    "React",
    "Next.js",
    "Figma",
    "Business Systems",
    "Workflow Automation",
    "Supabase",
  ],
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
      name: "About",
      item: "https://www.hazaeldevs.com/about",
    },
  ],
};

export const metadata = {
  title: "About — Audi Hazael, Website & Systems Developer",
  description:
    "Audi Hazael is a website and systems developer based in Lagos, Nigeria. 3 years of client work, a background in Figma and design, and a strong interest in business process and workflow optimisation.",
  keywords: [
    "Audi Hazael developer",
    "HazaelDevs about",
    "web developer Lagos Nigeria",
    "Next.js developer background",
    "freelance developer Nigeria story",
  ],
  alternates: { canonical: "https://www.hazaeldevs.com/about" },
  openGraph: {
    title: "About Audi Hazael | Haza'ElDevs",
    description:
      "Website and systems developer based in Lagos. 3 years of client work, started in design, now building full-stack platforms.",
    url: "https://www.hazaeldevs.com/about",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "About Audi Hazael",
      },
    ],
  },
  other: {
    "schema-person": JSON.stringify(personSchema),
    "schema-breadcrumb": JSON.stringify(breadcrumbSchema),
  },
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const waLink = (msg) =>
  `https://wa.me/2347039404909?text=${encodeURIComponent(msg)}`;

const timeline = [
  {
    year: "2022-23",
    title: "Started with design",
    desc: "Picked up Figma and learned to design interfaces before writing a single line of code. That grounding in visual thinking still shapes how every project is approached.",
  },
  {
    year: "2023–24",
    title: "First client projects",
    desc: "Moved from design into development. Built first client sites — Artist Kelle, Soy-Joy, i4DT — learning how real businesses think about their online presence.",
  },
  {
    year: "2024",
    title: "Deeper client work",
    desc: "Karez Nigeria, Luxor, Extensive Academy. Each project added a layer — automotive, premium brand, collaborative frontend with another developer.",
  },
  {
    year: "2024–25",
    title: "Full-stack & systems",
    desc: "Built HaulConnect from scratch — a full logistics operator platform with a public website, custom operations dashboard, email system, and PDF generation. No prior full-stack experience. Shipped.",
  },
  {
    year: "Now",
    title: "Websites + systems for business",
    desc: "Working with small businesses and startups globally. Building the website that wins customers and the system that runs the operation.",
  },
];

const values = [
  {
    title: "Scope first, always",
    desc: "Nothing ambiguous. Before any work begins, scope, timeline, and price are agreed in writing. No surprises mid-project.",
  },
  {
    title: "Written over calls",
    desc: "Communication happens in writing — updates, decisions, feedback. It's faster, clearer, and creates a record both sides can refer back to.",
  },
  {
    title: "Outcomes over aesthetics",
    desc: "A website that looks great but doesn't convert is a failure. Design serves the business goal — always.",
  },
  {
    title: "Goal-oriented clients only",
    desc: "The best projects happen with clients who have a clear vision and a specific outcome in mind. Vague briefs produce vague results.",
  },
];

const skills = [
  {
    category: "Design",
    items: ["Figma", "UI/UX Design", "Responsive Layouts", "Design Systems"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend & Data",
    items: ["Supabase", "PostgreSQL", "REST APIs", "Resend"],
  },
  {
    category: "Systems",
    items: [
      "Operations Dashboards",
      "Workflow Automation",
      "PDF Generation",
      "Email Systems",
    ],
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 text-zinc-100">
        {/* ── HERO ── */}
        <section className="px-6 md:px-10 pt-16 pb-20 border-b border-zinc-800">
          <div className="md:max-w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="space-y-7 order-last lg:order-first">
              <div>
                <span className="text-purple-300/50 text-sm font-semibold uppercase tracking-widest">
                  About
                </span>
                <h1 className="mt-3 text-5xl md:text-6xl font-bold text-zinc-50 leading-[1.05] tracking-tight">
                  I build what{" "}
                  <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-300 to-fuchsia-400">
                    businesses
                  </span>{" "}
                  actually need.
                </h1>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                I&apos;m Audi Hazael — a website and systems developer based in
                Lagos, Nigeria, working with clients globally. I started in
                design, moved into development, and now build everything from
                credible business websites to full-stack operational platforms.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Three years of client work taught me that the website is rarely
                the whole problem. Most businesses also need the system behind
                it — the lead tracking, the document generation, the automated
                follow-up that makes the operation run without manual effort.
                That&apos;s the work I find most interesting.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={waLink("Hi Hazael, I'd like to discuss a project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-linear-to-r from-purple-500 to-fuchsia-500 hover:opacity-90 transition text-white"
                >
                  Work with me
                  <ArrowLongRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white transition"
                >
                  See the work
                </Link>
              </div>
            </div>

            {/* Photo placeholder */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 aspect-[4/5] flex items-center justify-center">
                {/* ✦ Replace src with your actual photo */}
                <div className="absolute inset-0 bg-linear-to-br from-purple-900/30 to-zinc-900/80" />
                <p className="text-zinc-600 text-sm z-10">
                  [ Photo placeholder ]
                </p>
                <div className="absolute inset-0 bg-purple-900/20 mix-blend-multiply pointer-events-none" />
              </div>
              {/* Floating badge */}
              <div className="absolute bottom-5 left-5 bg-black/70 backdrop-blur-sm border border-zinc-700 rounded-xl px-4 py-3">
                <p className="text-sm font-semibold text-zinc-200">
                  Audi Hazael
                </p>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Lagos, Nigeria · Available for projects
                </p>
              </div>
              {/* Glow */}
              <div className="absolute -inset-4 bg-purple-700/10 blur-3xl rounded-full -z-10" />
            </div>
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section className="px-6 md:px-10 py-20 border-b border-zinc-800">
          <div className="md:max-w-[80%] mx-auto space-y-14">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-50">
                How I got here
              </h2>
              <p className="mt-2 text-gray-400 max-w-lg">
                Three years of building — from first Figma file to full-stack
                logistics platform.
              </p>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="hidden md:block absolute left-[52px] top-3 bottom-3 w-px bg-zinc-800" />

              <div className="space-y-10">
                {timeline.map(({ year, title, desc }) => (
                  <div key={year} className="flex gap-6 md:gap-10 items-start">
                    {/* Year marker */}
                    <div className="shrink-0 w-[104px] text-right">
                      <span className="text-xs font-bold text-purple-400/70 uppercase tracking-widest">
                        {year}
                      </span>
                    </div>
                    {/* Dot */}
                    <div className="shrink-0 w-2 h-2 rounded-full bg-purple-500/60 mt-1.5 z-10" />
                    {/* Content */}
                    <div className="pb-2 flex-1">
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

        {/* ── HOW I WORK ── */}
        <section className="px-6 md:px-10 py-20 border-b border-zinc-800">
          <div className="md:max-w-[80%] mx-auto space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-50">
                  How I work
                </h2>
                <p className="mt-3 text-gray-400 leading-relaxed max-w-md">
                  I work remotely with clients in Nigeria and internationally.
                  Here&apos;s what working with me actually looks like.
                </p>
              </div>

              {/* Quote */}
              <blockquote className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-7 space-y-3">
                <p className="text-zinc-300 leading-relaxed italic">
                  &ldquo;The best projects happen with clients who have a clear
                  vision and a specific outcome in mind. If you know what
                  success looks like for your business, we&apos;ll work well
                  together.&rdquo;
                </p>
                <footer className="text-sm text-zinc-500">— Audi Hazael</footer>
              </blockquote>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map(({ title, desc }) => (
                <div
                  key={title}
                  className="bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 rounded-xl p-6 space-y-2 transition-colors duration-200"
                >
                  <h3 className="font-semibold text-zinc-50 flex items-center gap-2">
                    <span className="text-purple-400">✦</span>
                    {title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section className="px-6 md:px-10 py-20 border-b border-zinc-800">
          <div className="md:max-w-[80%] mx-auto space-y-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-50">
                What I work with
              </h2>
              <p className="mt-2 text-gray-400 max-w-lg">
                Tools and technologies across the full stack — from first sketch
                to deployed system.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {skills.map(({ category, items }) => (
                <div key={category} className="space-y-3">
                  <h3 className="text-xs font-semibold text-purple-400/70 uppercase tracking-widest">
                    {category}
                  </h3>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <span className="w-1 h-1 rounded-full bg-purple-500/60 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BACKGROUND STORY ── */}
        <section className="px-6 md:px-10 py-20 border-b border-zinc-800">
          <div className="md:max-w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-50">
                Design background,{" "}
                <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-300 to-fuchsia-400">
                  systems thinking.
                </span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                I started in Figma — learning to think in layouts, components,
                and user flows before writing a line of code. That foundation
                still shows in every project. I don&apos;t treat design and
                development as separate phases. They&apos;re the same problem
                approached from different angles.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Alongside design, I&apos;ve always had a strong interest in how
                businesses actually operate — process, efficiency, where things
                break down. That&apos;s what drew me to building systems. A
                well-designed website is valuable. A website backed by a tool
                that runs the business is transformative.
              </p>
              <p className="text-gray-300 leading-relaxed">
                HaulConnect is the clearest example of that thinking in action —
                a full logistics platform, built solo, from scratch, that
                functions as both a live business and a sellable product.
              </p>
              <Link
                href="/systems"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-purple-300 hover:text-white transition-colors"
              >
                See the HaulConnect case study
                <ArrowLongRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            {/* Second photo placeholder */}
            <div className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-linear-to-br from-indigo-900/30 to-zinc-900/80" />
              <p className="text-zinc-600 text-sm z-10">
                [ Photo placeholder ]
              </p>
              <div className="absolute inset-0 bg-indigo-900/20 mix-blend-multiply pointer-events-none" />
            </div>
          </div>
        </section>

        {/* ── WHAT I LOOK FOR IN CLIENTS ── */}
        <section className="px-6 md:px-10 py-20 border-b border-zinc-800">
          <div className="md:max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="space-y-5">
              <h2 className="text-2xl font-bold text-zinc-50">
                Who I work best with
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Not every client is the right fit — and that&apos;s fine.
                Here&apos;s who gets the most out of working with me.
              </p>
              <ul className="space-y-4">
                {[
                  [
                    "Goal-oriented",
                    'You have a specific outcome in mind — more enquiries, a better first impression, a system that replaces the spreadsheet. You\'re not just looking to "have a website."',
                  ],
                  [
                    "Clear on what you need",
                    "You've thought about your business, your customers, and what you want the site to do. You don't need to have all the answers — but you've asked the questions.",
                  ],
                  [
                    "Communicates in writing",
                    "Updates, feedback, and decisions happen by message. You're responsive and direct.",
                  ],
                  [
                    "Serious about the investment",
                    "A website is a business asset. You treat it like one.",
                  ],
                ].map(([title, desc]) => (
                  <li key={title} className="flex gap-3 text-sm">
                    <span className="text-purple-400 mt-0.5 shrink-0">✦</span>
                    <span>
                      <span className="text-zinc-200 font-medium">
                        {title} —{" "}
                      </span>
                      <span className="text-gray-400">{desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA card */}
            <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 space-y-5 lg:sticky lg:top-28">
              <div className="space-y-1">
                <h3 className="font-bold text-zinc-50 text-xl">
                  Sound like you?
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Send a message with your project. I&apos;ll reply within 24
                  hours with a clear next step.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={waLink(
                    "Hi Hazael, I visited your about page and I'd like to discuss a project: [brief description]",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-sm bg-linear-to-r from-purple-500 to-fuchsia-500 hover:opacity-90 transition text-white"
                >
                  Start a conversation
                </a>
                <Link
                  href="/services"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-sm border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white transition"
                >
                  See services & pricing
                </Link>
              </div>

              <div className="pt-3 border-t border-zinc-800 flex flex-wrap gap-4 text-xs text-zinc-500">
                <span>Based in Lagos, NG</span>
                <span>·</span>
                <span>Working globally</span>
                <span>·</span>
                <span>USD pricing</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
