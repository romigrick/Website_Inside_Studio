import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => (
  <div className="container mx-auto px-6 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* Texto Lateral - Estático */}
      <div>
        <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-4 block">Contato</span>
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white">Vamos criar algo <br/>único juntos?</h1>
        <p className="text-xl text-neutral-400 mb-12">Estamos prontos para ouvir sobre o seu projeto. Preencha o formulário ou nos envie um e-mail direto.</p>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-white">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center"><Mail size={20}/></div>
            <div><p className="text-sm text-neutral-500">Email</p><p className="font-medium">contato@insidestudio.com.br</p></div>
          </div>
          <div className="flex items-center gap-4 text-white">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center"><Phone size={20}/></div>
            <div><p className="text-sm text-neutral-500">Telefone</p><p className="font-medium">+55 42 99814.1401</p></div>
          </div>
        </div>
      </div>

      {/* Formulário - Estático */}
      <form className="bg-[#080808] p-8 md:p-12 rounded-3xl border border-white/5 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-400">Nome</label>
            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Seu nome" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-400">Email</label>
            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="seu@email.com" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-400">Assunto</label>
          <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors">
            <option>Orçamento de Projeto</option>
            <option>Parceria</option>
            <option>Trabalhe Conosco</option>
            <option>Outros</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-400">Mensagem</label>
          <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Conte sobre seu projeto..."></textarea>
        </div>
        <button className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-neutral-200 transition-colors">Enviar Mensagem</button>
      </form>
    </div>
  </div>
);

export default Contact;