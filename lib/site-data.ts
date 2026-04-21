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
      name: "MDP Vet Câmpia Libertății",
      phoneDisplay: "021 794 49 94",
      phoneHref: "tel:+40217944994",
    },
    {
      name: "MDP Vet Titan",
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
  { label: "YouTube", href: "https://www.youtube.com/" },
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
    image: "/images/mdp/dr-miruna-chiriac.jpg",
  },
  {
    name: "Dr. Georgiana Voicu",
    specialties: "Oftalmologie, Chirurgie",
    image: "/images/mdp/dr-georgiana-voicu.jpg",
  },
  {
    name: "Dr. Mădălina Ochiroșii",
    specialties: "Medicină internă",
    image: "/images/mdp/dr-madalina-ochirosii.jpg",
  },
  {
    name: "Dr. Alexandru Poenaru",
    specialties: "Medicină internă, Chirurgie",
    image: "/images/mdp/dr-alexandru-poenaru.jpg",
  },
  {
    name: "Dr. Monica Bilan",
    specialties: "Medicină internă, Dermatologie",
    image: "/images/mdp/dr-monica-bilan.jpg",
  },
  {
    name: "Dr. Georgiana Năstase",
    specialties: "Nefrologie, Boli infecțioase",
    image: "/images/mdp/dr-georgiana-nastase.jpg",
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
    availability: "Disponibil în toate locațiile",
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
    availability: "Disponibil în toate locațiile",
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
    availability: "Disponibil în toate locațiile",
    description:
      "Protocol de diagnostic, izolare și tratament pentru patologiile infecțioase majore.",
  },
  {
    name: "Imagistică",
    availability: "Disponibil în toate locațiile",
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

