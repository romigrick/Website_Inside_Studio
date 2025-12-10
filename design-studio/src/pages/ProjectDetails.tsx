import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_FULL } from '../data';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Encontra o projeto
  const project = PORTFOLIO_FULL.find(p => p.id === parseInt(id));

  // Garante que o array de galeria exista, senão usa a imagem única como array
  const galleryImages = project?.gallery || (project?.image ? [project.image] : []);

  useEffect(() => {
    if (!project) {
      navigate('/portfolio');
    }
    window.scrollTo(0, 0);
  }, [id, project, navigate]);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="container mx-auto px-6 min-h-screen relative z-10">
      
      {/* Botão Voltar */}
      <button 
        onClick={() => navigate('/portfolio')}
        className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-12 group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Voltar para Portfólio
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* COLUNA ESQUERDA: GALERIA (STICKY) */}
        <div className="flex flex-col gap-6 lg:sticky lg:top-32">
          
          {/* Imagem Grande (Main Display) */}
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 group shadow-2xl shadow-black/50">
            <AnimatePresence mode='wait'>
              <motion.img 
                key={currentImageIndex}
                src={galleryImages[currentImageIndex]} 
                alt={`Slide ${currentImageIndex + 1}`} 
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover absolute inset-0"
              />
            </AnimatePresence>

            {/* Setas de Navegação */}
            {galleryImages.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 hover:bg-black/70 text-white rounded-full flex items-center justify-center backdrop-blur-md border border-white/10 transition-all opacity-0 group-hover:opacity-100 transform hover:scale-110"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 hover:bg-black/70 text-white rounded-full flex items-center justify-center backdrop-blur-md border border-white/10 transition-all opacity-0 group-hover:opacity-100 transform hover:scale-110"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>

          {/* Carrossel de Miniaturas */}
          {galleryImages.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2 w-full scrollbar-hide">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`relative flex-shrink-0 w-20 aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    idx === currentImageIndex 
                      ? 'border-blue-500 opacity-100 ring-2 ring-blue-500/20' 
                      : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`Thumbnail ${idx + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* COLUNA DIREITA: INFORMAÇÕES */}
        <div className="flex flex-col h-full">
          
          {/* Cabeçalho do Projeto */}
          <div className="mb-8 border-b border-white/10 pb-8">
            <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-4 block">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {project.title}
            </h1>
            
            {/* Metadados Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-neutral-400 mt-8">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-blue-500 mb-1">
                  <User size={16} />
                  <span className="font-bold text-xs uppercase tracking-wider">Cliente</span>
                </div>
                <strong className="text-white text-base">{project.client || "Confidencial"}</strong>
              </div>
              
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-blue-500 mb-1">
                  <Calendar size={16} />
                  <span className="font-bold text-xs uppercase tracking-wider">Ano</span>
                </div>
                <strong className="text-white text-base">{project.year || "2024"}</strong>
              </div>
              
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-blue-500 mb-1">
                  <Tag size={16} />
                  <span className="font-bold text-xs uppercase tracking-wider">Tipo</span>
                </div>
                <strong className="text-white text-base">{project.type}</strong>
              </div>
            </div>
          </div>

          {/* Descrição */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-white mb-4">O Desafio</h3>
            <p className="text-neutral-400 text-lg leading-relaxed whitespace-pre-line mb-6">
              {project.description}
            </p>
            <p className="text-neutral-400 text-lg leading-relaxed">
              Nosso objetivo foi traduzir a visão da {project.client} em uma experiência visual que ressoasse com seu público-alvo. Através de iterações de design e prototipagem rápida, chegamos a um resultado que não apenas atende, mas supera as expectativas estéticas e funcionais.
            </p>
          </div>
          
          {/* Ferramentas (Tags) */}
          <div className="bg-[#080808] p-6 rounded-2xl border border-white/5">
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider opacity-70">Tech Stack & Tools</h4>
            <div className="flex flex-wrap gap-2">
              {["Figma", "After Effects", "Cinema 4D", "Octane Render", "Premiere Pro"].map(tool => (
                <span key={tool} className="px-3 py-1.5 bg-white/5 rounded-lg text-xs font-medium text-neutral-300 border border-white/5 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;