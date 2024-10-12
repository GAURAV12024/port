'use client'

import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow, FaGithub } from "react-icons/fa";

function RecentProject() {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of <span className="text-purple">recent project</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-6 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link, githubLink }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={title} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bgimg" className="w-full h-full object-cover" />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-0 max-w-full max-h-full" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 mt-2">
                {des}
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 sm:mt-7 mb-3 space-y-4 sm:space-y-0">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-8 lg:h-8 w-7 h-7 flex justify-center items-center"
                      style={{ transform: `translateX(-${4 * index}px)` }}
                    >
                      <img src={icon} alt={icon} className="p-1.5" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center space-x-2 w-full sm:w-auto">
                  {githubLink && (
                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-center border border-white/[0.2] rounded-md bg-black px-3 py-1.5 hover:bg-white/10 transition-colors flex-1 sm:flex-initial "
                    >
                      <FaGithub className="text-lg text-white  mr-2" />
                      <span className="text-white hover:text-green-300 text-sm font-medium">GitHub</span>
                    </a>
                  )}
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-center border border-white/[0.2] rounded-md bg-black px-3 py-1.5 hover:bg-white/10 transition-colors flex-1 sm:flex-initial"
                  >
                    <FaLocationArrow className="text-lg text-purple mr-2" />
                    <span className="text-purple text-sm font-medium">Live Site</span>
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentProject;