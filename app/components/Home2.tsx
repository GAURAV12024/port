import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { BackgroundBeamsWithCollision } from "./ui/Beams";

const Hero: React.FC = () => {
  return (
    <div className="relative pb-20 pt-36 h-screen" id="home">
      <div className="absolute inset-0">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-29 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="absolute inset-0 dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] opacity-10">
        <div className="absolute pointer-events-none inset-0 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="relative z-10 flex justify-center items-center h-full">
        <BackgroundBeamsWithCollision>
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Dynamic Web Magic with Next.js
            </h2>
            <TextGenerateEffect 
              className="text-center text-[40px] md:text-5xl lg:text-6xl" 
              words="Transforming concepts into seamless User experiences"
            />
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hi, I&apos;m Gaurav, a MERN developer
            </p>
            <a href="#about">
              <MagicButton 
                title="show my work" 
                icon={<FaLocationArrow/>} 
                position="right"
              />
            </a>
          </div>
        </BackgroundBeamsWithCollision>
      </div>
    </div>
  );
};

export default Hero;