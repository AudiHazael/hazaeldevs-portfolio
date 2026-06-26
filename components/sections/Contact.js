"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: d, ease: [0.25, 0.8, 0.25, 1] },
  }),
};

const waLink = `https://wa.me/2347039404909?text=${encodeURIComponent(
  "Hi Hazael, I'd like to discuss a project: [brief description]",
)}`;

const channels = [
  {
    icon: (
      <svg
        className="w-5 h-5 text-green-400"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+234 703 940 4909",
    sub: "Chat-first · Replies within 24h",
    href: waLink,
    bg: "bg-green-500/10 border-green-500/20",
  },
  {
    icon: (
      <svg
        className="w-4 h-4 text-zinc-300"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
    label: "X / Twitter",
    value: "@hazaeltweets",
    sub: "DMs open",
    href: "https://x.com/hazaeltweets",
    bg: "bg-zinc-800 border-zinc-700",
  },
  {
    icon: (
      <svg
        className="w-5 h-5 text-purple-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    label: "Email",
    value: "hazaeldevs@gmail.com",
    sub: "For formal enquiries",
    href: "mailto:hazaeldevs@gmail.com",
    bg: "bg-purple-500/10 border-purple-500/20",
  },
  {
    icon: (
      <svg
        className="w-5 h-5 text-zinc-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
    label: "Location",
    value: "Lagos, Nigeria",
    sub: "Remote · Working globally",
    href: null,
    bg: "bg-zinc-800 border-zinc-700",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-10 border-t border-zinc-800 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-700/10 blur-[120px] rounded-full" />
      </div>

      <div className="md:max-w-[80%] mx-auto space-y-16">
        {/* ── Header ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 gap-8 items-end"
        >
          <div>
            <motion.span
              variants={fadeInUp}
              custom={0}
              className="text-purple-300/50 text-sm font-semibold uppercase tracking-widest"
            >
              Start a project
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              custom={0.1}
              className="mt-3 text-4xl md:text-5xl font-bold text-zinc-50 leading-tight"
            >
              Let&apos;s build a website{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-300 to-fuchsia-400">
                that brings you clients.
              </span>
            </motion.h2>
          </div>
          <motion.p
            variants={fadeInUp}
            custom={0.2}
            className="text-gray-400 leading-relaxed lg:max-w-lg"
          >
            Tell me what you&apos;re trying to achieve and I&apos;ll recommend
            the simplest, most effective setup to get you there. No sales call
            required.
          </motion.p>
        </motion.div>

        {/* ── Two column: channels + form ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left — contact channels */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            <motion.p
              variants={fadeInUp}
              custom={0}
              className="text-xs font-semibold text-zinc-500 uppercase tracking-widest"
            >
              Reach me directly
            </motion.p>

            <div className="space-y-3">
              {channels.map((ch, i) => {
                const inner = (
                  <div
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 ${ch.bg} ${
                      ch.href
                        ? "hover:brightness-125 cursor-pointer"
                        : "cursor-default"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border ${ch.bg}`}
                    >
                      {ch.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-zinc-500 uppercase tracking-widest">
                        {ch.label}
                      </p>
                      <p className="font-semibold text-zinc-100 text-sm truncate">
                        {ch.value}
                      </p>
                      <p className="text-xs text-zinc-500 mt-0.5">{ch.sub}</p>
                    </div>
                    {ch.href && (
                      <ArrowLongRightIcon className="w-4 h-4 text-zinc-600 ml-auto shrink-0" />
                    )}
                  </div>
                );

                return (
                  <motion.div
                    key={ch.label}
                    variants={fadeInUp}
                    custom={0.1 * (i + 1)}
                  >
                    {ch.href ? (
                      <a
                        href={ch.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Availability badge */}
            <motion.div
              variants={fadeInUp}
              custom={0.6}
              className="flex items-center gap-2 pt-2"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="text-sm text-emerald-400 font-medium">
                Available for new projects
              </span>
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            custom={0.2}
            className="lg:col-span-3 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8"
          >
            <div className="mb-6">
              <h3 className="font-bold text-zinc-50 text-lg">Send a message</h3>
              <p className="text-gray-400 text-sm mt-1">
                Prefer WhatsApp? That works too — just pick a channel on the
                left.
              </p>
            </div>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
