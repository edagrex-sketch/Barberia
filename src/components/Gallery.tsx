import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);

const images = [
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1532710093739-9470acff878f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1512690196162-4c82da5638a6?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=800",
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="galeria" className="section-padding bg-dark-gray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold">Nuestro Arte</h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-6" />
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden group cursor-pointer"
              onClick={() => setSelectedImg(src)}
            >
              <img 
                src={src} 
                alt={index === 0 ? "Interior elegante de Barbería Solís con sillones clásicos" : 
                     index === 1 ? "Detalle de herramientas de barbería profesional" :
                     index === 2 ? "Barbero profesional realizando corte de cabello degradado" :
                     index === 3 ? "Servicio de corte de cabello masculino premium" :
                     index === 4 ? "Afeitado tradicional con toalla caliente y navaja" :
                     "Perfilado y diseño de barba con acabado impecable"} 
                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
                <div className="text-accent mb-2">
                  <SearchIcon />
                </div>
                <span className="text-white-smoke font-bold uppercase tracking-widest text-sm">Ver más</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
          >
            <button 
              className="absolute top-10 right-10 text-white-smoke hover:text-accent transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <XIcon />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImg}
              className="max-w-full max-h-[90vh] object-contain shadow-2xl border-4 border-accent/20"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
