import roupasImg from "@/assets/produto-roupas.jpg";
import enxovalImg from "@/assets/produto-enxoval.jpg";
import presenteImg from "@/assets/produto-presente.jpg";
import heroImg from "@/assets/hero-bordado.jpg";
import { useReveal } from "@/hooks/use-reveal";
import { whatsappLink } from "@/lib/contact";

const servicos = [
  {
    titulo: "Bordados Personalizados",
    desc: "Monogramas, frases e desenhos exclusivos criados a partir da sua ideia.",
    img: heroImg,
  },
  {
    titulo: "Bordado em Roupas",
    desc: "Camisetas, jaquetas jeans e moletons ganham vida com pontos artesanais.",
    img: roupasImg,
  },
  {
    titulo: "Enxoval Infantil",
    desc: "Mantas, body e fraldas bordadas com nome e detalhes encantadores.",
    img: enxovalImg,
  },
  {
    titulo: "Presentes Personalizados",
    desc: "Toalhas, lenços e itens únicos para datas que ninguém esquece.",
    img: presenteImg,
  },
];

export function Servicos() {
  const ref = useReveal();
  return (
    <section
      id="servicos"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 md:py-32 bg-gradient-soft"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="font-script text-2xl text-primary">O que fazemos</span>
          <h2 className="font-display text-4xl md:text-5xl mt-2">
            Serviços feitos <span className="italic text-gradient-rose">sob medida</span>
          </h2>
          <div className="divider-ornament mt-6">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5z" />
            </svg>
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicos.map((s, i) => (
            <article
              key={s.titulo}
              className="reveal group bg-card rounded-3xl overflow-hidden border border-border/60 hover-lift"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.titulo}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-foreground">{s.titulo}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <a
                  href={whatsappLink(`Olá! Quero saber sobre: ${s.titulo}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary hover:gap-2.5 transition-all"
                >
                  Encomendar
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
