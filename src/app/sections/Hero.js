"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scale = Math.max(0.85, 1 - scrollY * 0.00005);
  const translateX = Math.min(scrollY * 0.1, 100);
  const translateY = Math.min(scrollY * 0.1, 100);
  const frameSize = Math.min(scrollY * 0.001, 30);

  return (
    <section className="min-h-screen pt-[88px] relative overflow-hidden bg-black text-white flex items-center px-16 justify-between gap-12">
      <div
        className="absolute top-0 right-0 left-auto w-full h-full transition-all duration-500 ease-in-out"
        style={{
          zIndex: 1,
          overflow: "hidden",
          transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
          transformOrigin: "right center",
          border: `${frameSize}px solid rgba(255, 255, 255, 0.3)`,
          borderRadius: scrollY > 10 ? "2rem" : "0",
          boxShadow: scrollY > 10 ? "0 25px 70px rgba(0,0,0,0.6)" : "none",
          maxWidth: scrollY > 10 ? "520px" : "100%",
          transition: "all 0.5s ease-in-out",
        }}
      >
        <Image
          src="/assets/Main_img.jpg"
          alt="Hero Visual"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-[50%]" data-aos="fade-up">
        <h1 className="text-6xl font-thin leading-tight mb-8">
          Meet a<br /> Web Developer & Designer <br /> Game Developer <br /> A
          Freelancer
        </h1>
        <p className="text-sm text-gray-200 uppercase mb-10">
          Helping you build beautiful and scalable websites and games that stand
          out.
        </p>
        <button className="cta">
          <a href="#contact" className="flex">
            <span>Contact Me</span>
            <svg
              width="15px"
              height="10px"
              viewBox="0 0 13 10"
              className="ml-1 mt-2"
            >
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>
        </button>
      </div>
    </section>
  );
};

export default Hero;
