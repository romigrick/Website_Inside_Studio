import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Sparkles, ArrowUpRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const Contact = () => (

  <div className="relative text-white selection:bg-blue-500/30">
   
    <div className="fixed inset-0 bg-[#050505] -z-10" />

    {/* Background Orbs posicionados de forma fixa para cobrir toda a viewport */}
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-purple-600/10 blur-[120px] rounded-full" />
    </div>

    {/* Conteúdo fluído: w-[90%] conforme o padrão estabelecido */}
    <div className="relative z-10 w-[75%] max-w-[1600px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        
        {/* Coluna de Texto */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white tracking-tighter leading-[0.9]">
            Vamos criar algo <br/>
            <span className="text-neutral-500 italic font-light text-white/50">único juntos.</span>
          </h1>
          
          <p className="text-xl text-neutral-400 mb-16 font-light leading-relaxed max-w-lg">
            Estamos prontos para ouvir sobre o seu projeto e transformar sua visão em impacto digital.
          </p>
          
          <div className="space-y-10">
            <div className="group flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                <Mail size={22} strokeWidth={1.2} />
              </div>
              <div className="flex flex-col text-left font-sans">
                <span className="text-[10px] text-neutral-500 uppercase font-bold tracking-[0.2em] mb-1">Email</span>
                <span className="text-lg font-light tracking-tight group-hover:text-blue-500 transition-colors">contato@insidestudio.com.br</span>
              </div>
            </div>

            <div className="group flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                <Phone size={22} strokeWidth={1.2} />
              </div>
              <div className="flex flex-col text-left font-sans">
                <span className="text-[10px] text-neutral-500 uppercase font-bold tracking-[0.2em] mb-1">WhatsApp</span>
                <span className="text-lg font-light tracking-tight group-hover:text-blue-500 transition-colors">+55 42 99814.1401</span>
              </div>
            </div>
          </div>

          <motion.div variants={fadeInUp} className="mt-20 pt-10 border-t border-white/5 flex gap-8">
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-white transition-colors flex items-center gap-2 group">
              Instagram <ArrowUpRight size={14} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-white transition-colors flex items-center gap-2 group">
              LinkedIn <ArrowUpRight size={14} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        {/* Coluna do Formulário */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-blue-500/10 blur-[120px] -z-10 rounded-full" />
          <div className="bg-[#080808] p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl">
             <ContactForm />
          </div>
        </motion.div>

      </div>
    </div>
  </div>
);

export default Contact;