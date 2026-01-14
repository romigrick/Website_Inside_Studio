import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_FULL } from '../data';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLandscape, setIsLandscape] = useState(false);

  const imgRef = useRef(null);

  const projectId = id ? parseInt(id) : 0;
  const project = PORTFOLIO_FULL.find(p => p.id === projectId);
  const galleryImages = project?.gallery || (project?.image ? [project.image] : []);

  const checkDimensions = () => {
    if (imgRef.current) {
      const { naturalWidth, naturalHeight } = imgRef.current;
      if (naturalWidth > 0) {
        setIsLandscape(naturalWidth > naturalHeight);
      }
    }
  };

  useEffect(() => {
    if (!project) {
      navigate('/portfolio');
      return;
    }
    window.scrollTo(0, 0);

    if (imgRef.current && imgRef.current.complete) {
      checkDimensions();
    }
  }, [id, project, navigate, currentImageIndex]);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="container mx-auto px-6 min-h-screen relative z-10 pb-20">

      <button
        onClick={() => navigate('/portfolio')}
        className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-12 group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Voltar para Portfólio
      </button>

      <div className={`grid gap-16 items-start transition-all duration-700 ${isLandscape ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'}`}>

        {/* Container da Galeria */}
        <div className={`flex flex-col gap-6 ${isLandscape ? 'w-full max-w-6xl mx-auto' : 'lg:sticky lg:top-32'}`}>

          {/* CORREÇÃO NO CONTAINER DA IMAGEM:
             - Se Landscape: 'w-full h-auto' (Mantém o comportamento correto).
             - Se Vertical: Mudamos para 'w-full h-[70vh]'. Isso define uma altura máxima de 70% da tela, impedindo que a imagem fique gigante.
          */}
          <div className={`relative transition-all duration-500 mx-auto
  ${isLandscape
              ? 'w-full h-auto rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl shadow-black/50'
              : 'w-fit h-[70vh] bg-transparent' /* Remove o fundo e borda se for vertical */
            }
`}>
            <AnimatePresence mode='wait'>
              <motion.img
                key={currentImageIndex}
                ref={imgRef}
                src={galleryImages[currentImageIndex]}
                alt={`Slide ${currentImageIndex + 1}`}
                onLoad={checkDimensions}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                /* CORREÇÃO: 
                   Se for vertical, a borda e o arredondamento vão na imagem. 
                   Usamos 'h-full w-auto' para ela respeitar os 70vh sem esticar.
                */
                className={`transition-all duration-500
        ${isLandscape
                    ? 'relative w-full h-auto z-10'
                    : 'relative h-full w-auto z-10 rounded-3xl border border-white/10 shadow-2xl shadow-black/50'
                  }
      `}
              />
            </AnimatePresence>

            {/* Setas de Navegação - Agora elas ficam coladas na imagem mesmo se for vertical */}
            {galleryImages.length > 1 && (
              <>
                <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 hover:bg-black/70 text-white rounded-full flex items-center justify-center backdrop-blur-md border border-white/10 transition-all opacity-0 group-hover:opacity-100 transform hover:scale-110 z-20">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 hover:bg-black/70 text-white rounded-full flex items-center justify-center backdrop-blur-md border border-white/10 transition-all opacity-0 group-hover:opacity-100 transform hover:scale-110 z-20">
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>

          {/* Miniaturas */}
          {galleryImages.length > 1 && (
            <div className="flex justify-center w-full"> {/* Container pai para garantir centralização total */}
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide max-w-full">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative flex-shrink-0 w-20 aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${idx === currentImageIndex
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
            </div>
          )}
        </div>

        {/* Coluna de Informações (Sem alterações) */}
        <div className={`flex flex-col h-full ${isLandscape ? 'max-w-4xl mx-auto w-full' : ''}`}>
          <div className="mb-8 border-b border-white/10 pb-8">
            <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-4 block">
              {project.category}
            </span>
            <h1 className={`${isLandscape ? 'text-4xl md:text-6xl' : 'text-4xl md:text-5xl'} font-bold text-white mb-6 leading-tight`}>
              {project.title}
            </h1>

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

          <div className="mb-10">
            <h3 className="text-xl font-bold text-white mb-4">Ideia Central</h3>
            <p className="text-neutral-400 text-lg leading-relaxed whitespace-pre-line mb-6">
              {project.description}
            </p>
          </div>

          {project.tags && project.tags.length > 0 && (
            <div className="bg-[#080808] p-6 rounded-2xl border border-white/5">
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider opacity-70">Tags & Categorias</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-white/5 rounded-lg text-xs font-medium text-neutral-300 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;