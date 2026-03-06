import React from 'react';
import { motion } from 'framer-motion';

export default function HeartbeatStream({ color = '#22d3ee', className = '', duration = 4, segmentLength = 100 }) {
    // Generate a long, continuous EKG-style path
    const createSegment = (startX) => {
        return `L ${startX + 10} 50 L ${startX + 15} 40 L ${startX + 20} 50 L ${startX + 35} 50 L ${startX + 40} 10 L ${startX + 45} 90 L ${startX + 50} 50 L ${startX + 60} 50 L ${startX + 65} 45 L ${startX + 70} 50 L ${startX + segmentLength} 50`;
    };

    const segments = 4;
    let path = "M 0 50 ";
    for (let i = 0; i < segments; i++) {
        path += createSegment(i * segmentLength) + " ";
    }
    const totalWidth = segments * segmentLength;

    return (
        <div className={`relative w-full h-12 md:h-16 overflow-hidden flex items-center ${className}`}>
            <svg
                viewBox={`0 0 ${totalWidth} 100`}
                preserveAspectRatio="none"
                className="w-full h-full"
            >
                {/* Dim background line */}
                <path
                    d={path}
                    fill="none"
                    stroke={color}
                    strokeWidth="1"
                    strokeOpacity="0.15"
                    vectorEffect="non-scaling-stroke"
                />

                {/* Glowing animated line (the "heartbeat" tracer) */}
                <motion.path
                    d={path}
                    fill="none"
                    stroke={color}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                    initial={{ pathOffset: 0, pathLength: 0.15 }}
                    animate={{ pathOffset: [0, -1] }} // Negative offset maps the trace left-to-right
                    transition={{
                        duration: duration,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        filter: `drop-shadow(0 0 8px ${color})`
                    }}
                />
            </svg>
        </div>
    );
}
