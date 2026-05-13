import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cabinetGalleryPhotos, cabinetHero, teamMembers } from "@/lib/site-data";
import { TeamMemberCard } from "@/components/team-member-card";

export const metadata: Metadata = {
  title: "Despre noi | MDP Vet",
  description:
    "Află povestea clinicii veterinare MDP Vet: o echipă de specialiști, servicii multidisciplinare și grijă reală pentru animale.",
};

const stats: { label: string; value: string; labelNote?: string }[] = [
  { label: "Pacienți în comunitatea MDP Vet", value: "7.000+" },
  { label: "Membri ai echipei în această secțiune", value: "5" },
  {
    label: "Program extins în timpul săptămânii",
    value: "09:00 - 21:00",
    labelNote: "(sâmbătă: 9-14)",
  },
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
                Echipa din locația Titan (Strada Armeniș) oferă consultații și servicii veterinare complete, cu accente în medicină
                internă, chirurgie, oftalmologie și îngrijire de urgență, în funcție de nevoile pacientului.
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
              src={cabinetHero.src}
              alt={cabinetHero.alt}
              width={cabinetHero.width}
              height={cabinetHero.height}
              className="h-full min-h-72 w-full object-cover"
              priority
            />
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
              <p className="text-3xl font-bold text-[var(--ink)]">{item.value}</p>
              <p className="mt-1 text-sm leading-snug text-[var(--ink-soft)]">
                {item.label}
                {item.labelNote ? (
                  <>
                    {" "}
                    <span className="text-xs text-[var(--ink-soft)]">{item.labelNote}</span>
                  </>
                ) : null}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[var(--border)] pb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">Cabinetul nostru</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--ink)] md:text-3xl">
                Spațiul clinicii în imagini
              </h2>
              <p className="mt-3 max-w-2xl text-[var(--ink-soft)]">
                Locația MDP Vet din Titan (Strada Armeniș) — mediu curat, echipat pentru consultații, tratamente și monitorizare în siguranță.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cabinetGalleryPhotos.map((photo) => (
              <figure
                key={photo.src}
                className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="aspect-[4/3] w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                />
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[var(--border)] pb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">Echipa clinică</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--ink)] md:text-3xl">
                Cunoaște medicii și tehnicienii MDP Vet
              </h2>
            </div>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
