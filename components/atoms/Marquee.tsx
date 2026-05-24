"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * CSS-only horizontal marquee. Renders content twice for seamless loop.
 * Animation is defined in tailwind.config.ts as `animate-marquee` / `animate-marquee-slow`.
 */
export function Marquee({
  children,
  speed = "normal",
  className,
}: {
  children: ReactNode;
  speed?: "normal" | "slow";
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max gap-16 will-change-transform",
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee"
        )}
      >
        <div className="flex gap-16 shrink-0 items-center">{children}</div>
        <div
          className="flex gap-16 shrink-0 items-center"
          aria-hidden="true"
        >
          {children}
        </div>
      </div>
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-1 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-1 to-transparent" />
    </div>
  );
}
