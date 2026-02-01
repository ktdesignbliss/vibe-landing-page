"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-8"
      style={{
        backdropFilter: "blur(12px)",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        borderBottom: "1px solid var(--volt)",
      }}
    >
      <Link
        href="/"
        className="font-display text-sm font-normal tracking-tight text-volt uppercase md:text-base"
      >
        AXON Core
      </Link>
      <div className="flex items-center gap-6 md:gap-8">
        <Link
          href="#specs"
          className="hidden text-sm text-neutral-400 transition-colors hover:text-volt sm:block"
        >
          Specs
        </Link>
        <Link
          href="#process"
          className="hidden text-sm text-neutral-400 transition-colors hover:text-volt sm:block"
        >
          Process
        </Link>
        <Link
          href="#faq"
          className="hidden text-sm text-neutral-400 transition-colors hover:text-volt sm:block"
        >
          FAQ
        </Link>
        <Link
          href="#request"
          className="inline-flex items-center justify-center border border-volt bg-void px-4 py-2 text-sm font-medium text-volt transition-colors hover:bg-volt hover:text-void"
        >
          REQUEST ACCESS
        </Link>
      </div>
    </nav>
  );
}
