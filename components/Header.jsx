
"use client";

import { useState } from "react";

const navLinks = [
  "About",
  "Services",
  "Case Studies",
  "Career",
  "Blog",
  "xSchool",
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full px-6 py-6 md:px-8 lg:px-10">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-tight text-white">
          wemark
        </a>

        {/* Desktop menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-lg text-white transition-opacity hover:opacity-60"
            >
              {link}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden text-lg text-white underline underline-offset-4 md:block"
        >
          Let's Talk
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-lg text-white md:hidden"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "Menu"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="absolute left-0 top-full w-full border-t border-white/10 bg-[#141419]/50 px-6 py-8 shadow-lg backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="text-lg text-white transition-opacity hover:opacity-60"
              >
                {link}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-lg text-white underline underline-offset-4"
            >
              Let's Talk
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
