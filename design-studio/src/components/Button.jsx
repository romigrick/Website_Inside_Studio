import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, primary = false, icon: Icon, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`
      flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 relative z-30
      ${primary 
        ? 'bg-white text-black hover:bg-neutral-200 shadow-[0_0_20px_rgba(255,255,255,0.15)]' 
        : 'bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20'}
    `}
  >
    {children}
    {Icon && <Icon size={18} />}
  </motion.button>
);

export default Button;