import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Politica de confidențialitate | MDP Vet",
  description:
    "Politica de confidențialitate a site-ului mdp-vet.ro, administrat de SC Multi Imunovet SRL.",
};

export default function PoliticaDeConfidentialitatePage() {
  return (
    <LegalPage eyebrow="Legal" title="Politica de confidențialitate">
      <p>
        Site-ul mdp-vet.ro prin proprietarul si administratorul sau SC Multi Imunovet SRL, tel 0374 91 99 99, email{" "}
        <a href="mailto:contact@mdp-vet.ro">contact@mdp-vet.ro</a>, str. Armenis nr.2, Bucuresti, este preocupat de
        pastrarea confidentialitatii datelor dumneavoastra personale, se angajeaza sa nu transmita aceste date catre
        terti si sa foloseasca aceste date doar pentru stabilirea contactului cu dumneavoastra in scopul informarii
        asupra aspectelor legate de functionalitatea siteului sau pentru a raspunde cererilor formulate de
        dumneavoastra.
      </p>

      <h2>Ce sunt datele personale?</h2>
      <p>
        Termenul “date personale“ defineste informatiile unice individuale privind o persoana fizica identificata si
        identificabila denumita “persoana vizata” si se refera la numele, adresa, cod numeric personal, IP, numar de
        telefon, date de localizare, un identificator online sau elemente specific identitatii sale fizice, fiziologice,
        genetice, culturale sau sociale.
      </p>

      <h2>Cum colectam datele personale?</h2>
      <p>
        Prin navigarea pe site-ul mdp-vet.ro se vor colecta automat date privind Ip-ul, sistemul de operare, browserul,
        activitatea de navigare, tipul terminalului folosit si alte date privind modul in care ati interactionat cu
        site-ul. Colectarea se poate face prin folosirea cookie-urilor (vezi{" "}
        <Link href="/politica-de-cookies">Politica de cookie</Link>) sau alte tehnologii similare.
      </p>
      <p>
        De asemenea, se pot colecta date precum nume, prenume, adresa de email, numar de telefon, adresa fizica si
        mesaje, in masura in care dumneavoastra veti furniza in mod voluntar aceste date prin sectiuni ca cea de
        contact, intrebari, reclamatii, mesaje sau comentarii pe site-ul mdp-vet.ro sau prin alte mijloace de
        comunicare directa si indirecta precum email, telefon, aplicatii de comunicare, etc.
      </p>

      <h2>De ce colectam datele personale?</h2>
      <p>
        Pentru buna desfasurare a comunicarii si rezolvarii cererilor sau reclamatiilor, SC Multi Imunovet SRL poate
        prelua datele dumneavoastra personale din formularul de contact sau alte mijloace de comunicare directa si
        indirecta, precum si din sectiunea de mesaje sau comentarii.
      </p>
      <p>
        De asemenea, pentru activitati de marketing prin mijloace de comunicare la distanta (email, sms), si anume
        pentru transmiterea de comunicari comerciale privind serviciile si produsele SC Tazy Vet Servicii Veterinare
        SRL.
      </p>
      <p>
        Totodata, pentru indeplinirea obligatiilor legale, inclusive in materie de legislatie fiscala, SC Tazy Vet
        Servicii Veterinare SRL este obligata sa prelucreze datele dumneavoastra personale. Refuzul dumneavoastra de
        a furniza aceste date are ca rezultat imposibilitatea site-ului mdp-vet.ro precum si a proprietarului si
        administratorul lui, SC Multi Imunovet SRL, in a respecta obligatiile legale ce-I revin, avand drept
        consecinta imposibilitatea de a va oferi serviciile prin intermediul site-ului.
      </p>

      <h2>Cum va exprimati acordul prelucrarii datelor personale?</h2>
      <p>
        Furnizarea datelor personale ale dumneavoastra este voluntara. Acceptarea termenilor si conditiilor de
        utilizare a site-ului reprezinta acceptul dumneavoastra pentru prelucrarea datelor personale. Refuzul
        dumneavoastra poate determina imposibilitatea furnizarii anumitor servicii. Puteti sa va informati asupra
        termenilor si conditiilor <Link href="/termeni-si-conditii">aici</Link>.
      </p>

      <h2>Drepturile persoanei vizate</h2>
      <p>
        Drepturile persoanei vizate prevazute in legislatia in vigoare confera acesteia o serie de drepturi intre
        care:
      </p>
      <ul>
        <li>
          Dreptul la informare, respective dreptul de a primi detalii referitoare la activitatile de prelucrare a
          datelor personale efectuate de catre mdp-vet.ro prin SC Multi Imunovet SRL.
        </li>
        <li>
          Dreptul acces la datele personale prin confirmarea prelucrarii acestora precum si scopul in care se face
          prelucrarea lor.
        </li>
        <li>Dreptul la rectificare in masura in care acestea au fost colectate eronat.</li>
        <li>
          Dreptul de a sterge datele personale (dreptul de a fi uitat) prin stergerea acestora din baza de date le
          cererea persoanei vizate. Totusi, in urma acestei cereri, conform legislatiei in vigoare, dupa anonimizarea
          datelor, este posibila prelucrarea in scopuri statistice.
        </li>
        <li>
          Dreptul la portabilitatea datelor si anume dreptul de a primi aceste date in forma structurata precum si
          dreptul de a fi transmise de catre mdp-vet.ro prin SC Multi Imunovet SRL catre terti operatori de date cu
          caracter personal in conditiile legii.
        </li>
        <li>
          Dreptul de a notifica Autoritatea Nationala de Supraveghere a Prelucrarii Datelor cu Caracter Personal in
          situatia in care considerati necesar acest lucru.
        </li>
      </ul>
      <p>
        Mai multe informatii despre datele cu caracter personal puteti gasi aici (
        <a
          href="https://mfe.gov.ro/informatii-de-interes-public/solicitare-informatii-legislatie/protectia-datelor-cu-caracter-personal-gdpr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://mfe.gov.ro/informatii-de-interes-public/solicitare-informatii-legislatie/protectia-datelor-cu-caracter-personal-gdpr/
        </a>
        )
      </p>

      <p>
        Site-ul mdp-vet.ro precum si proprietarul si administratorul sau, SC Multi Imunovet SRL, nu este responsabil
        pentru eventuale daune ce pot aparea ca urmare a neglijentei vizitatorilor site-ului privind securitatea si
        confidentialitatea navigarii pe site-ul nostru.
      </p>
      <p>
        Acest site foloseste fisiere tip cookie. Pentru mai multe informatii privind fisierele cookie precum si
        politica de cookie a site-ului mdp-vet.ro, acesati pagina{" "}
        <Link href="/politica-de-cookies">“Politica de cookie”</Link>.
      </p>
    </LegalPage>
  );
}
