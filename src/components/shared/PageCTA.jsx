import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

<<<<<<< HEAD
export default function PageCTA({ title = "Ready to Take Command?", subtitle = "Join thousands building the movement for patient data sovereignty.", cta = "Join the Movement", ctaHref = undefined }) {
=======
export default function PageCTA({ title = "Ready to Take Command?", subtitle = "Join thousands building the movement for patient data sovereignty.", cta = "Join the Movement", ctaHref }) {
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
    return (
        <section className="relative py-24 md:py-32 px-4 md:px-8">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />
            <div className="relative z-10 max-w-3xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-strong rounded-3xl p-10 md:p-16 border border-cyan-500/10"
                >
                    <h2 className="text-2xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>
                        {title}
                    </h2>
<<<<<<< HEAD
                    <p className="text-sm text-white/70 mb-8 leading-relaxed max-w-xl mx-auto font-medium">{subtitle}</p>
                    <Link
                        to={ctaHref || createPageUrl('Join')}
                        className="inline-flex items-center gap-2 glow-btn px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-white font-bold text-sm tracking-wide hover:border-cyan-400/60 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
=======
                    <p className="text-sm text-white/35 mb-8 leading-relaxed max-w-xl mx-auto">{subtitle}</p>
                    <Link
                        to={ctaHref || createPageUrl('Join')}
                        className="inline-flex items-center gap-2 glow-btn px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-white font-semibold text-sm tracking-wide"
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
                    >
                        {cta} →
                    </Link>
                </motion.div>
            </div>
        </section>
    );
<<<<<<< HEAD
}
=======
}
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)

