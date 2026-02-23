/* ============================================
   Website Data
   ============================================ */
const websites = [
  // ── Anime & Manga ──
  { name: "Crunchyroll", url: "https://www.crunchyroll.com", icon: "🎌", desc: "The world's largest anime streaming service with simulcasts and a massive library.", category: "Anime & Manga", tags: ["streaming", "anime", "simulcast"] },
  { name: "MyAnimeList", url: "https://myanimelist.net", icon: "📋", desc: "The go-to database for tracking and discovering anime and manga titles.", category: "Anime & Manga", tags: ["database", "tracking", "community"] },
  { name: "AniList", url: "https://anilist.co", icon: "📊", desc: "A modern anime and manga tracking platform with a beautiful interface.", category: "Anime & Manga", tags: ["tracking", "social", "modern"] },
  { name: "Mangadex", url: "https://mangadex.org", icon: "📖", desc: "A free manga reader with a huge library of fan-translated manga.", category: "Anime & Manga", tags: ["manga", "reader", "free"] },

  // ── Movies & TV ──
  { name: "IMDb", url: "https://www.imdb.com", icon: "🎬", desc: "The internet's most comprehensive movie and TV database with ratings and reviews.", category: "Movies & TV", tags: ["database", "reviews", "ratings"] },
  { name: "Letterboxd", url: "https://letterboxd.com", icon: "🎞️", desc: "A social platform for film lovers to log, rate, and review movies.", category: "Movies & TV", tags: ["social", "reviews", "logging"] },
  { name: "JustWatch", url: "https://www.justwatch.com", icon: "📺", desc: "Find where to stream any movie or TV show across all platforms.", category: "Movies & TV", tags: ["streaming guide", "search", "availability"] },
  { name: "Trakt", url: "https://trakt.tv", icon: "📡", desc: "Automatically track what you're watching across multiple devices and services.", category: "Movies & TV", tags: ["tracking", "automation", "stats"] },

  // ── Football & Sports ──
  { name: "ESPN", url: "https://www.espn.com", icon: "🏟️", desc: "Comprehensive sports coverage including scores, news, and live streaming.", category: "Football & Sports", tags: ["news", "scores", "live"] },
  { name: "Transfermarkt", url: "https://www.transfermarkt.com", icon: "⚽", desc: "The ultimate football transfer and player market value database.", category: "Football & Sports", tags: ["football", "transfers", "data"] },
  { name: "FotMob", url: "https://www.fotmob.com", icon: "📱", desc: "Real-time football scores, stats, and match data from leagues worldwide.", category: "Football & Sports", tags: ["live scores", "stats", "football"] },
  { name: "The Athletic", url: "https://theathletic.com", icon: "📰", desc: "Premium, ad-free sports journalism and in-depth analysis.", category: "Football & Sports", tags: ["journalism", "analysis", "premium"] },

  // ── Gaming Stores ──
  { name: "Steam", url: "https://store.steampowered.com", icon: "🎮", desc: "The largest digital distribution platform for PC gaming.", category: "Gaming Stores", tags: ["PC", "store", "community"] },
  { name: "Epic Games Store", url: "https://store.epicgames.com", icon: "🕹️", desc: "Digital game store with weekly free games and exclusive titles.", category: "Gaming Stores", tags: ["free games", "exclusives", "PC"] },
  { name: "GOG", url: "https://www.gog.com", icon: "💿", desc: "DRM-free game store specializing in classic and indie titles.", category: "Gaming Stores", tags: ["DRM-free", "classics", "indie"] },
  { name: "IsThereAnyDeal", url: "https://isthereanydeal.com", icon: "💰", desc: "Compare game prices across dozens of legitimate stores.", category: "Gaming Stores", tags: ["deals", "price comparison", "alerts"] },
  { name: "Humble Bundle", url: "https://www.humblebundle.com", icon: "🎁", desc: "Pay what you want for game bundles and support charity.", category: "Gaming Stores", tags: ["bundles", "charity", "deals"] },

  // ── Photo & Video Editing ──
  { name: "Figma", url: "https://www.figma.com", icon: "🎨", desc: "Collaborative design tool for UI/UX, prototyping, and graphic design.", category: "Photo & Video Editing", tags: ["design", "collaboration", "UI/UX"] },
  { name: "Canva", url: "https://www.canva.com", icon: "🖼️", desc: "Easy-to-use design platform with templates for any visual content.", category: "Photo & Video Editing", tags: ["templates", "social media", "easy"] },
  { name: "Photopea", url: "https://www.photopea.com", icon: "🖌️", desc: "Free, browser-based Photoshop alternative with PSD support.", category: "Photo & Video Editing", tags: ["free", "browser", "PSD"] },
  { name: "DaVinci Resolve", url: "https://www.blackmagicdesign.com/products/davinciresolve", icon: "🎥", desc: "Professional-grade video editing, color grading, and VFX — free tier available.", category: "Photo & Video Editing", tags: ["video editing", "color grading", "professional"] },
  { name: "Remove.bg", url: "https://www.remove.bg", icon: "✂️", desc: "Instantly remove image backgrounds with AI in seconds.", category: "Photo & Video Editing", tags: ["AI", "background removal", "quick"] },

  // ── AI & Content Generation ──
  { name: "ChatGPT", url: "https://chat.openai.com", icon: "🤖", desc: "OpenAI's powerful conversational AI for writing, coding, and brainstorming.", category: "AI & Content Generation", tags: ["chatbot", "writing", "coding"] },
  { name: "Midjourney", url: "https://www.midjourney.com", icon: "🖼️", desc: "AI art generator that creates stunning images from text prompts.", category: "AI & Content Generation", tags: ["art", "images", "text-to-image"] },
  { name: "Claude", url: "https://claude.ai", icon: "💬", desc: "Anthropic's helpful, harmless AI assistant for analysis and writing.", category: "AI & Content Generation", tags: ["assistant", "analysis", "writing"] },
  { name: "ElevenLabs", url: "https://elevenlabs.io", icon: "🔊", desc: "AI voice generation and cloning with incredibly realistic results.", category: "AI & Content Generation", tags: ["voice", "TTS", "cloning"] },
  { name: "Runway", url: "https://runwayml.com", icon: "🎬", desc: "AI-powered creative tools for video generation and editing.", category: "AI & Content Generation", tags: ["video", "generative AI", "creative"] },

  // ── Developer Tools ──
  { name: "GitHub", url: "https://github.com", icon: "🐙", desc: "The world's leading platform for version control and collaborative development.", category: "Developer Tools", tags: ["git", "open source", "collaboration"] },
  { name: "Stack Overflow", url: "https://stackoverflow.com", icon: "📚", desc: "The largest Q&A community for programmers and developers.", category: "Developer Tools", tags: ["Q&A", "community", "debugging"] },
  { name: "CodePen", url: "https://codepen.io", icon: "✏️", desc: "Social development environment for front-end designers and developers.", category: "Developer Tools", tags: ["playground", "front-end", "sharing"] },
  { name: "Vercel", url: "https://vercel.com", icon: "▲", desc: "Deploy web projects instantly with automatic CI/CD and edge functions.", category: "Developer Tools", tags: ["hosting", "deployment", "serverless"] },
  { name: "DevDocs", url: "https://devdocs.io", icon: "📖", desc: "Unified API documentation browser with offline support.", category: "Developer Tools", tags: ["docs", "API", "offline"] },

  // ── Productivity ──
  { name: "Notion", url: "https://www.notion.so", icon: "📝", desc: "All-in-one workspace for notes, docs, wikis, and project management.", category: "Productivity", tags: ["notes", "wiki", "project management"] },
  { name: "Obsidian", url: "https://obsidian.md", icon: "💎", desc: "A powerful knowledge base using local Markdown files and graph views.", category: "Productivity", tags: ["notes", "markdown", "local-first"] },
  { name: "Todoist", url: "https://todoist.com", icon: "✅", desc: "Elegant task manager to organize work and life effortlessly.", category: "Productivity", tags: ["tasks", "GTD", "organization"] },
  { name: "Excalidraw", url: "https://excalidraw.com", icon: "🎯", desc: "Virtual whiteboard for sketching diagrams with a hand-drawn feel.", category: "Productivity", tags: ["whiteboard", "diagrams", "collaboration"] },

  // ── Music & Audio ──
  { name: "Spotify", url: "https://www.spotify.com", icon: "🎵", desc: "Leading music streaming service with millions of songs and podcasts.", category: "Music & Audio", tags: ["streaming", "playlists", "podcasts"] },
  { name: "SoundCloud", url: "https://soundcloud.com", icon: "🔉", desc: "Platform for independent artists to share and discover music.", category: "Music & Audio", tags: ["indie", "upload", "discover"] },
  { name: "Bandcamp", url: "https://bandcamp.com", icon: "💿", desc: "Support artists directly by buying their music and merch.", category: "Music & Audio", tags: ["indie", "buy music", "support artists"] },

  // ── Learning & Education ──
  { name: "Khan Academy", url: "https://www.khanacademy.org", icon: "🎓", desc: "Free world-class education on math, science, and much more.", category: "Learning & Education", tags: ["free", "courses", "K-12"] },
  { name: "Coursera", url: "https://www.coursera.org", icon: "🏫", desc: "Online courses from top universities and companies worldwide.", category: "Learning & Education", tags: ["courses", "certificates", "university"] },
  { name: "freeCodeCamp", url: "https://www.freecodecamp.org", icon: "💻", desc: "Learn to code for free with interactive lessons and certifications.", category: "Learning & Education", tags: ["coding", "free", "certifications"] },

  // ── Privacy & Security ──
  { name: "Bitwarden", url: "https://bitwarden.com", icon: "🔐", desc: "Open-source password manager for individuals and teams.", category: "Privacy & Security", tags: ["passwords", "open source", "encryption"] },
  { name: "PrivacyGuides", url: "https://www.privacyguides.org", icon: "🛡️", desc: "Recommendations for privacy-respecting tools and services.", category: "Privacy & Security", tags: ["guides", "privacy", "recommendations"] },
  { name: "Have I Been Pwned", url: "https://haveibeenpwned.com", icon: "🔍", desc: "Check if your email or phone has been in a data breach.", category: "Privacy & Security", tags: ["breach check", "security", "email"] },
];

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
let activeCategory = "All";

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
initTheme();
renderPills();
render();
