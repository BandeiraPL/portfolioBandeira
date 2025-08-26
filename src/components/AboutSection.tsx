import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { translations, Language } from "../lib/translations";

interface AboutSectionProps {
  currentLanguage: Language;
}

export const AboutSection = ({ currentLanguage }: AboutSectionProps) => {
  const t = translations[currentLanguage];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neon-blue mb-4">
              {t.about.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div className="space-y-6">
              <p className="text-text-secondary text-lg leading-relaxed">
                {t.about.description}
              </p>
              
              <p className="text-text-muted leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>

              <div className="flex flex-wrap gap-2 pt-4">
                <Badge variant="secondary" className="bg-secondary hover:bg-secondary-hover text-secondary-foreground">
                  🚀 Inovação
                </Badge>
                <Badge variant="secondary" className="bg-secondary hover:bg-secondary-hover text-secondary-foreground">
                  💡 Criatividade
                </Badge>
                <Badge variant="secondary" className="bg-secondary hover:bg-secondary-hover text-secondary-foreground">
                  🎯 Foco em Resultados
                </Badge>
              </div>
            </div>

            {/* Skills */}
            <Card className="bg-card border-card-border hover:border-neon-blue/50 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-neon-blue mb-6">
                  {t.about.skills}
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {t.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-background-alt/50 hover:bg-background-alt transition-colors duration-200"
                    >
                      <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
                      <span className="text-text-secondary font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};