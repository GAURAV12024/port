"use client";

import React, { useEffect, useState } from "react";
import LampPage from "./Home1";
import Hero from "./Home2";

const ResponsivePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [hasWindow, setHasWindow] = useState(false); // To check if `window` is available

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true); // `window` is available, so we set the state
    }
  }, []);

  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 767);
        setIsDesktop(window.innerWidth >= 768);
      };

      // Set initial screen size
      handleResize();

      // Add event listener for window resize
      window.addEventListener("resize", handleResize);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [hasWindow]);

  if (!hasWindow) return null; // Prevent rendering on the server

  return (
    <div>
      {isMobile && <Hero />}
      {isDesktop && <LampPage />}
      {!isMobile && !isDesktop && <div>Loading...</div>}
    </div>
  );
};

export default ResponsivePage;
