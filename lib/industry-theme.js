/**
 * Visual tokens per industry "theme". Content stays in industries-data.js —
 * this file only controls spacing, radius, and motion so the same components
 * can render three distinct-feeling pages without duplicating markup.
 */
export const industryThemes = {
  law: {
    // Restrained, formal: hairline rules, generous whitespace, minimal motion
    painGrid: "gap-10 md:gap-14",
    painCard: "border-t border-white/10 pt-6",
    fixRadius: "rounded-lg",
    ctaSpacing: "py-20 md:py-28",
  },
  contractor: {
    // Denser, more urgent: bold left borders, tighter rhythm
    painGrid: "gap-6",
    painCard: "rounded-xl border-l-2 border-purple-500/50 bg-white/[0.02] p-6",
    fixRadius: "rounded-xl",
    ctaSpacing: "py-20 md:py-28",
  },
  clinic: {
    // Soft, calm: rounded corners, more breathing room
    painGrid: "gap-8",
    painCard: "rounded-3xl border border-white/10 bg-white/[0.02] p-6",
    fixRadius: "rounded-3xl",
    ctaSpacing: "py-28 md:py-36",
  },
};
