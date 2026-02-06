import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_FULL } from '../data';
import PortfolioCard from '../components/PortfolioCard';
import MasonryGrid from '../components/MasonryGrid';
import { Sparkles } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('Todos');
  /*const categories = ['Todos', 'Sites', 'Videos', 'Identidade Visual', 'Materiais Impressos', 'Stream Pack', 'Redes Sociais'];*/
  const categories = [
    'Todos',
    ...new Set(PORTFOLIO_FULL.map(project => project.category))
  ];
  // Função auxiliar para pegar projetos de uma categoria
  const getProjects = (cat) => PORTFOLIO_FULL.filter(p => p.category === cat);

  const renderSectionHeader = (title) => (
    <div className="flex items-center gap-6 mb-12">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tighter whitespace-nowrap">{title}</h2>
      <div className="h-px w-full bg-white/5" />
    </div>
  );

  return (
    <div className="relative z-10 w-[75%] max-w-[1600px] mx-auto pb-20">
      {/* HEADER DA PÁGINA */}
      <div className="mb-20 text-center">

        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9]">
          Design em <br />
          <span className="text-neutral-500 italic font-light text-white/50">Movimento.</span>
        </h1>
      </div>

      {/* FILTROS */}
      <div className="flex flex-wrap justify-center gap-4 mb-24 border-b border-white/5 pb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 border ${filter === cat
              ? 'bg-white text-black border-white'
              : 'bg-transparent text-neutral-500 border-white/10 hover:border-white/30'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="w-full">
        {filter === 'Todos' ? (
          <div className="space-y-32">
            {/* SEÇÃO 1: SITES (FULL WIDTH) */}
            <div>
              {renderSectionHeader("Desenvolvimento Web")}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getProjects("Sites").map((item, i) => (
                  <Link to={`/project/${item.id}`} key={item.id}><PortfolioCard item={item} index={i} /></Link>
                ))}
              </div>
            </div>

            {/* SEÇÃO MIXTA: VÍDEOS E IDENTIDADE LADO A LADO SE POSSÍVEL */}
            <div className="flex flex-col lg:flex-row gap-20">
              <div className="flex-1">
                {renderSectionHeader("Produção Audiovisual")}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {getProjects("Videos").map((item, i) => (
                    <Link to={`/project/${item.id}`} key={item.id}><PortfolioCard item={item} index={i} /></Link>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                {renderSectionHeader("Branding & Identidade")}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {getProjects("Identidade Visual").map((item, i) => (
                    <Link to={`/project/${item.id}`} key={item.id}><PortfolioCard item={item} index={i} /></Link>
                  ))}
                </div>
              </div>
            </div>

            {/* SEÇÃO MIXTA 2: IMPRESSOS E STREAM PACK */}
            <div className="flex flex-col lg:flex-row gap-20">
              {getProjects("Materiais Impressos").length > 0 && (
                <div className="flex-1">
                  {renderSectionHeader("Materiais Impressos")}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {getProjects("Materiais Impressos").map((item, i) => (
                      <Link to={`/project/${item.id}`} key={item.id}><PortfolioCard item={item} index={i} /></Link>
                    ))}
                  </div>
                </div>
              )}
              {getProjects("Stream Pack").length > 0 && (
                <div className="flex-1">
                  {renderSectionHeader("Streamer Kits")}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {getProjects("Stream Pack").map((item, i) => (
                      <Link to={`/project/${item.id}`} key={item.id}><PortfolioCard item={item} index={i} /></Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* REDES SOCIAIS (BENTO GRID - FULL WIDTH) */}
            <div>
              {renderSectionHeader("Social Media & Impacto")}
              <MasonryGrid>
                {getProjects("Redes Sociais").map((item, i) => (
                  <Link to={`/project/${item.id}`} key={item.id} className={`${item.span || ''}`}>
                    <PortfolioCard item={item} index={i} />
                  </Link>
                ))}
              </MasonryGrid>
            </div>
          </div>
        ) : (
          /* VIEW COM FILTRO ATIVO */
          <MasonryGrid>
            {PORTFOLIO_FULL.filter(p => p.category === filter).map((item, i) => (
              <Link to={`/project/${item.id}`} key={item.id} className={`${item.span || ''}`}>
                <PortfolioCard item={item} index={i} />
              </Link>
            ))}
          </MasonryGrid>
        )}
      </div>
    </div>
  );
};

export default Portfolio;