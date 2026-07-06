import { waLink } from "@/lib/whatsapp";
import { ArrowRight } from "lucide-react";

const steps = [
  { n: "01", title: "Análise do consumo", text: "Entendemos sua conta de energia e identificamos a melhor solução para o seu perfil." },
  { n: "02", title: "Projeto personalizado", text: "Desenvolvemos um sistema sob medida, respeitando normas técnicas e buscando a melhor eficiência." },
  { n: "03", title: "Homologação", text: "Cuidamos do processo junto à concessionária para que tudo seja aprovado com segurança." },
  { n: "04", title: "Instalação", text: "Realizamos a instalação com equipe qualificada, acabamento profissional e atenção aos detalhes." },
  { n: "05", title: "Pós-venda e manutenção", text: "Acompanhamos o funcionamento do sistema e oferecemos suporte quando você precisar." },
];

export function Process() {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.55_0.16_65)]">Como funciona</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-[oklch(0.20_0.08_255)] sm:text-4xl md:text-5xl">
            Do orçamento à instalação: <span className="text-gradient-sun">cuidamos de tudo para você</span>
          </h2>
        </div>

        <ol className="relative mt-16 grid gap-6 md:grid-cols-5">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-[oklch(0.20_0.08_255)]/20 to-transparent md:block" />
          {steps.map((s) => (
            <li key={s.n} className="relative">
              <div className="flex items-center justify-center">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-sun font-display text-lg font-bold text-[oklch(0.20_0.08_255)] shadow-glow">
                  {s.n}
                </div>
              </div>
              <div className="mt-5 rounded-2xl border border-[oklch(0.20_0.08_255)]/10 bg-white p-5 text-center shadow-card">
                <h3 className="font-display text-base font-semibold text-[oklch(0.20_0.08_255)]">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex justify-center">
          <a
            href={waLink("Olá! Quero começar minha análise para um sistema de energia solar.")}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-sun px-8 py-4 text-base font-semibold text-accent-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            Quero começar minha análise agora
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
