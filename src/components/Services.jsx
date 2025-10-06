import React from "react";
import { motion } from "framer-motion";
import { Icons } from "./Icons";

function Services() {
  // Variants for staggered fade-in
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, type: "spring" },
    }),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Frontend Development",
    name: "Professional Frontend Web Development Services",
    description:
      "Custom development services using modern frameworks like React and Next.js to build fast, responsive, and SEO-friendly user interfaces.",
    provider: {
      "@type": "Person",
      name: "Haza’ElDevs",
    },
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
  };

  return (
    <section className="py-10 text-gray-800 bg-inherit" id="services">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="max-w-7xl px-4 mx-auto">
        {/* Section Heading */}
        <motion.h6
          className="mb-2 font-semibold text-indigo-400 uppercase"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          custom={0}
        >
          My Services
        </motion.h6>

        <motion.h3
          className="mb-10 text-3xl font-bold text-zinc-50"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          custom={1}
        >
          Professional UI Design and Development Services
        </motion.h3>

        {/* UI Design Card */}
        <motion.div
          className="flex flex-col md:flex-row overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm border border-gray-800 hover:-translate-y-1 shadow mb-12 h-fit transition"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          custom={2}
        >
          <div className="md:w-auto w-full h-auto">
            <img
              src="/service-one.png"
              alt="image-for-ui-design"
              className="h-full w-full object-cover rounded-t-xl md:rounded-t-none md:rounded-l-xl"
            />
          </div>
          <div className="flex flex-col justify-center w-full md:w-2/3 px-6 py-8">
            <h4 className="mb-4 text-xl font-semibold text-zinc-50">
              User Interface (UI) Design
            </h4>
            <p className="leading-relaxed text-stone-50">
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

        {/* Frontend Development Card */}
        <motion.div
          className="flex flex-col md:flex-row-reverse overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm border border-gray-800 hover:-translate-y-1 shadow h-fit transition"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          custom={3}
        >
          <div className="md:w-auto w-full h-auto">
            <img
              src="/service-two.png"
              alt="image-of-front-end-development"
              className="h-full w-full object-cover rounded-t-xl md:rounded-t-none md:rounded-r-xl"
            />
          </div>
          <div className="flex flex-col justify-center w-full md:w-2/3 px-6 py-8">
            <h4 className="mb-4 text-xl font-semibold text-zinc-50">
              Frontend Development
            </h4>
            <p className="leading-relaxed text-stone-50 ">
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
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
              className="p-4 rounded-lg shadow-md inset-shadow-xs backdrop-blur-sm bg-white/10 border border-gray-800 hover:-translate-y-1 transition"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              custom={i}
            >
              <div className="flex space-x-4 my-2 items-center">
                {feature.icon({ className: "w-5 h-5 text-indigo-400" })}
                <h2 className="font-semibold text-zinc-50 uppercase">
                  {feature.title}
                </h2>
              </div>
              <p className="leading-relaxed text-stone-100">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
