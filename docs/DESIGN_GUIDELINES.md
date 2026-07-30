# Design Guidelines

How the site should look and feel. Treat this as the **brand foundation and a starting point, not a cage.** Stay coherent with it, but you have room to make strong design decisions, extend the system, and propose better patterns. When you deviate, do it on purpose, keep it consistent, and note it in `DECISIONS.md`.

**The intent matters more than any single value.** The feel: clean, confident, clinical, with plenty of white space — calmer and more credible than busier competitors. Warm in form (rounded wordmark, red), rigorous in tone. If a choice serves that intent and the user journeys, it is probably right even if it is not spelled out below.

> Color values are measured from brand assets; confirm against the official brand source before launch.

## Colors

Start from this palette. Extend the ramps, add tints/shades, or introduce a new token when the design needs it — just keep the family coherent and define new values here so they are reusable.

### Brand
| Token | Hex | Use |
|---|---|---|
| `--red` / `--red-500` | `#D24B46` | Primary action, brand accent, the "vēna", key highlights |
| `--gray-500` | `#8C8E90` | Brand gray, the "vitals", muted labels |

### Red ramp (extend as needed)
| Token | Hex | Use |
|---|---|---|
| `--red-700` | `#9E3531` | Active; red text on white when contrast needs it |
| `--red-600` | `#B83E3A` | Hover |
| `--red-500` | `#D24B46` | Brand red |
| `--red-100` | `#FBEAE9` | Tint background, emphasis chips |

### Neutrals
| Token | Hex | Use |
|---|---|---|
| `--ink` | `#1C1E21` | Primary text, headings |
| `--gray-700` | `#5E6164` | Body / secondary text |
| `--gray-500` | `#8C8E90` | Muted labels |
| `--gray-300` | `#CACCCE` | Borders, dividers, disabled fills |
| `--gray-100` | `#F2F3F4` | Hairlines, subtle fills |
| `--bg` | `#FFFFFF` | Page base |
| `--surface` | `#F7F8F9` | Cards, section bands |
| `--panel-dark` | `#0E0F12` | Dark hero, device-style panels, data-viz |

### Diagnostic accents
| Token | Hex | Meaning |
|---|---|---|
| `--signal-blue` | `#29ABE2` | Live data / pulse / active waveform |
| `--threshold-amber` | `#E6A15C` | Alarm limits, caution thresholds |

These read as "clinical instrument" cues — they are most powerful used with meaning rather than as random decoration, but use your judgment.

**One real rule (accessibility):** keep text readable. Aim for WCAG AA contrast. Red on white fails AA at body size, so use `--red-700` for small red text, and keep body copy in `--ink` / `--gray-700`. Everything else here is guidance you can flex.

## Typography

| Role | Family | Treatment |
|---|---|---|
| Display / headings | **Figtree** (or a close geometric-humanist sans) | weights 500–700; slight negative tracking on big sizes; sentence case |
| Body / UI | **Inter** (or a clean, legible sans) | 400 / 500; line-height ~1.6 |
| Data / numerals | **Inter** with `tabular-nums` | heavy, generous, great on dark — the big `Sys / Dia / (MAP)` block is a brand signature |

Two families is a good default; add a third only if it clearly earns its place. **Type scale (rem), a starting point:** 3.5 / 2.75 / 2.0 / 1.5 / 1.25 / 1.0 / 0.875 — adjust for rhythm and hierarchy. Oversized bold stat numerals should usually be the loudest type on a page.

## Spacing

A rhythm to favor, not a rigid grid: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96` (px). Be generous; let things breathe. Depth: base → elevated card (`--surface` + hairline) → floating sticky header, with soft ink/gray-tinted shadows, never heavy.

## Components

Build a small, reusable kit (button, link, card, input, tag, section, stat numeral, the waveform). The one thing to nail on every interactive element: give it all its states — default, hover, active, focus-visible, disabled — so nothing feels half-built.

**Buttons (a sensible default):** primary = `--red-500` bg, white label, `--red-600` hover, `--red-700` active, a clear focus ring, a distinct disabled state. Radius ~8px; comfortable sizes (sm/md/lg). Sentence case. Tune as the design calls for.

## Icons

Lucide (or a single coherent set with rounded joins). One stroke weight, consistent sizes, single color — `--ink` with red for emphasis. Don't mix icon families.

## Brand motifs

Lean into these so the site feels unmistakably Vena — and invent new ones in the same spirit:
1. **Continuous waveform** — the arterial pulse trace. The recurring hero element and the spine of the "continuous vs cuff-snapshot" graphic. Clean stroke; `--ink` on light, `--signal-blue`/white on dark.
2. **Hexagonal sensor lattice** — the copper mesh from the skin photo. Subtle texture / divider.
3. **Vitals numeral block** — big tabular Sys/Dia/(MAP) + Pulse on dark, with a gray range band and dashed amber thresholds.
4. **Gray range band + dashed thresholds** — the house style for showing BP range and limits.

## Imagery

Favor: real clinical/OR settings, moody macro sensor-on-skin, clean product renders, waveform/data overlays. Avoid: stock "people pointing at tablets", smartwatch-lifestyle shots, consumer pastels, heavy glow. Scrim behind text over photos for legibility.

## Motion

Purposeful motion is welcome — a hero waveform that draws in, a gentle reveal, a satisfying button press. Keep it tasteful and performant (favor `transform`/`opacity`), and skip animation that distracts or that important content depends on to be noticed.

## CSS

- **Prefer tokens, and add new ones freely** when the design needs them — define them in the `:root` block so they stay reusable and consistent. The goal is a coherent, maintainable system, not zero new values.
- Keep styling organized (tokens + component styles). Choose the approach that keeps the codebase clean per `IMPLEMENTATION_PLAN.md`.
- Mobile-first, responsive, fast (target < 3s load; compress hero media).

### Starting `:root` tokens (extend as you go)

```css
:root {
  /* brand */
  --red: #D24B46;
  --red-700: #9E3531;
  --red-600: #B83E3A;
  --red-500: #D24B46;
  --red-100: #FBEAE9;
  /* neutrals */
  --ink: #1C1E21;
  --gray-700: #5E6164;
  --gray-500: #8C8E90;
  --gray-300: #CACCCE;
  --gray-100: #F2F3F4;
  --bg: #FFFFFF;
  --surface: #F7F8F9;
  --panel-dark: #0E0F12;
  /* diagnostic accents */
  --signal-blue: #29ABE2;
  --threshold-amber: #E6A15C;
  /* spacing */
  --space-1: 4px;  --space-2: 8px;  --space-3: 12px; --space-4: 16px;
  --space-5: 24px; --space-6: 32px; --space-7: 48px; --space-8: 64px; --space-9: 96px;
  /* radius + type */
  --radius: 8px;
  --font-display: "Figtree", "Poppins", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
}
```

> Confirm exact brand hex/fonts against the official source before launch. Everything here is a strong starting point — extend it thoughtfully.
