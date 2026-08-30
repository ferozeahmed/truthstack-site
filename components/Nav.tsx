"use client";

import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-brand-border bg-brand-bg/90 backdrop-blur sticky top-0 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-mono text-lg font-bold text-brand-accent-green">
          Truthstack
        </Link>
        <button
          className="md:hidden text-brand-text"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
        <ul className="hidden md:flex gap-8">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-brand-muted hover:text-brand-accent-cyan">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-4">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-brand-muted hover:text-brand-accent-cyan"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
