import React from 'react';

export default function SectionDivider() {
    return (
        <div className="flex items-center gap-4 py-2 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
            <div className="w-1 h-1 rounded-full bg-cyan-500/30" />
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
        </div>
    );
}