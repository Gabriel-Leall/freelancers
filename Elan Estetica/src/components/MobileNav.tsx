import * as React from "react";
import { Menu, X } from "lucide-react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { label: "Tratamentos", href: "#tratamentos" },
    { label: "A clínica", href: "#clinica" },
    { label: "Equipe", href: "#equipe" },
    { label: "Depoimentos", href: "#depoimentos" },
  ];

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
        aria-expanded={isOpen}
        className="p-2.5 text-elan-text hover:text-elan-green transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-elan-green rounded-lg"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-x-0 bottom-0 top-[86px] z-40 bg-[#F5F0EA]/98 backdrop-blur-md px-6 py-8 flex flex-col justify-between border-t border-elan-border/60 overflow-y-auto animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-serif text-2xl text-elan-text hover:text-elan-green transition-colors py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-elan-green rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-6 pb-2 border-t border-elan-border/50">
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20%C3%89lan%20Est%C3%A9tica."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center w-full h-12 rounded-full text-xs font-sans font-semibold tracking-wider uppercase bg-elan-green text-white hover:bg-elan-dark transition-all duration-200 shadow-md active:scale-95 cursor-pointer"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
