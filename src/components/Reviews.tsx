import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-accent"><path d="M12 1.7a1 1 0 0 1 .9.6l2.3 4.7 5.2.8a1 1 0 0 1 .5 1.7l-3.8 3.7.9 5.1a1 1 0 0 1-1.5 1L12 16.2l-4.6 2.4a1 1 0 0 1-1.5-1l.9-5.1-3.8-3.7a1 1 0 0 1 .5-1.7l5.2-.8 2.3-4.7a1 1 0 0 1 .9-.6Z"/></svg>
);

const QuoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent/20"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v7c0 1.25.75 2 2 2h4c0 2.5-1 4.5-3 5.5"/><path d="M14 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v7c0 1.25.75 2 2 2h4c0 2.5-1 4.5-3 5.5"/></svg>
);

const reviews = [
  {
    name: "Ricardo Montes",
    text: "La mejor barbería de la ciudad. La atención al detalle de los barberos es impresionante. Muy recomendada.",
    initials: "RM"
  },
  {
    name: "Javier Sosa",
    text: "Excelente ambiente y productos de calidad. Mi corte y barba quedaron perfectos. Definitivamente volveré.",
    initials: "JS"
  },
  {
    name: "Luis García",
    text: "Un lugar con mucha clase. El afeitado con navaja es toda una experiencia. Servicio de primer nivel.",
    initials: "LG"
  },
  {
    name: "Mauricio Ruiz",
    text: "Puntualidad y profesionalismo. Los barberos realmente saben lo que hacen. El mejor trato que he recibido.",
    initials: "MR"
  },
  {
    name: "Daniel Herrera",
    text: "Desde que entras te sientes en un lugar exclusivo. El diseño de barba fue justo lo que pedí.",
    initials: "DH"
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-dark-gray overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold">Clientes Satisfechos</h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-6" />
        </div>

        <div className="relative max-w-4xl mx-auto h-[350px] md:h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 bg-[#121212] border border-accent/20 p-8 md:p-12 flex flex-col items-center text-center"
            >
              <div className="absolute top-8 left-8">
                <QuoteIcon />
              </div>
              
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              <p className="text-xl md:text-2xl font-inter italic text-white-smoke mb-8 leading-relaxed">
                "{reviews[currentIndex].text}"
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary font-bold mr-4">
                  {reviews[currentIndex].initials}
                </div>
                <div className="text-left">
                  <h4 className="font-playfair font-bold text-white text-lg">{reviews[currentIndex].name}</h4>
                  <p className="text-accent text-xs uppercase tracking-widest">Cliente Verificado</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'bg-accent w-8' : 'bg-accent/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
