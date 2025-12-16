import React from 'react';
import ContactForm from '../components/ContactForm';
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
      <ContactForm />
    </div>
  </div>
);

export default Contact;