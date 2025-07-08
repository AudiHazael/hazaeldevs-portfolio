import React from "react";
import { Icons } from "./Icons";

function Socials() {
  return (
    <div>
      <div className="flex justify-center gap-6 mb-8">
        <a href="https://github.com/AudiHazael/" aria-label="GitHub">
          {Icons.Github({
            className: "w-8 h-8 text-stone-300 hover:text-white transition",
          })}
        </a>
        <a href="#" aria-label="LinkedIn">
          {Icons.LinkedIn({
            className: "w-8 h-8 text-stone-300 hover:text-white transition",
          })}
        </a>
        <a href="mailto:youremail@example.com" aria-label="Email">
          {Icons.Mail({
            className: "w-8 h-8 text-stone-300 hover:text-white transition",
          })}
        </a>
        <a
          href="https://www.facebook.com/share/16YLCxt6fX/"
          aria-label="Facebook">
          {Icons.Facebook({
            className: "w-8 h-8 text-stone-300 hover:text-white transition",
          })}
        </a>
        <a
          href="https://www.instagram.com/hd_webdesigner?igsh=NjNjYm9hY2s2d3cw"
          aria-label="Instagram">
          {Icons.Instagram({
            className: "w-8 h-8 text-stone-300 hover:text-white transition",
          })}
        </a>
      </div>
    </div>
  );
}

export default Socials;
