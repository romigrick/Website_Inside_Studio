// src/components/ContactForm.jsx
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Orçamento de Projeto');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    if(name === '' || email === '' || message === ''){
        alert("Preencha todos os campos");
        return;
    }

    setLoading(true);

    const templateParams = {
        from_name: name,
        email: email,
        subject: subject,
        message: message
    }

    const templateId = "template_a26d45n";
    const serviceId = "service_wueiv3d";
    const myKey = "0sABaEPF59PqSVtsU";
    const replyID = "template_426xx6q";

    // ⚠️ SUBSTITUA PELOS SEUS DADOS DO EMAILJS AQUI ⚠️
    emailjs.send(serviceId, templateId, templateParams, myKey)
    .then((response) => {
        console.log("EMAIL ENVIADO", response.status, response.text);
        setName('');
        setEmail('');
        setMessage('');
        setLoading(false);
       // alert("Mensagem enviada com sucesso!");
    }, (err) => {
        console.log("ERRO: ", err);
        setLoading(false);
        //alert("Erro ao enviar. Tente novamente.");
    });

        emailjs.send(serviceId, replyID, templateParams, myKey)
    .then((response) => {
        console.log("EMAIL ENVIADO", response.status, response.text);
        setName('');
        setEmail('');
        setMessage('');
        setLoading(false);
       // alert("Mensagem enviada com sucesso!");
    }, (err) => {
        console.log("ERRO: ", err);
        setLoading(false);
        //alert("Erro ao enviar. Tente novamente.");
    });
  }

  return (
    <form onSubmit={sendEmail} className="bg-[#080808] p-8 md:p-12 rounded-3xl border border-white/5 space-y-6">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* NOME */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-400">Nome</label>
          <input 
            type="text" 
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" 
            placeholder="Seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        {/* EMAIL */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-400">Email</label>
          <input 
            type="email" 
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" 
            placeholder="seu@email.com" 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
      </div>

{/* ASSUNTO */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-neutral-400">Assunto</label>
        <select 
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors [&>option]:bg-[#080808] [&>option]:text-white"
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
        >
          {/* Adicionei a classe de cor sólida em cada option */}
          <option className="bg-[#080808] text-white" value="Orçamento de Projeto">Orçamento de Projeto</option>
          <option className="bg-[#080808] text-white" value="Parceria">Parceria</option>
          <option className="bg-[#080808] text-white" value="Trabalhe Conosco">Trabalhe Conosco</option>
          <option className="bg-[#080808] text-white" value="Outros">Outros</option>
        </select>
      </div>

      {/* MENSAGEM */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-neutral-400">Mensagem</label>
        <textarea 
          rows={4} 
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" 
          placeholder="Conte sobre seu projeto..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>
      </div>

      {/* BOTÃO */}
      <button 
        type="submit" 
        disabled={loading}
        className={`w-full font-bold py-4 rounded-xl transition-colors ${loading ? 'bg-neutral-600 text-neutral-400 cursor-not-allowed' : 'bg-white text-black hover:bg-neutral-200'}`}
      >
        {loading ? 'Enviando...' : 'Enviar Mensagem'}
      </button>

    </form>
  );
}

export default ContactForm;