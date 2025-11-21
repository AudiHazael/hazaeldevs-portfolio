import React from "react";
import {
  FaFigma,
  FaReact,
  FaSass,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import Tailwind from "./Tailwind";
import { motion } from "framer-motion";

function Tools() {
  const tools = [
    { icon: <FaFigma fontSize="2rem" color="#f24e1e" />, delay: 0 },
    { icon: <FaReact fontSize="2rem" color="#61dafb" />, delay: 0.2 },
    { icon: <FaSass fontSize="2rem" color="#cd6799" />, delay: 0.4 },
    { icon: <FaBootstrap fontSize="2rem" color="#7952b3" />, delay: 0.6 },
    { icon: <FaGithub fontSize="2rem" className="text-white" />, delay: 0.8 },
    { icon: <Tailwind  />, delay: 1.0 },
  ];

  return (
    <section className="py-4 text-gray-800">
      <div className="flex flex-wrap justify-center items-center gap-12 mx-auto px-2 max-w-6xl">
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: tool.delay }}
            viewport={{ once: false, amount: 0.3 }}
            className="hover:scale-110 transition-transform"
          >
            {tool.icon}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Tools;
