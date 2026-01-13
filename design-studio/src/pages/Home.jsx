import React, { useState, useEffect } from 'react'; // <-- AGORA IMPORTA useEffect
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Mail, Plus, Minus, Star, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useScroll, useTransform } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import MasonryGrid from '../components/MasonryGrid';
import Icone from '../assets/ico.png';

// Componentes e Dados
import Button from '../components/Button';
import ParallaxCard from '../components/ParallaxCard';
import {
    HERO_GRID_ITEMS, CLIENTS, PORTFOLIO_HOME, SERVICES,
    IMPACT_STATS, TESTIMONIALS, FAQS
} from '../data';

// --- VARIÁVEIS DE ANIMAÇÃO DE TEXTO ---
const ROTATING_WORDS = ["Inspire.", "Excite.", "Unleash."];

// Componente Accordion local para a Home
const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-white/10">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left hover:text-blue-400 transition-colors"
            >
                <span className="text-lg font-medium text-white">{title}</span>
                {isOpen ? <Minus size={20} className="text-blue-500" /> : <Plus size={20} className="text-neutral-500" />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-neutral-400 leading-relaxed">{children}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Home = () => {
    const { scrollY } = useScroll();
    const navigate = useNavigate();
    const yHero = useTransform(scrollY, [0, 500], [0, 200]);
    const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

    // --- LÓGICA DE ROTAÇÃO DE TEXTO (NOVAS VARIÁVEIS E HOOKS) ---
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        // Configura o intervalo para mudar a palavra a cada 3 segundos
        const interval = setInterval(() => {
            setWordIndex((prevIndex) => (prevIndex + 1) % ROTATING_WORDS.length);
        }, 3000);

        // Limpa o intervalo
        return () => clearInterval(interval);
    }, []);

    const currentWord = ROTATING_WORDS[wordIndex];

    const wordVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 10 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
    };
    // -----------------------------------------------------------


    return (
        <>
            {/* HERO SECTION */}
            <section className="relative flex flex-col items-center justify-between min-h-screen">
                <motion.div style={{ y: yHero, opacity: opacityHero }} className="container mx-auto pt-8 px-6 flex flex-col items-center text-center relative z-20 mb-16">
                    <div className='pb-8'>
                        <img src={Icone} alt="Icone" className="w-16 h-16" />
                    </div>


                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 text-white relative z-10 drop-shadow-2xl">
                        Created to<br />

                        {/* NOVO CÓDIGO PARA A ROTAÇÃO DE PALAVRAS */}
                        <span className="inline-flex overflow-hidden relative h-32 items-center justify-center">
                            <AnimatePresence mode="popLayout">
                                <motion.span
                                    key={currentWord} // ESSENCIAL: Força a animação de saída/entrada
                                    variants={wordVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    // Classes Tailwind para o texto rotativo
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-neutral-400"
                                >
                                    {currentWord}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                        {/* FIM DO CÓDIGO DA ROTAÇÃO */}

                    </motion.h1>
                    <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mb-12 leading-relaxed font-light relative z-10 drop-shadow-lg">
                        Transformamos ideias em <span className="text-white font-medium">experiências visuais impactantes </span>para elevar o impacto da sua marca a um novo patamar.

                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 relative z-30">
                        <Button icon={Mail} onClick={() => navigate('/contato')}>Quero um orçamento</Button>
                        <Button primary icon={ArrowRight} onClick={() => navigate('/portfolio')}>Ver Projetos</Button>
                    </div>
                </motion.div>

                {/* Wall of Work Grid */}
                <div className="pt-20 w-full max-w-[1600px] mx-auto px-4 relative z-10 mt-auto">
                    <MasonryGrid>
                        {HERO_GRID_ITEMS.map((item, index) => (
                            <ParallaxCard key={index} item={item} />
                        ))}
                    </MasonryGrid>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-64 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none z-20" /></div>
            </section>
            {/* LOGO TICKER */}
            <section className="mb-20 z-10 relative bg-black">
                <p className="text-center text-xs font-bold uppercase tracking-widest text-neutral-600 mb-8 pt-8">Empresas que confiaram em nosso trabalho</p>
                <div className="w-full overflow-hidden pb-10">
                    <div className="flex w-max">
                        {[...Array(2)].map((_, i) => (
                            <motion.div key={i} animate={{ x: "-50%" }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="flex gap-20 px-10">
                                {[...CLIENTS, ...CLIENTS].map((client, index) => (
                                    <span key={index} className="text-xl md:text-2xl font-bold text-neutral-800 uppercase tracking-widest whitespace-nowrap hover:text-neutral-600 transition-colors cursor-default">{client}</span>
                                ))}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEATURED WORK */}
            <section id="trabalhos" className="container mx-auto px-6 mb-20 z-10 relative">
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

            {/* SERVICES */}
            <section id="expertise" className="container mx-auto px-6 pt-20 pb-10 border-t border-white/[0.05] z-10 relative">
                <div className="mb-20 max-w-2xl">
                    <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-4 block">Nossa Expertise</span>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white tracking-tight">O que nós <br />entregamos.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {SERVICES.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-8 rounded-3xl bg-[#080808] border border-white/[0.03] hover:border-white/[0.1] hover:bg-[#0f0f0f] transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-6 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-300">
                                <service.icon className="text-neutral-400 group-hover:text-blue-400 transition-colors" size={22} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                            <p className="text-neutral-500 text-sm leading-relaxed">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* IMPACT / DNA */}
            <section id="sobre" className="container mx-auto px-6 py-20 z-10 relative">
                <div className="flex flex-col md:flex-row gap-16 items-start">
                    <div className="md:w-1/3 sticky top-32">
                        <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-4 block">Our DNA</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">Por que escolher o <br /> Inside Studio?</h2>
                        <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                            Não somos apenas designers. Somos parceiros estratégicos obcecados por performance visual e resultados tangíveis.
                        </p>
                        <Button icon={ArrowRight} onClick={() => navigate('/team')}>Conheça a gente</Button>
                    </div>

                    <div className="md:w-2/3 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {IMPACT_STATS.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`${stat.colSpan} bg-[#080808] border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-colors group`}
                                >
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-blue-500/10 transition-colors">
                                        <stat.icon size={24} className="text-white group-hover:text-blue-400 transition-colors" />
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</h3>
                                    <h4 className="text-lg font-bold text-white mb-3">{stat.title}</h4>
                                    <p className="text-neutral-500 text-sm leading-relaxed">{stat.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="py-20 border-y border-white/[0.05] bg-white/[0.01] relative z-10">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">O que dizem sobre nós</h2>
                        <p className="text-neutral-500">Parceiros que confiaram sua visão ao nosso estúdio.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {TESTIMONIALS.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className="bg-[#080808] p-10 rounded-3xl border border-white/5 relative"
                            >
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, starI) => (
                                        <Star key={starI} size={16} className="fill-blue-500 text-blue-500" />
                                    ))}
                                </div>
                                <p className="text-lg text-neutral-300 mb-8 leading-relaxed">"{t.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800" />
                                    <div>
                                        <h4 className="text-white font-bold text-sm">{t.name}</h4>
                                        <span className="text-neutral-500 text-xs uppercase tracking-wider">{t.role}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="container mx-auto px-6 py-20 z-10 relative max-w-3xl">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Perguntas Frequentes</h2>
                <div className="space-y-2">
                    {FAQS.map((faq, i) => (
                        <Accordion key={i} title={faq.question}>
                            {faq.answer}
                        </Accordion>
                    ))}
                </div>
            </section>

            {/* CTA - Contato */}
            <section className="container mx-auto px-6 z-10 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Texto Lateral */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white tracking-tighter">Tem um projeto?</h2>
                        <p className="text-xl text-neutral-400 mb-12">Estamos prontos para ouvir sobre o seu projeto. Preencha o formulário ou nos envie um e-mail direto.</p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-white">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center"><Mail size={20} /></div>
                                <div><p className="text-sm text-neutral-500">Email</p><p className="font-medium">contato@insidestudio.com.br</p></div>
                            </div>
                            <div className="flex items-center gap-4 text-white">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center"><Phone size={20} /></div>
                                <div><p className="text-sm text-neutral-500">Telefone</p><p className="font-medium">+55 (42) 9 9814.1401</p></div>
                            </div>
                        </div>
                    </div>

                    {/* Formulário */}
                    <ContactForm />
                </div>
            </section>
        </>
    );
};

export default Home;