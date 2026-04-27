import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Sobre } from "@/components/Sobre";
import { Servicos } from "@/components/Servicos";
import { Galeria } from "@/components/Galeria";
import { Depoimentos } from "@/components/Depoimentos";
import { ComoFunciona } from "@/components/ComoFunciona";
import { CTA } from "@/components/CTA";
import { Contato } from "@/components/Contato";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rodrigo Bordados — Bordados personalizados feitos à mão" },
      {
        name: "description",
        content:
          "Bordados artesanais e personalizados: roupas, enxoval infantil e presentes únicos. Peça sua personalização pelo WhatsApp.",
      },
      { property: "og:title", content: "Rodrigo Bordados — Bordados que contam histórias" },
      {
        property: "og:description",
        content: "Peças bordadas à mão com amor e detalhe. Personalize a sua agora.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Sobre />
      <Servicos />
      <Galeria />
      <Depoimentos />
      <ComoFunciona />
      <CTA />
      <Contato />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
