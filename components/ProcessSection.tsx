"use client";

import { SectionWrapper } from "./SectionWrapper";

const STEPS = [
  {
    num: "01",
    title: "Calibrate",
    body: "Baseline your neural signature. 12-minute non-invasive scan. Hardware learns your signal pattern. No implants. No surgery.",
  },
  {
    num: "02",
    title: "Sync",
    body: "Pair AXON Core with your workstation. One-time handshake. Persistent secure link. You think. It computes.",
  },
  {
    num: "03",
    title: "Transcend",
    body: "No training wheels. Full bandwidth. Your bottleneck was never biological.",
  },
];

export function ProcessSection() {
  return (
    <SectionWrapper id="process" className="bg-void px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 font-display text-h2 text-neutral-50 md:mb-20">
          CALIBRATE. SYNC. TRANSCEND.
        </h2>

        <div className="grid grid-cols-1 gap-12 border-t border-neutral-700 pt-12 md:grid-cols-3 md:gap-16 md:pt-16">
          {STEPS.map((step, i) => (
            <div key={step.num} className="flex flex-col">
              <span className="mb-4 font-mono text-2xl text-volt md:text-3xl">
                Step {step.num}
              </span>
              <h3 className="mb-3 font-display text-h4 text-neutral-100">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-400 md:text-base">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
