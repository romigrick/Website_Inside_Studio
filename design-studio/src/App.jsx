import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  Play, 
  Layers, 
  Video, 
  Zap, 
  MousePointer2, 
  Menu, 
  X, 
  CheckCircle2,
  Instagram,
  Linkedin,
  Mail,
  ArrowUpRight,
  Monitor,
  Smartphone,
  Star,
  Plus,
  Minus,
  Globe,
  TrendingUp,
  Cpu
} from 'lucide-react';

// --- Dados Mockados ---

const HERO_GRID_ITEMS = [
  { src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop", span: "col-span-1 md:col-span-2 row-span-2", label: "3D Art" }, 
  { src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=600&auto=format&fit=crop", span: "col-span-1 row-span-1", label: "Brand" },
  { src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop", span: "col-span-1 row-span-1", label: "Tech" },
  { src: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=600&auto=format&fit=crop", span: "col-span-1 row-span-2", label: "Abstract" },
  { src: "https://images.unsplash.com/photo-1558655146-d09347e0c708?q=80&w=600&auto=format&fit=crop", span: "col-span-1 row-span-1", label: "Social" },
  { src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop", span: "col-span-1 md:col-span-2 row-span-1", label: "Campaign" },
  { src: "https://images.unsplash.com/photo-1535385793343-27dff1413c5a?q=80&w=600&auto=format&fit=crop", span: "col-span-1 row-span-1", label: "UI Design" },
  { src: "https://images.unsplash.com/photo-1621619856624-42fd193a0661?q=80&w=600&auto=format&fit=crop", span: "col-span-1 row-span-1", label: "Mobile" },
  { src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop", span: "col-span-1 md:col-span-2 row-span-1", label: "VFX" },
  { src: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=600&auto=format&fit=crop", span: "col-span-1 row-span-1", label: "Concept" },
  { src: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=600&auto=format&fit=crop", span: "col-span-1 row-span-1", label: "Art" },
  { src: "https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=800&auto=format&fit=crop", span: "col-span-1 md:col-span-2 row-span-1", label: "Cyber" },
  { src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop", span: "col-span-1 row-span-1", label: "Future" },
];

const CLIENTS = ["Agência V", "TechStart", "Global Corp", "Studio X", "Future Vision", "Next Level"];

const PORTFOLIO_ITEMS = [
  { id: 1, size: "col-span-1 md:col-span-2 row-span-2", type: "video", title: "Neon Cyberpunk City", category: "VFX / 3D", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" },
  { id: 2, size: "col-span-1 row-span-1", type: "post", title: "Campanha Nike Air", category: "Social Media", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2670&auto=format&fit=crop" },
  { id: 3, size: "col-span-1 row-span-1", type: "post", title: "Tech Summit 2024", category: "Branding", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop" },
  { id: 4, size: "col-span-1 md:col-span-2 row-span-1", type: "web", title: "Fintech Dashboard", category: "UI/UX Design", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" },
];

const IMPACT_STATS = [
  { 
    title: "Velocidade Recorde", 
    value: "-40%", 
    desc: "Redução no tempo de entrega comparado a agências tradicionais.", 
    icon: Zap,
    colSpan: "col-span-1 md:col-span-2" 
  },
  { 
    title: "Retenção Visual", 
    value: "3.5s", 
    desc: "Tempo médio de atenção conquistado em nossos ativos de social media.", 
    icon: TrendingUp,
    colSpan: "col-span-1" 
  },
  { 
    title: "Alcance Global", 
    value: "15+", 
    desc: "Países onde nossas campanhas já foram veiculadas.", 
    icon: Globe,
    colSpan: "col-span-1" 
  },
  { 
    title: "Tecnologia", 
    value: "AI Native", 
    desc: "Utilizamos as ferramentas mais modernas (Midjourney, Runway) para escalar produção.", 
    icon: Cpu,
    colSpan: "col-span-1 md:col-span-2" 
  },
];

const TESTIMONIALS = [
  { name: "Sarah Jenkins", role: "CMO @ TechFlow", text: "O Design Studio elevou nossa marca a um patamar global. A atenção aos detalhes nas animações é simplesmente absurda." },
  { name: "Carlos Mendes", role: "Founder @ Vibe", text: "Eles não apenas entregam arquivos bonitos, eles entendem de negócios. O rebranding aumentou nossa conversão em 40%." },
  { name: "Elena Kovic", role: "Product Lead @ Next", text: "A velocidade de entrega combinada com a qualidade visual é algo raro de encontrar. Parceiros para a vida toda." },
];

const FAQS = [
  { question: "Qual o prazo médio de entrega?", answer: "Projetos de identidade visual levam entre 2-4 semanas. Projetos de web design completos, cerca de 4-6 semanas." },
  { question: "Vocês fazem apenas a parte visual?", answer: "Nosso foco é visual e experiência (UI/UX). Para desenvolvimento (código), temos parceiros de confiança que indicamos." },
  { question: "Como funciona o pagamento?", answer: "Trabalhamos com 50% de entrada para reserva de agenda e 50% na entrega final dos arquivos." },
];

// --- Componentes Reutilizáveis ---

const Button = ({ children, primary = false, icon: Icon, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`
      flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 relative z-30
      ${primary 
        ? 'bg-white text-black hover:bg-neutral-200 shadow-[0_0_20px_rgba(255,255,255,0.15)]' 
        : 'bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20'}
    `}
  >
    {children}
    {Icon && <Icon size={18} />}
  </motion.button>
);

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full py-6 flex items-center justify-between text-left hover:text-blue-400 transition-colors"
      >
        <span className="text-lg font-medium text-white">{title}</span>
        {isOpen ? <Minus size={20} className="text-blue-500"/> : <Plus size={20} className="text-neutral-500"/>}
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

// Componente para Imagem com Parallax Interno
// A imagem se move dentro do card, criando efeito de "janela"
const ParallaxCard = ({ item, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Move a imagem verticalmente dentro do container
  // Scale 1.15 garante que não falte imagem nas bordas durante o movimento
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 + (index * 0.05) }}
      className={`relative rounded-xl overflow-hidden border border-white/10 bg-neutral-900 group ${item.span}`}
    >
      <div className="w-full h-full overflow-hidden">
        <motion.div style={{ y, scale: 1.15 }} className="w-full h-full">
           <img 
            src={item.src} 
            alt={item.label} 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
          />
        </motion.div>
      </div>
      
      {/* Overlay sutil */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
      
      {/* Label discreta */}
      <div className="absolute top-3 right-3 px-2 py-1 bg-black/40 backdrop-blur-md rounded text-[10px] font-bold uppercase tracking-widest text-white/50 border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {item.label}
      </div>
    </motion.div>
  );
};

const HeroStaticGrid = () => {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 relative">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[200px] grid-flow-dense">
        {HERO_GRID_ITEMS.map((img, index) => (
          <ParallaxCard key={index} item={img} index={index} />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none z-10" />
    </div>
  );
};

const LogoTicker = () => (
  <div className="w-full overflow-hidden border-b border-white/5 bg-black py-10 relative z-20">
    <div className="flex w-max">
      {[...Array(2)].map((_, i) => (
        <motion.div 
          key={i}
          animate={{ x: "-50%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 px-10"
        >
          {[...CLIENTS, ...CLIENTS].map((client, index) => (
            <span key={index} className="text-xl md:text-2xl font-bold text-neutral-800 uppercase tracking-widest whitespace-nowrap hover:text-neutral-600 transition-colors cursor-default">
              {client}
            </span>
          ))}
        </motion.div>
      ))}
    </div>
  </div>
);

const PortfolioCard = ({ item }) => {
  // Parallax também para os itens de portfólio
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative overflow-hidden rounded-3xl bg-neutral-900 border border-white/10 ${item.size} min-h-[300px] cursor-pointer`}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
          <motion.div style={{ y, scale: 1.1 }} className="w-full h-full">
            <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 ease-out"
            />
          </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
      <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
        <div className="flex justify-between items-start">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-4 group-hover:translate-y-0">
            <ArrowUpRight size={18} />
          </span>
        </div>
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <span className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-2 block">{item.category}</span>
          <h3 className="text-2xl font-bold text-white leading-tight">{item.title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

const ServiceCard = ({ title, desc, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: delay }}
    className="group p-8 rounded-3xl bg-[#080808] border border-white/[0.03] hover:border-white/[0.1] hover:bg-[#0f0f0f] transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full"
  >
    <div>
        <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-6 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-300">
        <Icon className="text-neutral-400 group-hover:text-blue-400 transition-colors" size={22} />
        </div>
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-neutral-500 text-sm leading-relaxed">{desc}</p>
    </div>
    <div className="mt-8 pt-8 border-t border-white/[0.03] flex items-center text-xs font-medium text-neutral-600 group-hover:text-white transition-colors uppercase tracking-wider gap-2">
        Saiba mais <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
    </div>
  </motion.div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent
        ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-white/[0.05] py-4' : 'bg-transparent py-6'}`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer z-50">
            <div className="relative group">
                <img 
                    src="logo branca.png" 
                    alt="Design Studio" 
                    className="h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity" 
                    onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<span class="text-xl font-bold tracking-tighter text-white">DESIGN<span class="text-blue-600">.</span>STUDIO</span>';
                    }}
                />
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['Trabalhos', 'Expertise', 'Sobre', 'Contato'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
                {item}
              </a>
            ))}
            <button className="bg-white text-black px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-colors text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              Começar Projeto
            </button>
          </div>
          <button 
            className="md:hidden text-white p-2 z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {['Trabalhos', 'Expertise', 'Sobre', 'Contato'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-3xl font-bold text-white tracking-tight"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="h-px w-20 bg-white/10 my-4" />
             <button className="bg-white text-black px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider">
              Começar Projeto
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Footer = () => (
  <footer className="bg-black border-t border-white/[0.05] pt-32 pb-12 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-900/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
        <div>
           <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter text-white">Vamos construir o <br/> futuro juntos?</h2>
           <p className="text-neutral-500 text-lg max-w-md mb-10">
             Receba insights semanais sobre design, tecnologia e negócios diretamente na sua caixa de entrada. Sem spam, apenas valor.
           </p>
           
           <div className="flex flex-col sm:flex-row gap-4 max-w-md">
             <input 
              type="email" 
              placeholder="seu@email.com" 
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
             />
             <button className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
               Inscrever <ArrowRight size={18} />
             </button>
           </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
           <div>
             <span className="text-white font-bold block mb-6">Explorar</span>
             <ul className="space-y-4 text-neutral-500">
               <li><a href="#" className="hover:text-blue-400 transition-colors">Trabalhos</a></li>
               <li><a href="#" className="hover:text-blue-400 transition-colors">Serviços</a></li>
               <li><a href="#" className="hover:text-blue-400 transition-colors">Processo</a></li>
               <li><a href="#" className="hover:text-blue-400 transition-colors">Sobre</a></li>
             </ul>
           </div>
           <div>
             <span className="text-white font-bold block mb-6">Social</span>
             <ul className="space-y-4 text-neutral-500">
               <li><a href="#" className="hover:text-blue-400 transition-colors">Instagram</a></li>
               <li><a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a></li>
               <li><a href="#" className="hover:text-blue-400 transition-colors">Behance</a></li>
               <li><a href="#" className="hover:text-blue-400 transition-colors">Vimeo</a></li>
             </ul>
           </div>
           <div>
             <span className="text-white font-bold block mb-6">Contato</span>
             <ul className="space-y-4 text-neutral-500">
               <li><a href="#" className="hover:text-blue-400 transition-colors">hello@studio.com</a></li>
               <li><a href="#" className="hover:text-blue-400 transition-colors">+55 11 9999-9999</a></li>
               <li className="pt-4"><span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/10 text-xs font-medium text-green-400"><div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"/> Online Agora</span></li>
             </ul>
           </div>
        </div>
      </div>
      
      <div className="border-t border-white/[0.05] pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-600 font-medium">
        <p>&copy; {new Date().getFullYear()} Design Studio.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
           <a href="#" className="hover:text-white transition-colors">Privacidade</a>
           <a href="#" className="hover:text-white transition-colors">Termos</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 overflow-x-hidden font-sans">
      
      <div className="fixed inset-0 z-0 pointer-events-none bg-[#020202]">
        <div className="absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-blue-900/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-purple-900/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <Navbar />

      <main className="relative z-10 pt-32">
        
        {/* HERO SECTION COM PARALLAX NO TEXTO E NO GRID */}
        <section className="relative flex flex-col items-center justify-between min-h-screen pt-20">
          
          {/* Conteúdo da Hero com Parallax de Scroll */}
          <motion.div 
            style={{ y: yHero, opacity: opacityHero }}
            className="container mx-auto px-6 flex flex-col items-center text-center relative z-20 mb-16"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8 flex items-center gap-2 px-5 py-2 rounded-full border border-white/5 bg-white/[0.02] text-xs font-bold text-neutral-400 uppercase tracking-widest backdrop-blur-md hover:bg-white/[0.05] transition-colors cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Disponível para Projetos 2024
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 text-white relative z-10 drop-shadow-2xl"
            >
              Design that <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-neutral-400">
                Moves People.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-neutral-400 max-w-3xl mb-12 leading-relaxed font-light relative z-10 drop-shadow-lg"
            >
              Somos um estúdio de design digital focado em <span className="text-white font-medium">Motion, VFX e Social Media</span>. 
              Criamos ativos visuais que elevam a percepção da sua marca.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 relative z-30"
            >
              <Button primary icon={ArrowRight}>Ver Projetos</Button>
              <Button icon={Play}>Showreel 2024</Button>
            </motion.div>
          </motion.div>

          {/* Galeria Estática com Parallax Interno (In-Card) */}
          <div className="w-full relative z-10 mt-auto">
             <HeroStaticGrid />
          </div>
        </section>

        {/* LOGO TICKER */}
        <section className="mb-32 z-10 relative bg-black border-t border-white/5">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-neutral-600 mb-8 pt-8">Empresas que confiam em nosso trabalho</p>
            <LogoTicker />
        </section>

        {/* FEATURED WORK */}
        <section id="trabalhos" className="container mx-auto px-6 mb-32 z-10 relative">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Trabalhos Recentes</h2>
                    <p className="text-neutral-500 text-lg">Uma curadoria dos nossos melhores projetos.</p>
                </div>
                <a href="#" className="hidden md:flex items-center gap-2 text-white hover:text-blue-400 transition-colors font-medium">
                    Ver todo portfólio <ArrowRight size={16} />
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                {PORTFOLIO_ITEMS.map((item) => (
                    <PortfolioCard key={item.id} item={item} />
                ))}
            </div>
        </section>

        {/* SERVICES */}
        <section id="expertise" className="container mx-auto px-6 py-20 border-t border-white/[0.05] z-10 relative">
          <div className="mb-20 max-w-2xl">
              <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-4 block">Nossa Expertise</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">O que nós <br />entregamos.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <ServiceCard delay={0.1} title="Social Media Design" desc="Posts estáticos e carrosséis otimizados para conversão." icon={Smartphone} />
            <ServiceCard delay={0.2} title="Motion & VFX" desc="Animações de logo e efeitos visuais cinematográficos." icon={Video} />
            <ServiceCard delay={0.3} title="Web & UI Design" desc="Interfaces digitais modernas e sistemas de design." icon={Monitor} />
            <ServiceCard delay={0.4} title="Brand Identity" desc="Logos, paleta de cores e tipografia consistentes." icon={Layers} />
            <ServiceCard delay={0.5} title="Creative Direction" desc="Estratégia visual para campanhas de alto impacto." icon={Zap} />
            <ServiceCard delay={0.6} title="Content Creation" desc="Produção de conteúdo multimídia para todas as telas." icon={MousePointer2} />
          </div>
        </section>

        {/* IMPACT */}
        <section id="sobre" className="container mx-auto px-6 py-32 z-10 relative">
           <div className="flex flex-col md:flex-row gap-16 items-start">
              <div className="md:w-1/3 sticky top-32">
                 <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-4 block">Our DNA</span>
                 <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">Por que escolher o <br/> Design Studio?</h2>
                 <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                   Não somos apenas designers. Somos parceiros estratégicos obcecados por performance visual e resultados tangíveis.
                 </p>
                 <Button icon={ArrowRight}>Conheça a Agência</Button>
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

        {/* DEPOIMENTOS */}
        <section className="py-32 border-y border-white/[0.05] bg-white/[0.01] relative z-10">
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
        <section className="container mx-auto px-6 py-32 z-10 relative max-w-3xl">
           <h2 className="text-3xl font-bold text-white mb-12 text-center">Perguntas Frequentes</h2>
           <div className="space-y-2">
             {FAQS.map((faq, i) => (
               <Accordion key={i} title={faq.question}>
                 {faq.answer}
               </Accordion>
             ))}
           </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 py-20 mb-20 z-10 relative">
            <div className="relative w-full bg-[#080808] border border-white/[0.05] rounded-[2.5rem] p-12 md:p-32 text-center overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="relative z-10 flex flex-col items-center">
                    <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tighter">Tem um projeto?</h2>
                    <p className="text-xl text-neutral-400 max-w-xl mb-12">
                        Vamos criar algo extraordinário juntos. Nossa agenda para o próximo trimestre está aberta.
                    </p>
                    <Button primary icon={Mail}>Iniciar Conversa</Button>
                </div>
            </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}