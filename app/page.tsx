"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Landing from "@/components/Landing";

import NavBar from "@/components/NavBar";
import Service from "@/components/Service";
import Testimonials from "@/components/Testimonials";
import { SparklesCore } from "@/components/ui/sparkles";
import { useEffect } from "react";

export default function Main() {
  useEffect(() => {
    {
      async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll();
      };
    }
  }, []);

  return (
    <main className="flex flex-col items-center bg-black text-white relative">
      {/* <div className="w-full absolute inset-0 h-auto">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full z-0"
          particleColor="#FFFFFF"
        />
      </div> */}
      <NavBar />
      <Landing />
      <About />
      <Service />
      <Testimonials />
      <Contact />
    </main>
  );
}
