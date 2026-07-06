import { Check, X } from "lucide-react";

const rows = [
  { before: "Conta de luz alta todo mês", after: "Conta próxima de zero" },
  { before: "Dependência da concessionária", after: "Autonomia energética" },
  { before: "Reajustes tarifários constantes", after: "Blindagem contra aumentos" },
  { before: "Nenhum retorno financeiro", after: "Retorno do investimento a partir de 1 ano e 9 meses" },
  { before: "Imóvel sem diferencial", after: "Valorização imobiliária" },
  { before: "Impacto ambiental negativo", after: "Energia limpa e sustentável" },
];

export function Comparison() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-deep" />
      <div className="absolute -top-24 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Por que vale a pena
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            A diferença é <span className="text-gradient-sun">real.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/70 sm:text-base">
            Compare sua vida com e sem energia solar. Os números falam por si.
          </p>
        </div>

        {/* Desktop table */}
        <div className="mt-12 hidden overflow-hidden rounded-[28px] border border-accent/25 bg-[oklch(0.22_0.05_255)]/80 shadow-soft ring-1 ring-white/5 backdrop-blur md:block">
          <div className="grid grid-cols-[1fr_1fr] items-stretch">
            <div className="border-b border-white/10 px-6 py-4 text-center text-xs font-semibold uppercase tracking-widest text-white/60">
              Situação atual
            </div>
            <div className="border-b border-accent/40 bg-accent/10 px-6 py-4 text-center text-xs font-semibold uppercase tracking-widest text-accent">
              Com Energy Sun
            </div>

            {rows.map((r, i) => (
              <div key={i} className="contents">
                <div className="flex items-center gap-3 border-b border-white/5 px-6 py-5 text-sm text-white/75 last:border-b-0">
                  <span className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-red-500/15 text-red-400">
                    <X className="h-4 w-4" />
                  </span>
                  <span>{r.before}</span>
                </div>
                <div className="flex items-center gap-3 border-b border-accent/15 bg-accent/5 px-6 py-5 text-sm font-medium text-white last:border-b-0">
                  <span className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-accent/20 text-accent">
                    <Check className="h-4 w-4" />
                  </span>
                  <span>{r.after}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile stacked cards */}
        <div className="mt-10 grid gap-4 md:hidden">
          {rows.map((r, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-white/10 bg-[oklch(0.22_0.05_255)]/80 shadow-soft backdrop-blur"
            >
              <div className="flex items-start gap-3 px-5 py-4">
                <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-red-500/15 text-red-400">
                  <X className="h-3.5 w-3.5" />
                </span>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-white/50">
                    Situação atual
                  </div>
                  <div className="mt-0.5 text-sm text-white/80">{r.before}</div>
                </div>
              </div>
              <div className="flex items-start gap-3 border-t border-accent/20 bg-accent/10 px-5 py-4">
                <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent/25 text-accent">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-accent">
                    Com Energy Sun
                  </div>
                  <div className="mt-0.5 text-sm font-medium text-white">{r.after}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
