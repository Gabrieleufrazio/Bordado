import sobreImg from "@/assets/sobre-marca.jpg";
import { useReveal } from "@/hooks/use-reveal";

export function Sobre() {
  const ref = useReveal();
  return (
    <section id="sobre" ref={ref as React.RefObject<HTMLElement>} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="reveal relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
            <img
              src={sobreImg}
              alt="Mesa de trabalho artesanal com bastidor, tesoura dourada e linhas"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-gradient-gold p-6 rounded-2xl shadow-gold max-w-[180px]">
            <div className="font-display text-3xl text-foreground">2014</div>
            <div className="text-xs uppercase tracking-widest text-foreground/70 mt-1">
              Onde tudo começou
            </div>
          </div>
        </div>

        <div className="reveal">
          <span className="font-script text-2xl text-primary">Nossa história</span>
          <h2 className="font-display text-4xl md:text-5xl mt-2 leading-tight">
            Cada ponto carrega <span className="italic text-gradient-rose">um sentimento</span>
          </h2>
          <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              A Rodrigo Bordados nasceu do encantamento por transformar tecidos comuns em peças cheias de
              significado. O que começou como hobby virou ofício — e hoje cada encomenda é tratada como única,
              porque toda história merece ser contada com delicadeza.
            </p>
            <p>
              Trabalhamos artesanalmente, do desenho à última linha, garantindo acabamento impecável e o
              carinho que faz toda a diferença num presente memorável.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { titulo: "Qualidade", desc: "Linhas e tecidos premium" },
              { titulo: "Exclusividade", desc: "Peças únicas, sob medida" },
              { titulo: "Carinho", desc: "Detalhe em cada ponto" },
            ].map((v) => (
              <div key={v.titulo} className="border-l-2 border-accent pl-4">
                <div className="font-display text-xl text-foreground">{v.titulo}</div>
                <div className="text-xs text-muted-foreground mt-1">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
