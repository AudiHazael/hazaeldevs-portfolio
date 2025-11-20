import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Socials from "./Socials";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import ClientLogoSwiper from "./ClientLogoSwiper";

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
  const quoteLink = "#contact";
  const portfolioLink = "#projects";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center w-full pt-20 px-6 md:px-20 text-gray-200 overflow-hidden"
    >
      {/* Background Images */}
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentIndex === index ? 1 : 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-0 bg-no-repeat bg-cover md:bg-center brightness-95"
            style={{
              backgroundImage: `url(${src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        ))}
      </div>

      {/* Glow Effects */}
      <div className="absolute inset-0 -z-10 mix-blend-screen">
        <div className="absolute md:top-20 md:left-10 w-72 h-72 bg-indigo-700/30 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/30 blur-3xl rounded-full animate-pulse"></div>
      </div>

      {/* Dark + Purple Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/95 via-purple-900/50 to-black/90 mix-blend-multiply pointer-events-none"></div>

      {/* HERO CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="relative z-10 flex flex-col items-center justify-center py-8 w-full max-w-5xl space-y-6"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-4xl md:text-6xl font-semibold text-center 
             text-purple-100 
             [text-shadow:0_0_6px_rgba(0,0,0,0.9),0_0_12px_rgba(0,0,0,0.9)]"
        >
          Get a Professional Website that Grows Your Business
        </motion.h1>

        {/* <motion.h2
          variants={fadeInUp}
          className="text-2xl text-center text-zinc-50 leading-tight mt-4"
        >
          I build fast, modern and high-converting websites for small
          businesses, entrepreneurs and organizations.
        </motion.h2> */}

        {/* Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex gap-4 flex-wrap justify-center items-center mt-4"
        >
          {/* Primary Button */}
          <motion.a
            href={quoteLink}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center text-lg px-8 py-3 font-semibold 
               rounded-full transition-all duration-300
               bg-purple-500/80 text-white shadow-lg shadow-purple-900/40 
               hover:bg-purple-400 hover:shadow-purple-700/40 backdrop-blur-sm"
          >
            Get a Quote
            <ArrowLongRightIcon className="w-5 h-5 ml-2 -mt-1" />
          </motion.a>

          {/* Secondary Button */}
          <motion.a
            href={portfolioLink}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center text-lg px-8 py-3 font-semibold 
               rounded-full border border-purple-400/50 
               text-purple-200 hover:text-white hover:bg-purple-400/20 
               transition-all duration-300 backdrop-blur-sm"
          >
            See My Work
            <ArrowLongRightIcon className="w-5 h-5 ml-2 -mt-1" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MainHero;
