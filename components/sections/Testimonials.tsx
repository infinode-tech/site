"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "After working with Infinode, I cannot imagine working with anyone else. They are the best in the business.",
    name: "Saimaan Ibrahim",
    title: "President, SKY",
  },
  {
    quote:
      "Infinode is the best thing that ever happened to my business. They helped with brand and a custom application, and I love every part of it.",
    name: "Aminath Neesha",
    title: "CEO, Artiflora",
  },
  {
    quote:
      "Working with Infinode while building Ujaalaa was a great experience. Professional, sharp, and they know exactly what they are doing.",
    name: "Easa",
    title: "CEO, Ujaalaa",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative w-screen py-28 lg:py-40 border-t border-ink-3/40"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <span className="idx-label">/04 — proof</span>
            <h2 className="mt-6 font-sans font-medium text-display-lg text-mist-1 leading-[0.95] tracking-[-0.04em]">
              Don&apos;t take
              <br />
              <span className="text-mist-3">our word for it.</span>
            </h2>
          </div>
          <p className="max-w-sm text-mist-2 text-body-lg">
            A small list, with real founders behind each line.
          </p>
        </div>

        <ul className="mt-16 lg:mt-24 grid lg:grid-cols-3 gap-px bg-ink-3/40 border-y border-ink-3/40">
          {TESTIMONIALS.map((t, i) => (
            <motion.li
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px 0px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-ink-1 p-8 lg:p-10 flex flex-col justify-between min-h-[300px]"
            >
              <blockquote className="text-mist-1 text-lg lg:text-xl leading-snug tracking-[-0.01em]">
                {t.quote}
              </blockquote>
              <figcaption className="mt-10 flex flex-col gap-1">
                <span className="text-mist-1 text-sm font-medium">{t.name}</span>
                <span className="text-mist-3 text-xs font-mono tracking-[0.05em]">
                  {t.title}
                </span>
              </figcaption>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
