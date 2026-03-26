# 🌍 AURA GLOBAL ECOSYSTEM CATCH-UP

> **Core Directive:** This is the master synchronization file for the entire Aura ecosystem. This project spans 4 distinct repositories and 2 Odoo instances. AI assistants must read this file to understand the _global state_ of the project across all endpoints before making architectural changes.
>
> **How to use this file:** When the Architect says "execute global catchup" or `/global-catchup`, log the latest session changes under the corresponding repo section with a timestamp.

## 🏛️ Ecosystem Overview

The Aura ecosystem consists of 4 distinct codebases working in synergy. Changes in one repo often dictate architecture in another.

1. **aura-health-os**: The core patient-facing Capacitor/React native app and zero-knowledge local-first vault.
2. **aura_hos_docs**: The central documentation repository, business plans, and architectural manifests.
3. **humanos.foundation**: The public-facing non-profit landing page and organizational governance hub.
4. **AurahOS*Docs_Portal*&\_Tech_Support_AuraBot**: The tech support chatbot, documentation parser, and Odoo portal interface.

---

## 🛠️ Repository 1: aura-health-os (Core App)

**Last Synced:** 2026-03-24

- _Recent Changes:_
  - Overhauled `ClinicalHandshakeScreen.tsx` (Clinical Intake Print module) to utilize CSS Multi-Column Masonry layout, eliminating vertical whitespace gaps for optimal clinic print density.
  - Performed 04-Compliance-Audit: Purged dangerous SaaS/ONC IT terminology ("HL7 FHIR Structured Output") from the UI, converting to safe-harbor patient advocacy labels ("Patient-Reported Clinical Intake").
  - Fixed severe data loss where Live Transfer payload arrays (Pharmacies, Meds, Surgery) were hardcoded to `[]` despite user selection.
  - Hardened Zero-Knowledge metadata: Rewrote Transient WebSocket channel IDs to strictly broadcast using SHA-256 hashes of the `clinicId` to patch PHI metadata leaks.
- _Pending Tasks:_
  - Implement Provider Terminal FHIR ingestion.
  - Setup SOC2 infrastructure.
  - Actually map the 35+ English strings in Clinical Handshake to `es.json`.

## 📚 Repository 2: aura_hos_docs (Architecture & Strategy)

**Last Synced:** 2026-03-25

- _Recent Changes:_
  - **[MASSIVE PIVOT]**: Shifted the platform identity from an "Interoperability Tool" to **"Clinical Accessibility Infrastructure"**. This legally and structurally bypasses HIPAA/EHR dependencies and explicitly targets the medically underserved.
  - **The 16-Mode Accessibility Engine**: Overhauled the core Business Plan (`01-Problem-and-Solution.md`, `03-Competitive-Landscape.md`, `05-Go-To-Market-Strategy.md`) to structurally integrate the new **16-mode Cognitive Accessibility Engine** (Dementia Mode, AAC Board, Sensory Filter, Dyslexia Font, etc.). This acts as a massive competitive moat and targets $950K federal health equity grants (PCORI/AHRQ).
  - **C4 Architecture Deep Clean**: Scanned and purged lingering "Fall Detection" / SaMD hardware traps from `ARCHITECTURE-C4-MODEL.md`, replacing it with "Kinetic Event" parameters.
  - **Global Purge Verified**: Validated that all pitch decks, investor collateral, and public markdown (`README.md`, `PERMISSIONS.md`, `ROADMAP.md` etc.) contain ZERO references to "HL7 FHIR" endpoints, securing the FTC HBNR BAA-exemption.
- _Pending Tasks:_
  - Establish connection to the new Next.js Support Portal (RAG).
  - Pursue formal FDA SaMD Regulatory Counsel Opinion.

## 🏥 Repository 3: humanos.foundation (Non-Profit Site)

**Last Synced:** Pending

- _Recent Changes:_
  - Rebranded GoFundMe strategy to ensure brand safety for the "Aura" and "hOS" trademarks.
- _Pending Tasks:_
  - Publish public directory of validated "Clinic IDs" for the B2B SaaS routing.

## 🤖 Repository 4: AurahOS*Docs_Portal*&\_Tech_Support_AuraBot

**Last Synced:** Pending

- _Recent Changes:_
  - Repository recognized as the new front-line documentation portal and tech support operator.
- _Pending Tasks:_
  - Establish connection to Odoo instance.
  - Ingest `aura_hos_docs` markdown.

---

## 🔄 The "Global Catchup" Protocol

When the Architect types `/global-catchup`:

1. The AI will ask the Architect: "What did we accomplish today across the 4 repositories?"
2. The AI will explicitly overwrite the _Recent Changes_ in the respective sections above with the newest timestamp and bullet points. Old changes can be moved to a `HISTORY.md` file if necessary.
3. The AI will run a terminal script to physically copy this exact `AURA_GLOBAL_CATCHUP.md` file from its current location to the root `docs/` folders of all 4 repository paths on the local machine to ensure 100% ecosystem synchronization.
