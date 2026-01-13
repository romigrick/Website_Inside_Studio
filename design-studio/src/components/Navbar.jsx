import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoInside from '../assets/logo branca.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/services', label: 'Serviços' },
        { path: '/team', label: 'Sobre' },
        { path: '/portfolio', label: 'Portfólio' },
        { path: '/contact', label: 'Contato' },
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-white/[0.05] py-6' : 'bg-transparent py-8'}`}>
                <div className="container mx-auto px-6">
                    {/* Layout: mobile = flex (logo left, menu button right)
                        desktop = grid 3 cols (logo | center links | button) */}
                    <div className="w-full flex items-center justify-between md:grid md:grid-cols-3 md:items-center">
                        {/* Coluna 1: logo (visível sempre, fica à esquerda) */}
                        <div className="flex items-center">
                            <Link to="/" className="flex items-center gap-2 cursor-pointer z-50">
                                <div className="relative group">
                                    <img
                                        src={logoInside}
                                        alt="Inside Studio"
                                        className="h-10 md:h-12 lg:h-12 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.innerHTML = '<span class="text-xl font-bold tracking-tighter text-white">DESIGN<span class="text-blue-600">.</span>STUDIO</span>';
                                        }}
                                    />
                                </div>
                            </Link>
                        </div>

                        {/* Coluna 2: links (centralizados no desktop, ocultos no mobile) */}
                        <div className="hidden md:flex justify-center">
                            <div className="flex items-center gap-8">
                                {navLinks.map((item) => (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        className={`text-base md:text-sm lg:text-s font-base transition-colors ${location.pathname === item.path ? 'text-white' : 'text-neutral-400 hover:text-white'}`}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Coluna 3: CTA (no desktop fica à direita; no mobile fica escondida porque CTA está no menu) */}
                        <div className="flex items-center justify-end">
                            <div className="hidden md:block">
                                <button
                                    onClick={() => navigate('/contact')}
                                    className="bg-white text-black px-8 py-4 rounded-full hover:bg-neutral-200 transition-colors text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                                >
                                    Começar Projeto
                                </button>
                            </div>

                            {/* Botão mobile (aparece apenas em telas pequenas e fica à direita) */}
                            <button
                                className="md:hidden text-white p-3 z-50 ml-4"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                {mobileMenuOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
                        className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-12 md:hidden"
                    >
                        <div className="px-8 w-full">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-3xl font-bold text-white tracking-tight block text-center py-3"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                        
                        <div className="h-px w-20 bg-white/10 my-4" />
                        <button
                            onClick={() => {
                                navigate('/contact');
                                setMobileMenuOpen(false);
                            }}
                            className="bg-white text-black px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider"
                        >
                            Começar Projeto
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;