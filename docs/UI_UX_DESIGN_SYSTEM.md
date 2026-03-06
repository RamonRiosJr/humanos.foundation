# Humanos Foundation UI/UX Design System & Architectural Guidelines

This document serves as the comprehensive and up-to-date reference for the visual language, component architecture, and interaction design of the Humanos Foundation web platform.

## 1. Core Visual Language

The platform aggressively employs a dark, brutalist-yet-ethereal aesthetic (referred to as "Obsidian Glassmorphism"). This visually differentiates the movement from traditional, sterile, and assembly-line medical software.

### Primary Values & Palettes

* **Background:** Deep Obsidian (`bg-obsidian`) / Radial and Linear gradients moving from `#080810` to complete black (`#000000`).
* **Primary Brand Colors:** Bright Cyan (`text-cyan-400` / `#22d3ee`) and Deep Blue (`text-blue-500`).
* **Action Elements:**
  * Primary CTA Buttons use a specific gradient and glow:
        `bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-white shadow-[0_0_20px_rgba(34,211,238,0.2)]`
  * Hover states intensify the glow: `hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]`
* **The "Narrative Flip" (hOS Light):**
    To contrast against the dark background of the broken medical system ("The Status Quo"), the solution state ("The hOS Light") utilizes brilliant, saturated elements.
  * *Warning:* Due to the aggressive CSS variable overriding within the Sovereign Accessibility Engine (Light Mode toggle), pure Tailwind utilities like `text-white` can be overridden to `#000` against dark backgrounds. Use explicit hex overrides (`text-[#ffffff]`) in high-contrast "Light" boxes that sit on a dark page background to bypass the top-level theme toggle.

### Motion & Micro-interactions

* **Library:** `framer-motion` is the standard.
* **Scroll Reveals:** `useInView` is used to progressively reveal content (`opacity: 0, y: 30` -> `opacity: 1, y: 0`) avoiding overwhelming the user.
* **Heartbeat / Pulse Effects:** Key icons (like the Four Laws or Origin Values) feature continuous, soothing micro-animations matching a steady 72bpm heartbeat rhythm or respiratory rate.
    `animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.5, repeat: Infinity }}`
* **Dynamic Waveforms:** Used in the `HeroDashboard`, replacing generic medical heartbeat lines with a dynamic 48-bar array that simulates a live, processing data vault.

---

## 2. Accessibility (a11y) & Layout Mechanics

### The Sovereign Accessibility Widget

* Located in the bottom corner (`A11yWidget.jsx`), it empowers users to radically alter the UI (High Contrast, Dyslexia Font, Large Text, Animation Pause).
* *Layout Consideration:* Elements in the `Footer.jsx` must be explicitly centered or padded (`justify-center gap-10 lg:gap-32` instead of `justify-between`) to avoid overlapping the fixed `A11yWidget` button on mobile and desktop viewports.

### Navbar & Hero Conflict Resolution

* The `Navbar.jsx` is perfectly `fixed z-50`.
* The `HeroSection.jsx` and `PageHero.jsx` elements must explicitly account for this overlay by padding the top element significantly (`pt-32 md:pt-40 lg:pt-48 pb-20`), ensuring badges like "THE HUMAN OPERATING SYSTEM" do not clip into the glassmorphism navbar upon page load.
* Flex columns centering must use `flex-1 flex col justify-center items-center w-full` to center absolute width items properly horizontally without triggering left-alignment on window resizes.

---

## 3. Notable Component Implementations

### Tab Interfaces (`Manifestos.jsx`)

* Active states use the global CTA gradient fill, bright cyan text, and custom cyan SVGs.
* Inactive states fall back to `text-white/40 hover:text-white/60`.

### Data Visualizations (`HeroDashboard.jsx` & `HomeStats.jsx`)

* Background noise masks and large, sweeping linear gradients are used behind statistics to break up the "blocky" feeling.
* *Stats Component:* Utilizes a slow, background `HeartbeatStream` graphic explicitly layered behind the cards.
* *Hero Component:* Utilizes rapid, multi-height blue bars to convey 'real-time data streams'.

### Call-to-Action Density

* The "Support the movement" buttons (BuyMeACoffee) are injected as secondary CTAs near primary Join buttons. They use Yellow / Amber coloring to distinctly separate them from the primary Cyan ecosystem. (`border-yellow-500/20 text-yellow-400`).

---

## 4. Maintenance / Contribution Checklist

If amending or building new components for the Foundation:

1. Verify mobile padding / Z-index issues against `Navbar.jsx` and `A11yWidget.jsx`.
2. Do not use standard Tailwind `text-white` inside complex `.group` hover states if the section background is permanently configured to dark (Obsidian) mode; it will break when a user clicks the Light Mode toggle. Use `text-[#ffffff]`.
3. Ensure Framer Motion variants have standard `.transition({ duration: 0.6, delay: X })` to avoid jarring load-ins.
4. Icons should be imported directly from `lucide-react`.
