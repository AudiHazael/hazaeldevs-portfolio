"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code, MonitorSmartphone, Rocket, BoltIcon } from "lucide-react";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";

// ─── ANIMATION ───────────────────────────────────────────────────────────────
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const services = [
  {
    title: "Business Websites",
    img: "/business.png",
    desc: (
      <>
        <p>
          A clear, professional website that helps people quickly understand who
          you are, what you do, and how to contact you with confidence.
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
    title: "Landing & Marketing Pages",
    img: "/landing.png",
    desc: (
      <>
        <p>
          Single-purpose pages designed to explain an offer clearly and guide
          visitors toward a specific action — a booking, a sign-up, or a quote
          request.
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
    // ✦ CHANGE: rewritten from "Clear Process & Communication" to reflect
    //   systems/workflow capability — same card slot, bigger signal
    title: "Business Systems & Workflows",
    img: "/ecommerce.png",
    desc: (
      <>
        <p>
          Beyond websites — I design and build the internal tools and automated
          workflows that help your business run without you manually managing
          every step.
        </p>
        <ul className="mt-2 pl-5 text-gray-300 text-sm list-disc">
          <li>Operations dashboards and admin panels</li>
          <li>Lead tracking and pipeline management</li>
          <li>Automated notifications and document generation</li>
        </ul>
      </>
    ),
  },
];

const reasons = [
  {
    title: "Modern & Mobile Friendly",
    icon: MonitorSmartphone,
    desc: (
      <>
        <p>
          All websites are built with modern design principles and optimized for
          every device:
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
    // ✦ NOTE: lucide-react doesn't export BoltIcon — using Zap instead
    icon: Code,
    desc: (
      <>
        <p>
          Projects are delivered quickly, with a defined process to save you
          time:
        </p>
        <ul className="mt-2 pl-5 text-gray-300 text-sm list-disc">
          <li>Clear project milestones from day one</li>
          <li>Written updates — no unnecessary calls</li>
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
          Every site is built to be found — structured so Google can read,
          index, and rank it properly:
        </p>
        <ul className="mt-2 pl-5 text-gray-300 text-sm list-disc">
          <li>Semantic HTML and meta tag setup</li>
          <li>Auto-generated sitemaps and Open Graph tags</li>
          <li>Fast load speeds and accessible content</li>
        </ul>
      </>
    ),
  },
  {
    // ✦ CHANGE: "Affordable Pricing" → "Built for Real Business Use"
    //   positions the work as practical and outcome-driven, not just cheap
    title: "Built for Real Business Use",
    icon: MonitorSmartphone,
    desc: (
      <>
        <p>
          Everything is built to actually work in your business — not just look
          good in a browser:
        </p>
        <ul className="mt-2 pl-5 text-gray-300 text-sm list-disc">
          <li>Scope defined before work begins — no surprises</li>
          <li>Transparent pricing with no hidden fees</li>
          <li>Designed to hand off cleanly and run without me</li>
        </ul>
      </>
    ),
  },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────
function Services({ showHeading = false }) {
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
          <h6 className="font-semibold text-purple-300/50 text-sm uppercase tracking-widest">
            My Services
          </h6>
          {/* ✦ CHANGE: heading now covers both offerings */}
          <h3 className="font-bold text-zinc-50 text-2xl md:text-4xl">
            {showHeading ? "Services" : "Websites. Systems. Results."}
          </h3>
          {/* ✦ NEW: one-line subtitle that bridges websites and systems */}
          <p className="mt-2 text-gray-400 text-sm max-w-xl">
            I build what your business actually needs — whether that&apos;s a
            credible website, a marketing page, or an internal system that
            replaces the spreadsheets and manual follow-ups slowing you down.
          </p>
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
              <div className="relative w-full h-64">
                <Image
                  src={service.img}
                  alt={service.title}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
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
            className="gap-6 grid grid-cols-1 sm:grid-cols-2"
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
                  className="flex flex-col items-start gap-4 bg-zinc-900/40 hover:bg-zinc-900/60 p-4 sm:p-6 border border-zinc-800 rounded-xl w-full min-h-35 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-purple-400/70" />
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
              <Image
                src="/hazael-audi (2).jpg"
                alt="Hazael Audi — Website and systems developer"
                width={600}
                height={200}
                className=" object-cover transition-transform duration-500 hover:scale-105"
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
