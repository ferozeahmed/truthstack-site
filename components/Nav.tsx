"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavLink = { href: string; label: string; cta?: boolean };

// To add a page to the header, add one entry here.
const LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact", cta: true },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

function linkClass(active: boolean, cta?: boolean) {
  if (cta) {
    return "rounded-md bg-brand-accent-green px-4 py-1.5 font-mono font-semibold text-brand-bg hover:opacity-90";
  }
  return active
    ? "text-brand-accent-green"
    : "text-brand-muted hover:text-brand-accent-cyan";
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="border-b border-brand-border bg-brand-bg/90 backdrop-blur sticky top-0 z-50">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <Link href="/" className="font-mono text-lg font-bold text-brand-accent-green">
          Truthstack
        </Link>
        <button
          className="md:hidden text-brand-text"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? "Close" : "Menu"}
        </button>
        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={linkClass(active, link.cta)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {open && (
        <ul id="mobile-menu" className="md:hidden flex flex-col items-start gap-4 px-6 pb-4">
          {LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={linkClass(active, link.cta)}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}
