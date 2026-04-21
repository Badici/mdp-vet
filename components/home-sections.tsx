import Link from "next/link";
import { services, testimonials, whyChooseUs } from "@/lib/site-data";
import { ServiceCard } from "@/components/service-card";

export function WhyChooseSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">De ce aleg familiile MDP Vet</h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Construim încredere prin rezultate medicale solide, comunicare transparentă și atenție reală pentru pacient.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesPreviewSection() {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Specialități medicale veterinare</h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Servicii structurate pe departamente pentru diagnostic precis și tratamente eficiente.
            </p>
          </div>
          <Link href="/servicii" className="text-sm font-semibold text-emerald-700 transition hover:text-emerald-800">
            Vezi toate serviciile →
          </Link>
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
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-600 p-8 text-white md:grid-cols-2 md:p-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Despre noi</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">O familie cu peste 7.000 de membri</h2>
          <p className="mt-4 text-sm leading-7 text-white/90">
            MDP Vet este un concept construit din pasiune și dragoste pentru animale, alături de o echipă de
            profesioniști care tratează fiecare pacient cu responsabilitate și compasiune.
          </p>
        </div>
        <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
          <p className="text-sm leading-7 text-white/95">
            Acoperim medicină internă, cardiologie, nefrologie, dermatologie, oftalmologie, boli infecțioase,
            imagistică și chirurgie generală, cu planuri de tratament adaptate fiecărui caz.
          </p>
          <Link
            href="/despre-noi"
            className="mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
          >
            Descoperă povestea noastră
          </Link>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Ce spun clienții noștri</h2>
        <p className="mt-3 max-w-2xl text-slate-600">Încrederea familiilor care ne aleg în fiecare zi este prioritatea noastră.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.author} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <blockquote className="text-sm leading-7 text-slate-700">“{item.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-slate-900">{item.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactCtaSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl md:p-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Programare rapidă</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Ai nevoie de o consultație?</h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Contactează-ne pentru programări și evaluări de specialitate. Confirmarea finală a programării se face
              telefonic de către recepție.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex w-fit rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Mergi la pagina de contact
          </Link>
        </div>
      </div>
    </section>
  );
}
