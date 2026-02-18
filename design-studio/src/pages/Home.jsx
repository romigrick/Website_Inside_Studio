import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    ArrowUpRight, Mail, Phone, Sparkles, Globe, Layout,
    Smartphone, Zap, CheckCircle2, ChevronDown, Quote, ArrowRight,
    Code2, MonitorSmartphone, Target, Rocket
} from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { PORTFOLIO_HERO, CLIENTS, IMPACT_STATS } from '../data';
import Icone from '../assets/ico.png';

const ROTATING_WORDS = ["to Inspire.", "to Excite.", "to Unleash.", "to Elevate."];

const Home = () => {
    const navigate = useNavigate();
    const { scrollY } = useScroll();
    const yHero = useTransform(scrollY, [0, 1000], [0, 400]);
    const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);

    const [wordIndex, setWordIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-white selection:bg-blue-500/30 overflow-x-hidden">
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20">

                <div className="absolute inset-0 bg-bg-[#050505][url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
                <div className="absolute top-0 w-full h-full bg-gradient-to-b from-blue-600/5 via-transparent to-[#050505] z-0" />

            </div>
            {/* 1. ULTRA-HERO: KINETIC TYPOGRAPHY */}
            <section className="relative min-h-screen flex flex-col justify-center items-center px-6 -mt-40 overflow-hidden">
                <motion.div style={{ y: yHero, opacity: opacityHero }} className="z-20 text-center">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="mb-12">
                        <img src={Icone} alt="Logo" className="w-20 h-20 mx-auto drop-shadow-[0_0_30px_rgba(59,130,246,0.2)]" />
                    </motion.div>

                    <h1 className="text-[13vw] md:text-[9vw] font-black tracking-tighter leading-[0.8] uppercase mb-12">
                        Created<br />
                        {/* 1. h-[1.2em] garante que não corte em cima/baixo.
      2. Removido o min-w fixo e overflow-hidden para não cortar as pontas das letras itálicas.
      3. flex-nowrap garante que a palavra fique em uma linha só.
    */}
                        <span className="relative inline-flex h-[1.2em] items-center justify-center italic font-light text-white/30 px-12">
                            <AnimatePresence mode="popLayout">
                                <motion.span
                                    key={ROTATING_WORDS[wordIndex]}
                                    initial={{ y: "100%", rotate: 5, opacity: 0 }}
                                    animate={{ y: 0, rotate: 0, opacity: 1 }}
                                    exit={{ y: "-100%", rotate: -5, opacity: 0 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    /* O 'absolute' mantém o centro, e o 'whitespace-nowrap' 
                                      evita quebras de linha indesejadas durante a animação.
                                    */
                                    className="absolute whitespace-nowrap"
                                >
                                    {ROTATING_WORDS[wordIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </h1>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
                        <p className="max-w-[300px] text-left text-sm text-neutral-500 font-light leading-relaxed border-l border-white/10 pl-6">
                            Transformamos visões em identidades que dominam mercados e retêm atenção.
                        </p>
                        <button
                            onClick={() => navigate('/contact')}
                            className="px-10 py-5 rounded-full bg-white text-black font-bold uppercase text-[10px] tracking-[0.3em] hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-2xl"
                        >
                            Pedir um orçamento
                        </button>
                    </div>
                </motion.div>

            </section>

            {/* 2. THE WALL: SEÇÃO REFINADA COM BOTÃO DE DESTAQUE */}
            <section className="relative z-20 py-20">
                <div className="w-[75%] max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center mb-16 gap-8 text-left">
                    <div>

                        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.8]">
                            Selected <br /> <span className="text-white/20 italic font-light text-white/10">Artifacts.</span>
                        </h2>
                    </div>
                    <div className="flex flex-col items-center text-neutral-500 uppercase text-[10px] mt-8 font-bold tracking-[0.5em]">
                        <button
                            onClick={() => navigate('/portfolio')}
                            className="group flex items-center gap-2 mb-8 px-6 py-2 rounded-full border border-white/10 hover:border-white/50 transition-all text-[10px] font-bold uppercase tracking-[0.2em] text-white-400"
                        >
                            Ver todo o Portfólio <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <div className="w-12 mb-4 h-px bg-white/20" />
                        Latest Projects 2024-2025
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-1 border-y border-white/5">
                    {PORTFOLIO_HERO.map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1 }}
                            className="aspect-[4/5] relative overflow-hidden group cursor-pointer"
                            onClick={() => navigate(`/project/${item.id}`)}
                        >
                            <img src={item.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" />
                            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10 text-left">
                                <span className="text-blue-500 font-bold text-[10px] tracking-widest uppercase mb-2">{item.category}</span>
                                <h3 className="text-3xl font-bold italic tracking-tighter leading-none">{item.title}</h3>
                                <ArrowUpRight className="mt-4 text-white/50" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 3. DNA SECTION: AUTORIDADE DO FUNDADOR & STUDIO */}
            <section className="py-40 w-[75%] max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                <div className="text-left space-y-12">
                    <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
                        Design que <br /> <span className="text-white/30 italic font-light">não aceita o óbvio.</span>
                    </h2>
                    <p className="text-neutral-400 text-xl font-light leading-relaxed max-w-lg">
                        O Inside Studio é o resultado de mais de 5 anos de imersão design. Não apenas executamos; nós questionamos o impacto visual de cada conceito.
                    </p>
                    <div className="flex flex-wrap gap-8">
                        <div className="flex items-center gap-3 text-neutral-400 text-sm">
                            <CheckCircle2 size={18} className="text-blue-500" /> +100 Projetos Entregues
                        </div>
                        <div className="flex items-center gap-3 text-neutral-400 text-sm">
                            <CheckCircle2 size={18} className="text-blue-500" /> Expertise em UI/UX Premium
                        </div>
                    </div>
                </div>
                <div className="relative group">
                    <div className="absolute -inset-4 bg-blue-600/10 rounded-[4rem] blur-2xl group-hover:bg-blue-600/20 transition-all duration-700" />
                    <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden border border-white/10 bg-neutral-900">
                        <img src={PORTFOLIO_HERO[0].image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                        <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black to-transparent text-left">

                        </div>
                    </div>
                </div>
            </section>

            {/* 4. PHILOSOPHY: INTENCIONALIDADE */}
            <section className="bg-white text-black py-40">
                <div className="w-[75%] max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                    <div className="relative aspect-square">
                        <div className="absolute inset-0 bg-neutral-200 rounded-[4rem] rotate-3" />
                        <div className="absolute inset-0 bg-[#050505] rounded-[4rem] flex items-center justify-center p-20 -rotate-3 transition-transform hover:rotate-0 duration-700">
                            <img src={Icone} className="w-40 h-40 opacity-20" alt="Inside" />
                        </div>
                    </div>
                    <div className="text-left space-y-12">
                        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85]">
                            Design é <br /> <span className="italic font-light text-neutral-400">Intencionalidade.</span>
                        </h2>
                        <div className="space-y-8 max-w-xl text-left">
                            {[
                                { num: "01", title: "Clareza Estratégica", desc: "Eliminamos o excesso para que sua mensagem seja ouvida com pureza absoluta." },
                                { num: "02", title: "Impacto Visual", desc: "Criamos um visual que atrai o usuário a parar e observar seu negócio." }
                            ].map((item, i) => (
                                <div key={i} className={`flex gap-8 group ${i > 0 ? 'border-t border-black/5 pt-8' : ''}`}>
                                    <div className="text-3xl font-light text-neutral-300">{item.num}.</div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 uppercase tracking-tighter">{item.title}</h4>
                                        <p className="text-neutral-500 font-light leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CAPABILITIES SECTION: SUBSTITUI O BENTO ANTERIOR */}
            <section className="py-20 w-[75%] max-w-[1600px] mx-auto text-left">
                <div className="mb-24">
                    <h2 className="text-6xl md:text-[7rem] font-bold tracking-tighter uppercase leading-[0.8]">
                        Core <br /> <span className="text-blue-600 italic font-light">Capabilities.</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: <MonitorSmartphone />, title: "Web Development", desc: "Sites e Landing pages focados em performance." },
                        { icon: <Zap />, title: "Motion Design", desc: "Artes em movimento que hipnotizam e elevam o valor da sua marca." },
                        { icon: <Target />, title: "Branding", desc: "Identidades visuais que comunicam autoridade e solidez imediata." },
                        { icon: <Rocket />, title: "Social Media", desc: "Criativos de alto impacto projetados para performar em escala." }
                    ].map((cap, i) => (
                        <div key={i} className="group p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/50 transition-all duration-500">
                            <div className="w-12 h-12 mb-8 text-blue-500 group-hover:scale-110 transition-transform">
                                {React.cloneElement(cap.icon, { size: 32, strokeWidth: 1.2 })}
                            </div>
                            <h4 className="text-2xl font-bold mb-4 italic">{cap.title}</h4>
                            <p className="text-neutral-500 text-sm font-light leading-relaxed">{cap.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 6. PROCESSO & FLOW */}
            <section className="py-40 w-[75%] max-w-[1600px] mx-auto text-left border-t border-white/5">
                <div className="flex flex-col md:flex-row gap-24">
                    <div className="md:w-1/3">
                        <h2 className="text-5xl font-bold tracking-tighter leading-none italic mb-8">Processo <br /> de Elite.</h2>
                        <p className="text-neutral-500 font-light">Uma metodologia refinada para garantir entregas impecáveis em tempos recordes.</p>
                    </div>
                    <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            { title: "Imersão", desc: "Mergulhamos no seu negócio para entender o público e os desafios reais." },
                            { title: "Estratégia", desc: "Traçamos o caminho visual que trará o maior retorno sobre investimento." },
                            { title: "Design", desc: "Execução de alta fidelidade onde cada movimento tem uma função estratégica." },
                            { title: "Launch", desc: "Seu projeto no ar com performance otimizada e suporte contínuo." }
                        ].map((step, i) => (
                            <div key={i} className="space-y-4">
                                <div className="text-blue-500 font-mono text-xs">/ 0{i + 1}</div>
                                <h3 className="text-xl font-bold uppercase tracking-widest">{step.title}</h3>
                                <p className="text-neutral-500 text-sm font-light leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. PROVA SOCIAL / TRUST */}
            <section className="py-40 border-y border-white/5">
                <div className="w-[75%] max-w-[1600px] mx-auto flex flex-col md:flex-row items-center gap-20">
                    <div className="md:w-1/2 text-left">
                        <Quote className="text-blue-500 mb-8" size={48} />
                        <p className="text-3xl md:text-5xl font-light italic leading-snug mb-10 text-white/80 tracking-tighter">
                            "A Inside Studio não entregou apenas um design, entregou uma ferramenta de autoridade que mudou como nossos clientes nos veem."
                        </p>
                        <p className="font-bold text-lg">Inside Partner</p>
                        <p className="text-neutral-500 text-xs uppercase tracking-[0.3em]">Satisfação 100% Garantida</p>
                    </div>
                    <div className="md:w-1/2 grid grid-cols-2 gap-px bg-white/5 border border-white/5 overflow-hidden rounded-[3rem]">
                        {CLIENTS.slice(0, 4).map((client, i) => (
                            <div key={i} className="bg-[#050505] p-12 flex items-center justify-center text-xl font-black text-white/10 hover:text-blue-500 transition-all cursor-default">
                                {client}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. THE GRAND FINALE */}
            <section className="w-[90%] max-w-[1600px] mx-auto">
                <div className="p-12 md:p-32 rounded-[5rem] bg-white text-black flex flex-col lg:flex-row gap-20 items-center justify-between relative overflow-hidden">
                    <div className="text-left max-w-2xl relative z-10">
                        <h2 className="text-7xl md:text-[9rem] font-black tracking-tighter leading-[0.8] uppercase mb-16">
                            Let's <br /> Make <br /> It.
                        </h2>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.open('mailto:contato@insidestudio.com.br')}>
                                <Mail size={20} />
                                <span className="text-xl font-medium border-b border-transparent group-hover:border-black transition-all">contato@insidestudio.com.br</span>
                            </div>
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <Phone size={20} />
                                <span className="text-xl font-medium border-b border-transparent group-hover:border-black transition-all">+55 (42) 9 9814.1401</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:max-w-[50%] relative z-10">
                        <div className="bg-black/5 p-8 rounded-[3rem] border border-black/10">
                            <ContactForm />
                        </div>
                    </div>
                    <div className="absolute right-[-10%] bottom-[-5%] text-[20rem] font-black text-black/5 pointer-events-none italic">Inside</div>
                </div>
            </section>
        </div>
    );
};

export default Home;