# Humanos Foundation TODO

## Phase 16: Ecosystem Synchronization
- [ ] Monitor the Global Event Bus for the next major architectural shift.

## Phase 17: Eradicate Mock Architecture (API Defrosting)
- [x] **Blog Post CMS Generation:** Replaced the hardcoded JSON 18-post `CORNERSTONE_POSTS` string list. Formally extracted all clinical narrative into 18 standalone Native Markdown (`.md`) files in the `/public/content/blog/` directory to ensure perfect Google SEO crawling without crippling the Vite SPA routing model.
- [x] **Contact & Join Odoo 'Virtual Hole':** Discarded Supabase API route. Rebuilt the UI components (`Volunteer.jsx`, `Contact.jsx`, `Join.jsx`) to strictly use an `<iframe>` pointing to `team.humanos.foundation/contactus` to pipe leads directly into the CRM. Extricated legacy mock forms.
- [x] **Google Analytics (GA4) Migration:** Dropped PostHog from the CSP. Installed standard Google Analytics `gtag.js` into `index.html` to ensure the Foundation's SEO, traffic visibility, and usability are correctly indexed by Google.
