import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mdp-vet.ro"),
  title: "Clinica Veterinară MDP Vet | Diagnostic, tratament, monitorizare",
  description:
    "MDP Vet oferă servicii veterinare specializate în București: medicină internă, cardiologie, imagistică, chirurgie și consultații programate.",
  icons: {
    icon: [{ url: "/Logo_mdp_vet.ico?v=2" }],
    shortcut: [{ url: "/Logo_mdp_vet.ico?v=2" }],
    apple: [{ url: "/Logo_mdp_vet.png?v=2" }],
  },
  openGraph: {
    title: "MDP Vet - Clinica veterinară în Titan",
    description:
      "O echipă de specialiști pentru sănătatea animalelor de companie, cu servicii medicale complete și programări rapide.",
    type: "website",
    locale: "ro_RO",
    url: "https://mdp-vet.ro",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" data-scroll-behavior="smooth" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
