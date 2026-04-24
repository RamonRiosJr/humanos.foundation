import React from 'react';
import { motion } from 'framer-motion';

export default function DataManifestoImage() {
    return (
        <section className="relative py-20 px-4 md:px-8 bg-obsidian overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.15)] border border-white/5"
                >
                    <img 
                        src="/showcase/data-sovereignty-hero.png" 
                        alt="The Narrative Flip: From Clipboard to Sovereignty" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row items-baseline justify-between gap-4">
                        <div>
                            <h3 className="text-2xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>
                                The Narrative <span className="text-cyan-400">Flip.</span>
                            </h3>
                            <p className="text-sm md:text-lg text-white/70 max-w-xl">
                                From the archaic 15-page clipboard penalty to the absolute clinical clarity of Aura hOS™.
                            </p>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10">
                            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                            <span className="text-[10px] text-cyan-400 tracking-widest uppercase font-bold">
                                CMS Mandate Compatible
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
