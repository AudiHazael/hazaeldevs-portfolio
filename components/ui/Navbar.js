"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ─── NAV LINKS ────────────────────────────────────────────────────────────────
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Systems", href: "/systems" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// ─── ANIMATION VARIANTS ──────────────────────────────────────────────────────
const fadeDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const mobileMenu = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.25, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setIsOpen(false);
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // A link is active when its route exactly matches the current pathname.
  // "/#about" is treated as "/" so it stays active only on home.
  const isActive = (href) => {
    const route = href.split("#")[0] || "/";
    return pathname === route;
  };

  const linkClasses = (href) => `
    relative font-medium transition-colors duration-300 text-sm
    ${isActive(href) ? "text-purple-200 font-semibold" : "text-slate-300"}
    hover:text-purple-200
    after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-full after:rounded-full
    after:bg-gradient-to-r after:from-purple-300/70 after:to-fuchsia-200/40
    ${isActive(href) ? "after:opacity-100" : "after:opacity-0 hover:after:opacity-100"}
    after:transition-opacity after:duration-300
  `;

  return (
    <motion.nav
      className={`top-0 left-0 z-50 fixed w-full border-b transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-lg shadow-lg shadow-black/30 border-white/10"
          : "bg-black/20 backdrop-blur-md shadow-sm shadow-black/20 border-white/5"
      }`}
      initial="hidden"
      animate="visible"
      variants={fadeDown}
    >
      <div className="flex justify-between items-center mx-auto px-4 py-3 max-w-[90%]">
        <Link href="/" aria-label="Haza'ElDevs home">
          <Image
            src="/logo.png"
            alt="HazaelDevs logo"
            width={100}
            height={40}
            priority
            className="h-6 sm:h-7 md:h-8 lg:h-10 w-auto object-contain"
          />
        </Link>

        {/* ── Desktop nav ── */}
        <div className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={linkClasses(link.href)}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* ── Desktop CTA ── */}
        <a
          href={`https://wa.me/2347039404909?text=${encodeURIComponent(
            "Hi Hazael, I'd like to discuss a project.",
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold bg-linear-to-r from-purple-500 to-fuchsia-500 hover:opacity-90 transition text-white"
        >
          Let&apos;s talk
        </a>

        {/* ── Mobile controls ── */}
        <div className="md:hidden flex items-center gap-3">
          <label className="swap swap-rotate" aria-label="Toggle theme">
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />
            <svg
              className="fill-current w-5 h-5 text-yellow-400 swap-on"
              viewBox="0 0 24 24"
            >
              <path d="M5.64 17l-1.41 1.41L6.05 20l1.41-1.41zM11 3h2v2h-2zM3 11h2v2H3zM11 19h2v2h-2zM18.36 7l1.41-1.41L20 6.05l-1.41 1.41zM21 11h-2v2h2zM12 5a7 7 0 100 14 7 7 0 000-14z" />
            </svg>
            <svg
              className="fill-current w-5 h-5 text-slate-300 swap-off"
              viewBox="0 0 24 24"
            >
              <path d="M21.64 13A9 9 0 0112 3a9 9 0 000 18 9 9 0 009.64-8z" />
            </svg>
          </label>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            className="bg-white/5 hover:bg-white/10 backdrop-blur-sm p-2 rounded-full ring-1 ring-white/10 focus-visible:ring-4 focus-visible:ring-purple-400/30 text-white transition"
          >
            <svg
              className="w-5 h-5"
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

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobileMenu}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden overflow-hidden bg-black/50 backdrop-blur-md border-t border-white/10"
          >
            <ul className="flex flex-col gap-5 px-8 py-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={linkClasses(link.href)}
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`https://wa.me/2347039404909?text=${encodeURIComponent(
                    "Hi Hazael, I'd like to discuss a project.",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold bg-linear-to-r from-purple-500 to-fuchsia-500 text-white"
                >
                  Let&apos;s talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
