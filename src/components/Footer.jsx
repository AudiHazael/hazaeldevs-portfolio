import React from "react";
import { motion } from "framer-motion";
import Socials from "./Socials";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
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

function Footer() {
  return (
    <footer className="py-5 text-white border-t-1 border-gray-800">
      <div className="container px-4 mx-auto py-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          custom={0.2}
        >
          <Socials />
        </motion.div>

        {/* Logo & Description (Centered) */}
        <motion.div
          className="flex flex-col items-center max-w-xl mx-auto text-center gap-4 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          custom={0.4}
        >
          <img src="/Logo-Image.png" alt="HazaElDevs Logo" className="w-32" />
          <p className="text-gray-300">
            Crafting seamless user experiences with attention to detail,
            functionality, and style. Let’s build something meaningful and
            memorable together.
          </p>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-md text-center text-zinc-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          custom={0.6}
        >
          <p>
            © 2025 HazaElDevs | Designed by{" "}
            <a
              href="https://wa.link/8k0f7s"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-400 hover:underline"
            >
              Hazael Audi
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
