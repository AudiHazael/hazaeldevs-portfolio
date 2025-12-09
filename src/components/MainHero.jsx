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
  const portfolioLink = "#portfolio";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex justify-center items-center px-6 md:px-20 w-full min-h-screen overflow-hidden text-gray-200"
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
          className="font-semibold text-purple-100 text-2xl lg:text-5xl text-center [text-shadow:0_0_6px_rgba(0,0,0,0.9),0_0_12px_rgba(0,0,0,0.9)]"
        >
          Helping businesses build trust online before customers make contact
        </motion.h1>

        <motion.h2
          variants={fadeInUp}
          className="mt-4 max-w-3xl font-medium text-zinc-100 text-xl text-center leading-tight"
        >
          I design and build clear, professional websites that:
        </motion.h2>
        <motion.ul
          variants={fadeInUp}
          className="space-y-1 mx-auto mb-2 max-w-3xl font-medium text-zinc-100 text-lg text-center"
        >
          <li>Confirm your credibility</li>
          <li>Explain what you do</li>
          <li>Make it easy to contact you</li>
        </motion.ul>
        <motion.p
          variants={fadeInUp}
          className="mt-4 text-zinc-50 text-sm text-center"
        >
          Working remotely with clients internationally <br />
          Used by small businesses, startups, and service providers
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap justify-center items-center gap-4 mt-4"
        >
          {/* Primary Button */}
          <motion.a
            href={quoteLink}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex relative items-center gap-2 bg-linear-to-r from-purple-500/70 to-fuchsia-500/60 shadow-black/30 shadow-lg hover:shadow-xl backdrop-blur-md px-8 py-3 rounded-full focus-outline-none focus-visible:ring-4 focus-visible:ring-purple-400/30 font-semibold text-white text-lg transition-all duration-300 ease-out"
          >
            Request a Project Breakdown
            <ArrowLongRightIcon className="w-5 h-5 translate-y-px" />
          </motion.a>

          {/* Secondary Button */}
          <motion.a
            href={portfolioLink}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-black/5 hover:bg-white/10 shadow-black/20 shadow-sm backdrop-blur-md px-8 py-3 border border-purple-300/30 hover:border-purple-300/50 rounded-full focus-outline-none focus-visible:ring-4 focus-visible:ring-purple-300/30 font-semibold text-purple-200/90 hover:text-white text-lg transition-all duration-300 ease-out"
          >
            View Portfolio
          </motion.a>
        </motion.div>
        <motion.p variants={fadeInUp} className="text-zinc-400 text-sm">
          Explore{" "}
          <a href="/services" className="text-purple-300">
            services
          </a>{" "}
        </motion.p>
      </motion.div>
    </section>
  );
};

export default MainHero;
