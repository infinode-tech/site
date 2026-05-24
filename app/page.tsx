"use client";

import { useEffect, useState } from "react";
import { NavBar } from "@/components/sections/NavBar";
import { Splash } from "@/components/sections/Splash";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { ScrollScene } from "@/components/sections/ScrollScene";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Page() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showSplash]);

  return (
    <main className="relative bg-ink-1 text-mist-1 w-screen min-h-screen">
      {showSplash && <Splash onComplete={() => setShowSplash(false)} />}

      <NavBar />
      <Hero />
      <Manifesto />
      <ScrollScene />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
