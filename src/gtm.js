export function pushToDataLayer(eventData) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(eventData);
}
