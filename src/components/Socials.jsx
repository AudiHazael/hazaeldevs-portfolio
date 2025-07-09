import React from "react";
import { Icons } from "./Icons";

function Socials() {
  return (
    <div>
      <div className="flex justify-center gap-6 mb-8">
        <a
          href="https://github.com/AudiHazael/"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-in"
          data-aos-delay="500">
          {Icons.Github({
            className: "w-8 h-8 text-stone-300 hover:text-white transition",
          })}
        </a>
        <a
          href="#"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-in"
          data-aos-delay="1000">
          {Icons.LinkedIn({
            className: "w-8 h-8 text-stone-300 hover:text-white transition",
          })}
        </a>
        <a
          href="mailto:youremail@example.com"
          aria-label="Email"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-in"
          data-aos-delay="1500">
          {Icons.Mail({
            className: "w-8 h-8 text-stone-300 hover:text-white transition",
          })}
        </a>
        <a
          href="https://www.facebook.com/share/16YLCxt6fX/"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-in"
          data-aos-delay="2000">
          {Icons.Facebook({
            className: "w-8 h-8 text-stone-300 hover:text-white transition",
          })}
        </a>
        <a
          href="https://www.instagram.com/hd_webdesigner?igsh=NjNjYm9hY2s2d3cw"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-in"
          data-aos-delay="2500">
          {Icons.Instagram({
            className: "w-8 h-8 text-stone-300 hover:text-white transition",
          })}
        </a>
      </div>
    </div>
  );
}

export default Socials;
