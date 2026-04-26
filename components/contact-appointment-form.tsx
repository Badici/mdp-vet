"use client";

import { FormEvent, useMemo, useState } from "react";
import { clinicInfo, services } from "@/lib/site-data";

type FormValues = {
  ownerName: string;
  ownerEmail: string;
  ownerPhone: string;
  patientName: string;
  firstConsult: "first" | "followup";
  species: string;
  desiredDate: string;
  department: string;
  notes: string;
};

const speciesOptions = ["Câine", "Pisică", "Iepure", "Pasăre", "Altă specie"];

const defaultDepartment = services[0]?.name ?? "Medicină generală";

const initialValues: FormValues = {
  ownerName: "",
  ownerEmail: "",
  ownerPhone: "",
  patientName: "",
  firstConsult: "first",
  species: "",
  desiredDate: "",
  department: defaultDepartment,
  notes: "",
};

function formatDateForEmail(rawDate: string) {
  if (!rawDate) return "-";
  const date = new Date(`${rawDate}T00:00:00`);
  if (Number.isNaN(date.getTime())) return rawDate;

  return new Intl.DateTimeFormat("ro-RO", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

export function ContactAppointmentForm() {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const minDate = useMemo(() => new Date().toISOString().split("T")[0] ?? "", []);

  function updateField<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setFormValues((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const firstConsultLabel =
      formValues.firstConsult === "first" ? "Este primul consult la MDP Vet" : "Avem fișă / Recontrol";
    const emailSubject = `Programare consultație - ${formValues.patientName || "Pacient nou"}`;

    const emailBody = [
      "Salut,",
      "",
      "Vreau să fac o programare la Clinica Veterinară MDP VET.",
      "",
      `Numele proprietarului: ${formValues.ownerName}`,
      `Email proprietar: ${formValues.ownerEmail}`,
      `Telefon proprietar: ${formValues.ownerPhone}`,
      `Nume pacient: ${formValues.patientName}`,
      `Tip consult: ${firstConsultLabel}`,
      `Specie pacient: ${formValues.species}`,
      `Data dorită pentru consult: ${formatDateForEmail(formValues.desiredDate)}`,
      `Departament medical: ${formValues.department || "-"}`,
      "",
      "Informații suplimentare:",
      formValues.notes.trim() || "-",
      "",
      "Mulțumesc!",
    ].join("\n");

    const mailtoUrl = `mailto:${clinicInfo.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoUrl;
    setTimeout(() => setIsSubmitting(false), 500);
  }

  return (
    <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-[var(--ink)]">Contactează-ne pentru o programare</h2>
      <p className="mt-2 text-sm text-[var(--ink-soft)]">
        Completează formularul, iar la trimitere îți deschidem aplicația de email implicită cu toate datele deja completate.
      </p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-[var(--ink)]">Numele tău (*)</span>
          <input
            type="text"
            name="ownerName"
            required
            value={formValues.ownerName}
            onChange={(event) => updateField("ownerName", event.target.value)}
            className="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-2.5 text-sm text-[var(--ink)] outline-none ring-[var(--brand)] transition focus:ring-2"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-[var(--ink)]">Adresa de email (*)</span>
          <input
            type="email"
            name="ownerEmail"
            required
            value={formValues.ownerEmail}
            onChange={(event) => updateField("ownerEmail", event.target.value)}
            className="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-2.5 text-sm text-[var(--ink)] outline-none ring-[var(--brand)] transition focus:ring-2"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-[var(--ink)]">Telefonul tău (*)</span>
          <input
            type="tel"
            name="ownerPhone"
            required
            value={formValues.ownerPhone}
            onChange={(event) => updateField("ownerPhone", event.target.value)}
            className="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-2.5 text-sm text-[var(--ink)] outline-none ring-[var(--brand)] transition focus:ring-2"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-[var(--ink)]">Nume pacient (*)</span>
          <input
            type="text"
            name="patientName"
            required
            value={formValues.patientName}
            onChange={(event) => updateField("patientName", event.target.value)}
            className="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-2.5 text-sm text-[var(--ink)] outline-none ring-[var(--brand)] transition focus:ring-2"
          />
        </label>

        <fieldset className="rounded-2xl border border-[var(--border)] p-4">
          <legend className="px-1 text-sm font-semibold text-[var(--ink)]">Tip consultație (*)</legend>
          <div className="mt-2 flex flex-col gap-2 text-sm text-[var(--ink-soft)]">
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="firstConsult"
                value="first"
                checked={formValues.firstConsult === "first"}
                onChange={() => updateField("firstConsult", "first")}
              />
              Este primul consult la MDP Vet
            </label>
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="firstConsult"
                value="followup"
                checked={formValues.firstConsult === "followup"}
                onChange={() => updateField("firstConsult", "followup")}
              />
              Avem fișă / Recontrol
            </label>
          </div>
        </fieldset>

        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-[var(--ink)]">Selectează ce specie este pacientul (*)</span>
          <select
            name="species"
            required
            value={formValues.species}
            onChange={(event) => updateField("species", event.target.value)}
            className="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-2.5 text-sm text-[var(--ink)] outline-none ring-[var(--brand)] transition focus:ring-2"
          >
            <option value="">Alege o specie</option>
            {speciesOptions.map((species) => (
              <option key={species} value={species}>
                {species}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-[var(--ink)]">Selectează data în care dorești consultul (*)</span>
          <input
            type="date"
            name="desiredDate"
            required
            min={minDate}
            value={formValues.desiredDate}
            onChange={(event) => updateField("desiredDate", event.target.value)}
            className="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-2.5 text-sm text-[var(--ink)] outline-none ring-[var(--brand)] transition focus:ring-2"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-[var(--ink)]">Selectează un departament medical</span>
          <select
            name="department"
            value={formValues.department}
            onChange={(event) => updateField("department", event.target.value)}
            className="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-2.5 text-sm text-[var(--ink)] outline-none ring-[var(--brand)] transition focus:ring-2"
          >
            {services.map((service) => (
              <option key={service.name} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-[var(--ink)]">Lasă-ne câteva informații</span>
          <textarea
            name="notes"
            rows={5}
            value={formValues.notes}
            onChange={(event) => updateField("notes", event.target.value)}
            className="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-2.5 text-sm text-[var(--ink)] outline-none ring-[var(--brand)] transition focus:ring-2"
          />
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-deep)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Se pregătește emailul..." : "Trimite mesaj"}
        </button>
      </form>

      <p className="mt-4 text-xs text-[var(--ink-soft)]">
        Câmpurile marcate cu (*) sunt obligatorii. Dacă întâmpinați erori vă rugăm să ne contactați telefonic. Completarea
        formularului nu garantează o programare. Programarea se consideră efectuată doar după confirmarea telefonică din partea
        recepției.
      </p>
      <p className="mt-3 text-sm text-[var(--ink-soft)]">
        Dacă ești interesat de o programare la clinica MDP Vet, completează formularul și te vom contacta în cel mai scurt timp
        pentru a stabili împreună o întâlnire pentru animaluțul tău.
      </p>
      <p className="mt-2 text-sm text-[var(--ink-soft)]">
        În câmpul de observații ne poți lăsa detalii relevante despre animăluț sau despre problema de sănătate observată.
      </p>
      <p className="mt-2 text-sm text-[var(--ink-soft)]">
        Programarea efectivă va fi confirmată telefonic de personalul din recepție, care vă comunică data și ora exactă.
      </p>
      <p className="mt-2 text-sm font-medium text-[var(--ink)]">Te așteptăm cu drag și profesionalism. Clinica Veterinară MDP VET</p>
    </div>
  );
}
