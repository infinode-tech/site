"use client";

import { motion, MotionProps, Variants } from "framer-motion";
import { ReactNode } from "react";

const lineVariants: Variants = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.05 + i * 0.08,
    },
  }),
};

/**
 * Each child renders inside an overflow-hidden mask and slides up into view.
 * Pass an array of ReactNodes (one per visual line). Triggers on viewport enter.
 */
export function MaskRevealText({
  lines,
  className,
  lineClassName,
  asInline = false,
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  asInline?: boolean;
}) {
  return (
    <div className={className}>
      {lines.map((line, i) => (
        <div
          key={i}
          className={`overflow-hidden ${asInline ? "inline-block" : "block"}`}
        >
          <motion.div
            custom={i}
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            className={lineClassName}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
