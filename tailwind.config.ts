import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ink-0": "oklch(0.14 0.025 245)",
        "ink-1": "oklch(0.18 0.030 245)",
        "ink-2": "oklch(0.24 0.035 245)",
        "ink-3": "oklch(0.32 0.040 245)",
        "mist-1": "oklch(0.96 0.008 245)",
        "mist-2": "oklch(0.80 0.012 245)",
        "mist-3": "oklch(0.58 0.018 245)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 10vw, 11rem)", { lineHeight: "0.92", letterSpacing: "-0.045em" }],
        "display-lg": ["clamp(2.5rem, 7vw, 6.5rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "display-md": ["clamp(1.75rem, 4.5vw, 4rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "body-lg": ["clamp(1.05rem, 1.25vw, 1.25rem)", { lineHeight: "1.55", letterSpacing: "-0.01em" }],
        label: ["0.72rem", { lineHeight: "1", letterSpacing: "0.16em" }],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-slow": "marquee 80s linear infinite",
        float: "float 14s ease-in-out infinite",
        "pulse-soft": "pulseSoft 5s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-20px) translateX(6px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.85" },
        },
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
        sharp: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
