import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Regulament de ordine interioară | MDP Vet",
  description: "Regulamentul de ordine interioară al Clinicii Veterinare MDP Vet.",
};

export default function RegulamentDeOrdineInterioaraPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Regulament de ordine interioară"
      description="Conținutul acestei pagini va fi actualizat în curând cu textul final furnizat de echipa MDP Vet."
    >
      <p>
        Această pagină va prezenta regulile de conduită și procedurile aplicabile în cadrul clinicii, pentru siguranța
        pacienților, a aparținătorilor și a echipei medicale.
      </p>
      <p>
        Pentru întrebări, ne puteți contacta la{" "}
        <a href="mailto:contact@mdp-vet.ro" className="font-medium text-[var(--brand)] hover:text-[var(--brand-deep)]">
          contact@mdp-vet.ro
        </a>
        .
      </p>
    </LegalPage>
  );
}
