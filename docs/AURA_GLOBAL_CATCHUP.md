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

## 🛠️ Repository 1: odoo_rest_api_coquicloud / aura-health-os (Core App & API)

**Last Synced:** 2026-03-24

- _Recent Changes:_
  - Pushed local changes in `odoo_rest_api_coquicloud` to remote and merged into the main branch.
  - Standardized file headers across the REST API project with updated LGPL v3 licensing, Coqui Cloud branding, and website links.
  - Overhauled `ClinicalHandshakeScreen.tsx` with CSS Multi-Column Masonry layout and patched data loss arrays.
- _Pending Tasks:_
  - Implement Provider Terminal FHIR ingestion.
  - Setup SOC2 infrastructure.
  - Actually map the 35+ English strings in Clinical Handshake to `es.json`.

## 📚 Repository 2: aura_hos_docs (Architecture & Strategy)

**Last Synced:** 2026-03-24

- _Recent Changes:_
  - Decoupled from the Base44 database backend for documentation reading.
  - Reprogrammed application to serve documentation directly from local markdown via Vite's static file importing instead of remote calls.
- _Pending Tasks:_
  - Finalize all Phase 7 Enterprise Trust Strategy documents and push to `main`.
  - Pursue formal FDA SaMD Regulatory Counsel Opinion.

## 🏥 Repository 3: humanos.foundation (Non-Profit Site)

**Last Synced:** 2026-03-24

- _Recent Changes:_
  - Fixed Web3Forms email delivery by replacing JS `fetch` with native HTML form submissions for Contact/Join forms to bypass Cloudflare and CSP.
  - Standardized the Health Profile UI with a compact, dark-mode compliant aesthetic.
  - Migrated the local `TODO.md` backlog into a formal GitHub Issues project board.
  - Integrated `aura_hos_docs` as a Git submodule directly into the site for static documentation generation.
- _Pending Tasks:_
  - Publish public directory of validated "Clinic IDs" for the B2B SaaS routing.
  - Remove any remaining deprecated Base44 SDK code blocks.

## 🤖 Repository 4: AurahOS_Docs_Portal_&_Tech_Support_AuraBot

**Last Synced:** 2026-03-24

- _Recent Changes:_
  - Transitioned the primary docs engine to the local static Vite implementation within `humanos.foundation`.
- _Pending Tasks:_
  - Establish connection to Odoo instance.
  - Ingest `aura_hos_docs` markdown.

---

## 🔄 The "Global Catchup" Protocol

When the Architect types `/global-catchup`:

1. The AI will ask the Architect: "What did we accomplish today across the 4 repositories?"
2. The AI will explicitly overwrite the _Recent Changes_ in the respective sections above with the newest timestamp and bullet points. Old changes can be moved to a `HISTORY.md` file if necessary.
3. The AI will run a terminal script to physically copy this exact `AURA_GLOBAL_CATCHUP.md` file from its current location to the root `docs/` folders of all 4 repository paths on the local machine to ensure 100% ecosystem synchronization.
