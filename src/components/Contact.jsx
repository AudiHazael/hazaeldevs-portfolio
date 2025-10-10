import React from "react";
import { motion } from "framer-motion";
import Form from "./Form";
import { Icons } from "../components/Icons";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
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

function Contact() {
  return (
    <section className="py-20 text-gray-800 bg-transparent" id="contact">
      <div className="max-w-[75%] px-4 mx-auto">
        <div className="flex flex-col gap-4 md:flex-row justify-center items-end">
          {/* Contact Details */}
          <motion.div
            className="space-y-6 md:w-1/2 mt-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp}
            custom={0.2}
          >
            <motion.h6
              className="mb-2 font-semibold text-indigo-400 uppercase"
              variants={fadeInUp}
              custom={0.3}
            >
              Contact Me
            </motion.h6>

            <motion.h4
              className="text-2xl text-zinc-50 font-bold md:text-3xl"
              variants={fadeInUp}
              custom={0.5}
            >
              Reach Out - Let's Create Together
            </motion.h4>

            <motion.p
              className="text-stone-200 text-md"
              variants={fadeInUp}
              custom={0.7}
            >
              Do you want to transform your ideas into memorable experiences? I
              am here to listen, collaborate, and help you realize your vision.
              Reach out today and let's embark on a creative and successful
              journey together.
            </motion.p>

            <motion.div
              className="flex gap-4 rounded-lg shadow-md inset-shadow-xs backdrop-blur-md dark:bg-zinc-900/40 border-b border-gray-800 hover:-translate-y-1 h-24 w-full justify-start items-center space-x-2 px-2"
              variants={fadeInUp}
              custom={0.9}
            >
              {Icons.Map({ className: "w-6 h-6 mt-1 text-indigo-400 " })}
              <div>
                <h4 className="text-md font-bold text-stone-100">Address</h4>
                <p className="text-stone-300">
                  Plot 15, Jesus Avenue, Simawa, Lukosi, Sagamu, Ogun State
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4 rounded-lg shadow-md inset-shadow-xs backdrop-blur-md dark:bg-zinc-900/40 border-b border-gray-800 hover:-translate-y-1 h-24 w-full justify-start items-center space-x-2 px-2"
              variants={fadeInUp}
              custom={1.1}
            >
              {Icons.Phone({ className: "w-6 h-6  mt-1 text-indigo-400 " })}
              <div>
                <h4 className="text-md font-bold text-stone-100">Phone</h4>
                <p className="text-stone-300 ">+234 703 940 4909</p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4 rounded-lg shadow-md inset-shadow-xs backdrop-blur-md dark:bg-zinc-900/40 border-b border-gray-800 hover:-translate-y-1 h-24 w-full justify-start items-center space-x-2 px-2"
              variants={fadeInUp}
              custom={1.3}
            >
              {Icons.Mail({ className: "w-6 h-6 mt-1 text-indigo-400" })}
              <div>
                <h4 className="text-md font-bold text-stone-100">Email</h4>
                <p className="text-stone-300 ">hazaeldevs@gmail.com</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="w-full md:w-1/2 px-0 md:px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp}
            custom={1.5}
          >
            <Form />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
