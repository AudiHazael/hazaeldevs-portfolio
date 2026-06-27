"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Socials from "./Socials";

// ─── CONFIG ──────────────────────────────────────────────────────────────────
const config = {
  name: "Hazael Audi",
  // ✦ CHANGE: subheading now hints at systems work without leading with it
  subheading: "Website & Systems Developer for Small Businesses",
  headline: "Helping Businesses",
  headlineAccent: "Build Trust Online",
  description:
    "Your website should establish confidence before the first call. I design and build sites — and the systems behind them — that make your business feel credible, clear, and easy to work with.",
  valuePoints: [
    "Confirm your credibility online",
    "Explain what you do clearly",
    "Make it easy for customers to contact you",
  ],
  images: ["/hero-one.jpg"],
  photo: "/hazael-audi.jpg",
  ctaPrimary: {
    label: "Request a Project Breakdown",
    href: `https://wa.me/2347039404909?text=${encodeURIComponent(
      "Hi Hazael, I'd like a free quote for a website. Business name: [Your business]. Brief summary: [project / features].",
    )}`,
  },
  ctaSecondary: {
    label: "View Portfolio",
    href: "#portfolio",
  },
  socials: [
    { label: "Twitter", href: "https://x.com/hazaeltweets", icon: FaTwitter },
    { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
    { label: "GitHub", href: "https://github.com/AudiHazael/", icon: FaGithub },
  ],
};

// ─── ANIMATION VARIANTS ──────────────────────────────────────────────────────
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.25, 0.8, 0.25, 1] },
  },
};

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (config.images.length <= 1) return;
    const slide = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % config.images.length);
    }, 6000);
    return () => clearInterval(slide);
  }, []);

  return (
    <section
      id="home"
      className="relative flex items-center px-6 sm:px-10 md:px-20 w-full min-h-screen overflow-hidden text-white"
    >
      {/* ── Background images ── */}
      <div className="absolute inset-0 -z-10">
        {config.images.map((src, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentIndex === idx ? 1 : 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>

      {/* ── Gradient overlay ── */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-black/95 via-black/70 to-black/60" />

      {/* ── Glow orbs ── */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute md:top-20 md:left-10 w-72 h-72 bg-indigo-700/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full animate-pulse" />
      </div>

      {/* ── Social rail (desktop right) ── */}
      <div className="hidden lg:flex flex-col gap-5 absolute top-1/2 right-6 z-20 -translate-y-1/2 text-white">
        {config.socials.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="hover:text-purple-400 transition"
          >
            <Icon size={18} />
          </a>
        ))}
        <div className="w-px h-16 bg-gray-500/75 mx-auto mt-4" />
      </div>

      {/* ── Main content ── */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-10 flex flex-col gap-6 w-full max-w-[75vw] xl:max-w-6xl"
      >
        {/* Kicker — now reflects both offerings */}
        <motion.span
          variants={fadeInUp}
          className="text-purple-300/70 text-sm uppercase tracking-widest"
        >
          Web Design · Development · Business Systems
        </motion.span>

        {/* Headline */}
        <motion.h1
          variants={fadeInUp}
          className="font-medium text-xl leading-tight tracking-wide"
        >
          {config.headline}
          <br />
          <span className="block bg-clip-text bg-linear-to-r from-purple-200 to-purple-400/75 font-extrabold text-transparent text-4xl sm:text-4xl md:text-5xl lg:text-7xl uppercase tracking-wider">
            {config.headlineAccent}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p variants={fadeInUp} className="max-w-4xl text-gray-200">
          {config.description}
        </motion.p>

        {/* Value points */}
        <motion.ul variants={fadeInUp} className="space-y-1 text-gray-300">
          {config.valuePoints.map((point) => (
            <li key={point}>• {point}</li>
          ))}
        </motion.ul>

        {/* CTAs */}
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mt-2">
          <a
            href={config.ctaPrimary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-linear-to-r from-purple-500 to-fuchsia-500 hover:opacity-90 shadow-lg px-8 py-3 rounded-full font-semibold transition"
          >
            {config.ctaPrimary.label}
            <ArrowLongRightIcon className="w-5 h-5" />
          </a>

          <a
            href={config.ctaSecondary.href}
            className="inline-flex items-center gap-2 hover:bg-white/10 backdrop-blur-md px-8 py-3 border border-purple-300/40 rounded-full text-purple-200 transition"
          >
            {config.ctaSecondary.label}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
