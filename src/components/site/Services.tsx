import { Ruler, FileCheck2, Wrench, SprayCan, Home, Building2, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

const services = [
  { icon: Ruler, title: "Projeto fotovoltaico", text: "Projetos personalizados, desenvolvidos com engenharia de ponta, respeitando as normas técnicas e buscando o melhor desempenho para cada cliente." },
  { icon: FileCheck2, title: "Homologação", text: "Cuidamos da aprovação do seu sistema junto à concessionária, reduzindo burocracias e garantindo mais tranquilidade no processo." },
  { icon: Wrench, title: "Instalação de energia solar", text: "Instalação realizada por equipe especializada, com qualidade, segurança, organização e acabamento profissional." },
  { icon: SprayCan, title: "Limpeza e manutenção", text: "Serviços de limpeza e manutenção para preservar a eficiência do sistema e garantir melhor desempenho ao longo do tempo." },
  { icon: Home, title: "Sistemas residenciais", text: "Soluções para casas que desejam reduzir a conta de luz e ter mais previsibilidade nos gastos com energia." },
  { icon: Building2, title: "Sistemas comerciais", text: "Energia solar para empresas que querem diminuir custos fixos e aumentar a competitividade." },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">O que entregamos</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              Nossos <span className="text-gradient-sun">serviços</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Soluções completas em energia solar fotovoltaica, do dimensionamento ao pós-venda.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col rounded-3xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-soft"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-gradient-sun group-hover:text-accent-foreground">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <a
                href={waLink(`Olá! Tenho interesse no serviço: ${s.title}. Gostaria de solicitar um orçamento.`)}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-deep"
              >
                <MessageCircle className="h-4 w-4" />
                Solicitar orçamento
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
