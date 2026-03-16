import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Heart, Brain, Shield, Zap, TrendingUp } from 'lucide-react';

const metrics = [
    { label: 'History Sync', value: 'Complete', icon: Brain, color: '#00d4ff' },
    { label: 'Heart Rate', value: '72 bpm', icon: Heart, color: '#f43f5e' },
    { label: 'Vitals', value: 'Unignorable', icon: Activity, color: '#10b981' },
    { label: 'Digital Vault', value: 'Sovereign', icon: Shield, color: '#8b5cf6' },
];

export default function HeroDashboard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl mx-auto mt-12 md:mt-16"
        >
            <div className="glass-strong rounded-2xl md:rounded-3xl p-4 md:p-8 glow-cyan h-full">
                {/* Header bar */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-xs md:text-sm text-cyan-400/80 font-medium tracking-wider uppercase">
                            hOS Dashboard — Live
                        </span>
                    </div>
                    <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-white/10" />
                        <div className="w-2 h-2 rounded-full bg-white/10" />
                        <div className="w-2 h-2 rounded-full bg-cyan-400/40" />
                    </div>
                </div>

                {/* Metrics grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    {metrics.map((metric, i) => (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 + i * 0.15 }}
                            className="glass rounded-xl p-3 md:p-4 group hover:border-cyan-500/20 transition-all duration-500"
                        >
                            <metric.icon
                                className="w-4 h-4 md:w-5 md:h-5 mb-2 transition-transform duration-500 group-hover:scale-110"
                                style={{ color: metric.color }}
                            />
                            <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-wider mb-1">
                                {metric.label}
                            </p>
                            <p className="text-lg md:text-xl font-semibold text-white">
                                {metric.value}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Mini waveform */}
                <div className="mt-5 glass rounded-xl p-3 md:p-4">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                            <Zap className="w-3.5 h-3.5 text-cyan-400" />
                            <span className="text-xs text-white/40">Bio-Signal Stream</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <TrendingUp className="w-3 h-3 text-emerald-400" />
                            <span className="text-[10px] text-emerald-400">+12.3%</span>
                        </div>
                    </div>
                    <div className="flex items-end gap-[2px] h-10 md:h-12">
                        {Array.from({ length: 48 }).map((_, i) => {
                            const h = 20 + Math.sin(i * 0.4) * 30 + Math.random() * 25;
                            return (
                                <motion.div
                                    key={i}
                                    className="flex-1 rounded-full"
                                    style={{
                                        background: `linear-gradient(to top, rgba(0,212,255,0.1), rgba(0,212,255,${0.3 + Math.random() * 0.4}))`,
                                    }}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{
                                        duration: 1.5,
                                        delay: 1.5 + i * 0.03,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Floating reflection */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-cyan-500/5 blur-3xl rounded-full" />
        </motion.div>
    );
}
