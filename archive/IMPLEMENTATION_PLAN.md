# Implementation Plan

How we build the site, in order. Each phase has a clear "done when" so the agent knows when to move on. The detailed checklist lives in [TASKS.md](TASKS.md).

## Stack

| Choice | Proposal (confirm with the team before building) |
|---|---|
| Build approach | Code-first, not Wix |
| Framework | **Astro** (fast static site; markdown content collections for News + Clinical Evidence) |
| Styling | Plain CSS with design tokens (CSS variables). No Tailwind, no CSS-in-JS. |
| Hosting | Vercel |
| Forms | Form submit to email + a sheet/CRM (serverless function or a form service) |
| Analytics | Plausible or GA4 |

This is the proposed starting stack. Prefer it for consistency, but if a different tool clearly serves the work better, use it and note why in `DECISIONS.md`.

## Build order

### Phase 0 — Project + brand assets
Set up the foundation before any pages.
- Scaffold the chosen framework; set up the repo, formatting, and a deploy preview.
- Add fonts (see `DESIGN_GUIDELINES.md`), the logo lockup + mark, favicon, and on-dark logo variants.
- Create the global CSS with the `:root` design tokens (colors, spacing, type).
- **Done when:** an empty site builds and deploys to a preview URL, with fonts, favicon, and tokens loaded.

### Phase 1 — Design system + shared header & footer
Build the reusable pieces every page uses.
- Base components: button (all states), link, card, section wrapper, stat numeral, tag/pill, the waveform motif.
- Sticky header with nav + persistent **Request a Demo** button.
- Footer with nav, contact, LinkedIn, Privacy, FCOI, and the regulatory disclaimer line.
- **Done when:** header and footer render on a blank page and match the design guidelines, responsive on mobile + desktop.

### Phase 2 — Home page
The priority page. Build it section by section in the order from the content outline.
- Follow the Home section order in `../07-content-outline.md` (hero → trust bar → problem → solution → see it in use → evidence strip → why it matters → audience cards → quote → backed by → regulatory → final CTA).
- Use placeholder images/copy where real assets are pending; mark each with a clear placeholder.
- **Done when:** the full Home page scrolls cleanly on mobile + desktop and matches the wireframes.

### Phase 3 — The rest of the pages
Build each page from the same content outline + wireframes. Reuse Phase 1 components.
- Technology
- Clinical Evidence (with a filterable publication list — content collection)
- Solutions (Operating Room, then ICU and Sleep variants)
- Partner With Us
- About
- News (content collection, reverse-chron)
- **Done when:** every page exists, is linked in the nav, and matches its wireframe.

### Phase 4 — Contact form + integrations
- Demo/contact form: name, organization, role (dropdown), email, phone (optional), message, hidden source-page field.
- Wire submissions to email + a sheet/CRM. Add a thank-you state.
- Add analytics and basic SEO (titles, descriptions, social cards) per page.
- **Done when:** a test submission arrives by email + lands in the sheet/CRM, and analytics records a visit.

### Phase 5 — QA + launch
- Check every link, the form, load speed, and typos. Test on mobile + desktop.
- Accessibility pass (contrast, alt text, focus states, keyboard nav).
- Swap in final assets as they arrive; replace placeholders.
- **Done when:** the site passes QA on a preview URL and is ready to point the real domain at.

## Notes

- The bottleneck is assets and approvals, not code (see `../08-questions-one-pager.md`). Build with placeholders; never block a page on a missing photo.
- Keep pages static where possible; only News and Clinical Evidence need a content collection.
- Update this doc whenever the stack or order changes.
