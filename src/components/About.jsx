import React from "react";
import { motion } from "framer-motion";
import Socials from "./Socials";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut",
    },
  }),
};

function About() {
  return (
    <section className="relative my-24 py-12 md:px-8 overflow-hidden bg-gradient-to-b from-gray-900 via-zinc-900 to-black text-gray-100">
      {/* Subtle decorative glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>
      </div>

      <div className="px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 items-start justify-center">
          {/* Left tagline */}
          <motion.div
            className="md:col-span-12 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.2}
            variants={fadeInUp}
          >
            <span className="inline-block mb-4 text-sm tracking-wider text-indigo-400 uppercase">
              Designer • Developer
            </span>
            <h3 className="text-2xl font-semibold leading-snug text-white md:text-3xl">
              Designing the vision,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                coding the reality.
              </span>
            </h3>

            {/* Decorative line */}
            <div className="mt-6 w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>

            {/* Right bio content */}
            <motion.div
              className="md:col-span-6 space-y-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0.4}
              variants={fadeInUp}
            >
              <motion.h6
                className="font-semibold tracking-wide text-indigo-400 uppercase"
                custom={0.6}
                variants={fadeInUp}
              ></motion.h6>

              <motion.h2
                className="text-3xl font-bold text-white md:text-4xl"
                custom={0.8}
                variants={fadeInUp}
              >
                A Freelance UI Designer & Frontend Developer
              </motion.h2>

              <motion.p
                className="text-base leading-relaxed text-gray-300 md:text-lg"
                custom={1.0}
                variants={fadeInUp}
              >
                My journey into user interface design began with a fascination
                for how people interact with technology. Over the years, I’ve
                honed my ability to create digital experiences that balance
                aesthetics with usability.
                <br />
                <br />
                As a frontend developer, I bridge creativity and logic —
                bringing visual ideas to life through clean, efficient, and
                responsive code. I believe every interaction is an opportunity
                to delight users and make technology feel effortless.
              </motion.p>

              <motion.div
                className="pt-4 border-t border-gray-700"
                custom={1.2}
                variants={fadeInUp}
              >
                <h5 className="text-lg font-semibold text-white">
                  HazaelDevs • Audi Hazael
                </h5>

                <motion.div
                  className="flex mt-6"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.6}
                >
                  <Socials size="sm" gap={4} />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
