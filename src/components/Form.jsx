import React from "react";
import { motion } from "framer-motion";

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
  return (
    <motion.form
      action="https://formsubmit.co/95ed19d5febab735883fe41446874d20"
      method="POST"
      className="w-full p-4 text-stone-50 backdrop-blur-sm bg-white/10 border border-gray-800 rounded-md shadow-md"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeInUp}
      custom={0.2}
    >
      {/* Hidden Inputs */}
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="hidden"
        name="_next"
        value="https://hazaeldevs-portfolio.vercel.app/thank-you"
      />

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
          name="subject"
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
      <div className="flex items-start gap-2 mb-6">
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

      {/* Submit Button */}
      <button
        type="submit"
        className="px-6 py-2 text-white transition bg-gradient-to-r from-zinc-950 via-indigo-950 to-zinc-950 rounded-md hover:bg-blue-700"
      >
        Submit
      </button>
    </motion.form>
  );
}

export default Form;
