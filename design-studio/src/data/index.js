import { Smartphone, Video, Monitor, Layers, Zap, MousePointer2, TrendingUp, Globe, Cpu } from 'lucide-react';
import imgPost01 from '../portfolio/portfolio (1).PNG';
import imgPost02 from '../portfolio/portfolio (2).PNG';
import imgPost03 from '../portfolio/portfolio (3).PNG'; 
import imgPost04 from '../portfolio/portfolio (4).PNG';
import imgPost05 from '../portfolio/portfolio (5).PNG';
import imgPost06 from '../portfolio/portfolio (6).PNG';
import imgPost07 from '../portfolio/portfolio (7).PNG';
import imgPost08 from '../portfolio/portfolio (8).PNG';
import imgPost09 from '../portfolio/portfolio (9).PNG';
import imgPost10 from '../portfolio/portfolio (10).PNG';
import imgPost11 from '../portfolio/portfolio (11).PNG';
import imgPost12 from '../portfolio/portfolio (12).PNG';
import imgPost13 from '../portfolio/portfolio (13).PNG';
import imgPost14 from '../portfolio/portfolio (14).PNG';
import imgPost15 from '../portfolio/portfolio (15).PNG';
import imgPost16 from '../portfolio/portfolio (16).PNG';
import imgPost17 from '../portfolio/portfolio (17).PNG';
import imgPost18 from '../portfolio/portfolio (18).PNG';
import imgPost19 from '../portfolio/eltoro2.png';

export const CLIENTS = ["Agência V", "TechStart", "Global Corp", "Studio X", "Future Vision", "Next Level"];

export const HERO_GRID_ITEMS = [
  { src: imgPost01, label: "3D Art" },
  { src: imgPost19, label: "Campaign" },
  { src: imgPost02, label: "Brand" },
  { src: imgPost03, label: "Tech" },
  { src: imgPost04, label: "Abstract" },
  { src: imgPost05, label: "Social" },
  { src: imgPost06, label: "UI Design" },
  { src: imgPost07, label: "Mobile" },
  { src: imgPost08, label: "VFX" },
  { src: imgPost09, label: "Concept" },
  { src: imgPost11, label: "Cyber" },
  { src: imgPost12, label: "Future" },
];

export const TEAM_MEMBERS = [
  { name: "Alex Rivera", role: "Creative Director", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" },
  { name: "Sarah Chen", role: "Head of Motion", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop" },
  { name: "Marcus Johnson", role: "Lead 3D Artist", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop" },
  { name: "Elena Volkov", role: "Design Lead", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" },
];

export const PORTFOLIO_FULL = [
  { 
    id: 1, 
    type: "video", 
    title: "Neon Cyberpunk City", 
    category: "VFX / 3D", 
    client: "Future Tech Inc.",
    year: "2024",
    description: "Um mergulho profundo em uma estética futurista. Combinamos modelagem 3D avançada com técnicas de iluminação volumétrica para criar uma metrópole vibrante e imersiva. O objetivo era transmitir a sensação de escala e a energia pulsante de uma cidade que nunca dorme.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  { 
    id: 2, 
    type: "post", 
    title: "Campanha Nike Air", 
    category: "Social Media", 
    client: "Nike Brasil",
    year: "2023",
    description: "Desenvolvimento de ativos visuais para o lançamento da nova linha Air. Focamos em dinamismo e movimento, utilizando cores vibrantes que conversam diretamente com o público jovem urbano.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  { 
    id: 3, 
    type: "post", 
    title: "Tech Summit 2024", 
    category: "Branding", 
    client: "Silicon Events",
    year: "2024",
    description: "Identidade visual completa para o maior evento de tecnologia da América Latina. Criamos um sistema visual flexível que se adapta desde crachás e banners até grandes projeções de palco.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  { 
    id: 4, 
    type: "web", 
    title: "Fintech Dashboard", 
    category: "UI/UX Design", 
    client: "NovaBank",
    year: "2023",
    description: "Redesign completo da interface do usuário para o app de investimentos da NovaBank. O foco foi simplificar a visualização de dados complexos, tornando a experiência financeira mais acessível e agradável.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" 
  },
  { 
    id: 5, 
    type: "video", 
    title: "Abstract Flow", 
    category: "Motion", 
    client: "ArtGallery X",
    year: "2024",
    description: "Uma exploração artística de formas e fluidos. Este projeto experimental busca testar os limites das simulações de partículas, criando visuais hipnóticos usados em instalações de arte digital.",
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1200&auto=format&fit=crop" 
  },
  { 
    id: 6, 
    type: "post", 
    title: "Eco Brand", 
    category: "Identity", 
    client: "GreenLife",
    year: "2023",
    description: "Marca desenvolvida para uma startup de produtos sustentáveis. Utilizamos tons terrosos e tipografia limpa para comunicar transparência e compromisso com o meio ambiente.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop" 
  },
];

export const PORTFOLIO_HOME = PORTFOLIO_FULL.slice(0, 3);

export const SERVICES = [
  { title: "Social Media", desc: "Design estratégico para feeds. Carrosséis, Stories e Reels que convertem.", icon: Smartphone },
  { title: "Motion Graphics", desc: "Animação 2D e 3D para explicar produtos e dar vida à marca.", icon: Video },
  { title: "Web Design", desc: "Landing pages de alta conversão e sites institucionais imersivos.", icon: Monitor },
  { title: "VFX & Edição", desc: "Pós-produção cinematográfica para comerciais e vídeos corporativos.", icon: Layers },
  { title: "Identidade Visual", desc: "Criação de marcas do zero. Logo, tipografia e manuais de marca.", icon: Zap },
  { title: "Direção de Arte", desc: "Consultoria visual para campanhas e lançamentos de produtos.", icon: MousePointer2 }
];

export const IMPACT_STATS = [
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

export const TESTIMONIALS = [
  { name: "Sarah Jenkins", role: "CMO @ TechFlow", text: "O Inside Studio elevou nossa marca a um patamar global. A atenção aos detalhes nas animações é simplesmente absurda." },
  { name: "Carlos Mendes", role: "Founder @ Vibe", text: "Eles não apenas entregam arquivos bonitos, eles entendem de negócios. O rebranding aumentou nossa conversão em 40%." },
  { name: "Elena Kovic", role: "Product Lead @ Next", text: "A velocidade de entrega combinada com a qualidade visual é algo raro de encontrar. Parceiros para a vida toda." },
];

export const FAQS = [
  { question: "Qual o prazo médio de entrega?", answer: "Projetos de identidade visual levam entre 2-4 semanas. Projetos de web design completos, cerca de 4-6 semanas." },
  { question: "Vocês fazem apenas a parte visual?", answer: "Nosso foco é visual e experiência (UI/UX). Para desenvolvimento (código), temos parceiros de confiança que indicamos." },
  { question: "Como funciona o pagamento?", answer: "Trabalhamos com 50% de entrada para reserva de agenda e 50% na entrega final dos arquivos." },
];