"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp"; // Ensure the correct import path
import { FlipWords } from "./ui/flipword";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { div } from "framer-motion/client";

const LampPage = () => {
  const words = ["Gaurav Deshmukh", "Mern Developer", "Problem Solver", "Open Source Contributor", "Learner", "Tech Enthusiast"];

  return (
    <div id="#">
    <LampContainer className="flex justify-center items-center flex-col min-h-screen w-full h-screen">
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-center bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-transparent"
      >
        Hi, I am <span><FlipWords words={words} /></span>
      </motion.h1>

     

      {/* Social Media Icons */}
      <div className="mt-10 flex space-x-10 text-4xl"> 
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-purple transition-colors duration-300" />
        </a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-red-500 transition-colors duration-300" />
        </a>
        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="hover:text-green-300 transition-colors duration-300" />
        </a>
      </div>
    </LampContainer>
    </div>
    
  );
};

export default LampPage;
