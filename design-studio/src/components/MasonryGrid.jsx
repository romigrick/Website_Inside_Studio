// src/components/MasonryGrid.jsx
import React from 'react';
import Masonry from 'react-masonry-css';

const defaultBreakpoints = {
  default: 4, // 4 colunas em telas grandes (PC)
  1100: 3,    // 3 colunas em notebooks
  700: 2,     // 2 colunas em tablets
  500: 1      // 1 coluna em celulares
};

const MasonryGrid = ({ children, breakpoints = defaultBreakpoints, className = "" }) => {
  return (
    <Masonry
      breakpointCols={breakpoints}
      className={`flex w-auto -ml-4 ${className}`} // -ml-4 compensa o padding das colunas
      columnClassName="pl-4 bg-clip-padding" // pl-4 cria o espaçamento lateral (gap)
    >
      {/* Renderiza os filhos (os cards) dentro das colunas */}
      {children}
    </Masonry>
  );
};

export default MasonryGrid;