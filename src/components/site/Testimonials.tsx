import { useEffect, useState } from "react";
import { Star, Quote as QuoteIcon, ShieldCheck } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

type Review = {
  name: string;
  time: string;
  comment: string;
};

const reviews: Review[] = [
  {
    name: "Sergio Alexandre",
    time: "2 meses atrás",
    comment:
      "Recomendo de mais, todo processo muito rápido, serviço da equipe desde a venda até a montagem é de total excelência parabéns pelo profissionalismo.",
  },
  {
    name: "Jessica Gonçalves",
    time: "3 meses atrás",
    comment:
      "Obrigada a empresa e ao Amilton que foi o responsável no meu atendimento. Obrigada por toda assistência, paciência, dedicação e comprometimento a nos atender, a tirar dúvidas, a aconselhar e por entregar o que prometeu, estamos satisfeitos e super indico vocês.",
  },
  {
    name: "Eduardo Menezes",
    time: "3 meses atrás",
    comment:
      "Excelente serviço prestado pela empresa. Desde a fase do orçamento, com atendimento profissional e cortês pelo Sr Rafael. Após fechar o contrato, a instalação foi marcada com muita agilidade. Ao final da instalação, recebi a visita final para orientações e uso do app. Recomendo!",
  },
  {
    name: "Patricia Gonçalves",
    time: "4 meses atrás",
    comment:
      "Excelente trabalho!! Material de ótima qualidade e entrega rápida. Diego e Rafael sempre disponíveis para tirar dúvidas. Indico e recomendo a Energy Sun.",
  },
];

function GoogleG({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.3-.4-3.5z"/>
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.3 35 26.8 36 24 36c-5.3 0-9.7-3.1-11.3-7.9l-6.5 5C9.6 39.6 16.2 44 24 44z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.2 5.7l6.2 5.2C40.9 36 44 30.5 44 24c0-1.2-.1-2.3-.4-3.5z"/>
    </svg>
  );
}

function Stars({ size = 16 }: { size?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    api.on("reInit", () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    });
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section id="avaliacoes" className="relative overflow-hidden py-16 md:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/40 via-background to-background" />
      <div className="absolute -top-32 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="grid items-end gap-8 md:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Prova social
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              Veja o que os clientes dizem sobre a{" "}
              <span className="text-gradient-sun">Energy Sun</span>
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Avaliações reais no Google, com destaque para atendimento, instalação e pós-venda.
            </p>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white p-5 text-slate-900 shadow-card">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                <GoogleG className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-slate-900">
                  Avaliações reais no Google
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <Stars />
                  <span className="text-xs font-medium text-slate-500">
                    Avaliações positivas
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-2xl bg-accent/15 px-3 py-2 text-xs font-semibold text-[oklch(0.35_0.12_70)]">
              <ShieldCheck className="h-4 w-4 shrink-0" />
              Alto volume de comentários positivos no setor solar
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="mt-10">
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {reviews.map((r) => (
                <CarouselItem
                  key={r.name}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <article className="group relative flex h-full flex-col rounded-3xl border border-white/10 bg-white p-6 text-slate-900 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft">
                    <QuoteIcon
                      className="absolute right-5 top-5 h-8 w-8 text-accent/30"
                      aria-hidden
                    />

                    <div className="flex items-center gap-3 pr-10">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-sun font-display text-base font-bold text-accent-foreground shadow-glow">
                        {initials(r.name)}
                      </div>
                      <div className="min-w-0">
                        <div className="truncate font-display text-sm font-semibold text-slate-900">
                          {r.name}
                        </div>
                        <div className="mt-0.5 flex items-center gap-2">
                          <Stars size={13} />
                          <span className="text-[11px] text-slate-500">{r.time}</span>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                      {r.comment}
                    </p>

                    <div className="mt-5 flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                      <GoogleG className="h-3.5 w-3.5" />
                      Avaliação Google
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-6 flex items-center justify-between gap-4">
              {/* Dots */}
              <div className="flex items-center gap-2">
                {Array.from({ length: count }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Ir para depoimento ${i + 1}`}
                    onClick={() => api?.scrollTo(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === current
                        ? "w-6 bg-accent"
                        : "w-2 bg-primary/25 hover:bg-primary/40"
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-2">
                <CarouselPrevious className="static translate-x-0 translate-y-0 h-10 w-10 border-primary/20 bg-white text-primary hover:bg-accent hover:text-accent-foreground hover:border-accent" />
                <CarouselNext className="static translate-x-0 translate-y-0 h-10 w-10 border-primary/20 bg-white text-primary hover:bg-accent hover:text-accent-foreground hover:border-accent" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
