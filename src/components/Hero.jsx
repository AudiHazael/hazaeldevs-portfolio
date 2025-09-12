import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Icons } from "./Icons";
import Socials from "./Socials";

const slides = [
  {
    heading: "Hi, I am Hazael Audi",
    subheading: "A UI Designer and Front-End Developer",
    buttonText: "Contact Me",
    link: "https://wa.me/2347039404909?text=Hello%20HazaelDevs!%20I'm%20interested%20in%20your%20services.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: "easeOut",
    },
  }),
};

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  const { heading, subheading, buttonText, link } = slides[current];

  return (
    <section
      id="home"
      className="flex items-center w-full min-h-screen px-4 md:px-20 text-white bg-gradient-to-br from-zinc-950 via-gray-900 to-black overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 items-center w-full max-w-7xl mx-auto gap-8">
        {/* Text */}
        <motion.div
          className="flex flex-col justify-center items-center space-y-6 md:col-span-12 text-center overflow-hidden w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.h1
            className="text-4xl text-indigo-400 font-ob"
            variants={fadeInUp}
            custom={0.3}
          >
            {heading}
          </motion.h1>

          <motion.h2
            className="text-2xl font-bold md:text-5xl"
            variants={fadeInUp}
            custom={0.6}
          >
            {subheading}
          </motion.h2>

          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-6 mt-7"
            variants={fadeInUp}
            custom={0.9}
          >
            <Socials />
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-4"
            variants={fadeInUp}
            custom={1.2}
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-lg px-8 py-3 font-semibold text-white transition bg-gradient-to-r bg-indigo-500 hover:bg-indigo-600  rounded-md hover:brightness-110"
            >
              {buttonText}
            </a>
          </motion.div>
        </motion.div>

        {/* Image Column (optional) */}
        {/* <motion.div
          className="hidden md:flex justify-center mt-6 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          custom={1.5}
        >
          <img
            src="/sample-image.jpg"
            alt="Sample hero image"
            className="w-[90%] max-w-md md:max-w-lg rounded-xl shadow-lg"
          />
        </motion.div> */}
      </div>
    </section>
  );
}

export default Hero;
