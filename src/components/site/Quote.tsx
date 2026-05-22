import { useState } from "react";
import { WHATSAPP_DISPLAY, waLink } from "@/lib/whatsapp";
import { MessageCircle, Phone, Clock, Instagram, Send } from "lucide-react";

export function Quote() {
  const [form, setForm] = useState({ name: "", phone: "", city: "", type: "residencial" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Solicitação de orçamento via site:%0A%0A• Nome: ${form.name}%0A• Telefone: ${form.phone}%0A• Cidade: ${form.city}%0A• Tipo de imóvel: ${form.type}`;
    window.open(`https://wa.me/5534996413377?text=${msg}`, "_blank");
  };

  return (
    <section id="orcamento" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Orçamento</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Solicite seu <span className="text-gradient-sun">orçamento gratuito</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Fale com a equipe da Energy Sun e descubra quanto você pode economizar com energia solar.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Contact card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-deep p-8 text-white shadow-soft md:p-10">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative">
              <h3 className="font-display text-2xl font-bold">Atendimento direto</h3>
              <p className="mt-2 text-white/80">O WhatsApp é o caminho mais rápido para falar com a gente.</p>

              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="mt-6 flex items-center justify-center gap-3 rounded-2xl bg-[var(--color-whatsapp)] px-6 py-5 text-base font-semibold text-white shadow-glow transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="h-6 w-6" />
                Chamar no WhatsApp agora
              </a>

              <ul className="mt-8 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <MessageCircle className="h-5 w-5 text-accent" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/60">WhatsApp</div>
                    <div className="font-medium">{WHATSAPP_DISPLAY}</div>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <Phone className="h-5 w-5 text-accent" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/60">Telefone</div>
                    <div className="font-medium">{WHATSAPP_DISPLAY}</div>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <Clock className="h-5 w-5 text-accent" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/60">Atendimento</div>
                    <div className="font-medium">Segunda a sexta, das 8h às 18h</div>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <Instagram className="h-5 w-5 text-accent" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/60">Instagram</div>
                    <div className="font-medium">Energy Sun Energias Renováveis</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Optional form */}
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-card p-8 shadow-card md:p-10"
          >
            <h3 className="font-display text-2xl font-bold text-foreground">
              Prefere que entremos em contato?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Preencha rapidamente — sua solicitação será enviada via WhatsApp.
            </p>

            <div className="mt-6 space-y-4">
              <Field label="Nome">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-ring/40 transition focus:ring-2"
                  placeholder="Seu nome completo"
                />
              </Field>
              <Field label="Telefone / WhatsApp">
                <input
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-ring/40 transition focus:ring-2"
                  placeholder="(00) 00000-0000"
                />
              </Field>
              <Field label="Cidade">
                <input
                  required
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-ring/40 transition focus:ring-2"
                  placeholder="Sua cidade"
                />
              </Field>
              <Field label="Tipo de imóvel">
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-ring/40 transition focus:ring-2"
                >
                  <option value="residencial">Residencial</option>
                  <option value="comercial">Comercial</option>
                  <option value="rural">Rural</option>
                </select>
              </Field>

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-deep"
              >
                <Send className="h-5 w-5" />
                Enviar solicitação
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
