import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { translations, Language } from "../lib/translations";

interface ProjectsSectionProps {
  currentLanguage: Language;
}

const projects = [
  {
    title: "E-commerce Platform",
    titlePt: "Plataforma E-commerce",
    description: "Modern e-commerce platform built with React, TypeScript and Node.js",
    descriptionPt: "Plataforma de e-commerce moderna construída com React, TypeScript e Node.js",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Management App",
    titlePt: "App de Gerenciamento de Tarefas",
    description: "Collaborative task management application with real-time updates",
    descriptionPt: "Aplicativo colaborativo de gerenciamento de tarefas com atualizações em tempo real",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    technologies: ["Next.js", "Prisma", "Socket.io", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Analytics Dashboard",
    titlePt: "Dashboard de Analytics",
    description: "Real-time analytics dashboard with interactive charts and reports",
    descriptionPt: "Dashboard de analytics em tempo real com gráficos interativos e relatórios",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["React", "D3.js", "Python", "FastAPI"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

export const ProjectsSection = ({ currentLanguage }: ProjectsSectionProps) => {
  const t = translations[currentLanguage];

  return (
    <section id="projects" className="py-20 bg-background-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neon-blue mb-4">
              {t.projects.title}
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              {t.projects.subtitle}
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mt-4"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-card border-card-border hover:border-neon-blue/50 transition-all duration-300 group hover:shadow-neon-strong transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={currentLanguage === 'pt' ? project.titlePt : project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardHeader>
                  <CardTitle className="text-neon-blue">
                    {currentLanguage === 'pt' ? project.titlePt : project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {currentLanguage === 'pt' ? project.descriptionPt : project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-secondary hover:bg-secondary-hover text-secondary-foreground text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t.projects.viewProject}
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-neon-blue/30 text-neon-blue hover:bg-neon-blue hover:text-background"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};