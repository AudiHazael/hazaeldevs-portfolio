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
      title: "Company Website",
      img: "/business.png",
      desc: (
        <>
          <p>
            A clear, professional website that helps people quickly understand
            who you are, what you do, and how to contact you with confidence.
          </p>
          <ul className="mt-2 pl-5 text-gray-300 text-sm list-disc">
            <li>Clear service pages written for non-technical visitors</li>
            <li>Simple contact and enquiry flow</li>
            <li>Professional structure that builds credibility</li>
          </ul>
        </>
      ),
    },
    {
      title: "Project & Marketing Pages",
      img: "/landing.png",
      desc: (
        <>
          <p>
            Single-purpose pages designed to explain an offer clearly and guide
            visitors toward a specific action.
          </p>
          <ul className="mt-2 pl-5 text-gray-300 text-sm list-disc">
            <li>Clear messaging with one main goal</li>
            <li>Mobile-friendly layout</li>
            <li>Fast loading and easy to share</li>
          </ul>
        </>
      ),
    },
    {
      title: "Clear Process & Communication",
      img: "/ecommerce.png",
      desc: (
        <>
          <p>
            A straightforward development process designed to avoid surprises
            and wasted time.
          </p>
          <ul className="mt-2 pl-5 text-gray-300 text-sm list-disc">
            <li>Defined scope before work begins</li>
            <li>Clear timelines and expectations</li>
            <li>Written updates instead of unnecessary calls</li>
          </ul>
        </>
      ),
    },
  ];

  // Reasons data
  const reasons = [
    {
      title: "Modern & Mobile Friendly",
      icon: MonitorSmartphone,
      desc: (
        <>
          <p>
            All websites are built with modern design principles and optimized
            for every device:
          </p>
          <ul className="mt-2 pl-5 text-gray-300 text-sm list-disc">
            <li>Responsive layouts for phones, tablets, and desktops</li>
            <li>Touch-friendly navigation</li>
            <li>Fast performance on mobile networks</li>
          </ul>
        </>
      ),
    },
    {
      title: "Fast Delivery",
      icon: BoltIcon,
      desc: (
        <>
          <p>
            Projects are delivered quickly, with a streamlined process to save
            you time:
          </p>
          <ul className="mt-2 pl-5 text-gray-300 text-sm list-disc">
            <li>Clear project milestones</li>
            <li>Regular progress updates</li>
            <li>Rapid turnaround for revisions</li>
          </ul>
        </>
      ),
    },
    {
      title: "SEO Ready",
      icon: Rocket,
      desc: (
        <>
          <p>
            Websites are optimized for search engines to help your business get
            discovered online:
          </p>
          <ul className="mt-2 pl-5 text-gray-300 text-sm list-disc">
            <li>Semantic HTML structure</li>
            <li>Meta tags and Open Graph setup</li>
            <li>Fast page load speeds</li>
            <li>Accessible content for all users</li>
          </ul>
        </>
      ),
    },
    {
      title: "Affordable Pricing",
      icon: Code,
      desc: (
        <>
          <p>
            High-quality websites at reasonable prices, with flexible packages:
          </p>
          <ul className="mt-2 pl-5 text-gray-300 text-sm list-disc">
            <li>Transparent pricing with no hidden fees</li>
            <li>Custom solutions for every budget</li>
            <li>Free initial consultation</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <section className="relative bg-inherit py-12 border-zinc-800 border-t overflow-hidden text-zinc-100">
      <div className="mx-auto px-6 md:max-w-[80%]">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
          custom={0}
          className="flex flex-col justify-center items-start mb-12"
        >
          <h6 className="font-semibold text-indigo-400 text-sm uppercase tracking-widest">
            My Services
          </h6>
          <h3 className="font-bold text-zinc-50 text-2xl md:text-4xl">
            What I Offer
          </h3>
        </motion.div>

        {/* Services Cards */}
        <div className="gap-6 grid grid-cols-1 md:grid-cols-3 mb-16">
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              custom={i + 1}
              className="group flex flex-col items-start gap-4 bg-zinc-900/40 hover:bg-zinc-900/60 border border-zinc-800 rounded-md overflow-hidden transition-all duration-300"
            >
              <div className="relative w-full h-64 md:h-64">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#6b21a8]/40 group-hover:bg-[#6b21a8]/50 transition-opacity duration-300 pointer-events-none mix-blend-multiply" />
              </div>

              <div className="p-6">
                <h4 className="font-semibold text-zinc-50 text-xl">
                  {service.title}
                </h4>
                <div className="text-gray-300 text-sm leading-relaxed">
                  {service.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reasons Section */}
        <div className="items-center gap-12 grid grid-cols-1 xl:grid-cols-2 mt-20">
          <motion.div
            className="sm:flex-col-reverse gap-6 grid grid-cols-1 sm:grid-cols-2"
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
                  className="flex flex-col items-start gap-4 bg-zinc-900/40 hover:bg-zinc-900/60 p-4 sm:p-6 border border-zinc-800 rounded-xl w-full min-h-[140px] transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-indigo-400" />
                    <h5 className="font-semibold text-zinc-50 text-sm">
                      {reason.title}
                    </h5>
                  </div>

                  <div className="text-gray-300 text-sm leading-relaxed">
                    {reason.desc}
                  </div>
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
            <div className="relative rounded-md w-full overflow-hidden">
              <img
                src="/hazael-audi (2).jpg"
                alt="Why choose me"
                className="w-full h-[360px] object-cover"
              />
              <div className="absolute inset-0 bg-[#6b21a8]/50 transition-opacity duration-300 pointer-events-none mix-blend-multiply" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Services;
