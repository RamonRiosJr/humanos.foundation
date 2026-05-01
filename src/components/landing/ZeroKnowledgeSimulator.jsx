import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, ShieldCheck, Database, KeyRound, Cpu, ArrowRight } from 'lucide-react';

export default function ZeroKnowledgeSimulator() {
    const [inputMode, setInputMode] = useState(true);
    const [rawText, setRawText] = useState("Patient reports onset of acute migraines localized to the frontal lobe, accompanied by photophobia and mild nausea. Heart rate elevated at 92 BPM.");
    const [encryptionStage, setEncryptionStage] = useState(0);
    const [cipherText, setCipherText] = useState("");

    const generateFakeCipher = (text) => {
        return "U2FsdGVkX1" + btoa(text).replace(/=/g, '') + Array.from({length: 48}, () => Math.floor(Math.random()*16).toString(16)).join('') + "==";
    };

    const handleEncrypt = () => {
        if (!rawText.trim() || encryptionStage > 0) return;
        
        setInputMode(false);
        setEncryptionStage(1);
        
        setTimeout(() => {
            setEncryptionStage(2);
            setTimeout(() => {
                setCipherText(generateFakeCipher(rawText));
                setEncryptionStage(3);
            }, 1200);
        }, 800);
    };

    const handleReset = () => {
        setEncryptionStage(0);
        setInputMode(true);
        setCipherText("");
    };

    return (
        <section className="relative py-24 px-4 md:px-8 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 md:mb-24">
                    <span className="text-xs md:text-sm text-emerald-400/60 font-medium tracking-[0.2em] uppercase flex items-center justify-center gap-2 mb-4">
                        <Lock className="w-4 h-4" /> Live Demonstration
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2 tracking-tight" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>
                        The <span className="text-emerald-400">Zero-Knowledge</span> Vault
                    </h2>
                    <p className="text-white/50 max-w-2xl mx-auto mt-6 text-sm md:text-base leading-relaxed">
                        We mathematically guarantee your privacy by encrypting your data locally on your device before it ever touches the network. Our cloud databases are completely blind to your actual health narrative.
                    </p>
                </div>

                {/* Simulator UI */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left side: Terminal/Input */}
                    <div className="glass rounded-2xl border border-white/10 overflow-hidden relative shadow-2xl">
                        {/* Terminal Header */}
                        <div className="bg-black/40 px-4 py-3 border-b border-white/5 flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-rose-500/50" />
                                <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                                <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                            </div>
                            <span className="text-[10px] text-white/30 ml-2 font-mono tracking-wider">Aura_Local_Engine_v0.8</span>
                        </div>

                        <div className="p-6 md:p-8">
                            {inputMode ? (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5">
                                    <label className="text-xs text-white/50 uppercase tracking-widest font-bold">1. Input Clinical Narrative</label>
                                    <textarea 
                                        value={rawText}
                                        onChange={(e) => setRawText(e.target.value)}
                                        className="w-full h-36 bg-black/40 border border-white/10 rounded-xl p-4 text-sm text-cyan-50 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none placeholder-white/20 shadow-inner"
                                        placeholder="Type a symptom or clinical note here..."
                                    />
                                    <button 
                                        onClick={handleEncrypt}
                                        className="w-full py-4 px-4 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2 group"
                                    >
                                        <Lock className="w-4 h-4 group-hover:scale-110 transition-transform" /> 
                                        Initialize Local Encryption
                                    </button>
                                </motion.div>
                            ) : (
                                <div className="space-y-6 h-[236px] flex flex-col justify-center">
                                    {/* Stage 1: Key Gen */}
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }} 
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-center gap-4"
                                    >
                                        <div className={`p-2 rounded-lg ${encryptionStage >= 1 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/5 text-white/20'}`}>
                                            <KeyRound className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white/90">Deriving Local Device Key</p>
                                            <p className="text-xs text-white/40 font-mono">PBKDF2 HMAC-SHA256 (100k iterations)</p>
                                        </div>
                                        {encryptionStage === 1 && <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-4 h-4 border-2 border-emerald-500/30 border-t-emerald-400 rounded-full ml-auto" />}
                                        {encryptionStage > 1 && <ShieldCheck className="w-5 h-5 text-emerald-400 ml-auto" />}
                                    </motion.div>

                                    {/* Stage 2: Encrypting */}
                                    <AnimatePresence>
                                        {encryptionStage >= 2 && (
                                            <motion.div 
                                                initial={{ opacity: 0, y: 10 }} 
                                                animate={{ opacity: 1, y: 0 }}
                                                className="flex items-center gap-4"
                                            >
                                                <div className={`p-2 rounded-lg ${encryptionStage >= 2 ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/5 text-white/20'}`}>
                                                    <Cpu className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-white/90">Applying AES-GCM 256 Cipher</p>
                                                    <p className="text-xs text-white/40 font-mono">Transforming clinical payload...</p>
                                                </div>
                                                {encryptionStage === 2 && <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-4 h-4 border-2 border-cyan-500/30 border-t-cyan-400 rounded-full ml-auto" />}
                                                {encryptionStage > 2 && <ShieldCheck className="w-5 h-5 text-cyan-400 ml-auto" />}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right side: Database state */}
                    <div className="relative">
                        <div className="absolute top-1/2 -left-8 md:-left-12 -translate-y-1/2 z-0 hidden lg:flex text-white/10">
                            <ArrowRight className="w-8 h-8" />
                        </div>
                        
                        <div className="glass rounded-2xl border border-white/5 overflow-hidden relative shadow-xl">
                            <div className="bg-[#0a0a0f] px-6 py-4 border-b border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Database className="w-5 h-5 text-purple-400/80" />
                                    <div>
                                        <h3 className="text-sm font-bold text-white/80">Humanos Cloud Server</h3>
                                        <p className="text-[10px] text-white/30 uppercase tracking-widest mt-0.5">PostgreSQL / JSONB</p>
                                    </div>
                                </div>
                                <div className="px-2 py-1 rounded bg-rose-500/10 border border-rose-500/20 text-[9px] text-rose-400 font-bold tracking-wider">
                                    BLIND STATE
                                </div>
                            </div>
                            
                            <div className="p-6 md:p-8 h-[250px] bg-black/40 font-mono text-[11px] overflow-hidden relative">
                                {encryptionStage < 3 ? (
                                    <div className="h-full flex flex-col items-center justify-center text-white/20 space-y-4">
                                        <Database className="w-10 h-10 opacity-20" />
                                        <p className="text-xs">Awaiting encrypted transmission...</p>
                                    </div>
                                ) : (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
                                        <div className="flex justify-between text-white/40 mb-3 pb-3 border-b border-white/5">
                                            <span>RECORD_ID: <span className="text-purple-400">auth_uuid_7x9q</span></span>
                                            <span>PAYLOAD: {cipherText.length}B</span>
                                        </div>
                                        <p className="text-emerald-400/80 break-all leading-relaxed whitespace-pre-wrap h-32 overflow-y-auto pr-2" style={{ scrollbarWidth: 'thin', scrollbarColor: '#34d399 transparent' }}>
                                            {cipherText}
                                        </p>
                                        
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <button 
                                                onClick={handleReset}
                                                className="w-full py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/50 hover:text-white/80 transition-colors text-xs font-sans font-medium"
                                            >
                                                Reset Demonstration
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
