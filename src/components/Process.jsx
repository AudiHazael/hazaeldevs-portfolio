import React from "react";

const steps = [
  {
    id: 1,
    title: "Goals & Priorities",
    bullets: [
      " Review your business, competitors, and audience",
      "Define pages, scope, and key conversion points",
      "Agree on what success looks like",
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
      "Receive a clear proposal with pricing and timeline",
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
      "Clean, responsive, SEO-aware build",
      "Performance and best-practice optimization",
      "QA review before launch",
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
        <h6 className="mb-2 font-semibold text-purple-300/50 uppercase">
          {" "}
          Process
        </h6>
        <h3 className="mb-6 font-bold text-zinc-50 text-2xl md:text-4xl">
          A clear, proven roadmap from idea to launch
        </h3>

        <p className="mb-8 max-w-3xl text-gray-300">
          This process is designed to keep projects clear, predictable, and
          focused on outcomes. You’ll always know what’s happening, what’s next,
          and what you’re paying for.
        </p>

        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2">
          {steps.map((s) => (
            <article
              key={s.id}
              className="flex gap-4 bg-zinc-900/40 p-5 border border-zinc-800 rounded-md"
            >
              <div className="shrink-0">
                <div className="flex justify-center items-center bg-purple-400/70 border border-purple-300/30 hover:border-purple-300/50 rounded-full ring-1 ring-white/5 w-8 h-8 font-medium text-slate-300 text-xs">
                  {s.id}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-zinc-50 text-lg">
                  {s.title}
                </h4>
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
            <h5 className="font-semibold text-zinc-50 text-lg">
              Ready to get started?
            </h5>
            <p className="text-gray-300 text-sm">
              Receive a clear breakdown, timeline, and next steps.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href={quoteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex relative items-center gap-2 bg-linear-to-r from-purple-500/70 to-fuchsia-500/60 shadow-black/30 shadow-lg hover:shadow-xl backdrop-blur-md px-8 py-3 rounded-full focus-outline-none focus-visible:ring-4 focus-visible:ring-purple-400/30 font-semibold text-white text-sm md:text-lg transition-all duration-300 ease-out"
            >
              Request a Project Breakdown
            </a>

            <a
              href="/services"
              className="inline-flex items-center gap-2 bg-black/5 hover:bg-white/10 shadow-black/20 shadow-sm backdrop-blur-md px-8 py-3 border border-purple-300/30 hover:border-purple-300/50 rounded-full focus-outline-none focus-visible:ring-4 focus-visible:ring-purple-300/30 font-semibold text-purple-200/90 hover:text-white text-sm md:text-lg transition-all duration-300 ease-out"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
