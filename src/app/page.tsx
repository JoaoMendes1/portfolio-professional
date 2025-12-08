import { DATA } from "@/data/resume-data";
import { Navbar } from "@/components/navbar";
import { ArrowRight, Code2, Terminal, ExternalLink, Mail, ArrowUpRight, Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section id="sobre" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Texto */}
            <div className="flex-1 space-y-8 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium border border-border">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Disponível para novos projetos
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Construindo experiências digitais <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">sólidas e escaláveis.</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0 leading-relaxed">
                {DATA.about}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <a 
                  href="#projetos" 
                  className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2"
                >
                  Ver Projetos <ArrowRight size={18} />
                </a>
                <div className="flex gap-4">
                  {DATA.social.map((item) => (
                    <a 
                      key={item.name} 
                      href={item.url} 
                      target="_blank" 
                      className="p-3 bg-secondary border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-all"
                      aria-label={item.name}
                    >
                      <item.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Avatar / Imagem */}
            <div className="relative group">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-background shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500 bg-muted">
                {/* Usando img normal por enquanto para evitar configuração de next/image com domínio externo */}
                <img 
                  src={DATA.avatarUrl} 
                  alt={DATA.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Badge Flutuante */}
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border flex items-center gap-3 animate-bounce hidden md:flex">
                <div className="p-2 bg-primary/10 text-primary rounded-lg">
                  <Code2 size={24} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-bold">Stack Principal</p>
                  <p className="text-sm font-bold text-foreground">React & Next.js</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TECH STACK (Marquee) --- */}
      <div className="border-y border-border bg-card/50 py-10 overflow-hidden">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs font-bold text-muted-foreground uppercase tracking-widest mb-8">
            Tecnologias que domino
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-80">
            {DATA.tech.map((tech) => (
              <div key={tech} className="flex items-center gap-2 group cursor-default">
                <Terminal size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-lg font-bold text-foreground/80 group-hover:text-foreground transition-colors">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- PROJETOS --- */}
      <section id="projetos" className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Projetos Selecionados</h2>
              <p className="text-muted-foreground mt-2">Onde a teoria encontra a prática.</p>
            </div>
            <a 
              href="https://github.com/JoaoMendes1" 
              target="_blank" 
              className="hidden md:flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
            >
              Ver tudo no GitHub <ArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DATA.projects.map((project) => (
              <div 
                key={project.title} 
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                {/* Placeholder de Imagem com Cor Dinâmica */}
                <div className={`h-48 w-full ${project.color} border-b border-border flex items-center justify-center relative overflow-hidden`}>
                   <div className="absolute inset-0 bg-background/10 group-hover:bg-transparent transition-colors"></div>
                   <Code2 className="text-foreground/20 w-16 h-16" />
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <a href={project.link} target="_blank" className="text-muted-foreground hover:text-foreground p-1">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-md border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Botão Mobile para ver mais */}
          <div className="mt-8 text-center md:hidden">
             <a 
              href="https://github.com/JoaoMendes1" 
              target="_blank" 
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              Ver mais no GitHub <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* --- EXPERIÊNCIA --- */}
      <section id="experiencia" className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-16">Trajetória Profissional</h2>
          
          <div className="space-y-12">
            {DATA.experience.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-0 group">
                {/* Linha do Tempo (Vertical Line) */}
                <div className="md:hidden absolute left-[9px] top-2 bottom-0 w-0.5 bg-border group-last:bottom-auto group-last:h-full"></div>
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-10">
                  
                  {/* Lado Esquerdo (Data e Empresa) */}
                  <div className="md:w-1/3 md:text-right md:pt-1">
                    <span className="inline-block px-2 py-1 rounded bg-secondary/50 text-xs font-bold text-muted-foreground font-mono mb-1">
                      {exp.period}
                    </span>
                    <h3 className="text-lg font-bold text-foreground">{exp.company}</h3>
                  </div>
                  
                  {/* Ponto Central Desktop */}
                  <div className="hidden md:flex w-4 h-4 bg-background rounded-full border-2 border-primary shadow-[0_0_0_4px_hsl(var(--background))] group-hover:bg-primary transition-colors z-10 relative mt-2"></div>
                  
                  {/* Lado Direito (Cargo e Descrição) */}
                  <div className="md:w-1/2 pb-8 md:pb-0 relative md:pt-1">
                     {/* Ponto Central Mobile */}
                     <div className="md:hidden absolute -left-[29px] top-1.5 w-4 h-4 bg-background rounded-full border-2 border-primary z-10"></div>
                     
                     <h4 className="text-base font-semibold text-foreground/90">{exp.role}</h4>
                     <p className="text-sm text-muted-foreground mt-2 leading-relaxed text-pretty">
                       {exp.description}
                     </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER / CTA --- */}
      <footer id="contato" className="bg-foreground text-background py-24 px-6 text-center relative overflow-hidden">
        {/* Glow effect decorativo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto max-w-2xl space-y-8 relative z-10">
          <div className="w-16 h-16 bg-background/10 backdrop-blur-sm rounded-2xl mx-auto flex items-center justify-center text-background mb-6 border border-white/10">
            <Mail size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Vamos construir algo juntos?</h2>
          <p className="text-lg text-background/80 max-w-lg mx-auto">
            Estou sempre aberto a novas oportunidades e desafios. 
            Seja para um projeto freelance ou uma vaga full-time.
          </p>
          <a 
            href={`mailto:${DATA.social[2].url.replace('mailto:', '')}`} 
            className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground font-bold rounded-full hover:scale-105 hover:bg-background/90 transition-all text-lg"
          >
            Enviar E-mail
          </a>
          
          <div className="pt-16 border-t border-white/10 mt-16 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-background/60 font-mono">
            <p>© 2025 João Mendes.</p>
            <div className="flex gap-8">
              <a href={DATA.social[0].url} target="_blank" className="hover:text-background transition-colors">GitHub</a>
              <a href={DATA.social[1].url} target="_blank" className="hover:text-background transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}