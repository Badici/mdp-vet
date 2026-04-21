import { Hero } from "@/components/hero";
import {
  AboutPreviewSection,
  ContactCtaSection,
  ServicesPreviewSection,
  TeamSection,
  WhyChooseSection,
} from "@/components/home-sections";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseSection />
      <ServicesPreviewSection />
      <AboutPreviewSection />
      <TeamSection />
      <ContactCtaSection />
    </>
  );
}
