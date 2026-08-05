import { useEffect, useState } from "react";
import residentialAsset from "@/assets/residencial-solar.png.asset.json";
import commercialAsset from "@/assets/comercial-solar.png.asset.json";
import ruralAsset from "@/assets/rural-solar.png.asset.json";
import industrialAsset from "@/assets/industrial-solar.png.asset.json";

const residential = residentialAsset.url;
const commercial = commercialAsset.url;
const rural = ruralAsset.url;
const industrial = industrialAsset.url;
import { Calculator, Cpu, FileCheck2, HardHat, LifeBuoy, ShieldCheck, X } from "lucide-react";

const points = [
  { icon: Calculator, label: "Projeto calculado conforme o perfil de consumo" },
  { icon: Cpu, label: "Equipamentos adequados para cada necessidade" },
  { icon: FileCheck2, label: "Homologação junto à concessionária" },
  { icon: HardHat, label: "Instalação com atenção à segurança" },
  { icon: LifeBuoy, label: "Acompanhamento após a entrega" },
  { icon: ShieldCheck, label: "Garantia de 1 ano após a instalação" },
];

const gallery = [
  {
    src: residential,
    alt: "Sistema solar residencial",
    title: "Residencial",
    desc: "Sistemas fotovoltaicos dimensionados para casas e apartamentos, reduzindo drasticamente a conta de energia mensal.",
  },
  {
    src: commercial,
    alt: "Sistema solar comercial",
    title: "Comercial",
    desc: "Instalações para lojas, escritórios e empresas que querem cortar custos operacionais com energia limpa.",
  },
  {
    src: rural,
    alt: "Sistema solar rural",
    title: "Rural",
    desc: "Projetos para propriedades rurais — bombeamento de água, irrigação e redução de custos no campo.",
  },
  {
    src: industrial,
    alt: "Sistema solar industrial",
    title: "Industrial",
    desc: "Sistemas de grande porte com diagrama unifilar completo para galpões e indústrias que consomem muita energia.",
  },
];

export function Trust() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

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
                Galeria de instalações — clique para ampliar.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((g, i) => (
              <button
                key={g.alt}
                type="button"
                onClick={() => setOpen(i)}
                className="group relative block w-full overflow-hidden rounded-3xl text-left shadow-card focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  width={1280}
                  height={960}
                  loading="lazy"
                  decoding="async"
                  className="h-96 w-full object-cover [image-rendering:auto] [filter:contrast(1.18)_saturate(1.18)_brightness(1.05)_drop-shadow(0_0_0.5px_oklch(0.20_0.08_255/0.3))] transition-transform duration-700 group-hover:scale-105"
                  style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs uppercase tracking-widest text-accent">Energy Sun</div>
                  <div className="font-display text-lg font-semibold">{g.title}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary-deep/80 p-4 backdrop-blur-sm"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
          aria-label={gallery[open].alt}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(null)}
              aria-label="Fechar"
              className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-deep/60 text-white transition hover:bg-primary-deep focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={gallery[open].src}
              alt={gallery[open].alt}
              className="h-72 w-full object-cover [filter:contrast(1.18)_saturate(1.18)_brightness(1.05)] sm:h-96 md:h-[28rem]"
            />
            <div className="p-6 md:p-8">
              <div className="text-xs font-semibold uppercase tracking-widest text-accent">Energy Sun</div>
              <h4 className="mt-2 font-display text-2xl font-bold text-[oklch(0.20_0.08_255)]">
                {gallery[open].title}
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{gallery[open].desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
