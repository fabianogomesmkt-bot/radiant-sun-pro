import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Benefits } from "@/components/site/Benefits";
import { Testimonials } from "@/components/site/Testimonials";
import { Simulator } from "@/components/site/Simulator";
import { Process } from "@/components/site/Process";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Trust } from "@/components/site/Trust";
import { Financing } from "@/components/site/Financing";
import { Quote } from "@/components/site/Quote";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Energy Sun Energias Renováveis · Energia Solar Fotovoltaica" },
      {
        name: "description",
        content:
          "Projeto, homologação, instalação, limpeza e manutenção de energia solar para residências, empresas e propriedades rurais. Solicite seu orçamento gratuito.",
      },
      { property: "og:title", content: "Energy Sun · Energia Solar Fotovoltaica" },
      {
        property: "og:description",
        content:
          "Economize na conta de luz com energia solar feita do jeito certo. Projeto, instalação e pós-venda com equipe especializada.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Testimonials />
        <Simulator />
        <Benefits />
        <Process />
        <Services />
        <About />
        <Trust />
        <Financing />
        <Quote />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
