import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { translations, Language } from "../lib/translations";
import profilePicture from "@/assets/profile-picture.jpg";

interface HeroSectionProps {
  currentLanguage: Language;
}

export const HeroSection = ({ currentLanguage }: HeroSectionProps) => {
  const t = translations[currentLanguage];

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-blue rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-neon-bright rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img
              src={profilePicture}
              alt="Profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-neon-blue shadow-neon-strong animate-float object-cover"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-glow"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6 animate-fadeInUp">
          <p className="text-text-secondary text-lg md:text-xl font-mono">
            {t.hero.greeting}
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-4">
            <span className="text-neon-blue">{t.hero.name}</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-text-secondary mb-6">
            {t.hero.title}
          </h2>
          
          <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="mt-8">
            <Button
              onClick={scrollToProjects}
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 py-3 text-lg shadow-neon hover:shadow-neon-strong transition-all duration-300 transform hover:scale-105"
            >
              {t.hero.cta}
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-neon-blue" />
        </div>
      </div>
    </section>
  );
};