import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useMotionValue } from 'framer-motion';

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref} className="text-4xl md:text-6xl font-bold text-accent font-playfair">
      +{displayValue.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <div className="bg-[#121212] py-12 md:py-20 border-y border-accent/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <div className="absolute top-0 left-1/4 w-px h-full bg-accent" />
         <div className="absolute top-0 right-1/4 w-px h-full bg-accent" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <Counter value={775} />
            <p className="mt-2 text-white-smoke/60 uppercase tracking-widest text-sm">Reseñas en Google</p>
          </div>
          <div className="flex flex-col items-center">
            <Counter value={5} suffix=" Años" />
            <p className="mt-2 text-white-smoke/60 uppercase tracking-widest text-sm">De experiencia</p>
          </div>
          <div className="flex flex-col items-center">
            <Counter value={3000} />
            <p className="mt-2 text-white-smoke/60 uppercase tracking-widest text-sm">Clientes satisfechos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
