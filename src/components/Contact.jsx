import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Form from "./Form";
import { Icons } from "../components/Icons";

function Contact() {
  return (
    <section className="py-20 text-gray-800">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex flex-col items-start gap-4 md:flex-row">
          {/* Contact Details */}
          <div className="space-y-6 md:w-1/2 mt-4">
            <h6
              className="mb-2 font-semibold text-indigo-400 uppercase"
              data-aos="fade-in"
              data-aos-delay="300">
              Contact Me
            </h6>
            <h4
              className=" text-2xl text-zinc-50 font-bold md:text-3xl"
              data-aos="fade-in"
              data-aos-delay="600">
              Reach Out - Let's Create Together
            </h4>
            <p
              className="text-stone-200"
              data-aos="fade-in"
              data-aos-delay="900">
              Do you want to transform your ideas into memorable experiences? I
              am here to listen, collaborate, and help you realize your vision.
              Reach out today and let's embark on a creative and successful
              journey together.
            </p>

            <div
              className="flex gap-4 rounded-xl shadow-md inset-shadow-xs backdrop-blur-sm bg-white/10 border border-gray-800 hover:-translate-y-1 h-24 w-full justify-start items-center"
              data-aos="fade-in"
              data-aos-delay="600">
              {Icons.Map({ className: "w-8 h-8 ml-4 mt-1 text-indigo-400 " })}
              <div>
                <h4 className="text-xl font-bold text-stone-100">Address</h4>
                <p className="text-stone-300">
                  Plot 15, Jesus Avenue, Simawa, Lukosi, <br />
                  Sagamu, Ogun State
                </p>
              </div>
            </div>

            <div
              className="flex gap-4 rounded-xl shadow-md inset-shadow-xs backdrop-blur-sm bg-white/10 border border-gray-800 hover:-translate-y-1 h-24 w-full justify-start items-center"
              data-aos="fade-in"
              data-aos-delay="900">
              {Icons.Phone({ className: "w-8 h-8 ml-4 mt-1 text-indigo-400 " })}
              <div>
                <h4 className="text-xl font-bold text-stone-100">Phone</h4>
                <p className="text-stone-300 ">+234 703 940 4909</p>
              </div>
            </div>

            <div
              className="flex gap-4 rounded-xl shadow-md inset-shadow-xs backdrop-blur-sm bg-white/10 border border-gray-800 hover:-translate-y-1 h-24 w-full justify-start items-center"
              data-aos="fade-in"
              data-aos-delay="1200">
              {Icons.Mail({ className: "w-8 h-8 ml-4 mt-1 text-indigo-400" })}
              <div>
                <h4 className="text-xl font-bold text-stone-100">Email</h4>
                <p className="text-stone-300 ">hazaeldevs@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="w-full md:w-1/2 px-0 md:px-4"
            data-aos="fade-in"
            data-aos-delay="1500"
            data-aos-duration="800">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
