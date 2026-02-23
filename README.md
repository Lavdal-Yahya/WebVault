# 🌐 WebVault — The Best of the Internet

A curated, open-source collection of the finest websites and online tools across dozens of categories — from anime and gaming to AI tools and developer resources.

**🔗 [Visit the live site](https://YOUR_USERNAME.github.io/web-index/)**

![Light Mode](https://img.shields.io/badge/theme-light-yellow?style=flat-square)
![Dark Mode](https://img.shields.io/badge/theme-dark-blueviolet?style=flat-square)
![GitHub Pages](https://img.shields.io/badge/hosted_on-GitHub_Pages-222?style=flat-square&logo=github)

---

## ✨ Features

- 🔍 **Instant search** — filter by name, description, category, or tags
- 🏷️ **Category filter pills** — browse by topic with one click
- 🌙 **Dark / Light mode** — auto-detects your system preference, toggleable, and persisted
- 📱 **Fully responsive** — works great on desktop, tablet, and mobile
- ⚡ **No build step** — pure HTML, CSS, and vanilla JS
- 📄 **JSON-powered** — all website data lives in a single `sites.json` file that's easy to edit

---

## 📁 Project Structure

```
web-index/
├── index.html      # Page structure
├── style.css       # All styling & theming
├── app.js          # Fetch data, render cards, search, filtering, dark mode
├── sites.json      # 📌 All website data — this is what you edit!
└── README.md
```

---

## 🚀 Running Locally

No dependencies, no build tools — just open the files with a local server:

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/web-index.git
cd web-index

# Serve with any static server (pick one)
python3 -m http.server 8080
# or
npx serve .
```

Then open [http://localhost:8080](http://localhost:8080) in your browser.

> **Note:** Opening `index.html` directly as a file won't work because `fetch()` requires HTTP. Use any local server.

---

## 🤝 Contributing

Contributions are welcome! The easiest way to help is by **adding new websites** to the collection.

### Adding a Website

1. **Fork** this repository
2. Open `sites.json`
3. Add a new entry anywhere in the JSON array:

   ```json
   {
     "name": "Website Name",
     "url": "https://example.com",
     "icon": "🌐",
     "desc": "A short one-sentence description of the website.",
     "category": "Category Name",
     "tags": ["tag1", "tag2", "tag3"]
   }
   ```

4. **Commit** your changes and open a **Pull Request**

### Entry Fields

| Field      | Type       | Description                                         |
|------------|------------|-----------------------------------------------------|
| `name`     | `string`   | Display name of the website                         |
| `url`      | `string`   | Full URL (including `https://`)                     |
| `icon`     | `string`   | A single emoji that represents the site             |
| `desc`     | `string`   | A concise one-sentence description                  |
| `category` | `string`   | The category it belongs to (see list below)         |
| `tags`     | `string[]` | 2–4 short keywords for filtering and discovery      |

### Current Categories

- Anime & Manga
- Movies & TV
- Football & Sports
- Gaming Stores
- Photo & Video Editing
- AI & Content Generation
- Developer Tools
- Productivity
- Music & Audio
- Learning & Education
- Privacy & Security

> 💡 **Want to add a new category?** Just use a new `category` string in your entry — it will automatically appear as a filter pill on the site. No code changes needed!

### Guidelines

- ✅ Only add **legitimate, well-known, or genuinely useful** websites
- ✅ Write clear, concise descriptions (one sentence)
- ✅ Use an emoji that visually represents the site
- ✅ Make sure the URL is correct and uses HTTPS when available
- ❌ No duplicate entries
- ❌ No NSFW, illegal, or malicious websites
- ❌ No affiliate or referral links

### Other Contributions

Beyond adding sites, you can also help with:

- 🐛 **Bug fixes** — found something broken? Open an issue or PR
- 🎨 **UI/UX improvements** — better design, accessibility, animations
- ✨ **New features** — ideas are welcome! Open an issue to discuss first

---

## 🛠️ Deployment (GitHub Pages)

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch** → `main` → `/ (root)`
4. Your site will be live at `https://YOUR_USERNAME.github.io/web-index/`

Every time you push changes to `sites.json`, the site updates automatically.

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ by the community</p>
