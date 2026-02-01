"use client";

import { useState } from "react";
import { SectionWrapper } from "./SectionWrapper";

const ITEMS = [
  {
    q: "Is AXON Core invasive?",
    a: "No. Calibration uses non-invasive EEG-grade sensors. No implants, no surgery, no scalp penetration.",
  },
  {
    q: "What's the latency floor?",
    a: "0.04ms response time. 4µs p99. Sub-perceptible for human cognition.",
  },
  {
    q: "How does thermal management work?",
    a: "Cryo-passive cooling. 0dB fan. Sustained 100% load for 72+ hours with zero throttle.",
  },
  {
    q: "Who is AXON Core for?",
    a: "Elite developers, neural researchers, and tech pioneers building the next generation of cognitive interfaces.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SectionWrapper id="faq" className="bg-void px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-16 font-display text-h2 text-neutral-50 md:mb-20">
          FAQ
        </h2>

        <div className="border-y border-neutral-700">
          {ITEMS.map((item, i) => (
            <div
              key={i}
              className="border-b border-neutral-700 last:border-b-0"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-volt"
              >
                <span className="font-display-alt text-base text-neutral-100 md:text-lg">
                  {item.q}
                </span>
                <span
                  className="ml-4 shrink-0 text-2xl font-light text-volt"
                  aria-hidden
                >
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="pb-6 pr-12">
                  <p className="text-sm leading-relaxed text-neutral-400 md:text-base">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
