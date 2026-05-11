import React from 'react';
import { motion } from 'framer-motion';

const ScissorsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><circle cx="6" cy="18" r="3"/><path d="M8.12 15.88 12 12"/><path d="M14.8 14.8 20 20"/><path d="M14.8 9.2 20 4"/></svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);

const RulerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.3 15.3 16 10l-4.9 4.9-1.4-1.4L14.6 8.6 12 6l-1.4 1.4-1.4-1.4L10.6 4.6 8 2 2.7 7.3l18.6 18.6L21.3 15.3z"/></svg>
);

const WindIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>
);

const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
);

const services = [
  { name: 'Corte Clásico', price: '$120', icon: ScissorsIcon, desc: 'Corte tradicional a tijera o máquina con acabado premium.' },
  { name: 'Corte + Barba', price: '$180', icon: UserIcon, desc: 'El combo completo para renovar tu imagen por completo.' },
  { name: 'Afeitado con Navaja', price: '$100', icon: RulerIcon, desc: 'Experiencia tradicional con toallas calientes y navaja.' },
  { name: 'Diseño de Barba', price: '$80', icon: WindIcon, desc: 'Perfilado y recorte para una barba perfecta.' },
  { name: 'Tratamiento Capilar', price: '$150', icon: SparklesIcon, desc: 'Hidratación y cuidado para la salud de tu cabello.' },
];

function ServiceCard({ service, index }: { service: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5 }}
      style={{ perspective: 1000 }}
      className="bg-dark-gray p-8 border border-accent/10 hover:border-accent/40 transition-colors duration-500 group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 -mr-12 -mt-12 rounded-full group-hover:bg-accent/10 transition-colors duration-500" />
      
      <div className="text-accent mb-6">
        <service.icon />
      </div>
      <h3 className="text-2xl font-playfair font-bold text-white mb-2">{service.name}</h3>
      <p className="text-white-smoke/60 text-sm mb-6 leading-relaxed">{service.desc}</p>
      <div className="text-3xl font-playfair font-bold text-accent">{service.price}</div>
      
      <div className="mt-6 w-full h-px bg-accent/20 group-hover:bg-accent/50 transition-colors duration-500" />
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="servicios" className="section-padding bg-primary">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent uppercase tracking-[0.3em] text-sm font-bold"
          >
            Excelencia en cada corte
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-playfair font-bold mt-4"
          >
            Servicios <span className="text-accent">&</span> Precios
          </motion.h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.name} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
