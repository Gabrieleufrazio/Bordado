import { useReveal } from "@/hooks/use-reveal";

const passos = [
  { n: "01", titulo: "Escolha o produto", desc: "Selecione a peça que deseja personalizar — roupa, enxoval ou presente." },
  { n: "02", titulo: "Envie sua ideia", desc: "Compartilhe nome, frase, cores ou referência visual via WhatsApp." },
  { n: "03", titulo: "Aprovação do design", desc: "Você recebe uma prévia digital antes da produção começar." },
  { n: "04", titulo: "Produção e entrega", desc: "Bordamos com carinho e enviamos para todo o Brasil." },
];

export function ComoFunciona() {
  const ref = useReveal();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 right-0 h-48 bg-gradient-gold opacity-5 blur-3xl -z-0" aria-hidden />
      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="font-script text-2xl text-primary">Simples assim</span>
          <h2 className="font-display text-4xl md:text-5xl mt-2">
            Como <span className="italic text-gradient-rose">funciona</span>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-6 relative">
          {/* dotted line */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] border-t-2 border-dotted border-accent/40" aria-hidden />

          {passos.map((p, i) => (
            <div key={p.n} className="reveal text-center relative" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="relative mx-auto w-16 h-16 rounded-full bg-gradient-gold shadow-gold flex items-center justify-center font-display text-xl text-foreground">
                {p.n}
              </div>
              <h3 className="font-display text-xl mt-5 text-foreground">{p.titulo}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-[220px] mx-auto">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
