const routeTitles = {
  dashboard: 'Dashboard',
  practitioners: 'Practitioner Cards',
  availability: 'Availability',
  bom: 'BOM / OT Consumables',
  scheduling: 'Scheduling',
  routing: 'Routing',
  forecasting: 'Forecasting',
  explainability: 'Explainability / Recommendations'
};

export function renderPageShell(root, route, context = {}) {
  const title = routeTitles[route] || 'Overwatch';
  root.innerHTML = `
    <div class="space-y-3">
      <h2 class="text-base font-semibold">${title}</h2>
      <p class="text-sm text-slate-600">Scaffold placeholder for ${title.toLowerCase()}.</p>
      <pre class="text-xs bg-slate-100 rounded-lg p-3 overflow-auto">${escapeHtml(JSON.stringify(context, null, 2))}</pre>
    </div>
  `;
}

function escapeHtml(text) {
  if (text == null) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
