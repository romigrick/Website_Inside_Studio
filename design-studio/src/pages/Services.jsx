import React from 'react';
import { SERVICES } from '../data';
import { ArrowRight, Play, Mail, Plus, Minus, Star, Phone } from 'lucide-react';
import { PORTFOLIO_HOME } from '../data';
import ParallaxCard from '../components/ParallaxCard';

const Services = () => (
  <div className="container mx-auto min-h-screen relative z-10">
    <div className="px-6 mb-10 text-left mx-auto">
      <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-4 block">Nossos Serviços</span>
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Expertise de <br />Ponta a Ponta</h1>
      <p className="text-xl text-neutral-400">Oferecemos um leque completo de soluções visuais para marcas que buscam liderança.</p>
    </div>

    <div className="px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

    {/* FEATURED WORK */}
    <section id="trabalhos" className="container mx-auto pt-20 px-6 mb-20 z-10 relative">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Trabalhos Recentes</h2>
          <p className="text-neutral-500 text-lg">Uma curadoria dos nossos melhores projetos.</p>
        </div>
        <button onClick={() => navigate('/portfolio')} className="hidden md:flex items-center gap-2 text-white hover:text-blue-400 transition-colors font-medium">
          Ver todo portfólio <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {PORTFOLIO_HOME.map((item, index) => (
          <ParallaxCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  </div>
);

export default Services;