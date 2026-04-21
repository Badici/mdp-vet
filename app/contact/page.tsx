import type { Metadata } from "next";
import Image from "next/image";
import { clinicInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact | MDP Vet",
  description:
    "Contactează Clinica Veterinară MDP Vet pentru programări telefonice: locații, numere de telefon și program de funcționare.",
};

export default function ContactPage() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">Contact</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--ink)]">Programează o consultație la MDP Vet</h1>
        <p className="mt-4 max-w-3xl text-[var(--ink-soft)]">
          Programările se fac telefonic. Sună direct în locația dorită, iar colegii din recepție îți confirmă rapid
          intervalul disponibil pentru consultație.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--ink)]">{clinicInfo.fullName}</h2>
            <ul className="mt-4 space-y-2 text-sm text-[var(--ink-soft)]">
              {clinicInfo.locations.map((location) => (
                <li key={location.name}>
                  {location.name}:{" "}
                  <a href={location.phoneHref} className="font-semibold text-[var(--brand)] hover:text-[var(--brand-deep)]">
                    {location.phoneDisplay}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-4 space-y-3 text-sm text-[var(--ink-soft)]">
              <li>{clinicInfo.address}</li>
              <li>
                Telefon:{" "}
                <a href={clinicInfo.phoneHref} className="font-semibold text-[var(--brand)] hover:text-[var(--brand-deep)]">
                  {clinicInfo.phoneDisplay}
                </a>
              </li>
            </ul>

            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-[var(--ink)]">Program de funcționare</h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--ink-soft)]">
              {clinicInfo.schedule.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
            <Image
              src="/images/mdp/contact-cover.jpg"
              alt="MDP Vet contact"
              width={1920}
              height={1200}
              className="mt-6 h-44 w-full rounded-2xl object-cover"
            />
            <a
              href="https://maps.google.com/?q=Strada+Armeni%C8%99+nr.2,+Sector+3,+Bucure%C8%99ti"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-full border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--ink-soft)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
            >
              Deschide în Google Maps
            </a>
          </aside>

          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--ink)]">Programări telefonice</h2>
            <p className="mt-2 text-sm text-[var(--ink-soft)]">
              Alege locația și sună direct. Pentru urgențe, menționează de la început simptomele principale.
            </p>
            <div className="mt-6 grid gap-4">
              {clinicInfo.locations.map((location) => (
                <a
                  key={location.name}
                  href={location.phoneHref}
                  className="group rounded-2xl border border-[var(--border)] bg-[var(--muted)] p-5 transition hover:-translate-y-0.5 hover:border-[var(--brand)] hover:shadow-md"
                >
                  <p className="text-sm font-semibold uppercase tracking-wide text-[var(--ink-soft)]">{location.name}</p>
                  <p className="mt-2 text-2xl font-bold text-[var(--brand)]">{location.phoneDisplay}</p>
                  <p className="mt-1 text-xs text-[var(--ink-soft)] group-hover:text-[var(--ink)]">Apasă pentru apel</p>
                </a>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-[var(--border)] bg-white p-4 text-sm text-[var(--ink-soft)]">
              <p className="font-semibold text-[var(--ink)]">Program Titan</p>
              <ul className="mt-2 space-y-1">
                {clinicInfo.schedule.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-xs text-[var(--ink-soft)]">
              Programările online nu sunt active în acest moment. Te rugăm să ne contactezi exclusiv telefonic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
