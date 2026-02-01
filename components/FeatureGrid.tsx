"use client";

import Link from "next/link";
import { SectionWrapper } from "./SectionWrapper";

const FEATURES = [
  {
    id: "l1",
    title: "L1 Neural Sync",
    body: "Real-time synaptic data transfer. No emulation layer. No translation. 256 channels. Direct capture.",
    spec: "256-channel parallel input",
    highlight: false,
  },
  {
    id: "cryo",
    title: "Cryo-Passive Cooling",
    body: "Silent. Zero thermal throttle. Run at peak for 72+ hours. No fans. No compromise.",
    spec: "0dB fan. Sustained 100% load",
    highlight: false,
  },
  {
    id: "zerolag",
    title: "Zero-Lag Architecture",
    body: "0.04ms response time. Sub-perceptible. Your intent becomes output before you perceive the gap.",
    spec: "4µs p99",
    highlight: true,
  },
];

export function FeatureGrid() {
  return (
    <SectionWrapper id="specs" className="noise-overlay bg-void px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 font-display text-h2 text-neutral-50 md:mb-20">
          THE SPECS
        </h2>

        {/* 4-column Bento — on desktop 3 cols, mobile stacked */}
        <div className="grid grid-cols-1 gap-px border border-neutral-700 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className={`border-neutral-700 bg-charcoal-800 p-8 md:border-l-0 md:border-t-0 md:first:border-l-0 md:first:border-t-0 ${
                feature.highlight
                  ? "ring-1 ring-volt/50 shadow-[0_0_30px_rgba(206,255,0,0.1)]"
                  : ""
              }`}
              style={
                feature.highlight
                  ? {
                      boxShadow:
                        "0 0 40px rgba(206, 255, 0, 0.15), 0 0 80px rgba(206, 255, 0, 0.05)",
                    }
                  : undefined
              }
            >
              <h3 className="mb-3 font-display text-h4 text-volt">
                {feature.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-neutral-400">
                {feature.body}
              </p>
              <span className="text-xs uppercase tracking-widest text-neutral-500">
                {feature.spec}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center md:mt-16">
          <Link
            href="#request"
            className="inline-flex items-center justify-center border border-neutral-600 px-6 py-3 text-sm font-medium text-neutral-300 transition-colors hover:border-volt hover:text-volt"
          >
            VIEW WHITEPAPER
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
