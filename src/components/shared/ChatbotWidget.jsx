import React, { useState, useRef, useEffect } from "react";
import { X, Send } from "lucide-react";
import { AILogo } from "./AILogo";
import { useFoundationChat } from "@/hooks/useFoundationChat";

const ChatMessage = ({ message }) => {
    const isModel = message.role === "model";
    return (
        <div
            className={`flex items-end gap-2 ${isModel ? "self-start" : "self-end flex-row-reverse"} max-w-[90%]`}
        >
            {isModel && (
                <div className="w-6 h-6 rounded-full flex-shrink-0 mb-1 overflow-hidden">
                    <AILogo className="w-6 h-6" botState="idle" />
                </div>
            )}
            <div
                className={`rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    isModel
                        ? "bg-slate-800/80 border border-slate-700/50 rounded-tl-sm text-slate-300"
                        : "bg-cyan-600 text-white rounded-tr-sm"
                }`}
            >
                {message.text || (
                    <span className="flex gap-1 items-center py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0ms]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:150ms]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:300ms]" />
                    </span>
                )}
            </div>
        </div>
    );
};

const ChatbotWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const { messages, isLoading, sendMessage } = useFoundationChat();
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [isOpen]);

    const handleSend = () => {
        if (!inputValue.trim() || isLoading) return;
        sendMessage(inputValue.trim());
        setInputValue("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {isOpen && (
                <div className="absolute bottom-16 right-0 w-80 h-[480px] bg-slate-900 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 z-[60]">
                    {/* Header */}
                    <div className="flex items-center justify-between bg-black/50 p-3 border-b border-white/10 flex-shrink-0">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10">
                                <AILogo
                                    className="w-10 h-10"
                                    botState={isLoading ? "speaking" : "idle"}
                                />
                            </div>
                            <div>
                                <h3 className="font-semibold text-white text-sm">
                                    hOS AI
                                </h3>
                                <p className="text-[10px] text-cyan-400 font-mono tracking-wider uppercase flex items-center gap-1">
                                    <span
                                        className={`w-1.5 h-1.5 rounded-full ${isLoading ? "bg-cyan-400 animate-pulse" : "bg-green-400"}`}
                                    />
                                    {isLoading
                                        ? "Thinking..."
                                        : "Foundation AI"}
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
                            aria-label="Close Chat"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-3 bg-gradient-to-b from-transparent to-black/20">
                        {messages.map((msg, i) => (
                            <ChatMessage key={i} message={msg} />
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-3 border-t border-white/10 bg-black/40 flex-shrink-0">
                        <div className="flex items-center gap-2 bg-slate-950 border border-slate-700 focus-within:border-cyan-500/50 rounded-full py-1 px-3 transition-colors">
                            <input
                                ref={inputRef}
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Ask about patient data rights..."
                                disabled={isLoading}
                                className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 py-1.5 outline-none disabled:opacity-50"
                            />
                            <button
                                onClick={handleSend}
                                disabled={isLoading || !inputValue.trim()}
                                className="text-cyan-400 hover:text-cyan-300 disabled:text-slate-700 transition-colors disabled:cursor-not-allowed"
                                aria-label="Send message"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                        <p className="text-[10px] text-slate-600 text-center mt-2">
                            Powered by Gemini · Not medical advice
                        </p>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative group transition-transform duration-300 hover:scale-110"
                aria-label="Toggle AI Chatbot"
                aria-expanded={isOpen}
            >
                {/* Blue/Red Animated Halo */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-red-500 rounded-full blur-2xl opacity-40 animate-pulse group-hover:opacity-70 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-red-400 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity" />

                <div className="relative w-20 h-20 flex items-center justify-center transition-all duration-500 overflow-visible">
                    {isOpen ? (
                        <div className="w-14 h-14 flex items-center justify-center bg-slate-900 border border-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                            <X className="w-7 h-7 text-blue-400" />
                        </div>
                    ) : (
                        <AILogo
                            className="w-20 h-20 filter drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]"
                            botState="idle"
                        />
                    )}
                </div>
            </button>
        </div>
    );
};

export default ChatbotWidget;
