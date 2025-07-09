import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });

    // Optional: Close navbar when scrolling
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-800 shadow-md bg-black/30 backdrop-blur-md">
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img
            src="/Logo-Image.png"
            alt="logo"
            className="object-contain w-auto h-10"
          />
        </a>

        {/* Toggle Button for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-stone-50 md:hidden focus:outline-none"
          aria-label="Toggle navigation">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Nav Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto transition-all duration-300 ease-in-out`}
          data-aos="fade">
          <ul className="flex flex-col mt-4 space-y-2 font-medium text-md text-stone-50 md:mt-0 md:flex-row md:space-y-0 md:space-x-6">
            <li>
              <a href="#home" className="transition-colors hover:text-sky-500">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="transition-colors hover:text-sky-500">
                About
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="transition-colors hover:text-sky-500">
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="transition-colors hover:text-sky-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
