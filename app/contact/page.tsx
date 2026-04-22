import type { Metadata } from "next";
import Image from "next/image";
import { Clock3, Mail, MapPin, Navigation, PhoneCall } from "lucide-react";
import { clinicInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact | MDP Vet",
  description:
    "Contactează Clinica Veterinară MDP Vet pentru programări telefonice: adresă, număr de telefon și program de funcționare.",
};

export default function ContactPage() {
  const primaryLocation = clinicInfo.locations[0];

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">Contact</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--ink)]">Programează o consultație la MDP Vet</h1>
        <p className="mt-4 max-w-3xl text-[var(--ink-soft)]">
          Programările se fac telefonic. Sună direct în locația MDP Vet Titan, iar colegii din recepție îți confirmă rapid
          intervalul disponibil pentru consultație.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--ink)]">{clinicInfo.fullName}</h2>
            <ul className="mt-4 space-y-3 text-sm text-[var(--ink-soft)]">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-[var(--brand)]" aria-hidden />
                <span>{clinicInfo.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <PhoneCall className="mt-0.5 h-4 w-4 text-[var(--brand)]" aria-hidden />
                <span>
                  Telefon recepție:{" "}
                  <a href={clinicInfo.phoneHref} className="font-semibold text-[var(--brand)] hover:text-[var(--brand-deep)]">
                    {clinicInfo.phoneDisplay}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-[var(--brand)]" aria-hidden />
                <span>
                  Email:{" "}
                  <a
                    href={`mailto:${clinicInfo.email}`}
                    className="font-semibold text-[var(--brand)] hover:text-[var(--brand-deep)]"
                  >
                    {clinicInfo.email}
                  </a>
                </span>
              </li>
            </ul>

            <h3 className="mt-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[var(--ink)]">
              <Clock3 className="h-4 w-4 text-[var(--brand)]" aria-hidden />
              Program de funcționare
            </h3>
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
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--ink-soft)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
            >
              <Navigation className="h-4 w-4" aria-hidden />
              Deschide în Google Maps
            </a>
          </aside>

          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--ink)]">Programări telefonice</h2>
            <p className="mt-2 text-sm text-[var(--ink-soft)]">
              Sună direct recepția MDP Vet Titan. Pentru urgențe, menționează de la început simptomele principale.
            </p>
            <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--muted)] p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--ink-soft)]">{primaryLocation?.name ?? "MDP Vet Titan - Strada Armeniș"}</p>
              <a
                href={clinicInfo.phoneHref}
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-5 py-2.5 text-base font-semibold text-white transition hover:bg-[var(--brand-deep)]"
              >
                <PhoneCall className="h-4 w-4" aria-hidden />
                {clinicInfo.phoneDisplay}
              </a>
              <p className="mt-2 text-xs text-[var(--ink-soft)]">Apasă pentru apel</p>
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
