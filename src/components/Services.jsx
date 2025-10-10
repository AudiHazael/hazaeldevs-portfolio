import React from "react";
import { motion } from "framer-motion";
import { Icons } from "./Icons";

function Services() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Frontend Development",
    name: "Professional Frontend Web Development Services",
    description:
      "Custom development services using modern frameworks like React and Next.js to build fast, responsive, and SEO-friendly user interfaces.",
    provider: { "@type": "Person", name: "Haza’ElDevs" },
    areaServed: { "@type": "Country", name: "Worldwide" },
  };

  return (
    <section
      id="services"
      className="relative py-24 bg-zinc-950 text-zinc-100 border-t border-zinc-800"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="max-w-6xl px-6 mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
          className="text-center mb-20"
        >
          <h6 className="text-sm font-semibold tracking-widest text-indigo-400 uppercase mb-3">
            My Services
          </h6>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional UI Design and Development Services
          </h3>
          <p className="max-w-2xl mx-auto text-gray-400 text-base leading-relaxed">
            I provide modern, detail-oriented solutions that combine great
            design and clean development for seamless digital experiences.
          </p>
        </motion.div>

        {/* --- UI Design Card --- */}
        <motion.div
          className="group flex flex-col md:flex-row overflow-hidden rounded-xl bg-zinc-900/40 hover:bg-zinc-900/60 backdrop-blur-md transition-all duration-500 mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <div className="md:w-1/2 flex items-center justify-center p-10 border-b border-zinc-800">
            <h2 className="text-2xl md:text-3xl font-semibold text-indigo-400 leading-snug">
              User Interface Design for Websites & Mobile Applications
            </h2>
          </div>
          <div className="md:w-1/2 p-8">
            <p className="text-gray-300 leading-relaxed text-base">
              I specialize in visually appealing and user-centered experiences.
              My approach revolves around understanding user needs and
              seamlessly translating them into elegant design solutions—from the
              initial concept to the final product.
              <br />
              <br />I strive to create interfaces that not only engage users but
              also improve their overall digital journey through a meticulous
              blend of aesthetics and functionality.
            </p>
          </div>
        </motion.div>

        {/* --- Frontend Development Card --- */}
        <motion.div
          className="group flex flex-col md:flex-row-reverse overflow-hidden rounded-xl bg-zinc-900/40 hover:bg-zinc-900/60 backdrop-blur-md transition-all duration-500 mb-24"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <div className="md:w-1/2 flex items-center justify-center p-10 border-b border-zinc-800">
            <h2 className="text-2xl md:text-3xl font-semibold text-indigo-400 leading-snug">
              Frontend Development for Websites & Mobile Applications
            </h2>
          </div>
          <div className="md:w-1/2 p-8">
            <p className="text-gray-300 leading-relaxed text-base">
              With precision and functionality, I bring designs to life. I
              convert static visuals into dynamic, interactive interfaces with
              ReactJS, adhering to industry best practices.
              <br />
              <br />
              My experience includes developing responsive and scalable user
              interface (UI) components that ensure consistent user experiences
              across multiple devices and platforms.
            </p>
          </div>
        </motion.div>

        {/* --- Feature Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Icons.CodeIcon,
              title: "Clean Code",
              text: "Writing clear, efficient, and scalable code with proper documentation.",
            },
            {
              icon: Icons.LayoutDashboard,
              title: "UI/UX Focus",
              text: "Designing user-friendly and aesthetically pleasing interfaces.",
            },
            {
              icon: Icons.Mphone,
              title: "Mobile Optimization",
              text: "Optimizing apps for fast load times and accessibility compliance.",
            },
            {
              icon: Icons.Zap,
              title: "Performance",
              text: "Ensuring top-notch performance and smooth user experience.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 3}
              className="group p-6 rounded-lg border-b border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/60 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-3">
                {feature.icon({
                  className:
                    "w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors",
                })}
                <h3 className="font-semibold text-zinc-100 uppercase tracking-wide text-sm">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
