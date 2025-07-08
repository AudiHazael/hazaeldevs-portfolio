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
      <div className="flex flex-wrap items-center justify-center max-w-6xl gap-8 px-4 mx-auto">
        <div data-aos="fade-right">
          <FaFigma
            fontSize="3.25rem"
            color="#f24e1e"
            className="transition-transform hover:scale-110"
          />
        </div>
        <div data-aos="fade-right" data-aos-delay="500">
          <FaReact
            fontSize="3.25rem"
            color="#61dafb"
            className="transition-transform hover:scale-110"
          />
        </div>
        <div data-aos="fade-down" data-aos-delay="700">
          <FaSass
            fontSize="3.25rem"
            color="#cd6799"
            className="transition-transform hover:scale-110"
          />
        </div>
        <div data-aos="fade-left" data-aos-delay="900">
          <FaBootstrap
            fontSize="3.25rem"
            color="#7952b3"
            className="transition-transform hover:scale-110"
          />
        </div>
        <div data-aos="fade-left" data-aos-delay="1000">
          <FaGithub
            fontSize="3.25rem"
            className="text-white transition-transform hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
}

export default Tools;
