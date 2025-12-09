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
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  const handleLinkClick = (id) => {
    if (id) setActiveSection(id);
    if (window.innerWidth < 768) setIsOpen(false);
  };

  const linkClasses = (id) =>
    `
      relative font-medium transition-colors duration-300
      ${activeSection === id ? "text-white font-semibold" : "text-slate-300"}
      hover:text-purple-200
      after:content-['']
      after:absolute after:left-0 after:-bottom-1
      after:h-[2px] after:w-full after:rounded-full
      after:bg-gradient-to-r
      after:from-purple-300/70 after:to-fuchsia-200/40
      ${
        activeSection === id
          ? "after:opacity-100"
          : "after:opacity-0 hover:after:opacity-100"
      }
    `;

  return (
    <motion.nav
      className="top-0 left-0 z-50 fixed bg-black/20 shadow-black/30 shadow-sm backdrop-blur-md border-white/10 border-b w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={fadeDown}
    >
      <div className="flex justify-between items-center mx-auto px-4 py-3 max-w-[90%]">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img
            src="/Logo-Image.png"
            alt="Logo"
            className="h-10 object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleLinkClick(link.id)}
              className={linkClasses(link.id)}
              aria-current={activeSection === link.id ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-4">
          {/* Theme Toggle */}
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />

            {/* Sun */}
            <svg
              className="fill-current w-6 h-6 text-yellow-400 swap-on"
              viewBox="0 0 24 24"
            >
              <path d="M5.64 17l-1.41 1.41L6.05 20l1.41-1.41zM11 3h2v2h-2zM3 11h2v2H3zM11 19h2v2h-2zM18.36 7l1.41-1.41L20 6.05l-1.41 1.41zM21 11h-2v2h2zM12 5a7 7 0 100 14 7 7 0 000-14z" />
            </svg>

            {/* Moon */}
            <svg
              className="fill-current w-6 h-6 text-slate-300 swap-off"
              viewBox="0 0 24 24"
            >
              <path d="M21.64 13A9 9 0 0112 3a9 9 0 000 18 9 9 0 009.64-8z" />
            </svg>
          </label>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            className="bg-white/5 hover:bg-white/10 backdrop-blur-sm p-2 rounded-full focus:outline-none ring-1 ring-white/10 focus-visible:ring-4 focus-visible:ring-purple-400/30 text-white transition"
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
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/40 shadow-black/40 shadow-lg backdrop-blur-md py-4 border-white/10 border-t">
          <ul className="flex flex-col gap-4 ml-16">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={linkClasses(link.id)}
                  aria-current={activeSection === link.id ? "page" : undefined}
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
