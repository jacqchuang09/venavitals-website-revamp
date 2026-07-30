# Implementation Plan

_How we build it, and in what order. Each phase has a clear "done when" so the agent knows when to move on. The granular list lives in TASKS.md._

## Stack

_A proposed starting stack. Prefer it for consistency, but if a different tool clearly serves the work better, use it and note why in `DECISIONS.md`._

| Choice | Decision |
|---|---|
| Language / framework | <e.g. Astro, Next, plain HTML> |
| Styling | <e.g. plain CSS with tokens — no Tailwind> |
| Hosting / deploy | <e.g. Vercel> |
| Data / content | <e.g. markdown content collections, a CMS, a DB> |
| Forms / integrations | <e.g. serverless function to email + sheet> |
| Analytics | <e.g. Plausible / GA4> |

## Build order

_Build foundations before features. Each phase should be independently shippable / testable._

### Phase 0 — Setup + assets
- <Scaffold the project, repo, formatter, deploy preview>
- <Add fonts, logos, favicons, the design tokens>
- **Done when:** <an empty build deploys with tokens and assets loaded>

### Phase 1 — Design system + shared shell
- <Base components with all states; header; footer; layout>
- **Done when:** <shared shell renders and matches the design guidelines, responsive>

### Phase 2 — <The most important screen/page>
- <Build it section by section in priority order; placeholders where assets are pending>
- **Done when:** <it works on mobile + desktop and matches the design>

### Phase 3 — <The rest>
- <List remaining screens/pages; reuse Phase 1 components>
- **Done when:** <everything exists and is linked/reachable>

### Phase 4 — <Integrations / interactivity>
- <Forms, data wiring, analytics, SEO>
- **Done when:** <a real end-to-end action works and is recorded>

### Phase 5 — QA + launch
- <Link/typo/speed checks; accessibility; swap in final assets>
- **Done when:** <passes QA on a preview and is ready to go live>

## Notes

- _What is the likely bottleneck? (assets, approvals, a dependency.) Start it early and build around it with placeholders._
- _Anything that must stay static / dynamic, performance budgets, etc._
- Update this doc whenever the stack or order changes, and record the change in DECISIONS.md.
