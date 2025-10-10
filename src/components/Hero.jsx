import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Icons } from "./Icons";
import Socials from "./Socials";

const slides = [
  {
    heading: "Hi, I am Hazael Audi",
    subheading: "UI Designer and Frontend Developer",
    buttonText: "Contact Me",
    link: "https://wa.me/2347039404909?text=Hello%20HazaelDevs!%20I'm%20interested%20in%20your%20services.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, []);

  const { heading, subheading, buttonText, link } = slides[current];

  return (
    <section
      id="home"
      className="relative flex items-center justify-center w-full min-h-[75vh] py-20 px-6 md:px-16 text-gray-200 bg-gradient-to-br from-zinc-950 via-gray-900 to-black border-b border-gray-900 overflow-hidden"
    >
      {/* Subtle background light overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_70%)] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-5xl space-y-6 backdrop-blur-[1px]">
        <motion.h1
          className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-medium tracking-wide"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          {heading}
        </motion.h1>

        <motion.h2
          className="text-4xl md:text-6xl font-bold text-zinc-50 leading-tight"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
        >
          {subheading}
        </motion.h2>

        <motion.div
          className="flex justify-center mt-6"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
        >
          <Socials />
        </motion.div>

        <motion.div
          className="mt-10"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.9}
        >
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-lg px-8 py-3 font-semibold text-gray-200 border border-gray-700 rounded-md transition-all duration-300 bg-indigo-500/15 hover:bg-indigo-600/40 hover:border-indigo-400 hover:text-indigo-200"
          >
            {buttonText}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
