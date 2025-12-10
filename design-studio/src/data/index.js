import { Smartphone, Video, Monitor, Layers, Zap, MousePointer2, TrendingUp, Globe, Cpu } from 'lucide-react';

export const CLIENTS = ["Agência V", "TechStart", "Global Corp", "Studio X", "Future Vision", "Next Level"];

export const HERO_GRID_ITEMS = [
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