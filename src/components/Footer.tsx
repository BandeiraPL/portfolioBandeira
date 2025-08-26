import { translations, Language } from "../lib/translations";

interface FooterProps {
  currentLanguage: Language;
}

export const Footer = ({ currentLanguage }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background-alt border-t border-neon-blue/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Brand */}
          <div className="text-xl font-bold text-neon-blue font-mono mb-4 md:mb-0">
            &lt;Dev/&gt;
          </div>

          {/* Copyright */}
          <div className="text-text-muted text-sm">
            © {currentYear} {translations[currentLanguage].hero.name}. 
            {currentLanguage === 'pt' ? ' Todos os direitos reservados.' : ' All rights reserved.'}
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-text-secondary hover:text-neon-blue transition-colors duration-200 text-sm mt-4 md:mt-0"
          >
            {currentLanguage === 'pt' ? '↑ Voltar ao topo' : '↑ Back to top'}
          </button>
        </div>
      </div>
    </footer>
  );
};