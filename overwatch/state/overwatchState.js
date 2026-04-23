const state = {
  route: 'dashboard',
  loading: false,
  practitioners: [],
  availability: [],
  bomItems: [],
  schedules: [],
  routes: [],
  forecasts: [],
  recommendations: [],
  lastError: null
};

const listeners = new Set();

export function getState() {
  return cloneState(state);
}

export function setRoute(route) {
  state.route = route;
  notify();
}

export function setLoading(loading) {
  state.loading = loading;
  notify();
}

export function patchState(patch) {
  Object.assign(state, patch);
  notify();
}

export function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function notify() {
  const snapshot = getState();
  listeners.forEach((listener) => listener(snapshot));
}

function cloneState(value) {
  if (typeof structuredClone === 'function') {
    return structuredClone(value);
  }
  return JSON.parse(JSON.stringify(value));
}
