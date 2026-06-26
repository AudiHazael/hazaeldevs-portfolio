"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/20/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const subjects = [
  { value: "New website", label: "New website" },
  { value: "Revamp existing website", label: "Revamp existing website" },
  { value: "Landing page", label: "Landing page" },
  { value: "Business system", label: "Business system / internal tool" },
  { value: "Not sure yet", label: "Not sure yet — let's talk" },
];

const inputClass =
  "w-full bg-zinc-900/60 border border-zinc-700 hover:border-zinc-600 focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition-all duration-200";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [subject, setSubject] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value,
          subject: subject?.value || "General inquiry",
          message: form.message.value,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setShowPopup(true);
        form.reset();
        setSubject(null);
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name + Email row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
              Name
            </label>
            <input
              name="name"
              required
              placeholder="Your name"
              className={inputClass}
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className={inputClass}
            />
          </div>
        </div>

        {/* Subject dropdown */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
            What do you need?
          </label>
          <Listbox value={subject} onChange={setSubject}>
            <div className="relative">
              <Listbox.Button
                className={`${inputClass} flex items-center justify-between cursor-pointer`}
              >
                <span className={subject ? "text-zinc-100" : "text-zinc-500"}>
                  {subject ? subject.label : "Select one"}
                </span>
                <ChevronUpDownIcon className="w-4 h-4 text-zinc-500 shrink-0" />
              </Listbox.Button>

              <Listbox.Options className="absolute z-20 mt-2 w-full bg-zinc-900 border border-zinc-700 rounded-xl shadow-xl overflow-hidden">
                {subjects.map((item) => (
                  <Listbox.Option key={item.value} value={item}>
                    {({ active, selected }) => (
                      <li
                        className={`flex items-center justify-between px-4 py-3 text-sm cursor-pointer transition-colors duration-150 ${
                          active
                            ? "bg-purple-500/15 text-zinc-50"
                            : "text-zinc-300"
                        }`}
                      >
                        {item.label}
                        {selected && (
                          <CheckIcon className="w-4 h-4 text-purple-400 shrink-0" />
                        )}
                      </li>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
            Describe what you need
          </label>
          <p className="text-xs text-zinc-500">
            Business type, number of pages, a site you like — whatever helps me
            understand.
          </p>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Tell me about your business and what you're trying to achieve..."
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="group w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm bg-linear-to-r from-purple-500 to-fuchsia-500 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition text-white"
        >
          {loading ? (
            <>
              <svg
                className="w-4 h-4 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  d="M4 12a8 8 0 018-8"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
              Sending…
            </>
          ) : (
            <>
              Send message
              <ArrowLongRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </>
          )}
        </button>

        <p className="text-xs text-zinc-500 text-center">
          Typical response time: within 24 hours.
        </p>
      </form>

      {/* ── Success modal ── */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 max-w-sm w-full text-center space-y-4 shadow-2xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center mx-auto">
                <span className="text-2xl">✓</span>
              </div>
              <h2 className="text-xl font-bold text-zinc-50">Message sent</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                I&apos;ll get back to you within 24 hours with a clear next
                step.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="w-full py-3 rounded-full font-semibold text-sm bg-linear-to-r from-purple-500 to-fuchsia-500 hover:opacity-90 transition text-white"
              >
                Done
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
