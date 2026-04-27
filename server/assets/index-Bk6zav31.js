import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-B0Y_0OXA.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const WHATSAPP_NUMBER = "5511999999999";
const DEFAULT_MSG = "Olá Rodrigo! Vim pelo site e gostaria de fazer um pedido personalizado.";
function whatsappLink(message = DEFAULT_MSG) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
const CONTACT = {
  whatsappDisplay: "(11) 99999-9999",
  instagram: "@rodrigobordados",
  instagramUrl: "https://instagram.com/rodrigobordados",
  email: "contato@rodrigobordados.com.br"
};
const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3" : "bg-transparent py-5"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-baseline gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-script text-2xl text-gradient-rose", children: "Rodrigo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg tracking-widest uppercase text-foreground/80", children: "Bordados" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-8", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: l.href,
              className: "text-sm tracking-wide text-foreground/70 hover:text-primary transition-colors relative group",
              children: [
                l.label,
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" })
              ]
            },
            l.href
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: whatsappLink(),
              target: "_blank",
              rel: "noopener noreferrer",
              className: "hidden md:inline-flex btn-shine items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary/90 transition-all shadow-soft",
              children: "Faça seu pedido"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              "aria-label": "Abrir menu",
              onClick: () => setOpen(!open),
              className: "md:hidden p-2 text-foreground",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", d: "M6 6l12 12M6 18L18 6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", d: "M4 7h16M4 12h16M4 17h16" }) })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden absolute top-full inset-x-0 bg-background/95 backdrop-blur-md border-b border-border animate-fade-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 py-6 flex flex-col gap-4", children: [
          links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              onClick: () => setOpen(false),
              className: "text-foreground/80 hover:text-primary py-2",
              children: l.label
            },
            l.href
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: whatsappLink(),
              target: "_blank",
              rel: "noopener noreferrer",
              className: "mt-2 inline-flex justify-center items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground",
              children: "Faça seu pedido"
            }
          )
        ] }) })
      ]
    }
  );
}
const heroImg = "/Bordado/assets/hero-bordado-DLqL4jcB.jpg";
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-soft", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-24 left-8 w-40 h-40 rounded-full bg-rose/20 blur-3xl", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-10 right-10 w-56 h-56 rounded-full bg-gold/20 blur-3xl", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornament justify-start mb-6 max-w-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-script text-xl text-primary", children: "Feito à mão" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground", children: [
          "Bordados que ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-rose italic", children: "contam histórias" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed", children: "Peças personalizadas feitas à mão, ponto a ponto, com amor e atenção em cada detalhe. Transformamos tecidos em memórias afetivas eternas." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: whatsappLink(),
              target: "_blank",
              rel: "noopener noreferrer",
              className: "btn-shine inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground tracking-wide shadow-elegant hover:shadow-gold transition-all duration-500",
              children: [
                "Personalize agora",
                /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", d: "M5 12h14M13 6l6 6-6 6" }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#galeria",
              className: "inline-flex items-center gap-2 px-6 py-4 rounded-full border border-primary/30 text-foreground hover:bg-primary/5 transition-colors tracking-wide",
              children: "Ver galeria"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex items-center gap-8 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-primary", children: "+800" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest", children: "Peças bordadas" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-px bg-border" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-primary", children: "100%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest", children: "Artesanal" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-px bg-border" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-primary", children: "10 anos" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest", children: "de história" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative animate-fade-up", style: { animationDelay: "0.2s" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 bg-gradient-gold rounded-3xl opacity-20 blur-2xl animate-shimmer", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl overflow-hidden shadow-elegant aspect-[4/5] lg:aspect-[5/6]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: heroImg,
              alt: "Bastidor com bordado floral em tons rosé e dourado, feito à mão",
              width: 1536,
              height: 1536,
              className: "w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-soft px-5 py-4 border border-border/60 animate-float-slow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-gradient-rose flex items-center justify-center text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 21s-7-4.5-9.5-9C1 9 2.5 5 6 5c2 0 3.5 1 4 2 .5-1 2-2 4-2 3.5 0 5 4 3.5 7-2.5 4.5-9.5 9-9.5 9z" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Avaliação" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg text-foreground", children: "5.0 ★ ★ ★ ★ ★" })
          ] })
        ] }) })
      ] })
    ] })
  ] });
}
const sobreImg = "/Bordado/assets/sobre-marca-CKJ7euXe.jpg";
function useReveal() {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    el.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  return ref;
}
function Sobre() {
  const ref = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "sobre", ref, className: "py-24 md:py-32 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: sobreImg,
          alt: "Mesa de trabalho artesanal com bastidor, tesoura dourada e linhas",
          loading: "lazy",
          width: 1024,
          height: 1280,
          className: "w-full h-full object-cover"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 -right-6 bg-gradient-gold p-6 rounded-2xl shadow-gold max-w-[180px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-foreground", children: "2014" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-foreground/70 mt-1", children: "Onde tudo começou" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-script text-2xl text-primary", children: "Nossa história" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl mt-2 leading-tight", children: [
        "Cada ponto carrega ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gradient-rose", children: "um sentimento" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-5 text-muted-foreground leading-relaxed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A Rodrigo Bordados nasceu do encantamento por transformar tecidos comuns em peças cheias de significado. O que começou como hobby virou ofício — e hoje cada encomenda é tratada como única, porque toda história merece ser contada com delicadeza." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Trabalhamos artesanalmente, do desenho à última linha, garantindo acabamento impecável e o carinho que faz toda a diferença num presente memorável." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-3 gap-4", children: [
        { titulo: "Qualidade", desc: "Linhas e tecidos premium" },
        { titulo: "Exclusividade", desc: "Peças únicas, sob medida" },
        { titulo: "Carinho", desc: "Detalhe em cada ponto" }
      ].map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-2 border-accent pl-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl text-foreground", children: v.titulo }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: v.desc })
      ] }, v.titulo)) })
    ] })
  ] }) });
}
const roupasImg = "/Bordado/assets/produto-roupas-Dy44b9Nc.jpg";
const enxovalImg = "/Bordado/assets/produto-enxoval-BdHEp_MT.jpg";
const presenteImg = "/Bordado/assets/produto-presente-BRmNtPeB.jpg";
const servicos = [
  {
    titulo: "Bordados Personalizados",
    desc: "Monogramas, frases e desenhos exclusivos criados a partir da sua ideia.",
    img: heroImg
  },
  {
    titulo: "Bordado em Roupas",
    desc: "Camisetas, jaquetas jeans e moletons ganham vida com pontos artesanais.",
    img: roupasImg
  },
  {
    titulo: "Enxoval Infantil",
    desc: "Mantas, body e fraldas bordadas com nome e detalhes encantadores.",
    img: enxovalImg
  },
  {
    titulo: "Presentes Personalizados",
    desc: "Toalhas, lenços e itens únicos para datas que ninguém esquece.",
    img: presenteImg
  }
];
function Servicos() {
  const ref = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "servicos",
      ref,
      className: "py-24 md:py-32 bg-gradient-soft",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto reveal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-script text-2xl text-primary", children: "O que fazemos" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl mt-2", children: [
            "Serviços feitos ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gradient-rose", children: "sob medida" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornament mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2l1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5z" }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: servicos.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "article",
          {
            className: "reveal group bg-card rounded-3xl overflow-hidden border border-border/60 hover-lift",
            style: { transitionDelay: `${i * 60}ms` },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: s.img,
                  alt: s.titulo,
                  loading: "lazy",
                  width: 1024,
                  height: 1024,
                  className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-foreground", children: s.titulo }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: s.desc }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: whatsappLink(`Olá! Quero saber sobre: ${s.titulo}`),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "mt-4 inline-flex items-center gap-1.5 text-sm text-primary hover:gap-2.5 transition-all",
                    children: [
                      "Encomendar",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", d: "M5 12h14M13 6l6 6-6 6" }) })
                    ]
                  }
                )
              ] })
            ]
          },
          s.titulo
        )) })
      ] })
    }
  );
}
const g1 = "/Bordado/assets/galeria-1-B9zbFCMz.jpg";
const g2 = "/Bordado/assets/galeria-2-y1q9rgX_.jpg";
const g3 = "/Bordado/assets/galeria-3-B0T_CkBw.jpg";
const g4 = "/Bordado/assets/galeria-4-CBUIdTqg.jpg";
const g5 = "/Bordado/assets/galeria-5-Dti3-0qz.jpg";
const g6 = "/Bordado/assets/galeria-6-CkJeId6V.jpg";
const items = [
  { src: g1, alt: "Mãos bordando flor em bastidor de madeira", span: "row-span-2" },
  { src: g2, alt: "Guardanapo com nome bordado e flores rosa" },
  { src: g3, alt: "Jaqueta jeans com bordado floral nas costas" },
  { src: g4, alt: "Carretéis de linha em tons rosé, bege e dourado", span: "row-span-2" },
  { src: g5, alt: "Fronha bege com monograma dourado bordado" },
  { src: g6, alt: "Manta de bebê branca com nome bordado em rosa" }
];
function Galeria() {
  const ref = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "galeria", ref, className: "py-24 md:py-32 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto reveal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-script text-2xl text-primary", children: "Portfólio" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl mt-2", children: [
        "Nossa ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gradient-rose", children: "galeria" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Uma seleção das peças que ganharam o coração de quem encomendou." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[240px] gap-4", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `gallery-item reveal relative overflow-hidden rounded-2xl shadow-soft ${it.span ?? ""}`,
        style: { transitionDelay: `${i * 50}ms` },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: it.src,
              alt: it.alt,
              loading: "lazy",
              width: 1024,
              height: 1024,
              className: "w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-script text-2xl text-background", children: "Bordado à mão" }) })
        ]
      },
      i
    )) })
  ] }) });
}
const depoimentos = [
  {
    nome: "Marina Costa",
    texto: "Recebi minha manta com o nome do meu filho e chorei. O acabamento é perfeito, virou herança de família.",
    inicial: "M"
  },
  {
    nome: "Camila Ribeiro",
    texto: "Encomendei uma jaqueta bordada para presentear minha irmã e ela amou! Atendimento atencioso do início ao fim.",
    inicial: "C"
  },
  {
    nome: "Juliana Fonseca",
    texto: "Trabalho impecável e cheio de carinho. Cada detalhe mostra dedicação. Já virei cliente fiel!",
    inicial: "J"
  }
];
function Depoimentos() {
  const ref = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "depoimentos",
      ref,
      className: "py-24 md:py-32 bg-secondary/40",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto reveal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-script text-2xl text-primary", children: "Histórias" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl mt-2", children: [
            "O que dizem nossas ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gradient-rose", children: "clientes" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid md:grid-cols-3 gap-6", children: depoimentos.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "figure",
          {
            className: "reveal bg-card rounded-3xl p-8 shadow-soft border border-border/60 hover-lift",
            style: { transitionDelay: `${i * 80}ms` },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "36", height: "36", viewBox: "0 0 24 24", fill: "currentColor", className: "text-accent mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 7H5a2 2 0 00-2 2v4a2 2 0 002 2h2v1a3 3 0 01-3 3v2a5 5 0 005-5V9a2 2 0 00-2-2zm10 0h-4a2 2 0 00-2 2v4a2 2 0 002 2h2v1a3 3 0 01-3 3v2a5 5 0 005-5V9a2 2 0 00-2-2z" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "font-display text-xl leading-relaxed text-foreground italic", children: [
                '"',
                d.texto,
                '"'
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-6 flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-full bg-gradient-rose flex items-center justify-center text-primary-foreground font-display text-lg", children: d.inicial }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-foreground", children: d.nome }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-accent tracking-widest", children: "★ ★ ★ ★ ★" })
                ] })
              ] })
            ]
          },
          d.nome
        )) })
      ] })
    }
  );
}
const passos = [
  { n: "01", titulo: "Escolha o produto", desc: "Selecione a peça que deseja personalizar — roupa, enxoval ou presente." },
  { n: "02", titulo: "Envie sua ideia", desc: "Compartilhe nome, frase, cores ou referência visual via WhatsApp." },
  { n: "03", titulo: "Aprovação do design", desc: "Você recebe uma prévia digital antes da produção começar." },
  { n: "04", titulo: "Produção e entrega", desc: "Bordamos com carinho e enviamos para todo o Brasil." }
];
function ComoFunciona() {
  const ref = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { ref, className: "py-24 md:py-32 bg-background relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-0 right-0 h-48 bg-gradient-gold opacity-5 blur-3xl -z-0", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-script text-2xl text-primary", children: "Simples assim" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl mt-2", children: [
          "Como ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gradient-rose", children: "funciona" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 grid md:grid-cols-4 gap-6 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute top-8 left-[12.5%] right-[12.5%] border-t-2 border-dotted border-accent/40", "aria-hidden": true }),
        passos.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal text-center relative", style: { transitionDelay: `${i * 100}ms` }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto w-16 h-16 rounded-full bg-gradient-gold shadow-gold flex items-center justify-center font-display text-xl text-foreground", children: p.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mt-5 text-foreground", children: p.titulo }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed max-w-[220px] mx-auto", children: p.desc })
        ] }, p.n))
      ] })
    ] })
  ] });
}
function CTA() {
  const ref = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { ref, className: "py-20 md:py-28 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-[2.5rem] overflow-hidden bg-gradient-rose p-10 md:p-16 shadow-elegant", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gold/30 blur-3xl", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-16 -left-10 w-64 h-64 rounded-full bg-cream/20 blur-3xl", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-script text-2xl text-primary-foreground/90", children: "Pronta?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl text-primary-foreground mt-2 leading-tight", children: [
        "Vamos criar uma peça ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "única para você" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-primary-foreground/85 text-lg", children: "Conte sua ideia agora pelo WhatsApp e receba um orçamento sem compromisso." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: whatsappLink(),
            target: "_blank",
            rel: "noopener noreferrer",
            className: "btn-shine inline-flex items-center gap-2 px-8 py-4 rounded-full bg-background text-primary tracking-wide hover:bg-cream transition-colors shadow-soft",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.3-.7.3-1.2.2-1.4-.1-.2-.3-.3-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.2.8.9-3-.2-.3C4.4 14.9 4 13.5 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z" }) }),
              "Falar no WhatsApp"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: CONTACT.instagramUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-2 px-6 py-4 rounded-full border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 transition-colors",
            children: "Ver Instagram"
          }
        )
      ] })
    ] })
  ] }) }) });
}
function Contato() {
  const ref = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contato", ref, className: "py-24 md:py-32 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto reveal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-script text-2xl text-primary", children: "Vamos conversar" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl mt-2", children: [
        "Fale ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gradient-rose", children: "conosco" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: whatsappLink(),
          target: "_blank",
          rel: "noopener noreferrer",
          className: "reveal bg-card rounded-3xl p-8 border border-border/60 hover-lift text-center group",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 mx-auto rounded-full bg-gradient-rose flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.3-.7.3-1.2.2-1.4-.1-.2-.3-.3-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mt-5", children: "WhatsApp" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-2", children: CONTACT.whatsappDisplay }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary text-sm mt-3 inline-block", children: "Enviar mensagem →" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: CONTACT.instagramUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "reveal bg-card rounded-3xl p-8 border border-border/60 hover-lift text-center group",
          style: { transitionDelay: "80ms" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 mx-auto rounded-full bg-gradient-gold flex items-center justify-center text-foreground group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "17.5", cy: "6.5", r: "1", fill: "currentColor" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mt-5", children: "Instagram" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-2", children: CONTACT.instagram }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary text-sm mt-3 inline-block", children: "Seguir →" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: `mailto:${CONTACT.email}`,
          className: "reveal bg-card rounded-3xl p-8 border border-border/60 hover-lift text-center group",
          style: { transitionDelay: "160ms" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 mx-auto rounded-full bg-gradient-rose flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "3", y: "5", width: "18", height: "14", rx: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 7l9 6 9-6" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mt-5", children: "E-mail" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-2 break-all", children: CONTACT.email }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary text-sm mt-3 inline-block", children: "Escrever →" })
          ]
        }
      )
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-foreground text-background/90 pt-16 pb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-script text-3xl text-accent", children: "Rodrigo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl tracking-widest uppercase", children: "Bordados" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-background/60 max-w-xs leading-relaxed", children: "Bordados artesanais e personalizados, feitos ponto a ponto com carinho para presentear momentos." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-lg text-accent", children: "Navegação" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2 text-sm text-background/70", children: ["Sobre", "Serviços", "Galeria", "Depoimentos", "Contato"].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: `#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`,
            className: "hover:text-accent transition-colors",
            children: l
          }
        ) }, l)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-lg text-accent", children: "Contato" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 text-sm text-background/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "WhatsApp: ",
            CONTACT.whatsappDisplay
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "Instagram: ",
            CONTACT.instagram
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: CONTACT.email })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 pt-6 border-t border-background/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-background/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Rodrigo Bordados. Todos os direitos reservados."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script text-base text-accent/80", children: "Feito com amor, ponto a ponto." })
    ] })
  ] }) });
}
function FloatingWhatsApp() {
  const [show, setShow] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: whatsappLink(),
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Falar no WhatsApp",
      className: `fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-rose text-primary-foreground flex items-center justify-center shadow-elegant transition-all duration-500 hover:scale-110 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full bg-rose/40 animate-ping", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "26", height: "26", viewBox: "0 0 24 24", fill: "currentColor", className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.3-.7.3-1.2.2-1.4-.1-.2-.3-.3-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.2.8.9-3-.2-.3C4.4 14.9 4 13.5 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z" }) })
      ]
    }
  );
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sobre, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Servicos, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Galeria, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Depoimentos, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ComoFunciona, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contato, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingWhatsApp, {})
  ] });
}
export {
  Index as component
};
