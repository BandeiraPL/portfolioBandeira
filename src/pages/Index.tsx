import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Language } from "@/lib/translations";

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('pt');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation 
        currentLanguage={currentLanguage} 
        onLanguageChange={setCurrentLanguage} 
      />
      
      <main>
        <HeroSection currentLanguage={currentLanguage} />
        <AboutSection currentLanguage={currentLanguage} />
        <ProjectsSection currentLanguage={currentLanguage} />
        <ContactSection currentLanguage={currentLanguage} />
      </main>
      
      <Footer currentLanguage={currentLanguage} />
    </div>
  );
};

export default Index;
