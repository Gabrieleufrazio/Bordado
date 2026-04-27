import { CONTACT } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="bg-foreground text-background/90 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-script text-3xl text-accent">Rodrigo</span>
              <span className="font-display text-xl tracking-widest uppercase">Bordados</span>
            </div>
            <p className="mt-4 text-sm text-background/60 max-w-xs leading-relaxed">
              Bordados artesanais e personalizados, feitos ponto a ponto com carinho para presentear momentos.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg text-accent">Navegação</h4>
            <ul className="mt-4 space-y-2 text-sm text-background/70">
              {["Sobre", "Serviços", "Galeria", "Depoimentos", "Contato"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                    className="hover:text-accent transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-accent">Contato</h4>
            <ul className="mt-4 space-y-2 text-sm text-background/70">
              <li>WhatsApp: {CONTACT.whatsappDisplay}</li>
              <li>Instagram: {CONTACT.instagram}</li>
              <li>{CONTACT.email}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-background/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-background/50">
          <p>© {new Date().getFullYear()} Rodrigo Bordados. Todos os direitos reservados.</p>
          <p className="font-script text-base text-accent/80">Feito com amor, ponto a ponto.</p>
        </div>
      </div>
    </footer>
  );
}
