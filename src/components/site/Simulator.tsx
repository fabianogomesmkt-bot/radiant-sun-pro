import { useMemo, useState } from "react";
import { TrendingUp, Calendar, PiggyBank, MessageCircle, ArrowRight } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

const BRL = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

export function Simulator() {
  const [bill, setBill] = useState(500);

  const { monthly, yearly, total25 } = useMemo(() => {
    const monthly = bill * 0.9;
    return {
      monthly,
      yearly: monthly * 12,
      total25: monthly * 12 * 25,
    };
  }, [bill]);

  const results = [
    { icon: PiggyBank, value: BRL(monthly), label: "Economia mensal estimada" },
    { icon: Calendar, value: BRL(yearly), label: "Economia no 1º ano" },
    { icon: TrendingUp, value: BRL(total25), label: "Retorno em 25 anos" },
  ];

  const pct = ((bill - 100) / (5000 - 100)) * 100;

  return (
    <section id="simulador" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-deep" />
      <div className="absolute -top-24 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />

      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Simulador de economia
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Quanto você pode economizar com{" "}
            <span className="text-gradient-sun">energia solar?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/70 sm:text-base">
            Arraste o simulador e veja uma estimativa de economia para sua conta de luz.
          </p>
        </div>

        <div className="mt-12 rounded-[28px] border border-accent/30 bg-[oklch(0.22_0.05_255)]/80 p-6 shadow-soft ring-1 ring-white/5 backdrop-blur sm:p-10">
          {/* Slider */}
          <div>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <label htmlFor="bill" className="text-sm font-semibold text-white/85">
                Valor atual da sua conta de luz
              </label>
              <div className="font-display text-2xl font-bold text-accent sm:text-3xl">
                {BRL(bill)}
                <span className="ml-1 text-sm font-medium text-white/60">/mês</span>
              </div>
            </div>

            <input
              id="bill"
              type="range"
              min={100}
              max={5000}
              step={50}
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
              className="solar-range mt-5 w-full"
              style={{
                background: `linear-gradient(to right, oklch(0.82 0.17 85) 0%, oklch(0.82 0.17 85) ${pct}%, oklch(0.32 0.06 255) ${pct}%, oklch(0.32 0.06 255) 100%)`,
              }}
              aria-label="Valor da conta de luz"
            />

            <div className="mt-2 flex justify-between text-[11px] font-medium text-white/50">
              <span>R$ 100</span>
              <span>R$ 5.000</span>
            </div>
          </div>

          {/* Results */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {results.map((r) => (
              <div
                key={r.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur"
              >
                <r.icon className="mx-auto h-5 w-5 text-accent" />
                <div className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                  {r.value}
                </div>
                <div className="mt-1 text-xs font-medium text-white/70">{r.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href={waLink(
              `Olá! Fiz a simulação no site da Energy Sun e quero saber como economizar aproximadamente ${BRL(monthly)}/mês com energia solar.`,
            )}
            target="_blank"
            rel="noreferrer"
            className="group mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-sun px-6 py-4 text-center font-display text-sm font-semibold text-accent-foreground shadow-glow transition-transform hover:-translate-y-0.5 sm:text-base"
          >
            <MessageCircle className="h-5 w-5" />
            Quero economizar {BRL(monthly)}/mês
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>

          <p className="mt-5 text-center text-xs text-white/60">
            Em muitos projetos, o retorno do investimento pode acontecer a partir de 1 ano e 9 meses.
          </p>

          <p className="mt-3 text-center text-[11px] leading-relaxed text-white/45">
            *Simulação estimada com base em até 90% de economia. Os valores reais podem variar
            conforme consumo, localização, dimensionamento do sistema e condições da concessionária.
          </p>
        </div>
      </div>
    </section>
  );
}
