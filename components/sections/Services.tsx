"use client";

import { motion } from "framer-motion";
import {
  SparklesIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  Squares2X2Icon,
  CloudArrowUpIcon,
  WrenchScrewdriverIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";
import { ComponentType, SVGProps } from "react";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

type Service = {
  id: string;
  title: string;
  description: string;
  capabilities: string[];
  Icon: IconType;
};

const SERVICES: Service[] = [
  {
    id: "01",
    title: "Brand & Identity",
    description:
      "A brand that holds together across a product, a pitch deck, and a billboard.",
    capabilities: ["Logo & wordmark", "Type systems", "Color & motion", "Voice & tone"],
    Icon: SparklesIcon,
  },
  {
    id: "02",
    title: "Web Platforms",
    description:
      "Editorial landing pages, conversion-led sites, CMS-driven platforms.",
    capabilities: ["Next.js", "Headless CMS", "SEO", "Analytics"],
    Icon: GlobeAltIcon,
  },
  {
    id: "03",
    title: "Mobile Products",
    description:
      "Consumer apps and internal tools, shipped to the App Store and Play Store.",
    capabilities: ["iOS", "Android", "React Native", "Expo"],
    Icon: DevicePhoneMobileIcon,
  },
  {
    id: "04",
    title: "Custom Web Apps",
    description:
      "Dashboards, ops platforms, ecommerce engines, internal tools.",
    capabilities: ["Next.js", "Laravel", "APIs", "Postgres"],
    Icon: Squares2X2Icon,
  },
  {
    id: "05",
    title: "Deployments & Infra",
    description:
      "Hosting, CI/CD, observability, security. Set up once, calm forever.",
    capabilities: ["Vercel", "DigitalOcean", "GitHub Actions", "Monitoring"],
    Icon: CloudArrowUpIcon,
  },
  {
    id: "06",
    title: "Care & Maintenance",
    description:
      "Ongoing engineering, performance work, content, feature builds on retainer.",
    capabilities: ["Retainers", "Performance", "Security", "Feature work"],
    Icon: WrenchScrewdriverIcon,
  },
];

export function Services() {
  return (
    <section
      id="work"
      className="relative w-screen py-28 lg:py-40 border-t border-ink-3/40"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-24">
          <div>
            <span className="idx-label">/02 — what we do</span>
            <h2 className="mt-6 font-sans font-medium text-display-lg text-mist-1 leading-[0.95] tracking-[-0.04em]">
              Six surfaces.
              <br />
              <span className="text-mist-3">One studio.</span>
            </h2>
          </div>
          <p className="max-w-sm text-mist-2 text-body-lg">
            Every project pulls from the same shelf of tools. Pick what you
            need, leave the rest.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-3/40 border border-ink-3/40 rounded-xl overflow-hidden">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </ol>

        <div className="mt-12 lg:mt-16 flex flex-wrap items-center justify-between gap-6">
          <p className="text-mist-3 text-sm max-w-md">
            Not sure which of these maps to your project? Tell us about it and
            we&apos;ll figure it out together.
          </p>
          <a href="#contact" className="btn-primary">
            Start a project
            <span className="arrow" aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { Icon } = service;
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px 0px" }}
      transition={{
        duration: 0.7,
        delay: (index % 3) * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative bg-ink-1 p-8 lg:p-10 min-h-[360px] flex flex-col justify-between transition-colors duration-500 hover:bg-ink-2/50 overflow-hidden"
    >
      {/* Subtle radial glow on hover */}
      <div
        aria-hidden
        className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.96 0.008 245 / 0.06), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="grid place-items-center w-10 h-10 rounded-md border border-ink-3 bg-ink-2/40 group-hover:border-mist-3 transition-colors">
            <Icon className="w-5 h-5 text-mist-2 group-hover:text-mist-1 transition-colors" />
          </span>
          <span className="font-mono text-xs text-mist-3 tracking-[0.16em]">
            /{service.id}
          </span>
        </div>
        <ArrowUpRightIcon className="w-5 h-5 text-mist-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
      </div>

      <div className="relative mt-10 lg:mt-14">
        <h3 className="font-sans font-medium text-2xl lg:text-3xl text-mist-1 tracking-[-0.025em]">
          {service.title}
        </h3>
        <p className="mt-3 text-mist-2 text-[15px] leading-relaxed max-w-sm">
          {service.description}
        </p>

        <div className="mt-6 pt-5 border-t border-ink-3/60">
          <ul className="flex flex-wrap gap-x-3 gap-y-1.5">
            {service.capabilities.map((c) => (
              <li
                key={c}
                className="text-mist-3 text-xs font-mono tracking-[0.04em] before:content-['+'] before:mr-1.5 before:text-mist-3/60"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.li>
  );
}
