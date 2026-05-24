"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";

const LINKS = [
  { href: "#studio", label: "Studio" },
  { href: "#work", label: "What we do" },
  { href: "#testimonials", label: "Proof" },
];

export function NavBar() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setSolid(y > 40);
  });

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6 pt-4"
    >
      <div
        className={cn(
          "mx-auto max-w-[1440px] flex items-center justify-between rounded-lg transition-all duration-400",
          solid
            ? "bg-ink-1/70 backdrop-blur-xl border border-ink-3/60 py-2.5 px-3"
            : "bg-transparent border border-transparent py-3 px-3"
        )}
      >
        <a href="#top" className="flex items-center gap-2 pl-2">
          <Image
            src="/assets/logo.svg"
            alt="Infinode"
            width={28}
            height={28}
            priority
          />
          <span className="text-mist-1 text-base font-medium tracking-[-0.02em]">
            Infinode
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3.5 py-1.5 text-sm text-mist-2 hover:text-mist-1 transition-colors rounded-md"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-primary !py-2 !px-3.5 text-sm">
            Start a project
            <span className="arrow" aria-hidden>→</span>
          </a>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-9 h-9 grid place-items-center rounded-md border border-ink-3 text-mist-2"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M4 7h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="md:hidden mx-auto max-w-[1440px] mt-3 rounded-lg border border-ink-3/60 bg-ink-1/95 backdrop-blur-xl p-3"
        >
          <ul className="flex flex-col">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 px-2 text-xl text-mist-1 tracking-[-0.025em]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
