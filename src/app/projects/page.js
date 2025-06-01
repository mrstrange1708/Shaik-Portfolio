"use client";
import React, { useEffect } from "react";
import Card from "../sections/Card";

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
    {
      title: "Tic Tac Toe Game",
      subtitle: "Interactive Game",
      imgSrc: "/Assets/Tic-tac-toe.jpg",
      techStack: ["JavaScript", "HTML", "CSS"],
      url: "https://tic-tac-toe-project-gamma-pink.vercel.app/",
    },
    {
      title: "Todo List",
      subtitle: "Todos App",
      imgSrc: "/Assets/Todos.jpg",
      techStack: ["JavaScript", "HTML", "CSS"],
      url: "https://to-do-list-jade-chi.vercel.app/",
    },
    {
      title: "PHA5E",
      subtitle: "Static Website",
      imgSrc: "/Assets/Phase.jpg",
      techStack: ["JavaScript", "HTML", "CSS"],
      url: "https://mrstrange1708.github.io/Pha5e/",
    },
    {
      title: "Capstion Project",
      subtitle: "Static Website",
      imgSrc: "/Assets/Capstone.jpg",
      techStack: ["JavaScript", "HTML", "CSS"],
      url: "https://cap-stone-projects.vercel.app/",
    },

    
  ];

  return (
    <div
      id="projects"
      className="min-h-screen scroll-mt-[80px] py-12 px-4 sm:px-6 lg:px-8 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-5">All Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 mt-20">
          {projects.map((project, index) => (
            <Card key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
