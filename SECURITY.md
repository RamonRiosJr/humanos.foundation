# Security Policy — Humanos Foundation

## Supported Versions

| Version                      | Platform             | Supported      |
| ---------------------------- | -------------------- | -------------- |
| Aura hOS™ v0.8.x (current)   | `aurahos.io`         | ✅ Active      |
| humanos.foundation (current) | `humanos.foundation` | ✅ Active      |
| All prior releases           | —                    | ❌ End of Life |

## Architecture Context

This repository (`humanos.foundation`) is the **Human Operations Layer** — an advocacy and donor-routing platform. It does **not** process, store, or transmit clinical health data. All cryptographic operations (AES-256-GCM, PBKDF2, Web Crypto API key isolation) occur exclusively on the patient's device within the separate `aura-health-os` repository.

## Reporting a Vulnerability

**Do NOT open a public GitHub Issue for security reports.**

Email: **[security@humanos.foundation](mailto:security@humanos.foundation)**

Include the following:

- Description of the vulnerability and its potential impact
- Steps to reproduce
- Affected version / URL / endpoint
- Any suggested mitigations

## Our Commitments

1. We will **acknowledge** your report within **48 hours**.
2. We will provide a severity assessment within **7 business days**.
3. We will **never** pursue legal action against good-faith researchers.
4. We will publicly credit you (with your permission) upon remediation.

## Scope

**In Scope:** `humanos.foundation`, `team.humanos.foundation`, any publicly accessible API endpoints, authentication and CRM webhook flows.

**Out of Scope:** Third-party services (Vercel, Odoo, PostHog), denial-of-service attacks, social engineering, attacks requiring physical device access.

## Public Disclosure

We will coordinate responsible public disclosure with you after remediation. We believe security research is a public good and we treat it that way.
