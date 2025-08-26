import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { translations, Language } from "../lib/translations";
import { useToast } from "@/hooks/use-toast";

interface ContactSectionProps {
  currentLanguage: Language;
}

export const ContactSection = ({ currentLanguage }: ContactSectionProps) => {
  const t = translations[currentLanguage];
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: currentLanguage === 'pt' ? "Mensagem enviada!" : "Message sent!",
        description: currentLanguage === 'pt' 
          ? "Obrigado pelo contato. Responderei em breve!" 
          : "Thank you for reaching out. I'll get back to you soon!",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "seu.email@example.com",
      href: "mailto:seu.email@example.com"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+55 11 99999-9999",
      href: "https://wa.me/5511999999999"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/seuusuario",
      href: "https://github.com/seuusuario"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/seuusuario",
      href: "https://linkedin.com/in/seuusuario"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neon-blue mb-4">
              {t.contact.title}
            </h2>
            <p className="text-text-secondary text-lg">
              {t.contact.subtitle}
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-6">
                  {currentLanguage === 'pt' ? 'Informações de Contato' : 'Contact Information'}
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 rounded-lg bg-background-alt/50 hover:bg-background-alt transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 bg-neon-blue/20 rounded-lg flex items-center justify-center group-hover:bg-neon-blue/30 transition-colors">
                        <item.icon className="w-5 h-5 text-neon-blue" />
                      </div>
                      <div>
                        <p className="font-medium text-text-primary">{item.label}</p>
                        <p className="text-text-secondary text-sm">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-card border-card-border">
              <CardHeader>
                <CardTitle className="text-neon-blue">
                  {currentLanguage === 'pt' ? 'Envie uma mensagem' : 'Send a message'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-text-primary">
                      {t.contact.name}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder={t.contact.namePlaceholder}
                      className="bg-background-alt border-card-border text-text-primary placeholder:text-text-muted focus:border-neon-blue focus:ring-neon-blue/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-text-primary">
                      {t.contact.email}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder={t.contact.emailPlaceholder}
                      className="bg-background-alt border-card-border text-text-primary placeholder:text-text-muted focus:border-neon-blue focus:ring-neon-blue/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-text-primary">
                      {t.contact.message}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder={t.contact.messagePlaceholder}
                      className="bg-background-alt border-card-border text-text-primary placeholder:text-text-muted focus:border-neon-blue focus:ring-neon-blue/20 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-3 shadow-neon hover:shadow-neon-strong transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                        <span>
                          {currentLanguage === 'pt' ? 'Enviando...' : 'Sending...'}
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="w-4 h-4" />
                        <span>{t.contact.send}</span>
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};