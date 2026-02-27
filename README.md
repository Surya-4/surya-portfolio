# Surya Vamsi — Portfolio

> Personal portfolio built with **Angular 17+** (standalone components), SCSS, and a particle canvas background.

---

## 🚀 Quick Start

### Prerequisites
| Tool | Version |
|------|---------|
| Node.js | **18.x or 20.x** (LTS recommended) |
| npm | 9+ (comes with Node) |
| Angular CLI | 17+ |

---

### 1 — Install Node.js
Download from https://nodejs.org and choose the **LTS** version.

Verify:
```bash
node -v   # should print v18.x or v20.x
npm -v    # should print 9.x or 10.x
```

---

### 2 — Install Angular CLI globally
```bash
npm install -g @angular/cli
```

Verify:
```bash
ng version
```

---

### 3 — Clone & install dependencies
```bash
# Clone your repo
git clone https://github.com/<your-username>/surya-vamsi-portfolio.git
cd surya-vamsi-portfolio

# Install all packages
npm install
```

---

### 4 — Run in development
```bash
npm start
# or
ng serve
```
Open **http://localhost:4200** in your browser.  
The app hot-reloads on every file save.

---

### 5 — Build for production
```bash
npm run build:prod
# or
ng build --configuration production
```
Output goes to `dist/portfolio/browser/`.  
Upload the contents of that folder to any static host.

---

## 🌐 Deploy to GitHub Pages (free)

```bash
# 1. Install the GitHub Pages deploy package
npm install -g angular-cli-ghpages

# 2. Build with base-href set to your repo name
ng build --configuration production --base-href "https://<your-username>.github.io/<repo-name>/"

# 3. Deploy
npx angular-cli-ghpages --dir=dist/portfolio/browser
```

---

## 📁 Project Structure

```
src/
├── index.html                      # Root HTML (Google Fonts loaded here)
├── main.ts                         # Bootstrap entry point
├── styles/
│   └── global.scss                 # CSS variables, resets, shared utilities
└── app/
    ├── app.component.ts            # Root component — assembles all sections + particle canvas
    ├── app.config.ts               # Angular providers (router, animations)
    ├── models/
    │   └── portfolio.model.ts      # TypeScript interfaces for all data
    ├── services/
    │   ├── portfolio-data.service.ts   # ← EDIT YOUR CONTENT HERE
    │   └── scroll-reveal.service.ts   # IntersectionObserver scroll animations
    └── components/
        ├── navbar/                 # Fixed top nav with scroll-shrink
        ├── hero/                   # Full-screen landing with stats
        ├── about/                  # Bio + details grid + floating badge
        ├── skills/                 # 3-col skill cards
        ├── experience/             # Vertical timeline
        ├── projects/               # 3-col project cards with hover links
        ├── achievements/           # Icon + text achievement cards
        ├── contact/                # Contact links section
        └── footer/                 # Copyright bar
```

---

## ✏️ Customising Content

All your portfolio data lives in **one file**:

```
src/app/services/portfolio-data.service.ts
```

Edit the arrays inside that service to update:
- `navLinks` — navigation items
- `heroStats` — the 4 numbers on the landing
- `aboutDetails` — key/value pairs in the about section
- `skillCategories` — skill cards with icons and tags
- `experiences` — work history timeline
- `projects` — project cards (add `live: 'https://...'` for a live demo link)
- `achievements` — achievement cards

**No other files need to change** for content updates.

---

## 🎨 Customising Styles

Global CSS variables are in `src/styles/global.scss` under `:root { }`.

Key variables:
```scss
--accent:     #4f8ef7;   /* change this to change the whole colour theme */
--bg:         #080b12;   /* page background */
--font-display: 'Bebas Neue', sans-serif;  /* big display font */
--font-body:    'Outfit', sans-serif;       /* body text font */
```

Each component has its own `.scss` file for component-specific styles.

---

## 📦 Packages Used

| Package | Purpose |
|---------|---------|
| `@angular/core` `@angular/common` etc. | Angular 17 framework |
| `@angular/animations` | Animation support |
| `@angular/router` | Router (used for hash-based scroll) |
| `zone.js` | Angular change detection |
| `rxjs` | Reactive utilities |

No third-party UI libraries — everything is hand-crafted CSS/SCSS.

---

## 🔧 Common Commands

```bash
npm start                      # Dev server at localhost:4200
npm run build                  # Production build
ng generate component <name>   # Create a new component
ng generate service <name>     # Create a new service
```

---

## 📄 License

MIT — feel free to fork and adapt for your own portfolio.
