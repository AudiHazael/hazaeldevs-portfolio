import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const images = ["/hero-one.jpg"];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.25,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.0,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

const MainHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const quoteMessage =
    "Hi Hazael, I’d like a free quote for a website. Business name: [Your business]. Brief summary: [project / features].";
  const quoteLink = `https://wa.me/2347039404909?text=${encodeURIComponent(
    quoteMessage
  )}`;
  const portfolioLink =  "#portfolio";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex justify-center items-center px-6 md:px-20 pt-20 w-full min-h-screen overflow-hidden text-gray-200"
    >
      {/* Background Images */}
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentIndex === index ? 1 : 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-no-repeat md:bg-center brightness-95"
            style={{
              backgroundImage: `url(${src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        ))}
      </div>

      {/* Glow Effects */}
      <div className="-z-10 absolute inset-0 mix-blend-screen">
        <div className="md:top-20 md:left-10 absolute bg-indigo-700/30 blur-3xl rounded-full w-72 h-72 animate-pulse"></div>
        <div className="right-10 bottom-20 absolute bg-purple-500/30 blur-3xl rounded-full w-80 h-80 animate-pulse"></div>
      </div>

      {/* Dark + Purple Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/95 via-purple-900/50 to-black/90 pointer-events-none mix-blend-multiply"></div>

      {/* HERO CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="z-10 relative flex flex-col justify-center items-center space-y-6 py-8 w-full max-w-5xl"
      >
        <motion.h1
          variants={fadeInUp}
          className="font-semibold text-purple-100 text-4xl lg:text-6xl text-center [text-shadow:0_0_6px_rgba(0,0,0,0.9),0_0_12px_rgba(0,0,0,0.9)]"
        >
          Fast, High‑Converting Websites That Grow Your Business
        </motion.h1>

        <motion.h2
          variants={fadeInUp}
          className="mt-4 max-w-3xl text-zinc-50 text-2xl text-center leading-tight"
        >
          I design and build responsive, SEO-friendly websites optimized for
          speed and conversions — so your visitors become customers.
        </motion.h2>

        {/* Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap justify-center items-center gap-4 mt-4"
        >
          {/* Primary Button */}
          <motion.a
            href={quoteLink}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-purple-500/80 hover:bg-purple-400 shadow-lg shadow-purple-900/40 hover:shadow-purple-700/40 backdrop-blur-sm px-8 py-3 rounded-full font-semibold text-white text-lg transition-all duration-300"
          >
            Request a Free Quote
            <ArrowLongRightIcon className="-mt-1 ml-2 w-5 h-5" />
          </motion.a>

          {/* Secondary Button */}
          <motion.a
            href={portfolioLink}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center hover:bg-purple-400/20 backdrop-blur-sm px-8 py-3 border border-purple-400/50 rounded-full font-semibold text-purple-200 hover:text-white text-lg transition-all duration-300"
          >
            View Portfolio
            <ArrowLongRightIcon className="-mt-1 ml-2 w-5 h-5" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MainHero;
