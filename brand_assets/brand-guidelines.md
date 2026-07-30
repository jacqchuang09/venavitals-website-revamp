# Vēna Vitals — Brand Guidelines (website)

Source: derived from the supplied logo lockup, logo mark, the VeriTrack monitor UI, the companion-app mockup, and the sensor-on-skin photograph. This is the **canonical brand reference for the website build** — `CLAUDE.md` defers to it for all colors, type, and component styling.

> **Color values below are measured from the supplied images and are marked `[VERIFY]`.** Replace with exact hex/CMYK/Pantone from the official brand source (or original logo vector) before launch.

---

## 1. Logo

**Two forms:**
- **Mark** — the split "V" (red left stroke + gray right chevron). Use as favicon, app icon, social avatar, and small/standalone placements.
- **Lockup** — mark above (or beside) the `vēnavitals` wordmark. Default for the site header and footer.

**Wordmark:** lowercase `vēna` in red + `vitals` in gray, set solid (no space). Note the **macron over the first "e"** (vēna) — it is part of the mark; never drop it.

**Rules**
- **Clear space:** keep margin ≥ the height of the "V" mark on all sides. Nothing intrudes.
- **Minimum size:** lockup ≥ 120px wide on screen; mark ≥ 24px.
- **On dark** (hero, device-style panels): use the same red/gray on near-black — the mark reads well on `--panel-dark` (see the monitor UI). Provide a dedicated on-dark asset.
- **Don'ts:** don't recolor, don't add effects/shadows, don't stretch, don't put the lockup on a busy photo without a scrim, don't separate the macron from the "e", don't rebuild the wordmark in a different font.

**Files to drop into `brand_assets/logo/`** (the build expects these names):
```
logo-lockup.svg          logo-lockup-on-dark.svg
logo-mark.svg            logo-mark-on-dark.svg
favicon.svg  (+ favicon-32.png, apple-touch-icon-180.png)
```

---

## 2. Color Palette

### Core brand
| Token | Hex `[VERIFY]` | Use |
|---|---|---|
| `--red` (Vēna Red) | **#D24B46** | Primary CTA, brand accent, the "vēna", key data highlights |
| `--gray` (Vēna Gray) | **#8C8E90** | Secondary/“vitals”, muted UI, large decorative type |

### Red ramp (derive states + ensure AA)
| Token | Hex | Use |
|---|---|---|
| `--red-700` | #9E3531 | Button active; red text on white when AA contrast is required |
| `--red-600` | #B83E3A | Button hover |
| `--red-500` | #D24B46 | Brand red (= `--red`) |
| `--red-100` | #FBEAE9 | Alert/emphasis tint background |

### Neutrals
| Token | Hex | Use |
|---|---|---|
| `--ink` | #1C1E21 | Primary text, headings |
| `--gray-700` | #5E6164 | Body-capable secondary text |
| `--gray-500` | #8C8E90 | Brand gray, muted labels |
| `--gray-300` | #CACCCE | Borders, dividers, disabled fills |
| `--gray-100` | #F2F3F4 | Hairlines, subtle fills |
| `--bg` | #FFFFFF | Page base |
| `--surface` | #F7F8F9 | Elevated cards, section bands |
| `--panel-dark` | #0E0F12 | Device-style panels, dark hero, data viz background |

### Diagnostic accents (from the VeriTrack UI — use **semantically + sparingly**, never decoratively)
| Token | Hex `[VERIFY]` | Meaning |
|---|---|---|
| `--signal-blue` | #29ABE2 | Live data / pulse / active waveform highlight |
| `--threshold-amber` | #E6A15C | Alarm limit lines, caution thresholds |

### Contrast guardrails (WCAG AA)
- **Vēna Red on white fails AA for normal body text** — never set paragraphs in red. Red is for: white-on-red buttons, large/bold headings, icons, and accents. For red text on white at body size, use `--red-700`.
- White-on-`--red-500` is fine for **bold button labels ≥16px**; if a label must be small/regular, use `--red-600/700`.
- Body text = `--ink` or `--gray-700` on white; `--gray-500` only for large or non-essential labels.

---

## 3. Typography

The wordmark is a **rounded geometric lowercase sans**. Echo its character in headings without copying it; pair with a highly legible workhorse for body and data.

| Role | Family `[VERIFY pairing]` | Treatment |
|---|---|---|
| **Display / Headings** | **Figtree** (or Poppins) — geometric-humanist, free, harmonizes with the wordmark | Weights 500–700; tracking ~`-0.02em` on large sizes; sentence case |
| **Body / UI** | **Inter** — neutral, exceptional legibility | 400/500; line-height ~1.6–1.7 |
| **Data / Vitals numerals** | **Inter** with **tabular figures** (`font-variant-numeric: tabular-nums`) | The big `127 / 84 / (96)` block from the monitor is a brand signature — heavy weight, tabular, generous, on `--panel-dark` |

Type scale (rem, 1.250 major-third-ish): 3.5 / 2.75 / 2.0 / 1.5 / 1.25 / 1.0 / 0.875. Oversized bold stat numerals remain the loudest type on any page. Don't exceed two families (+ the wordmark, which lives only in the logo asset).

---

## 4. Buttons

Brand precedent (from the app): solid red rectangles and red/gray pills, white labels. Web spec, modernized:

| Variant | Default | Hover | Active | Focus-visible | Disabled |
|---|---|---|---|---|---|
| **Primary** (`Request a Demo`) | bg `--red-500`, text #FFF | bg `--red-600` | bg `--red-700` | 3px ring `rgba(210,75,70,.35)`, 2px offset | bg `--gray-300`, text #FFF @60% |
| **Secondary** (ghost) | transparent, 1.5px `--gray-300` border, text `--ink` | bg `--surface`, border `--gray-500` | bg `--gray-100` | same red ring | border `--gray-100`, text `--gray-300` |
| **Tertiary** (text link) | text `--red-700`, no fill | underline | — | red ring | text `--gray-300` |

- **Radius:** 8px (default). A **full-pill** variant is allowed for compact inline actions (matches the app's alert buttons).
- **Sizes:** sm 36 / md 44 / lg 52px height; padding ~14×24 at md; label weight 600.
- **Case:** sentence case for primary CTAs (`Request a Demo`) — avoid shouting. Optional uppercase + `0.08em` tracking for *small* utility microlabels only.
- **Shadow:** none or a single soft ink-tinted shadow on hover; no flat `shadow-md`, no glow.
- Every state above is mandatory — no exceptions.

---

## 5. Icons

- **Set:** Lucide (open-source, consistent) — **rounded caps/joins** to echo the wordmark.
- **Stroke:** 1.75px; **sizes:** 16 / 20 / 24 (24 default).
- **Color:** `--ink` default, `--red-500` only for emphasis. Single color — never multicolor or filled-gradient.
- Don't mix icon families; don't use red icons decoratively (status colors mean things).

---

## 6. Brand Motifs (the visual signatures — reuse these to feel branded)

1. **Continuous waveform** — the arterial pulse trace from the monitor. The recurring hero element and the spine of the "continuous vs. cuff-snapshot" graphic. Render as a clean stroke (`--ink` on light, `--signal-blue`/white on `--panel-dark`).
2. **Hexagonal sensor lattice** — the copper mesh visible on the skin photo. Use as a subtle background texture, section divider, or icon motif — low opacity, never busy.
3. **Vitals numeral block** — big tabular `Sys / Dia / (MAP)` + Pulse, on dark, with the gray range-band and dashed amber thresholds. The native "data" treatment for any live-readout visual.
4. **The gray range band + dashed threshold lines** — the data-viz house style for showing BP range and limits.

---

## 7. Photography & Imagery

- **Yes:** real clinical/OR settings; macro shots of the sensor on skin (moody, dark, shallow depth of field — see the wrist photo); clean product/device renders; waveform/data overlays.
- **Treatment:** consistent color temperature; gentle scrim/overlay when text sits on a photo for legibility.
- **No:** stock "people pointing at tablets", smartwatch-lifestyle imagery, consumer pastels, glow/heavy gradients. (The companion-app mockup is consumer-facing — borrow its *palette*, not its framing; the website is for clinicians and administrators, not patients.)

---

## 8. Spacing, Depth, Voice

- **Spacing scale:** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96px. Repeat the rhythm; no arbitrary one-offs.
- **Depth:** base → elevated (cards: `--surface` + hairline) → floating (sticky nav). Ink/gray-tinted soft shadows at low opacity, not pure black, not heavy.
- **Voice:** confident, precise, evidence-first, clinical (full guidance in `CLAUDE.md`). The brand is warm in *form* (rounded wordmark, red) but rigorous in *tone*.

---

## 9. Open items `[VERIFY]`
- Exact hex / Pantone / CMYK for Vēna Red and Vēna Gray from the official source.
- The actual wordmark font (to confirm the closest web pairing).
- Whether `--signal-blue` and `--threshold-amber` are sanctioned brand colors or only device-UI colors (affects how freely the site may use them).
- Source vector logo files (SVG) + on-dark variants for `brand_assets/logo/`.
