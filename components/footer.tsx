import Image from "next/image";
import Link from "next/link";
import { clinicInfo, navLinks, socialLinks } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <Image src="/Logo_mdp_vet.png" alt="MDP Vet logo" width={140} height={54} className="h-11 w-auto" />
          <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
            Diagnostic, tratament și monitorizare pentru animalele de companie, într-un cadru sigur și modern.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--ink)]">Linkuri rapide</h4>
          <ul className="mt-3 space-y-2 text-sm text-[var(--ink-soft)]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-[var(--brand)]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--ink)]">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-[var(--ink-soft)]">
            <li>{clinicInfo.address}</li>
            <li>
              <a href={clinicInfo.phoneHref} className="transition hover:text-[var(--brand)]">
                {clinicInfo.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${clinicInfo.email}`} className="transition hover:text-[var(--brand)]">
                {clinicInfo.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--ink)]">Locații & social</h4>
          <ul className="mt-3 space-y-2 text-sm text-[var(--ink-soft)]">
            {clinicInfo.locations.map((location) => (
              <li key={location.name}>
                <a href={location.phoneHref} className="transition hover:text-[var(--brand)]">
                  {location.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[var(--muted)] px-3 py-1 text-[var(--ink-soft)] transition hover:text-[var(--brand)]"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--border)] py-4 text-center text-xs text-[var(--ink-soft)]">
        © {new Date().getFullYear()} {clinicInfo.fullName}. Toate drepturile rezervate.
      </div>
    </footer>
  );
}
