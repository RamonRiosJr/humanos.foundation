import React, { useState, useEffect } from 'react';
import { Share2 } from 'lucide-react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

const XIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
);

const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
);

export default function HighlightShare() {
    const [selection, setSelection] = useState({ text: '', x: 0, y: 0, show: false });

    useEffect(() => {
        const handleSelection = () => {
            const currentSelection = window.getSelection();
            if (!currentSelection || currentSelection.isCollapsed) {
                if (selection.show) setSelection(prev => ({ ...prev, show: false }));
                return;
            }

            const text = currentSelection.toString().trim();
            if (text.length < 5) {
                if (selection.show) setSelection(prev => ({ ...prev, show: false }));
                return;
            }

            try {
                const range = currentSelection.getRangeAt(0);
                const rect = range.getBoundingClientRect();

                // Only show if the selection is reasonably wide
                if (rect.width > 20 && rect.top > 0) {
                    setSelection({
                        text,
                        x: rect.left + rect.width / 2,
                        y: rect.top - 12, // slightly above the text
                        show: true
                    });
                }
            } catch {
                // Ignore Safari ghost window.getSelection() errors on empty documents
            }
        };

        const onMouseUp = () => {
            // Slight delay to ensure selection bounds are painted
            setTimeout(handleSelection, 50);
        };
        
        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('touchend', onMouseUp);

        const onScroll = () => {
             if (window.getSelection() && !window.getSelection().isCollapsed) {
                 handleSelection();
             } else {
                 setSelection(prev => ({ ...prev, show: false }));
             }
        };
        document.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('touchend', onMouseUp);
            document.removeEventListener('scroll', onScroll);
        };
    }, [selection.show]);

    if (!selection.show) return null;

    const currentUrl = window.location.href;
    const shareText = `"${selection.text}" — Humanos Foundation`;

    const handleShare = (platform) => {
        const encodedText = encodeURIComponent(shareText);
        const encodedUrl = encodeURIComponent(currentUrl);
        let url = '';

        switch (platform) {
            case 'twitter':
                url = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
                break;
            case 'linkedin':
                url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
                break;
            case 'facebook':
                url = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
                break;
            case 'native':
                if (navigator.share) {
                    navigator.share({
                        title: 'Humanos Foundation',
                        text: shareText,
                        url: currentUrl
                    }).catch(() => {
                        /* Ignore AbortError when user cancels native sheet */
                    });
                } else {
                    navigator.clipboard.writeText(`${shareText}\n${currentUrl}`);
                    alert('Copied link and quote to clipboard!');
                }
                return;
        }

        if (url) {
            window.open(url, '_blank', 'width=600,height=500,scrollbars=no,resizable=no');
        }
        
        // Hide tooltip after share attempt
        setSelection(prev => ({ ...prev, show: false }));
        window.getSelection()?.removeAllRanges();
    };

    return createPortal(
        <AnimatePresence>
            {selection.show && (
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="fixed z-[9999] bg-obsidian-light/95 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.7)] shadow-cyan-900/20 rounded-xl p-1.5 flex items-center gap-1"
                    style={{
                        left: `${selection.x}px`,
                        top: `${selection.y}px`,
                        transform: `translate(-50%, -100%)`,
                    }}
                >
                    <button onClick={() => handleShare('twitter')} className="p-2.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors" title="Share quote on X">
                        <XIcon />
                    </button>
                    <button onClick={() => handleShare('linkedin')} className="p-2.5 rounded-lg text-white/70 hover:text-[#0a66c2] hover:bg-[#0a66c2]/10 transition-colors" title="Share quote on LinkedIn">
                        <LinkedInIcon />
                    </button>
                    <button onClick={() => handleShare('facebook')} className="p-2.5 rounded-lg text-white/70 hover:text-[#1877f2] hover:bg-[#1877f2]/10 transition-colors" title="Share quote on Facebook">
                        <FacebookIcon />
                    </button>
                    <div className="w-[1px] h-6 bg-white/10 mx-1"></div>
                    <button onClick={() => handleShare('native')} className="p-2 border border-cyan-500/30 bg-cyan-500/10 rounded-lg text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/20 transition-all flex items-center justify-center" title="More share options">
                        <Share2 className="w-4 h-4" />
                    </button>

                    {/* Triangle pointer bottom */}
                    <div className="absolute -bottom-[8px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white/10"></div>
                    <div className="absolute -bottom-[7px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-obsidian-light/95"></div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}
