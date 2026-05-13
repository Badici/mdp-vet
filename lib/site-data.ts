export type Service = {
  name: string;
  availability: string;
  description: string;
};

export const clinicInfo = {
  name: "MDP Vet",
  fullName: "Clinica Veterinară MDP Vet",
  address: "Strada Armeniș nr. 2, Sector 3, București",
  phoneDisplay: "0374 91 99 99",
  phoneHref: "tel:+40374919999",
  email: "contact@mdp-vet.ro",
  locations: [
    {
      name: "MDP Vet Titan - Strada Armeniș",
      phoneDisplay: "0374 91 99 99",
      phoneHref: "tel:+40374919999",
    },
  ],
  schedule: [
    "Luni - Vineri: 09:00 - 21:00",
    "Sâmbătă: 09:00 - 14:00",
    "Duminică: Închis",
  ],
};

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/mdpvet/" },
  { label: "Instagram", href: "https://www.instagram.com/mdpvet/" },
];

export const navLinks = [
  { href: "/", label: "Acasă" },
  { href: "/servicii", label: "Servicii" },
  { href: "/despre-noi", label: "Despre noi" },
  { href: "/contact", label: "Contact" },
];

export const trustPoints = [
  "Peste 7.000 de pacienți îngrijiți cu succes",
  "Echipă medicală multidisciplinară",
  "Investigații moderne pentru diagnostic de certitudine",
];

export const heroHighlights = [
  "Diagnostic",
  "Tratament",
  "Monitorizare",
];

const IMAGINI_CABINET = "/images/imagini-cabinet";

function cabinetImageSrc(filename: string): string {
  return `${IMAGINI_CABINET}/${encodeURIComponent(filename)}`;
}

/** Fotografie pentru hero „Despre noi” și preview pe pagina principală (înlocuiește fostul clinica-bg.jpg). */
export const cabinetHero = {
  src: cabinetImageSrc("WhatsApp Image 2026-05-13 at 09.33.58 (3).jpeg"),
  width: 1448,
  height: 1086,
  alt: "Clinica MDP Vet Titan — spațiu modern de îngrijire medicală veterinară",
} as const;

export type CabinetPhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

/** Toate fotografiile din public/images/imagini-cabinet — folosite în galeria „Despre noi”. */
export const cabinetGalleryPhotos: CabinetPhoto[] = [
  {
    src: cabinetImageSrc("WhatsApp Image 2026-05-13 at 09.33.58.jpeg"),
    width: 1448,
    height: 1086,
    alt: "Interiorul clinicii MDP Vet — zona de consultație și echipamente",
  },
  {
    src: cabinetImageSrc("WhatsApp Image 2026-05-13 at 09.33.58 (1).jpeg"),
    width: 1086,
    height: 1448,
    alt: "Clinica veterinară MDP Vet — sală de examinare și monitorizare",
  },
  {
    src: cabinetImageSrc("WhatsApp Image 2026-05-13 at 09.33.58 (2).jpeg"),
    width: 1448,
    height: 1086,
    alt: "Spațiu de lucru al echipei medicale MDP Vet",
  },
  {
    src: cabinetImageSrc("WhatsApp Image 2026-05-13 at 09.33.58 (3).jpeg"),
    width: 1448,
    height: 1086,
    alt: "Recepție și primire pacienți la Clinica Veterinară MDP Vet",
  },
  {
    src: cabinetImageSrc("WhatsApp Image 2026-05-13 at 09.33.58 (4).jpeg"),
    width: 1448,
    height: 1086,
    alt: "Cabinet veterinar MDP Vet — zona de îngrijire a animalelor",
  },
  {
    src: cabinetImageSrc("WhatsApp Image 2026-05-13 at 09.33.59.jpeg"),
    width: 1448,
    height: 1086,
    alt: "Clinica MDP Vet — dotări și confort pentru pacienți",
  },
  {
    src: cabinetImageSrc("WhatsApp Image 2026-05-13 at 09.33.59 (1).jpeg"),
    width: 1448,
    height: 1086,
    alt: "MDP Vet — imagine din interiorul clinicii din Titan, București",
  },
  {
    src: cabinetImageSrc("WhatsApp Image 2026-05-13 at 09.33.59 (2).jpeg"),
    width: 1448,
    height: 1086,
    alt: "Spațiu clinic MDP Vet pentru consultații și tratamente",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  bio: string[];
};

export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Daniela Silvia Faget",
    role: "Medic veterinar",
    image: "/images/mdp/Faget.jpeg",
    imageAlt: "Dr. Daniela Silvia Faget, medic veterinar la Clinica Veterinară MDP Vet",
    bio: [
      "Medic veterinar, absolventă a Facultății de Medicină Veterinară din cadrul Universității Spiru Haret, cu o experiență de aproximativ 10 ani în cadrul MDP Vet.",
      "Este pasionată de dermatologie, etologie și nutriție, abordând fiecare caz cu atenție și implicare. Din 2022 face parte din comitetul editorial al Romanian Journal of Veterinary Medicine and Pharmacology.",
      "Se remarcă prin empatie, răbdare și o comunicare clară cu proprietarii, punând un accent deosebit pe prevenție și îngrijirea corectă a animalelor pe termen lung.",
    ],
  },
  {
    name: "Dr. Georgiana Voicu",
    role: "Medic veterinar",
    image: "/images/mdp/Georgiana_Voicu.jpeg",
    imageAlt: "Dr. Georgiana Voicu, medic veterinar la Clinica Veterinară MDP Vet",
    bio: [
      "Medic veterinar, cu o experiență clinică de peste 10 ani, dedicată practicii medicale și perfecționării continue.",
      "Este pasionată de oftalmologie, chirurgie și medicină internă, domenii în care și-a dezvoltat competențele prin colaborări cu profesori universitari și prin implicare activă în cazuri complexe.",
      "Se remarcă prin atenția la detalii, abordarea riguroasă și orientarea către rezultate durabile, punând întotdeauna accent pe evoluția pacientului pe termen lung. Este un medic empatic, cu o afinitate deosebită pentru pacienții felini, reușind să gestioneze cu calm și eficiență chiar și cele mai sensibile cazuri.",
    ],
  },
  {
    name: "Dr. Maria Butunoiu",
    role: "Medic veterinar",
    image: "https://placehold.co/960x720/e2e8f0/64748b/png?text=MDP+Vet",
    imageAlt: "Dr. Maria Butunoiu, medic veterinar la Clinica Veterinară MDP Vet",
    bio: [
      "Absolventă a Facultății de Medicină Veterinară București, promoția 2022, a acumulat experiență practică încă din perioada facultății, lucrând în cabinete veterinare mai întâi ca asistent veterinar, iar ulterior ca medic veterinar.",
      "Deține certificări de perfecționare în anestezie, obținute în cadrul platformei educaționale Vet Akademos, și este pasionată de medicină internă și anestezie.",
      "Abordează fiecare caz cu calm, responsabilitate și atenție la detalii, punând accent pe monitorizare atentă a pacienților și pe oferirea unor îngrijiri medicale cât mai sigure și eficiente. Consideră că un act medical de calitate îmbină competența și terapiile moderne cu empatia, compasiunea și respectul pentru nevoile fiecărui animal și ale familiei sale.",
    ],
  },
  {
    name: "Georgiana Ochetan",
    role: "Tehnician veterinar",
    image: "https://placehold.co/960x720/e2e8f0/64748b/png?text=MDP+Vet",
    imageAlt: "Georgiana Ochetan, tehnician veterinar la Clinica Veterinară MDP Vet",
    bio: [
      "Absolventă a Școlii de Tehnicieni Veterinari din 2024, face parte din echipa MDP Vet din 2025. Este pasionată de anestezie și medicina de urgență.",
    ],
  },
  {
    name: "Clara Rădulescu",
    role: "Tehnician veterinar",
    image: "/images/mdp/Clara.jpeg",
    imageAlt: "Clara Rădulescu, tehnician veterinar la Clinica Veterinară MDP Vet",
    bio: [
      "Este tehnician veterinar, o prezență caldă și implicată în îngrijirea pacienților noștri. Iubește animalele și este foarte dedicată bunăstării acestora, oferind răbdare și grijă fiecărui pacient. Prin seriozitate și implicare constantă, contribuie la confortul animalelor și la buna desfășurare a activității medicale din cadrul clinicii.",
    ],
  },
];

export const whyChooseUs = [
  {
    title: "Medici dedicați",
    text: "Fiecare caz este analizat atent, cu empatie și plan de tratament personalizat.",
  },
  {
    title: "Echipamente moderne",
    text: "Imagistică, monitorizare și instrumente clinice care susțin decizii rapide și corecte.",
  },
  {
    title: "Grijă reală pentru animale",
    text: "Punem accent pe confortul pacientului și pe comunicarea clară cu familia lui.",
  },
  {
    title: "Programări rapide",
    text: "Răspundem prompt și organizăm fluxul de consultații eficient, fără timpi inutili.",
  },
];

export const services: Service[] = [
  {
    name: "Medicină internă",
    availability: "Disponibil în locația Titan (Strada Armeniș)",
    description:
      "Consulturi complete pentru afecțiuni acute și cronice, cu accent pe prevenție și monitorizare.",
  },
  {
    name: "Cardiologie",
    availability: "Pe bază de programare",
    description:
      "Ecografie cardiacă, EKG și evaluări preoperatorii pentru siguranța intervențiilor.",
  },
  {
    name: "Nefrologie | Urologie",
    availability: "Disponibil în locația Titan (Strada Armeniș)",
    description:
      "Investigații dedicate afecțiunilor renale și urinare, orientate către tratamentul cauzei.",
  },
  {
    name: "Dermatologie",
    availability: "Pe bază de programare",
    description:
      "Diagnostic diferențial și terapii pentru afecțiuni cutanate, cronice sau recurente.",
  },
  {
    name: "Oftalmologie",
    availability: "Pe bază de programare",
    description:
      "Consulturi și intervenții oftalmologice pentru probleme acute, cronice sau congenitale.",
  },
  {
    name: "Boli infecțioase",
    availability: "Disponibil în locația Titan (Strada Armeniș)",
    description:
      "Protocol de diagnostic, izolare și tratament pentru patologiile infecțioase majore.",
  },
  {
    name: "Imagistică",
    availability: "Disponibil în locația Titan (Strada Armeniș)",
    description:
      "Ecografie și investigații complementare pentru confirmarea rapidă a diagnosticului.",
  },
  {
    name: "Chirurgie generală",
    availability: "Pe bază de programare",
    description:
      "De la manopere de rutină la intervenții complexe, cu monitorizare atentă perioperatorie.",
  },
  {
    name: "Endocrinologie",
    availability: "Pe bază de programare",
    description:
      "Evaluare și management al afecțiunilor endocrine prin analize și monitorizare pe termen lung.",
  },
];

