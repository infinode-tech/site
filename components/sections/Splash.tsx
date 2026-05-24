"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Splash({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.9, delay: 1.4, ease: [0.65, 0, 0.35, 1] }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-ink-0"
    >
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center gap-5"
      >
        <Image
          src="/assets/logo.svg"
          alt="Infinode"
          width={56}
          height={56}
          priority
        />
        <div className="overflow-hidden">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="block text-mist-1 text-lg font-medium tracking-[-0.02em]"
          >
            infinode
          </motion.span>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "left" }}
          className="h-px w-32 bg-mist-1"
        />
      </motion.div>
    </motion.div>
  );
}
