import React from "react";

const steps = [
  {
    id: 1,
    title: "Decide & Align",
    bullets: [
      "Clarify goals: leads, sales, or brand",
      "Set budget and timeline expectations",
      "Choose features that move the needle",
    ],
  },
  {
    id: 2,
    title: "Discovery",
    bullets: [
      "We review your business, competitors and users",
      "Define scope, pages and conversion points",
      "Agree on success metrics",
    ],
  },
  {
    id: 3,
    title: "Proposal & Plan",
    bullets: [
      "Receive a clear proposal and timeline",
      "Approve milestones and deliverables",
      "Sign-off and schedule start date",
    ],
  },
  {
    id: 4,
    title: "Design & Prototype",
    bullets: [
      "Wireframes and high-fidelity mockups",
      "Fast feedback cycles and iterations",
      "Clickable prototype for approval",
    ],
  },
  {
    id: 5,
    title: "Build & Optimize",
    bullets: [
      "Responsive, accessible, SEO-aware code",
      "Performance and best-practice optimizations",
      "Staging review and QA"
    ],
  },
  {
    id: 6,
    title: "Launch & Support",
    bullets: [
      "Go-live and monitor performance",
      "Handoff, training and documentation",
      "Ongoing support or retainer options",
    ],
  },
];

const quoteMessage =
  "Hi Hazael, I'd like a quote for a website — please advise next steps and availability.";
const quoteLink = `https://wa.me/2347039404909?text=${encodeURIComponent(
  quoteMessage
)} `;

function Process() {
  return (
    <section id="process" className="bg-inherit py-12 text-zinc-100">
      <div className="mx-auto px-6 md:max-w-[80%]">
        <h6 className="mb-2 font-semibold text-indigo-400 uppercase">Our Process</h6>
        <h3 className="mb-6 font-bold text-zinc-50 text-2xl md:text-4xl">
          A simple, proven roadmap from idea to launch
        </h3>

        <p className="mb-8 max-w-3xl text-gray-300">
          We focus on outcomes — not busywork. The process below keeps things
          predictable and fast so you start seeing results sooner.
        </p>

        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2">
          {steps.map((s) => (
            <article
              key={s.id}
              className="flex gap-4 bg-zinc-900/40 p-5 border border-zinc-800 rounded-md"
            >
              <div className="shrink-0">
                <div className="flex justify-center items-center bg-indigo-600 rounded-full w-8 h-8 font-bold text-white">
                  {s.id}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-zinc-50 text-lg">{s.title}</h4>
                <ul className="space-y-1 mt-2 pl-5 text-gray-300 text-sm list-disc">
                  {s.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-4 mt-8">
          <div>
            <h5 className="font-semibold text-zinc-50 text-lg">Ready to get started?</h5>
            <p className="text-gray-300 text-sm">Request a free, no-obligation quote and timeline.</p>
          </div>

          <div className="flex gap-3">
            <a
              href={quoteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-purple-500/80 hover:bg-purple-400 shadow-lg shadow-purple-900/40 hover:shadow-purple-700/40 backdrop-blur-sm px-8 py-3 rounded-full font-semibold text-white text-lg transition-all duration-300"
            >
              Get a Free Quote
            </a>

            <a
              href="#contact"
             className="inline-flex items-center hover:bg-purple-400/20 backdrop-blur-sm px-8 py-3 border border-purple-400/50 rounded-full font-semibold text-purple-200 hover:text-white text-lg transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;