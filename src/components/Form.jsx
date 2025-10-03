import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    try {
      await fetch("https://formsubmit.co/c41c51ccdd0636aed8eba6d6d1ef1bad", {
        method: "POST",
        body: formData,
      });

      setShowPopup(true);
      e.target.reset();
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    window.location.reload(); // Refresh page
  };

  return (
    <>
      <motion.form
        onSubmit={handleSubmit}
        className="w-full p-4 text-stone-50 backdrop-blur-sm bg-white/10 border border-gray-800 rounded-md shadow-md"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        custom={0.2}
      >
        <input type="hidden" name="_captcha" value="false" />

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
            className="w-full px-3 py-2 border border-gray-800 rounded-md bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
            className="w-full px-3 py-2 border border-gray-800 rounded-md bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Subject */}
        <div className="mb-4">
          <label htmlFor="subject" className="block mb-1 font-semibold">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="_subject"
            className="w-full px-3 py-2 border border-gray-800 rounded-md bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1 font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full px-3 py-2 border border-gray-800 rounded-md bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        {/* Checkbox */}
        <div className="flex items-end gap-2 mb-6">
          <input
            type="checkbox"
            id="terms"
            required
            className="mt-1 text-blue-500 focus:ring-blue-400"
          />
          <label htmlFor="terms" className="text-sm">
            Agree to Privacy Policy and Terms and Conditions
          </label>
        </div>

        {/* Hidden Fields for FormSubmit */}
        <input type="hidden" name="_blacklist" value="spam, ads" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_cc" value="hazaelaudi@gmail.com" />
        <input type="hidden" name="_bcc" value="hazaelaudi@gmail.com" />
        <input type="hidden" name="_replyto" value="%email%" />

        <input
          type="hidden"
          name="_autoresponse"
          value="Hello 👋, thank you for contacting us! We’ve received your message and will reply shortly."
        />

        {/* Submit Button with Loading State */}
        <button
          type="submit"
          disabled={loading}
          className={`inline-block px-6 md:px-8 py-3 font-semibold text-white rounded-md transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-500 hover:bg-indigo-600"
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </motion.form>

      {/* Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white text-gray-900 rounded-lg shadow-lg max-w-sm w-full p-6 text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h2 className="text-xl font-semibold mb-2">✅ Form Submitted</h2>
              <p className="mb-4 text-gray-600">
                Thank you! Your form has been submitted. We’ll contact you as
                soon as possible.
              </p>
              <button
                onClick={handleClosePopup}
                className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
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
