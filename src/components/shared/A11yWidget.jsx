import React, { useState } from 'react';
import { useA11y } from '@/lib/A11yContext';
import { Accessibility, Eye, Maximize, Type, Link as LinkIcon, PauseCircle, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const A11yWidget = () => {
    const { settings, toggleSetting } = useA11y();
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="fixed bottom-6 left-6 z-[60] transition-all duration-300">
            {isOpen && (
                <div className="absolute bottom-16 left-0 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl w-72 sm:w-80 p-4 shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <div className="flex items-center gap-2">
                            <Accessibility className="w-5 h-5 text-blue-400" />
                            <h3 className="font-semibold text-white">{t('a11y.title')}</h3>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors" aria-label={t('a11y.close')}>
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <p className="text-xs text-slate-400 mb-1 font-mono">{t('a11y.engine_active')}</p>

                    <div className="space-y-1.5">
                        <A11yToggle
                            active={settings.highContrast}
                            onClick={() => toggleSetting('highContrast')}
                            icon={<Eye className="w-4 h-4" />}
                            label={t('a11y.high_contrast')}
                        />
                        <A11yToggle
                            active={settings.largeText}
                            onClick={() => toggleSetting('largeText')}
                            icon={<Maximize className="w-4 h-4" />}
                            label={t('a11y.large_text')}
                        />
                        <A11yToggle
                            active={settings.dyslexiaFont}
                            onClick={() => toggleSetting('dyslexiaFont')}
                            icon={<Type className="w-4 h-4" />}
                            label={t('a11y.dyslexia_font')}
                        />
                        <A11yToggle
                            active={settings.highlightLinks}
                            onClick={() => toggleSetting('highlightLinks')}
                            icon={<LinkIcon className="w-4 h-4" />}
                            label={t('a11y.highlight_links')}
                        />
                        <A11yToggle
                            active={settings.pauseAnimations}
                            onClick={() => toggleSetting('pauseAnimations')}
                            icon={<PauseCircle className="w-4 h-4" />}
                            label={t('a11y.pause_animations')}
                        />
                    </div>

                    {/* Language Selector */}
                    <div className="pt-3 border-t border-white/10">
                        <div className="flex items-center gap-2 mb-2">
                            <Globe className="w-4 h-4 text-blue-400" />
                            <span className="text-xs font-semibold text-white uppercase tracking-wider">{t('a11y.language')}</span>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => changeLanguage('en')}
                                className={`flex-1 py-1 px-2 rounded text-xs font-medium border transition-all ${i18n.language.startsWith('en') ? 'bg-blue-600 border-blue-500 text-white' : 'bg-transparent border-white/10 text-slate-400 hover:border-white/30'}`}
                            >
                                English
                            </button>
                            <button
                                onClick={() => changeLanguage('es')}
                                className={`flex-1 py-1 px-2 rounded text-xs font-medium border transition-all ${i18n.language.startsWith('es') ? 'bg-blue-600 border-blue-500 text-white' : 'bg-transparent border-white/10 text-slate-400 hover:border-white/30'}`}
                            >
                                Español
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Blue Animated Halo & Fog - pointer-events-none to prevent blocking clicks */}
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-30 animate-halo-pulse pointer-events-none"></div>
            <div className="absolute -inset-2 bg-blue-400/20 rounded-full blur-xl animate-fog-drift pointer-events-none"></div>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-[60px] h-[60px] rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.5)] ${isOpen ? 'bg-blue-600 text-white scale-90' : 'bg-slate-800 text-blue-400 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-700 hover:scale-110'
                    }`}
                aria-label="Toggle Accessibility Menu"
                aria-expanded={isOpen}
            >
                {isOpen ? <X className="w-7 h-7" /> : <Accessibility className="w-7 h-7" />}
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
