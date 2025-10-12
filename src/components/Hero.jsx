import React from "react";
import { motion } from "framer-motion";
import Socials from "./Socials";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const slide = {
  heading: "Hazael Audi",
  subheading: "UI Designer & Frontend Developer",
  buttonText: "Contact Me",
  link: "https://wa.me/2347039404909?text=Hello%20HazaelDevs!%20I'm%20interested%20in%20your%20services.",
};

// --- ANIMATION VARIANTS ---
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

const Hero = () => {
  const { heading, subheading, buttonText, link } = slide;

  return (
    <section
      id="home"
      className="relative flex items-center justify-center w-full pt-20 px-6 md:px-20 text-gray-200 overflow-hidden"
    >
      {/* Subtle decorative glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute md:top-20 md:left-10 w-72 h-72 bg-indigo-700/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(9,9,11,0.15)_0%,transparent_70%)] pointer-events-none"></div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="relative z-10 flex flex-col items-center md:items-start justify-center py-8 w-full max-w-5xl space-y-6 backdrop-blur-[1px]"
      >
        {/* --- Image + Name Row --- */}
        <motion.div variants={fadeInUp} className="flex items-end gap-x-8">
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="relative w-28 h-28 md:w-32 md:h-32 rounded-full ring-2 ring-purple-400/50 ring-offset-[3px] ring-offset-gray-900 shadow-lg shadow-purple-500/10 overflow-hidden"
          >
            <img
              src="/hazael-audi.jpg"
              alt="Hazael Audi"
              className="object-cover w-full h-full"
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col justify-end">
            <motion.h1
              variants={fadeInUp}
              className="text-3xl md:text-4xl mb-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"
            >
              {heading}
            </motion.h1>
            <motion.div variants={fadeInUp} className="mt-2">
              <Socials size="sm" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* --- Subheading --- */}
        <motion.h2
          variants={fadeInUp}
          className="text-4xl text-center md:text-left font-bold text-zinc-50 leading-tight mt-4"
        >
          {subheading}
        </motion.h2>

        {/* --- Button --- */}
        <motion.div variants={fadeInUp} className="w-fit">
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(99,102,241,0.2)",
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block text-lg md:text-xl px-8 py-3 font-semibold text-purple-300 border border-purple-500/40 rounded-full hover:border-indigo-400 hover:text-indigo-200 transition-all duration-300"
          >
            {buttonText}
            <ArrowLongRightIcon className="w-5 h-5 inline-block ml-2 -mt-1" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
