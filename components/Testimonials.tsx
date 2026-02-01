"use client";

import { SectionWrapper } from "./SectionWrapper";

const TESTIMONIALS = [
  {
    quote:
      "The first time I ran a model through AXON, I couldn't tell where I ended and the compute began. That's the point.",
    author: "Dr. E. Chen",
    role: "Neural Systems, Stanford",
  },
  {
    quote:
      "We cut our training latency by three orders of magnitude. The bottleneck was never our architecture—it was the interface.",
    author: "M. Reeves",
    role: "CTO, NeuroForge",
  },
  {
    quote:
      "Zero thermal throttle. 72 hours at full load. We finally have hardware that thinks as fast as we do.",
    author: "A. Volkov",
    role: "Lead Researcher, DeepMind",
  },
];

export function Testimonials() {
  return (
    <SectionWrapper className="noise-overlay bg-void px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 font-display text-h2 text-neutral-50 md:mb-20">
          BUILT BY PIONEERS
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="relative border border-neutral-700 bg-charcoal-800 p-8"
            >
              <p className="mb-6 text-base leading-relaxed text-neutral-300 md:text-lg">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <span className="text-sm font-medium text-volt">{t.author}</span>
                <span className="text-sm text-neutral-500"> — {t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
