import React from 'react';
import { motion } from 'framer-motion';

<<<<<<< HEAD
export default function PageHero({ badge, title, titleAccent, subtitle, children = null }) {
=======
export default function PageHero({ badge, title, titleAccent, subtitle, children }) {
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
    return (
        <section className="relative pt-32 md:pt-44 pb-20 md:pb-28 px-4 md:px-8 overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />
            </div>
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                {badge && (
                    <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-[11px] text-cyan-400/80 font-medium tracking-[0.2em] uppercase">{badge}</span>
                    </motion.div>
                )}
                <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-5"
<<<<<<< HEAD
                    // @ts-ignore — fontFamily is valid in MotionStyle at runtime
=======
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
                    style={{ fontFamily: 'Outfit, Inter, sans-serif' }}
                >
                    {title}{' '}
                    {titleAccent && <span className="gradient-text">{titleAccent}</span>}
                </motion.h1>
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.25 }}
<<<<<<< HEAD
                        className="text-sm md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed font-medium"
=======
                        className="text-sm md:text-lg text-white/40 max-w-2xl mx-auto leading-relaxed font-light"
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
                    >
                        {subtitle}
                    </motion.p>
                )}
                {children}
            </div>
        </section>
    );
<<<<<<< HEAD
}
=======
}
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)

