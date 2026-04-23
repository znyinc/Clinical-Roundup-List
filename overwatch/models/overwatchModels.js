export function createPractitionerCard() {
  return {
    id: '',
    name: '',
    specialties: [],
    credentials: [],
    homeSite: '',
    availabilityWindows: [],
    capacityPerShift: 0
  };
}

export function createAvailabilityBlock() {
  return {
    id: '',
    practitionerId: '',
    siteId: '',
    startAt: '',
    endAt: '',
    status: 'available'
  };
}

export function createBOMItem() {
  return {
    id: '',
    siteId: '',
    sku: '',
    description: '',
    onHand: 0,
    reserved: 0,
    safetyStock: 0
  };
}

export function createSchedulingDemand() {
  return {
    id: '',
    patientId: '',
    siteId: '',
    procedureType: '',
    requiredSkills: [],
    requiredBOM: [],
    targetWindow: { startAt: '', endAt: '' },
    priority: 'routine'
  };
}

export function createRoutePlan() {
  return {
    id: '',
    practitionerId: '',
    date: '',
    stops: [],
    travelMinutes: 0,
    feasibility: 'unknown'
  };
}

export function createForecastPoint() {
  return {
    id: '',
    siteId: '',
    date: '',
    demand: 0,
    capacity: 0,
    confidenceLow: 0,
    confidenceHigh: 0
  };
}

export function createRecommendation() {
  return {
    id: '',
    kind: '',
    subjectId: '',
    score: 0,
    reasons: [],
    constraintResults: [],
    createdAt: ''
  };
}
