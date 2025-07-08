import React from "react";
import { Icons } from "./Icons";

function About() {
  return (
    <div>
      <section
        className="pt-10 pb-8 text-gray-800 bg-inherit"
        data-aos="fade-up"
        data-aos-delay="800">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="mb-6 md:mb-0">
              <img
                src="/sample-image.jpg"
                alt="Sample hero image"
                className=" w-full max-w-md shadow-lg md:max-w-lg rounded-xl"
              />
            </div>
            <div>
              <h6 className="mb-2 font-semibold text-indigo-400 uppercase">
                My Bio
              </h6>
              <h3 className="mb-4 text-2xl font-bold md:text-3xl text-zinc-50">
                A Freelance UI Designer and Frontend Developer
              </h3>
              <p className="mb-6 leading-relaxed text-stone-100">
                My interest in user interfaces and the desire to create
                user-centric solutions sparked my interest in design. I have
                honed my skills in creating visually appealing designs that not
                only captivate, but also improve user interactions. <br />
                <br />
                Consequently, as a frontend developer, I bring these designs to
                life by weaving the fabric of functionality and aesthetics
                together. I believe in the power of code to turn abstract
                concepts into tangible, interactive experiences that leave an
                impression.
              </p>
              <h5 className="text-lg font-semibold text-zinc-50">
                HazaelDevs | Audi Hazael
              </h5>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 mt-11">
            <div className="p-4 rounded-xl w-sm  shadow-md inset-shadow-xs backdrop-blur-sm bg-white/10 border border-gray-800 hover:-translate-y-1 ">
              <div className="my-2">
                {Icons.CodeIcon({
                  className: "text-indigo-400",
                })}
              </div>
              <h2 className="mb-2 font-semibold text-zinc-50 uppercase">
                Clean Code
              </h2>
              <p className="mb-6 leading-relaxed text-stone-100">
                Writing clear, efficient, and scalable code with proper
                documentation, following established best practices.
              </p>
            </div>
            <div className=" p-4 rounded-xl w-sm shadow-md inset-shadow-xs backdrop-blur-sm bg-white/10 border border-gray-800 hover:-translate-y-1 ">
              <div className="my-2">
                {Icons.LayoutDashboard({
                  className: "text-indigo-400",
                })}
              </div>
              <h2 className="mb-2 font-semibold text-zinc-50 uppercase">
                UI/UX Focus
              </h2>
              <p className="mb-6 leading-relaxed text-stone-100">
                Designing user-friendly and aesthetically pleasing interfaces
                that deliver exceptional user experiences.
              </p>
            </div>
            <div className=" p-4 rounded-xl w-sm shadow-md inset-shadow-xs backdrop-blur-sm bg-white/10 border border-gray-800 hover:-translate-y-1 ">
              <div className="my-2">
                {Icons.Zap({
                  className: "text-indigo-400",
                })}
              </div>
              <h2 className="mb-2 font-semibold text-zinc-50 uppercase">
                Performance
              </h2>
              <p className="mb-6 leading-relaxed text-stone-100">
                Optimizing apps for fast load times, accessibility compliance,
                and strong search engine presence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
