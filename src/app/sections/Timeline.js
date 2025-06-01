'use client';
import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Timeline = () => {
  const barRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800 });

    const handleScroll = () => {
      if (!barRef.current) return;
      const elementTop = barRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const elementHeight = barRef.current.scrollHeight;
      const scrollY = window.scrollY;

      const progress = Math.min(Math.max((windowHeight - elementTop) / elementHeight, 0), 1);
      barRef.current.style.height = `${progress * 100}%`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="timeline" className="relative py-20 bg-black text-white scroll-mt-[80px]">
      <div className="relative max-w-4xl mx-auto">
        <h1 className="font-normal text-center text-4xl mb-16">Timeline</h1>

        <div className="relative border-l-4 border-gray-600 pl-10 ml-6">
          <div ref={barRef} className="absolute left-[6px] top-0 w-1 bg-blue-500 transition-all duration-500 ease-out z-0" />
          {[{
            year: '2025',
            content: "Embarked on a transformative year of learning and growth. Mastered the MERN Stack — diving deep into MongoDB, Express.js, React, and Node.js — while also exploring the world of game development. Applied these skills to real-world projects by launching my freelancing career, working with diverse clients and building production-ready web and game applications."
          },
          {
            year: '2024',
            content: "Marked a major milestone in my academic journey — completed my 12th grade with an outstanding 92% score. This year also marked the beginning of something greater as I joined Newton School of Technology (NST), stepping into a future shaped by innovation, dedication, and a relentless pursuit of tech excellence."
          },
          {
            year: '2022',
            content: "Completed 10th grade with a commendable score of 91%, laying the foundation for my academic and technical pursuits. This early achievement reflected my commitment to excellence and marked the beginning of my journey toward a future in technology and innovation."
          }].map((item, i) => (
            <div key={i} className="mb-24 relative flex items-center" data-aos="fade-up">
              <div className="absolute -left-[34px] top-6 w-7 h-7 rounded-full bg-blue-400 border-4 border-black text-black flex items-center justify-center font-bold text-sm z-10">
              </div>
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-lg w-full mx-auto min-h-[200px]">
                <h3 className="text-xl font-semibold mb-2 text-white">{item.year}</h3>
                <p className="text-gray-300">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
