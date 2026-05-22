import { waLink } from "@/lib/whatsapp";
import { ArrowRight, CreditCard, Calendar, Sparkles, FileText } from "lucide-react";

const highlights = [
  { icon: Calendar, label: "Financiamento em até 84x" },
  { icon: CreditCard, label: "Cartão de crédito em até 18x" },
  { icon: Sparkles, label: "Condições facilitadas" },
  { icon: FileText, label: "Orçamento personalizado" },
];

export function Financing() {
  return (
    <section className="relative overflow-hidden bg-gradient-deep py-20 text-white md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.78_0.17_70_/_0.25),_transparent_55%)]" />
      <div className="absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Financiamento
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Comece a economizar sem <span className="text-gradient-sun">descapitalizar</span>
          </h2>
          <p className="mt-5 max-w-xl text-base text-white/80">
            Com opções de financiamento facilitado, você pode instalar seu sistema solar e começar a
            gerar economia de forma planejada.
          </p>
          <a
            href={waLink("Olá! Gostaria de ver as condições de financiamento para o meu projeto solar.")}
            target="_blank"
            rel="noreferrer"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-sun px-7 py-4 text-base font-semibold text-accent-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            Ver condições para meu projeto
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {highlights.map((h) => (
            <li
              key={h.label}
              className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-sun text-accent-foreground">
                <h.icon className="h-6 w-6" />
              </span>
              <span className="font-display text-base font-semibold">{h.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
