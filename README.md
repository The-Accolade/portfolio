# Akolade Olusola — Portfolio

Personal portfolio site for **Akolade Olusola**, Senior Frontend Engineer and Technical Educator based in Lagos, Nigeria.

Built with React 19 and Vite, featuring a responsive layout, dark/light theme, scroll-reveal animations, and a projects section synced from GitHub and Netlify.

## Live Demo

Deploy via [Netlify](https://app.netlify.com/teams/the-accolade/projects) (team: `the-accolade`).

## Features

- **Modern stack** — React 19, Vite 6, CSS custom properties
- **Dark / light mode** — persisted in `localStorage`
- **Accessible** — semantic HTML, skip link, ARIA labels, form labels, reduced-motion support
- **Responsive navigation** — desktop nav + full-screen mobile overlay
- **Scroll spy** — active section highlighting via Intersection Observer
- **Projects auto-sync** — fetches repos from [The-Accolade](https://github.com/The-Accolade) and probes live Netlify demos before each build
- **Centralized content** — profile data in one file for easy updates

## Sections

| Section    | Description                                              |
| ---------- | -------------------------------------------------------- |
| Hero       | Intro, typewriter roles, CTA, social links               |
| About      | Career summary, education, stats, key achievements       |
| Experience | Engineering and teaching timelines                     |
| Projects   | GitHub repos with live Netlify demo links                |
| Skills     | Technical, educational, and soft skills                  |
| Contact    | Contact info cards and message form                      |

## Tech Stack

- [React 19](https://react.dev/)
- [Vite 6](https://vite.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)
- CSS Grid & Flexbox (no UI framework)
- Deployed on [Netlify](https://www.netlify.com/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/) (recommended) or npm

### Install

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173).

### Production build

```bash
pnpm build
```

Output is written to `dist/`. The `prebuild` step automatically refreshes project data from GitHub.

### Preview production build

```bash
pnpm preview
```

## Scripts

| Command              | Description                                      |
| -------------------- | ------------------------------------------------ |
| `pnpm dev`           | Start Vite dev server                            |
| `pnpm build`         | Fetch projects + build for production            |
| `pnpm preview`       | Serve the production build locally               |
| `pnpm fetch-projects`| Regenerate GitHub/Netlify project data only      |

## Customization

### Profile content

Edit `src/data/profile.js` to update:

- Name, title, contact details, and social links
- Career summary and education
- Experience timelines
- Skills and achievements

### Projects

Projects are auto-generated into `src/data/projects.generated.js` by:

```bash
pnpm fetch-projects
```

The script (`scripts/fetch-projects.mjs`):

1. Fetches public repos from `The-Accolade` on GitHub
2. Probes matching `{repo-name}.netlify.app` URLs
3. Filters out tutorial/challenge repos and squatted generic names
4. Outputs the top 12 featured projects (live demos first)

To change the GitHub user or Netlify team, edit the constants at the top of `scripts/fetch-projects.mjs`.

### Theme & styles

Global design tokens live in `src/App.css` (`:root` and `[data-theme='light']`). Component-specific styles are co-located with each component.

### Images

Replace assets in `src/assets/images/`:

- `Hero-img.png` — hero portrait
- `about-img.png` — about section photo

## Project Structure

```
portfolio-master/
├── public/                  # Static assets (favicon, manifest)
├── scripts/
│   └── fetch-projects.mjs   # GitHub + Netlify project sync
├── src/
│   ├── components/
│   │   ├── header/          # Nav, theme toggle, mobile menu
│   │   ├── hero/
│   │   ├── about/
│   │   ├── education/       # Experience timelines
│   │   ├── projects/
│   │   ├── skills/
│   │   ├── contact/
│   │   ├── footer/
│   │   └── Reveal.jsx       # Scroll-reveal wrapper
│   ├── data/
│   │   ├── profile.js       # Editable profile content
│   │   └── projects.generated.js
│   ├── hooks/
│   │   ├── useTheme.js
│   │   ├── useScrollSpy.js
│   │   └── useTypewriter.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── netlify.toml
└── vite.config.js
```

## Deployment

Configured for Netlify in `netlify.toml`:

```toml
[build]
  command = "pnpm run build"
  publish = "dist"
```

SPA redirects are included so client-side routing works correctly.

## Contact

**Akolade Olusola**  
Lagos, Nigeria  
📧 [olusolaakolade@gmail.com](mailto:olusolaakolade@gmail.com)  
📱 +234 806 809 9457  
🔗 [LinkedIn](https://www.linkedin.com/in/akolade-olusola/) · [GitHub](https://github.com/The-Accolade)

## License

Private — all rights reserved.
