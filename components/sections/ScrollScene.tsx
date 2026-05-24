"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const PHASES = [
  {
    n: "01",
    title: "Discover",
    body: "We learn the product, the goals, the constraints. We turn the noise into a clear brief.",
  },
  {
    n: "02",
    title: "Design",
    body: "Tight loops between design and engineering. Real prototypes, real data, real users.",
  },
  {
    n: "03",
    title: "Ship",
    body: "We launch carefully and stay close. Performance, telemetry, feature work. The product gets better, not just older.",
  },
];

export function ScrollScene() {
  const ref = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const targetTimeRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);
  const [duration, setDuration] = useState(0);
  const [step, setStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Pick up metadata immediately if it's already there, otherwise listen
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const setIfReady = () => {
      if (v.duration && !Number.isNaN(v.duration)) {
        setDuration(v.duration);
      }
    };
    setIfReady();
    v.addEventListener("loadedmetadata", setIfReady);
    v.addEventListener("durationchange", setIfReady);
    return () => {
      v.removeEventListener("loadedmetadata", setIfReady);
      v.removeEventListener("durationchange", setIfReady);
    };
  }, []);

  // rAF coalesces seeks so we never outrun the decoder
  useEffect(() => {
    const loop = () => {
      const v = videoRef.current;
      if (v && duration) {
        const t = targetTimeRef.current;
        if (Math.abs(v.currentTime - t) > 0.03) {
          try {
            v.currentTime = t;
          } catch {
            /* ignore transient seek errors */
          }
        }
      }
      rafIdRef.current = requestAnimationFrame(loop);
    };
    rafIdRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafIdRef.current != null) cancelAnimationFrame(rafIdRef.current);
    };
  }, [duration]);

  // Phase step updates always run, regardless of video load state
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (duration) {
      targetTimeRef.current = Math.min(
        duration - 0.05,
        Math.max(0, v * duration)
      );
    }
    const s = Math.min(PHASES.length - 1, Math.floor(v * PHASES.length));
    setStep((prev) => (s !== prev ? s : prev));
  });

  return (
    <section
      ref={ref}
      className="relative w-screen"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-ink-0">
        <video
          ref={videoRef}
          src="/media/scroll-scene.mp4"
          muted
          playsInline
          preload="auto"
          // No opacity gate — let the first frame show as soon as decoded
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Lighter gradient so the video reads through */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.14 0.025 245 / 0.30) 0%, oklch(0.14 0.025 245 / 0.10) 40%, oklch(0.14 0.025 245 / 0.70) 80%, oklch(0.14 0.025 245 / 0.92) 100%)",
          }}
        />

        <div className="relative h-full mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20 flex flex-col justify-between py-24 lg:py-28">
          <div className="flex items-center justify-between">
            <span className="idx-label">/03 — how we work</span>
            <span className="idx-label">
              phase {String(step + 1).padStart(2, "0")} / 03
            </span>
          </div>

          {/* Big background phase number (one element, just changes text) */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-end pr-6 sm:pr-10 lg:pr-20">
            <motion.span
              key={PHASES[step].n}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 0.07, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans font-medium text-mist-1 leading-none tracking-[-0.05em] select-none"
              style={{ fontSize: "clamp(16rem, 50vw, 44rem)" }}
            >
              {PHASES[step].n}
            </motion.span>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl relative min-h-[260px]">
              {PHASES.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={false}
                  animate={{
                    opacity: i === step ? 1 : 0,
                    y: i === step ? 0 : 16,
                  }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className={`absolute inset-0 ${
                    i === step ? "pointer-events-auto" : "pointer-events-none"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-mist-3 tracking-[0.16em]">
                      / {p.n}
                    </span>
                    <span className="block w-10 h-px bg-mist-3" />
                  </div>
                  <h3
                    className="mt-4 font-sans font-medium text-mist-1 leading-[0.95] tracking-[-0.04em]"
                    style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
                  >
                    {p.title}.
                  </h3>
                  <p className="mt-5 text-mist-2 text-body-lg max-w-md">
                    {p.body}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-3 lg:items-end min-w-[180px]">
              <div className="flex items-center gap-2">
                {PHASES.map((p, i) => (
                  <div
                    key={p.n}
                    className={`h-1 w-10 rounded-full transition-colors duration-500 ${
                      i <= step ? "bg-mist-1" : "bg-ink-3"
                    }`}
                  />
                ))}
              </div>
              <span className="idx-label">scroll to advance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
