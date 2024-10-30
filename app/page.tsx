import React from 'react';
import { FloatingNav } from "./components/ui/FloatingNavbar";
import ResponsivePage from "./components/Home3";
import RecentProject from "./components/RecentProject";
import Grid from "./components/Grid";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-slate-950 flex flex-col items-center min-h-screen overflow-x-hidden">
      <div className="max-w-7xl w-full px-5 sm:px-10">
        <FloatingNav navItems={navItems} />
        <ResponsivePage />
        <RecentProject />
        <Grid />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}