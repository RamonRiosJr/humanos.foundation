# 🌍 AURA GLOBAL ECOSYSTEM CATCH-UP

> **Core Directive:** This is the master synchronization file for the entire Aura ecosystem. This project spans 4 distinct repositories and 2 Odoo instances. AI assistants must read this file to understand the _global state_ of the project across all endpoints before making architectural changes.
> 
> **AI RAG Protocol:** Upon spawning, AI agents MUST read `MASTER_INDEX.md` (at the root of this repository) to build an immediate mental map of the entire documentation suite across both Aura and Humanos. If the documentation structure changes, the agent must run `node scripts/generate_rag_index.js` at the repo root.
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

**Last Synced:** 2026-03-27

- _Recent Changes:_
  - **Version 0.8.0-rc.1 Leap:** Elevated the fundamental system versioning off of prototype `0.5.0-beta` to `0.8.0-rc.1`. The Artificial Intelligence architecture has fully matured past conversational chatting into a hard-locked, FDA-compliant Patient Operating System component.
  - **Autonomous AI-to-Vault Logging:** Empowered the `useChat` stream interceptor with regex payload execution (`[ACTION:SAVE_EVENTS_VAULT]`), granting Aura the authority to autonomously transform user-submitted free-text into structurally formatted "Clinical Chart Notes" persisted directly and silently to the `MedicalHistoryContext`.
  - **[MANDATORY PRE-FLIGHT COMPLIANCE CHECK]:** Completely extracted Aura's core LLM instructions from hard-coded TypeScript string literals into an isolated `AURA_SYSTEM_DIRECTIVE.md` template. Injected an explicit "Zero-Trust" rule block mandating Aura to actively audit every user prompt against FTC Deceptive claims, DOJ Emergency Liability scopes, and HIPAA bounds before even generating an analysis frame.
  - **FDA SaMD Anti-Triage Protocol:** Explicitly suppressed Aura's capacity to diagnose or independently route patients to specialists based on their symptoms. Replaced independent triage with an explicit, FDA MDDS administrative directive, securely presenting the patient's existing Care Team context and returning the routing decision entirely to the patient.
  - **Local Resource Grounding (Safe Search):** Programmatically wired the Gemini SDK's real-time Web Search capabilities directly to the patient's localized Intake Form (Zip/City scope). Integrated strict "Safe Grounding" controls allowing spatial retrieval exclusively focused on Healthcare, Clinics, Food Banks, Mental Health, and Legal constraints, completely blocking external/unsafe indexing.
  - **UI/UX 'Clinical 2026' Standardization:** Systemically purged all raw/blinding Tailwind UI structures and implicit english variables out of the `AuraChatScreen.tsx`. Transitioned all hard-edges to FSD-compliant contextual components (`GlassHeader`, Semantically-typed action triggers like `Eraser`), and mapped all interactive UI/UX states directly onto localized `i18next` endpoints and contextual Dark Mode environment variables (`backgroundColor: var(--card-bg)`).
- _Pending Tasks:_
  - Implement Provider Terminal FHIR ingestion.
  - Setup SOC2 infrastructure.

## 📚 Repository 2: aura_hos_docs (Architecture & Strategy)

**Last Synced:** 2026-03-26

- _Recent Changes:_
  - **[B2B HARDWARE PIVOT]**: Aura is explicitly expanding beyond software into custom physical ambient/wearable health devices. Updated the business plans (`09-Use-of-Funds.md` and `07-Team-and-Advisors.md`) to budget for dummy test prototypes, an initial 100-unit pilot batch, and immediately structured hiring tracks for an Embedded Hardware & IoT Developer and a Content Management/Marketing Lead.
  - **The RAG Master Index Protocol (v2)**: Remapped the `generate_rag_index.js` compiler to the root of the repository. Ecosystem bots (and human operators) now use `MASTER_INDEX.md` at the repo root as their universal source of truth for repository structure across **both** Aura and Humanos.
  - **[MASSIVE PIVOT]**: Shifted the platform identity from an "Interoperability Tool" to **"Clinical Accessibility Infrastructure"**. This legally and structurally bypasses HIPAA/EHR dependencies and explicitly targets the medically underserved.
  - **The 16-Mode Accessibility Engine**: Overhauled the core Business Plan to structurally integrate the new **16-mode Cognitive Accessibility Engine**.
  - **C4 Architecture & FDA Deep Clean**: Scanned and purged lingering "Fall Detection" / SaMD hardware traps, replacing them with "Kinetic Event" parameters. Complete eradication of "HL7 FHIR" endpoints to secure FTC HBNR BAA-exemption.
  - **Published `DOC_SECURITY_MATRIX.md`**: Formally responded to the Docs Portal AI by explicitly categorizing the entire macro-architecture documentation into 3 strict tiers (`Tier 1: Public`, `Tier 2: Internal Business`, `Tier 3: Restricted/Auditor Only`).
- _Pending Tasks:_
  - Pursue formal FDA SaMD Regulatory Counsel Opinion.

## 🏥 Repository 3: humanos.foundation (Non-Profit Site)

**Last Synced:** 2026-03-27

- _Recent Changes:_
  - **Odoo REST Pipeline Restoration**: Surgically severed dependencies on the third-party Web3Forms relay, rewriting the "Apply for Network" and "Newsletter" React components to ingest exclusively through native Odoo `hr.applicant` and `mailing.contact` native REST APIs.
  - **Odoo REST API Ghost Routing Bypass**: Diagnosed and completely dismantled a persistent WSGI routing conflict caused by a legacy ghost module locally overriding the identical `/send_request` endpoint. Securely rerouted the NodeJS React edge proxy explicitly through a fresh `/humanos_api` controller path, forcibly isolating the data pipeline from older WSGI loops.
  - **Odoo 19 MissingError Eradication**: Decoded a hidden native `status=404 Record not found` payload dynamically cascading out of Odoo's core ORM engine. Eradicated the crash completely by stripping unbound relational variables (`contact_name`, `list_ids`) from the front-end JSON packet strings, guaranteeing the pristine `.sudo()` query executed cleanly without physically failing Postgres `Many2one` entity relationship checks.
  - Deployed a persistent live global visitor counter directly into the UI.
- _Pending Tasks:_
  - Publish public directory of validated "Clinic IDs" for the B2B SaaS routing.

## 🤖 Repository 4: AurahOS_Docs_Portal_&_Tech_Support_AuraBot

**Last Synced:** 2026-03-27

- _Recent Changes:_
  - **Established Role Identity (Inter-Agent Protocol):** Explicitly formalized my role as the **Enterprise Portal & Support Operator**, responsible for secure markdown parsing, RAG implementation, Helpdesk UI deployment, and Odoo routing.
  - **Ingested the DOC_SECURITY_MATRIX.md**: Received the official security clearance map from the Strategy AI. I have formally registered `Tier 2` (Business/Internal) and `Tier 3` (Restricted) as **Hard-Blocked / Zero-Trust** vectors. My Pinecone RAG engine will forcefully bypass and drop `/compliance`, `/server_config`, `/business-registration`, and `/business_plan`.
  - **Dynamic RAG Compliance Sandbox**: Restructured the UI to provide explicit testing context tabs (Public/Admin/Auditor) so the architect can instantly swap security scopes and test RAG filtering boundaries live in the interface.
  - **Component Layout Tuning**: Offset the AuraBot UI floating widget on the Y-Axis (`bottom-24`) to eliminate Z-index collisions with third-party settings and system-level widgets anchored to the bottom corners.
  - Repaired CI/CD pipeline `checkJs` TypeScript compilation errors and purged a fatal broken Git Submodule cache, executing a fully green Deploy to Production.
- _Pending Tasks:_
  - Build the automated RegEx path-blocking iterators into the RAG vectorization ingestion script to enforce the `DOC_SECURITY_MATRIX.md` rules.
  - Establish connection to Odoo instance.

---

## 🔄 The "Global Catchup" Protocol

When the Architect types `/global-catchup`:

1. The AI will ask the Architect: "What did we accomplish today across the 4 repositories?"
2. The AI will explicitly overwrite the _Recent Changes_ in the respective sections above with the newest timestamp and bullet points. Old changes can be moved to a `HISTORY.md` file if necessary.
3. The AI will run a terminal script to physically copy this exact `AURA_GLOBAL_CATCHUP.md` file from its current location to the root `docs/` folders of all 4 repository paths on the local machine to ensure 100% ecosystem synchronization.
