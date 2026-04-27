import g1 from "@/assets/galeria-1.jpg";
import g2 from "@/assets/galeria-2.jpg";
import g3 from "@/assets/galeria-3.jpg";
import g4 from "@/assets/galeria-4.jpg";
import g5 from "@/assets/galeria-5.jpg";
import g6 from "@/assets/galeria-6.jpg";
import { useReveal } from "@/hooks/use-reveal";

const items = [
  { src: g1, alt: "Mãos bordando flor em bastidor de madeira", span: "row-span-2" },
  { src: g2, alt: "Guardanapo com nome bordado e flores rosa" },
  { src: g3, alt: "Jaqueta jeans com bordado floral nas costas" },
  { src: g4, alt: "Carretéis de linha em tons rosé, bege e dourado", span: "row-span-2" },
  { src: g5, alt: "Fronha bege com monograma dourado bordado" },
  { src: g6, alt: "Manta de bebê branca com nome bordado em rosa" },
];

export function Galeria() {
  const ref = useReveal();
  return (
    <section id="galeria" ref={ref as React.RefObject<HTMLElement>} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="font-script text-2xl text-primary">Portfólio</span>
          <h2 className="font-display text-4xl md:text-5xl mt-2">
            Nossa <span className="italic text-gradient-rose">galeria</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Uma seleção das peças que ganharam o coração de quem encomendou.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[240px] gap-4">
          {items.map((it, i) => (
            <div
              key={i}
              className={`gallery-item reveal relative overflow-hidden rounded-2xl shadow-soft ${it.span ?? ""}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <span className="font-script text-2xl text-background">Bordado à mão</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
