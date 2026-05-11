import React from 'react';
import { motion } from 'framer-motion';

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

export default function Contact() {
  return (
    <section id="contacto" className="section-padding bg-primary">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-accent uppercase tracking-[0.3em] text-sm font-bold"
            >
              Agenda tu cita
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mt-4 mb-8">Contáctanos</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-center group">
                <div className="w-14 h-14 rounded-full border border-accent/30 flex items-center justify-center mr-6 group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                  <div className="text-accent group-hover:text-primary transition-colors">
                    <PhoneIcon />
                  </div>
                </div>
                <div>
                  <p className="text-white-smoke/50 text-xs uppercase tracking-widest mb-1">WhatsApp</p>
                  <p className="text-xl font-bold">+52 1 967 121 0625</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-14 h-14 rounded-full border border-accent/30 flex items-center justify-center mr-6 group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                  <div className="text-accent group-hover:text-primary transition-colors">
                    <ClockIcon />
                  </div>
                </div>
                <div>
                  <p className="text-white-smoke/50 text-xs uppercase tracking-widest mb-1">Horario</p>
                  <p className="text-xl font-bold">Lunes a Sábado: 10am - 8pm</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-14 h-14 rounded-full border border-accent/30 flex items-center justify-center mr-6 group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                  <div className="text-accent group-hover:text-primary transition-colors">
                    <MapPinIcon />
                  </div>
                </div>
                <div>
                  <p className="text-white-smoke/50 text-xs uppercase tracking-widest mb-1">Ubicación</p>
                  <p className="text-xl font-bold">Prolongación Insurgentes 115, Barrio de San Diego, 29270 San Cristóbal de las Casas, Chis.</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 border border-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300">
                <InstagramIcon />
              </a>
              <a href="#" className="w-12 h-12 border border-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300">
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full h-[450px] border border-accent/20 overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-700 shadow-2xl"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.0267793574163!2d-92.63936838513364!3d16.725629788478477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ed4541969740ff%3A0x6ee51071acea0a9b!2sProlongacion%20Insurgentes%20115%2C%20Barrio%20de%20San%20Diego%2C%2029270%20San%20Crist%C3%B3bal%20de%20las%20Casas%2C%20Chis.!5e0!3m2!1ses-419!2smx!4v1715456400000!5m2!1ses-419!2smx" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
