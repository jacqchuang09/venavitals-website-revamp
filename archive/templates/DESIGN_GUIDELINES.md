# Design Guidelines

_How it looks and feels. Treat this as the **foundation and a starting point, not a cage.** Set strong defaults here, then give the agent room to make good design decisions, extend the system, and propose better patterns. When it deviates, it should do so on purpose, keep it consistent, and note it in `DECISIONS.md`._

_The intent matters more than any single value._

The feel: <2-3 words on the vibe, e.g. "clean, clinical, confident"> — <one line on the overall mood>. If a choice serves that intent and the user journeys, it is probably right even if it is not spelled out below.

## Colors

Start from this palette; extend ramps, add tints/shades, or add a new token when the design needs it — just keep the family coherent and define new values here so they stay reusable.

| Token | Hex | Use |
|---|---|---|
| `--accent` | `<#......>` | <primary action, brand accent> |
| `--ink` | `<#......>` | <primary text> |
| `--muted` | `<#......>` | <secondary text> |
| `--border` | `<#......>` | <borders, dividers> |
| `--bg` | `<#......>` | <page background> |
| `--surface` | `<#......>` | <cards, raised sections> |

_Add ramps (hover/active) and semantic colors (success/warning) as the design calls for._

**One real rule (accessibility):** keep text readable — aim for WCAG AA contrast. Note any color that fails for body text and what to use instead. Everything else here is guidance you can flex.

## Typography

| Role | Family | Treatment |
|---|---|---|
| Headings | `<font>` | <weights, tracking, case> |
| Body | `<font>` | <weight, line-height> |
| Data / numerals | `<font>` | <e.g. tabular-nums> |

Two families is a good default; add a third only if it clearly earns its place. **Type scale (rem), a starting point:** `<e.g. 3.5 / 2.75 / 2.0 / 1.5 / 1.25 / 1.0 / 0.875>` — adjust for rhythm and hierarchy.

## Spacing

A rhythm to favor, not a rigid grid: `<e.g. 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96>` (px). Be generous; let things breathe.

## Components

Build a small, reusable kit (button, link, card, input, tag, section). The one thing to nail on every interactive element: give it all its states — default, hover, active, focus-visible, disabled — so nothing feels half-built. Specifics (radius, sizes, colors) are yours to set; keep them consistent.

## Icons

One coherent set, one stroke weight, consistent sizes, single color (accent for emphasis). Don't mix icon families.

## Brand motifs (optional but powerful)

Pick one distinctive visual element and repeat it everywhere so the product feels branded — and invent new ones in the same spirit.
- <Motif 1 — what it is and how to render it>
- <Motif 2>

## Imagery

- Favor: <the kind of images that fit>
- Avoid: <the kind that breaks the brand>

## Motion

Purposeful motion is welcome — a reveal, a draw-in, a satisfying press. Keep it tasteful and performant (favor `transform`/`opacity`), and skip animation that distracts or that important content depends on to be noticed.

## CSS

- Prefer tokens, and add new ones in `:root` freely when the design needs them — define them so they stay reusable. The goal is a coherent, maintainable system, not zero new values.
- Keep styling organized (tokens + component styles), per `IMPLEMENTATION_PLAN.md`.
- Mobile-first, responsive, fast.

### Starting `:root` tokens (extend as you go)

```css
:root {
  --accent: <#......>;
  --ink: <#......>;
  --muted: <#......>;
  --border: <#......>;
  --bg: <#......>;
  --surface: <#......>;
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
  --space-5: 24px; --space-6: 32px; --space-7: 48px; --space-8: 64px;
  --radius: <8px>;
  --font-display: "<Heading Font>", system-ui, sans-serif;
  --font-body: "<Body Font>", system-ui, sans-serif;
}
```

> These are strong starting points — extend them thoughtfully.
