import React from "react";
import { motion } from "framer-motion";
import Socials from "./Socials";
import { Link } from "react-router-dom";

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
    <footer className="pt-14 pb-6 border-gray-800 border-t text-white">
      <div className="mx-auto px-4 container">
        {/* Socials */}
        <motion.div
          className="mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          custom={0.2}
        >
          <Socials />
        </motion.div>

        {/* Brand Block */}
        <motion.div
          className="flex flex-col items-center gap-4 mx-auto mb-10 max-w-xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          custom={0.4}
        >
          <img
            src="/Logo-Image.png"
            alt="Haza’ElDevs logo – Web developer in Lagos, Nigeria"
            className="w-32"
          />

          <p className="text-gray-300 text-sm">
            I design and build fast, conversion-focused websites for businesses
            that want to look credible, modern, and intentional online.
          </p>

          <p className="text-zinc-400 text-xs">
            Based in Lagos, Nigeria · Working with clients worldwide
          </p>
        </motion.div>

        {/* Footer Navigation */}
        <motion.nav
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          custom={0.5}
          aria-label="Footer navigation"
        >
          <Link
            to="/about"
            className="text-zinc-300 hover:text-white transition"
          >
            About
          </Link>
          <Link
            to="/location"
            className="text-zinc-300 hover:text-white transition"
          >
            Location
          </Link>
          <a
            href="/#contact"
            className="text-zinc-300 hover:text-white transition"
          >
            Contact
          </a>
        </motion.nav>

        {/* CTA Line */}
        <p className="mb-6 text-gray-400 text-sm text-center">
          Serious projects start with clarity, not rush.
        </p>

        {/* Copyright */}
        <motion.div
          className="text-zinc-100 text-sm text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          custom={0.6}
        >
          <p>
            © {new Date().getFullYear()} Haza’ElDevs · Built by{" "}
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
