import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const closeMenuOnScroll = () => setIsOpen(false);
    window.addEventListener("scroll", closeMenuOnScroll);
    return () => window.removeEventListener("scroll", closeMenuOnScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const fadeDown = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  const handleLinkClick = () => {
    if (window.innerWidth < 768) setIsOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 z-50 w-full bg-black/10 backdrop-blur-md border-b border-white/5 shadow-md"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={fadeDown}
    >
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-[90%]">
        {/* --- Logo --- */}
        <a href="#home" className="flex items-center">
          <img
            src="/Logo-Image.png"
            alt="logo"
            className="h-10 object-contain"
          />
        </a>

        {/* --- Desktop Nav Links --- */}
        <div className="hidden md:flex items-center space-x-6 text-white font-medium">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={handleLinkClick}
              className={`hover:text-indigo-300 transition ${
                activeSection === link.id
                  ? "text-indigo-400 font-semibold border-b-2 border-indigo-400"
                  : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* --- Right Section (Theme Toggle + Mobile Menu Button) --- */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Light/Dark Toggle */}
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />
            {/* sun icon */}
            <svg
              className="swap-on fill-current w-6 h-6 text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64 17l-1.41 1.41L6.05 20l1.41-1.41zM11 3h2v2h-2zM3 11h2v2H3zM11 19h2v2h-2zM18.36 7l1.41-1.41L20 6.05l-1.41 1.41zM21 11h-2v2h2zM12 5a7 7 0 100 14 7 7 0 000-14z" />
            </svg>
            {/* moon icon */}
            <svg
              className="swap-off fill-current w-6 h-6 text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64 13A9 9 0 0112 3a9.09 9.09 0 00-1 .05A9 9 0 0012 21a9 9 0 009.64-8z" />
            </svg>
          </label>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white md:hidden focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
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
        </div>
      </div>

      {/* --- Mobile Dropdown Menu --- */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10 py-4">
          <ul className="flex flex-col ml-16 gap-4 text-white font-medium">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={handleLinkClick}
                  className={`hover:text-indigo-300 transition ${
                    activeSection === link.id
                      ? "text-indigo-400 font-semibold border-b-2 border-indigo-400"
                      : ""
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.nav>
  );
}

export default Navbar;
