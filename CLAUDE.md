# CLAUDE.md — Vena Vitals Website

You're building the website for **Vena Vitals**, the company behind **VeriTrack** — a soft, band-aid-like sensor that reads continuous, beat-to-beat blood pressure with no cuff and no arterial line.

This is not a typical medical site. It should feel **alive, like the product**: precise, responsive, a little surprising. Credible enough for its audience — **hospital buyers and anesthesiologists** — and genuinely fun to move through. Innovate freely; the goal is something people remember.

## The feel

- Clinical-grade and confident. Lots of white space. Brand red, ink, the waveform.
- **On**, not static — an instrument that's running, not a brochure. The page responds to you.
- Innovative and playful in the interactions, never gimmicky. Every effect should feel like it belongs to a precision medical device.

## Signature interactions (build the site around these)

- **Custom cursor** — a small live element (a pulse dot, a short waveform trail) that reacts to motion and hover. Part of the brand, not an afterthought.
- **Sensor-like motion** — components move the way the sensor behaves: soft, elastic, skin-conforming. Springy easing, a slight stretch or deform on interaction, then settle organically. Nothing stiff or linear.
- **Draggable components** — let people grab and move things: peel and drag the sensor, rearrange cards, pull the waveform. Tactile, satisfying, with a sense of physics.
- **Scroll as the storyteller** — the waveform draws itself as you scroll; the continuous-vs-cuff graphic animates; sections reveal and parallax. Scrolling should feel like a pulse.

Keep it tasteful and fast (favor `transform`/`opacity`), respect `prefers-reduced-motion`, and never let an important message depend on motion to be seen.

## Where the content and look live

Three reference docs, that's it:
- **[docs/CONTENT.md](docs/CONTENT.md)** — the copy for every page and section (build with the **Final** line).
- **[docs/ASSETS.md](docs/ASSETS.md)** — every image/video with its Google Drive link, plus the gaps still needed.
- **[docs/DESIGN_GUIDELINES.md](docs/DESIGN_GUIDELINES.md)** — colors, type, spacing, the waveform motif. A foundation to build on, not a cage.

Pull approved copy from `CONTENT.md`. Improve structure, layout, and microcopy freely — just don't invent claims.

## The lines we hold (the only hard rules)

This is a real, pre-clearance medical product. Keep these exact; everywhere else, innovate freely.

1. Never imply FDA-cleared, approved, or for sale. Standard line on product pages: *VeriTrack has been submitted for FDA 510(k) review and is not yet available for commercial sale.*
2. "Comparable to the arterial line" only next to the validation citation.
3. No outcome claims. Sleep and home uses are future directions, not products.
4. Don't invent facts, numbers, names, or quotes. If you're unsure, leave it out and flag it.
5. Keep it accessible: readable contrast, keyboard support, reduced-motion fallbacks.

## Keep improving it

Every rough edge is a chance to make it better: notice what's off (a janky interaction, a slow page, a weak section), fix it, check it feels right on desktop and mobile, and keep a short running note of anything worth remembering at the bottom of this file.

## Reference and inspiration

Study these for interaction quality and craft — match the bar, don't copy. Drop URLs here:
- <reference site — what to learn: cursor / drag / scroll>
- <reference site>

## When you finish

Tell me **what you built and how to see it** — what to run, what to click, what to scroll. Then keep going.

Stay alive. Stay precise. Make it feel like the sensor.
