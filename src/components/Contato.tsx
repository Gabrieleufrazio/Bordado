import { CONTACT, whatsappLink } from "@/lib/contact";
import { useReveal } from "@/hooks/use-reveal";

export function Contato() {
  const ref = useReveal();
  return (
    <section id="contato" ref={ref as React.RefObject<HTMLElement>} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="font-script text-2xl text-primary">Vamos conversar</span>
          <h2 className="font-display text-4xl md:text-5xl mt-2">
            Fale <span className="italic text-gradient-rose">conosco</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal bg-card rounded-3xl p-8 border border-border/60 hover-lift text-center group"
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-gradient-rose flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.3-.7.3-1.2.2-1.4-.1-.2-.3-.3-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
            </div>
            <h3 className="font-display text-xl mt-5">WhatsApp</h3>
            <p className="text-muted-foreground text-sm mt-2">{CONTACT.whatsappDisplay}</p>
            <span className="text-primary text-sm mt-3 inline-block">Enviar mensagem →</span>
          </a>

          <a
            href={CONTACT.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal bg-card rounded-3xl p-8 border border-border/60 hover-lift text-center group"
            style={{ transitionDelay: "80ms" }}
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-gradient-gold flex items-center justify-center text-foreground group-hover:scale-110 transition-transform">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </div>
            <h3 className="font-display text-xl mt-5">Instagram</h3>
            <p className="text-muted-foreground text-sm mt-2">{CONTACT.instagram}</p>
            <span className="text-primary text-sm mt-3 inline-block">Seguir →</span>
          </a>

          <a
            href={`mailto:${CONTACT.email}`}
            className="reveal bg-card rounded-3xl p-8 border border-border/60 hover-lift text-center group"
            style={{ transitionDelay: "160ms" }}
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-gradient-rose flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </div>
            <h3 className="font-display text-xl mt-5">E-mail</h3>
            <p className="text-muted-foreground text-sm mt-2 break-all">{CONTACT.email}</p>
            <span className="text-primary text-sm mt-3 inline-block">Escrever →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
