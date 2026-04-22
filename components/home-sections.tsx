import Image from "next/image";
import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { clinicInfo, services, teamMembers, whyChooseUs } from "@/lib/site-data";
import { ServiceCard } from "@/components/service-card";

export function WhyChooseSection() {
  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_20%,rgba(241,76,28,0.09),transparent_35%)]" />
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">Încredere medicală</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
              De ce aleg familiile MDP Vet
            </h2>
            <p className="mt-3 max-w-2xl text-[var(--ink-soft)]">
              Construim încredere prin rezultate medicale solide, comunicare transparentă și atenție reală pentru pacient.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm text-[var(--ink-soft)] shadow-sm">
            Peste <span className="font-bold text-[var(--ink)]">7.000</span> de membri în familia MDP Vet
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, idx) => (
            <article
              key={item.title}
              className="animate-fade-up rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-50)] text-sm font-bold text-[var(--brand)]">
                {idx + 1}
              </span>
              <h3 className="text-lg font-semibold text-[var(--ink)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesPreviewSection() {
  return (
    <section className="bg-[var(--muted)] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">Specialități MDP Vet</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
              Servicii medicale veterinare
            </h2>
            <p className="mt-3 max-w-2xl text-[var(--ink-soft)]">
              Servicii structurate pe departamente pentru diagnostic precis și tratamente eficiente.
            </p>
            <Link href="/servicii" className="mt-5 inline-flex text-sm font-semibold text-[var(--brand)] transition hover:text-[var(--brand-deep)]">
              Vezi toate serviciile →
            </Link>
          </div>
          <div className="animate-fade-up overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-lg">
            <Image
              src="/images/mdp/clinica-bg.jpg"
              alt="Clinica MDP Vet"
              width={1920}
              height={1280}
              className="h-52 w-full rounded-2xl object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-[var(--ink-soft)]">
                Medicină internă, cardiologie, nefrologie, dermatologie, oftalmologie, boli infecțioase, imagistică și chirurgie.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutPreviewSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 rounded-[2rem] bg-[var(--ink)] p-8 text-white md:grid-cols-2 md:p-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Despre noi</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">O familie cu peste 7.000 de membri</h2>
          <p className="mt-4 text-sm leading-7 text-white/90">
            MDP Vet este un concept construit din pasiune și dragoste pentru animale, alături de o echipă de
            profesioniști care tratează fiecare pacient cu responsabilitate și compasiune.
          </p>
          <p className="mt-4 text-sm leading-7 text-white/90">
            Echipa noastră acoperă medicină internă, cardiologie, oftalmologie și chirurgie generală, cu planuri de
            tratament adaptate fiecărui caz.
          </p>
          <Link
            href="/despre-noi"
            className="mt-5 inline-flex rounded-full bg-[var(--brand)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--brand-deep)]"
          >
            Descoperă povestea noastră
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <Image
            src="/images/mdp/dr-miruna-chiriac.jpg"
            alt="Dr. Miruna Chiriac"
            width={1200}
            height={800}
            className="h-44 w-full rounded-2xl border border-white/20 object-cover"
          />
          <Image
            src="/images/mdp/dr-georgiana-voicu.jpg"
            alt="Dr. Georgiana Voicu"
            width={1200}
            height={800}
            className="h-44 w-full rounded-2xl border border-white/20 object-cover"
          />
          <Image
            src="/images/mdp/dr-madalina-ochirosii.jpg"
            alt="Dr. Mădălina Ochiroșii"
            width={1200}
            height={800}
            className="h-44 w-full rounded-2xl border border-white/20 object-cover"
          />
          <Image
            src="/images/mdp/dr-alexandru-poenaru.jpg"
            alt="Dr. Alexandru Poenaru"
            width={1200}
            height={800}
            className="h-44 w-full rounded-2xl border border-white/20 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export function TeamSection() {
  return (
    <section className="bg-[var(--muted)] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">Echipa MDP Vet</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--ink)]">Fă cunoștință cu medicii noștri</h2>
          </div>
          <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-soft)]">
            Specialiști pe departamente
          </span>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <article key={member.name} className="group overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">
              <div className="overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={1920}
                  height={1280}
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[var(--ink)]">{member.name}</h3>
                <p className="mt-1 text-sm text-[var(--ink-soft)]">{member.specialties}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactCtaSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-6 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-xl md:grid-cols-[1.1fr_0.9fr] md:p-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">Programare rapidă</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--ink)]">Ai nevoie de o consultație?</h2>
          <p className="mt-3 max-w-2xl text-[var(--ink-soft)]">
            Contactează-ne pentru programări și evaluări de specialitate. Confirmarea finală a programării se face
            telefonic de către recepție.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {clinicInfo.locations.map((location) => (
              <a
                key={location.name}
                href={location.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
              >
                <PhoneCall className="h-4 w-4" aria-hidden />
                Sună {location.name}
              </a>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-5 inline-flex w-fit rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--brand-deep)]"
          >
            Mergi la pagina de contact
          </Link>
        </div>
        <div className="overflow-hidden rounded-3xl">
          <Image
            src="/images/mdp/contact-cover.jpg"
            alt="Contact MDP Vet"
            width={1920}
            height={1200}
            className="h-full min-h-52 w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
