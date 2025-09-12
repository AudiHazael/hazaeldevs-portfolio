import React, { useState, useEffect } from "react";
import { Icons } from "./Icons";
import Socials from "./Socials";

const slides = [
  {
    heading: "Hi, I am Hazael Audi",
    subheading: "A UI Designer and Front-End Developer",
    buttonText: "Contact Me",
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
      id="home"
      className="flex items-center w-full min-h-screen px-4 md:px-20 text-white bg-gradient-to-br from-zinc-950 via-gray-900 to-black overflow-hidden"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 items-center w-full max-w-7xl mx-auto gap-8">
        {/* Text */}
        <div className="flex flex-col justify-center items-center space-y-6 md:col-span-12 text-center overflow-hidden w-full">
          <h1
            className="text-4xl text-indigo-400 font-ob"
            data-aos="fade-in"
            data-aos-delay="500"
          >
            {heading}
          </h1>
          <h2
            className="text-2xl font-bold md:text-5xl"
            data-aos="fade-in"
            data-aos-delay="1000"
          >
            {subheading}
          </h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-7">
            <Socials />
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 font-semibold text-white transition bg-gradient-to-r from-zinc-950 via-indigo-950 to-zinc-950 rounded-md hover:brightness-110"
              data-aos="fade-in"
              data-aos-delay="1500"
            >
              {buttonText}
            </a>
          </div>
        </div>

        {/* Image Column */}
        {/* <div className="hidden md:flex justify-center mt-6 md:mt-0">
          <img
            src="/sample-image.jpg"
            alt="Sample hero image"
            className="w-[90%] max-w-md md:max-w-lg rounded-xl shadow-lg"
            data-aos="fade-in"
            data-aos-delay="2000"
          />
        </div> */}
      </div>
    </section>
  );
}

export default Hero;
