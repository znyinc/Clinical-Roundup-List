export const OVERWATCH_ROUTES = [
  'dashboard',
  'practitioners',
  'availability',
  'bom',
  'scheduling',
  'routing',
  'forecasting',
  'explainability'
];

export const HARD_CONSTRAINTS = [
  'CREDENTIAL_MATCH',
  'AVAILABILITY_NON_OVERLAP',
  'BOM_STOCK_SUFFICIENT',
  'ROUTE_TIME_WINDOW'
];

export const SOFT_SCORING_FACTORS = [
  'CARE_CONTINUITY',
  'TRAVEL_MINIMIZATION',
  'RESOURCE_UTILIZATION',
  'FAIRNESS'
];

export const API_CONTRACTS = {
  practitioners: { method: 'GET', path: '/api/overwatch/practitioners' },
  availability: { method: 'GET', path: '/api/overwatch/availability' },
  bom: { method: 'GET', path: '/api/overwatch/bom' },
  schedulingSolve: { method: 'POST', path: '/api/overwatch/scheduling/solve' },
  routingSolve: { method: 'POST', path: '/api/overwatch/routing/solve' },
  forecasting: { method: 'GET', path: '/api/overwatch/forecasting' },
  explainability: { method: 'POST', path: '/api/overwatch/explainability' }
};
