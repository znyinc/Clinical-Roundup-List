import { OVERWATCH_ROUTES } from './contracts/overwatchContracts.js';
import { renderPageShell } from './pages/pageShells.js';
import { createOverwatchService } from './services/overwatchService.js';
import { getState, patchState, setLoading, setRoute, subscribe } from './state/overwatchState.js';

const navRoot = document.getElementById('overwatch-nav');
const appRoot = document.getElementById('overwatch-app');
const service = createOverwatchService();

function getRouteFromHash() {
  const value = (window.location.hash || '#/dashboard').replace('#/', '');
  return OVERWATCH_ROUTES.includes(value) ? value : 'dashboard';
}

function applyRoute(route) {
  setRoute(route);
  window.location.hash = `#/${route}`;
}

function renderNav() {
  const currentRoute = getState().route;
  navRoot.innerHTML = OVERWATCH_ROUTES.map((route) => {
    const active = route === currentRoute;
    return `<button data-route="${route}" class="px-3 py-1.5 rounded-full text-xs font-semibold border ${active ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-slate-200'}">${route}</button>`;
  }).join('');
}

function render() {
  const state = getState();
  renderNav();
  renderPageShell(appRoot, state.route, {
    loading: state.loading,
    datasets: {
      practitioners: state.practitioners.length,
      availability: state.availability.length,
      bomItems: state.bomItems.length,
      schedules: state.schedules.length,
      routes: state.routes.length,
      forecasts: state.forecasts.length,
      recommendations: state.recommendations.length
    }
  });
}

async function bootstrapData() {
  setLoading(true);
  try {
    const [practitioners, availability, bomItems, forecasts] = await Promise.all([
      service.getPractitioners(),
      service.getAvailability(),
      service.getBOM(),
      service.getForecasting()
    ]);

    patchState({
      practitioners: practitioners?.data?.items || [],
      availability: availability?.data?.items || [],
      bomItems: bomItems?.data?.items || [],
      forecasts: forecasts?.data?.items || []
    });
  } finally {
    setLoading(false);
  }
}

navRoot.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const route = target.dataset.route;
  if (!route) return;
  applyRoute(route);
});

window.addEventListener('hashchange', () => applyRoute(getRouteFromHash()));
subscribe(render);

applyRoute(getRouteFromHash());
bootstrapData();
