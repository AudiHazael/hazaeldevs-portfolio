"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

// ─── DATA ────────────────────────────────────────────────────────────────────
const steps = [
  {
    id: 1,
    title: "Goals & Priorities",
    summary:
      "We align on what success looks like before anything is designed or built.",
    bullets: [
      "Review your business, audience, and competitors",
      "Define pages, scope, and key conversion points",
      "Agree on measurable outcomes upfront",
    ],
  },
  {
    id: 2,
    title: "Proposal & Plan",
    summary:
      "You receive a clear written scope — pricing, timeline, milestones — nothing vague.",
    bullets: [
      "Detailed proposal with fixed price and delivery dates",
      "Milestone breakdown so you always know what's next",
      "Written sign-off before work begins",
    ],
  },
  {
    id: 3,
    title: "Design & Prototype",
    summary:
      "Wireframes and high-fidelity mockups before a single line of code.",
    bullets: [
      "Figma wireframes and full visual designs",
      "Fast feedback cycles — no waiting weeks for revisions",
      "Clickable prototype approved before build starts",
    ],
  },
  {
    id: 4,
    title: "Build & Optimise",
    summary:
      "Clean, responsive, SEO-structured build with performance built in from the start.",
    bullets: [
      "Next.js build — server-rendered, fast, indexable",
      "Mobile-first layout, Core Web Vitals optimised",
      "Full QA review before anything goes live",
    ],
  },
  {
    id: 5,
    title: "Launch & Hand-off",
    summary:
      "Your site goes live. You walk away with everything — code, access, and documentation.",
    bullets: [
      "Go-live and post-launch monitoring",
      "Full handoff with credentials and walkthrough",
      "30-day post-launch support included",
    ],
  },
];

const waLink = `https://wa.me/2347039404909?text=${encodeURIComponent(
  "Hi Hazael, I'd like a quote for a website — please advise next steps and availability.",
)}`;

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export default function Process() {
  const [active, setActive] = useState(1);
  const activeStep = steps.find((s) => s.id === active);

  return (
    <section
      id="process"
      className="relative py-24 px-6 md:px-10 border-t border-zinc-800 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-700/10 blur-[100px] rounded-full" />
      </div>

      <div className="md:max-w-[80%] mx-auto space-y-16">
        {/* ── Header ── */}
        <div className="grid grid-cols-1 gap-8 items-end">
          <div>
            <span className="text-purple-300/50 text-sm font-semibold uppercase tracking-widest">
              Process
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-zinc-50 leading-tight">
              From first message{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-300 to-fuchsia-400">
                to launch.
              </span>
            </h2>
          </div>
          <p className="text-gray-400 leading-relaxed lg:max-w-lg">
            A defined process means no surprises. You always know what&apos;s
            happening, what&apos;s next, and what you&apos;ll get — in writing,
            before it starts.
          </p>
        </div>

        {/* ── Interactive stepper ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Step tabs — left on desktop, top on mobile */}
          <div className="lg:col-span-2 flex lg:flex-col gap-2">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActive(step.id)}
                className={`group w-full text-left flex items-center gap-4 px-5 py-4 rounded-xl border transition-all duration-200 ${
                  active === step.id
                    ? "bg-purple-900/30 border-purple-500/40 shadow-lg shadow-purple-900/20"
                    : "bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50"
                }`}
              >
                {/* Number */}
                <span
                  className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-200 ${
                    active === step.id
                      ? "bg-linear-to-br from-purple-500 to-fuchsia-500 text-white"
                      : "bg-zinc-800 text-zinc-400 group-hover:text-zinc-200"
                  }`}
                >
                  {step.id}
                </span>

                {/* Title — hidden on mobile to keep tabs compact */}
                <span
                  className={`hidden sm:block font-semibold text-sm transition-colors duration-200 ${
                    active === step.id
                      ? "text-zinc-50"
                      : "text-zinc-400 group-hover:text-zinc-200"
                  }`}
                >
                  {step.title}
                </span>
              </button>
            ))}
          </div>

          {/* Step detail — right panel */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-full bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 space-y-6"
              >
                {/* Step header */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-linear-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center font-bold text-white text-lg">
                    {activeStep.id}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-purple-400/70 uppercase tracking-widest mb-1">
                      Step {activeStep.id} of {steps.length}
                    </p>
                    <h3 className="text-2xl font-bold text-zinc-50">
                      {activeStep.title}
                    </h3>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-gray-300 leading-relaxed text-base">
                  {activeStep.summary}
                </p>

                {/* Bullets */}
                <ul className="space-y-3">
                  {activeStep.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-sm text-gray-400"
                    >
                      <span className="text-purple-400 mt-0.5 shrink-0">✦</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Step navigation */}
                <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                  <button
                    onClick={() => setActive((p) => Math.max(1, p - 1))}
                    disabled={active === 1}
                    className="text-sm text-zinc-500 hover:text-zinc-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    ← Previous
                  </button>
                  <div className="flex gap-1.5">
                    {steps.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setActive(s.id)}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                          active === s.id
                            ? "bg-purple-400 w-4"
                            : "bg-zinc-700 hover:bg-zinc-500"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() =>
                      setActive((p) => Math.min(steps.length, p + 1))
                    }
                    disabled={active === steps.length}
                    className="text-sm text-zinc-500 hover:text-zinc-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    Next →
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-zinc-800">
          <div>
            <h3 className="font-semibold text-zinc-50 text-lg">
              Ready to get started?
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Send a message and you&apos;ll have a proposal in your hands
              within 24 hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm bg-linear-to-r from-purple-500 to-fuchsia-500 hover:opacity-90 transition text-white"
            >
              Request a breakdown
              <ArrowLongRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white transition"
            >
              View services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
