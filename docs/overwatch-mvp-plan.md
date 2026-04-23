# Overwatch MVP Delivery Plan

## Goal
Deliver an embedded Overwatch module incrementally without destabilizing the existing clinical rounding SPA.

## Phase 0 — Scaffold (current)
- isolated `/overwatch` module shell
- routes/page placeholders
- models/contracts/state/service boundaries
- mock adapter defaults

## Phase 1 — Practitioner + Availability
- practitioner card list/detail page
- availability timeline/day blocks
- basic create/update reservation flow
- hard constraint checks: overlap, role/credential fit

## Phase 2 — BOM + Scheduling
- BOM inventory board by site
- scheduling input form and solve API call
- BOM-aware assignment rejection and warning indicators
- soft scoring output (continuity/travel/utilization)

## Phase 3 — Routing + Forecasting
- route plan view with ordered stops and travel summaries
- forecast panel with demand/capacity bands
- cross-view consistency checks for schedule vs route feasibility

## Phase 4 — Explainability + Governance
- recommendation details panel
- score factor decomposition and constraint audit trail
- clinician-friendly reason codes and fallback alternatives

## Non-Goals for MVP
- full optimizer implementation inside frontend
- production-grade forecasting model training pipeline
- deep integration into existing clinical page tabs (deferred to controlled integration PR)

## Definition of Done (MVP)
- module routes render and load mock/service data
- contract objects used by service layer
- at least one end-to-end mocked recommendation flow with explainability output
- no regressions in existing clinical-rounding pages
