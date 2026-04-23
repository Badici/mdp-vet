import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import { heroHighlights, trustPoints } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="relative isolate -mt-20 flex min-h-screen items-end overflow-hidden bg-[var(--ink)] px-4 pb-12 pt-32 sm:-mt-24 sm:px-6 sm:pt-36 lg:px-8 lg:pb-6">
      <Image
        src="/hero.png"
        alt="Banner principal MDP Vet"
        fill
        priority
        className="hero-cinematic hidden object-cover md:block"
        sizes="100vw"
      />
      <div className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(180deg,rgba(11,10,10,0.08)_0%,rgba(11,10,10,0.34)_58%,rgba(11,10,10,0.62)_100%)] md:block lg:bg-[linear-gradient(180deg,rgba(11,10,10,0.12)_0%,rgba(11,10,10,0.34)_58%,rgba(11,10,10,0.62)_100%)]" />
      <div className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(circle_at_20%_15%,rgba(241,76,28,0.2),transparent_34%),radial-gradient(circle_at_80%_8%,rgba(255,255,255,0.08),transparent_30%)] md:block lg:bg-[radial-gradient(circle_at_20%_15%,rgba(241,76,28,0.3),transparent_32%),radial-gradient(circle_at_80%_8%,rgba(255,255,255,0.12),transparent_30%)]" />
      <div className="absolute left-4 right-4 top-24 z-10 md:hidden">
        <div className="overflow-hidden rounded-2xl border border-white/20 bg-black/20 p-2 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.75)]">
          <Image
            src="/animalute.png"
            alt="Animalele din bannerul MDP Vet"
            width={1536}
            height={1024}
            priority
            className="h-auto w-full rounded-xl object-contain"
            sizes="100vw"
          />
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="animate-fade-up max-w-4xl rounded-3xl border border-white/20 bg-black/30 p-6 backdrop-blur-sm lg:bg-black/20 lg:backdrop-blur-none md:p-8">
          <div className="flex flex-wrap gap-2 lg:gap-1.5">
            {heroHighlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white lg:px-3 lg:py-1 lg:text-[11px]"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3 lg:mt-5 lg:gap-2">
            <Link
              href="/contact"
              className="cta-glow inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-8 py-4 text-sm font-semibold text-white shadow-[0_14px_30px_-14px_rgba(241,76,28,0.9)] transition hover:-translate-y-0.5 hover:bg-[var(--brand-deep)] lg:px-6 lg:py-3 lg:text-xs"
            >
              <PhoneCall className="h-4 w-4" aria-hidden />
              Sună pentru programare
            </Link>
            <Link
              href="/servicii"
              className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white/95 transition hover:border-white/50 hover:bg-white/20 lg:px-5 lg:py-3 lg:text-xs"
            >
              Vezi servicii
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>

        <ul className="animate-fade-up-delay mt-4 grid gap-2 text-sm text-slate-200 sm:grid-cols-3">
          {trustPoints.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-[2px] lg:bg-white/5 lg:backdrop-blur-none"
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
