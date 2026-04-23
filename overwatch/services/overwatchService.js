import { API_CONTRACTS } from '../contracts/overwatchContracts.js';

function createMockAdapter() {
  return {
    async request(contract) {
      return {
        data: {
          contract,
          placeholder: true
        },
        meta: {
          generatedAt: new Date().toISOString()
        },
        errors: []
      };
    }
  };
}

export function createOverwatchService(adapter = createMockAdapter()) {
  function toPayloadObject(payload) {
    return payload && typeof payload === 'object' && !Array.isArray(payload) ? payload : {};
  }

  return {
    async getPractitioners() {
      return adapter.request(API_CONTRACTS.practitioners);
    },
    async getAvailability() {
      return adapter.request(API_CONTRACTS.availability);
    },
    async getBOM() {
      return adapter.request(API_CONTRACTS.bom);
    },
    async solveScheduling(payload = {}) {
      return adapter.request({ ...API_CONTRACTS.schedulingSolve, payload: toPayloadObject(payload) });
    },
    async solveRouting(payload = {}) {
      return adapter.request({ ...API_CONTRACTS.routingSolve, payload: toPayloadObject(payload) });
    },
    async getForecasting() {
      return adapter.request(API_CONTRACTS.forecasting);
    },
    async getExplainability(payload = {}) {
      return adapter.request({ ...API_CONTRACTS.explainability, payload: toPayloadObject(payload) });
    }
  };
}
