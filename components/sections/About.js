"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
    // ✦ CHANGE: title updated to include systems
    subheading: "Website & Systems Developer for Small Businesses",
    buttonText: "Describe your project",
    link: "https://wa.me/2347039404909?text=Hi%20Hazael,%20I%20visited%20your%20website%20and%20would%20like%20to%20briefly%20describe%20a%20project.",
  };

  return (
    <section className="relative bg-linear-to-b from-gray-900 via-zinc-900 to-black px-6 py-12 overflow-hidden text-gray-100">
      {/* Decorative Glow */}
      <div className="-z-10 absolute inset-0">
        <div className="top-10 left-0 absolute bg-indigo-700/25 blur-3xl rounded-full w-72 h-72 animate-pulse" />
        <div className="top-40 right-10 absolute bg-purple-500/20 blur-3xl rounded-full w-80 h-80 animate-pulse" />
        <div className="bottom-10 left-20 absolute bg-indigo-600/20 blur-3xl rounded-full w-60 h-60 animate-pulse" />
      </div>

      <div className="items-center gap-4 grid grid-cols-1 lg:grid-cols-2 mx-auto md:max-w-[80%]">
        {/* LEFT — Hero */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col items-center space-y-6 max-w-4xl"
        >
          {/* Profile row */}
          <motion.div
            variants={fadeInUp}
            custom={0.1}
            className="flex justify-center items-end gap-6 max-w-4xl"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="relative shadow-xl rounded-full ring-2 ring-purple-400/40 w-28 md:w-32 h-28 md:h-32 overflow-hidden shrink-0"
            >
              <Image
                src="/hazael-audi.jpg"
                alt="Hazael Audi"
                fill
                sizes="(max-width: 768px) 112px, 128px"
                className="object-cover"
                priority
              />
            </motion.div>

            <div className="flex flex-col justify-end">
              <h1 className="bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400 font-semibold text-transparent text-3xl md:text-4xl">
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
            className="font-bold text-zinc-50 text-xl md:text-2xl text-center leading-snug"
          >
            {slide.subheading}
          </motion.h2>

          {/* Button */}
          <motion.div variants={fadeInUp} custom={0.7}>
            <a
              href={slide.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black/5 hover:bg-white/10 shadow-black/20 shadow-sm backdrop-blur-md px-8 py-3 border border-purple-300/30 hover:border-purple-300/50 rounded-full font-semibold text-purple-200/90 hover:text-white text-lg transition-all duration-300 ease-out"
            >
              <span>{slide.buttonText}</span>
              <ArrowLongRightIcon className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Mobile divider */}
        <hr className="lg:hidden block my-4 border-gray-700 border-t w-full" />

        {/* RIGHT — About */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-6"
        >
          <motion.h3
            variants={fadeInUp}
            custom={0.3}
            className="font-semibold text-xl md:text-3xl leading-snug"
          >
            Building clear,{" "}
            <span className="bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400 text-transparent">
              dependable websites and systems for business use
            </span>
          </motion.h3>

          <motion.p
            variants={fadeInUp}
            custom={0.5}
            className="text-gray-300 text-base leading-relaxed"
          >
            I work with businesses that need a clear, professional online
            presence — one that helps customers understand their services and
            make contact with confidence.
            <br />
            <br />
            My focus is on structure, clarity, and practical design. Every
            project follows a defined process to ensure scope, timelines, and
            expectations stay clear from start to finish.
            <br />
            <br />
            {/* ✦ NEW paragraph: plants the systems seed without overselling it */}
            Some clients come back after the website is live. They have a
            process that still runs on WhatsApp messages and spreadsheets — lead
            tracking, job management, document generation. That&apos;s where I
            build the next layer: internal tools and workflows that replace the
            manual work and let the business scale without the chaos.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            custom={0.7}
            className="pt-4 border-gray-700 md:border-t"
          >
            <h5 className="font-semibold text-white text-lg">
              HazaelDevs · Audi Hazael
            </h5>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CombinedHeroAbout;
