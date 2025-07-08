import React from "react";
import { Icons } from "../components/Icons";
import Socials from "./Socials";

function Footer() {
  return (
    <footer className="py-10 text-white bg-gray-900">
      <div className="container px-4 mx-auto">
        {/* Social Icons */}
        <Socials />

        {/* Logo & Description (Centered) */}
        <div className="flex flex-col items-center max-w-xl mx-auto text-center gap-4 mb-10">
          <img src="/Logo-Image.png" alt="HazaElDevs Logo" className="w-32" />
          <p className="text-gray-300">
            Crafting seamless user experiences with attention to detail,
            functionality, and style. Let’s build something meaningful and
            memorable together.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-sm text-center text-gray-500">
          <p>
            © 2025 HazaElDevs | Designed by{" "}
            <a
              href="https://wa.link/8k0f7s"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline">
              Hazael Audi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
