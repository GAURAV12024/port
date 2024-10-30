"use client";

import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

const LampPage = dynamic(() => import("./Home1"), { ssr: false });
const Hero = dynamic(() => import("./Home2"), { ssr: false });

const MOBILE_BREAKPOINT = 767;

const ResponsivePage: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    // Set initial screen size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {isMobile ? <Hero /> : <LampPage />}
    </div>
  );
};

export default ResponsivePage;