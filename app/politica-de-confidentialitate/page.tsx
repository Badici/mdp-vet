import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Politica de confidențialitate | MDP Vet",
  description: "Politica de confidențialitate și protecția datelor personale la Clinica Veterinară MDP Vet.",
};

export default function PoliticaDeConfidentialitatePage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Politica de confidențialitate"
      description="Conținutul acestei pagini va fi actualizat în curând cu textul final furnizat de echipa MDP Vet."
    >
      <p>
        Această pagină va detalia modul în care colectăm, utilizăm și protejăm datele personale ale vizitatorilor și
        clienților clinicii.
      </p>
      <p>
        Pentru solicitări legate de datele personale, ne puteți contacta la{" "}
        <a href="mailto:contact@mdp-vet.ro" className="font-medium text-[var(--brand)] hover:text-[var(--brand-deep)]">
          contact@mdp-vet.ro
        </a>
        .
      </p>
    </LegalPage>
  );
}
