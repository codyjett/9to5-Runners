(() => {
  const analyticsSrc = "https://cdn.vercel-insights.com/v1/script.js";
  const scripts = [...document.querySelectorAll(`script[src="${analyticsSrc}"]`)];
  scripts.slice(1).forEach((script) => script.remove());
  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
})();
