"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * A wireframe orb composed of nested rotating rings.
 * No WebGL — pure CSS 3D transforms. Reacts to mouse on desktop.
 */
export function Orb({
  size = 520,
  rings = 9,
  className,
}: {
  size?: number;
  rings?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-1, 1], [10, -10]), {
    stiffness: 60,
    damping: 18,
  });
  const ry = useSpring(useTransform(mx, [-1, 1], [-14, 14]), {
    stiffness: 60,
    damping: 18,
  });

  useEffect(() => {
    if (reduced) return;
    const el = containerRef.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mx.set((e.clientX - cx) / (window.innerWidth / 2));
      my.set((e.clientY - cy) / (window.innerHeight / 2));
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduced, mx, my]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        width: size,
        height: size,
        perspective: 1400,
        position: "relative",
      }}
    >
      {/* Soft glow behind the orb */}
      <div
        aria-hidden
        className="absolute inset-0 m-auto pointer-events-none animate-pulse-soft"
        style={{
          width: size * 0.9,
          height: size * 0.9,
          background:
            "radial-gradient(closest-side, oklch(0.76 0.16 55 / 0.35), oklch(0.76 0.16 55 / 0) 70%)",
          filter: "blur(40px)",
        }}
      />

      <motion.div
        className="relative w-full h-full"
        style={{
          rotateX: reduced ? 0 : rx,
          rotateY: reduced ? 0 : ry,
          transformStyle: "preserve-3d",
        }}
      >
        {Array.from({ length: rings }).map((_, i) => {
          const ratio = (i + 1) / rings;
          const ringSize = size * (0.32 + ratio * 0.68);
          const tilt = (i / rings) * 180;
          const spinDuration = 28 + i * 4;
          const counter = i % 2 === 0;
          return (
            <div
              key={i}
              className="absolute inset-0 m-auto"
              style={{
                width: ringSize,
                height: ringSize,
                transform: `rotateY(${tilt}deg)`,
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  border: `1px solid oklch(0.95 0.01 245 / ${
                    0.06 + ratio * 0.12
                  })`,
                  transformStyle: "preserve-3d",
                  animation: reduced
                    ? "none"
                    : `spin ${spinDuration}s linear infinite ${
                        counter ? "reverse" : ""
                      }`,
                }}
              />
              {/* A second ring per layer for crosshatch depth */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  border: `1px solid oklch(0.76 0.16 55 / ${0.04 + ratio * 0.08})`,
                  transform: `rotateX(${60 + i * 9}deg)`,
                  animation: reduced
                    ? "none"
                    : `spin ${spinDuration + 6}s linear infinite`,
                }}
              />
            </div>
          );
        })}

        {/* Inner solid sphere with gradient sheen */}
        <div
          className="absolute inset-0 m-auto rounded-full"
          style={{
            width: size * 0.22,
            height: size * 0.22,
            background:
              "radial-gradient(circle at 30% 30%, oklch(0.95 0.01 245 / 0.92), oklch(0.26 0.04 245 / 0.8) 65%, oklch(0.20 0.035 245) 100%)",
            boxShadow:
              "0 0 60px oklch(0.76 0.16 55 / 0.35), inset 0 0 30px oklch(0.95 0.01 245 / 0.15)",
          }}
        />
      </motion.div>
    </div>
  );
}
