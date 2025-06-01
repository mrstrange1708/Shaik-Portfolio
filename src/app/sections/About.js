'use client'

import React, { useEffect, useRef } from 'react'
import { animate, stagger } from '@motionone/dom'
import { splitText } from 'motion-plus'


const About = () => {
    useEffect(() => {
        document.fonts.ready.then(() => {
          const element = document.querySelector('#Pararef')
          if (!element) return
      
          const { words } = splitText(element)
      
          animate(
            words,
            { opacity: [0, 1], y: [20, 0] },
            {
              duration: 5,
              delay: stagger(0.05),
              easing: 'ease-out'
            }
          )
        })

        const smoothScrollHandler = (e) => {
          const target = e.target;
          if (target.tagName === 'A' && target.getAttribute('href') === '#about') {
            e.preventDefault();
            const section = document.getElementById('about');
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }
        };
        document.addEventListener('click', smoothScrollHandler);
        return () => document.removeEventListener('click', smoothScrollHandler);
      }, [])


  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-black text-white px-8 text-center overflow-hidden"
    >
      
      <div id="dots-container" className="dots w-full h-full bg-black absolute inset-0 z-0" />
      <div className="max-w-3xl z-10">
        <h1 className="text-4xl font-normal mb-10 font-sans">
          About Me
        </h1>
        <p id='Pararef' className="text-lg leading-relaxed font-normal">
          I’m a passionate Web developer, game developer, and freelancer who’s always up for a new challenge.
          I work on diverse projects across web, game, and freelance domains, constantly exploring new tech
          to sharpen my skills. I believe in thinking dynamically, solving problems creatively, and striving
          to grow both professionally and personally with each step forward.
        </p>
      </div>
    </section>
  )
}

export default About
