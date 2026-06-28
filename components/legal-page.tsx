import type { ReactNode } from "react";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function LegalPage({ eyebrow, title, description, children }: LegalPageProps) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--ink)]">{title}</h1>
        {description ? <p className="mt-4 text-[var(--ink-soft)]">{description}</p> : null}
        <div className="prose-legal mt-10 space-y-4 text-sm leading-7 text-[var(--ink-soft)] [&_a]:font-medium [&_a]:text-[var(--brand)] [&_a]:hover:text-[var(--brand-deep)] [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-[var(--ink)] [&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-[var(--ink)] [&_li]:ml-5 [&_li]:list-disc [&_table]:mt-4 [&_table]:w-full [&_table]:border-collapse [&_table]:text-left [&_td]:border [&_td]:border-[var(--border)] [&_td]:px-3 [&_td]:py-2 [&_th]:border [&_th]:border-[var(--border)] [&_th]:bg-[var(--muted)] [&_th]:px-3 [&_th]:py-2 [&_th]:font-semibold [&_th]:text-[var(--ink)] [&_ul]:space-y-2">
          {children}
        </div>
      </div>
    </section>
  );
}

type LegalTableProps = {
  headers: string[];
  rows: string[][];
};

export function LegalTable({ headers, rows }: LegalTableProps) {
  return (
    <div className="overflow-x-auto">
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join("|")}>
              {row.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
