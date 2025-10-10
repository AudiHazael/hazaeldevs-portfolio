import React from "react";
import {
  FaFigma,
  FaReact,
  FaSass,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Tools() {
  const tools = [
    { icon: <FaFigma fontSize="2rem" color="#f24e1e" />, delay: 0 },
    { icon: <FaReact fontSize="2rem" color="#61dafb" />, delay: 0.2 },
    { icon: <FaSass fontSize="2rem" color="#cd6799" />, delay: 0.4 },
    { icon: <FaBootstrap fontSize="2rem" color="#7952b3" />, delay: 0.6 },
    { icon: <FaGithub fontSize="2rem" className="text-white" />, delay: 0.8 },
  ];

  return (
    <section className="py-10 text-gray-800">
      <div className="flex flex-wrap items-center justify-center max-w-6xl gap-12 px-2 mx-auto">
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: tool.delay }}
            viewport={{ once: false, amount: 0.3 }}
            className="transition-transform hover:scale-110"
          >
            {tool.icon}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Tools;
