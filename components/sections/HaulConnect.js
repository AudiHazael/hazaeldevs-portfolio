"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: d, ease: [0.25, 0.8, 0.25, 1] },
  }),
};

const phases = [
  {
    label: "Phase 1",
    status: "Complete",
    title: "Public website & lead capture",
    desc: "Homepage, 8 service pages, 8 city location pages with local SEO, quote request form wired to Supabase, and transactional email via Resend.",
  },
  {
    label: "Phase 2",
    status: "Complete",
    title: "Full operations dashboard",
    desc: "Dual Kanban pipelines, lead and job management, carrier database, real-time margin calculator, PDF manifest generator, pre-filled WhatsApp templates, blog CMS, and sanitised read-only buyer preview.",
  },
  {
    label: "Phase 3",
    status: "Scoped",
    title: "Multi-tenant SaaS",
    desc: "Subscription plans, white-label websites for multiple operators, full tenant isolation. Deferred until buyer volume justifies the build.",
  },
];

const stack = [
  "Next.js 14 (App Router)",
  "Tailwind CSS v4",
  "Supabase (PostgreSQL + RLS)",
  "Resend",
  "Vercel",
  "ReportLab (PDF)",
  "Playwright / Chromium",
];

export default function HaulConnect() {
  return (
    <section
      id="haulconnect"
      className="relative py-24 px-6 md:px-10 border-t border-zinc-800 overflow-hidden text-zinc-100"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-700/10 blur-3xl rounded-full" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-600/10 blur-3xl rounded-full" />
      </div>

      <div className="mx-auto md:max-w-[80%] space-y-20">
        {/* ── 1. Hero header ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          <motion.div
            variants={fadeInUp}
            custom={0}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="text-purple-300/50 text-sm font-semibold uppercase tracking-widest">
              Case Study
            </span>
            <span className="text-zinc-700">·</span>
            <a
              href="https://haulconnect.com.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-purple-400 hover:text-purple-300 transition underline underline-offset-4"
            >
              haulconnect.com.ng ↗
            </a>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            custom={0.1}
            className="text-5xl md:text-7xl font-bold text-zinc-50 leading-[1.0] tracking-tight"
          >
            Haul
            <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-300 to-fuchsia-400">
              Connect
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            custom={0.2}
            className="text-gray-300 text-lg leading-relaxed max-w-2xl"
          >
            A full-stack logistics operator platform for the Nigerian haulage
            market. Public website, complete operations dashboard, 7
            transactional emails, PDF generation, and a white-label product
            ready to sell — built solo, from scratch.
          </motion.p>
        </motion.div>

        {/* ── 2. Public site screenshot — full width ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, ease: [0.25, 0.8, 0.25, 1] }}
          className="relative group"
        >
          <div
            className="absolute -inset-1 bg-purple-600/15 blur-xl rounded-2xl -z-10
                          group-hover:bg-purple-600/25 transition-all duration-700"
          />
          <div className="rounded-xl overflow-hidden border border-zinc-700/50 shadow-2xl shadow-black/50">
            <Image
              src="/haulconnect-site.png"
              alt="HaulConnect public website — logistics company homepage"
              width={1200}
              height={900}
              className="w-full object-cover object-top"
            />
          </div>
          <p className="mt-3 text-xs text-zinc-500 text-center tracking-wide uppercase">
            Public website — haulconnect.com.ng
          </p>
        </motion.div>

        {/* ── 3. The problem + model ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          <motion.div variants={fadeInUp} custom={0} className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-purple-400/70">
              The Problem
            </h3>
            <p className="text-gray-300 leading-relaxed">
              The Nigerian haulage market runs on phone calls and WhatsApp
              threads. Businesses that need trucks contact people they know,
              wait for replies, and hope someone shows up. There is no reliable
              way to request a quote, track a shipment, or receive proper
              documentation.
            </p>
            <p className="text-gray-300 leading-relaxed">
              On the supply side, operators manage everything manually across
              spreadsheets and messaging apps — no pipeline, no margin
              visibility, no audit trail.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} custom={0.15} className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-purple-400/70">
              The Model
            </h3>
            <p className="text-gray-300 leading-relaxed">
              HaulConnect operates as an asset-light logistics operator.
              Customers request a quote. HaulConnect contacts a vetted carrier,
              marks up the price, and quotes the customer. The carrier is
              invisible — HaulConnect owns the customer relationship entirely.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The platform is also sold as a white-label product to
              entrepreneurs who want to launch their own branded logistics
              business. The live site and preview dashboard serve as the sales
              proof-of-concept.
            </p>
          </motion.div>
        </motion.div>

        {/* ── 4. Dashboard screenshot — the star ── */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 6 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1, ease: [0.25, 0.8, 0.25, 1] }}
          style={{ perspective: "1400px" }}
          className="relative group"
        >
          {/* Purple halo */}
          <div
            className="absolute -inset-3 bg-purple-600/20 blur-2xl rounded-3xl -z-10
                          group-hover:bg-purple-600/30 transition-all duration-700"
          />

          <div className="rounded-2xl overflow-hidden border border-zinc-700/60 shadow-2xl shadow-black/70">
            <Image
              src="/dashboard-screenshot.png"
              alt="HaulConnect operations dashboard — dual kanban pipeline for leads and jobs, with real-time margin calculator"
              width={1400}
              height={900}
              className="w-full object-cover object-top"
            />
            {/* Fade at bottom */}
            <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-zinc-950/60 to-transparent pointer-events-none" />
          </div>

          {/* Floating label */}
          <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm border border-zinc-700 rounded-lg px-3 py-1.5">
            <p className="text-xs font-semibold text-zinc-300">
              Operations Dashboard
            </p>
            <p className="text-[10px] text-zinc-500">
              Leads & Jobs Kanban · Margin Calculator · Carrier Management
            </p>
          </div>
        </motion.div>

        {/* ── 5. What was built — 2x2 grid ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-8"
        >
          <motion.h3
            variants={fadeInUp}
            custom={0}
            className="text-2xl font-bold text-zinc-50"
          >
            What was built
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                tag: "Public Website",
                title: "A logistics company — not a marketplace",
                body: "Homepage, 8 service pages, 8 city location pages with Nigerian transit times and local SEO, quote form, blog engine, FAQ with structured data, carrier recruitment page. JSON-LD across 6 schema types. Auto-generated sitemap, robots.txt, llms.txt.",
              },
              {
                tag: "Operations Dashboard",
                title: "Airtable — replaced entirely",
                body: "Dual Kanban for leads and jobs. Full CRUD across leads, jobs, carriers, quotes, and invoices. One-click lead-to-job promotion. Real-time margin calculator per job. PDF manifest generator with Naira symbol support via ReportLab.",
              },
              {
                tag: "Email System",
                title: "7 transactional templates",
                body: "Branded emails for every stage of the customer journey — new lead, quote sent, job confirmed, in transit, delivered, invoice sent, carrier application. Deployed via Resend on a verified custom domain. DMARC at quarantine.",
              },
              {
                tag: "Go-to-Market",
                title: "Built to sell, not just ship",
                body: "Buyer pitch deck, operational brochure, four ad fliers targeting different buyer psychologies, WhatsApp forward message, LinkedIn launch post. A sanitised read-only preview dashboard lets prospects tour the product without seeing financial data.",
              },
            ].map(({ tag, title, body }, i) => (
              <motion.div
                key={tag}
                variants={fadeInUp}
                custom={0.1 * (i + 1)}
                className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6 space-y-3"
              >
                <span className="text-purple-400 text-xs font-semibold uppercase tracking-widest">
                  {tag}
                </span>
                <h4 className="text-zinc-50 font-semibold">{title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── 6. Phases ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-6"
        >
          <motion.h3
            variants={fadeInUp}
            custom={0}
            className="text-2xl font-bold text-zinc-50"
          >
            Project phases
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {phases.map(({ label, status, title, desc }, i) => (
              <motion.div
                key={label}
                variants={fadeInUp}
                custom={0.1 * (i + 1)}
                className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-purple-400/70 text-xs font-semibold uppercase tracking-widest">
                    {label}
                  </span>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      status === "Complete"
                        ? "bg-emerald-500/15 text-emerald-400"
                        : "bg-zinc-700/50 text-zinc-400"
                    }`}
                  >
                    {status}
                  </span>
                </div>
                <h4 className="text-zinc-50 font-semibold">{title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── 7. Stack ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col sm:flex-row sm:items-center gap-5"
        >
          <motion.span
            variants={fadeInUp}
            custom={0}
            className="text-sm font-semibold text-zinc-500 uppercase tracking-widest shrink-0"
          >
            Stack
          </motion.span>
          <motion.div
            variants={fadeInUp}
            custom={0.1}
            className="flex flex-wrap gap-2"
          >
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-zinc-800/60 border border-zinc-700 rounded-full text-sm text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* ── 8. CTA ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          custom={0}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-6 border-t border-zinc-800"
        >
          <p className="text-gray-300 text-sm max-w-md leading-relaxed">
            Running your business on WhatsApp threads and spreadsheets? This is
            the kind of system that replaces that.
          </p>
          <a
            href={`https://wa.me/2347039404909?text=${encodeURIComponent(
              "Hi Hazael, I saw the HaulConnect case study and I'd like to discuss a similar system for my business.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 shrink-0 px-7 py-3 rounded-full font-semibold text-sm bg-linear-to-r from-purple-500 to-fuchsia-500 hover:opacity-90 transition text-white"
          >
            Discuss your project
            <ArrowLongRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
