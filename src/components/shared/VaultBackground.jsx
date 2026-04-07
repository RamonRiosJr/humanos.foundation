import React from 'react';
import { motion } from 'framer-motion';

/**
 * VaultBackground.jsx
 * Architect Assessor Protocol: Enterprise-Grade Visual Standard
 * A continuous, sovereign, and mathematical HUD overlay that unifies 
 * all legacy and new pages under the Zero-Knowledge Vault aesthetic.
 */
export default function VaultBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen opacity-50">
            {/* Enterprise Grid Array */}
            <div 
                className="absolute inset-0" 
                style={{ 
                    backgroundImage: 'linear-gradient(to right, rgba(34, 211, 238, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(34, 211, 238, 0.04) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                    maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)'
                }} 
            />

            {/* Neural/Data processing light flows */}
            <motion.div
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-0 right-[15%] w-[800px] h-[300px] bg-cyan-900/10 blur-[150px] rounded-[100%]"
            />

            <motion.div
                animate={{
                    opacity: [0.2, 0.5, 0.2],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full"
            />
            
            {/* Horizon Falloff */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-90" />
        </div>
    );
}
