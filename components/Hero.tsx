"use client";

import Link from "next/link";
import { SectionWrapper } from "./SectionWrapper";
import { NeuralNetworkBackground } from "./NeuralNetworkBackground";

export function Hero() {
  return (
    <SectionWrapper className="relative min-h-screen overflow-hidden bg-void pt-24 md:pt-32">
      {/* Neural Network Background — Full hero coverage */}
      <NeuralNetworkBackground className="!z-0" opacity={0.85} />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12 px-6 pb-20 md:flex-row md:items-center md:justify-between md:gap-16 md:px-8 md:pb-0">
        {/* Left — Editorial copy */}
        <div className="flex flex-1 flex-col justify-center space-y-6">
          <h1
            className="font-display text-volt"
            style={{
              fontSize: "clamp(2rem, 6vw + 1.5rem, 4rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            THINK AT THE SPEED OF LIGHT
          </h1>
          <p className="max-w-md text-base leading-relaxed text-neutral-400 md:text-lg">
            Sub-4ms synaptic latency. Cognitive expansion without thermal
            compromise. The interface between silicon and signal.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#request"
              className="inline-flex w-fit items-center justify-center border border-volt bg-volt px-6 py-3 text-sm font-medium text-void transition-colors hover:bg-void hover:text-volt"
            >
              REQUEST ACCESS
            </Link>
            <Link
              href="#specs"
              className="inline-flex w-fit items-center justify-center border border-neutral-600 px-6 py-3 text-sm font-medium text-neutral-300 transition-colors hover:border-volt hover:text-volt"
            >
              VIEW WHITEPAPER
            </Link>
          </div>
        </div>
        {/* Right — 3D Neural visualization container */}
        <div className="relative flex flex-1 items-center justify-center md:min-h-[500px]">
          <div className="relative aspect-square w-full max-w-md overflow-hidden border border-neutral-700/50 md:aspect-auto md:max-w-lg md:min-h-[450px]">
            {/* Gradient overlay for depth */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at center, transparent 0%, var(--void) 70%)",
              }}
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
