import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/contact";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-script text-2xl text-gradient-rose">Rodrigo</span>
          <span className="font-display text-lg tracking-widest uppercase text-foreground/80">
            Bordados
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-foreground/70 hover:text-primary transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex btn-shine items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary/90 transition-all shadow-soft"
        >
          Faça seu pedido
        </a>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-full inset-x-0 bg-background/95 backdrop-blur-md border-b border-border animate-fade-up">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground/80 hover:text-primary py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex justify-center items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground"
            >
              Faça seu pedido
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
