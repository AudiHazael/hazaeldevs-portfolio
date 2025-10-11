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

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

function Hero() {
  const { heading, subheading, buttonText, link } = slide;

  return (
    <section
      id="home"
      className="relative flex items-center justify-center w-full pt-20 px-6 md:px-20 text-gray-200 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center md:items-start justify-center w-full max-w-5xl space-y-6 backdrop-blur-[1px] md:text-left">
        <motion.div
          className="flex items-end gap-x-8"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full ring-2 ring-purple-400/50 ring-offset-[3px] ring-offset-gray-900 shadow-lg shadow-purple-500/10 overflow-hidden">
            <img
              src="/hazael-audi.jpg"
              alt="Hazael Audi"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex flex-col justify-end">
            <motion.h1
              className="text-3xl md:text-4xl mb-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
            >
              {heading}
            </motion.h1>
            <div className="mt-2">
              <Socials size="sm" />
            </div>
          </div>
        </motion.div>

        <motion.h2
          className="text-2xl text-center md:text-left font-bold text-zinc-50 leading-tight mt-4"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
        >
          {subheading}
        </motion.h2>

        <motion.div
          className="w-fit"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.9}
        >
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-lg md:text-xl px-8 py-3 font-semibold text-purple-300 border border-purple-500/40 rounded-full hover:bg-indigo-600/40 hover:border-indigo-400 hover:text-indigo-200 transition-all duration-300"
          >
            {buttonText}
            <ArrowLongRightIcon className="w-5 h-5 inline-block ml-2 -mt-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
