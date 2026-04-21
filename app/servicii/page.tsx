import type { Metadata } from "next";
import Image from "next/image";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Servicii medicale veterinare | MDP Vet",
  description:
    "Descoperă serviciile medicale veterinare MDP Vet: medicină internă, cardiologie, dermatologie, imagistică, chirurgie și alte specialități.",
};

export default function ServiciiPage() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">Departamente medicale</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--ink)]">Servicii medicale veterinare</h1>
              <p className="mt-4 max-w-3xl text-[var(--ink-soft)]">
                Fiecare pacient este unic, iar echipa noastră abordează fiecare caz în funcție de complexitate.
                Structurăm serviciile pe specialități pentru a asigura prevenția, diagnosticul de certitudine și
                tratamentul adecvat.
              </p>
            </div>
            <Image
              src="/images/mdp/dr-monica-bilan.jpg"
              alt="Servicii medicale MDP Vet"
              width={1920}
              height={1280}
              className="h-full min-h-72 w-full object-cover"
            />
          </div>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
