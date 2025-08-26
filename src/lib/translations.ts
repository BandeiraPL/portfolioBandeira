export type Language = 'pt' | 'en';

export const translations = {
  pt: {
    nav: {
      about: 'Sobre',
      projects: 'Projetos', 
      contact: 'Contato'
    },
    hero: {
      greeting: 'Olá, eu sou',
      name: 'João Silva',
      title: 'Desenvolvedor Full Stack',
      subtitle: 'Criando experiências digitais incríveis com tecnologias modernas',
      cta: 'Ver meus projetos'
    },
    about: {
      title: 'Sobre mim',
      description: 'Sou um desenvolvedor apaixonado por tecnologia com mais de 5 anos de experiência em desenvolvimento web. Especializado em React, TypeScript, Node.js e tecnologias modernas.',
      skills: 'Competências'
    },
    projects: {
      title: 'Meus Projetos',
      subtitle: 'Alguns dos projetos que desenvolvi recentemente',
      viewProject: 'Ver Projeto',
      viewCode: 'Ver Código'
    },
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Interessado em trabalhar juntos? Vamos conversar!',
      name: 'Nome',
      email: 'Email',
      message: 'Mensagem',
      send: 'Enviar Mensagem',
      namePlaceholder: 'Seu nome',
      emailPlaceholder: 'seu.email@exemplo.com',
      messagePlaceholder: 'Sua mensagem...'
    },
    skills: [
      'React & Next.js',
      'TypeScript',
      'Node.js',
      'Python',
      'PostgreSQL',
      'AWS',
      'Git & GitHub',
      'UI/UX Design'
    ]
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hello, I\'m',
      name: 'John Silva',
      title: 'Full Stack Developer',
      subtitle: 'Creating amazing digital experiences with modern technologies',
      cta: 'View my projects'
    },
    about: {
      title: 'About me',
      description: 'I\'m a technology-passionate developer with over 5 years of experience in web development. Specialized in React, TypeScript, Node.js and modern technologies.',
      skills: 'Skills'
    },
    projects: {
      title: 'My Projects',
      subtitle: 'Some of the projects I\'ve developed recently',
      viewProject: 'View Project',
      viewCode: 'View Code'
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Interested in working together? Let\'s talk!',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your.email@example.com',
      messagePlaceholder: 'Your message...'
    },
    skills: [
      'React & Next.js',
      'TypeScript',
      'Node.js',
      'Python',
      'PostgreSQL',
      'AWS',
      'Git & GitHub',
      'UI/UX Design'
    ]
  }
} as const;