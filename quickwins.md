# Quick Wins

## AI quick wins from existing scaffold

Based on the existing Azure/M365 integration scaffold in `azure-integration.js` and the documented backlog in `AI_AUGMENTATION_OPTIONS.md`, the highest-value low-effort AI features to park for near-term implementation are:

1. **AI-powered one-line rounding summary**
   - Inputs already exist: `findingsText`, `plan`, `pending`, `followUp`, `priority`
   - Lowest implementation friction because it produces a derived summary only
   - Best fit for patient cards, handoff, and exports

2. **Missing-data copilot before save/import**
   - Can flag incomplete or inconsistent records before persistence
   - Combines simple rules with optional AI suggestions
   - Strong fit with existing import preview and duplicate-detection workflow

3. **Smart handoff / risk prioritization**
   - Can rank patients using existing structured fields like `priority`, `pending`, and `procedureStatus`
   - Can start rules-first, then add AI-generated rationale
   - High visible value during rounds and shift handoff

## Why these are low-hanging fruit

The scaffold already exposes the key source fields in `window.savePatient`:
- `findingsText`
- `plan`
- `pending`
- `followUp`
- `priority`
- `procedureStatus`

The repo also already includes:
- Azure Functions under `api/`
- Existing export workflow in `api/export/index.js`
- M365/Azure auth and data sync scaffold in `azure-integration.js`
- Existing AI idea backlog in `AI_AUGMENTATION_OPTIONS.md`

## Recommended implementation order

1. One-line rounding summary
2. Missing-data copilot
3. Smart handoff prioritization

## Notes

Avoid starting with RAG, semantic search, coding suggestions, voice capture, or predictive models first. Those are higher-risk and require more infrastructure, validation, and compliance review.

This file is intended only as a parked quick-wins note.