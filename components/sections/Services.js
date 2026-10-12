"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  Code2,
  MonitorSmartphone,
  Rocket,
  Workflow,
} from "lucide-react";
import IndustriesLinkOut from "../industry/IndustriesLinkOut";

const services = [
  {
    number: "01",
    title: "Business Websites",
    img: "/business.png",
    icon: MonitorSmartphone,
    description:
      "A professional online presence that communicates your value, builds credibility, and makes it easy for customers to reach you.",
    features: [
      "Clear, customer-focused service pages",
      "Simple contact and enquiry flows",
      "Responsive layouts across devices",
    ],
  },
  {
    number: "02",
    title: "Landing Pages & Sales Funnels",
    img: "/landing.png",
    icon: Rocket,
    description:
      "Focused landing pages that communicate your offer and guide visitors towards a booking, registration, or quote request.",
    features: [
      "Clear messaging and calls to action",
      "Mobile-first user experience",
      "Fast, shareable campaign pages",
    ],
  },
  {
    number: "03",
    title: "Business Systems & Workflows",
    img: "/ecommerce.png",
    icon: Workflow,
    description:
      "Practical digital tools that reduce repetitive work, organize business operations, and make everyday processes easier to manage.",
    features: [
      "Operations dashboards and admin panels",
      "Lead tracking and pipeline management",
      "Automated notifications and documents",
    ],
  },
];

const reasons = [
  {
    number: "01",
    title: "Designed for Every Device",
    icon: MonitorSmartphone,
    description:
      "Responsive interfaces, accessible navigation, and layouts built for phones, tablets, and desktops.",
  },
  {
    number: "02",
    title: "A Clear Delivery Process",
    icon: Code2,
    description:
      "Defined milestones, written progress updates, and structured revisions to keep projects on track.",
  },
  {
    number: "03",
    title: "Built with Discoverability in Mind",
    icon: Rocket,
    description:
      "Semantic HTML, relevant metadata, sitemap support, and performance-conscious development.",
  },
  {
    number: "04",
    title: "Practical, Business-Focused Work",
    icon: Workflow,
    description:
      "Clear scope, transparent pricing, and solutions designed to be maintained after handover.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function Services({ showHeading = false }) {
  const reduceMotion = useReducedMotion();

  const reveal = reduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.15 },
        variants: fadeInUp,
      };

  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-white/8 bg-[#09090f] py-20 text-zinc-100 sm:py-24 lg:py-28"
    >
      {/* Ambient background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-80 w-xl -translate-x-1/2 rounded-full bg-purple-700/10 blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <motion.div {...reveal} className="mb-12 max-w-3xl sm:mb-16">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-purple-400" />
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-purple-300">
              What I do
            </p>
          </div>

          <h2 className="max-w-2xl text-2xl md:text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            {showHeading ? (
              "Services built around your business."
            ) : (
              <>
                Websites. Systems.
                <span className="block text-zinc-400">
                  Measurable progress.
                </span>
              </>
            )}
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            From a credible business website to a workflow that eliminates
            repetitive tasks, I build digital solutions around the way your
            business actually operates.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                {...reveal}
                transition={
                  reduceMotion
                    ? undefined
                    : { ...fadeInUp.visible.transition, delay: index * 0.1 }
                }
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/9 bg-white/2.5 transition-colors duration-300 hover:border-purple-400/30 hover:bg-white/4.5"
              >
                {/* Image */}
                <div className="relative aspect-16/10 overflow-hidden bg-zinc-900">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-[#09090f]/80 via-transparent to-black/10" />

                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 backdrop-blur-md">
                    <span className="text-xs font-medium tracking-wider text-white/90">
                      {service.number}
                    </span>
                    <span className="h-3 w-px bg-white/30" />
                    <Icon
                      aria-hidden="true"
                      className="h-3.5 w-3.5 text-purple-300"
                    />
                  </div>
                </div>

                {/* Card content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-3 border-t border-white/8 pt-5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-6 text-zinc-300"
                      >
                        <Check
                          aria-hidden="true"
                          className="mt-1 h-4 w-4 shrink-0 text-purple-300"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    aria-label={`Discuss ${service.title}`}
                    className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-medium text-purple-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#09090f]"
                  >
                    Discuss your project
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Secondary CTA */}
        <motion.div
          {...reveal}
          className="mt-8 flex flex-col gap-4 rounded-2xl border border-purple-300/15 bg-purple-500/5.5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div>
            <h3 className="text-lg font-semibold text-white sm:text-xl">
              Have a specific business challenge?
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-400">
              Let&apos;s identify what needs to be built and define a practical
              scope before work begins.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-lg bg-purple-400 px-5 py-3 text-sm font-semibold text-[#130d1c] transition-colors hover:bg-purple-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090f] sm:self-center"
          >
            Let&apos;s talk
            <ArrowDownRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </motion.div>
      </div>

      {/* Why work with me */}
      <div className="relative mx-auto mt-24 max-w-7xl px-5 sm:mt-32 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-16">
          {/* Benefits */}
          <div>
            <motion.div {...reveal} className="mb-9 max-w-xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-purple-400" />
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-purple-300">
                  The difference
                </p>
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white ">
                Good design is only the beginning.
              </h2>

              <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
                Your website or system should serve a purpose, solve a problem,
                and make work easier. That is the standard behind every project.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;

                return (
                  <motion.article
                    key={reason.number}
                    {...reveal}
                    transition={
                      reduceMotion
                        ? undefined
                        : {
                            ...fadeInUp.visible.transition,
                            delay: index * 0.08,
                          }
                    }
                    className="rounded-xl border border-white/8 bg-white/2.5 p-5 transition-colors duration-300 hover:border-purple-400/25"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <span className="text-xs font-medium tracking-widest text-zinc-600">
                        {reason.number}
                      </span>

                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-purple-400/15 bg-purple-400/8">
                        <Icon
                          aria-hidden="true"
                          className="h-4 w-4 text-purple-300"
                        />
                      </div>
                    </div>

                    <h3 className="text-base font-semibold text-zinc-100">
                      {reason.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {reason.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>

            <div className="mt-6">
              <IndustriesLinkOut variant="inline" className="w-full" />
            </div>
          </div>

          {/* Profile panel */}

          <motion.div {...reveal} className="relative w-full min-w-0 lg:mt-32">
            <div className="absolute -inset-3 rounded-3xl border border-purple-400/10" />

            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
              <div className="relative w-full aspect-4/5 max-h-[560px] ">
                <Image
                  src="/hazael-audi (2).jpg"
                  alt="Hazael Audi, website and systems developer"
                  fill
                  sizes="(max-width: 1023px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#09090f] via-[#09090f]/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 bg-black/25 p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
                    Your digital partner
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Hazael Audi
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-300">
                    Frontend development, business websites, and practical
                    digital systems.
                  </p>

                  <a
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-purple-300/50 hover:bg-purple-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
                  >
                    Work with me
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Services;
