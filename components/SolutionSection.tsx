"use client";

import { SectionWrapper } from "./SectionWrapper";

export function SolutionSection() {
  return (
    <SectionWrapper className="relative min-h-screen bg-void">
      {/* Video placeholder */}
      <div
        className="absolute inset-0 z-0 flex items-center justify-center"
        style={{
          background:
            "linear-gradient(180deg, var(--void) 0%, var(--charcoal) 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')] opacity-30 mix-blend-overlay" />
      </div>

      {/* Centered content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center md:px-8">
        <h2 className="mb-8 font-display text-h2 text-neutral-50 md:mb-10">
          FROM SILICON TO NEURAL-SYNC
        </h2>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-neutral-100 md:text-xl">
          AXON Core bypasses the silicon intermediary. Direct synaptic-to-digital
          transfer. No emulation. No translation layer. Your neural output
          becomes compute input at hardware speed. The brain isn&apos;t the
          bottleneck. Everything else was.
        </p>
      </div>
    </SectionWrapper>
  );
}
