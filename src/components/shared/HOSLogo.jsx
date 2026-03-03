import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

/**
 * hOS Logo — SVG mark with hexagonal node ring + wordmark
 * size: number (px) — explicit pixel size for the SVG
 * variant: 'full' (icon + wordmark) | 'icon' (icon only)
 * asLink: wrap in <Link> to home
 */
export default function HOSLogo({ size = 36, variant = 'full', className = '', asLink = true, wordmarkSize = 'sm' }) {
    const wordmarkClasses = {
        xs: { name: 'text-sm', sub: 'text-[9px]' },
        sm: { name: 'text-base', sub: 'text-[10px]' },
        md: { name: 'text-xl', sub: 'text-[11px]' },
        lg: { name: 'text-3xl', sub: 'text-xs' },
        xl: { name: 'text-4xl', sub: 'text-sm' },
    };
    const wc = wordmarkClasses[wordmarkSize] || wordmarkClasses.sm;

    const mark = (
        <svg
            width={size}
            height={size}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
            aria-label="hOS — Human Operating System"
        >
            <defs>
                <linearGradient id="hOS-grad-a" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                <linearGradient id="hOS-grad-b" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0.15" />
                </linearGradient>
                <filter id="hOS-glow">
                    <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Outer hexagon */}
            <path
                d="M24 3 L41 13 L41 35 L24 45 L7 35 L7 13 Z"
                fill="url(#hOS-grad-b)"
                stroke="url(#hOS-grad-a)"
                strokeWidth="1.2"
                strokeLinejoin="round"
                filter="url(#hOS-glow)"
            />

            {/* Inner hex ring */}
            <path
                d="M24 10 L34 16 L34 32 L24 38 L14 32 L14 16 Z"
                fill="none"
                stroke="url(#hOS-grad-a)"
                strokeWidth="0.6"
                strokeLinejoin="round"
                opacity="0.35"
            />

            {/* Node dots */}
            {[[24, 10], [34, 16], [34, 32], [24, 38], [14, 32], [14, 16]].map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="1.4" fill="url(#hOS-grad-a)" opacity="0.7" />
            ))}

            {/* Center */}
            <circle cx="24" cy="24" r="2.2" fill="url(#hOS-grad-a)" filter="url(#hOS-glow)" />
            <circle cx="24" cy="24" r="4.5" fill="none" stroke="url(#hOS-grad-a)" strokeWidth="0.6" opacity="0.4" />

            {/* Connector lines */}
            {[[24, 10], [34, 32], [14, 32]].map(([x2, y2], i) => (
                <line key={i} x1="24" y1="24" x2={x2} y2={y2} stroke="url(#hOS-grad-a)" strokeWidth="0.5" opacity="0.25" />
            ))}

            {/* Text */}
            <text
                x="24" y="26.5"
                textAnchor="middle"
                fontSize="8.5"
                fontWeight="700"
                fontFamily="'Outfit', 'Inter', sans-serif"
                letterSpacing="-0.3"
                fill="url(#hOS-grad-a)"
                filter="url(#hOS-glow)"
            >
                hOS
            </text>
        </svg>
    );

    const wordmark = variant === 'full' && (
        <div className="flex flex-col leading-none gap-0.5">
            <span
                className={`font-bold text-foreground tracking-tight leading-none ${wc.name}`}
                style={{ fontFamily: 'Outfit, Inter, sans-serif', letterSpacing: '-0.03em' }}
            >
                hOS
            </span>
            <span
                className={`text-foreground/30 font-medium tracking-[0.15em] uppercase leading-none ${wc.sub}`}
                style={{ fontFamily: 'Outfit, Inter, sans-serif' }}
            >
                Human Operating System
            </span>
        </div>
    );

    const inner = (
        <div className={`flex items-center gap-3 group ${className}`}>
            <div className="relative flex-shrink-0">
                {mark}
                <div className="absolute inset-0 rounded-full bg-cyan-500/0 group-hover:bg-cyan-500/15 blur-xl transition-all duration-500 -z-10" />
            </div>
            {wordmark}
        </div>
    );

    if (!asLink) return inner;

    return (
        <Link to={createPageUrl('Home')} className="flex items-center" aria-label="hOS — Home">
            {inner}
        </Link>
    );
}
