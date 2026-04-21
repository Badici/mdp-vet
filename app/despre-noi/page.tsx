import type { Metadata } from "next";
import Link from "next/link";

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
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Despre MDP Vet</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
              O familie construită din pasiune și dragoste pentru animale
            </h1>
            <p className="mt-5 text-slate-600">
              Clinica Veterinară MDP Vet este un concept creat pentru a oferi îngrijire medicală veterinară la standarde
              ridicate, într-un mediu în care pacientul și aparținătorul primesc atenție reală. Suntem o echipă de
              profesioniști și o comunitate de mii de animăluțe sănătoase astăzi datorită prevenției, diagnosticului și
              tratamentelor corecte.
            </p>
            <p className="mt-4 text-slate-600">
              Acoperim o gamă extinsă de specialități medicale veterinare: medicină internă, cardiologie, nefrologie,
              dermatologie, oftalmologie, boli infecțioase, imagistică, chirurgie generală și endocrinologie.
            </p>
            <p className="mt-4 text-lg font-semibold text-slate-900">Ați venit bine. Și veți pleca de la noi și mai bine.</p>
            <Link
              href="/contact"
              className="mt-7 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Programează o consultație
            </Link>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
            <div className="rounded-2xl bg-gradient-to-br from-emerald-100 to-cyan-100 p-6">
              <p className="text-sm font-semibold text-slate-900">Imagine placeholder</p>
              <p className="mt-1 text-xs text-slate-600">Adaugă fotografie cu echipa medicală / clinică.</p>
            </div>
            <div className="mt-6 space-y-4">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-2xl font-bold text-slate-900">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
