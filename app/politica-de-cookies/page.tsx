import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Politica de cookies | MDP Vet",
  description: "Politica de utilizare a cookie-urilor pe site-ul Clinicii Veterinare MDP Vet.",
};

export default function PoliticaDeCookiesPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Politica de cookies"
      description="Conținutul acestei pagini va fi actualizat în curând cu textul final furnizat de echipa MDP Vet."
    >
      <p>
        Această pagină va descrie tipurile de cookie-uri utilizate pe mdp-vet.ro, scopul acestora și modul în care
        puteți gestiona preferințele dumneavoastră.
      </p>
      <p>
        Pentru întrebări legate de confidențialitate sau cookie-uri, ne puteți contacta la{" "}
        <a href="mailto:contact@mdp-vet.ro" className="font-medium text-[var(--brand)] hover:text-[var(--brand-deep)]">
          contact@mdp-vet.ro
        </a>
        .
      </p>
    </LegalPage>
  );
}
