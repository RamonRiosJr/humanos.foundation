import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const NODE_COUNT = 28;
const EDGE_COUNT = 40;

function generateNodes(count) {
    const nodes = [];
    for (let i = 0; i < count; i++) {
        nodes.push({
            id: i,
            cx: 5 + Math.random() * 90,
            cy: 5 + Math.random() * 90,
            r: 1.5 + Math.random() * 2.5,
            delay: Math.random() * 4,
            duration: 2 + Math.random() * 3,
        });
    }
    return nodes;
}

function generateEdges(nodes, count) {
    const edges = [];
    const used = new Set();
    for (let i = 0; i < count; i++) {
        let a, b;
        do {
            a = Math.floor(Math.random() * nodes.length);
            b = Math.floor(Math.random() * nodes.length);
        } while (a === b || used.has(`${a}-${b}`));
        used.add(`${a}-${b}`);
        used.add(`${b}-${a}`);
        edges.push({
            x1: nodes[a].cx,
            y1: nodes[a].cy,
            x2: nodes[b].cx,
            y2: nodes[b].cy,
            delay: Math.random() * 5,
            duration: 3 + Math.random() * 4,
        });
    }
    return edges;
}

export default function NeuralMap() {
    const nodes = useMemo(() => generateNodes(NODE_COUNT), []);
    const edges = useMemo(() => generateEdges(nodes, EDGE_COUNT), []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg
                viewBox="0 0 100 100"
                className="w-full h-full opacity-40"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#00d4ff" stopOpacity="1" />
                        <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
                    </radialGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="0.5" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {edges.map((edge, i) => (
                    <motion.line
                        key={`edge-${i}`}
                        x1={edge.x1}
                        y1={edge.y1}
                        x2={edge.x2}
                        y2={edge.y2}
                        stroke="#00d4ff"
                        strokeWidth="0.15"
                        initial={{ opacity: 0.05 }}
                        animate={{ opacity: [0.05, 0.25, 0.05] }}
                        transition={{
                            duration: edge.duration,
                            delay: edge.delay,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                ))}

                {nodes.map((node) => (
                    <motion.circle
                        key={`node-${node.id}`}
                        cx={node.cx}
                        cy={node.cy}
                        r={node.r}
                        fill="url(#nodeGlow)"
                        filter="url(#glow)"
                        initial={{ opacity: 0.2, scale: 0.8 }}
                        animate={{
                            opacity: [0.2, 0.8, 0.2],
                            scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                            duration: node.duration,
                            delay: node.delay,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </svg>

            {/* Radial gradient overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        'radial-gradient(ellipse at center, transparent 30%, #0a0a0f 75%)',
                }}
            />
        </div>
    );
}
