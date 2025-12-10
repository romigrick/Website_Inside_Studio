import React from 'react';
import { SERVICES } from '../data';

const Services = () => (
  <div className="container mx-auto px-6 min-h-screen relative z-10">
    <div className="mb-20 text-center max-w-3xl mx-auto">
      <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-4 block">Nossos Serviços</span>
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Expertise de <br/>Ponta a Ponta</h1>
      <p className="text-xl text-neutral-400">Oferecemos um leque completo de soluções visuais para marcas que buscam liderança.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {SERVICES.map((service, i) => (
        <div 
          key={i} 
          className="group p-8 rounded-3xl bg-[#080808] border border-white/[0.05] hover:bg-[#111] transition-colors"
        >
          <div className="w-12 h-12 rounded-xl bg-white/[0.05] flex items-center justify-center mb-6 text-white group-hover:text-blue-400 transition-colors">
            <service.icon size={24} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
          <p className="text-neutral-500 leading-relaxed">{service.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Services;