import { Fraunces } from "next/font/google";

// Used only for the law-firm accent word — a single serif touch for gravitas.
// Loaded here rather than globally so it never leaks into the rest of the site.
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["500"],
  variable: "--font-accent",
});

export default function IndustryHero({ industry }) {
  const { theme, eyebrow, heroHeadline, heroSubhead, heroStat } = industry;

  return (
    <section className="relative px-6 pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-7xl ">
        <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-purple-300/70 mb-6">
          {eyebrow}
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold leading-[1.12] text-slate-50 text-balance">
          {heroHeadline.map((part, i) =>
            part.accent ? (
              <span
                key={i}
                className={
                  theme === "law"
                    ? `${fraunces.className} italic bg-linear-to-r from-purple-300 to-fuchsia-300 bg-clip-text text-transparent`
                    : "bg-linear-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent"
                }
              >
                {part.text}
              </span>
            ) : (
              <span key={i}>{part.text}</span>
            ),
          )}
        </h1>

        <p className="mt-6 md:mt-8 text-base md:text-lg text-slate-400 max-w-4xl leading-relaxed text-balance">
          {heroSubhead}
        </p>

        {theme === "contractor" && heroStat ? (
          <div className="mt-8 inline-flex gap-2 rounded-full border border-white/10 bg-white/3 px-4 py-2 text-sm text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-fuchsia-400"></span>
            </span>
            {heroStat.label}:{" "}
            <span className="font-medium text-slate-100">{heroStat.value}</span>
          </div>
        ) : null}

        <div className="mt-10 flex flex-col items-center sm:flex-row gap-4">
          <a
            href="#discovery"
            className="rounded-full bg-linear-to-r from-purple-500 to-fuchsia-500 hover:opacity-90 transition-opacity px-7 py-3 text-sm md:text-base font-medium text-white"
          >
            Get My Free Breakdown
          </a>
          <a
            href="#how-it-works"
            className="rounded-full border border-white/15 hover:border-purple-400/50 transition-colors px-7 py-3 text-sm md:text-base font-medium text-slate-200"
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
