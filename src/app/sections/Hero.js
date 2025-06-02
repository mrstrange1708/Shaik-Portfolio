"use client";
import React, { useEffect, useState , useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useScroll , useTransform , motion} from "framer-motion";


const Hero = () => {
  const targetref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetref,
    offset: ["start end", "end start"],
  });

  const position = useTransform(scrollYProgress, [0, 0.9,0.91],["fixed", "fixed", "sticky"]);
  const width = useTransform(scrollYProgress, [0, 0.9], ["130%", "30%"]);
  const x = useTransform(scrollYProgress, [0,0.35, 0.9], [0,"10%", "-120%"]);



  return (
    <section ref={targetref}  className="relative h-[300vh] bg-black text-white overflow-hidden">
      <motion.div style={{position}}  className=" top-0 left-0 w-full h-screen z-10 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-full h-screen z-0"
          style={{ width  }}
          
        >
          <Image
            src="/Assets/Main_img.jpg"
            alt="Hero Visual"
            className="object-cover "
            fill
            priority
          />
        </motion.div>
        <motion.div
         className="relative z-10 top-60 left-10 max-w-[50%] pointer-events-auto" data-aos="fade-up">
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
              <svg width="15px" height="10px" viewBox="0 0 13 10" className="ml-1 mt-2">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </a>
          </button>
        </motion.div>
      </motion.div>

      <div className="relative z-0 h-[300vh]"></div>
    </section>
  );
};

export default Hero;
