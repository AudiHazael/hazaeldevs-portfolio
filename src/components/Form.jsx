import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut",
    },
  }),
};

function Form() {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [subject, setSubject] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      // ✅ Use FormSubmit JSON endpoint to avoid redirect issues
      const response = await fetch(
        "https://formsubmit.co/ajax/c41c51ccdd0636aed8eba6d6d1ef1bad",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      if (response.ok) {
        setShowPopup(true);
        e.target.reset();
      } else {
        const errorData = await response.json();
        console.error("FormSubmit error:", errorData);
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("There was a network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <motion.form
        onSubmit={handleSubmit}
        className="bg-zinc-900/40 shadow-md backdrop-blur-md p-4 border border-gray-800 rounded-md w-full text-stone-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        custom={0.2}
      >
        {/* Hidden Fields for FormSubmit */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_blacklist" value="spam, ads" />
        <input type="hidden" name="_template" value="box" />
        <input
          type="hidden"
          name="_autoresponse"
          value="Hello 👋, thank you for contacting us! We’ve received your message and will reply shortly."
        />

        {/* Forward a copy to your Gmail */}
        <input type="hidden" name="_cc" value="hazaelaudi@gmail.com" />

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="bg-zinc-800/25 px-3 py-2 border border-gray-800/75 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="bg-zinc-800/25 px-3 py-2 border border-gray-800/75 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
          />
        </div>

        {/* Subject */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">
            What do you need help with?
          </label>

          <Listbox value={subject} onChange={setSubject}>
            <div className="relative">
              {/* Trigger */}
              <Listbox.Button className="relative bg-zinc-800/25 px-3 py-2 border border-gray-800/75 rounded-md focus:outline-none w-full text-white text-left">
                <span className={subject ? "text-white" : "text-zinc-400"}>
                  {subject || "Select one"}
                </span>

                <span className="right-2 absolute inset-y-0 flex items-center pointer-events-none">
                  <ChevronUpDownIcon className="w-5 h-5 text-zinc-400" />
                </span>
              </Listbox.Button>

              {/* Dropdown */}
              <Listbox.Options className="z-50 absolute bg-zinc-800 shadow-xl mt-2 border border-gray-700 rounded-md w-full overflow-hidden">
                {[
                  "New website",
                  "Revamp existing website",
                  "Landing page",
                  "Not sure yet",
                ].map((item) => (
                  <Listbox.Option key={item} value={item}>
                    {({ active }) => (
                      <li
                        className={`cursor-pointer px-3 py-2 text-sm transition
                  ${
                    active
                      ? "bg-purple-600/30 text-white"
                      : "bg-zinc-800 text-zinc-200"
                  }
                `}
                      >
                        {item}
                      </li>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>

          {/* ✅ Hidden field so FormSubmit still works */}
          <input type="hidden" name="_subject" value={subject} required />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1 font-normal text-sm">
            Briefly describe what you need <br /> Example: business type, number
            of pages, or a website you like.
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            className="bg-zinc-800/25 px-3 py-2 border border-gray-800/75 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
          ></textarea>
        </div>

        {/* Checkbox */}
        <div className="flex items-end gap-2 mb-6">
          <input
            type="checkbox"
            id="terms"
            required
            className="mt-1 border focus:ring-blue-400 text-blue-500"
          />
          <label htmlFor="terms" className="text-sm">
            I understand this is a project inquiry, not an instant quote.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`inline-block px-6 md:px-8 py-3 font-semibold rounded-md border transition-all duration-300 ${
            loading
              ? "border-gray-500 text-gray-400 cursor-not-allowed"
              : " text-white border-gray-700 bg-indigo-500/15 border  hover:bg-indigo-600 transition"
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </motion.form>

      {/* Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="z-50 fixed inset-0 flex justify-center items-center bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-zinc-900/40 shadow-2xl backdrop-blur-3xl p-12 border border-gray-800 rounded-lg w-full max-w-md text-gray-100 text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h2 className="mb-2 font-semibold text-xl">✅ Form Submitted</h2>
              <p className="mb-4 text-gray-200">
                Message received. Thanks for reaching out. I’ll review your
                message and respond by email, typically within 24–48 hours.
              </p>
              <button
                onClick={handleClosePopup}
                className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-md text-white"
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
