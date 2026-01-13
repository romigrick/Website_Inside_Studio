import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link
import ParallaxCard from '../components/ParallaxCard';
import { PORTFOLIO_FULL } from '../data';
import PortfolioCard from '../components/PortfolioCard';
import MasonryGrid from '../components/MasonryGrid';

const Portfolio = () => (
  <div className="container mx-auto px-6 min-h-screen relative z-10">
    <div className="mb-16">
                   
      <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-4 block">Nossos Trabalhos</span>
      <h1 className="text-5xl text-left md:text-7xl font-bold mb-6 text-white">Criados<br></br>para Impactar</h1>
    </div>

    <div className="w-full max-w-[1600px] mx-auto px-4 relative z-10 mt-auto">
      <MasonryGrid>
      {PORTFOLIO_FULL.map((item, i) => (
        // Envolvemos o card em um Link passando o ID do projeto
        <Link to={`/project/${item.id}`} key={i} className={`block ${item.span || ''}`}>
           <PortfolioCard item={item} index={i} />
        </Link>
      ))}
      </MasonryGrid>
    </div>
  </div>
);

export default Portfolio;