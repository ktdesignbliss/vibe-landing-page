"use client";

import Link from "next/link";
import { SectionWrapper } from "./SectionWrapper";

const COLUMNS = [
  {
    label: "Product",
    links: [
      { href: "#specs", label: "Specs" },
      { href: "#process", label: "Process" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    label: "Resources",
    links: [
      { href: "#", label: "Whitepaper" },
      { href: "#", label: "Docs" },
      { href: "#", label: "API" },
    ],
  },
  {
    label: "Company",
    links: [
      { href: "#", label: "About" },
      { href: "#", label: "Careers" },
      { href: "#", label: "Contact" },
    ],
  },
  {
    label: "Legal",
    links: [
      { href: "#", label: "Privacy" },
      { href: "#", label: "Terms" },
      { href: "#", label: "Security" },
    ],
  },
];

export function Footer() {
  return (
    <SectionWrapper id="request" className="border-t border-neutral-700 bg-void px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
          {COLUMNS.map((col) => (
            <div key={col.label}>
              <span className="mb-4 block text-xs font-medium uppercase tracking-widest text-neutral-500">
                {col.label}
              </span>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 transition-colors hover:text-volt"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-neutral-700 pt-12 md:flex-row md:items-center">
          <Link
            href="/"
            className="font-display text-sm text-volt uppercase tracking-tight"
          >
            AXON Core
          </Link>
          <Link
            href="#request"
            className="inline-flex items-center justify-center border border-volt bg-volt px-6 py-3 text-sm font-medium text-void transition-colors hover:bg-void hover:text-volt"
          >
            REQUEST ACCESS
          </Link>
        </div>

        <p className="mt-8 text-xs text-neutral-600">
          © {new Date().getFullYear()} AXON Core. High-Performance Neural
          Computing.
        </p>
      </div>
    </SectionWrapper>
  );
}
