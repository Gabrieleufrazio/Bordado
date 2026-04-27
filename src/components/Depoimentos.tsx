import { useReveal } from "@/hooks/use-reveal";

const depoimentos = [
  {
    nome: "Marina Costa",
    texto:
      "Recebi minha manta com o nome do meu filho e chorei. O acabamento é perfeito, virou herança de família.",
    inicial: "M",
  },
  {
    nome: "Camila Ribeiro",
    texto:
      "Encomendei uma jaqueta bordada para presentear minha irmã e ela amou! Atendimento atencioso do início ao fim.",
    inicial: "C",
  },
  {
    nome: "Juliana Fonseca",
    texto:
      "Trabalho impecável e cheio de carinho. Cada detalhe mostra dedicação. Já virei cliente fiel!",
    inicial: "J",
  },
];

export function Depoimentos() {
  const ref = useReveal();
  return (
    <section
      id="depoimentos"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 md:py-32 bg-secondary/40"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="font-script text-2xl text-primary">Histórias</span>
          <h2 className="font-display text-4xl md:text-5xl mt-2">
            O que dizem nossas <span className="italic text-gradient-rose">clientes</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {depoimentos.map((d, i) => (
            <figure
              key={d.nome}
              className="reveal bg-card rounded-3xl p-8 shadow-soft border border-border/60 hover-lift"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="text-accent mb-4">
                <path d="M9 7H5a2 2 0 00-2 2v4a2 2 0 002 2h2v1a3 3 0 01-3 3v2a5 5 0 005-5V9a2 2 0 00-2-2zm10 0h-4a2 2 0 00-2 2v4a2 2 0 002 2h2v1a3 3 0 01-3 3v2a5 5 0 005-5V9a2 2 0 00-2-2z" />
              </svg>
              <blockquote className="font-display text-xl leading-relaxed text-foreground italic">
                "{d.texto}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-rose flex items-center justify-center text-primary-foreground font-display text-lg">
                  {d.inicial}
                </div>
                <div>
                  <div className="font-medium text-foreground">{d.nome}</div>
                  <div className="text-xs text-accent tracking-widest">★ ★ ★ ★ ★</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
