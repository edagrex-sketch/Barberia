import React from 'react';
import { motion } from 'framer-motion';

const AwardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>
);

const GemIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/></svg>
);

const ShieldCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
);

const reasons = [
  {
    title: "Barberos Certificados",
    desc: "Nuestro equipo cuenta con años de experiencia y capacitación internacional.",
    icon: AwardIcon
  },
  {
    title: "Productos Premium",
    desc: "Solo utilizamos las mejores marcas para el cuidado de tu cabello y piel.",
    icon: GemIcon
  },
  {
    title: "Ambiente Exclusivo",
    desc: "Un espacio diseñado para que te relajes y disfrutes de una experiencia única.",
    icon: ShieldCheckIcon
  }
];

export default function WhyUs() {
  return (
    <section id="nosotros" className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative text background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20vw] font-bold text-white/[0.02] select-none pointer-events-none whitespace-nowrap">
        BARBERÍA SOLÍS BARBERÍA SOLÍS
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="mb-8 flex justify-center">
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-24 h-24 rounded-full border-2 border-accent flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-colors duration-500"
                >
                  <item.icon />
                </motion.div>
              </div>
              <h3 className="text-2xl font-playfair font-bold text-white mb-4 uppercase tracking-wider">{item.title}</h3>
              <p className="text-white-smoke/60 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
