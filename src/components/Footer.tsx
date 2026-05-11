import React from 'react';

const ScissorsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 rotate-45"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><circle cx="6" cy="18" r="3"/><path d="M8.12 15.88 12 12"/><path d="M14.8 14.8 20 20"/><path d="M14.8 9.2 20 4"/></svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#050505] border-t border-accent/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#inicio" className="text-3xl font-playfair font-bold text-accent tracking-tighter mb-6 block">
              BARBERÍA SOLÍS
            </a>
            <p className="text-white-smoke/40 max-w-sm mb-8 leading-relaxed">
              Dedicados al arte de la barbería clásica con un toque moderno y exclusivo. 
              Más que un corte, una experiencia que define tu estilo.
            </p>
            <div className="flex items-center text-accent">
              <ScissorsIcon />
              <span className="uppercase tracking-[0.2em] text-xs font-bold">Maestros Barberos</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Navegación</h4>
            <ul className="space-y-4">
              <li><a href="#inicio" className="text-white-smoke/60 hover:text-accent transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="text-white-smoke/60 hover:text-accent transition-colors">Servicios</a></li>
              <li><a href="#galeria" className="text-white-smoke/60 hover:text-accent transition-colors">Galería</a></li>
              <li><a href="#nosotros" className="text-white-smoke/60 hover:text-accent transition-colors">Nosotros</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Síguenos</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white-smoke/60 hover:text-accent transition-colors">Instagram</a></li>
              <li><a href="#" className="text-white-smoke/60 hover:text-accent transition-colors">Facebook</a></li>
              <li><a href="#" className="text-white-smoke/60 hover:text-accent transition-colors">TikTok</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-center">
          <p className="text-white-smoke/20 text-xs mb-4 md:mb-0">
            © {currentYear} Barbería Solís. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-white-smoke/20 text-xs">
            <a href="#" className="hover:text-accent transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-accent transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
