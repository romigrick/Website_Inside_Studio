import React, { useState, useEffect, useRef } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import {

  ArrowLeft, Calendar, User, Tag, ChevronLeft,

  ChevronRight, ExternalLink, Sparkles, Monitor, Mail, Phone

} from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';

import { PORTFOLIO_FULL } from '../data';

import ContactForm from '../components/ContactForm';



const ProjectDetails = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [isLandscape, setIsLandscape] = useState(false);

  const imgRef = useRef(null);



  const project = PORTFOLIO_FULL.find(p => p.id === parseInt(id));

  const gallery = project?.gallery || (project?.image ? [project.image] : []);

  const isWebsite = project?.category === "Sites";
  const isBehance = !!project?.behanceUrl;
  const isVideo = project?.category === "Videos";



  useEffect(() => {

    if (!project) { navigate('/portfolio'); return; }

    window.scrollTo(0, 0);

  }, [id, project, navigate]);



  const checkDimensions = () => {

    if (imgRef.current) {

      setIsLandscape(imgRef.current.naturalWidth > imgRef.current.naturalHeight);

    }

  };



  if (!project) return null;



  return (

    <div className="relative z-10 w-[75%] max-w-[1600px] mx-auto pb-20">

      {/* Botão Voltar */}

      <button

        onClick={() => navigate('/portfolio')}

        className="flex items-center gap-3 text-neutral-500 hover:text-white transition-all mb-16 group text-[11px] font-bold uppercase tracking-widest"

      >

        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />

        Voltar para Portfólio

      </button>



      {/* Grid Principal: Agora vira 1 coluna se for Behance, Vídeo, Site ou Landscape */}
      <div className={`grid gap-12 lg:gap-20 ${isBehance || isVideo || isWebsite || isLandscape ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'} items-start`}>



        {/* --- CONTAINER DE MÍDIA (Ajustado para Iframe com Scroll Interno) --- */}

        <div className="space-y-8">

          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#080808] shadow-2xl transition-all duration-700">

            {/* PRIORIDADE: BEHANCE (LARGURA TOTAL) */}
            {isBehance ? (
  <div className="relative w-full h-[800px] bg-[#050505] rounded-[2.5rem] overflow-hidden border border-white/10">
    <iframe 
      src={project.behanceUrl} 
      title="Behance Showcase"
      className="w-full h-full border-none"
      allowFullScreen 
      loading="lazy"
      /* scrolling="yes" é fundamental para o conteúdo longo carregar */
      scrolling="yes" 
      style={{ 
        width: '100%', 
        height: '100%', 
        overflow: 'auto',
        display: 'block' 
      }}
      /* Atributos necessários para conformidade com políticas do Behance */
      allow="clipboard-write"
      referrerPolicy="strict-origin-when-cross-origin"
    />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 pointer-events-none">
                   Role para explorar o projeto completo
                </div>
              </div>
            ) :project.category === 'Videos' && project.videoUrl ? (

              /* --- MODO PLAYER DE VÍDEO --- */

              <div className="w-full aspect-video bg-black">

                <iframe

                  src={project.videoUrl}

                  title={project.title}

                  className="w-full h-full border-none"

                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

                  allowFullScreen

                />

              </div>

            ) : isWebsite && project.liveUrl ? (

                /* --- MODO IFRAME (SITES) --- */
                <div className="relative group w-[full]">
                  {/* Header Estilizado de "Browser" */}
                  <div className="bg-[#111] border-b border-white/10 p-4 flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    </div>
                    <div className="bg-black/40 px-6 py-1.5 rounded-full text-[10px] text-neutral-500 font-mono truncate max-w-[400px] border border-white/5">
                      {project.liveUrl}
                    </div>
                    <div className="w-10" /> {/* Spacer para equilibrar o layout */}
                  </div>



                  {/* Iframe com Altura Fixa e Scroll Interno */}

                  <div className="relative w-[full] h-[600px] bg-white overflow-hidden">

                    <iframe

                      src={project.liveUrl}

                      title={project.title}

                      className="w-full h-full border-none"

                      loading="lazy"

                      style={{

                        height: '600px',

                        width: '100%',

                        overflowY: 'auto'

                      }}

                    />



                    {/* Sombra interna sutil para indicar que há mais conteúdo abaixo */}

                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                  </div>

                </div>

              ) : (

                /* --- MODO GALERIA (IMAGENS) --- */

                <div className="relative group flex justify-center bg-transparent">

                  <AnimatePresence mode='wait'>

                    <motion.img

                      key={currentImageIndex}

                      ref={imgRef}

                      src={gallery[currentImageIndex]}

                      onLoad={checkDimensions}

                      initial={{ opacity: 0 }}

                      animate={{ opacity: 1 }}

                      exit={{ opacity: 0 }}

                      className={`${isLandscape ? 'w-[70%] h-auto' : 'h-[75vh] w-auto'} object-contain rounded-2xl`}

                    />

                  </AnimatePresence>



                  {/* Controles de Navegação da Galeria */}

                  {gallery.length > 1 && (

                    <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity">

                      <button onClick={() => setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length)} className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">

                        <ChevronLeft size={24} />

                      </button>

                      <button onClick={() => setCurrentImageIndex((prev) => (prev + 1) % gallery.length)} className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">

                        <ChevronRight size={24} />

                      </button>

                    </div>

                  )}

                </div>

              )}

          </div>



          {/* Miniaturas (Thumbnails) menores para acompanhar o estilo */}
          {!isWebsite && gallery.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide w-full justify-center">
              {gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`relative flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border transition-all ${idx === currentImageIndex ? 'border-blue-500 scale-105' : 'border-white/5 opacity-40 hover:opacity-100'
                    }`}
                >
                  <img src={img} className="w-full h-full object-cover" alt="Thumbnail" />
                </button>
              ))}
            </div>

          )}

        </div>



        {/* COLUNA DE INFORMAÇÕES - Alinhada à Esquerda */}

        <div className={`flex flex-col ${isWebsite || isLandscape || project.category === 'Videos' ? 'w-full mt-10' : ''} text-left`}>

          <div className="mb-20 border-b border-white/5 pb-10">

            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8 leading-tight">

              {project.title}

            </h1>



            {/* Link Externo se for Site */}

            {isWebsite && project.liveUrl && (

              <a

                href={project.liveUrl}

                target="_blank"

                rel="noreferrer"

                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all mb-10 shadow-lg active:scale-95"

              >

                Abrir em nova guia <ExternalLink size={16} />

              </a>

            )}



            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-10">

              <div className="space-y-1">

                <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Cliente</p>

                <p className="text-white font-medium">{project.client || 'Inside Studio'}</p>

              </div>

              <div className="space-y-1">

                <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Ano</p>

                <p className="text-white font-medium">{project.year || '2026'}</p>

              </div>

              <div className="space-y-1">

                <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Expertise</p>

                <p className="text-white font-medium">{project.type}</p>

              </div>

            </div>

          </div>



          <div className="prose prose-invert max-w-none">

            <h3 className="text-xl font-bold text-white mb-4 italic">Descrição</h3>

            <p className="text-neutral-400 text-lg font-light leading-relaxed">

              {project.description}

            </p>

          </div>

        </div>



      </div>

      {/* --- CONTACT SECTION --- */}

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center bg-black-600/5 rounded-[50px] p-12 md:p-20 border border-blue-500/10 relative overflow-hidden">

        <div className="relative z-10 text-left">

          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-white leading-tight">Vamos tirar<br />sua ideia do papel?</h2>

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



export default ProjectDetails;