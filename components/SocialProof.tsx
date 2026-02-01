"use client";

import { SectionWrapper } from "./SectionWrapper";

const LOGOS = [
  "OpenAI",
  "Anthropic",
  "DeepMind",
  "NVIDIA",
  "Meta AI",
  "Stripe",
  "Vercel",
  "Linear",
  "Figma",
  "Notion",
];

export function SocialProof() {
  const doubledLogos = [...LOGOS, ...LOGOS];

  return (
    <SectionWrapper className="overflow-hidden border-y border-neutral-700 bg-void py-6">
      <div className="flex w-full">
        <div className="flex animate-marquee gap-16 shrink-0">
          {doubledLogos.map((logo, i) => (
            <span
              key={`${logo}-${i}`}
              className="shrink-0 text-sm font-medium uppercase tracking-widest text-neutral-500 grayscale"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
