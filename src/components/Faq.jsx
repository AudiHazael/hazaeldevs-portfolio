import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const faqs = [
  {
    q: "I'm still deciding — how do I know which website is right for my business?",
    a: `Start with the outcome: do you want more leads, sales, or visibility? I help you map features to goals (e.g. booking forms for service businesses, product pages for e-commerce). We begin with a short discovery call so you leave with a clear recommendation and a realistic estimate.`,
  },
  {
    q: "I already know what I want — what's the typical timeline?",
    a: `For a small business site (5–8 pages) expect 3–5 weeks from kickoff to launch. Landing pages and smaller projects can be faster. Larger e-commerce sites take longer and include staging and extended QA. I'll share a tailored timeline in the proposal.`,
  },
  {
    q: "How much will it cost?",
    a: `Costs depend on scope: number of pages, custom features, and integrations. I provide transparent proposals with milestone pricing. If budget is a constraint, I offer phased approaches so you can start small and scale.`,
  },
  {
    q: "Will my site be fast and SEO-friendly?",
    a: `Yes — every site I build prioritizes performance, semantic HTML, and basic SEO best practices (meta tags, Open Graph, fast assets). For advanced SEO we can add ongoing optimization as a separate phase.`,
  },
  {
    q: "Do you provide hosting and maintenance?",
    a: `I can deploy to your preferred host or recommend and manage hosting for you. Ongoing maintenance and support are available via monthly retainers or hourly plans — I’ll outline options in the proposal.`,
  },
  {
    q: "What if I need changes after launch?",
    a: `Minor tweaks are typically included during the warranty period. For ongoing updates we offer fast hourly support or a small monthly plan depending on your needs.`,
  },
];

export default function Faq() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section id="faq" className="bg-inherit py-12 text-zinc-100">
      <div className="mx-auto px-6 md:max-w-[80%]">
        <div className="mb-8">
          <h6 className="mb-2 font-semibold text-indigo-400 uppercase">
            Frequently Asked
          </h6>
          <h3 className="font-bold text-zinc-50 text-2xl md:text-4xl">
            Questions from visitors and clients
          </h3>
        </div>

        <div className="gap-8 grid grid-cols-1 lg:grid-cols-2">
          {/* Accordion Column */}
          <div>
            <div className="xs:space-y-3 md:space-y-0">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                const btnId = `faq-btn-${i}`;
                const panelId = `faq-panel-${i}`;

                return (
                  <motion.div
                    key={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    className="bg-zinc-900/40 border border-zinc-800 rounded-md overflow-hidden"
                  >
                    <button
                      id={btnId}
                      aria-controls={panelId}
                      aria-expanded={isOpen}
                      onClick={() => toggle(i)}
                      className="flex justify-between items-center gap-4 px-5 py-4 focus:outline-none w-full text-left"
                    >
                      <div>
                        <h4 className="font-semibold text-md text-zinc-50">
                          {f.q}
                        </h4>
                      </div>

                      <motion.div
                        className="flex justify-center items-center bg-white/2 rounded-full w-8 h-8 text-indigo-400"
                        aria-hidden
                      >
                        <motion.svg
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path d="M12 5v14M5 12h14" />
                        </motion.svg>
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={btnId}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.32, ease: "easeInOut" }}
                          className="px-5 pb-5 overflow-hidden"
                        >
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {f.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="flex flex-wrap gap-3 mt-6"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              <p className="mt-2 max-w-2xl text-gray-300">
                If you don't see your question, there's a quick way to get in
                touch below.
              </p>
              <a
                href="https://wa.me/2347039404909?text=Hi%20Hazael%2C%20I%20have%20a%20question%20about%20a%20website%20project%20and%20would%20like%20to%20chat."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-purple-500/80 hover:bg-purple-400 shadow-lg shadow-purple-900/40 hover:shadow-purple-700/40 backdrop-blur-sm px-8 py-3 rounded-full font-semibold text-white text-lg transition-all duration-300"
              >
                Chat with us
              </a>

              <a
                href="#contact"
                className="inline-flex items-center hover:bg-purple-400/20 backdrop-blur-sm px-8 py-3 border border-purple-400/50 rounded-full font-semibold text-purple-200 hover:text-white text-lg transition-all duration-300"
              >
                Request a Quote
              </a>
            </motion.div>
          </div>

          {/* Illustration Column */}
          <motion.div
            className="w-full"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            <div className="relative bg-zinc-900/20 border border-zinc-800 rounded-md overflow-hidden">
              <img
                src="/hazael-audi (2).jpg"
                alt="Discussing website process"
                className="w-full h-[360px] object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
