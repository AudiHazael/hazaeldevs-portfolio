import React from "react";
import { Icons } from "./Icons";

function About() {
  return (
    <section className="pt-10 pb-8 text-gray-800 bg-inherit">
      <div className="max-w-6xl px-4 mx-auto">
        {/* Top grid: image + bio */}
        <div className="grid items-center gap-8 md:grid-cols-2 overflow-hidden">
          <div>
            <img
              src="/sample-image.jpg"
              alt="Sample hero image"
              className="w-full max-w-xs mx-auto shadow-lg rounded-xl object-contain"
              data-aos="fade-in"
              data-aos-delay="500"
            />
          </div>
          <div className="text-center md:text-left">
            <h6
              className="mb-2 font-semibold text-indigo-400 uppercase"
              data-aos="fade-in"
              data-aos-delay="800">
              My Bio
            </h6>
            <h3
              className="mb-4 text-2xl font-bold md:text-3xl text-zinc-50"
              data-aos="fade-in"
              data-aos-delay="1000">
              A Freelance UI Designer and Frontend Developer
            </h3>
            <p
              className="mb-6 leading-relaxed text-stone-100 break-words"
              data-aos="fade-in"
              data-aos-delay="1200">
              My interest in user interfaces and the desire to create user-centric solutions sparked my interest in design. I have honed my skills in creating visually appealing designs that not only captivate, but also improve user interactions.
              <br /><br />
              Consequently, as a frontend developer, I bring these designs to life by weaving the fabric of functionality and aesthetics together. I believe in the power of code to turn abstract concepts into tangible, interactive experiences that leave an impression.
            </p>
            <h5
              className="text-lg font-semibold text-zinc-50"
              data-aos="fade-in"
              data-aos-delay="1500">
              HazaelDevs | Audi Hazael
            </h5>
          </div>
        </div>

        {/* Bottom grid: features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          <div className="p-4 rounded-xl shadow-md inset-shadow-xs backdrop-blur-sm bg-white/10 border border-gray-800 hover:-translate-y-1 transition">
            <div className="my-2">
              {Icons.CodeIcon({ className: "text-indigo-400" })}
            </div>
            <h2
              className="mb-2 font-semibold text-zinc-50 uppercase"
              data-aos="fade-in"
              data-aos-delay="1000">
              Clean Code
            </h2>
            <p className="leading-relaxed text-stone-100">
              Writing clear, efficient, and scalable code with proper documentation, following established best practices.
            </p>
          </div>

          <div
            className="p-4 rounded-xl shadow-md inset-shadow-xs backdrop-blur-sm bg-white/10 border border-gray-800 hover:-translate-y-1 transition"
            data-aos="fade-in"
            data-aos-delay="1000">
            <div className="my-2">
              {Icons.LayoutDashboard({ className: "text-indigo-400" })}
            </div>
            <h2 className="mb-2 font-semibold text-zinc-50 uppercase">
              UI/UX Focus
            </h2>
            <p className="leading-relaxed text-stone-100">
              Designing user-friendly and aesthetically pleasing interfaces that deliver exceptional user experiences.
            </p>
          </div>

          <div
            className="p-4 rounded-xl shadow-md inset-shadow-xs backdrop-blur-sm bg-white/10 border border-gray-800 hover:-translate-y-1 transition"
            data-aos="fade-in"
            data-aos-delay="1500">
            <div className="my-2">
              {Icons.Zap({ className: "text-indigo-400" })}
            </div>
            <h2 className="mb-2 font-semibold text-zinc-50 uppercase">
              Performance
            </h2>
            <p className="leading-relaxed text-stone-100">
              Optimizing apps for fast load times, accessibility compliance, and strong search engine presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
