"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import HorizontalScroll from "@/components/HorizontalScroll";
import Landing from "@/components/Landing";

import NavBar from "@/components/NavBar";
import SplashScreen from "@/components/Splash/SplashScreen";
import Team from "@/components/Team";
// import Service from "@/components/Service";
import Testimonials from "@/components/Testimonials";
import { motion } from "framer-motion";
// import { SparklesCore } from "@/components/ui/sparkles";
// import Head from "next/head";
import "normalize.css";
import { useEffect, useRef, useState } from "react";

export default function Main() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const handleAnimationComplete = () => {
    setIsSplashVisible(false);
  };
  return (
    <main className="bg-[#202d3f] text-white relative w-screen">
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
      {isSplashVisible && (
        <SplashScreen onAnimationComplete={handleAnimationComplete} />
      )}
      {!isSplashVisible && (
        <>
          <NavBar />
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          > */}
          {/* Your main app content goes here */}

          <Landing />
          <About />
          <HorizontalScroll />
          <Testimonials />
          {/* <Team /> */}
          <Contact />
          {/* </motion.div> */}
        </>
      )}
      {/* <Service /> */}
    </main>
  );
}
