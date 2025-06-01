"use client";
import React from "react";
import { Mail, Phone } from "lucide-react";
import { SiGithub, SiLeetcode, SiLinkedin } from "react-icons/si";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white py-16 px-8 mt-18">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-5xl font-normal mb-10">Junaid Shaik</h2>
          <p className="text-lg text-gray-300 mb-10">
            Are you an agency or a freelancer? I always welcome new
            opportunities to exchange ideas and to explore collaborations.
          </p>
          <a
            href="./Assets/Resume-NewtonSchool.pdf"
            className="text-blue-400 text-lg hover:underline mb-10"
            target="_blank"
            rel="noopener noreferrer"
          >
            → GO TO MY RESUME
          </a>
          <div className="flex space-x-6 mt-6">
            <motion.a
              href="https://leetcode.com/u/mrstrange1708/"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <SiLeetcode size={28} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/shaik-mohammed-junaid-sami-20885430b/"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <SiLinkedin size={28} />
            </motion.a>

            <motion.a
              href="https://github.com/mrstrange1708"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <SiGithub size={28} />
            </motion.a>
          </div>
        </div>

        <div>
          <ul className="space-y-10 ml-30 font-normal text-lg ">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:underline">
                Skills
              </a>
            </li>
            <li>
              <a href="#timeline" className="hover:underline">
                Timeline
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <div className="m-10">
            <div className="flex items-center space-x-2 mb-10">
              <Mail className="w-10 h-10 " />
              <h3 className="text-2xl font-normal">Email</h3>
            </div>
            <a
              href="mailto:junaidsamishaik@gmail.com"
              className="text-blue-400 text-lg hover:underline"
            >
              junaidsamishaik@gmail.com
            </a>
          </div>
          <div className="m-10">
            <div className="flex items-center space-x-2 mb-10">
              <Phone className="w-10 h-10 " />
              <h3 className="text-2xl font-normal">Phone</h3>
            </div>
            <p className="text-blue-400 text-lg">+91 80199 44289</p>
          </div>
        </div>
      </div>

      <div className="mt-12 flex items-center justify-between border-t border-gray-700 pt-6 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Junaid Shaik — All rights reserved.</p>
        <p>Privacy policy</p>
      </div>
    </footer>
  );
};

export default Footer;
