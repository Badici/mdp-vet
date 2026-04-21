import type { Metadata } from "next";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Servicii medicale veterinare | MDP Vet",
  description:
    "Descoperă serviciile medicale veterinare MDP Vet: medicină internă, cardiologie, dermatologie, imagistică, chirurgie și alte specialități.",
};

export default function ServiciiPage() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Departamente medicale</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">Servicii medicale veterinare</h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          Fiecare pacient este unic, iar echipa noastră abordează fiecare caz în funcție de complexitate. Structurăm
          serviciile pe specialități pentru a asigura prevenția, diagnosticul de certitudine și tratamentul adecvat.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
