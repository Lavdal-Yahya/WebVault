/* ============================================
   DOM Elements
   ============================================ */
const grid = document.getElementById("grid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const noResults = document.getElementById("noResults");
const themeToggle = document.getElementById("themeToggle");

/* ============================================
   State
   ============================================ */
let websites = [];
let activeCategory = "All";

/* ============================================
   Load Data from JSON
   ============================================ */
async function loadSites() {
  try {
    const res = await fetch("sites.json");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    websites = await res.json();
  } catch (err) {
    console.error("Failed to load sites.json:", err);
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--text-secondary);">⚠️ Could not load website data. Make sure <code>sites.json</code> exists.</p>`;
    return false;
  }
  return true;
}

/* ============================================
   Helpers
   ============================================ */
function getCategories() {
  const cats = [...new Set(websites.map((w) => w.category))];
  cats.sort();
  return ["All", ...cats];
}

function createCard(site, index) {
  const card = document.createElement("article");
  card.className = "card";
  card.style.animationDelay = `${index * 0.04}s`;
  card.innerHTML = `
    <div class="card-header">
      <div class="card-icon">${site.icon}</div>
      <span class="card-title">${site.name}</span>
    </div>
    <p class="card-desc">${site.desc}</p>
    <div class="card-tags">
      ${site.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
    </div>
    <a class="card-link" href="${site.url}" target="_blank" rel="noopener noreferrer">
      Visit site
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
    </a>
  `;
  return card;
}

/* ============================================
   Render
   ============================================ */
function render() {
  const query = searchInput.value.toLowerCase().trim();

  const filtered = websites.filter((site) => {
    const matchesCategory = activeCategory === "All" || site.category === activeCategory;
    const matchesSearch =
      !query ||
      site.name.toLowerCase().includes(query) ||
      site.desc.toLowerCase().includes(query) ||
      site.category.toLowerCase().includes(query) ||
      site.tags.some((t) => t.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  grid.innerHTML = "";
  filtered.forEach((site, i) => grid.appendChild(createCard(site, i)));

  noResults.classList.toggle("visible", filtered.length === 0);
}

/* ============================================
   Category Pills
   ============================================ */
function renderPills() {
  categoryFilter.innerHTML = "";
  getCategories().forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = `pill${cat === activeCategory ? " active" : ""}`;
    btn.textContent = cat;
    btn.addEventListener("click", () => {
      activeCategory = cat;
      renderPills();
      render();
    });
    categoryFilter.appendChild(btn);
  });
}

/* ============================================
   Dark Mode
   ============================================ */
function applyTheme(dark) {
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  themeToggle.textContent = dark ? "☀️" : "🌙";
  localStorage.setItem("theme", dark ? "dark" : "light");
}

function initTheme() {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(saved ? saved === "dark" : prefersDark);
}

themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  applyTheme(!isDark);
});

/* ============================================
   Events
   ============================================ */
searchInput.addEventListener("input", render);

/* ============================================
   Init
   ============================================ */
async function init() {
  initTheme();
  const loaded = await loadSites();
  if (loaded) {
    renderPills();
    render();
  }
}

init();
