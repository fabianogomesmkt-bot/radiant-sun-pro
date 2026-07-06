import { Coins, Home, Leaf, ShieldAlert, CreditCard, TrendingUp } from "lucide-react";

const items = [
  { icon: Coins, title: "Redução na conta de energia", text: "Economia significativa todos os meses, com previsibilidade real no seu orçamento." },
  { icon: Home, title: "Valorização do imóvel", text: "Casas e empresas com energia solar têm valor de mercado maior." },
  { icon: Leaf, title: "Energia limpa e sustentável", text: "Geração silenciosa, renovável e sem emissão de poluentes." },
  { icon: ShieldAlert, title: "Blindagem contra aumentos", text: "Menos exposição às variações e reajustes da tarifa de energia." },
  { icon: CreditCard, title: "Financiamento facilitado", text: "Comece a economizar sem comprometer o capital de giro ou a reserva." },
  { icon: TrendingUp, title: "Retorno sobre investimento", text: "Sistema que se paga ao longo do tempo e gera economia por décadas." },
];

export function Benefits() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Vantagens reais
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Por que investir em <span className="text-gradient-sun">energia solar?</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Quem já escolheu a Energy Sun destaca a agilidade, o atendimento e a qualidade da instalação. Agora, veja por que a energia solar pode ser uma das melhores decisões para sua casa ou empresa.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <article
              key={it.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-sun text-accent-foreground shadow-glow">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
              <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="absolute left-7 top-0 h-1 w-10 rounded-b-full bg-gradient-sun" aria-hidden />
              <span className="sr-only">Benefício {i + 1}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
