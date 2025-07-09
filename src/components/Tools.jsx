import React from "react";
import {
  FaFigma,
  FaReact,
  FaSass,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";

function Tools() {
  return (
    <section className="py-10 text-gray-800">
      <div className="flex flex-wrap items-center justify-center max-w-6xl gap-4 px-2 mx-auto">
        <div data-aos="fade-right">
          <FaFigma
            fontSize="2rem"
            color="#f24e1e"
            className="transition-transform hover:scale-110"
          />
        </div>
        <div data-aos="fade-right" data-aos-delay="300">
          <FaReact
            fontSize="2rem"
            color="#61dafb"
            className="transition-transform hover:scale-110"
          />
        </div>
        <div data-aos="fade-down" data-aos-delay="600">
          <FaSass
            fontSize="2rem"
            color="#cd6799"
            className="transition-transform hover:scale-110"
          />
        </div>
        <div data-aos="fade-left" data-aos-delay="900">
          <FaBootstrap
            fontSize="2rem"
            color="#7952b3"
            className="transition-transform hover:scale-110"
          />
        </div>
        <div data-aos="fade-left" data-aos-delay="1200">
          <FaGithub
            fontSize="2rem"
            className="text-white transition-transform hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
}

export default Tools;
