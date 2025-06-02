"use client"; 

import Link from "next/link";
import { useState } from "react";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
export default function Card({ title, subtitle, imgSrc, techStack, url }) {
  const [transformStyle, setTransformStyle] = useState("");

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setTransformStyle(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const resetTransform = () => {
    setTransformStyle("");
  };
  const defaultOptions = {
    reverse:        false,  
    max:            35,     
    perspective:    1000,
    scale:          1.1,
    speed:          1000,   
    transition:     true,
    axis:           null,
    reset:          true,    
    easing:         "cubic-bezier(.03,.98,.52,.99)",
  }

  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.2}
      glareColor="#ffffff"
      glarePosition="all"
      scale={1.02}
      className="rounded-xl overflow-hidden shadow-xl bg-[#111] text-white transition-all duration-300 ease-in-out"
    >
      <div className="flex flex-col h-full">
        {imgSrc && (
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-80 object-cover"
          />
        )}

        <div className="flex flex-col justify-between flex-1 p-5">
          <div>
            <h3 className="text-2xl font-semibold mb-1">{title}</h3>
            {subtitle && <p className="text-sm text-gray-400 mb-4">{subtitle}</p>}

            {techStack && (
              <div className="flex flex-wrap gap-2 mb-4">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="mt-auto">
            <Link
              href={url}
              className="inline-block bg-gray-700 hover:bg-gray-600 transition px-4 py-2 text-xs rounded-md font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              WEBSITE
            </Link>
          </div>
        </div>
      </div>
    </Tilt>
  );
}