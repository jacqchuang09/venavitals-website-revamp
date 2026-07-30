# Site Structure & Requirements

## Proposed sitemap (7 pages + utility)

```
Home
├── Technology  (VeriTrack: how it works, specs, integration)
├── Clinical Evidence  (validation data, publications, ongoing studies)
├── Solutions
│   ├── Operating Room / Anesthesiology   ← primary
│   ├── ICU & Critical Care               ← near-term
│   └── Sleep Medicine                    ← secondary/expansion
├── Partner With Us  (for hospitals: pilot program, economic case, demo request)
├── About  (story, team, clinical advisors, investors/backers, careers)
├── News
└── Contact / Request a Demo  (form, not just mailto)

Footer: Privacy Policy · FCOI Policy · LinkedIn · regulatory disclaimer
```

Rationale: mirrors the proven Caretaker/Retia/Eko architecture; "Partner With Us" replaces a "Buy" path because the product is pre-clearance — the conversion goal is **pilot/evaluation conversations**, not orders.

## Functional requirements

| # | Requirement | Priority |
|---|---|---|
| F1 | Multi-page site with real URLs (no more single-page anchors) — needed for SEO, internal sharing, and credibility | Must |
| F2 | Demo/contact form capturing: name, organization, role (dropdown: anesthesiologist, hospital admin, intensivist, researcher, other), email, phone (optional), message. Submissions → email + spreadsheet/CRM | Must |
| F3 | "Request a Demo" button persistent in the nav on every page | Must |
| F4 | Clinical Evidence page with publication entries: title, journal, year, one-line key finding, link/PDF | Must |
| F5 | Downloadable one-pager PDF (tech overview + evidence summary) gated by nothing or by email — decide | Should |
| F6 | News page editable by non-developers (CMS) | Should |
| F7 | Analytics (GA4 or Plausible) + form-conversion tracking | Must |
| F8 | Newsletter / "get updates on FDA clearance" email capture | Should |
| F9 | Careers section or link | Could |
| F10 | Mobile responsive, <3s load, accessible (WCAG AA) | Must |

## Content requirements (per page — what must exist before AI drafting)

| Page | Required raw inputs from team |
|---|---|
| Home | Approved one-sentence value prop; 3-4 trust stats (patients studied, papers, backers); 1-2 clinician quotes (with permission); hero image/render of VeriTrack |
| Technology | How-it-works explanation (layered: simple → technical); sensor photos/renders; spec table (placement site, measurement type, output, connectivity); waveform comparison graphic (VeriTrack vs A-line) if shareable |
| Clinical Evidence | Publication list (all papers/abstracts/posters); validation study summary (n, setting, comparator, headline result); statement on ISO 81060-2 / AAMI protocol if applicable; ongoing-study descriptions |
| Solutions | Per-setting pain points + how VeriTrack addresses them; OR page needs the A-line time/risk framing (10-40 min placement, infection/ischemia risk, cuff gaps) |
| Partner With Us | Pilot program description; what an evaluation involves; economic framing (no consumables story? nursing time? complication cost context); demo form |
| About | Founder bios + photos; clinical advisors (names/titles, with permission); backer logos (YC, MedTech Innovator, EvoNexus, Samsung NEXT — confirm usage rights); origin story (UCI lab → 600 patients) |
| News | 5-8 backfilled items (funding, YC, publications, conference talks, 510(k) submission) |

## Regulatory/legal guardrails (apply to ALL copy — give these to the AI drafter verbatim)

1. VeriTrack is **not FDA-cleared**. Every page that describes the product must carry: "VeriTrack has been submitted for FDA 510(k) review and is not yet available for commercial sale. Investigational use only." (exact wording to be approved by regulatory counsel)
2. No efficacy/outcome claims beyond what published data supports. "Comparable to arterial line" only with the study citation attached.
3. No "FDA clearance expected [date]" promises in site copy (fine for conversations, risky in writing).
4. Clinician quotes require written permission; institutional logos require usage rights.
5. Sleep/consumer applications described as **future directions / research**, not available products.

## Platform: Wix (team constraint)

Everything in this plan is Wix-compatible. Use **Wix Studio** (not classic ADI) for design control. How each requirement maps:

| Requirement | Wix implementation |
|---|---|
| Multi-page site, real URLs | Native — pages + SEO settings per page |
| Demo form w/ role dropdown (F2) | Wix Forms; submissions → email notification + Wix CRM contacts; add hidden "source page" field |
| Persistent "Request a Demo" in nav (F3) | Button in the Studio header (sticky header on scroll) |
| Clinical Evidence library (F4) | **Wix CMS collection** (fields: title, journal, year, type, setting, key finding, link/PDF) rendered with a repeater; category filters work no-code, multi-filter needs a small Velo snippet |
| News page (F6) | Second CMS collection or Wix Blog (Blog gives RSS + social cards for free) |
| One-pager download (F5) | Wix file link (ungated) or form-gated via automation that emails the PDF |
| Analytics (F7) | Wix Analytics built in; add GA4 via Wix integrations |
| Newsletter (F8) | Wix email-marketing signup form ("Get updates on our FDA journey") |
| Speed/responsive/a11y (F10) | Studio responsive editor; compress hero media (no autoplaying video >4MB); run Wix's SEO/accessibility checkers before launch |

Wix-specific guardrails:
- Start from a blank Studio layout or a minimal medical/biotech template — avoid heavy template animations.
- Upload brand fonts rather than settling for Wix defaults; keep to 2 weights (400/500-600).
- The waveform hero animation: use a looping muted MP4/WebM or Lottie (Wix supports Lottie natively) rather than custom JS.
- Avoid Wix App Market widgets for core functionality (forms/CMS cover everything); each app adds load time.
- Connect the venavitals.com domain in Wix settings; set 301 redirects from any old URLs.

## Success metrics

- Demo-request submissions per month (primary)
- One-pager downloads / newsletter signups (secondary)
- Time-on-page for Clinical Evidence (clinician engagement proxy)
- Inbound mentions: "I saw the validation data on your site" in sales conversations
