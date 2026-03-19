import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
<<<<<<< HEAD
import HeartbeatStream from '../shared/HeartbeatStream';

const stats = [
    { value: '1B+', label: 'Patient records at risk daily', sub: 'of data breaches involve health records' },
    { value: '$250', label: 'Your health data market value', sub: 'yet patients receive $0' },
=======

const stats = [
    { value: '1B+', label: 'Patient records at risk daily', sub: 'of data breaches involve health records' },
    { value: '$250', label: 'Your EHR data market value', sub: 'yet patients receive $0' },
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
    { value: '0%', label: 'Patient data ownership', sub: 'under current healthcare systems' },
    { value: '∞', label: 'Your right to sovereignty', sub: 'what hOS is fighting for' },
];

export default function HomeStats() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
<<<<<<< HEAD
        <section ref={ref} className="relative py-16 md:py-20 px-4 md:px-8 overflow-hidden">
            {/* Background Subdued Heartbeat */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                <HeartbeatStream color="#22d3ee" className="h-40 md:h-64" duration={8} segmentLength={150} />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
=======
        <section ref={ref} className="py-16 md:py-20 px-4 md:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: i * 0.12 }}
                        className="glass rounded-2xl p-5 md:p-7 group hover:border-cyan-500/20 transition-all duration-500 border border-white/[0.04]"
                    >
                        <p className="text-3xl md:text-4xl font-bold gradient-text mb-2" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>
                            {stat.value}
                        </p>
<<<<<<< HEAD
                        <p className="text-xs md:text-sm font-semibold text-white/70 mb-1">{stat.label}</p>
                        <p className="text-[10px] md:text-xs text-white/50 leading-relaxed font-medium">{stat.sub}</p>
=======
                        <p className="text-xs md:text-sm font-semibold text-white/60 mb-1">{stat.label}</p>
                        <p className="text-[10px] md:text-xs text-white/25 leading-relaxed">{stat.sub}</p>
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
                    </motion.div>
                ))}
            </div>
        </section>
    );
<<<<<<< HEAD
}
=======
}
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
