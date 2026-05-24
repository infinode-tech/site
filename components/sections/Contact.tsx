"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { cn } from "@/lib/cn";

const SERVICES = [
  "Brand & Identity",
  "Web Platform",
  "Mobile Product",
  "Custom Web App",
  "Other",
];

const BUDGETS = ["< $5k", "$5k – $15k", "$15k – $50k", "$50k+"];

type Form = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

const EMPTY: Form = {
  name: "",
  email: "",
  company: "",
  service: "",
  budget: "",
  message: "",
};

export function Contact() {
  const [data, setData] = useState<Form>(EMPTY);
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const onChange = (k: keyof Form, v: string) =>
    setData((p) => ({ ...p, [k]: v }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1100));
    setStatus("done");
  };

  return (
    <section
      id="contact"
      className="relative w-screen py-28 lg:py-40 border-t border-ink-3/40 bg-ink-0"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="idx-label">/05 — contact</span>
            <h2 className="mt-6 font-sans font-medium text-display-lg text-mist-1 leading-[0.95] tracking-[-0.04em]">
              Let&apos;s build
              <br />
              <span className="text-mist-3">something honest.</span>
            </h2>
            <p className="mt-8 text-body-lg text-mist-2 max-w-md">
              Tell us a little about what you have in mind. We respond within
              one working day, and the first call is on us.
            </p>

            <div className="mt-12 flex flex-col gap-5">
              <a
                href="mailto:hello@infinode.tech"
                className="group flex items-center gap-4"
              >
                <span className="grid place-items-center w-9 h-9 rounded-md border border-ink-3 group-hover:border-mist-2 transition-colors">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-mist-2"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <span className="text-mist-1 text-base group-hover:text-mist-1 transition-colors">
                  hello@infinode.tech
                </span>
              </a>
              <a
                href="tel:+9609570737"
                className="group flex items-center gap-4"
              >
                <span className="grid place-items-center w-9 h-9 rounded-md border border-ink-3 group-hover:border-mist-2 transition-colors">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-mist-2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span className="text-mist-1 text-base">+960 957 0737</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            {status === "done" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-lg border border-ink-3 bg-ink-2/40 p-10 md:p-14"
              >
                <div className="w-10 h-10 rounded-md bg-mist-1/10 grid place-items-center mb-6">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    className="text-mist-1"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-sans font-medium text-2xl md:text-3xl text-mist-1 tracking-[-0.025em]">
                  Message received.
                </h3>
                <p className="mt-4 text-mist-2 max-w-md">
                  We&apos;ll be in touch within one working day to schedule
                  your discovery call.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setData(EMPTY);
                    setStatus("idle");
                  }}
                  className="btn-ghost mt-8"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="rounded-lg border border-ink-3 bg-ink-2/30 p-7 md:p-10 space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field
                    label="Name"
                    value={data.name}
                    onChange={(v) => onChange("name", v)}
                    required
                  />
                  <Field
                    label="Email"
                    type="email"
                    value={data.email}
                    onChange={(v) => onChange("email", v)}
                    required
                  />
                  <Field
                    label="Company"
                    value={data.company}
                    onChange={(v) => onChange("company", v)}
                  />
                  <Field
                    label="Budget"
                    as="select"
                    value={data.budget}
                    onChange={(v) => onChange("budget", v)}
                    options={BUDGETS}
                  />
                </div>

                <Chips
                  label="What do you need"
                  options={SERVICES}
                  value={data.service}
                  onChange={(v) => onChange("service", v)}
                />

                <Field
                  label="Tell us about the project"
                  as="textarea"
                  rows={5}
                  value={data.message}
                  onChange={(v) => onChange("message", v)}
                  required
                />

                <div className="flex items-center justify-between pt-2">
                  <p className="text-mist-3 text-sm hidden sm:block">
                    Discovery call after submission.
                  </p>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary disabled:opacity-60"
                  >
                    {status === "loading" ? (
                      <>
                        <span className="spinner" />
                        Sending
                      </>
                    ) : (
                      <>
                        Send message
                        <span className="arrow" aria-hidden>→</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  as = "input",
  required = false,
  rows = 3,
  options = [],
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  as?: "input" | "textarea" | "select";
  required?: boolean;
  rows?: number;
  options?: string[];
}) {
  const id = `f-${label.toLowerCase().replace(/\s+/g, "-")}`;
  const sharedClass =
    "w-full bg-transparent border-0 border-b border-ink-3 px-0 py-2.5 text-mist-1 focus:outline-none focus:border-mist-1 transition-colors";
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="block text-xs uppercase tracking-[0.16em] text-mist-3 mb-2 font-mono"
      >
        {label}
        {required && <span className="text-mist-2"> *</span>}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          value={value}
          required={required}
          rows={rows}
          onChange={(e) => onChange(e.target.value)}
          className={cn(sharedClass, "resize-none")}
        />
      ) : as === "select" ? (
        <div className="relative">
          <select
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={cn(
              sharedClass,
              "appearance-none pr-8 cursor-pointer",
              !value && "text-mist-3"
            )}
            style={{ colorScheme: "dark" }}
          >
            <option value="" disabled>
              Select
            </option>
            {options.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          <svg
            className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-mist-3"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          required={required}
          onChange={(e) => onChange(e.target.value)}
          className={sharedClass}
        />
      )}
    </div>
  );
}

function Chips({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.16em] text-mist-3 mb-3 font-mono">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            className={cn(
              "px-3.5 py-1.5 rounded-md text-sm transition-all border",
              value === o
                ? "bg-mist-1 text-ink-0 border-mist-1"
                : "bg-transparent text-mist-2 border-ink-3 hover:border-mist-2"
            )}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}
