import React from "react";
import { motion } from "framer-motion";
import Socials from "./Socials";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.25, 0.8, 0.25, 1],
    },
  }),
};

const CombinedHeroAbout = () => {
  const slide = {
    heading: "Hazael Audi",
    subheading: "UI Designer & Frontend Developer",
    buttonText: "Contact Me",
    link: "https://wa.me/2347039404909?text=Hello%20HazaelDevs!%20I'm%20interested%20in%20your%20services.",
  };

  return (
    <section className="relative  py-20 px-6 md:px-20 bg-linear-to-b from-gray-900 via-zinc-900 to-black text-gray-100 overflow-hidden">
      {/* --- Decorative Glow Background --- */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-0 w-72 h-72 bg-indigo-700/25 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-60 h-60 bg-indigo-600/20 blur-3xl rounded-full animate-pulse"></div>
      </div>

      {/* --- Two Column Layout --- */}
      <div className="md:max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* LEFT COLUMN → HERO */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-4xl flex flex-col items-center space-y-6"
        >
          {/* Profile Row */}
          <motion.div
            variants={fadeInUp}
            custom={0.1}
            className="max-w-4xl flex items-end justify-center gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="relative w-28 h-28 md:w-32 md:h-32 rounded-full ring-2 ring-purple-400/40 shadow-xl overflow-hidden"
            >
              <img
                src="/hazael-audi.jpg"
                alt="Hazael Audi"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="flex flex-col justify-end">
              <h1 className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
                {slide.heading}
              </h1>
              <motion.div variants={fadeInUp} custom={0.9} className="mt-4">
                <Socials size="sm" gap={4} />
              </motion.div>
            </div>
          </motion.div>

          {/* Subheading */}
          <motion.h2
            variants={fadeInUp}
            custom={0.5}
            className="text-xl md:text-2xl text-center font-bold text-zinc-50 leading-snug"
          >
            {slide.subheading}
          </motion.h2>

          {/* Button */}
          <motion.div variants={fadeInUp} custom={0.7}>
            <a
              href={slide.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-lg md:text-xl px-8 py-3 font-semibold text-purple-300 border border-purple-500/40 rounded-full hover:border-indigo-400 hover:text-indigo-200 transition-all duration-300"
            >
              {slide.buttonText}
              <ArrowLongRightIcon className="w-5 h-5 inline-block ml-2 -mt-1" />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN → ABOUT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-6"
        >
          <motion.span
            variants={fadeInUp}
            custom={0.2}
            className="inline-block text-sm tracking-wider text-indigo-400 uppercase"
          >
            Designer • Developer
          </motion.span>

          <motion.h3
            variants={fadeInUp}
            custom={0.3}
            className="text-xl md:text-3xl font-semibold leading-snug"
          >
            Designing the vision,{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
              coding the reality.
            </span>
          </motion.h3>

          <motion.p
            variants={fadeInUp}
            custom={0.5}
            className="text-base leading-relaxed text-gray-300"
          >
            My journey into user interface design began with a fascination for
            how people interact with technology. Over the years, I’ve honed my
            ability to create digital experiences that balance aesthetics with
            usability.
            <br />
            <br />
            As a frontend developer, I bring visual ideas to life through clean,
            efficient, and responsive code. Every interaction is an opportunity
            to delight users and make technology feel effortless.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            custom={0.7}
            className="pt-4 border-t border-gray-700"
          >
            <h5 className="text-lg font-semibold text-white">
              HazaelDevs • Audi Hazael
            </h5>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CombinedHeroAbout;
