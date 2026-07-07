import heroImg from "@/assets/hero-solar.jpg";
import { ArrowRight, Star, ShieldCheck, FileCheck2, HardHat, CreditCard, Landmark } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

const badges = [
  { icon: FileCheck2, label: "Homologação garantida" },
  { icon: ShieldCheck, label: "Garantia de 1 ano" },
  { icon: HardHat, label: "Instalação segura" },
];

const paymentBadges = [
  { icon: CreditCard, label: "Cartão em até 24x", sub: "juros reduzidos" },
  { icon: Landmark, label: "Financiamento em até 120x", sub: "parcelas menores" },
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
      <div className="absolute inset-0 bg-[oklch(0.16_0.06_255_/_0.55)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.78_0.17_70_/_0.22),_transparent_60%)]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-4 pt-28 pb-20 text-center md:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur">
          <Star className="h-3.5 w-3.5 fill-accent text-accent" />
          5 estrelas no Google • Projetos completos em energia solar
        </span>

        <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Economize até{" "}
          <span className="text-gradient-sun">95% na sua conta</span>{" "}
          de energia.
        </h1>

        <p className="mt-6 max-w-2xl text-base text-white/85 sm:text-lg md:text-xl">
          Energia solar com engenharia de ponta, acabamento profissional e suporte completo
          para residências, empresas, propriedades rurais e projetos industriais.
        </p>

        <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <a
            href={waLink("Olá! Vim pelo site da Energy Sun e gostaria de solicitar um orçamento gratuito de energia solar.")}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-sun px-7 py-4 text-base font-semibold text-accent-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            Solicitar orçamento grátis
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#simulador"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            Simular economia
          </a>
        </div>

        <ul className="mt-10 grid w-full max-w-3xl grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-3">
          {badges.map((b) => (
            <li
              key={b.label}
              className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-medium text-white backdrop-blur sm:text-sm"
            >
              <b.icon className="h-4 w-4 shrink-0 text-accent" />
              {b.label}
            </li>
          ))}
        </ul>

        <div className="mt-3 w-full max-w-3xl">
          <div className="hidden sm:grid grid-cols-2 gap-3">
            {paymentBadges.map((p) => (
              <div
                key={p.label}
                className="flex items-center gap-3 rounded-full border border-accent/40 bg-gradient-to-r from-white/10 to-white/5 px-4 py-2.5 backdrop-blur"
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-sun text-accent-foreground shadow-[0_0_16px_oklch(0.82_0.17_78_/_0.45)]">
                  <p.icon className="h-4 w-4" />
                </span>
                <div className="text-left">
                  <p className="text-xs font-semibold text-white sm:text-sm">{p.label}</p>
                  <p className="text-[10px] leading-tight text-white/70 sm:text-xs">{p.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="sm:hidden mx-auto flex max-w-xs items-center justify-center gap-2.5 rounded-full border border-accent/40 bg-gradient-to-r from-white/10 to-white/5 px-4 py-2.5 backdrop-blur">
            <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-sun text-accent-foreground shadow-[0_0_12px_oklch(0.82_0.17_78_/_0.45)]">
              <CreditCard className="h-3.5 w-3.5" />
            </span>
            <div className="text-left">
              <p className="text-xs font-semibold text-white">Pagamento facilitado</p>
              <p className="text-[10px] leading-tight text-white/70">24x no cartão ou 120x financiado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
