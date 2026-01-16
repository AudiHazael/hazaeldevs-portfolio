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
    title: "Proposal & Plan",
    bullets: [
      "Receive a clear proposal with pricing and timeline",
      "Approve milestones and deliverables",
      "Sign-off and schedule start date",
    ],
  },
  {
    id: 3,
    title: "Design & Prototype",
    bullets: [
      "Wireframes and high-fidelity mockups",
      "Fast feedback cycles and iterations",
      "Clickable prototype for approval",
    ],
  },
  {
    id: 4,
    title: "Build & Optimize",
    bullets: [
      "Clean, responsive, SEO-aware build",
      "Performance and best-practice optimization",
      "QA review before launch",
    ],
  },
  {
    id: 5,
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
      <div className="relative bg-zinc-900 py-16 text-zinc-100">
        <div className="mx-auto px-6 md:max-w-[80%]">
          <h6 className="mb-2 font-semibold text-purple-300/50 text-center uppercase tracking-wider">
            Process
          </h6>
          <h3 className="mb-6 font-bold text-zinc-50 text-3xl md:text-5xl text-center">
            A Proven Roadmap From Idea to Launch
          </h3>
          <p className="mx-auto mb-16 max-w-3xl text-gray-400 text-center">
            Our process is clear, predictable, and focused on outcomes—so you
            always know what’s next and what success looks like.
          </p>

          {/* Roadmap container */}
          <div className="relative flex md:flex-row flex-col md:justify-between md:items-start gap-12 align-middle">
            {/* Horizontal connector line */}
            <div className="hidden md:block top-1/2 right-0 left-0 -z-10 absolute bg-linear-to-r from-purple-500/30 via-purple-400/20 to-fuchsia-500/30 h-1"></div>

            {steps.map((s, i) => (
              <div
                key={s.id}
                className="group relative flex md:flex-col md:items-center text-center"
              >
                {/* Step circle */}
                <div className="flex justify-center items-center bg-linear-to-br from-purple-500 to-fuchsia-500 shadow-lg rounded-full ring-2 ring-purple-300/30 w-14 md:w-16 h-14 md:h-16 font-bold text-white text-lg md:text-xl group-hover:scale-110 transition-transform duration-300">
                  {s.id}
                </div>

                {/* Vertical connector for mobile */}

                <div className="md:hidden bg-linear-to-r from-purple-500/10 to-fuchsia-500/10 mx-2 my-6 w-full h-0.5"></div>

                {/* Step content */}
                <div className="mt-4 md:mt-6 max-w-xs md:max-w-sm">
                  <h4 className="font-normal text-zinc-50 text-sm text-left md:text-center align-center">
                    {s.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-6 mt-20 md:text-left text-center">
            <div>
              <h5 className="font-semibold text-zinc-50 text-lg md:text-xl">
                Ready to get started?
              </h5>
              <p className="text-gray-400 text-sm md:text-base">
                Receive a clear breakdown, timeline, and next steps.
              </p>
            </div>

            <div className="flex sm:flex-row flex-col justify-center md:justify-start gap-6 mt-4 sm:mt-0">
              <a
                href={quoteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-linear-to-r from-purple-500 to-fuchsia-500 shadow-lg hover:shadow-xl backdrop-blur-md px-8 py-3 rounded-full font-semibold text-white text-sm md:text-lg transition-all hover:-translate-y-1 duration-300 ease-out transform"
              >
                Request a Project Breakdown
              </a>

              <a
                href="/services"
                className="inline-flex items-center gap-2 bg-black/10 hover:bg-black/20 shadow-sm backdrop-blur-md px-8 py-3 border border-purple-300/30 hover:border-purple-400/50 rounded-full font-semibold text-purple-200/90 hover:text-white text-sm md:text-lg transition-all duration-300 ease-out"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
