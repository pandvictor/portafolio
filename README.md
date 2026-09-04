# Portfolio — Victor Hernández

Trilingual (EN/ES/IT) developer portfolio built with React, TypeScript, Vite,
and MUI, animated with framer-motion.

**Live:** https://pandvictor.github.io/portafolio/

Almost everything you see — projects, resume, cover letter, section copy — is
data, not markup. One JSON file per language drives the whole site, and the CV
and cover letter PDFs are generated from those same files at download time, so
they can never drift out of sync with the pages.

---

## Requirements

| Tool | Version |
| --- | --- |
| Node.js | 20 or newer (CI runs 20; developed on 22) |
| npm | ships with Node |

Check yours:

```bash
node -v   # v20.x or higher
npm -v
```

---

## Getting started

**1. Clone and enter the project**

```bash
git clone https://github.com/pandvictor/portafolio.git
cd portafolio
```

**2. Install dependencies**

```bash
npm install
```

**3. Start the dev server**

```bash
npm run dev
```

Open the URL it prints — **http://localhost:5173/portafolio/**.

> The `/portafolio/` suffix matters. `base` is set to `/portafolio/` in
> [`vite.config.ts`](vite.config.ts) because the site is served from a GitHub
> Pages project path. Opening `http://localhost:5173/` alone will not load the
> app. See [Deploying elsewhere](#deploying-elsewhere) to change it.

**4. Check the production build before you push**

```bash
npm run build      # type-checks with tsc, then builds into dist/
npm run preview    # serves dist/ at http://localhost:4173/portafolio/
```

---

## npm scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | `tsc` type-check, then a production build into `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run deploy-github` | Build and publish `dist/` to the `gh-pages` branch |
| `npm run storybook` | Storybook on port 6006 |
| `npm run lint` | ESLint — **currently broken**, see [Known issues](#known-issues) |

---

## Where the content lives

```
public/assets/
├── translations/
│   ├── en.json          ← all English copy + resume data
│   ├── es.json          ← the same shape, in Spanish
│   └── it.json          ← the same shape, in Italian
└── images/
    ├── *.webp|png|svg   ← project artwork and company logos
    ├── flags/           ← flags for the language switcher
    └── icons/           ← tech-stack and contact icons
```

All translation files must have **the same keys**. If a key exists in one and
not the others, that string renders blank when the visitor switches language.

Copy is loaded through [`i18n-js`](https://github.com/fnando/i18n-js); the
active language lives in
[`LanguageContext`](src/context/LanguageContext.tsx) and defaults to English.

### Adding a language

1. Copy `en.json` to `public/assets/translations/<code>.json` and translate the
   values, keeping every key.
2. Add a flag SVG at `public/assets/images/flags/<code>.svg`.
3. Register it in `LANGUAGES` in
   [`constants/gloabals.ts`](src/constants/gloabals.ts) — the header switcher,
   the mobile drawer, and both CV pages read from that one list.
4. If the language needs localised dates, map its `date-fns` locale in
   [`ResumeWorkCard`](src/components/molecules/ResumeWorkCard.tsx) and
   [`ResumePrintPage`](src/components/pages/ResumePrintPage.tsx). Without it,
   `date-fns` silently falls back to English.

### Adding a job

Jobs live under `resume.work_history` and render on the resume page, the
generated CV, and — when `show_on_home` is not `false` — the home carousel.

```jsonc
{
  "start_date": "2026-03-01",     // ISO; drives the date range and tenure
  "end_date": "",                 // leave empty when is_current is true
  "is_current": true,
  "company": "Quinielas.live",
  "company_image": "logo.webp",   // optional; string or array, from images/
  "position": "Lead Full-Stack Engineer",
  "description": "One paragraph of context.",
  "tasks": ["Bullet one.", "Bullet two."],
  "achievements": [ /* projects — see below */ ],
  "home_order": 0,                // lower sorts first on the home page
  "show_on_home": true
}
```

### Adding a project

Projects are the `achievements` of a job and become the cards in **Selected
work**.

```jsonc
{
  "title": "World Cup 2026 Prediction Platform",
  "description": "One or two sentences. Shown on the card and in the dialog.",
  "image": "quinielas-live-hero.webp",   // optional; card artwork
  "url": "https://quinielas.live",        // optional; adds a "Live site" button
  "date": "2026-03-01",                   // the year shows on the card
  "outcomes": [                            // up to 3 render; the first is emphasised
    "~2 weeks from zero to launch",
    "Near-$0 idle AWS cost",
    "Multi-tenant white-label"
  ],
  "tech_stack": [{ "name": "Next.js 12" }, { "name": "AWS Lambda" }],
  "modal_details": [                       // extra screenshots in the dialog
    { "image": "detail.webp", "description": "What this screen shows." }
  ]
}
```

Notes:

- **Outcomes should be results, not topics.** "500k+ active users" beats
  "user management". The first one is styled with extra weight.
- **`tech_stack` needs no icon path.** Names are matched to an icon by
  [`techIcons.ts`](src/utils/techIcons.ts) — "Next.js 12" resolves to the React
  mark, "Bitcoin" to the Bitcoin mark, and anything unmatched falls back to the
  JavaScript icon. To force one, add `"icon": "docker.svg"`.
- **`image` and `company_image` are optional.** Without artwork the card keeps
  its 16:9 slot with a neutral panel, so the carousel stays aligned.

### Adding an image

Drop the file in `public/assets/images/` and reference it by **file name only**
— the code prefixes the path.

Keep them small. Artwork is displayed at roughly 370px in cards and 700px in
the featured block, so **WebP at 1400px or less** is plenty; logos never need
more than 320px. The whole `images/` directory should stay in the low
single-digit megabytes.

```bash
# rough guide for one image
python3 -c "
from PIL import Image
im = Image.open('shot.png'); im.thumbnail((1400, 1400))
im.save('public/assets/images/shot.webp', 'WEBP', quality=85, method=6)"
```

---

## Generated PDFs

There are **no checked-in CV or cover-letter PDFs**. Both are rendered from the
translation data on demand with
[`@react-pdf/renderer`](https://react-pdf.org/):

| Page | Button | Output |
| --- | --- | --- |
| `/portafolio/printResume` | Download PDF | `victor-hernandez-cv-<lang>.pdf` |
| `/portafolio/cover-letter` | Download cover letter | `victor-hernandez-cover-letter-<lang>.pdf` |

Layouts live in [`src/components/pdf/`](src/components/pdf/). The renderer is
imported dynamically, so its ~1.3MB chunk only downloads when someone actually
clicks. Edit the JSON and the next download reflects it — nothing to re-export.

---

## Routes

| Path | Page |
| --- | --- |
| `/portafolio/` | Home |
| `/portafolio/resume` | Resume (web layout) |
| `/portafolio/printResume` | Print-first CV + PDF download |
| `/portafolio/cover-letter` | Cover letter |
| anything else | 404 |

---

## Project structure

```
src/
├── components/
│   ├── atoms/        small primitives (links, contact icons)
│   ├── molecules/    cards, section headers, marquees
│   ├── organisms/    page sections and dialogs
│   ├── templates/    the shared page shell (nav, footer, background)
│   ├── pages/        one component per route
│   ├── pdf/          @react-pdf layouts for the CV and cover letter
│   └── motion/       the animation system — see below
├── constants/        base paths and the translation imports
├── context/          language provider
├── types/            shapes for the translation data
└── utils/            i18n, tech-icon matching, PDF download helpers
```

### The motion system

Animation is centralised in [`src/components/motion/`](src/components/motion/)
rather than scattered per component: shared easing and duration tokens,
`Reveal` for scroll entrances, `StaggerGroup`/`StaggerItem` for cascades,
plus `TiltCard`, `AnimatedCounter`, `MagneticButton`, and `ScrollProgress`.

`MotionConfig reducedMotion="user"` in [`main.tsx`](src/main.tsx) makes every
animation honour the visitor's OS "reduce motion" setting automatically.

Two gotchas worth knowing before you edit it:

- **Use position-based `key`s in animated lists.** Keys built from translated
  text change when the language does, which remounts the item; because the
  stagger parent has already fired its `once` viewport trigger, the fresh child
  stays stuck at its `hidden` variant and disappears.
- **Give animated children object `whileHover`, not a variant label.** In
  framer-motion 13 a label cancels the `initial` state a child inherits from
  its parent.

---

## Deploying

Pushing to `main` triggers
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which installs,
builds, copies `index.html` to `404.html` for SPA routing, and publishes to
GitHub Pages. `dist/` is generated, not committed.

To publish manually from your machine instead:

```bash
npm run deploy-github
```

### Deploying elsewhere

Serving from a domain root, or a differently named repo, rather than
`/portafolio/`? Three places need to agree:

1. **`base`** in [`vite.config.ts`](vite.config.ts).
2. **The route paths** in [`main.tsx`](src/main.tsx). These are written out
   literally (`/portafolio`, `/portafolio/resume`, …) rather than derived, so
   they do **not** follow `base` on their own. Links elsewhere in the app *do*
   read `import.meta.env.BASE_URL`, so changing only `base` leaves every link
   pointing at a path the router has no route for, and the whole site 404s.
3. **The absolute URLs** in the `og:` and `canonical` tags in
   [`index.html`](index.html), so link previews keep working.

---

## Known issues

- **`npm run lint` fails on every file** with `Parsing error: The keyword
  'import' is reserved`. The ESLint setup has no TypeScript parser configured —
  `package.json` only extends the Storybook plugin and there is no `.eslintrc`.
  This predates the current codebase. Use `npm run build` (which runs `tsc`) as
  the type gate until it is fixed.
- Storybook still contains the default template stories in `src/stories/`.
