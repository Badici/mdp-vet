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

export const teamMembers = [
  {
    name: "Dr. Miruna Chiriac",
    specialties: "Cardiologie, Medicină internă",
    availability: "Disponibilă permanent în Clinica Veterinară MDP Vet Titan (Strada Armeniș).",
    competencies: [
      "Medicină internă",
      "Cardiologie veterinară",
      "Ecografie cardiacă și abdominală",
      "Medicină de urgență",
    ],
    image: "/images/mdp/dr-miruna-chiriac.jpg",
  },
  {
    name: "Dr. Georgiana Voicu",
    specialties: "Oftalmologie, Chirurgie generală",
    availability: "Disponibilă permanent în Clinica Veterinară MDP Vet Titan (Strada Armeniș).",
    competencies: ["Medicină internă", "Oftalmologie veterinară", "Chirurgie veterinară", "Medicină de urgență"],
    image: "/images/mdp/dr-georgiana-voicu.jpg",
  },
  {
    name: "Dr. Mădălina Ochiroșii",
    specialties: "Medicină internă",
    availability: "Disponibilă în Clinica Veterinară MDP Vet Titan (Strada Armeniș).",
    competencies: ["Medicină internă", "Ecografie abdominală", "Medicină de urgență"],
    image: "/images/mdp/dr-madalina-ochirosii.jpg",
  },
  {
    name: "Dr. Alexandru Poenaru",
    specialties: "Medicină internă, Chirurgie",
    availability: "Disponibil permanent în Clinica Veterinară MDP Vet Titan (Strada Armeniș).",
    competencies: ["Medicină internă", "Chirurgie", "Medicină de urgență"],
    image: "/images/mdp/dr-alexandru-poenaru.jpg",
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

