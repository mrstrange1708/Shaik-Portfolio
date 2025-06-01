'use client';
import React, { useState } from 'react';
import Link from 'next/link';
export default function ClientHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-[999] flex items-center py-6 px-8 backdrop-blur-sm bg-black/5 text-white font-medium">
        <Link href='/' className="text-2xl font-light transition-all duration-200 hover:font-semibold cursor-pointer">
          SHAIK
        </Link>

        <nav className="hidden md:flex flex-1 justify-center gap-10 text-xl font-light uppercase tracking-wider">
          <a href="#about" className="transition-all duration-200 hover:font-semibold">
            About
          </a>
          <a href="#projects" className="transition-all duration-200 hover:font-semibold">
            Projects
          </a>
          <a href="#skills" className="transition-all duration-200 hover:font-semibold">
            Skills
          </a>
          <a href="#timeline" className="transition-all duration-200 hover:font-semibold">
            Timeline
          </a>
          <a href="#contact" className="transition-all duration-200 hover:font-semibold">
            Contact
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden ml-auto focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </header>

      {menuOpen && (
        <nav className="sticky top-[80px] w-full flex flex-col gap-4 backdrop-blur-md bg-black/30 p-6 md:hidden text-xl font-light uppercase tracking-wider z-[998]">
          <a to="#about" className="transition-all duration-200 hover:font-semibold">
            About
          </a>
          <a to="/#projects" className="transition-all duration-200 hover:font-semibold">
            Projects
          </a>
          <a to="#skills" className="transition-all duration-200 hover:font-semibold">
            Skills
          </a>
          <a href="#timeline" className="transition-all duration-200 hover:font-semibold">
            Timeline
          </a>
          <a href="#contact" className="transition-all duration-200 hover:font-semibold">
            Contact
          </a>
        </nav>
      )}
    </>
  );
}