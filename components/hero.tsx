import Image from "next/image";
import Link from "next/link";
import { heroHighlights, trustPoints } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="relative isolate -mt-20 flex min-h-screen items-end overflow-hidden bg-[var(--ink)] px-4 pb-12 pt-32 sm:-mt-24 sm:px-6 sm:pt-36 lg:px-8">
      <Image
        src="/hero.png"
        alt="Banner principal MDP Vet"
        fill
        priority
        className="hero-cinematic object-cover"
        sizes="100vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0.2)_0%,rgba(11,10,10,0.55)_58%,rgba(11,10,10,0.9)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(241,76,28,0.3),transparent_32%),radial-gradient(circle_at_80%_8%,rgba(255,255,255,0.12),transparent_30%)]" />
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="animate-fade-up max-w-4xl rounded-3xl border border-white/20 bg-black/30 p-6 backdrop-blur-md md:p-8">
          <div className="flex flex-wrap gap-2">
            {heroHighlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="cta-glow rounded-full bg-[var(--brand)] px-8 py-4 text-sm font-semibold text-white shadow-[0_14px_30px_-14px_rgba(241,76,28,0.9)] transition hover:-translate-y-0.5 hover:bg-[var(--brand-deep)]"
            >
              Sună pentru programare
            </Link>
            <Link
              href="/servicii"
              className="rounded-full border border-white/35 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white/95 transition hover:border-white/50 hover:bg-white/20"
            >
              Vezi servicii
            </Link>
          </div>
        </div>

        <ul className="animate-fade-up-delay mt-4 grid gap-2 text-sm text-slate-200 sm:grid-cols-3">
          {trustPoints.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-sm"
            >
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--brand)]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
