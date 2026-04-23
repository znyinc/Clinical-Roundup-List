const state = {
  route: 'dashboard',
  loading: false,
  practitioners: [],
  availability: [],
  bomItems: [],
  schedules: [],
  routes: [],
  forecasts: [],
  recommendations: []
};

const listeners = new Set();

export function getState() {
  return state;
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
  listeners.forEach((listener) => listener(state));
}
