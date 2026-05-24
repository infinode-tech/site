"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.35]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100svh] w-screen overflow-hidden"
    >
      <HeroBackgroundVideo />

      <div
        aria-hidden
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.18 0.030 245 / 0.55) 0%, oklch(0.18 0.030 245 / 0.30) 35%, oklch(0.18 0.030 245 / 0.92) 100%)",
        }}
      />

      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative z-20 mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20 pt-32 lg:pt-40 pb-20 min-h-[100svh] flex flex-col justify-between"
      >
        <div className="flex items-center justify-between">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="idx-label"
          >
            software studio · est. 2023
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="idx-label hidden md:inline"
          >
            v · 03
          </motion.span>
        </div>

        {/* INFINODE wordmark — the dominant text */}
        <div className="flex flex-col">
          <RevealLine delay={0.1}>
            <h1
              className="font-sans font-medium text-mist-1 leading-[0.85] tracking-[-0.06em]"
              style={{ fontSize: "clamp(3.5rem, 19vw, 19rem)" }}
            >
              Infinode
            </h1>
          </RevealLine>

          {/* Slogan secondary, sits under the wordmark */}
          <div className="mt-6 lg:mt-10 grid lg:grid-cols-12 gap-x-10 gap-y-8 items-end">
            <div className="lg:col-span-7">
              <RevealLine delay={0.32}>
                <p className="font-sans font-medium text-mist-2 leading-tight tracking-[-0.03em]"
                   style={{ fontSize: "clamp(1.5rem, 3.2vw, 3rem)" }}>
                  Infinite possibilities, shipped.
                </p>
              </RevealLine>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 max-w-md text-body-lg text-mist-2"
              >
                A software studio designing and engineering web platforms,
                mobile products, and brand systems for ambitious teams.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex flex-wrap items-center gap-3 lg:justify-end"
            >
              <a href="#contact" className="btn-primary">
                Start a project
                <span className="arrow" aria-hidden>→</span>
              </a>
              <a href="#work" className="btn-ghost">
                What we do
              </a>
            </motion.div>
          </div>
        </div>

        <div className="flex items-center justify-between text-mist-3">
          <span className="idx-label">scroll</span>
          <ScrollLine />
        </div>
      </motion.div>
    </section>
  );
}

function RevealLine({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "108%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.05, delay, ease: [0.16, 1, 0.3, 1] }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}

function ScrollLine() {
  return (
    <div className="relative w-32 h-px bg-ink-3 overflow-hidden">
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-mist-2"
      />
    </div>
  );
}

function HeroBackgroundVideo() {
  const [ready, setReady] = useState(false);
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const onLoaded = () => setReady(true);
    v.addEventListener("loadeddata", onLoaded);
    return () => v.removeEventListener("loadeddata", onLoaded);
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-ink-1" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 80% at 70% 30%, oklch(0.32 0.040 245 / 0.65), transparent 70%), radial-gradient(40% 60% at 20% 80%, oklch(0.24 0.035 245 / 0.7), transparent 70%)",
        }}
      />
      <video
        ref={ref}
        src="/media/hero-loop.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          ready ? "opacity-60" : "opacity-0"
        }`}
      />
    </div>
  );
}
