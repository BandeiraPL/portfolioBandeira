import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export interface Language {
  code: 'pt' | 'en';
  name: string;
}

const languages: Language[] = [
  { code: 'pt', name: 'PT' },
  { code: 'en', name: 'EN' }
];

interface LanguageToggleProps {
  currentLanguage: Language['code'];
  onLanguageChange: (language: Language['code']) => void;
}

export const LanguageToggle = ({ currentLanguage, onLanguageChange }: LanguageToggleProps) => {
  const handleToggle = () => {
    const newLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
    onLanguageChange(newLanguage);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleToggle}
      className="border-neon-blue/30 bg-background-alt/50 text-text-primary hover:bg-primary hover:text-primary-foreground hover:border-neon-blue hover:shadow-neon transition-all duration-300 backdrop-blur-sm"
    >
      <Globe className="w-4 h-4 mr-2" />
      {currentLanguage.toUpperCase()}
    </Button>
  );
};