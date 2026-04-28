import React, { useState, useEffect } from 'react';
import { useA11y } from '@/lib/A11yContext';
import { Accessibility, Eye, Maximize, Type, Link as LinkIcon, PauseCircle, X, AlignJustify } from 'lucide-react';

// The Aura hOS Enterprise Cognitive Focus Mask
const ReadingMask = () => {
    const { settings } = useA11y();
    const [mouseY, setMouseY] = useState(window.innerHeight / 2);

    useEffect(() => {
        if (!settings.readingMask) return;
        const handleMouseMove = (e) => requestAnimationFrame(() => setMouseY(e.clientY));
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [settings.readingMask]);

    if (!settings.readingMask) return null;

    return (
        <div 
            className="fixed inset-0 z-[9999] pointer-events-none transition-opacity duration-300"
            style={{
                background: `linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.85) ${mouseY - 70}px, transparent ${mouseY - 70}px, transparent ${mouseY + 70}px, rgba(0,0,0,0.85) ${mouseY + 70}px, rgba(0,0,0,0.85) 100%)`
            }}
        />
    );
};

const A11yWidget = () => {
    const { settings, toggleSetting } = useA11y();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <ReadingMask />
            <div className="fixed bottom-6 left-6 z-[9990] transition-all duration-300">
                {isOpen && (
                    <div className="absolute bottom-16 left-0 bg-[#0a0a0f]/95 backdrop-blur-2xl border border-white/10 rounded-2xl w-80 p-5 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-6">
                        <div className="flex items-center justify-between pb-3 border-b border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-500/20 rounded-xl border border-blue-400/30">
                                    <Accessibility className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white tracking-wide text-sm">Accessibility</h3>
                                    <p className="text-[10px] text-blue-400 font-mono tracking-widest uppercase">Aura hOS Engine Active</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-transform hover:rotate-90 bg-white/5 p-1.5 rounded-full" aria-label="Close">
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 gap-2 max-h-[60vh] overflow-y-auto pr-1 custom-scrollbar">
                            <A11yToggle
                                active={settings.highContrast}
                                onClick={() => toggleSetting('highContrast')}
                                icon={<Eye className="w-4 h-4" />}
                                label="High Contrast"
                                description="Enhances visual distinctness"
                            />
                            <A11yToggle
                                active={settings.largeText}
                                onClick={() => toggleSetting('largeText')}
                                icon={<Maximize className="w-4 h-4" />}
                                label="Large Text"
                                description="Increases base typography scale"
                            />
                            <A11yToggle
                                active={settings.dyslexiaFont}
                                onClick={() => toggleSetting('dyslexiaFont')}
                                icon={<Type className="w-4 h-4" />}
                                label="Dyslexia Font"
                                description="Switches to highly legible typeface"
                            />
                            <A11yToggle
                                active={settings.readingMask}
                                onClick={() => toggleSetting('readingMask')}
                                icon={<AlignJustify className="w-4 h-4" />}
                                label="Cognitive Focus"
                                description="Isolates visual reading area"
                            />
                            <A11yToggle
                                active={settings.highlightLinks}
                                onClick={() => toggleSetting('highlightLinks')}
                                icon={<LinkIcon className="w-4 h-4" />}
                                label="Highlight Links"
                                description="Underlines actionable UI elements"
                            />
                            <A11yToggle
                                active={settings.pauseAnimations}
                                onClick={() => toggleSetting('pauseAnimations')}
                                icon={<PauseCircle className="w-4 h-4" />}
                                label="Pause Animations"
                                description="Freezes all motion states"
                            />
                        </div>
                    </div>
                )}

                {/* Aura Interactive Floating Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 border overflow-hidden group shadow-[0_0_20px_rgba(59,130,246,0.3)] ${isOpen ? 'bg-blue-600 border-blue-400 text-white shadow-[0_0_30px_rgba(59,130,246,0.6)] scale-95' : 'bg-slate-900 border-white/20 text-blue-400 shadow-xl hover:border-blue-500/50 hover:bg-slate-800 hover:-translate-y-1'
                        }`}
                    aria-label="Toggle Accessibility Menu"
                    aria-expanded={isOpen}
                >
                    <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {isOpen ? <X className="w-6 h-6 relative z-10" /> : <Accessibility className="w-6 h-6 relative z-10 transition-transform group-hover:scale-110" />}
                </button>
            </div>
        </>
    );
};

const A11yToggle = ({ active, onClick, icon, label, description }) => {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all duration-300 group text-left ${active
                ? 'bg-blue-500/10 border-blue-500/40'
                : 'bg-white/5 border-transparent hover:bg-white/10'
                }`}
            aria-pressed={active}
        >
            <div className="flex gap-3">
                <div className={`mt-0.5 transition-colors ${active ? 'text-blue-400' : 'text-slate-400 group-hover:text-blue-300'}`}>
                    {icon}
                </div>
                <div>
                    <span className={`block text-sm font-bold tracking-wide transition-colors ${active ? 'text-blue-100' : 'text-slate-200'}`}>
                        {label}
                    </span>
                    <span className="block text-[10px] text-slate-500 mt-0.5 leading-tight">
                        {description}
                    </span>
                </div>
            </div>
            
            {/* iOS Style Custom Toggle Switch */}
            <div className={`w-9 h-5 rounded-full transition-colors relative flex-shrink-0 ${active ? 'bg-blue-500' : 'bg-slate-700/50 border border-slate-600'}`}>
                <div className={`absolute top-[2px] left-[2px] w-4 h-4 bg-white rounded-full transition-transform shadow-sm ${active ? 'translate-x-4' : 'translate-x-0'}`} />
            </div>
        </button>
    );
};

export default A11yWidget;
