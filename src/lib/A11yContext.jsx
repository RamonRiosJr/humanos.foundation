import React, { createContext, useContext, useEffect, useState } from 'react';

const A11yContext = createContext(null);

export const useA11y = () => useContext(A11yContext);

export const A11yProvider = ({ children }) => {
    const [settings, setSettings] = useState(() => {
        const saved = localStorage.getItem('humanos_a11y');
        return saved ? JSON.parse(saved) : {
            highContrast: false,
            largeText: false,
            dyslexiaFont: false,
            highlightLinks: false,
            pauseAnimations: false,
        };
    });

    useEffect(() => {
        localStorage.setItem('humanos_a11y', JSON.stringify(settings));

        const html = document.documentElement;

        // High Contrast
        if (settings.highContrast) html.classList.add('a11y-high-contrast');
        else html.classList.remove('a11y-high-contrast');

        // Large Text
        if (settings.largeText) html.classList.add('a11y-large-text');
        else html.classList.remove('a11y-large-text');

        // Dyslexia Font
        if (settings.dyslexiaFont) html.classList.add('a11y-dyslexia');
        else html.classList.remove('a11y-dyslexia');

        // Highlight Links
        if (settings.highlightLinks) html.classList.add('a11y-highlight-links');
        else html.classList.remove('a11y-highlight-links');

        // Pause Animations
        if (settings.pauseAnimations) html.classList.add('a11y-pause-animations');
        else html.classList.remove('a11y-pause-animations');

    }, [settings]);

    const toggleSetting = (key) => {
        setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <A11yContext.Provider value={{ settings, toggleSetting }}>
            {children}
        </A11yContext.Provider>
    );
};
