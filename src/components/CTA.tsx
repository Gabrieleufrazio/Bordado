import { whatsappLink, CONTACT } from "@/lib/contact";
import { useReveal } from "@/hooks/use-reveal";

export function CTA() {
  const ref = useReveal();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-20 md:py-28 px-6">
      <div className="container mx-auto reveal">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-rose p-10 md:p-16 shadow-elegant">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gold/30 blur-3xl" aria-hidden />
          <div className="absolute -bottom-16 -left-10 w-64 h-64 rounded-full bg-cream/20 blur-3xl" aria-hidden />

          <div className="relative max-w-2xl">
            <span className="font-script text-2xl text-primary-foreground/90">Pronta?</span>
            <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mt-2 leading-tight">
              Vamos criar uma peça <span className="italic">única para você</span>
            </h2>
            <p className="mt-5 text-primary-foreground/85 text-lg">
              Conte sua ideia agora pelo WhatsApp e receba um orçamento sem compromisso.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine inline-flex items-center gap-2 px-8 py-4 rounded-full bg-background text-primary tracking-wide hover:bg-cream transition-colors shadow-soft"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.3-.7.3-1.2.2-1.4-.1-.2-.3-.3-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.2.8.9-3-.2-.3C4.4 14.9 4 13.5 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z" />
                </svg>
                Falar no WhatsApp
              </a>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                Ver Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
