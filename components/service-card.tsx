import type { Service } from "@/lib/site-data";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">{service.availability}</p>
      <h3 className="mt-2 text-xl font-semibold text-slate-900">{service.name}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
    </article>
  );
}
