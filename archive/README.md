# Vena Vitals Website — Project Docs

This folder is the **single source of truth** for building the Vena Vitals website with an AI coding agent. Read these in order, keep them current, and drive the build from `TASKS.md`.

## The docs (read in this order)

| # | Doc | What it answers |
|---|---|---|
| 1 | [MASTER_PLAN.md](MASTER_PLAN.md) | What we are building, why, and who it is for. |
| 2 | [IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md) | How we build it, and in what order. |
| 3 | [DESIGN_GUIDELINES.md](DESIGN_GUIDELINES.md) | Exactly how it looks: colors, fonts, spacing, waveform, CSS. |
| 4 | [USER_JOURNEYS.md](USER_JOURNEYS.md) | What each visitor does, step by step. |
| 5 | [CONTENT.md](CONTENT.md) | The actual copy for every page and section, with asset links. |
| 6 | [ASSETS.md](ASSETS.md) | Master list of every media file (Google Drive) + gaps still needed. |
| 7 | [TASKS.md](TASKS.md) | The running checklist the agent works through. |
| 8 | [RULES.md](RULES.md) | How the agent should behave every session. |

## How the loop works

1. Start a session. The agent reads the docs to get oriented.
2. You say: **"proceed with the next task"** or just **"keep going."**
3. The agent picks up the next meaningful work (`TASKS.md` is the guide — it can reorder, combine, or add), and is free to innovate within `RULES.md`.
4. It updates the docs/tasks, then reports **what it changed and how to test it**.
5. As the project shifts, the docs get updated so they stay true.

When building a page, the agent pulls **copy + assets from `CONTENT.md`** (and `ASSETS.md` for the Drive links), and the **look from `DESIGN_GUIDELINES.md`**.

## Background / planning (reference only)

The deeper research and planning lives one level up (`../01`–`../10` and `../brand_assets/`). These docs distill what the build agent needs; the planning docs are the why behind them.

