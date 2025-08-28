import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { translations, Language } from "../lib/translations";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

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

    try {
      const formData = new FormData(e.currentTarget);
      const templateParams = {
        from_name: formData.get('name') as string,
        from_email: formData.get('email') as string,
        message: formData.get('message') as string,
        to_email: 'engplbandeira@gmail.com'
      };

      // Configuração EmailJS (você precisará configurar no EmailJS)
      await emailjs.send(
        'service_s6kbm0a', // Service ID (você criará no EmailJS)
        'template_p4xy1ln', // Template ID (você criará no EmailJS)
        templateParams,
        'KzpC3rFXtFRmYG6_W' // Public Key (você obterá no EmailJS)
      );

      toast({
        title: currentLanguage === 'pt' ? "Mensagem enviada!" : "Message sent!",
        description: currentLanguage === 'pt' 
          ? "Sua mensagem foi enviada com sucesso. Responderei em breve!" 
          : "Your message has been sent successfully. I'll get back to you soon!",
      });
      
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      // Fallback para mailto se EmailJS falhar
      const formData = new FormData(e.currentTarget);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      
      const subject = encodeURIComponent(`Contato do portfólio - ${name}`);
      const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`);
      const mailtoUrl = `mailto:engplbandeira@gmail.com?subject=${subject}&body=${body}`;
      
      window.open(mailtoUrl, '_blank');
      
      toast({
        title: currentLanguage === 'pt' ? "Email preparado!" : "Email prepared!",
        description: currentLanguage === 'pt' 
          ? "Seu cliente de email foi aberto com a mensagem preenchida." 
          : "Your email client was opened with the filled message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "engplbandeira@gmail.com",
      href: "mailto:engplbandeira@gmail.com",
      color: "text-red-400",
      bgColor: "bg-red-500/20 hover:bg-red-500/30"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+55 11 95194-9435",
      href: "https://wa.me/5511951949435",
      color: "text-green-400",
      bgColor: "bg-green-500/20 hover:bg-green-500/30"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/BandeiraPL",
      href: "https://github.com/BandeiraPL",
      color: "text-purple-400",
      bgColor: "bg-purple-500/20 hover:bg-purple-500/30"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Pedro Lucas Bandeira",
      href: "https://www.linkedin.com/in/pedro-lucas-bandeira-alves-4875041ba/",
      color: "text-blue-400",
      bgColor: "bg-blue-500/20 hover:bg-blue-500/30"
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
                      className={`flex items-center space-x-4 p-6 rounded-xl border-2 border-transparent ${item.bgColor} hover:border-current transition-all duration-300 group transform hover:scale-105 hover:shadow-lg`}
                    >
                      <div className={`w-14 h-14 ${item.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-md`}>
                        <item.icon className={`w-7 h-7 ${item.color} group-hover:animate-pulse`} />
                      </div>
                      <div className="flex-1">
                        <p className={`font-semibold text-lg ${item.color} group-hover:text-opacity-90`}>{item.label}</p>
                        <p className="text-text-secondary text-sm mt-1 group-hover:text-text-primary transition-colors">{item.value}</p>
                      </div>
                      <div className={`w-3 h-3 rounded-full ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
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