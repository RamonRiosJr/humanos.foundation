---
description: audit-ui-ux-architecture: Activates the Ruthless UI/UX Sentinel to audit React components, Tailwind aesthetics, and enterprise interaction design.
---

# UI/UX Architecture Auditor

**Objective:** Ensure the React codebase and Tailwind UI never look amateurish, "ridiculous," or desperate. Maintain a premium, inspiring, and structurally robust aesthetic.

## 1. Aesthetic Purity Check
Review the target interface or component:
- **Contrast & Geometry:** Is the dark mode (`bg-obsidian`, `border-white/10`) physically anchoring the UI correctly? Are gradients (`cyan-500` to `blue-500`) smooth rather than jarring?
- **Desperation UI:** Are there huge, flashing buttons, native washed-out dropdowns, or broken overlapping elements? If so, rip them out and replace them with `glass` or `glass-strong` premium Tailwind architectures.

## 2. Component Stability
- **Responsive Overflow:** Do `sticky` navigations collide with `fixed` elements? Review the mobile breakpoint logic (`md:`, `lg:`).
- **Graceful Degradation:** If a network request fails (e.g., Odoo contact form), does the UI break, or does it show a graceful `lucide-react` loading animation and degrade silently?

## 3. Community Inspiration
- The UI must feel like a $3.0M enterprise-grade platform. It should inspire a CTO or a patient that they are looking at the future of Zero-Knowledge data sovereignty. 

**Execution:** Identify the component, rip out bad generic styling, and inject strict, clean, `framer-motion` backed enterprise components.
