# Overwatch Data Models

These models are scaffolded in `/overwatch/models/overwatchModels.js` as plain JS objects for framework-agnostic use.

## Core Entities

### PractitionerCard
- `id`
- `name`
- `specialties[]`
- `credentials[]`
- `homeSite`
- `availabilityWindows[]`
- `capacityPerShift`

### AvailabilityBlock
- `id`
- `practitionerId`
- `siteId`
- `startAt`
- `endAt`
- `status` (`available|reserved|blocked`)

### BOMItem
- `id`
- `siteId`
- `sku`
- `description`
- `onHand`
- `reserved`
- `safetyStock`

### SchedulingDemand
- `id`
- `patientId`
- `siteId`
- `procedureType`
- `requiredSkills[]`
- `requiredBOM[]`
- `targetWindow`
- `priority`

### RoutePlan
- `id`
- `practitionerId`
- `date`
- `stops[]`
- `travelMinutes`
- `feasibility`

### ForecastPoint
- `id`
- `siteId`
- `date`
- `demand`
- `capacity`
- `confidenceLow`
- `confidenceHigh`

### Recommendation
- `id`
- `kind`
- `subjectId`
- `score`
- `reasons[]`
- `constraintResults[]`
- `createdAt`

## Model Relationship Notes
- `SchedulingDemand.requiredBOM[]` references BOM stock checks before slot assignment.
- `RoutePlan.stops[]` links scheduled assignments in sequence.
- `Recommendation` wraps decision outputs with explainability metadata.

## Initial Persistence Approach
- In-memory/mock adapter first
- API-backed DTO parity maintained via contract objects in `/overwatch/contracts`
