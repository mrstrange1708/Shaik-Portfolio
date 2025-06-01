"use client";
import React, { useRef , useEffect} from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs , FaPython} from "react-icons/fa6";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap h-[12rem]">
      <motion.div className="flex text-9xl gap-10" style={{ x }}>
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex gap-10">
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

const skills = () => {
  useEffect(() => {
    const smoothScrollHandler = (e) => {
      const anchor = e.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#")) {
        const section = document.getElementById(href.slice(1));
        if (section) {
          e.preventDefault();
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", smoothScrollHandler);
    return () => document.removeEventListener("click", smoothScrollHandler);
  }, []);
  return (
    <div
    id="skills"
     className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-8 text-center">
      <h1 className="text-center text-5xl mb-70">Skills</h1>
      <ParallaxText baseVelocity={-2}>
        <FaHtml5 className="text-orange-600 text-9xl" />
        <FaCss3Alt className="text-blue-600 text-9xl" />
        <FaJs className="text-yellow-400 text-9xl" />
        <FaReact className="text-cyan-400 text-9xl" />
        <SiTailwindcss className="text-sky-400 text-9xl" />
        <FaNodeJs className="text-green-600 text-9xl" />
        <SiExpress className="text-white text-9xl" />
        <SiMongodb className="text-green-500 text-9xl" />
        <SiNextdotjs className="text-white text-9xl" />
        <SiTypescript className="text-blue-500 text-9xl" />
        <FaPython className="text-blue-900 text-9xl" />
      </ParallaxText>
    </div>
  );
};

export default skills;
