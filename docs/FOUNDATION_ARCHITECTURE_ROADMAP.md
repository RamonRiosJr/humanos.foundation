# Humanos Foundation: Enterprise Architecture & Scaling Roadmap

This document outlines the brutally honest architectural gaps, the strategic paradigm shift for the advocacy site vs. the local-first application, and the master backlog of required features to elevate the foundation's platform to a top-tier global standard.

---

## The Strategic Clarification: "Grab Everything"

Unlike the *Aura hOS* application (which is strictly Local-First, Zero-Knowledge, Patient Sovereign), the *Humanos Foundation* website (`humanos.foundation`) is a Growth Marketing engine.
**The Directive:** The Foundation website is explicitly designed to grab as much behavioral tracking and operational data as possible to build the movement, drive waitlist conversions, and secure funding.

## The Dual-Stack Architecture

The current strategy involves a brilliant decoupling to maximize both UI aesthetics and operational power:

1. **The Frontend (`humanos.foundation`):** Built on Vite (React). This remains an SPA (Single Page Application) heavily optimized for 3D effects, glassmorphism, and dynamic animations. **We emphatically reject migrating to SSR (Next.js) or basic site builders.** Why? Next.js forces rigid server-side execution cycles that can conflict deeply with WebGL (Three.js) and complex client-side animation loops, leading to the "Flash Player" dead-park effect you correctly feared. Vite gives us absolute client-side rendering freedom.
2. **The Headless Backend (`team.humanos.foundation`):** Powered by an Odoo ERP. Odoo will handle the heavy lifting (CRM, waitlist databases, blog authoring, event management, and internal team operations) via REST/XML-RPC APIs, feeding data directly to the spectacular Vite frontend.

---

## Master Feature Backlog & Architectural Gaps

### Phase 1: High-Performance Frontend (The Vite Fixes)

- [ ] **React.lazy() & Code Splitting Implementation:** Currently, the entire app downloads on the first click. We must refactor `App.jsx` and `pages.config.js` to implement Suspense. This fixes the massive initial load time without abandoning Vite.
- [ ] **FSD (Feature-Sliced Design) Rigid Enforcement:** Refactor the bloated UI/pages mapping into strict `src/widgets`, `src/features`, and `src/entities`.
- [ ] **Dynamic Odoo Headless Connection:** Replace the `localStorage` Mock SDK with a powerful TanStack Query data-fetching layer connected to the Odoo ERP API.

### Phase 2: Aggressive Data Capture (The Growth Engine)

- [ ] **Deep Analytics Integration (PostHog / Google Analytics 4):** Deploy aggressive session recording, scroll-depth tracking on cornerstone blogs, and waitlist conversion funnels.
- [ ] **Advanced Frictionless Waitlist (Join Funnel):** Connect the frontend `/Join` form directly to Odoo CRM leads, triggering automated, emotionally resonant drip campaigns.
- [ ] **Event & Volunteer Pipeline Architecture:** Standardize forms to aggressively capture volunteer skills and direct them into segmented Odoo project boards.

### Phase 3: Accessibility & Security Excellence

- [ ] **Strict Content Security Policy (CSP):** Because we are capturing significant data and targeting healthcare institutions, the frontend must be immune to XSS attacks. Implement massive CSP headers and DOM sanitization.
- [ ] **Automated WCAG 2.1 AA Auditing:** Ensure the 3D aesthetic does not violate accessibility laws. All custom UI components must have ARIA enforcement and perfect contrast ratios, ensuring neurodivergent and disabled users can navigate flawlessly.

### Phase 4: The Massive Content Subsystem

- [ ] **Server-Side Pagination & Infinite Scroll:** As the blog scales, fetching all arrays at once will crash the browser. We need robust pagination linked to the Odoo backend.
- [ ] **Relational Taxonomy Filtering:** Implement dynamic tagging ('Neurodiversity', 'Billing System', 'Patient Rights') to ensure long-tail SEO keywords can be instantly searched by users.
- [ ] **Pre-rendered SEO Sitemaps:** To solve the fact that Vite SPAs struggle with SEO indexing, we will use a Vite SSG (Static Site Generation) plugin or a pre-rendering service (like Prerender.io) *specifically for crawler bots*. This gives Google a perfect HTML snapshot while humans get the glorious 3D, animated application.
