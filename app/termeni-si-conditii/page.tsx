import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Termeni și condiții | MDP Vet",
  description: "Termenii și condițiile de utilizare a site-ului Clinicii Veterinare MDP Vet.",
};

export default function TermeniSiConditiiPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Termeni și condiții"
      description="Conținutul acestei pagini va fi actualizat în curând cu textul final furnizat de echipa MDP Vet."
    >
      <p>
        Această pagină va include termenii și condițiile de utilizare a site-ului mdp-vet.ro, inclusiv informații
        relevante despre programări, comunicare și servicii medicale veterinare.
      </p>
      <p>
        Pentru clarificări, ne puteți contacta la{" "}
        <a href="mailto:contact@mdp-vet.ro" className="font-medium text-[var(--brand)] hover:text-[var(--brand-deep)]">
          contact@mdp-vet.ro
        </a>
        .
      </p>
    </LegalPage>
  );
}
