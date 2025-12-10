import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const images = ["/hero-one.jpg"];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 0.8, 0.25, 1] },
  },
};

export default function MainHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const quoteMessage =
    "Hi Hazael, I’d like a free quote for a website. Business name: [Your business]. Brief summary: [project / features].";
  const quoteLink = `https://wa.me/2347039404909?text=${encodeURIComponent(
    quoteMessage
  )}`;

  useEffect(() => {
    const slide = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(slide);
  }, []);

  return (
    <section
      id="home"
      className="relative flex items-center px-6 sm:px-10 md:px-20 w-full min-h-screen overflow-hidden text-white"
    >
      {/* Background */}
      <div className="-z-10 absolute inset-0">
        {images.map((src, idx) => (
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

      {/* Gradient Overlay */}
      <div className="-z-5 absolute inset-0 bg-linear-to-r from-black/95 via-black/70 to-black/60" />

      {/* Social Rail (right side) */}
      <div className="hidden top-1/2 right-6 z-20 absolute lg:flex flex-col gap-5 text-gray-400 -translate-y-1/2">
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-purple-400 transition"
        >
          <FaTwitter size={18} />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-purple-400 transition"
        >
          <FaLinkedinIn size={18} />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-purple-400 transition"
        >
          <FaGithub size={18} />
        </a>
        <div className="bg-gray-500/30 mx-auto mt-4 w-px h-16" />
      </div>

      {/* Content */}
      <div className="z-10 relative flex flex-col gap-6 w-full max-w-[100w] md:max-w-[75vw] xl:max-w-6xl">
        {/* Kicker */}
        <motion.span
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-purple-300/70 text-sm uppercase tracking-widest"
        >
          Web Design & Development
        </motion.span>

        {/* Headline */}
        <motion.h1
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="font-medium text-xl leading-tight tracking-wide"
        >
          Helping Businesses
          <br />
          <span className="block font-extrabold text-purple-300/90 text-4xl sm:text-4xl md:text-5xl lg:text-7xl uppercase tracking-wider">
            build trust online
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="max-w-3xl text-gray-200 text-lg"
        >
          Your website should establish confidence before the first call. I
          design sites that make your business feel credible, clear, and easy to
          work with.
        </motion.p>

        {/* Value Points */}
        <motion.ul
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="space-y-1 text-gray-300 text-lg"
        >
          <li>• Confirm your credibility</li>
          <li>• Explain what you do clearly</li>
          <li>• Make it easy for customers to contact you</li>
        </motion.ul>

        {/* CTAs */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-4 mt-4"
        >
          <a
            href={quoteLink}
            className="inline-flex items-center gap-2 bg-linear-to-r from-purple-500 to-fuchsia-500 hover:opacity-90 shadow-lg px-8 py-3 rounded-full font-semibold transition"
          >
            Request a Project Breakdown
            <ArrowLongRightIcon className="w-5 h-5" />
          </a>

          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 hover:bg-white/10 backdrop-blur-md px-8 py-3 border border-purple-300/40 rounded-full text-purple-200 transition"
          >
            View Portfolio
          </a>
        </motion.div>

        {/* Stats — centered beneath the content on large screens, stacked on small */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="relative flex flex-wrap justify-start gap-4 mt-14 text-gray-300"
        >
          <div className="w-36">
            <p className="font-semibold text-3xl">3+</p>
            <p className="text-sm">Years Experience</p>
          </div>
          <div className="w-36">
            <p className="font-semibold text-3xl">15+</p>
            <p className="text-sm">Projects Delivered</p>
          </div>
          <div className="w-36">
            <p className="font-semibold text-3xl">7+</p>
            <p className="text-sm">Happy Clients</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
