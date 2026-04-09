import React, { useState } from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import SurvivalBanner from '../components/landing/SurvivalBanner';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, Database, Activity, ScanFace, FileJson, CheckCircle2 } from 'lucide-react';

export default function Sandbox() {
    const [pin, setPin] = useState('');
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const [error, setError] = useState(false);

    const correctPin = '123456';

    const handlePinEntry = (num) => {
        if (pin.length < 6) {
            setPin(prev => prev + num);
            setError(false);
        }
    };

    const handleDelete = () => setPin(prev => prev.slice(0, -1));

    const handleAuthenticate = () => {
        if (pin.length !== 6) return;
        setIsAuthenticating(true);
        setTimeout(() => {
            if (pin === correctPin) {
                setIsUnlocked(true);
            } else {
                setError(true);
                setPin('');
            }
            setIsAuthenticating(false);
        }, 1200);
    };

    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <SEOMeta 
                title="Zero-Knowledge API Sandbox — Aura hOS" 
                description="Interactive demonstration of the Aura hOS Zero-Knowledge FHIR handshake. Test the BAA-exempt infrastructure live." 
                url="https://humanos.foundation/sandbox" 
            />
            <SurvivalBanner />
            <Navbar />
            
            <PageHero 
                badge="B2B Infrastructure Demo" 
                title="Zero-Knowledge" 
                titleAccent="Sandbox" 
                subtitle="Test the mathematical cryptography behind our FTC HBNR Exemption. The clinic initiates the payload, the patient decrypts it locally." 
            />

            <section className="py-20 px-4 md:px-8">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Explanation Context */}
                    <div className="space-y-8">
                        <div className="glass-strong p-8 rounded-3xl border border-cyan-500/20 shadow-[0_0_40px_rgba(6,182,212,0.1)]">
                            <h2 className="text-2xl font-bold mb-4 font-outfit text-white">The Provider Terminal</h2>
                            <p className="text-sm text-white/70 leading-relaxed mb-6">
                                In a real clinical setting, a provider connects to the Web Terminal via OAuth and drops an Epic/Cerner JSON payload. However, the data is useless white-noise until the patient physically authorizes decryption using their local biometric enclave.
                            </p>
                            
                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                                    <FileJson className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="text-sm font-bold text-white mb-1">State 1: Encrypted Payload</h4>
                                        <p className="text-xs text-white/50 leading-relaxed">The hospital JSON sits in the transient pipeline. It is mathematically impossible to read without the patient's AES-256 key constraint.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                                    <ScanFace className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="text-sm font-bold text-white mb-1">State 2: Local Decryption</h4>
                                        <p className="text-xs text-white/50 leading-relaxed">Input the mock PIN <code className="bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-mono text-xs ml-1">123456</code> to simulate the patient’s FaceID/PIN unlock event.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Vault */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 blur-3xl opacity-50 -z-10" />
                        
                        <div className="glass-strong p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden">
                            
                            {/* Vault Status Header */}
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg ${isUnlocked ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
                                        {isUnlocked ? <Unlock className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-0.5">Payload Status</p>
                                        <p className={`text-sm font-bold ${isUnlocked ? 'text-emerald-400' : 'text-rose-400'}`}>
                                            {isUnlocked ? 'DECRYPTED_SUCCESS' : 'AES256_LOCKED'}
                                        </p>
                                    </div>
                                </div>
                                <Database className="w-6 h-6 text-white/10" />
                            </div>

                            <AnimatePresence mode="wait">
                                {!isUnlocked ? (
                                    <motion.div 
                                        key="locked"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="space-y-6"
                                    >
                                        {/* Mock Data Code Block */}
                                        <div className="bg-black/50 rounded-xl p-4 border border-rose-500/20 relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
                                            <p className="text-[10px] text-rose-500/70 font-mono break-all leading-relaxed select-none blur-[1px]">
                                                {Array.from({ length: 15 }).map(() => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)).join('')}
                                            </p>
                                        </div>

                                        {/* PIN Pad */}
                                        <div className="max-w-xs mx-auto">
                                            <div className="flex gap-3 justify-center mb-6">
                                                {Array.from({ length: 6 }).map((_, i) => (
                                                    <div 
                                                        key={i}
                                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${i < pin.length ? 'bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]' : 'bg-white/10'}`}
                                                    />
                                                ))}
                                            </div>

                                            <div className="grid grid-cols-3 gap-3 mb-6">
                                                {[1,2,3,4,5,6,7,8,9].map(num => (
                                                    <button 
                                                        key={num}
                                                        onClick={() => handlePinEntry(num.toString())}
                                                        className="aspect-square rounded-full glass hover:bg-white/5 active:scale-95 transition-all text-xl font-outfit"
                                                    >
                                                        {num}
                                                    </button>
                                                ))}
                                                <div />
                                                <button 
                                                    onClick={() => handlePinEntry('0')}
                                                    className="aspect-square rounded-full glass hover:bg-white/5 active:scale-95 transition-all text-xl font-outfit"
                                                >
                                                    0
                                                </button>
                                                <button 
                                                    onClick={handleDelete}
                                                    className="aspect-square rounded-full text-white/40 hover:text-white/80 active:scale-95 transition-all text-sm font-bold uppercase tracking-widest"
                                                >
                                                    Del
                                                </button>
                                            </div>

                                            <button 
                                                onClick={handleAuthenticate}
                                                disabled={isAuthenticating || pin.length !== 6}
                                                className="w-full relative overflow-hidden group py-3 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-bold tracking-widest uppercase text-sm disabled:opacity-50 disabled:cursor-not-allowed glow-btn flex justify-center"
                                            >
                                                {isAuthenticating ? (
                                                    <Activity className="w-5 h-5 animate-pulse" />
                                                ) : (
                                                    <span>Authenticate</span>
                                                )}
                                            </button>
                                            
                                            {error && (
                                                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-xs text-rose-400 mt-4 font-medium uppercase tracking-widest">
                                                    Invalid Cryptographic Signature
                                                </motion.p>
                                            )}
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div 
                                        key="unlocked"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="space-y-6"
                                    >
                                        <div className="bg-black/60 rounded-xl p-5 border border-emerald-500/30 font-mono text-xs text-emerald-400/90 leading-relaxed max-h-[300px] overflow-y-auto">
                                            <p className="text-emerald-300 mb-4 pb-2 border-b border-emerald-500/20">{'// FHIR R4 Decrypted Payload'}</p>
                                            <pre>{JSON.stringify({
                                                resourceType: "Patient",
                                                identifier: [{
                                                    system: "urn:oid:Aura-hOS-Secure-Vault",
                                                    value: "02934-x82A"
                                                }],
                                                active: true,
                                                name: [{ use: "official", text: "John Doe" }],
                                                medicationTracking: {
                                                    quantityOnHand: 45,
                                                    refillDeficit: false
                                                },
                                                adherenceRatio: "0.94"
                                            }, null, 2)}</pre>
                                        </div>
                                        
                                        <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                            <p className="text-xs text-emerald-200/80 leading-relaxed">
                                                The clinical payload was structurally pulled into the patient's sovereign vault. The hospital B2B ledger incurs a $0.25 execution charge. The BAA requirement is completely bypassed.
                                            </p>
                                        </div>

                                        <button 
                                            onClick={() => { setIsUnlocked(false); setPin(''); }}
                                            className="w-full py-3 rounded-xl border border-white/20 text-white/50 text-xs font-bold uppercase hover:bg-white/5 transition-colors"
                                        >
                                            Reset Simulation
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </section>
            
            <Footer />
        </div>
    );
}
