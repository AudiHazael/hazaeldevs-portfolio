import React from "react";
import { Icons } from "./Icons";

function About() {
  return (
    <section className="py-20 text-gray-800 bg-inherit">
      <div className="max-w-6xl px-4 mx-auto">
        {/* Top grid: image + bio */}
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 overflow-hidden">
          <div className="md:col-span-4">
            <img
              src="/Hazael.png"
              alt="Sample hero image"
              className="w-full max-w-full sm:max-w-xs mx-auto shadow-lg rounded-sm object-contain"
              data-aos="fade-in"
              data-aos-delay="300"
            />
          </div>

          <div className="md:col-span-8 md:text-left">
            <h6
              className="mb-2 font-semibold text-indigo-400 uppercase"
              data-aos="fade-in"
              data-aos-delay="600">
              My Bio
            </h6>
            <h3
              className="mb-4 text-xl font-bold md:text-3xl text-zinc-50"
              data-aos="fade-in"
              data-aos-delay="900">
              A Freelance UI Designer and Frontend Developer
            </h3>
            <p
              className="mb-6 leading-relaxed text-stone-100 break-words text-md"
              data-aos="fade-in"
              data-aos-delay="1200">
              My interest in user interfaces and the desire to create
              user-centric solutions sparked my interest in design. I have honed
              my skills in creating visually appealing designs that not only
              captivate, but also improve user interactions.
              <br />
              <br />
              Consequently, as a frontend developer, I bring these designs to
              life by weaving the fabric of functionality and aesthetics
              together. I believe in the power of code to turn abstract concepts
              into tangible, interactive experiences that leave an impression.
            </p>
            <h5
              className="text-lg font-semibold text-zinc-50"
              data-aos="fade-in"
              data-aos-delay="300">
              HazaelDevs | Audi Hazael
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
