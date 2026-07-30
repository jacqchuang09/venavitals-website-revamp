# Tasks

The build list, in order. Work the next one at the top. When a task is done, delete it from the list. Add new tasks where they belong as they come up.

Pick up the next work and batch related tasks freely. Reorder, combine, or add tasks when a better path is obvious. Report what you did and how to test it, then keep momentum.

---

## Phase 0 — Project + brand assets
- Confirm stack with the team: code vs Wix, framework (Astro?), host (Vercel?), form handler, analytics. Record decisions in `IMPLEMENTATION_PLAN.md`.
- Scaffold the project (chosen framework) with a clean repo, formatter, and a working build.
- Set up a deploy preview (e.g. Vercel) and confirm a blank page deploys.
- Add fonts: Figtree (display) + Inter (body), with `tabular-nums` available.
- Add brand assets: logo lockup, logo mark, on-dark variants, favicon set.
- Create the global stylesheet with the `:root` tokens from `DESIGN_GUIDELINES.md`.

## Phase 1 — Design system + shared header & footer
- Build base components with all states: button (primary/secondary/tertiary), link, card, section wrapper, tag/pill, stat numeral.
- Build the waveform motif component (clean stroke; light + on-dark variants; optional slow hero draw).
- Build the sticky header: logo + nav (Technology, Clinical Evidence, Solutions, Partner With Us, About, News) + persistent **Request a Demo** button.
- Build the footer: nav, contact, LinkedIn, Privacy, FCOI, regulatory disclaimer line.
- Verify header + footer are responsive (mobile + desktop) and match the design guidelines.

## Phase 2 — Home page
Build in the section order from `../07-content-outline.md`. Placeholders where assets are pending.
- Hero (headline, sub, two CTAs, device + waveform visual placeholder)
- Trust bar (4 stat numerals)
- The problem (continuous-vs-cuff graphic placeholder)
- The solution (3 steps)
- See it in use (device-on-patient photo placeholder)
- Evidence strip (figure placeholder + link)
- Why it matters (annotated waveform) — optional, confirm keep
- Audience cards (3)
- Quote (clinician or founder)
- Backed by (logo row)
- Regulatory status band
- Final CTA + footer
- Full Home page QA on mobile + desktop vs the wireframe

## Phase 3 — The rest of the pages
- Technology page (layered: simple on top, technical below; spec table; workflow)
- Clinical Evidence page (flagship study, filterable publication list, advisors)
- Solutions — Operating Room (then ICU + Sleep short variants; Sleep = future direction)
- Partner With Us (economic case, evaluation program, FAQ, demo form)
- About (story, founders, team & advisors, backers, careers)
- News (reverse-chron content collection)
- Link every page in the nav; verify all internal links

## Phase 4 — Contact form + integrations
- Build the demo/contact form: name, organization, role (dropdown), email, phone (optional), message, hidden source-page field.
- Wire submissions to email + sheet/CRM; add a thank-you state.
- Add analytics.
- Add per-page SEO: titles, meta descriptions, social cards.

## Phase 5 — QA + launch
- Link check, form test, load speed, typo pass.
- Accessibility pass: contrast, alt text, focus-visible, keyboard nav.
- Replace placeholders with final assets as they arrive.
- Final review on a preview URL; ready to point the real domain.
