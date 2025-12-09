import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Form() {
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [subject, setSubject] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "e8e13ec9-dfa7-41ad-8cc0-dcc5bf8a4732");
    formData.append("subject", subject || "General inquiry");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setShowPopup(true);
        e.target.reset();
        setSubject("");
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (err) {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <motion.form
        onSubmit={handleSubmit}
        className="bg-zinc-900/40 p-4 border border-gray-800 rounded-md w-full text-white"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
      >
        {/* Name */}
        <div className="mb-4">
          <label className="block mb-1">Name</label>
          <input
            name="name"
            required
            className="bg-zinc-800 px-3 py-2 rounded w-full"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="bg-zinc-800 px-3 py-2 rounded w-full"
          />
        </div>

        {/* Subject */}
        <div className="mb-4">
          <label className="block mb-1">What do you need help with?</label>
          <Listbox value={subject} onChange={setSubject}>
            <div className="relative">
              <Listbox.Button className="bg-zinc-800 px-3 py-2 rounded w-full text-left">
                {subject || "Select one"}
                <ChevronUpDownIcon className="top-2.5 right-2 absolute w-5 h-5" />
              </Listbox.Button>
              <Listbox.Options className="absolute bg-zinc-800 shadow mt-2 rounded w-full">
                {[
                  "New website",
                  "Revamp existing website",
                  "Landing page",
                  "Not sure yet",
                ].map((item) => (
                  <Listbox.Option key={item} value={item}>
                    {({ active }) => (
                      <li
                        className={`px-3 py-2 cursor-pointer ${
                          active ? "bg-indigo-600/30" : ""
                        }`}
                      >
                        {item}
                      </li>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        </div>

        {/* Message */}
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1 font-medium">
            {" "}
            Briefly describe what you need <br />{" "}
            <span className="font-light text-sm">
              {" "}
              Example: business type, number of pages, or a website you like.{" "}
            </span>{" "}
          </label>
          <textarea
            name="message"
            rows="4"
            required
            className="bg-zinc-800 px-3 py-2 rounded w-full"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`
    inline-flex items-center justify-center
    px-6 py-3 rounded-full font-semibold text-white
    bg-linear-to-r from-purple-500/70 to-fuchsia-500/60
    backdrop-blur-md
    ring-1 ring-white/20
    shadow-lg shadow-black/30

    transition-all duration-300 ease-out

    hover:shadow-xl
    focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-400/30

    disabled:opacity-50
    disabled:cursor-not-allowed
    disabled:hover:shadow-lg
  `}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-white animate-spin"
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
            </span>
          ) : (
            "Send Message"
          )}
        </button>
      </motion.form>

      {/* Success Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 flex justify-center items-center bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-zinc-900 p-8 rounded text-center"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
            >
              <h2 className="mb-2 text-xl">✅ Message Sent</h2>
              <p className="mb-4">I’ll reply within 24–48 hours.</p>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-indigo-500 px-4 py-2 rounded"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Form;
