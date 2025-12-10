import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link
import ParallaxCard from '../components/ParallaxCard';
import { PORTFOLIO_FULL } from '../data';

const Portfolio = () => (
  <div className="container mx-auto px-6 min-h-screen relative z-10">
    <div className="mb-16">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Trabalhos <br/>Selecionados</h1>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
      {PORTFOLIO_FULL.map((item, i) => (
        // Envolvemos o card em um Link passando o ID do projeto
        <Link to={`/project/${item.id}`} key={i} className={`block ${item.span || ''}`}>
           <ParallaxCard item={item} index={i} />
        </Link>
      ))}
    </div>
  </div>
);

export default Portfolio;