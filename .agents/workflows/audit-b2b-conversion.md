---
description: audit-b2b-conversion: The Capital Gatekeeper. Audits the clinical routing pathways and enterprise onboarding flows.
---

# B2B Conversion Edge Auditor

**Objective:** Ensure that the specific technical pathways allowing Enterprise CTOs and Clinicians to interact with the Foundation are frictionless, robust, and highly credible.

## 1. Intake Funnel Hardening
- **Form Purity:** Review `/contact`, `/providers`, and `/clinics` routes. Are we using fragile third-party mailers (Web3Forms)? If so, replace them with native Edge API Odoo ingestion (`odooClient.js`).
- **Data Capture:** Ensure we are capturing strictly necessary zero-knowledge data. No SSNs. No redundant legacy fields.

## 2. Friction & UX Feedback
- Evaluate the button states. `isSubmitting` must lock the UI. `Loader2` spinners must actively communicate API webhooks to the user. 
- Eliminate "dead" buttons or links that lead to 404s.

## 3. Financial Mechanics
- Ensure the B2B pipeline heavily emphasizes the "$0.25 execution basis" and the "FTC HBNR BAA Exemption".
- The flow must communicate exactly *why* integrating with Aura hOS is legally safer and structurally cheaper than Epic or Cerner.

**Execution:** If an intake workflow is weak or poorly coded, rip out the logic and enforce `odooClient.createTicket()` async execution.
