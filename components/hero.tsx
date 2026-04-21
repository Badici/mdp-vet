import Link from "next/link";
import { trustPoints } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-14 sm:px-6 lg:px-8">
      <div className="hero-blob absolute -left-10 top-0 h-56 w-56 rounded-full bg-emerald-300/25 blur-3xl" />
      <div className="hero-blob absolute -right-8 top-20 h-64 w-64 rounded-full bg-cyan-200/30 blur-3xl" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800">
            Clinica veterinară din Titan
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Grijă medicală avansată pentru sănătatea companionului tău
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Diagnostic, tratament și monitorizare într-o clinică modernă, cu medici dedicați și o abordare completă,
            de la prevenție la specialități avansate.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Programează acum
            </Link>
            <Link
              href="/servicii"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-100"
            >
              Vezi servicii
            </Link>
          </div>
          <ul className="mt-8 space-y-2 text-sm text-slate-600">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-emerald-100 via-white to-cyan-100 p-4 shadow-xl">
          <div className="flex min-h-80 items-end rounded-2xl border border-white/60 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.25),_transparent_60%),linear-gradient(140deg,#dff7ef_0%,#f4f9ff_45%,#e9f8ff_100%)] p-6">
            <div className="rounded-2xl bg-white/80 p-4 backdrop-blur">
              <p className="text-sm font-semibold text-slate-900">Imagine placeholder</p>
              <p className="mt-1 text-xs text-slate-600">
                Înlocuiește cu fotografie premium din clinică / echipă medicală / pacient.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
