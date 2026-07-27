import { industryThemes } from "@/lib/industry-theme";

export default function IndustryCTA({ industry }) {
  const { ctaHeadline, ctaSubtext, theme } = industry;
  const tokens = industryThemes[theme];

  return (
    <section
      id="discovery"
      className={`px-6 ${tokens.ctaSpacing} border-t border-white/5 text-center`}
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl md:text-4xl font-semibold text-slate-50 mb-4 text-balance">
          {ctaHeadline}
        </h2>
        <p className="text-slate-400 mb-10 leading-relaxed">{ctaSubtext}</p>
        {/* Swap this href for your Tally discovery survey link if you'd
            rather route industry pages there instead of WhatsApp */}
        <a
          href="https://wa.me/2347039404909?text=Hi%20Hazael%2C%20I'd%20like%20a%20free%20breakdown%20for%20my%20business."
          className="inline-block rounded-full bg-linear-to-r from-purple-500 to-fuchsia-500 hover:opacity-90 transition-opacity px-8 py-3.5 text-sm md:text-base font-medium text-white"
        >
          Get My Free Breakdown
        </a>
      </div>
    </section>
  );
}
