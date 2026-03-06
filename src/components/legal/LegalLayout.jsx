import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function LegalLayout({ sections, lastUpdated, version }) {
    const [active, setActive] = useState(0);

    return (
        <section className="pb-28 px-4 md:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-4 text-xs text-white/25 mb-10">
                    <span>Last updated: {lastUpdated}</span>
                    {version && <><span>·</span><span>Version {version}</span></>}
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* TOC */}
                    <div className="md:col-span-1">
                        <div className="glass rounded-2xl p-5 border border-white/[0.04] sticky top-24">
                            <p className="text-[10px] text-white/25 uppercase tracking-widest mb-4">Contents</p>
                            <ul className="space-y-1">
                                {sections.map((s, i) => (
                                    <li key={i}>
                                        <button
                                            onClick={() => setActive(i)}
                                            className={`text-left w-full text-xs px-3 py-2 rounded-lg transition-all duration-200 ${active === i ? 'text-cyan-400 bg-cyan-500/10' : 'text-white/25 hover:text-white/50'
                                                }`}
                                        >
                                            {s.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-2 space-y-6">
                        {sections.map((s, i) => (
                            <motion.div
                                key={i}
                                id={`section-${i}`}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.04 }}
                                onViewportEnter={() => setActive(i)}
                                className="glass rounded-2xl p-6 md:p-8 border border-white/[0.04]"
                            >
                                <h3 className="text-base font-semibold text-white/70 mb-4" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>{s.title}</h3>
                                <div className="space-y-2">
                                    {s.content.split('\n').map((line, j) => (
                                        line.trim() === '' ? <div key={j} className="h-2" /> :
                                            <p key={j} className={`text-sm leading-relaxed ${line.startsWith('•') ? 'text-white/60 pl-4 font-medium' : line === line.toUpperCase() && line.length > 20 ? 'text-cyan-400 font-bold text-xs' : 'text-white/60'}`}>
                                                {line}
                                            </p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
