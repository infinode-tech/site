"use client";

import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative w-screen bg-ink-0 text-mist-2 py-16 lg:py-24 border-t border-ink-3/40">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2.5">
              <Image src="/assets/logo.svg" alt="Infinode" width={32} height={32} />
              <span className="text-mist-1 text-base font-medium tracking-[-0.02em]">
                Infinode
              </span>
            </div>
            <p className="mt-8 font-sans font-medium text-display-md text-mist-1 leading-[1.0] tracking-[-0.035em] max-w-xl">
              Infinite
              <br />
              <span className="text-mist-3">possibilities.</span>
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="idx-label">explore</p>
            <ul className="mt-5 space-y-2.5">
              {[
                { href: "#studio", label: "Studio" },
                { href: "#work", label: "What we do" },
                { href: "#testimonials", label: "Proof" },
                { href: "#contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-mist-2 hover:text-mist-1 transition-colors text-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="idx-label">contact</p>
            <ul className="mt-5 space-y-2.5">
              <li>
                <a
                  href="mailto:hello@infinode.tech"
                  className="text-mist-2 hover:text-mist-1 transition-colors text-sm"
                >
                  hello@infinode.tech
                </a>
              </li>
              <li>
                <a
                  href="tel:+9609570737"
                  className="text-mist-2 hover:text-mist-1 transition-colors text-sm"
                >
                  +960 957 0737
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 lg:mt-20 flex flex-col md:flex-row md:items-center justify-between gap-3 pt-6 border-t border-ink-3/40">
          <p className="text-mist-3 text-xs font-mono tracking-[0.06em]">
            © {new Date().getFullYear()} Infinode
          </p>
          <p className="text-mist-3 text-xs font-mono tracking-[0.06em]">
            all rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
