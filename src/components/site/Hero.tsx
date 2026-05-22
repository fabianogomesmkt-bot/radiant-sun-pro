import heroImg from "@/assets/hero-solar.jpg";
import { ArrowRight, Sparkles, ShieldCheck, Wrench, HandCoins } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

const badges = [
  { icon: Sparkles, label: "Projeto personalizado" },
  { icon: HandCoins, label: "Financiamento facilitado" },
  { icon: ShieldCheck, label: "Instalação segura" },
  { icon: Wrench, label: "Suporte no pós-venda" },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <img
        src={heroImg}
        alt="Painéis solares instalados em telhado residencial"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.78_0.17_70_/_0.25),_transparent_55%)]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pt-28 pb-20 md:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Energia solar feita do jeito certo
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Economize na conta de luz com{" "}
            <span className="text-gradient-sun">energia solar</span> feita do jeito certo
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg md:text-xl">
            Projeto, homologação, instalação e pós-venda com uma equipe especializada
            para transformar o sol em economia para sua casa ou empresa.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink("Olá, vim pelo site da Energy Sun e gostaria de simular minha economia com energia solar.")}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-sun px-7 py-4 text-base font-semibold text-accent-foreground shadow-glow transition-transform hover:scale-[1.03]"
            >
              Simular minha economia
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              Conhecer serviços
            </a>
          </div>

          <ul className="mt-10 grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-4">
            {badges.map((b) => (
              <li
                key={b.label}
                className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2.5 text-xs font-medium text-white backdrop-blur sm:text-sm"
              >
                <b.icon className="h-4 w-4 shrink-0 text-accent" />
                {b.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
