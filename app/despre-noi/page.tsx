import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Despre noi | MDP Vet",
  description:
    "Află povestea clinicii veterinare MDP Vet: o echipă de specialiști, servicii multidisciplinare și grijă reală pentru animale.",
};

const stats = [
  { label: "Pacienți în comunitatea MDP Vet", value: "7.000+" },
  { label: "Specialități medicale", value: "9" },
  { label: "Program extins în timpul săptămânii", value: "09:00 - 21:00" },
];

export default function DespreNoiPage() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]">
          <div className="grid items-stretch lg:grid-cols-[1fr_1fr]">
            <div className="p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">Despre MDP Vet</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--ink)]">
                O familie construită din pasiune și dragoste pentru animale
              </h1>
              <p className="mt-5 text-[var(--ink-soft)]">
                Clinica Veterinară MDP Vet este un concept creat pentru a oferi îngrijire medicală veterinară la standarde
                ridicate, într-un mediu în care pacientul și aparținătorul primesc atenție reală.
              </p>
              <p className="mt-4 text-[var(--ink-soft)]">
                Acoperim o gamă extinsă de specialități medicale veterinare: medicină internă, cardiologie, nefrologie,
                dermatologie, oftalmologie, boli infecțioase, imagistică, chirurgie generală și endocrinologie.
              </p>
              <p className="mt-4 text-lg font-semibold text-[var(--ink)]">Ați venit bine. Și veți pleca de la noi și mai bine.</p>
              <Link
                href="/contact"
                className="mt-7 inline-flex rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-deep)]"
              >
                Programează o consultație
              </Link>
            </div>
            <Image
              src="/images/mdp/clinica-bg.jpg"
              alt="Clinica MDP Vet"
              width={1920}
              height={1280}
              className="h-full min-h-72 w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
              <p className="text-3xl font-bold text-[var(--ink)]">{item.value}</p>
              <p className="mt-1 text-sm text-[var(--ink-soft)]">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--ink)]">Medicii noștri</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {teamMembers.slice(0, 6).map((member) => (
              <article key={member.name} className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]">
                <Image src={member.image} alt={member.name} width={1200} height={800} className="h-56 w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-[var(--ink)]">{member.name}</h3>
                  <p className="text-sm text-[var(--ink-soft)]">{member.specialties}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
