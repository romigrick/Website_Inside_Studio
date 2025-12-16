// src/components/ParallaxCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ParallaxCard = ({ item }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }} 
      transition={{ duration: 0.5 }}
      // 'mb-4': Adiciona o espaço VERTICAL entre um card e outro
      // 'w-full': Garante que ocupe a largura da coluna
      className="rounded-xl relative mb-4 overflow-hidden group w-full break-inside-avoid"
    >
      
      {/* A Imagem define a altura do card */}
      <div className="w-full">
         <img 
           src={item.src || item.image} 
           alt={item.label || item.title} 
           // h-auto: O segredo. A altura se ajusta à imagem original.
           // block: Remove espaços fantasmas de linha
           className="w-full h-auto block transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
         />
      </div>
      
      {/* --- OVERLAYS --- */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
      
      {/* Tag (Categoria) */}
      <div className="absolute top-3 right-3 px-2 py-1 bg-black/40 backdrop-blur-md rounded text-[10px] font-bold uppercase tracking-widest text-white/50 border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {item.label || item.category}
      </div>
      
      {/* Título (Se houver) */}
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