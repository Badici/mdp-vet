import Link from "next/link";
import { clinicInfo, navLinks } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-emerald-100 bg-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{clinicInfo.name}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Diagnostic, tratament și monitorizare pentru animalele de companie, într-un cadru sigur și modern.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">Linkuri rapide</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-emerald-700">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>{clinicInfo.address}</li>
            <li>
              <a href={clinicInfo.phoneHref} className="transition hover:text-emerald-700">
                {clinicInfo.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${clinicInfo.email}`} className="transition hover:text-emerald-700">
                {clinicInfo.email}
              </a>
            </li>
          </ul>
          <div className="mt-4 flex gap-3 text-sm">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">Facebook</span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">Instagram</span>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {clinicInfo.fullName}. Toate drepturile rezervate.
      </div>
    </footer>
  );
}
