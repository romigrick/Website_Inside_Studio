import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ParallaxCard = ({ item, index }) => {
  const ref = useRef(null);
  // O hook de scroll continua para o efeito de parallax interno
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <motion.div 
      ref={ref}
      // Usando whileInView com configuração segura para não desaparecer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }} 
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`relative rounded-xl overflow-hidden border border-white/10 bg-neutral-900 group ${item.span || 'col-span-1 h-[300px]'}`}
    >
      <div className="w-full h-full overflow-hidden">
        <motion.div style={{ y, scale: 1.15 }} className="w-full h-full">
           <img 
             src={item.src || item.image} 
             alt={item.label || item.title} 
             className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
           />
        </motion.div>
      </div>
      
      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
      
      <div className="absolute top-3 right-3 px-2 py-1 bg-black/40 backdrop-blur-md rounded text-[10px] font-bold uppercase tracking-widest text-white/50 border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {item.label || item.category}
      </div>
      
      {(item.title) && (
         <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/90 to-transparent flex justify-between items-end pointer-events-none">
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <ArrowUpRight size={16} />
            </span>
         </div>
      )}
    </motion.div>
  );
};

export default ParallaxCard;