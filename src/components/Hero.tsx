import heroImg from "@/assets/hero-bordado.jpg";
import { whatsappLink } from "@/lib/contact";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-soft">
      {/* Decorative ornaments */}
      <div className="absolute top-24 left-8 w-40 h-40 rounded-full bg-rose/20 blur-3xl" aria-hidden />
      <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full bg-gold/20 blur-3xl" aria-hidden />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
        <div className="animate-fade-up">
          <div className="divider-ornament justify-start mb-6 max-w-xs">
            <span className="font-script text-xl text-primary">Feito à mão</span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground">
            Bordados que <br />
            <span className="text-gradient-rose italic">contam histórias</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Peças personalizadas feitas à mão, ponto a ponto, com amor e atenção em cada detalhe.
            Transformamos tecidos em memórias afetivas eternas.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground tracking-wide shadow-elegant hover:shadow-gold transition-all duration-500"
            >
              Personalize agora
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#galeria"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-primary/30 text-foreground hover:bg-primary/5 transition-colors tracking-wide"
            >
              Ver galeria
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
            <div>
              <div className="font-display text-3xl text-primary">+800</div>
              <div className="text-xs uppercase tracking-widest">Peças bordadas</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-3xl text-primary">100%</div>
              <div className="text-xs uppercase tracking-widest">Artesanal</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-3xl text-primary">10 anos</div>
              <div className="text-xs uppercase tracking-widest">de história</div>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="absolute -inset-4 bg-gradient-gold rounded-3xl opacity-20 blur-2xl animate-shimmer" aria-hidden />
          <div className="relative rounded-3xl overflow-hidden shadow-elegant aspect-[4/5] lg:aspect-[5/6]">
            <img
              src={heroImg}
              alt="Bastidor com bordado floral em tons rosé e dourado, feito à mão"
              width={1536}
              height={1536}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-soft px-5 py-4 border border-border/60 animate-float-slow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-rose flex items-center justify-center text-primary-foreground">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7-4.5-9.5-9C1 9 2.5 5 6 5c2 0 3.5 1 4 2 .5-1 2-2 4-2 3.5 0 5 4 3.5 7-2.5 4.5-9.5 9-9.5 9z"/></svg>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Avaliação</div>
                <div className="font-display text-lg text-foreground">5.0 ★ ★ ★ ★ ★</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
