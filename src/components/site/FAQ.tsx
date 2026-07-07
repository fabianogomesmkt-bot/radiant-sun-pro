import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "Energia solar realmente reduz a conta de luz?", a: "Sim. O sistema gera energia a partir do sol e pode reduzir significativamente o valor pago mensalmente, dependendo do consumo e do projeto instalado." },
  { q: "A Energy Sun cuida da homologação?", a: "Sim. A equipe acompanha o processo junto à concessionária para facilitar a aprovação do sistema." },
  { q: "Posso financiar meu sistema?", a: "Sim. Existem opções de financiamento em até 120x, conforme análise e condições disponíveis." },
  { q: "O sistema precisa de manutenção?", a: "Sim, mas a manutenção costuma ser simples. A limpeza e o acompanhamento ajudam a manter a eficiência dos painéis." },
  { q: "O orçamento tem custo?", a: "Não. O cliente pode solicitar uma análise inicial para entender a melhor solução para o seu perfil." },
  { q: "Terei mais algum custo além do sistema?", a: "Não. A Energy Sun entrega o sistema funcionando e você não terá nenhum custo adicional para o sistema funcionar." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Tire suas dúvidas</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Perguntas <span className="text-gradient-sun">frequentes</span>
          </h2>
        </div>

        <ul className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-semibold text-foreground sm:text-lg">{f.q}</span>
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${isOpen ? "bg-gradient-sun text-accent-foreground" : "bg-primary/10 text-primary"}`}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
