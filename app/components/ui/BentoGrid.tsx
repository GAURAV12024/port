"use client";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GrandientBg";

import { GlobeDemo } from "./GridGlode";
import { div, span } from "framer-motion/client";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { IconCloudDemo } from "./cloud";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("gauravdesh897@gmail.com");
    setCopied(true);
  };
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute flex justify-center items-center">
          {/* Display IconCloudDemo for id 1, centered and responsive */}
          {id === 1 ? (
            <div className="w-full h-full flex items-center justify-center">
              <IconCloudDemo className="w-3/4 h-3/4 md:w-2/4 md:h-2/4" />{" "}
              {/* Adjusted to fit the grid */}
            </div>
          ) : (
            img && (
              <img
                src={img}
                alt={img}
                className={cn(imgClassName, "object-cover object-center")}
              />
            )
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-100"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover object-center w-full h-full"}
            />
          )}
        </div>
        <div>
          {id === 6 && (
            <BackgroundGradientAnimation>
              {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold" /> */}
            </BackgroundGradientAnimation>
          )}
          <div
            className={cn(
              titleClassName,
              "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10  "
            )}
          >
            <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
              {description}
            </div>
            <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
              {title}
            </div>
            {id === 2 && <GlobeDemo />}
            {id === 3 && (
              <div className="relative flex flex-col items-center justify-center h-full">
                {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"absolute inset-0 object-cover object-center w-full h-full opacity-20"}
            />
          )}
                <div className="relative z-10 flex flex-col items-center text-center space-y-4 p-5">
                  <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 text-white">
                    Download My Resume
                  </div>

                  <div className="font-sans font-light text-sm lg:text-base text-[#c1c2d3]">
                    Click the button below to get a copy of my resume.
                  </div>

                  {/* Download button */}
                  <MagicButton
                    title="Download My Resume"
                    icon={<IoCopyOutline />} // Adjust the icon as needed
                    position="left"
                    otherClasses="!bg-[#161a31] hover:bg-[#0d0f25] text-white px-6 py-3"
                    handleClick={() => {
                      const link = document.createElement("a");
                      link.href = "/path/to/your/resume.pdf"; // Replace with your actual resume path
                      link.download = "Gaurav_Resume.pdf"; // Customize the file name
                      link.click();
                    }}
                  />
                </div>

                {/* Lottie animation for background effect */}
                <div className="absolute bottom-5 right-0 z-20">
                  <Lottie
                    options={{
                      loop: copied,
                      autoplay: copied,
                      animationData: animationData,
                      rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice",
                      },
                    }}
                  />
                </div>
              </div>
            )}

            {id === 6 && (
              <div className="mt-5 relative">
                <div className={`absolute -bottom-5 right-0`}>
                  <Lottie
                    options={{
                      loop: copied,
                      autoplay: copied,
                      animationData: animationData,
                      rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice",
                      },
                    }}
                  />
                </div>
                <MagicButton
                  title={copied ? "Email copied" : "Copy my email"}
                  icon={<IoCopyOutline />}
                  position="left"
                  otherClasses="!bg-[#161a31]"
                  handleClick={handleCopy}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
