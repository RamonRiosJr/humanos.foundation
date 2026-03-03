import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../ThemeProvider';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="relative inline-flex items-center justify-center p-2 rounded-xl glass border border-foreground/[0.04] text-foreground/70 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300"
            aria-label="Toggle theme"
        >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </button>
    );
}
