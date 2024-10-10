"use client";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import LampPage from "./Home1";
import Hero from "./Home2";

const ResponsivePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Update the state based on media queries
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    const desktop = window.matchMedia("(min-width: 768px)").matches;
    setIsMobile(mobile);
    setIsDesktop(desktop);
  }, []);

  return (
    <div>
      {isMobile && <LampPage />}
      {isDesktop && <Hero />}
      {/* Optional loading indicator while determining screen size */}
      {!isMobile && !isDesktop && <div>Loading...</div>}
    </div>
  );
};

export default ResponsivePage;
