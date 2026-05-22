import teamImg from "@/assets/team-install.jpg";
import { Check } from "lucide-react";

const diffs = [
  "Engenharia de ponta",
  "Acabamento profissional",
  "Processo ágil",
  "Atendimento personalizado",
  "Preço justo",
  "Suporte no pós-venda",
];

export function About() {
  return (
    <section id="quem-somos" className="relative bg-secondary py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-soft">
            <img
              src={teamImg}
              alt="Equipe da Energy Sun instalando painéis solares"
              width={1280}
              height={960}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-gradient-deep p-6 text-white shadow-glow sm:block md:-right-6">
            <div className="font-display text-3xl font-bold text-gradient-sun">100%</div>
            <div className="text-xs uppercase tracking-widest text-white/70">Acompanhamento</div>
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Quem somos</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Energy Sun <span className="text-gradient-sun">Energias Renováveis</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            A Energy Sun nasceu para tornar a energia solar mais acessível, segura e vantajosa para
            residências e empresas. Atuamos com engenharia, planejamento, instalação, homologação e
            suporte, acompanhando cada etapa do projeto para que o cliente tenha uma experiência
            simples, transparente e eficiente.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Nosso compromisso é entregar sistemas bem dimensionados, instalação de qualidade,
            acabamento profissional, agilidade nos processos e um pós-venda próximo, para que cada
            cliente tenha segurança desde o primeiro atendimento até o funcionamento do sistema.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {diffs.map((d) => (
              <li key={d} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-card">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-sun text-accent-foreground">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-foreground">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
