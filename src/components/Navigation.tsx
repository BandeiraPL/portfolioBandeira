import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "./LanguageToggle";
import { Mail, Phone, Github, Linkedin, Menu, X } from "lucide-react";
import { translations, Language } from "../lib/translations";

interface NavigationProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

export const Navigation = ({ currentLanguage, onLanguageChange }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[currentLanguage];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const socialLinks = [
    { icon: Mail, href: "mailto:seu.email@example.com", label: "Email" },
    { icon: Phone, href: "https://wa.me/5511999999999", label: "WhatsApp" },
    { icon: Github, href: "https://github.com/seuusuario", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/seuusuario", label: "LinkedIn" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-neon-blue/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="text-2xl font-bold text-neon-blue font-mono">
            &lt;Dev/&gt;
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('about')}
              className="text-text-secondary hover:text-neon-blue hover:bg-transparent transition-colors"
            >
              {t.nav.about}
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('projects')}
              className="text-text-secondary hover:text-neon-blue hover:bg-transparent transition-colors"
            >
              {t.nav.projects}
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('contact')}
              className="text-text-secondary hover:text-neon-blue hover:bg-transparent transition-colors"
            >
              {t.nav.contact}
            </Button>
          </div>

          {/* Social Links & Language Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                asChild
                className="text-text-secondary hover:text-neon-blue hover:bg-transparent transition-colors"
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                  <link.icon className="w-4 h-4" />
                </a>
              </Button>
            ))}
            <LanguageToggle currentLanguage={currentLanguage} onLanguageChange={onLanguageChange} />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-text-primary hover:text-neon-blue"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-neon-blue/20">
            <div className="flex flex-col space-y-4 mt-4">
              <Button
                variant="ghost"
                onClick={() => scrollToSection('about')}
                className="text-text-secondary hover:text-neon-blue hover:bg-transparent justify-start"
              >
                {t.nav.about}
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('projects')}
                className="text-text-secondary hover:text-neon-blue hover:bg-transparent justify-start"
              >
                {t.nav.projects}
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('contact')}
                className="text-text-secondary hover:text-neon-blue hover:bg-transparent justify-start"
              >
                {t.nav.contact}
              </Button>
              
              {/* Mobile Social Links */}
              <div className="flex space-x-4 pt-4 border-t border-neon-blue/20">
                {socialLinks.map((link, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    asChild
                    className="text-text-secondary hover:text-neon-blue hover:bg-transparent"
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                      <link.icon className="w-4 h-4" />
                    </a>
                  </Button>
                ))}
                <LanguageToggle currentLanguage={currentLanguage} onLanguageChange={onLanguageChange} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};