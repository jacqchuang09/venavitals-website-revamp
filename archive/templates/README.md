# Project Doc Kit (templates)

A reusable set of docs for running a project top-down with an AI coding agent. Copy this folder into a new project, fill the blanks, and drive the work from `TASKS.md`.

Fill-in style: `<like this>` = replace with your content · _italic lines_ = guidance you can delete.

## The docs

| Doc | What it holds | Fill when |
|---|---|---|
| [MASTER_PLAN.md](MASTER_PLAN.md) | What we are building, why, who for | First |
| [IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md) | How we build it, stack, order | Second |
| [DESIGN_GUIDELINES.md](DESIGN_GUIDELINES.md) | Look and feel: colors, fonts, spacing, components | Second |
| [USER_JOURNEYS.md](USER_JOURNEYS.md) | What each user does, step by step | Second |
| [TASKS.md](TASKS.md) | The running build list | Third, then ongoing |
| [RULES.md](RULES.md) | How the agent behaves every session | Set once, refine over time |
| [DECISIONS.md](DECISIONS.md) | Why we chose what we chose (so we don't re-argue it) | Ongoing |
| [LEARNINGS.md](LEARNINGS.md) | What worked, what didn't, what to change | Ongoing (self-improvement) |
| [CHANGELOG.md](CHANGELOG.md) | What changed each session | Ongoing |

## Two loops

**1. The work loop (every session)** — get oriented from the docs, pick up the next meaningful work (batch freely, take initiative), update state, report what changed and how to test it. Full detail in `RULES.md`.

**2. The improve loop (the project gets better at itself)** — the agent doesn't just build the product, it improves the plan. When a rule proves wrong, an estimate is off, or the same friction shows up twice, it writes it in `LEARNINGS.md` and updates the doc that was wrong. Every few sessions, it reviews `LEARNINGS.md` and folds the lessons back into `RULES.md` and the plans. The docs are living; they should get sharper as the project goes.

## Start a new project

1. Copy this folder to the project (e.g. as `docs/`).
2. Fill `MASTER_PLAN.md` — you cannot plan what you cannot name.
3. Fill `IMPLEMENTATION_PLAN.md`, `DESIGN_GUIDELINES.md`, `USER_JOURNEYS.md`.
4. Seed `TASKS.md` from the implementation plan.
5. Tell the agent: **"read the docs and proceed with the next task."**
