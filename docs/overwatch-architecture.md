# Overwatch Embedded SPA Architecture

## Context and Repository Fit
This repository currently uses a **single-page vanilla HTML + JavaScript** frontend (`clinical-rounding-adaptive.html`) with no `src/features` build pipeline. To stay non-breaking and convention-aligned, Overwatch is scaffolded as an **isolated vanilla module area** under `/overwatch` using browser-native ES modules.

This allows local continuation in VS Code without refactoring the existing production page.

## Embedded Module Strategy
- Host shell: existing clinical app (future: tab/route or iframe mount point)
- Embedded module: `/overwatch/index.html` + modular JS
- Integration boundary: service adapter contracts (mock/default now, API-backed later)
- State boundary: local store placeholder with route/state subscriptions

## Feature-First Domain Split
Overwatch scope is separated by domain concerns:
- practitioner cards
- availability
- BOM / OT consumables
- scheduling
- routing
- forecasting
- explainability/recommendations

Initial scaffold keeps one lightweight page-shell layer with route-specific render placeholders.

## Page Map and Route Proposal
Proposed routes (embedded):
- `/overwatch/#/dashboard`
- `/overwatch/#/practitioners`
- `/overwatch/#/availability`
- `/overwatch/#/bom`
- `/overwatch/#/scheduling`
- `/overwatch/#/routing`
- `/overwatch/#/forecasting`
- `/overwatch/#/explainability`

## Decision Engine Framing
### Hard constraints (must satisfy)
- practitioner credential / role fit
- shift and hospital coverage limits
- OT/BOM stock availability
- non-overlap / duty-hour safety
- route feasibility windows

### Soft scoring (optimize)
- continuity of care
- travel minimization
- OT utilization efficiency
- wait-time reduction
- preference and fairness balancing

## BOM-Aware Scheduling and Routing
Scheduling and routing should consume BOM/OT availability as first-class inputs:
- reserve consumables by planned slot
- reject infeasible plans via hard constraints
- score feasible plans using delay/reroute penalties

## Forecasting and Explainability
- Forecasting: baseline time-series + capacity demand bands by date/site/procedure bucket
- Explainability: each recommendation returns reason codes, constraint checks, and score breakdown to support clinician trust/auditability.
