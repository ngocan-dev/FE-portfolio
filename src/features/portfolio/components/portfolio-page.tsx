import { AboutSection } from "@/features/portfolio/components/about-section";
import { ContactSection } from "@/features/portfolio/components/contact-section";
import { HeroSection } from "@/features/portfolio/components/hero-section";
import { ProjectsSection } from "@/features/portfolio/components/projects-section";

export function PortfolioPage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
