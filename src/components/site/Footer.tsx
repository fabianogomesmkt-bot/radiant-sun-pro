import logo from "@/assets/logo.png";
import { Instagram, MessageCircle, Clock } from "lucide-react";
import { WHATSAPP_DISPLAY, waLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="relative bg-primary-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Energy Sun" width={48} height={48} className="h-12 w-12" />
            <div>
              <div className="font-display text-lg font-bold">Energy Sun</div>
              <div className="text-xs uppercase tracking-widest text-white/60">Energias Renováveis</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
            Engenharia, instalação e suporte em energia solar fotovoltaica para residências, empresas
            e propriedades rurais. Cuidamos de todo o processo, do projeto ao pós-venda.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
            Navegação
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><a href="#home" className="hover:text-accent">Home</a></li>
            <li><a href="#quem-somos" className="hover:text-accent">Quem Somos</a></li>
            <li><a href="#servicos" className="hover:text-accent">Serviços</a></li>
            <li><a href="#orcamento" className="hover:text-accent">Orçamento</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
            Contato
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li>
              <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-accent">
                <MessageCircle className="h-4 w-4" /> {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <Instagram className="h-4 w-4" /> Energy Sun Energias Renováveis
            </li>
            <li className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4" /> Seg–Sex · 8h às 18h
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/60 md:flex-row md:px-8">
          <span>© {new Date().getFullYear()} Energy Sun Energias Renováveis. Todos os direitos reservados.</span>
          <span>Projeto • Homologação • Instalação • Manutenção</span>
        </div>
      </div>
    </footer>
  );
}
