"use client";

import { SectionWrapper } from "./SectionWrapper";

const BULLETS = [
  {
    title: "Thermal throttling",
    body: "Modern processors cap at 100°C and downclock. Every degree of heat steals milliseconds. Your ideas wait.",
  },
  {
    title: "Memory bandwidth ceilings",
    body: "DDR5 maxes at ~100GB/s. Neural workloads demand 10x that. You're building on a hard ceiling.",
  },
  {
    title: "Software emulation lag",
    body: "GPUs simulate neural nets. They don't run them. The translation layer adds 2–3 orders of magnitude in latency. You're not thinking. You're queuing.",
  },
];

export function ProblemSection() {
  return (
    <SectionWrapper className="bg-void px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-16 font-display text-h2 text-neutral-50 md:mb-20">
          THE BOTTLENECK ISN&apos;T YOUR CODE
        </h2>
        <ul className="space-y-8 md:space-y-12">
          {BULLETS.map((item, i) => (
            <li key={i} className="flex gap-6 md:gap-8">
              <span
                className="mt-1.5 h-2 w-2 shrink-0 bg-volt"
                aria-hidden
              />
              <div>
                <h3 className="mb-2 font-display-alt text-h4 font-medium text-volt">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-neutral-400 md:text-lg">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
