"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { clinicInfo, navLinks, socialLinks } from "@/lib/site-data";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:var(--surface)]/92 backdrop-blur-xl">
      <div className="hidden border-b border-[var(--border)] bg-[var(--ink)] text-white lg:block">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <div className="flex items-center gap-6">
            {clinicInfo.locations.map((location) => (
              <a key={location.name} href={location.phoneHref} className="opacity-90 transition hover:opacity-100">
                {location.name}: {location.phoneDisplay}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} className="opacity-90 transition hover:text-[var(--brand)]" target="_blank" rel="noopener noreferrer">
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image src="/Logo_mdp_vet.png" alt="MDP Vet logo" width={170} height={70} className="h-14 w-auto" priority />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-[var(--brand-50)] text-[var(--brand)]"
                    : "text-[var(--ink-soft)] hover:bg-[var(--muted)] hover:text-[var(--ink)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-full bg-[var(--brand)] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--brand-deep)]"
          >
            Programează acum
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex rounded-full border border-[var(--border)] p-2 text-[var(--ink-soft)] md:hidden"
          aria-label="Deschide meniul"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span className="block h-5 w-5 text-lg leading-none">{mobileOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-[var(--border)] bg-[var(--surface)] px-4 py-4 shadow-sm md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-xl px-3 py-2 text-sm font-medium ${
                  pathname === item.href ? "bg-[var(--brand-50)] text-[var(--brand)]" : "text-[var(--ink-soft)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 inline-flex w-full justify-center rounded-xl bg-[var(--brand)] px-4 py-2.5 text-sm font-semibold text-white"
          >
            Programează acum
          </Link>
        </div>
      ) : null}
    </header>
  );
}
