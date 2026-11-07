import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-brand-border mt-24 py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row justify-between gap-4 text-brand-muted text-sm">
        <p>&copy; {new Date().getFullYear()} Truthstack. All rights reserved.</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/services" className="hover:text-brand-accent-cyan">Services</Link>
          <Link href="/about" className="hover:text-brand-accent-cyan">About</Link>
          <Link href="/pricing" className="hover:text-brand-accent-cyan">Pricing</Link>
          <Link href="/contact" className="hover:text-brand-accent-cyan">Contact</Link>
          <Link href="/privacy" className="hover:text-brand-accent-cyan">Privacy</Link>
          <a href="mailto:algofire-contact@googlegroups.com" className="hover:text-brand-accent-cyan">
            algofire-contact@googlegroups.com
          </a>
        </div>
      </div>
    </footer>
  );
}
