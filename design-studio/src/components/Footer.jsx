import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-black border-t border-white/[0.05] pt-32 pb-12 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-900/5 rounded-full blur-[120px] pointer-events-none" />
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
        <div>
           <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter text-white">Vamos construir o <br/> futuro juntos?</h2>
           <div className="flex flex-col sm:flex-row gap-4 max-w-md">
             <input type="email" placeholder="seu@email.com" className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors" />
             <button className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">Inscrever <ArrowRight size={18} /></button>
           </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
           <div>
             <span className="text-white font-bold block mb-6">Explorar</span>
             <ul className="space-y-4 text-neutral-500">
               <li><Link to="/portfolio" className="hover:text-blue-400 transition-colors">Portfólio</Link></li>
               <li><Link to="/services" className="hover:text-blue-400 transition-colors">Serviços</Link></li>
               <li><Link to="/team" className="hover:text-blue-400 transition-colors">Equipe</Link></li>
               <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contato</Link></li>
             </ul>
           </div>
           <div>
             <span className="text-white font-bold block mb-6">Social</span>
             <ul className="space-y-4 text-neutral-500">
               <li><a href="https://www.instagram.com/insidestd_/" className="hover:text-blue-400 transition-colors">Instagram</a></li>
               <li><a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a></li>
               <li><a href="#" className="hover:text-blue-400 transition-colors">Behance</a></li>
             </ul>
           </div>
           <div>
             <span className="text-white font-bold block mb-6">Contato</span>
             <ul className="space-y-4 text-neutral-500">
               <li><a href="#" className="hover:text-blue-400 transition-colors">contato@insidestudio.com.br</a></li>
               <li><a href="wa.me/42998141401" className="hover:text-blue-400 transition-colors">42 9 9814.1401</a></li>
             </ul>
           </div>
        </div>
      </div>
      <div className="border-t border-white/[0.05] pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-600 font-medium">
        <p>&copy; {new Date().getFullYear()} Inside Studio.</p>
        <div className="flex gap-6 mt-4 md:mt-0"><a href="#" className="hover:text-white">Privacidade</a><a href="#" className="hover:text-white">Termos</a></div>
      </div>
    </div>
  </footer>
);

export default Footer;