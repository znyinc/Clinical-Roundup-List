# Overwatch API Contracts (Contract-First)

Contract source scaffold: `/overwatch/contracts/overwatchContracts.js`.

## Design Rules
- API contract-first with stable request/response envelopes
- hard constraint failures returned explicitly (not hidden in generic errors)
- explainability fields returned on all recommendation-style endpoints

## Proposed Endpoints

### Practitioner Cards
`GET /api/overwatch/practitioners`
- returns practitioner cards + current availability summary

### Availability
`GET /api/overwatch/availability?start=...&end=...&siteId=...`
`POST /api/overwatch/availability/reservations`
- validates overlap and credential constraints

### BOM / OT Consumables
`GET /api/overwatch/bom?siteId=...`
`POST /api/overwatch/bom/reservations`
- returns shortage flags and safety-stock warnings

### Scheduling
`POST /api/overwatch/scheduling/solve`
- input: demand, practitioners, availability, BOM
- output: feasible assignments + dropped items + constraint outcomes + score

### Routing
`POST /api/overwatch/routing/solve`
- input: assignments/stops and route constraints
- output: ordered route plan + travel metrics + feasibility notes

### Forecasting
`GET /api/overwatch/forecasting?siteId=...&horizonDays=...`
- output: daily demand/capacity with confidence bands

### Explainability
`POST /api/overwatch/explainability`
- input: recommendation id or decision payload
- output: reason codes, weighted score factors, constraints passed/failed

## Common Response Envelope
```json
{
  "data": {},
  "meta": {
    "traceId": "string",
    "generatedAt": "ISO-8601"
  },
  "errors": []
}
```

## Constraint Result Shape
```json
{
  "name": "BOM_STOCK_SUFFICIENT",
  "status": "pass|fail",
  "severity": "hard|soft",
  "detail": "Insufficient kit inventory at Site A"
}
```
