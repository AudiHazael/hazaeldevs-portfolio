import React from "react";
import { motion } from "framer-motion";
import { Code, LayoutDashboard, MonitorSmartphone, Rocket } from "lucide-react";
import { DevicePhoneMobileIcon, BoltIcon } from "@heroicons/react/24/outline";

function Services() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  // Services data
  const services = [
    {
      title: "Business Website",
      img: "/business-website.jpg", // add your image paths
      desc: "Professional websites for businesses to establish their online presence and attract clients.",
    },
    {
      title: "Landing Pages",
      img: "/landing-page.jpg",
      desc: "High-converting landing pages designed to maximize leads and drive sales.",
    },
    {
      title: "E-commerce Website",
      img: "/ecommerce.jpg",
      desc: "Fully functional e-commerce websites with seamless shopping experience and responsive design.",
    },
  ];

  // Reasons data
  const reasons = [
    {
      title: "Modern & Mobile Friendly",
      icon: MonitorSmartphone,
      desc: "All websites are responsive, mobile-optimized, and built using modern design principles.",
    },
    {
      title: "Fast Delivery",
      icon: BoltIcon,
      desc: "I deliver projects quickly without compromising on quality or performance.",
    },
    {
      title: "SEO Ready",
      icon: Rocket,
      desc: "Websites are optimized for search engines to help your business get discovered online.",
    },
    {
      title: "Affordable Pricing",
      icon: Code,
      desc: "High-quality websites at reasonable prices that suit your budget.",
    },
  ];

  return (
    <section className="relative py-12 text-zinc-100 border-t border-zinc-800 bg-inherit overflow-hidden">
      <div className="md:max-w-[80%] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
          custom={0}
          className="flex flex-col justify-center items-start mb-12"
        >
          <h6 className="text-sm font-semibold tracking-widest text-indigo-400 uppercase">
            My Services
          </h6>
          <h3 className="text-2xl md:text-4xl font-bold text-zinc-50">
            What I Offer
          </h3>
        </motion.div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              custom={i + 1}
              className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6 flex flex-col items-start gap-4 hover:bg-zinc-900/60 transition-all duration-300"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-zinc-50">
                {service.title}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Reasons Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  custom={i + 2}
                  className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6 
                     flex flex-col items-start gap-4 
                     hover:bg-zinc-900/60 transition-all duration-300 min-h-40"
                >
                  <div className="flex gap-3 items-center">
                    <Icon className="w-5 h-5 text-indigo-400" />
                    <h5 className="text-sm font-semibold text-zinc-50">
                      {reason.title}
                    </h5>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {reason.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
            custom={1}
            className="w-full"
          >
            <img
              src="/hazael-audi (2).jpg"
              alt="Why choose me"
              className="w-full h-[280px] object-cover rounded-xl border border-zinc-800 bg-zinc-900/40"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Services;
