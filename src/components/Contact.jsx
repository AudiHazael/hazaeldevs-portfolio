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
    <section className="bg-transparent py-20 text-gray-800" id="contact">
      <div className="mx-auto px-4 md:max-w-[75%]">
        <div className="flex md:flex-row flex-col justify-center items-end gap-4">
          {/* Contact Details */}
          <motion.div
            className="space-y-6 mt-4 md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp}
            custom={0.2}
          >
            <motion.h6
              className="mb-2 font-semibold text-purple-300/50 uppercase"
              variants={fadeInUp}
              custom={0.3}
            >
              Start a project
            </motion.h6>

            <motion.h4
              className="font-bold text-zinc-50 text-2xl md:text-3xl"
              variants={fadeInUp}
              custom={0.5}
            >
              Let’s Build a Website That Brings You Clients
            </motion.h4>

            <motion.p
              className="text-md text-stone-200"
              variants={fadeInUp}
              custom={0.7}
            >
              If you need a fast, modern website that makes your business look
              credible and converts visitors into real enquiries, you're in the
              right place. <br /> Tell me what you’re trying to achieve and I’ll
              recommend the simplest, most effective setup to get you there.
            </motion.p>

            <motion.div
              className="inset-shadow-xs flex justify-start items-center gap-4 space-x-2 bg-zinc-900/40 shadow-md backdrop-blur-md px-2 border border-gray-800/75 rounded-lg w-full h-24 hover:-translate-y-1"
              variants={fadeInUp}
              custom={0.9}
            >
              {Icons.Map({ className: "w-6 h-6 mt-1 text-purple-300/50 " })}
              <div>
                <h4 className="font-bold text-md text-stone-100">Address</h4>
                <p className="text-stone-300">
                  Remote — working with clients worldwide
                </p>
              </div>
            </motion.div>

            <motion.div
              className="inset-shadow-xs flex justify-start items-center gap-4 space-x-2 bg-zinc-900/40 shadow-md backdrop-blur-md px-2 border border-gray-800/75 rounded-lg w-full h-24 hover:-translate-y-1"
              variants={fadeInUp}
              custom={1.1}
            >
              {Icons.Phone({ className: "w-6 h-6  mt-1 text-purple-300/50 " })}
              <div>
                <h4 className="font-bold text-md text-stone-100">WhatsApp</h4>
                <p className="text-stone-300">
                  Chat-first. Calls by appointment.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="inset-shadow-xs flex justify-start items-center gap-4 space-x-2 bg-zinc-900/40 shadow-md backdrop-blur-md px-2 border border-gray-800/75 rounded-lg w-full h-24 hover:-translate-y-1"
              variants={fadeInUp}
              custom={1.3}
            >
              {Icons.Mail({ className: "w-6 h-6 mt-1 text-purple-300/50" })}
              <div>
                <h4 className="font-bold text-md text-stone-100">Email</h4>
                <p className="text-stone-300">hazaeldevs@gmail.com</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="px-0 md:px-4 w-full md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp}
            custom={1.5}
          >
            <p className="mb-4 text-gray-400 text-sm">
              Typical response time: within 24 hours. Serious enquiries only.
            </p>

            <Form />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
