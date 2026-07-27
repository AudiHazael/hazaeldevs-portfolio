import { industryThemes } from "@/lib/industry-theme";

export default function SystemFix({ industry }) {
  const { fixPoints, theme } = industry;
  const tokens = industryThemes[theme];

  return (
    <section
      id="how-it-works"
      className="px-6 py-20 md:py-28 border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-purple-300/70 mb-3">
            What changes
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-50 text-balance">
            A website that captures leads — and a system that keeps them from
            going cold.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {fixPoints.map((point) => (
            <div
              key={point.title}
              className={`${tokens.fixRadius} border border-white/10 bg-white/3 p-6 flex flex-col gap-3`}
            >
              <div className="h-8 w-8 shrink-0 rounded-full bg-linear-to-r from-purple-500 to-fuchsia-500 flex items-center justify-center text-white text-sm font-medium">
                ✓
              </div>
              <h3 className="text-slate-100 font-medium text-lg">
                {point.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
