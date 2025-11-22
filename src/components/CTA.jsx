import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  const quoteMessage = `Hi Hazael, I'd love a quick quote for a website — nothing fancy, just something that makes my competitors jealous.`;
  const waLink = `https://wa.me/2347039404909?text=${encodeURIComponent(
    quoteMessage
  )}`;

  const container = {
    hidden: { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.06, when: "beforeChildren" },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 6 },
    show: { opacity: 1, y: 0, transition: { duration: 0.36, ease: "easeOut" } },
  };

  const btnHover = { scale: 1.03 };
  const btnTap = { scale: 0.98 };

  return (
    <motion.section
      className="relative bg-linear-to-b from-gray-900 via-zinc-900 to-black shadow-lg p-6 md:p-8 py-12 w-full overflow-hidden text-white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={container}
    >
      {/* decorative glows (behind content) */}
      <div className="-z-10 absolute inset-0 pointer-events-none">
        <div className="-top-10 -left-20 absolute bg-white/6 blur-3xl rounded-full w-72 h-72 mix-blend-screen" />
        <div className="-right-12 -bottom-6 absolute bg-purple-400/8 blur-2xl rounded-full w-56 h-56 mix-blend-screen" />
      </div>

      <div className="flex md:flex-row flex-col justify-between items-center gap-4 mx-auto max-w-4xl">
        <motion.div className="flex-1" variants={item}>
          <motion.div
            className="bg-black/20 backdrop-blur-md p-4 md:p-6 py-12 text-center"
            variants={item}
          >
            <motion.p
              className="drop-shadow-md text-white/90 text-sm"
              variants={item}
            >
              Got 30 seconds? Good — that’s all I need.
            </motion.p>
            <motion.h3
              className="drop-shadow-lg mt-1 font-semibold text-white text-2xl"
              variants={item}
            >
              Give me a problem, I’ll give you a website (and maybe a little
              swagger).
            </motion.h3>
            <motion.p
              className="drop-shadow-sm mt-2 text-white/90 text-sm"
              variants={item}
            >
              We build things that look expensive, without the expensive drama.
              Quick call → faster launch → bragging rights.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex items-center gap-3 shrink-0"
          variants={item}
        >
          <motion.a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white shadow-lg px-4 py-2 rounded-full font-semibold text-indigo-700"
            whileHover={btnHover}
            whileTap={btnTap}
            variants={item}
            transition={{ type: "spring", stiffness: 300 }}
            aria-label="Request a quick quote on WhatsApp"
          >
            💬 Quick quote
          </motion.a>

          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 bg-indigo-700 hover:bg-indigo-600 shadow-md px-4 py-2 rounded-full ring-1 ring-white/10 font-semibold text-white"
            whileHover={btnHover}
            whileTap={btnTap}
            variants={item}
            transition={{ type: "spring", stiffness: 300 }}
            aria-label="Start a project"
          >
            ✉️ Start project
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTA;
