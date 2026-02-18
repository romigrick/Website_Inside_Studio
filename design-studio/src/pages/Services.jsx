import React from 'react';
import { motion } from 'framer-motion';
import ParallaxCard from '../components/ParallaxCard';
import ContactForm from '../components/ContactForm';
import {
  HERO_GRID_ITEMS, CLIENTS, PORTFOLIO_HOME, SERVICES,
  IMPACT_STATS, TESTIMONIALS, FAQS
} from '../data';
import {
  Globe, Layout, Share2, Calendar,
  MessageSquare, CheckCircle2, ShieldCheck,
  Zap, Clock, Wallet, FileCode, Sparkles, ArrowRight, Mail, Phone
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const Services = () => {
  return (
    /* Uso de w-[90%] para adaptação fluida em qualquer resolução */
    <div className="w-[75%] max-w-[1600px] mx-auto mx-auto relative z-10">
      {/* Background Orbs - Camada fixa e profunda para evitar o "degrau" */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>
      {/* --- SECTION 1: SITES (HERO) --- */}
      <motion.section
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        className="relative"
      >
        <div className="p-8 md:p-16 rounded-[3rem] bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/5 border border-white/10 overflow-hidden relative">
          <div className="max-w-[800px] relative z-10">

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
              Sites que <br />
              <span className="text-neutral-500 italic font-light">convertem impacto.</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 mb-10 font-light leading-relaxed">
              Não entregamos apenas código. Construímos experiências digitais de alta performance, otimizadas para SEO e com um design que posiciona sua marca no topo.
            </p>

            <div className="flex flex-wrap gap-x-10 gap-y-6 border-t border-white/10 pt-10">
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle2 size={18} className="text-blue-500" strokeWidth={1.5} />
                <span>UX/UI Design Exclusivo</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle2 size={18} className="text-blue-500" strokeWidth={1.5} />
                <span>SEO de Alta Performance</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle2 size={18} className="text-blue-500" strokeWidth={1.5} />
                <span>Entrega em 15 dias</span>
              </div>
            </div>
          </div>

          <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none hidden lg:block">
            <FileCode size={500} strokeWidth={0.5} />
          </div>
        </div>
      </motion.section>

      {/* --- SECTION 2: SOLUÇÕES SOB MEDIDA --- */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center my-32">
        <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-tight">
            Cada marca é única. <br />
            <span className="italic font-light text-neutral-500">Sua solução também.</span>
          </h2>
          <p className="text-neutral-400 text-lg font-light leading-relaxed mb-10">
            Na Inside Studio, não acreditamos em prateleiras. Cada projeto é iniciado do zero, desenhado exclusivamente para as necessidades específicas do seu negócio.
          </p>
          <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5">
            <h4 className="font-bold mb-3 text-blue-500 uppercase text-[10px] tracking-widest">O Diferencial Inside</h4>
            <p className="text-sm text-neutral-400 font-light italic leading-relaxed">
              O foco é no impacto visual que gera autoridade. Se não for para impressionar e converter, nós não fazemos.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          <motion.div whileHover={{ scale: 1.01 }} className="p-8 md:p-12 rounded-[2.5rem] bg-neutral-900/40 border border-white/5 group transition-all">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:bg-white transition-all duration-500">
                <Globe size={28} className="text-white group-hover:text-black" strokeWidth={1.2} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Ecossistema Digital</h3>
                <p className="text-neutral-500 font-light leading-relaxed text-sm italic">
                  Para marcas que precisam de presença absoluta. Unimos sites de alta performance com estratégias que dominam a atenção do público.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.01 }} className="p-8 md:p-12 rounded-[2.5rem] bg-blue-600/5 border border-blue-500/20 group transition-all">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:bg-white transition-all duration-500">
                <Layout size={28} className="text-white group-hover:text-black" strokeWidth={1.2} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Posicionamento Visual</h3>
                <p className="text-neutral-400 font-light leading-relaxed text-sm italic">
                  Focado em transformar a percepção. Criamos uma curadoria de design que torna sua marca inesquecível e inquestionável.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 3: WORKFLOW --- */}
      <section>
        <div className="text-left mb-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">O Fluxo <br /><span className="italic font-light text-neutral-500">da Inside Studio.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10 rounded-[2rem] overflow-hidden border border-white/10">
          {[
            { step: "01", title: "Briefing", desc: "Imersão total para extrair a essência do negócio.", icon: <MessageSquare size={20} strokeWidth={1.5} /> },
            { step: "02", title: "Criação", desc: "Desenvolvimento focado em alto impacto visual e UX.", icon: <Layout size={20} strokeWidth={1.5} /> },
            { step: "03", title: "Entrega", desc: "Primeira apresentação em até 15 dias úteis.", icon: <Globe size={20} strokeWidth={1.5} /> },
            { step: "04", title: "Finalização", desc: "Refinamento final baseado no seu feedback.", icon: <CheckCircle2 size={20} strokeWidth={1.5} /> }
          ].map((item, idx) => (
            <div key={idx} className="group p-10 bg-[#050505] hover:bg-neutral-900/50 transition-all">
              <div className="mb-8 text-white/30 group-hover:text-blue-500 transition-colors">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-sm text-neutral-500 font-light leading-relaxed">{item.desc}</p>
              <div className="mt-6 text-[10px] font-bold text-white/10 tracking-[0.3em] uppercase">{item.step}</div>
            </div>
          ))}
        </div>
      </section>
      
      {/* --- FEATURED WORK (Refinado em Estilo) --- */}
      <section id="trabalhos" className="w-[100%] max-w-[1600px] pt-32 mx-auto mb-20 z-10 relative">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="text-left">
            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter leading-tight">
              Trabalhos <br />
              <span className="text-neutral-500 italic font-light">Recentes.</span>
            </h2>
          </div>

          <button
            onClick={() => navigate('/portfolio')}
            className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-500 text-[11px] font-bold uppercase tracking-[0.2em]"
          >
            Ver todo portfólio
            <ArrowRight size={18} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Grid com acabamento superior nos cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {PORTFOLIO_HOME.map((item, index) => (
            <ParallaxCard key={index} item={item} index={index} />
          ))}
        </div>
      </section>

      {/* --- SECTION 4: FAQ --- */}
      <section className="flex justify-center pt-20 pb-20 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {[
            { icon: <Clock />, q: "Qual o prazo de entrega?", a: "Para sites e branding, a primeira entrega ocorre em até 15 dias após o briefing." },
            { icon: <Wallet />, q: "Como funciona o pagamento?", a: "Modelo 50/50: 50% de sinal no início e 50% na entrega final do projeto." },
            { icon: <ShieldCheck />, q: "De quem é a propriedade?", a: "Após a quitação, os arquivos pertencem 100% ao cliente. Liberdade total." },
            { icon: <Share2 />, q: "E se eu precisar de ajustes?", a: "Abrimos um ciclo de rodada de alterações para garantir um resultado impecável." }
          ].map((faq, i) => (
            <div key={i} className="flex gap-6 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-blue-500 group-hover:border-blue-500/30 transition-all">
                {React.cloneElement(faq.icon, { size: 20, strokeWidth: 1.5 })}
              </div>
              <div>
                <h4 className="font-bold text-white mb-2 tracking-tight">{faq.q}</h4>
                <p className="text-sm text-neutral-500 font-light leading-relaxed italic">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* --- CONTACT SECTION --- */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center bg-blue-600/5 rounded-[50px] p-12 md:p-20 border border-blue-500/10 relative overflow-hidden">
        <div className="relative z-10 text-left">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-white leading-tight">Vamos tirar<br />do papel?</h2>
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
  );
};

export default Services;