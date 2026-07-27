import Link from "next/link";

import { industries } from "@/lib/industries-data";

/**
 * Industry link-out. Two variants:
 * - "section" (default): standalone full-width block, own padding/border/
 *   max-width — use this dropped between page sections.
 * - "inline": no outer section chrome, styled to match a card sitting
 *   inside a grid (e.g. alongside the "reasons" cards on Services) —
 *   pass col-span classes via `className` from the parent grid.
 */
export default function IndustriesLinkOut({
  variant = "section",
  className = "",
}) {
  const isInline = variant === "inline";

  return (
    <div
      className={
        isInline
          ? `flex flex-col items-start gap-4 bg-zinc-900/40 hover:bg-zinc-900/60 p-4 sm:p-6 border border-zinc-800 rounded-xl w-full transition-all duration-300 ${className}`
          : ` py-16 md:py-20 border-t border-white/5 ${className}`
      }
    >
      <div className={isInline ? "w-full" : "mx-auto max-w-5xl"}>
        <p className="text-xs uppercase tracking-[0.2em] text-purple-300/70 mb-3">
          Industries I work with
        </p>
        <h2
          className={
            isInline
              ? "text-sm font-semibold text-zinc-50 mb-4"
              : "text-xl md:text-2xl font-semibold text-slate-50 mb-8"
          }
        >
          Lead generation systems built for your industry
        </h2>

        <div className="flex flex-wrap gap-3">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="rounded-full border border-white/10 bg-white/2 px-5 py-2.5 text-sm text-slate-300 hover:border-purple-400/50 hover:text-slate-100 transition-colors"
            >
              {industry.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
