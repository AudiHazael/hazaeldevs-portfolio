"use client";

import { useState } from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function NewsletterSignup({ compact = false }) {
  const [email,   setEmail]   = useState("");
  const [status,  setStatus]  = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setMessage("You're in. I'll send you the next post when it's ready.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  if (compact) {
    return (
      <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 space-y-4">
        <div>
          <h3 className="font-bold text-zinc-50">Get the next post</h3>
          <p className="text-gray-400 text-sm mt-1">
            No fluff. Just practical writing on websites and business systems.
          </p>
        </div>

        {status === "success" ? (
          <p className="text-emerald-400 text-sm font-medium">{message}</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 bg-zinc-800 border border-zinc-700 focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20 rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition-all duration-200"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="shrink-0 px-4 py-2.5 rounded-xl font-semibold text-sm bg-linear-to-r from-purple-500 to-fuchsia-500 hover:opacity-90 disabled:opacity-50 transition text-white"
            >
              {status === "loading" ? "..." : "Subscribe"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="text-red-400 text-xs">{message}</p>
        )}
      </div>
    );
  }

  return (
    <section className="relative py-20 px-6 md:px-10 border-t border-zinc-800 overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-purple-600/15 blur-3xl rounded-full" />
      </div>

      <div className="md:max-w-[80%] mx-auto">
        <div className="bg-linear-to-br from-purple-900/20 to-zinc-900/60 border border-purple-500/20 rounded-3xl px-8 md:px-14 py-14 text-center space-y-6">
          <span className="text-purple-300/50 text-sm font-semibold uppercase tracking-widest">
            Newsletter
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-50">
            Practical writing on websites and business systems.
          </h2>
          <p className="text-gray-300 max-w-lg mx-auto leading-relaxed">
            No fluff, no marketing roundups. When I publish something new, you
            get it — one post at a time, whenever it&apos;s ready.
          </p>

          {status === "success" ? (
            <div className="flex items-center justify-center gap-2 text-emerald-400 font-medium">
              <span>✓</span>
              <span>{message}</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 bg-zinc-900/60 border border-zinc-700 focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20 rounded-full px-5 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition-all duration-200"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-linear-to-r from-purple-500 to-fuchsia-500 hover:opacity-90 disabled:opacity-50 transition text-white shrink-0"
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
                {status !== "loading" && (
                  <ArrowLongRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                )}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="text-red-400 text-sm">{message}</p>
          )}

          <p className="text-zinc-600 text-xs">
            No spam. Unsubscribe any time.
          </p>
        </div>
      </div>
    </section>
  );
}
