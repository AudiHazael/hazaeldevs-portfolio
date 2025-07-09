import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const closeMenuOnScroll = () => setIsOpen(false);
    window.addEventListener("scroll", closeMenuOnScroll);
    return () => window.removeEventListener("scroll", closeMenuOnScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black/30 backdrop-blur-md border-b border-gray-800 shadow-md">
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img
            src="/Logo-Image.png"
            alt="logo"
            className="h-10 object-contain"
          />
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden focus:outline-none"
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

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-black/90 px-6 py-4 md:static md:bg-transparent md:flex md:items-center md:space-x-6 md:w-auto transition-all duration-300 ease-in-out`}>
          <ul className="flex flex-col px-4 py-4 md:p-0 md:flex-row md:space-y-0 space-y-3 text-white font-medium gap-4">
            <li>
              <a href="#home" className="hover:text-indigo-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-indigo-300">
                About
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-indigo-300">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-indigo-300">
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
