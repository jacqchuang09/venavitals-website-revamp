# CLAUDE.md — Vena Vitals Website

This is the **code-built marketing/diligence website** for Vena Vitals, a medical-device startup.
The product (VeriTrack) is an **investigational device pending
FDA 510(k) clearance** — every word on this site has regulatory consequences. Read this file before
writing any code or copy, every session, no exceptions.

The planning that drives this build lives in this repo:
`01-current-site-audit.md` · `02-comparator-analysis.md` · `03-audiences.md` ·
`04-sitemap-and-requirements.md` · `05-wireframes.md` · `06-ai-content-brief-and-timeline.md`.
When in doubt about structure, audience, or copy, those files are the source of truth.

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.
- Read `brand_assets/brand-guidelines.md` and the design tokens before touching any visuals.
- Re-read the **Regulatory Guardrails** section below before writing or editing any product copy.

## What This Site Is For
The site is a **diligence tool**, not a brochure. Two jobs, in priority order:
1. Give a **hospital administrator** the economic case, the evidence, and a way to start a pilot.
2. Give an **anesthesiologist** enough technical and clinical depth to become an internal champion.

Primary conversion everywhere: **"Request a Demo."** Secondary: **"See the Evidence."**

## Audience Priority (drives every decision; higher priority wins conflicts)
1. **Hospital administrators / health-system buyers** — evidence-first, economic case, pilot path. Allergic to hype.
2. **Anesthesiologists & intensivists** — technical depth, validation methodology, citations. Hardest to impress, most valuable champion.
3. **Consumers — explicitly deprioritized.** No consumer-wellness tone, no lifestyle/smartwatch imagery, no app-store badges, no "track your health" language. Clinical-grade brand throughout.

Reading level: homepage = educated layperson; Technology & Clinical Evidence pages = clinician-grade depth below the fold. Never talk down to anesthesiologists.

## Regulatory Guardrails — HARD RULES (apply to ALL copy)
These are non-negotiable. A violation here is worse than any design flaw.

1. **Never state or imply** the device is FDA-cleared, FDA-approved, or commercially available.
2. Every page that describes the product must carry the disclaimer (exact wording pending regulatory counsel — flag as `[VERIFY counsel]` until approved):
   > "VeriTrack has been submitted for FDA 510(k) review and is not yet available for commercial sale. Investigational use only."
3. **"Comparable to the arterial line"** may appear **only** alongside the specific validation-study citation. Never as a standalone claim.
4. **No outcome claims** (mortality, AKI reduction, length-of-stay, etc.) — that data does not exist. Do not invent it.
5. **Sleep and home/consumer applications = "future directions / research,"** never "products" or "available."
6. **No "FDA clearance expected [date]"** in site copy (fine in conversations, risky in writing).
7. Every clinical claim is **either cited or visibly conservative.** Adopt the numbered-citation pattern (BioIntelliSense-style): claim → footnote.
8. Mark every fact you are unsure of with **`[VERIFY]`** for human review. Do not silently guess company facts, numbers, names, or study results.
9. Clinician quotes require written permission; institutional/investor logos require usage rights. Mark unconfirmed ones `[VERIFY rights]`.

## Tech Stack
- **Build code-first, deploy to Vercel.** No Wix.
- **Recommended stack: Astro** (static-first, markdown-driven content collections for the News and Clinical-Evidence pages so non-developers can add entries by editing markdown, fast Lighthouse scores, native Vercel deploy). **Confirm with the user before scaffolding** — if they prefer plain vanilla HTML/CSS/JS (per the reference pipeline) or another stack, follow that instead.
- No CSS frameworks unless agreed. No CDN dependencies for core functionality. Vendor any required assets locally.
- The News and Clinical-Evidence libraries must be **editable without touching layout code** (markdown/content collection, not hand-written HTML per entry).

## Sitemap (from file 04 — build to this)
```
Home
├── Technology          (VeriTrack: how it works, specs, integration)
├── Clinical Evidence   (validation data, publications, ongoing studies)  ← wins anesthesiologists
├── Solutions ▾
│   ├── Operating Room / Anesthesiology   ← primary
│   ├── ICU & Critical Care               ← near-term
│   └── Sleep Medicine                    ← future direction
├── Partner With Us     (pilot program, economic case, demo request)      ← converts admins
├── About               (story, founders, clinical advisors, backers, careers)
├── News
└── Contact / Request a Demo  (real form, not a mailto)
Footer: Privacy Policy · FCOI Policy · LinkedIn · regulatory disclaimer
```
Persistent **[Request a Demo]** button in the nav header on every page (accent color, sticky on scroll).
Demo form fields: name · organization · role (dropdown: anesthesiologist / hospital admin / intensivist / researcher / other) · email · phone (optional) · message · hidden source-page field.

## Design System
**`brand_assets/brand-guidelines.md` is the source of truth for all colors, type, and component styling.** Define everything there as CSS custom properties in a single `:root`/global token file; never inline a hex in a rule — add a token. Summary:
- **Palette:** white base; `--ink` (#1C1E21) text; brand **Vēna Red** (#D24B46) as the primary accent/CTA; **Vēna Gray** (#8C8E90) secondary. Diagnostic accents `--signal-blue` (#29ABE2) and `--threshold-amber` (#E6A15C) only for live-data/threshold motifs. No gradient-on-gradient, no consumer pastels, no dark-mode-crypto look. (Hex values `[VERIFY]` against the official source — see brand-guidelines.md.)
- **Typography:** headings in a geometric-humanist sans (Figtree/Poppins) echoing the wordmark; body/UI in Inter; vitals numerals in Inter with tabular figures. Bold oversized stat numerals. Density over fluff — clinical brand.
- **Imagery & motifs:** real clinical settings, clean product renders, and the brand signatures — the **continuous waveform**, the **hexagonal sensor lattice**, and the **vitals numeral block** on dark. The continuous-waveform-vs-cuff-snapshot graphic is the recurring hero element. Never stock photos of people pointing at tablets; never smartwatch-lifestyle imagery.
- **Status colors mean things:** don't use red/green/blue/amber decoratively.
- **Brand assets:** logo vectors, fonts, and approved renders live in `brand_assets/` (logo files in `brand_assets/logo/`). Read and match exactly; never invent brand colors.

## Craft Guardrails (anti-generic — make it look designed, not AI-generated)
These elevate the build from "vibe-coded" to professional. Apply them **in service of the restrained clinical brand above** — when one of these pushes toward flashy/startup-y, dial it back. The clinical aesthetic always wins.
- **Color:** never ship a default framework palette (no stock `blue-600`/`indigo-500`). Derive the whole scale from the one brand accent + navy + neutrals defined in the design tokens. Tints/shades are computed from the brand color, not picked at random.
- **Shadows:** never a flat default `shadow-md`. Use layered, **color-tinted** shadows at low opacity (a soft ambient + a tighter contact shadow), tinted toward navy — not pure black. Subtle; this is a clinical surface, not a SaaS card.
- **Depth / elevation:** surfaces follow a layering system — base → elevated (cards) → floating (nav, modals) — not all on one z-plane. Differentiate with elevation and a hairline border, not heavy drop shadows.
- **Typography:** pair at most **two** families — a clean grotesque sans for body and either the same family at heavier weights or one refined display face for headings. Never decorative fonts. Tight tracking (~`-0.02em`) on large headings; generous line-height (~`1.6–1.7`) on body. Oversized bold stat numerals remain the loudest type on the page.
- **Texture/depth without gradients:** our brand bans gradient-on-gradient and pastels. Get depth from layering, tinted shadows, and—at most—a *very* faint single-tone noise/grain or a subtle waveform motif. No multi-radial-gradient backgrounds, no glow.
- **Spacing:** use a consistent spacing scale (e.g. 4/8px-based tokens), not arbitrary one-off values. Vertical rhythm should be obvious and repeated.
- **Imagery treatment:** real clinical photos get a subtle, consistent treatment (gentle overlay for text legibility, unified color temperature) so mixed-source photos feel like one set. Never the cliché stock look.
- **Interactive states:** every clickable element has hover, focus-visible, **and** active states — no exceptions (restating the rule above because it's the most-skipped one).

## Reference-Match Discipline (when a reference image or comp is provided)
- Match layout, spacing, typography, and color **exactly** — do **not** "improve" or add to a provided reference.
- While matching, use placeholder content so structure is judged before assets exist: images via `https://placehold.co/WIDTHxHEIGHT`, `[IMAGE: description]` slots, and generic-but-on-voice copy (never fabricated facts/numbers — those stay `[VERIFY]`).
- Swap placeholders for real assets from `brand_assets/` the moment they exist.

## Animations
Essentially none. The **one** place to spend animation budget is a restrained live-drawing **waveform animation in the hero** (looping muted MP4/WebM or Lottie/SVG, not heavy JS). Otherwise only `transform`/`opacity` for small affordances, with spring-style easing. Never `transition-all`. Nothing safety- or claim-relevant may depend on motion to be noticed.

## Interactive States
Every clickable element needs hover, focus-visible, active, and a clearly distinct disabled state. Forms need visible validation and a real success state.

## Reference Sites (Hack #3 — clone the structure, beat them on evidence)
- **Caretaker Medical (caretakermedical.net)** — closest direct competitor; **structural template** for homepage ordering and the demo form. Copy the architecture.
- **Proprio (propriovision.com)** — **aesthetic ceiling** (premium, modern, surgical) and the "outcomes at a glance" stat board — but we cite our stats; they don't.
- **BioIntelliSense** — the numbered-citation discipline to copy on every clinical claim.
- **Hypervision Surgical** — the pre-clearance playbook: credibility via people, pedigree, investors, and honest regulatory badges.

When cloning, screenshot the reference, build, compare, and iterate (see below). Match structure and polish — do **not** copy their copy, and never adopt an uncited outcome claim.

## Screenshot Workflow (Hack #2 — the quality loop)
- **Always serve on localhost — never screenshot a `file:///` URL.** Start the dev server in the background before screenshotting; if it's already running, don't start a second instance.
  - Astro: `npm run dev` → `http://localhost:4321`
  - Vanilla fallback: any static server on the project root (e.g. `python3 -m http.server 3000`).
- Load the running localhost URL with the browser tools (Claude Preview / Chrome MCP), screenshot, then **Read the PNG back** so it can be analyzed directly. Save iteration screenshots under `temporary-screenshots/` (auto-incremented, never overwritten); add `temporary-screenshots/` to `.gitignore`.
- After any visual change: screenshot → compare to the reference (Caretaker/Proprio) and to the wireframe in `05-wireframes.md` → fix mismatches → re-screenshot. At least **2 comparison rounds**. Stop only when there are no visible differences or the user says so.
- **Be specific and measured** when comparing: "hero H1 is 40px, Proprio reference reads ~56px"; "card gap is 16px but should be 24px"; "stat numerals should be the largest type on the page."
- **Check, every pass:** spacing/padding, font size/weight/line-height, exact hex vs. design tokens, alignment, border-radius, shadow treatment, image sizing.
- Check every page you touched, not just the easy one. Check desktop **and** mobile.
- For animated sections (e.g. the waveform hero), the screenshot loop misfires — tell me to skip it and iterate on code directly.
- A screenshot proves layout, not behavior. Never claim a form, analytics, or animation "works" from a screenshot — say what was and wasn't verified.

## Components (Hack #4)
For the waveform hero, audience cards, stat board, and FAQ accordion, individual components (e.g. from 21st.dev) are fine as a starting point — but re-theme them to the design tokens and strip anything that doesn't fit the clinical brand. For animated components, tell me to skip the screenshot loop (animation confuses it) and iterate on the code directly.

## Deploy (Hack #5 — GitHub + Vercel)
- We always test on **local / preview** until the user explicitly says to publish. Do not push to production on your own.
- Flow: commit → push to GitHub → Vercel auto-deploys. Keep a working local version so unreviewed changes never reach production.
- Never commit secrets, form-backend keys, or analytics tokens. Use Vercel env vars.
- Set 301 redirects from any old venavitals.com URLs; connect the domain only when the user says so.

## Hard Rules
- Do **not** imply FDA clearance, approval, or availability — ever.
- Do **not** invent company facts, numbers, study results, names, or quotes. Unknown → `[VERIFY]`.
- Do **not** add an uncited outcome or accuracy claim.
- Do **not** add consumer-wellness tone, imagery, or app-store framing.
- Do **not** add pages, features, or sections not in the sitemap without asking.
- Do **not** add Tailwind/React/CDNs/build tooling without agreement; do **not** use `transition-all`.
- Do **not** invent colors outside the design tokens.
- Do **not** stop after one screenshot pass.
- Do **not** push to production without explicit instruction.
