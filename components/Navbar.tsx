'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

export default function ClientHeader() {
    const [menuOpen, setMenuOpen] = useState(false);
    const headerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.set(headerRef.current, { autoAlpha: 0 });
        gsap.to(headerRef.current, {
            autoAlpha: 1,
            delay: 2.5,
            duration: 0.5,
        });
    });

    return (
        <>
            <header
                ref={headerRef}
                className="fixed top-4 left-1/2 -translate-x-1/2 z-[999] flex items-center justify-between py-3 px-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-full w-[90%] max-w-5xl text-white shadow-lg"
            >
                <Link href='/' className="text-xl font-bold tracking-wider hover:text-[var(--neon-green)] transition-colors duration-300 !cursor-pointer">
                    SHAIK
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wide">
                    {['About', 'Projects', 'Skills', 'Timeline', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="relative group hover:text-[var(--neon-green)] transition-colors duration-300 !cursor-pointer"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--neon-green)] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <a href="#contact" className="px-5 py-2 text-sm font-bold text-black bg-[var(--neon-green)] rounded-full hover:bg-white transition-colors duration-300 !cursor-pointer">
                        HIRE ME
                    </a>
                </div>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-white hover:text-[var(--neon-green)] transition-colors !cursor-pointer"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            {menuOpen && (
                <nav className="fixed top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl flex flex-col gap-4 backdrop-blur-md bg-black/80 border border-white/10 rounded-2xl p-6 md:hidden text-center z-[998]">
                    {['About', 'Projects', 'Skills', 'Timeline', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-lg font-medium hover:text-[var(--neon-green)] transition-colors duration-300 !cursor-pointer"
                            onClick={() => setMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            )}
        </>
    );
}
