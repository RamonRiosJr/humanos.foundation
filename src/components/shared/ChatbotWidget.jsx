import React, { useState } from 'react';
import { Bot, X, Send } from 'lucide-react';

const ChatbotWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {isOpen && (
                <div className="absolute bottom-16 right-0 w-80 h-[450px] bg-slate-900 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 z-[60]">
                    {/* Header */}
                    <div className="flex items-center justify-between bg-black/50 p-4 border-b border-white/10">
                        <div className="flex items-center gap-3">
                            <img src="/coquibot.png" alt="CoquiBot Avatar" className="w-8 h-8 rounded-full border border-cyan-500/50" />
                            <div>
                                <h3 className="font-semibold text-white text-sm">CoquiBot</h3>
                                <p className="text-[10px] text-cyan-400 font-mono tracking-wider uppercase">Foundation AI (Beta)</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors" aria-label="Close Chat">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Chat Area Log (Placeholder) */}
                    <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-gradient-to-b from-transparent to-black/20">
                        <div className="bg-slate-800/80 border border-slate-700/50 rounded-2xl rounded-tl-sm p-3 max-w-[85%] self-start text-sm text-slate-300 shadow-sm leading-relaxed">
                            Hello. I am the AI guide for the Humanos Foundation. This module is currently in Beta and will be fully connected to our Sovereign Knowledge Graph soon. How can I help you navigate the movement today?
                        </div>
                    </div>

                    {/* Pending Input Area */}
                    <div className="p-3 border-t border-white/10 bg-black/40">
                        <div className="flex items-center gap-2 bg-slate-950 border border-slate-700 rounded-full py-1 px-4">
                            <input
                                type="text"
                                disabled
                                placeholder="AI connection pending..."
                                className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 py-2 outline-none cursor-not-allowed"
                            />
                            <button disabled className="text-slate-500 opacity-50 cursor-not-allowed">
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative group transition-transform duration-300 hover:scale-105"
                aria-label="Toggle AI Chatbot"
                aria-expanded={isOpen}
            >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-cyan-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>

                <div className={`relative w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)] overflow-hidden transition-all duration-500 ${isOpen ? 'scale-90 border-cyan-500' : 'border-slate-700'}`}>
                    {isOpen ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-900 border border-cyan-500 rounded-full">
                            <X className="w-6 h-6 text-cyan-400" />
                        </div>
                    ) : (
                        <img src="/coquibot.png" alt="CoquiBot" className="w-full h-full object-cover rounded-full border-2 border-slate-800" />
                    )}
                </div>
            </button>
        </div>
    );
};

export default ChatbotWidget;
