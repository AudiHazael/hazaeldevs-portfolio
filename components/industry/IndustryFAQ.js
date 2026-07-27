export default function IndustryFAQ({ industry }) {
  const { faq } = industry;

  return (
    <section className="px-6 py-20 md:py-28 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.2em] text-purple-300/70 mb-3">
          Common questions
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-50 mb-10">
          Frequently asked
        </h2>

        <div className="divide-y divide-white/10">
          {faq.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-slate-100 font-medium marker:content-none">
                {item.q}
                <span className="shrink-0 text-purple-300 text-xl leading-none transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
