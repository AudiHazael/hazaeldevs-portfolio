import { industryThemes } from "@/lib/industry-theme";

export default function LeadLeak({ industry }) {
  const { painPoints, theme } = industry;
  const tokens = industryThemes[theme];

  return (
    <section className="px-6 py-20 md:py-28 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-purple-300/70 mb-3">
            Where leads go missing
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-50 text-balance">
            A good website can still lose leads without the right system
            behind it.
          </h2>
        </div>

        <div className={`grid sm:grid-cols-2 ${tokens.painGrid}`}>
          {painPoints.map((point) => (
            <div key={point.title} className={tokens.painCard}>
              <h3 className="text-slate-100 font-medium text-lg mb-2">
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