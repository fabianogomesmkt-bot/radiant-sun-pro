import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import { waLink } from "@/lib/whatsapp";

const nav = [
  { label: "Home", href: "#home" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Orçamento", href: "#orcamento" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Energy Sun" width={40} height={40} className="h-10 w-10" />
          <div className="leading-tight">
            <div className={`font-display text-base font-bold ${scrolled ? "text-foreground" : "text-white"}`}>
              Energy Sun
            </div>
            <div className={`text-[10px] uppercase tracking-widest ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
              Energias Renováveis
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-sun px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-glow transition-transform hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            Solicitar orçamento
          </a>
        </div>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen(true)}
          className={`lg:hidden rounded-md p-2 ${scrolled ? "text-foreground" : "text-white"}`}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 bg-primary-deep transition-opacity lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Energy Sun" width={36} height={36} className="h-9 w-9" />
            <span className="font-display font-bold text-white">Energy Sun</span>
          </div>
          <button aria-label="Fechar menu" onClick={() => setOpen(false)} className="rounded-md p-2 text-white">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-6 pt-8">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 text-xl font-medium text-white"
            >
              {n.label}
            </a>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-sun px-6 py-4 text-base font-semibold text-accent-foreground shadow-glow"
          >
            <MessageCircle className="h-5 w-5" />
            Solicitar orçamento
          </a>
        </nav>
      </div>
    </header>
  );
}
