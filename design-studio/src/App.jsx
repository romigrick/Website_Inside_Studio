import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Team from './pages/Team';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ProjectDetails from './pages/ProjectDetails'; // Importando a nova página
import RouteChangeTracker from './components/RouteChangeTracker';

// Componente para rolar para o topo ao mudar de rota
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <RouteChangeTracker />
      <ScrollToTop />
      <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 overflow-x-hidden font-sans flex flex-col">

        {/* Background Global */}
        <div className="fixed inset-0 z-0 pointer-events-none bg-[#020202]">
          <div className="absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-blue-900/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-purple-900/5 rounded-full blur-[150px]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
        </div>

        <Navbar />

        <main className="relative z-10 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/:id" element={<ProjectDetails />} /> {/* Nova Rota */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;