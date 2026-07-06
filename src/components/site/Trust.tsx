import residential from "@/assets/residential-solar.jpg";
import commercial from "@/assets/commercial-solar.jpg";
import rural from "@/assets/rural-solar.jpg";
import industrial from "@/assets/industrial-solar.jpg";
import { Calculator, Cpu, FileCheck2, HardHat, LifeBuoy, ShieldCheck } from "lucide-react";

const points = [
  { icon: Calculator, label: "Projeto calculado conforme o perfil de consumo" },
  { icon: Cpu, label: "Equipamentos adequados para cada necessidade" },
  { icon: FileCheck2, label: "Homologação junto à concessionária" },
  { icon: HardHat, label: "Instalação com atenção à segurança" },
  { icon: LifeBuoy, label: "Acompanhamento após a entrega" },
  { icon: ShieldCheck, label: "Garantia de 1 ano após a instalação" },
];

export function Trust() {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.55_0.16_65)]">Confiança</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-[oklch(0.20_0.08_255)] sm:text-4xl md:text-5xl">
            Energia solar é investimento. Por isso, escolha quem cuida de{" "}
            <span className="text-gradient-sun">cada detalhe</span>.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {points.map((p) => (
            <div
              key={p.label}
              className="flex flex-col items-start gap-3 rounded-2xl border border-[oklch(0.20_0.08_255)]/10 bg-white p-5 shadow-card"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-[oklch(0.20_0.08_255)]">
                <p.icon className="h-5 w-5" />
              </span>
              <p className="text-sm font-medium leading-snug text-[oklch(0.20_0.08_255)]">{p.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl font-bold text-[oklch(0.20_0.08_255)] sm:text-3xl">
                Veja alguns projetos realizados
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Galeria de instalações — depoimentos de clientes em breve.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { src: residential, alt: "Sistema solar residencial" },
              { src: commercial, alt: "Sistema solar comercial" },
              { src: rural, alt: "Sistema solar rural" },
              { src: industrial, alt: "Sistema solar industrial" },
            ].map((g) => (
              <div key={g.alt} className="group relative overflow-hidden rounded-3xl shadow-card">
                <img
                  src={g.src}
                  alt={g.alt}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs uppercase tracking-widest text-accent">Energy Sun</div>
                  <div className="font-display text-lg font-semibold">{g.alt}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

