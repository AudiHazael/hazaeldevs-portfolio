import React from "react";
import { motion } from "framer-motion";
import { Icons } from "./Icons";

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
    <section className="py-20 text-gray-800 bg-inherit">
      <div className="max-w-7xl px-4 mx-auto">
        {/* Top grid: image + bio */}
        <div className="grid grid-cols-1 md:grid-cols-12 place-items-center gap-8 overflow-hidden">
          <motion.div
            className="md:col-span-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            custom={0.2}
            variants={fadeInUp}
          >
            <img
              src="/about-img.jpg"
              alt="Sample hero image"
              className="w-full max-w-full sm:max-w-xs mx-auto shadow-lg rounded-sm object-contain"
            />
          </motion.div>

          <motion.div
            className="md:col-span-10 md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            custom={0.4}
            variants={fadeInUp}
          >
            <motion.h6
              className="mb-2 font-semibold text-indigo-400 uppercase"
              custom={0.6}
              variants={fadeInUp}
            >
              My Bio
            </motion.h6>

            <motion.h3
              className="mb-4 text-xl font-bold md:text-3xl text-zinc-50"
              custom={0.8}
              variants={fadeInUp}
            >
              A Freelance UI Designer and Frontend Developer
            </motion.h3>

            <motion.p
              className="mb-6 leading-relaxed text-stone-100 break-words text-md"
              custom={1.0}
              variants={fadeInUp}
            >
              My interest in user interfaces and the desire to create
              user-centric solutions sparked my interest in design. I have honed
              my skills in creating visually appealing designs that not only
              captivate, but also improve user interactions.
              <br />
              <br />
              Consequently, as a frontend developer, I bring these designs to
              life by weaving the fabric of functionality and aesthetics
              together. I believe in the power of code to turn abstract concepts
              into tangible, interactive experiences that leave an impression.
            </motion.p>

            <motion.h5
              className="text-lg font-semibold text-zinc-50"
              custom={1.2}
              variants={fadeInUp}
            >
              HazaelDevs | Audi Hazael
            </motion.h5>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
