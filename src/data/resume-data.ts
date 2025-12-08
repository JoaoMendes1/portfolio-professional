import { Github, Linkedin, Mail } from "lucide-react";

export const DATA = {
  name: "João Victor Mendes",
  initials: "JM",
  role: "Desenvolvedor Full Stack & Analista de Sistemas",
  about: "Transformo necessidades de infraestrutura e suporte em software robusto e escalável. Especialista em resolver problemas complexos com código limpo e foco em UX.",
  avatarUrl: "https://github.com/JoaoMendes1.png",
  location: "São José - SC, Brasil",
  locationLink: "https://www.google.com/maps/place/São+José+-+SC",
  social: [
    {
      name: "GitHub",
      url: "https://github.com/JoaoMendes1",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jo%C3%A3o-victor-mendes-41521b1b9/",
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "mailto:joaodev21@gmail.com",
      icon: Mail,
    },
  ],
  tech: [
    "Next.js 15",
    "React",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "PostgreSQL",
    "Prisma",
    "Docker",
    "Git",
    "Linux"
  ],
  projects: [
    {
      title: "LinkHub SaaS",
      description: "Plataforma completa para centralização de links (Link-in-bio). Inclui autenticação segura, dashboard administrativo, gestão de perfil público e integração com banco de dados.",
      tags: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL"],
      link: "https://github.com/JoaoMendes1/linkhub-saas",
      color: "bg-indigo-500/20",
      borderColor: "border-indigo-500/50"
    },
    {
      title: "Admin Dashboard",
      description: "Painel administrativo responsivo focado em visualização de dados e usabilidade. Demonstração de competência em layout moderno e interatividade.",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
      link: "https://admin-dashboard-flame-five-74.vercel.app/",
      color: "bg-emerald-500/20",
      borderColor: "border-emerald-500/50"
    }
  ],
  experience: [
    {
      company: "Stefanini (Oncoclínicas)",
      role: "Técnico de Suporte II",
      period: "2023 - Atual",
      description: "Garantia de SLA crítico em ambiente hospitalar, manutenção de hardware e gestão de incidentes com foco em alta disponibilidade."
    },
    {
      company: "Polícia Federal",
      role: "Estagiário de TI",
      period: "2019 - 2021",
      description: "Gestão de segurança, infraestrutura de rede, suporte a sistemas internos e configuração de VPN/Token em ambiente governamental."
    }
  ],
  education: [
    {
        school: "Centro Universitário Uninorte",
        degree: "Bacharel em Sistemas de Informação",
        start: "2017",
        end: "2021",
    }
  ]
} as const;