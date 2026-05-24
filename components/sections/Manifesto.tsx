"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

const PARAGRAPH =
  "A small studio with a long tail of taste. We build products you can feel, brands you remember, and the quiet engineering that lets both stay quiet. No templates. No theatre. Real craft, shipped on time.";

export function Manifesto() {
  const ref = useRef<HTMLElement | null>(null);
  // Faster reveal — completes well within one viewport scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.1"],
  });

  const words = PARAGRAPH.split(" ");

  return (
    <section
      ref={ref}
      id="studio"
      className="relative w-screen py-28 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-y-10 gap-x-10">
          <div className="lg:col-span-3">
            <span className="idx-label">/01 — studio</span>
          </div>

          <div className="lg:col-span-9">
            <p className="font-sans font-medium text-display-md text-mist-1 leading-[1.05] tracking-[-0.03em]">
              {words.map((w, i) => (
                <Word
                  key={`${w}-${i}`}
                  i={i}
                  total={words.length}
                  progress={scrollYProgress}
                >
                  {w}
                </Word>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Word({
  children,
  i,
  total,
  progress,
}: {
  children: React.ReactNode;
  i: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // Start each word higher in opacity so it's never invisible, finish bright
  const start = i / total;
  const end = (i + 2) / total;
  const opacity = useTransform(progress, [start, end], [0.35, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.22em]">
      {children}
    </motion.span>
  );
}
