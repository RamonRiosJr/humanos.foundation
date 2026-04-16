# Humanos Foundation TODO

## Phase 16: Ecosystem Synchronization
- [ ] Monitor the Global Event Bus for the next major architectural shift.

## Restored From Global Catchup
- [ ] **[TIER 3 RESTRICTED] [GLOBAL BROADCAST] Telehealth Monetization & Enterprise Revenue Hardening (aura_hos_docs):** The Strategy AI successfully appended the $199/mo B2B Telehealth Gateway paywall to the Business Model.
- [ ] **[TIER 3 RESTRICTED] [GLOBAL BROADCAST] FDA SaMD 18-Month Shield Legal Draft Completed (aura_hos_docs):** Terms of Service deployed declaring Aura hOS as a pure administrative formatting tool.
- [ ] **[GLOBAL BROADCAST] Mock De-Simulation Purge Completed:** Purged `useVoiceMock.ts` and rewired all core handshake vectors into genuine Supabase RPC/Edge hooks.
- [ ] **[GLOBAL BROADCAST] Turnstile Bot Trap Deployed (aura-health-os → Foundation awareness):** Cloudflare Turnstile + honeypot pattern is live on Aura auth. Note: Foundation iframes (Odoo CRM forms) cannot be wrapped by Turnstile due to cross-origin restriction — Turnstile must be added directly on team.humanos.foundation side.
- [ ] **[TIER 3 RESTRICTED] [GLOBAL BROADCAST] Enterprise Architecture Upgraded (aura_hos_docs):** Strategically updated the core Mermaid Topologies across Protocol_Flows.md and 10-Platform-Ecosystem-Strategy.md. Explicitly injected the B2B Gateway SaaS Route Splitting (Edge Deno Function) logic to bypass the clinical patient vault at the root level. Reclassified the patient end-node from 'Medical Device' to 'Sovereign Consumer Hardware' to definitively secure the FTC HBNR BAA Exemption and mathematically block FDA SaMD liability classifications.
## Phase 18: Security, Compliance & Best Practices 
*(Enterprise Capitalization Hardening for 501(c)(3) Repository)*

### 🔒 Security & Privacy (Zero-Knowledge)
- [x] **Purge Production Console Logs:** The `humanos-local-sdk.js` and `api/humanosClient.js` currently print `console.log('Zero-Knowledge Payload Captured', data)`. This leaks contact info and intake payloads into the browser memory. Implement a strict `IS_PRODUCTION` flag to kill all `console.log` data dumps.
- [x] **Content Security Policy (CSP) Headers:** Add strict CSP headers to the deployment configuration to prevent any unapproved third-party scripts (XSS attacks) from scraping the Foundation documentation.

### ♿ Accessibility (Section 508 & WCAG 2.1 AA Required for Grants)
- [x] **ARIA Audit on Interactive Islands:** Ensure `aria-labels`, `role` attributes, and `aria-expanded` states are properly bound to the Navigation bars, Search inputs, and any interactive UI elements to satisfy Federal Health Equity accessibility mandates.
- [x] **Keyboard Trapping/Navigation Checks:** Ensure all critical routing paths (Contact Form, Join Protocol) can be navigated strictly via the `Tab` key without mouse interaction for motor-impaired patients.

### ⚙️ Performance & Code Quality (Refactoring)
- [x] **Implement Client-Side Caching (SWR / React Query):** Refactor the `BlogPost.jsx` and `Blog.jsx` data fetching. Currently, returning to a previously read post triggers a redundant network request for the `.md` file. Implement aggressive caching to improve perceived latency.
- [x] **Global Error Boundary Implementation:** Wrap the main `<App />` router in a strict React `ErrorBoundary` so that if a specific component (e.g., Markdown parser) fails, the rest of the site degrades gracefully instead of showing a blank white screen (White Screen of Death).
- [x] **OpenGraph / SEO Dynamic Injection:** Enhance `SEOMeta.jsx` to dynamically inject specific `<meta property="og:image">` and `<meta name="twitter:card">` headers dynamically using the frontmatter or metadata of the loaded blog slugs.
