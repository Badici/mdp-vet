import type { ReactNode } from "react";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function LegalPage({ eyebrow, title, description, children }: LegalPageProps) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--ink)]">{title}</h1>
        <p className="mt-4 text-[var(--ink-soft)]">{description}</p>
        <div className="prose-legal mt-10 space-y-4 text-sm leading-7 text-[var(--ink-soft)]">{children}</div>
      </div>
    </section>
  );
}
