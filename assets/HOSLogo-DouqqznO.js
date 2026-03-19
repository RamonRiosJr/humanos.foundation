import{j as e,L as p,a as m}from"./index-DNqNCZ19.js";function g({size:o=36,variant:n="full",className:d="",asLink:c=!0,wordmarkSize:f="sm"}){const a={xs:{name:"text-sm",sub:"text-[9px]"},sm:{name:"text-base",sub:"text-[10px]"},md:{name:"text-xl",sub:"text-[11px]"},lg:{name:"text-3xl",sub:"text-xs"},xl:{name:"text-4xl",sub:"text-sm"}},l=a[f]||a.sm,x=e.jsxs("svg",{width:o,height:o,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"flex-shrink-0 transition-transform duration-500 group-hover:scale-110 drop-shadow-none group-hover:drop-shadow-[0_0_25px_rgba(34,211,238,0.6)]","aria-label":"hOS — Human Operating System",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"hOS-grad-a",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#22d3ee"}),e.jsx("stop",{offset:"100%",stopColor:"#3b82f6"})]}),e.jsxs("linearGradient",{id:"hOS-grad-b",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#06b6d4",stopOpacity:"0.3"}),e.jsx("stop",{offset:"100%",stopColor:"#2563eb",stopOpacity:"0.15"})]}),e.jsxs("filter",{id:"hOS-glow",children:[e.jsx("feGaussianBlur",{stdDeviation:"1.5",result:"coloredBlur"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"coloredBlur"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),e.jsx("style",{children:`
                    @keyframes color-cycle {
                        0% { fill: #fca5a5; opacity: 1; transform: scale(1.3); }
                        16% { fill: #93c5fd; opacity: 1; transform: scale(1.1); }
                        33% { fill: #86efac; opacity: 1; transform: scale(1.1); }
                        50% { fill: #fde047; opacity: 1; transform: scale(1.1); }
                        66% { fill: #d8b4fe; opacity: 1; transform: scale(1.1); }
                        83% { fill: #fdba74; opacity: 1; transform: scale(1.1); }
                        100% { fill: #fca5a5; opacity: 1; transform: scale(1.3); }
                    }
                    
                    .node-dot {
                        fill: url(#hOS-grad-a);
                        opacity: 0.7;
                        transition: all 0.5s ease-in-out;
                    }
                    
                    .group:hover .node-dot {
                        animation: color-cycle 4s infinite ease-in-out;
                    }
                    .group:hover .node-dot-1 { animation-delay: 0.6s; }
                    .group:hover .node-dot-2 { animation-delay: 1.2s; }
                    .group:hover .node-dot-3 { animation-delay: 1.8s; }
                    .group:hover .node-dot-4 { animation-delay: 2.4s; }
                    .group:hover .node-dot-5 { animation-delay: 3.0s; }
                    
                    .hos-text {
                        transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
                    }
                    .group:hover .hos-text {
                        fill: #ffffff;
                        filter: drop-shadow(0 0 4px #ffffff) drop-shadow(0 0 12px #22d3ee);
                        transform: scale(1.05);
                        transform-origin: center;
                    }
                `}),e.jsx("path",{d:"M24 3 L41 13 L41 35 L24 45 L7 35 L7 13 Z",fill:"url(#hOS-grad-b)",stroke:"url(#hOS-grad-a)",strokeWidth:"1.2",strokeLinejoin:"round",filter:"url(#hOS-glow)"}),e.jsx("path",{d:"M24 10 L34 16 L34 32 L24 38 L14 32 L14 16 Z",fill:"none",stroke:"url(#hOS-grad-a)",strokeWidth:"0.6",strokeLinejoin:"round",opacity:"0.35"}),[[24,10],[34,16],[34,32],[24,38],[14,32],[14,16]].map(([t,s],r)=>e.jsx("circle",{cx:t,cy:s,r:"1.4",className:`node-dot node-dot-${r}`,style:{transformOrigin:`${t}px ${s}px`}},r)),e.jsx("circle",{cx:"24",cy:"24",r:"2.2",fill:"url(#hOS-grad-a)",filter:"url(#hOS-glow)"}),e.jsx("circle",{cx:"24",cy:"24",r:"4.5",fill:"none",stroke:"url(#hOS-grad-a)",strokeWidth:"0.6",opacity:"0.4"}),[[24,10],[34,32],[14,32]].map(([t,s],r)=>e.jsx("line",{x1:"24",y1:"24",x2:t,y2:s,stroke:"url(#hOS-grad-a)",strokeWidth:"0.5",opacity:"0.25"},r)),e.jsx("text",{x:"24",y:"26.5",textAnchor:"middle",fontSize:"8.5",fontWeight:"700",fontFamily:"'Outfit', 'Inter', sans-serif",letterSpacing:"-0.3",fill:"url(#hOS-grad-a)",filter:"url(#hOS-glow)",className:"hos-text",children:"hOS"})]}),h=n==="full"&&e.jsxs("div",{className:"flex flex-col leading-none gap-0.5",children:[e.jsx("span",{className:`font-bold text-white tracking-tight leading-none ${l.name}`,style:{fontFamily:"Outfit, Inter, sans-serif",letterSpacing:"-0.03em"},children:"hOS"}),e.jsx("span",{className:`text-white/30 font-medium tracking-[0.15em] uppercase leading-none ${l.sub}`,style:{fontFamily:"Outfit, Inter, sans-serif"},children:"Human Operating System"})]}),i=e.jsxs("div",{className:`flex items-center gap-3 group cursor-pointer ${d}`,children:[e.jsxs("div",{className:"relative flex-shrink-0",children:[x,e.jsx("div",{className:"absolute inset-0 rounded-full bg-cyan-500/0 group-hover:bg-cyan-500/20 blur-[20px] transition-all duration-500 -z-10"})]}),h]});return c?e.jsx(p,{to:m("Home"),className:"flex items-center","aria-label":"hOS — Home",children:i}):i}export{g as H};
