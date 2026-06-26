"use client";

import { motion } from "framer-motion";
import { FaFigma, FaReact, FaGithub } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiVercel,
  SiFramer,
  SiResend,
  SiTypescript,
} from "react-icons/si";

const tools = [
  { icon: SiNextdotjs, label: "Next.js", color: "#ffffff" },
  { icon: FaReact, label: "React", color: "#61dafb" },
  { icon: SiTailwindcss, label: "Tailwind CSS", color: "#38bdf8" },
  { icon: FaFigma, label: "Figma", color: "#f24e1e" },
  { icon: SiFramer, label: "Framer Motion", color: "#ffffff" },
  { icon: SiSupabase, label: "Supabase", color: "#3ecf8e" },
  { icon: SiResend, label: "Resend", color: "#ffffff" },
  { icon: SiVercel, label: "Vercel", color: "#ffffff" },
  { icon: FaGithub, label: "GitHub", color: "#ffffff" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Tools() {
  return (
    <section className="py-16 px-6 md:px-10 border-t border-zinc-800">
      <div className="md:max-w-[80%] mx-auto space-y-10">
        {/* Header */}
        <div>
          <span className="text-purple-300/50 text-sm font-semibold uppercase tracking-widest">
            Stack
          </span>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-zinc-50">
            Tools I build with
          </h2>
        </div>

        {/* Tool grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-3"
        >
          {tools.map(({ icon: Icon, label, color }) => (
            <motion.div
              key={label}
              variants={item}
              className="group flex flex-col items-center gap-4  hover:bg-zinc-900/80  hover:border-zinc-600 rounded-xl px-3 py-5 transition-all duration-200 cursor-default"
            >
              <Icon
                size={28}
                color={color}
                className="opacity-70 group-hover:opacity-100 transition-opacity duration-200"
              />
              <span className="text-[11px] font-medium text-zinc-500 group-hover:text-zinc-300 text-center leading-tight transition-colors duration-200">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
