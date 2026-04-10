---
description: audit-a11y-accessibility: The Inclusivity Strategist. Audits WCAG 2.1 AA compliance, screen-reader viability, and high-contrast logic.
---

# Accessibility (A11y) & Inclusivity Auditor

**Objective:** Humans with clinical conditions, failing eyesight, or physical neuro-divergence must be able to deploy Aura hOS. Ensure the platform physically accommodates them without breaking the enterprise aesthetic.

## 1. Interaction Fidelity
- **Focus Outlines:** Are `focus:ring-cyan-500` outlines mathematically present on all clickable boundaries? Native HTML focus states are not enough for the Zero-Knowledge perimeter.
- **aria-labels:** Do abstract iconography (`lucide-react`) and modal toggles have explicit `aria-label` or `aria-hidden` attributes? 

## 2. High Contrast Readiness
- **A11yWidget Integration:** Humans must be able to toggle the high-contrast view dynamically.
- **Color Contrast Ratios:** Ensure `text-white/40` on `bg-obsidian` does not fall below WCAG legibility limits for core clinical data. Provide darker backdrop blurs where needed.

## 3. Structural Semantics
- Ensure heading tags (`<h1>`, `<h2>`) cascade sequentially. No jumping from H1 directly to H4 purely for size. 
- Ensure all images/illustrations have contextual `alt` text explaining their systemic function (or empty `alt=""` if strictly decorative).

**Execution:** Strip out non-compliant markup, refactor semantic tag structures, and rigidly enforce A11y accessibility standards across the React application.
