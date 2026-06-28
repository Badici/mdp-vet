import type { Metadata } from "next";
import { LegalPage, LegalTable } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Politica de cookies | MDP Vet",
  description: "Politica de cookie-uri a site-ului mdp-vet.ro.",
};

const cookieTableHeaders = ["Denumire", "Furnizor", "Scop", "Expirare", "Tip"];

const essentialCookies = [
  ["PHPSESSID", "tazy-vet.ro", "Face posibilă funcționarea site-ului.", "Sesiune", "HTTP"],
  ["wordpress_test_cookie", "tazy-vet.ro", "Verifică dacă browser-ul suportă cookies.", "Sesiune", "HTTP"],
];

const statisticsCookies = [
  [
    "_ga",
    "Google Tag Manager",
    "Înregistrează un ID unic folosit pentru a genera date statistice despre comportamentul consumatorului pe site.",
    "2 ani",
    "HTTP",
  ],
  [
    "_gat",
    "Google Tag Manager",
    "Asociat cu Google Analytics și folosit pentru a accelera rata de solicitare.",
    "1 zi",
    "HTTP",
  ],
  [
    "_gid",
    "Google Tag Manager",
    "Înregistrează un număr ID unic care e folosit să genereze statistici despre cum folosește vizitatorul site-ul.",
    "1 zi",
    "HTTP",
  ],
];

const marketingCookies = [
  [
    "_fbp",
    "facebook.com",
    "Folosit de Facebook pentru a livra o serie de produse de publicitate, cum ar fi licitarea în timp real din partea unor terți furnizori de publicitate.",
    "3 luni",
    "HTTP",
  ],
  [
    "fr",
    "facebook.com",
    "Folosit de Facebook pentru a livra o serie de produse de publicitate, cum ar fi licitarea în timp real din partea unor terți furnizori de publicitate.",
    "3 luni",
    "HTTP",
  ],
  [
    "tr",
    "facebook.com",
    "Used by Facebook to deliver a series of advertisement products such as real time bidding from third party advertisers.",
    "Sesiune",
    "HTTP",
  ],
];

export default function PoliticaDeCookiesPage() {
  return (
    <LegalPage eyebrow="Legal" title="Politica de cookie-uri">
      <h2>Despre politica de cookie-uri</h2>
      <p>
        Site-ul mdp-vet.ro (denumit in continuare “site-ul”) foloseste cookie-uri. Informatiile ce va vor fi
        prezentate in continuare informeaza utilizatorii pagini de internet mdp-vet.ro asupra plasarii, utilizarii si
        administrarii cookie-urilor atunci cand utilizeaza site-ul.
      </p>

      <h2>Ce sunt „cookie-urile”?</h2>
      <p>
        Fisierul cookie sau “internet cookie” (cunoscute si ca browser cookie, HTTP cookie sau simplu „cookie”) este
        reprezentat de un fisier de mici dimensiuni, format din litere si cifre, care va fi stocat pe terminalul
        utilizatorului (fie el calculator desktop, laptop, telefon, tableta sau orice alt tip de terminal) la
        solicitarea unui web server sau web browserului instalat pe acel terminal (Internet Explorer, Chrome, Safari,
        etc). Cookie-urile sunt complet pasive (nu contin virusi, spyware, malware, nu poaet accesa memoria
        terminalului si nu poate aduce modificari acestuia), au o durata de viata determinata (intre 1 minut si 2 ani
        in functie de tipul cookie-ului) si sunt formate din numele cookie-ului si valoarea acestuia.
      </p>
      <p>
        Cookie-urile contin informatii ce fac legatura intre browserul utilizatorului si serverul site-ului si au
        rolul de a imbunatati experienta de utilizare a site-ului prin furnizarea catre proprietarul site-ului de
        informatii si statistici anonime asupra modului in care este utilizata pagina de internet, asupra erorilor ce
        apar in timpul utilizarii acesteia, asupra preferintelor de confidentialitate precum si anticiparea
        eventualelor bunuri, servicii si informatii relevante ce pot fi oferite in viitor bazate pe istoricul de
        navigare.
      </p>
      <p>
        Intrucat anumite sectiuni sau servicii ale site-ului sunt furnizate de catre terti (reclame, video,
        statistici), acestia pot plasa cookie-uri ce le apartin, dar care respecta legea in vigoare in materie de
        protectie a datelor personale si politicile de confidentialitate ale site-ului mdp-vet.ro.
      </p>

      <h2>Ce nu sunt „cookie-urile”?</h2>
      <p>
        Cookie-urile nu sunt virusi. Ele nu contin linii de cod sau executabile care sa viruseze dispozitivul
        dumneavoastra. Ele nu se pot replica sau duplica, motive pentru care nu pot fi considerate virusi. Totusi,
        acestea pot fi folosite in scopuri negative, ca forma de spyware, pentru a afla preferintele de navigare a
        utilizatorilor. De aceea, majoritatea browserelor au integrate de dezvoltatori niveluri de confidentialitate
        care determina tipurile de cookie-uri acceptate si perioada lor de valabilitate precum si stergerea lor
        automata la terminarea sesiunilor.
      </p>
      <p>
        Browserele au integrate in meniurile de setari modalitati de a selecta si particulariza acceptarea sau
        dezactivarea diferitelor tipuri de cookie pentru fiecare site in functie de preferintele fiecarui utilizator.
        Totusi, dezactivarea cookie-urilor poate duce la ingreunarea folosirii unor sectiuni ale site-ului sau
        dezactivarea unor functionalitati ale lui. De asemenea, dezactivarea acestora nu duce la eliminarea
        publicitatii ci doar particularizarea acesteia dupa preferintele dumneavoastra.
      </p>

      <h2>Cum folosim cookie-urile?</h2>
      <p>
        La fel ca majoritatea serviciilor online, site-ul nostru utilizează cookie-uri proprii și de la terțe părți
        pentru o serie de scopuri. Cookie-urile proprii sunt în mare parte necesare pentru ca site-ul web să
        funcționeze corect, și nu colectează niciuna din datele dvs. de identificare personală. Cookie-urile terță
        parte utilizate pe site-urile noastre web sunt folosite în principal pentru înțelegerea performanțelor
        site-ului, cum interacționezi cu site-ul nostru web, păstrarea serviciilor noastre în siguranță, furnizarea de
        reclame care vă sunt relevante și, în general, oferindu-vă o experiență îmbunătățită. De asemenea, ajută la
        accelerarea interacțiunilor viitoare cu site-ul nostru web.
      </p>

      <h2>Ce fel de cookie-uri folosim?</h2>
      <p>
        <strong>Esențiale:</strong> Unele cookie-uri sunt esențiale pentru a putea experimenta funcționalitatea
        completă a site-ului nostru. Ne permitem să menținem sesiunile utilizatorilor și să prevenim orice amenințări
        la adresa securității. Nu colectează și nu stochează informații personale. De exemplu, aceste cookie-uri vă
        permit să vă autentificați în contul dvs. și să creați tichete de suport sau să răspundeți la tichete. Listă
        cookie-uri esențiale prezente pe site-ul https://mdp-vet.ro/:
      </p>
      <LegalTable headers={cookieTableHeaders} rows={essentialCookies} />

      <p>
        <strong>Statistici:</strong> Aceste cookie-uri stochează informații precum numărul de vizitatori ai site-ului,
        numărul de vizitatori unici, ce pagini ale site-ului au fost vizitate, sursa vizitei etc. Aceste date ne
        ajută să înțelegem și să analizăm cât de bine funcționează site-ul și unde are nevoie de îmbunătățiri. Listă
        cookie-uri pentru statistici prezente pe site-ul https://mdp-vet.ro/:
      </p>
      <LegalTable headers={cookieTableHeaders} rows={statisticsCookies} />

      <p>
        <strong>Marketing:</strong> Site-ul nostru web afișează reclame. Aceste cookie-uri sunt utilizate pentru a
        personaliza reclame pe care vi le afișăm, astfel încât acestea să fie semnificative pentru dvs. Aceste
        cookie-uri ne ajută, de asemenea, să urmărim eficiența campaniilor de publicitate online. Listă cookie-uri
        pentru marketing prezente pe site-ul https://mdp-vet.ro/:
      </p>
      <LegalTable headers={cookieTableHeaders} rows={marketingCookies} />

      <p>
        Informațiile stocate în aceste cookie-uri pot fi, de asemenea, utilizate de către furnizorii terți pentru a
        vă afișa reclame și pe alte site-uri web din browser.
      </p>
      <p>
        <strong>Funcționale:</strong> Acestea sunt cookie-urile care ajută anumite funcționalități neesențiale de pe
        site-ul nostru web. Aceste funcționalități includ încorporarea de conținut precum videoclipuri sau partajarea
        conținutului de pe site-ul web pe platformele de socializare
      </p>
      <p>
        <strong>Preferințe:</strong> aceste cookie-uri ne ajută să stocăm setările și preferințele de navigare,
        precum preferințele de limbă, astfel încât să aveți o experiență mai bună și mai eficientă în vizitele
        viitoare pe site-ul web.
      </p>

      <h2>Cum îmi pot modifica preferințele pentru cookie-uri?</h2>
      <p>
        Diferite browsere oferă diferite metode pentru a bloca și șterge cookie-urile utilizate de site-urile web.
        Puteți modifica setările browserului dvs. pentru a bloca/șterge cookie-urile. Pentru a afla mai multe despre
        cum să gestionați și să ștergeți cookie-urile, vizitați:
      </p>
      <ul>
        <li>
          <a
            href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cookie Settings in Internet Explorer
          </a>
        </li>
        <li>
          <a
            href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cookies Settings in Firefox
          </a>
        </li>
        <li>
          <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
            Cookie Settings in Chrome
          </a>
        </li>
        <li>
          <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer">
            Cookie Settings in Safari
          </a>
        </li>
        <li>
          <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">
            www.allaboutcookies.org
          </a>
        </li>
      </ul>
    </LegalPage>
  );
}
