"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: d, ease: [0.25, 0.8, 0.25, 1] },
  }),
};

export default function HaulConnectPreview() {
  return (
    <section className="relative py-24 px-6 md:px-10 border-t border-zinc-800 overflow-hidden">
      {/* Ambient glow behind the screenshot */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-700/15 blur-[120px] rounded-full" />
      </div>

      <div className="mx-auto md:max-w-[80%] space-y-14">
        {/* ── Top: label + headline + description side by side ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-5"
          >
            <motion.span
              variants={fadeInUp}
              custom={0}
              className="inline-block text-purple-300/50 text-sm font-semibold uppercase tracking-widest"
            >
              Case Study — HaulConnect
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              custom={0.1}
              className="text-4xl md:text-5xl font-bold text-zinc-50 leading-[1.1]"
            >
              A logistics company, <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-300 to-fuchsia-400">
                engineered end&#8209;to&#8209;end.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              custom={0.2}
              className="text-gray-300 leading-relaxed max-w-md"
            >
              HaulConnect is a live logistics operator platform — public
              website, full operations dashboard, automated emails, PDF
              generation, and a white-label product ready to sell.
            </motion.p>
          </motion.div>

          {/* Stats — right column, flush to bottom */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 gap-3"
          >
            {[
              { value: "2 in 1", label: "Live business + sellable product" },
              { value: "7", label: "Branded transactional emails" },
              { value: "0", label: "Third-party ops tools" },
              { value: "8", label: "Nigerian cities with local SEO" },
            ].map(({ value, label }, i) => (
              <motion.div
                key={label}
                variants={fadeInUp}
                custom={0.1 * (i + 2)}
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl px-5 py-4"
              >
                <p className="text-2xl font-bold text-purple-300">{value}</p>
                <p className="text-gray-400 text-sm mt-1 leading-snug">
                  {label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Dashboard screenshot — the hero of this component ── */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.25, 0.8, 0.25, 1] }}
          style={{ perspective: "1200px" }}
          className="relative group"
        >
          {/* Glow under the image */}
          <div
            className="absolute -inset-2 bg-purple-600/20 blur-2xl rounded-2xl -z-10 
                          group-hover:bg-purple-600/30 transition-all duration-700"
          />

          <div className="relative rounded-xl overflow-hidden border border-zinc-700/60 shadow-2xl shadow-black/60">
            <Image
              src="/dashboard-screenshot.png"
              alt="HaulConnect operations dashboard showing dual kanban pipeline for leads and jobs"
              width={1200}
              height={800}
              className="w-full object-cover object-top"
              priority
            />
            {/* Subtle bottom fade so it doesn't hard-cut */}
            <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-zinc-950/80 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* ── Bottom: tag pills + CTA ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeInUp}
          custom={0}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="flex flex-wrap gap-2">
            {[
              "Dual Kanban pipeline",
              "Margin calculator",
              "PDF manifests",
              "WhatsApp templates",
              "White-label ready",
              "Blog CMS",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-zinc-800/60 border border-zinc-700 rounded-full text-xs text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href="/systems"
            className="group/cta inline-flex items-center gap-2 shrink-0 px-7 py-3 rounded-full font-semibold text-sm bg-linear-to-r from-purple-500 to-fuchsia-500 hover:opacity-90 transition text-white"
          >
            Read the full case study
            <ArrowLongRightIcon className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
