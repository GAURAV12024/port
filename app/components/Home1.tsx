"use client";

import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { FlipWords } from "./ui/flipword";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const LampPage: React.FC = () => {
  const words = [
    "Gaurav Deshmukh",
    "MERN Developer",
    "Problem Solver",
    "Open Source Contributor",
    "Learner",
    "Tech Enthusiast"
  ];

  return (
    <div id="home" className="min-h-screen">
      <LampContainer className="flex justify-center items-center flex-col w-full h-screen">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-transparent"
        >
          Hi, I am <FlipWords words={words} />
        </motion.h1>

        {/* Social Media Icons */}
        <div className="mt-10 flex space-x-10 text-4xl">
          <a 
            href="https://github.com/your-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub className="hover:text-purple transition-colors duration-300" />
          </a>
          <a 
            href="https://linkedin.com/in/your-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="hover:text-red-500 transition-colors duration-300" />
          </a>
          <a 
            href="https://twitter.com/your-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Twitter Profile"
          >
            <FaTwitter className="hover:text-green-300 transition-colors duration-300" />
          </a>
        </div>
      </LampContainer>
    </div>
  );
};

export default LampPage;