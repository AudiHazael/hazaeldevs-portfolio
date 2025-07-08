import React, { useState, useEffect } from "react";
import { Icons } from "./Icons";
import Socials from "./Socials";

const slides = [
  {
    heading: "Hi, I am Hazael Audi",
    subheading: "A UI Designer and Front-End Developer",
    buttonText: "View My Work",
    link: "https://wa.me/2347039404909?text=Hello%20HazaelDevs!%20I'm%20interested%20in%20your%20services.",
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  const { heading, subheading, buttonText, link } = slides[current];

  return (
    <section
      className="flex items-center w-full min-h-screen text-white bg-gradient-to-br from-zinc-950 via-gray-900 to-black md:px-20"
      data-aos="fade-up">
      <div className="grid items-center w-full mx-auto md:grid-cols-2 max-w-7xl">
        {/* Text Column */}
        <div className="space-y-6 text-center md:text-left animate-fade-in">
          <h1 className="text-4xl text-indigo-400 font font-ob">{heading}</h1>
          <h2 className="text-2xl font-bold md:text-5xl">{subheading}</h2>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 text-white font-semibold transition bg-gradient-to-r from-zinc-950 to-sky-300 rounded-md hover:bg-sky-300">
              {buttonText}
            </a>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-7">
            <Socials />
          </div>
        </div>

        {/* Image Column */}
        <div className="flex justify-center mt-6 md:mt-0">
          <img
            src="/sample-image.jpg"
            alt="Sample hero image"
            className=" h-1/3 max-w-md shadow-lg md:max-w-lg rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
