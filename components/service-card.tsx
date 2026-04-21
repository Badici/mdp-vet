import type { Service } from "@/lib/site-data";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--brand)]/70 to-transparent opacity-50 transition group-hover:opacity-100" />
      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--brand)]">{service.availability}</p>
      <h3 className="mt-2 text-xl font-semibold text-[var(--ink)]">{service.name}</h3>
      <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">{service.description}</p>
    </article>
  );
}
