import React, { useState } from 'react';
import { Share2, Check, Copy } from 'lucide-react';

export default function NativeShareWidget({ title, text, url }) {
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        const shareUrl = url || window.location.href;
        const shareTitle = title || document.title;
        const shareText = text || 'Check out this clinical protocol from the Humanos Foundation.';

        if (navigator.share) {
            try {
                await navigator.share({
                    title: shareTitle,
                    text: shareText,
                    url: shareUrl,
                });
            } catch (error) {
                // Determine if it was just an AbortError (user closed the share sheet)
                if (error.name !== 'AbortError') {
                    console.error('Error sharing natively', error);
                    fallbackCopy(shareUrl);
                }
            }
        } else {
            fallbackCopy(shareUrl);
        }
    };

    const fallbackCopy = (shareUrl) => {
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        } else {
            // Very old fallback
            alert(`Link to share: ${shareUrl}`);
        }
    };

    return (
        <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/30 text-white/70 hover:text-cyan-400 font-medium text-sm rounded-xl transition-all duration-300"
            title="Share this page"
        >
            {copied ? (
                <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied Link</span>
                </>
            ) : (
                <>
                    {navigator.share ? <Share2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{navigator.share ? 'Share Article' : 'Copy Link'}</span>
                </>
            )}
        </button>
    );
}
