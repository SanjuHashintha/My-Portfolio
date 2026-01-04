// src/components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Backdrop - your gradient */}
      {isOpen && (
        <div
          style={{
            background: "linear-gradient(180deg, #280120, #450063)",
            opacity: 0.92,
          }}
          className="fixed inset-0 z-50 lg:hidden"
          onClick={closeMenu}
        />
      )}

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 ${
          scrolled ? "bg-black/30 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        {/* Desktop */}
        <div className="hidden lg:flex w-full">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              className="flex-1"
              whileHover={{ y: -2 }}
            >
              <Link
                href={item.href}
                onClick={closeMenu}
                className="flex items-center justify-center h-16 text-white hover:text-cyan-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-cyan-400 -translate-x-1/2 group-hover:w-10 group-hover:left-0 group-hover:translate-x-0 transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ✅ Hamburger: ONLY when menu is CLOSED */}
        {!isOpen && (
          <div className="lg:hidden container mx-auto px-4 py-4 flex justify-end">
            <button
              onClick={() => setIsOpen(true)}
              className="text-white z-50 focus:outline-none"
              aria-label="Open menu"
            >
              <div className="w-6 h-0.5 bg-white mb-1.5" />
              <div className="w-6 h-0.5 bg-white mb-1.5" />
              <div className="w-6 h-0.5 bg-white" />
            </button>
          </div>
        )}

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-4/5 max-w-xs z-50 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-full p-8 flex flex-col justify-start pt-16">
            <button
              onClick={closeMenu}
              className="self-end text-white text-3xl mb-12 opacity-80 hover:opacity-100"
              aria-label="Close menu"
            >
              &times;
            </button>
            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="text-2xl text-white hover:text-cyan-300 font-medium py-2 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
