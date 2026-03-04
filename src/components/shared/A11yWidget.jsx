import React, { useState } from 'react';
import { useA11y } from '@/lib/A11yContext';
import { Accessibility, Eye, Maximize, Type, Link as LinkIcon, PauseCircle, X } from 'lucide-react';

const A11yWidget = () => {
    const { settings, toggleSetting } = useA11y();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 left-6 z-50 transition-all duration-300">
            {isOpen && (
                <div className="absolute bottom-16 left-0 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl w-72 sm:w-80 p-4 shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <div className="flex items-center gap-2">
                            <Accessibility className="w-5 h-5 text-cyan-400" />
                            <h3 className="font-semibold text-white">Accessibility</h3>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors" aria-label="Close Accessibility Menu">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <p className="text-xs text-slate-400 mb-2 font-mono">SOVEREIGN ENGINE ACTIVE</p>

                    <div className="space-y-2">
                        <A11yToggle
                            active={settings.highContrast}
                            onClick={() => toggleSetting('highContrast')}
                            icon={<Eye className="w-4 h-4" />}
                            label="High Contrast"
                        />
                        <A11yToggle
                            active={settings.largeText}
                            onClick={() => toggleSetting('largeText')}
                            icon={<Maximize className="w-4 h-4" />}
                            label="Oversized Text"
                        />
                        <A11yToggle
                            active={settings.dyslexiaFont}
                            onClick={() => toggleSetting('dyslexiaFont')}
                            icon={<Type className="w-4 h-4" />}
                            label="Dyslexia Friendly"
                        />
                        <A11yToggle
                            active={settings.highlightLinks}
                            onClick={() => toggleSetting('highlightLinks')}
                            icon={<LinkIcon className="w-4 h-4" />}
                            label="Highlight Links"
                        />
                        <A11yToggle
                            active={settings.pauseAnimations}
                            onClick={() => toggleSetting('pauseAnimations')}
                            icon={<PauseCircle className="w-4 h-4" />}
                            label="Pause Animations"
                        />
                    </div>
                </div>
            )}

            {/* Blue Animated Halo & Fog */}
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-30 animate-halo-pulse"></div>
            <div className="absolute -inset-2 bg-blue-400/20 rounded-full blur-xl animate-fog-drift"></div>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.5)] ${isOpen ? 'bg-blue-600 text-white scale-90' : 'bg-slate-800 text-blue-400 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-700 hover:scale-110'
                    }`}
                aria-label="Toggle Accessibility Menu"
                aria-expanded={isOpen}
            >
                {isOpen ? <X className="w-6 h-6" /> : <Accessibility className="w-6 h-6" />}
            </button>
        </div>
    );
};

const A11yToggle = ({ active, onClick, icon, label }) => {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all duration-200 ${active
                ? 'bg-cyan-500/10 border-cyan-500/50 text-cyan-400'
                : 'bg-transparent border-transparent text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
            aria-pressed={active}
        >
            <div className="flex items-center gap-3">
                {icon}
                <span className="text-sm font-medium">{label}</span>
            </div>
            <div className={`w-8 h-4 rounded-full transition-colors relative ${active ? 'bg-cyan-500' : 'bg-slate-700'}`}>
                <div className={`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-transform ${active ? 'translate-x-4' : 'translate-x-0'}`} />
            </div>
        </button>
    );
};

export default A11yWidget;
