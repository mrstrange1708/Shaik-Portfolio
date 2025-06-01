"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Card from "./Card.js";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Project() {
  useEffect(() => {
    const smoothScrollHandler = (e) => {
      const target = e.target;
      const href = target.getAttribute("href");
      if (
        target.tagName === "A" &&
        (href === "#about" || href === "#projects")
      ) {
        e.preventDefault();
        const section = document.getElementById(href.slice(1));
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    document.addEventListener("click", smoothScrollHandler);
    return () => document.removeEventListener("click", smoothScrollHandler);
  }, []);

  const projects = [
    {
      title: "Mern Stack E-commerce",
      subtitle: "Stylsih Lady Collection",
      imgSrc: "/Assets/Stylish.jpg",
      techStack: [
        "React.js",
        "Node.js",
        "Experss.js",
        " MongoDB",
        "Tailwind CSS",
      ],
      url: "https://junaidsamishaik.wixsite.com/stylishlady",
    },
    {
      title: "Project Management System",
      subtitle: "Task Flow",
      imgSrc: "/Assets/Taskflow.jpg",
      techStack: ["React.js", "API", "Framer Motion", "Tailwind CSS"],
      url: "https://project-management-caps.vercel.app/",
    },
    {
      title: "Mind Map Builder",
      subtitle: "Cognify",
      imgSrc: "/Assets/Cognify.jpg",
      techStack: ["React-flow", "React.js", "Framer Motion", "Tailwind CSS"],
      url: "https://cognify-lemon.vercel.app/",
    },
    {
      title: "Learning Platform",
      subtitle: "Fintech Learning",
      imgSrc: "/Assets/Fintech.jpg",
      techStack: ["JavaScript", "React.js", "Tailwind CSS"],
      url: "https://fin-tech-learning.vercel.app/",
    },
  ];

  return (
    <div
      id="projects"
      className="min-h-screen scroll-mt-[80px] py-12 px-4 sm:px-6 lg:px-8 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-normal text-center  mb-5">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 mt-20" data-aos="fade-up">
          {projects.map((project, index) => (
            <Card key={index} {...project} />
          ))}
        </div>
        <div className="mt-12 text-center" >
          <Link href="/projects">
            <button className="cta flex">
              <span>More Projects</span>
              <svg width="15px" height="10px" viewBox="0 0 13 10" className="ml-2 mt-2">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
