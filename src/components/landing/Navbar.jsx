import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import HOSLogo from '../shared/HOSLogo';
import ThemeToggle from '../shared/ThemeToggle';

const navLinks = [
    { label: 'Origin', href: createPageUrl('Origin') },
    { label: 'Manifesto', href: createPageUrl('Manifesto') },
    { label: 'The Problem', href: createPageUrl('TheProblem') },
    { label: 'Principles', href: createPageUrl('Principles') },
    { label: 'Blog', href: createPageUrl('Blog') },
    { label: 'Team', href: createPageUrl('Team') },
    { label: 'Press', href: createPageUrl('Press') },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${scrolled ? 'glass-strong shadow-lg shadow-black/20' : 'bg-transparent'}`}>
                    <HOSLogo
                        size={scrolled ? 34 : 52}
                        wordmarkSize={scrolled ? 'xs' : 'sm'}
                        variant="full"
                        className="transition-all duration-500"
                    />

                    <div className="hidden lg:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link key={link.label} to={link.href} className="text-xs text-white/60 hover:text-cyan-400 transition-colors duration-300 tracking-wider uppercase font-bold">
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href="https://buymeacoffee.com/ramonriosjr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-xs text-yellow-400/80 hover:text-yellow-300 hover:border-yellow-400/40 transition-all duration-300 font-medium flex items-center gap-1.5"
                        >
                            ☕ Donate
                        </a>
                        <Link to={createPageUrl('Join')} className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 text-xs text-cyan-300 hover:text-white hover:border-cyan-300/60 transition-all duration-300 font-bold shadow-[0_0_15px_rgba(34,211,238,0.15)] glow-btn">
                            Join the Movement
                        </Link>
                        <ThemeToggle />
                    </div>

                    <div className="flex items-center gap-3 lg:hidden">
                        <ThemeToggle />
                        <button className="text-white/40 hover:text-white/60 transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="lg:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border border-white/10 rounded-2xl mt-2 p-4 space-y-1 shadow-2xl"
                        >
                            {navLinks.map((link) => (
                                <Link 
                                    key={link.label} 
                                    to={link.href} 
                                    onClick={() => setMenuOpen(false)} 
                                    className="block px-4 py-3 text-sm text-white hover:text-cyan-400 transition-colors rounded-xl hover:bg-white/[0.05] font-medium"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-2 space-y-2">
                                <a 
                                    href="https://buymeacoffee.com/ramonriosjr" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    onClick={() => setMenuOpen(false)} 
                                    className="block w-full px-4 py-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-sm text-yellow-500 font-bold text-center"
                                >
                                    ☕ Donate
                                </a>
                                <Link 
                                    to={createPageUrl('Join')} 
                                    onClick={() => setMenuOpen(false)} 
                                    className="block w-full px-4 py-3 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-sm text-cyan-300 font-bold text-center glow-btn"
                                >
                                    Join the Movement
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}
