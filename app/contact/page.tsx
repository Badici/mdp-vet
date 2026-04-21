import type { Metadata } from "next";
import { clinicInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact | MDP Vet",
  description:
    "Contactează Clinica Veterinară MDP Vet Titan pentru programări: adresă, telefon, email și program de funcționare.",
};

export default function ContactPage() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Contact</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">Programează o consultație la MDP Vet</h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          Dacă ai nevoie de o consultație de specialitate pentru animăluțul tău, completează datele de contact sau
          sună-ne direct. Programarea este considerată efectuată după confirmarea telefonică din partea recepției.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">{clinicInfo.fullName}</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>{clinicInfo.address}</li>
              <li>
                Telefon:{" "}
                <a href={clinicInfo.phoneHref} className="font-semibold text-emerald-700 hover:text-emerald-800">
                  {clinicInfo.phoneDisplay}
                </a>
              </li>
              <li>
                Email:{" "}
                <a href={`mailto:${clinicInfo.email}`} className="font-semibold text-emerald-700 hover:text-emerald-800">
                  {clinicInfo.email}
                </a>
              </li>
            </ul>

            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-slate-900">Program de funcționare</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {clinicInfo.schedule.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </aside>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Trimite o solicitare de programare</h2>
            <form className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="sm:col-span-1">
                <span className="mb-1.5 block text-sm font-medium text-slate-700">Nume și prenume</span>
                <input
                  className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none ring-emerald-300 transition focus:ring"
                  type="text"
                  placeholder="Ex: Popescu Ana"
                />
              </label>
              <label className="sm:col-span-1">
                <span className="mb-1.5 block text-sm font-medium text-slate-700">Telefon</span>
                <input
                  className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none ring-emerald-300 transition focus:ring"
                  type="tel"
                  placeholder="07xx xxx xxx"
                />
              </label>
              <label className="sm:col-span-2">
                <span className="mb-1.5 block text-sm font-medium text-slate-700">Email</span>
                <input
                  className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none ring-emerald-300 transition focus:ring"
                  type="email"
                  placeholder="adresa@email.ro"
                />
              </label>
              <label className="sm:col-span-2">
                <span className="mb-1.5 block text-sm font-medium text-slate-700">Detalii caz</span>
                <textarea
                  className="min-h-28 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none ring-emerald-300 transition focus:ring"
                  placeholder="Descrie simptomele sau motivul consultației."
                />
              </label>
              <div className="sm:col-span-2">
                <button
                  type="button"
                  className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Trimite solicitarea
                </button>
                <p className="mt-3 text-xs text-slate-500">
                  Placeholder formular: integrarea cu backend/CRM de programări se poate face ulterior.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
