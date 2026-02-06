import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, Instagram, Mail, Phone, ChevronRight, 
  Globe, Zap, Shield, Target, Sparkles, Command, Layers 
} from 'lucide-react';
import { TEAM_MEMBERS, COMPANY_INFO } from '../data';
import ContactForm from '../components/ContactForm';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const Team = () => {
  const [counters, setCounters] = useState({});

  useEffect(() => {
    COMPANY_INFO.stats.forEach((stat, index) => {
      const numericValue = parseInt(stat.value);
      if (!isNaN(numericValue)) {
        let current = 0;
        const duration = 2000; 
        const steps = 60;
        const increment = numericValue / steps;
        const timer = setInterval(() => {
          current += increment;
          if (current >= numericValue) {
            current = numericValue;
            clearInterval(timer);
          }
          setCounters(prev => ({ ...prev, [index]: Math.floor(current) }));
        }, duration / steps);
      }
    });
  }, []);

  return (
    <div className="text-white selection:bg-blue-500/30 overflow-hidden">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="fixed inset-0 bg-[#050505] -z-10" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      {/* CORREÇÃO DE ALINHAMENTO:

      */}
      <div className="w-[75%] max-w-[1600px] mx-auto container mx-auto space-y-32 relative z-10">
        
        {/* --- HERO SECTION --- */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >

          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
            Inside Studio<br /> <span className="italic font-light text-white/70">{COMPANY_INFO.story.title}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-400 max-w-4xl mx-auto leading-relaxed font-light">
            {COMPANY_INFO.story.content}
          </p>
        </motion.section>

        {/* --- VALUES (BENTO GRID STYLE) --- */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 text-left">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold tracking-tight mb-4 text-white">DNA Criativo</h2>
              <p className="text-neutral-500">Pilares que sustentam nossa visão artística e técnica em cada pixel entregue.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {COMPANY_INFO.values.map((value, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                whileHover={{ y: -5 }}
                className="group p-8 rounded-3xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent hover:border-blue-500/30 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <Command size={24} strokeWidth={1.5} className="transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-left">{value.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed font-light group-hover:text-neutral-400 transition-colors text-left">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- CLIENT TYPES --- */}
        <section className="py-20 bg-white/[0.02] rounded-[40px] border border-white/5 px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 tracking-tighter">Ecossistemas que Transformamos</h2>
            <p className="text-neutral-500 italic">Soluções modulares para desafios distintos.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {['b2c', 'b2b'].map((type) => (
              <motion.div 
                key={type}
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden p-10 rounded-[32px] bg-[#0A0A0A] border border-white/10 group"
              >
                <div className="absolute top-0 right-0 p-6 opacity-[0.03] text-8xl font-black uppercase select-none group-hover:opacity-[0.07] transition-opacity">
                  {type}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                   {type === 'b2c' ? <Zap size={28} strokeWidth={1.2} /> : <Target size={28} strokeWidth={1.2} />}
                </div>
                <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight text-white group-hover:text-blue-500 transition-colors text-left">
                  {COMPANY_INFO.clientTypes[type].title}
                </h3>
                <p className="text-neutral-400 mb-8 font-light italic text-sm text-left">
                  {COMPANY_INFO.clientTypes[type].description}
                </p>
                <ul className="space-y-4">
                  {COMPANY_INFO.clientTypes[type].services.map((s, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-neutral-300 font-light">
                      <ChevronRight size={14} className="text-blue-500" /> {s}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- STATS --- */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-12 border-y border-white/5 py-16">
          {COMPANY_INFO.stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-5xl font-light mb-2 tracking-tighter group-hover:text-blue-500 transition-colors">
                {stat.value.includes('+') ? `${counters[index] || 0}+` : stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* --- TEAM GRID --- */}
        <section>
          <div className="mb-16 text-left">
            <h2 className="text-5xl font-bold tracking-tighter mb-4">Mentes por trás<br/>da execução</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                className="group relative"
              >
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-neutral-900 mb-6 relative border border-white/5">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex gap-3">
                      <a href={member.linkedin} className="p-2.5 bg-white/10 backdrop-blur-md rounded-full hover:bg-white hover:text-black transition-all duration-300"><Linkedin size={18} strokeWidth={1.5} /></a>
                      <a href={member.instagram} className="p-2.5 bg-white/10 backdrop-blur-md rounded-full hover:bg-white hover:text-black transition-all duration-300"><Instagram size={18} strokeWidth={1.5} /></a>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold tracking-tight text-left">{member.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-4 h-[1px] bg-blue-500"></span>
                  <p className="text-blue-500 text-[10px] font-bold uppercase tracking-widest">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center bg-blue-600/5 rounded-[50px] p-12 md:p-20 border border-blue-500/10 relative overflow-hidden">
          <div className="relative z-10 text-left">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-white leading-tight">Vamos tirar<br/>do papel?</h2>
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <Mail size={22} strokeWidth={1.2} />
                </div>
                <div>
                  <p className="text-[10px] text-neutral-500 uppercase font-bold tracking-[0.2em] mb-1">E-mail</p>
                  <p className="text-lg font-light">contato@insidestudio.com.br</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <Phone size={22} strokeWidth={1.2} />
                </div>
                <div>
                  <p className="text-[10px] text-neutral-500 uppercase font-bold tracking-[0.2em] mb-1">WhatsApp</p>
                  <p className="text-lg font-light">+55 (42) 9 9814.1401</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-10">
            <ContactForm />
          </div>
        </section>

      </div>
    </div>
  );
};

export default Team;