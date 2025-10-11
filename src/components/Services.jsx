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
      className="relative py-24 text-zinc-100 border-t border-zinc-800"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="md:max-w-9/10 px-6 mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
          className="mb-2 flex flex-col justify-center items-start"
        >
          <h6 className="text-sm font-semibold tracking-widest text-indigo-400 uppercase mb-3">
            My Services
          </h6>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional UI Design and Development Services
          </h3>
        </motion.div>

        {/* --- UI Design Card --- */}
        <motion.div
          className="group grid grid-cols-1 md:grid-cols-12 justify-center items-stretch overflow-hidden rounded-xl mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <div className="md:col-span-6 relative md:mx-24 py-10 md:py-20 h-full">
            <h2 className="text-2xl md:ml-8 md:text-3xl font-semibold text-indigo-400 leading-snug">
              User Interface Design for Websites <br /> & Mobile Applications
            </h2>
            <div className="px-4 mt-6 md:px-24 md:my-12 py-4 md:py-10 bg-zinc-900/40">
              <p className="text-gray-300 leading-relaxed text-base">
                I specialize in visually appealing and user-centered
                experiences. My approach revolves around understanding user
                needs and seamlessly translating them into elegant design
                solutions—from the initial concept to the final product.
                <br />
                <br />I strive to create interfaces that not only engage users
                but also improve their overall digital journey through a
                meticulous blend of aesthetics and functionality.
              </p>
            </div>
          </div>

          {/* --- Frontend Development Card --- */}

          <div className="md:col-span-6 relative md:mx-24 pt-16 pb-8 h-full border-t md:border-t-0 md:border-l border-zinc-800">
            <h2 className="text-2xl md:text-3xl md:ml-8 font-semibold text-indigo-400 leading-snug">
              Frontend Development for Websites <br /> & Mobile Applications
            </h2>
            <div className="p-6 mt-6 md:px-24 md:my-12 md:py-10 bg-zinc-900/40 ">
              <p className="text-gray-300 leading-relaxed text-base">
                With precision and functionality, I bring designs to life. I
                convert static visuals into dynamic, interactive interfaces with
                ReactJS, adhering to industry best practices.
                <br />
                <br />
                My experience includes developing responsive and scalable user
                interface (UI) components that ensure consistent user
                experiences across multiple devices and platforms.
              </p>
            </div>
          </div>
        </motion.div>

        {/* --- Feature Grid --- */}
        <div className="md:max-w-[70%] mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
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
              icon: Icons.SEO,
              title: "SEO",
              text: "Optimizing your site to rank higher on search engines, increasing your visibility.",
            },
            {
              icon: Icons.Mphone,
              title: "Mobile Optimization",
              text: "Optimizing apps for fast load times and accessibility compliance.",
            },
            {
              icon: Icons.Devices,
              title: "Responsive Design",
              text: "Creating layouts that adapt seamlessly to any screen size, from desktops to mobile phones.",
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
              className="w-full group p-6 rounded-lg border-b border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/60 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-8">
                {feature.icon({
                  className:
                    "w-6 h-6 text-indigo-400 group-hover:text-indigo-300 transition-colors",
                })}
                <h3 className="font-semibold text-zinc-100 uppercase tracking-wide text-sm">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-400 text-[10px] md:text-md leading-relaxed">
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
