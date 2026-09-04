# Portfolio — Victor Hernández

Trilingual (EN/ES/IT) developer portfolio built with React, TypeScript, Vite,
and MUI, animated with framer-motion.

**Live:** https://pandvictor.github.io/portafolio/

Almost everything you see — projects, resume, cover letter, section copy — is
**data, not markup**. One JSON file per language drives the whole site, and the
CV and cover-letter PDFs are generated from those same files at download time,
so they can never drift out of sync with the pages.

That is the single most important thing to know before editing: **to change the
site's content you edit JSON, not components.**

---

## Contents

- [Requirements](#requirements)
- [Getting started](#getting-started)
- [npm scripts](#npm-scripts)
- [What's on the page](#whats-on-the-page)
- [Where the content lives](#where-the-content-lives)
  - [Adding a language](#adding-a-language) · [a job](#adding-a-job) ·
    [a project](#adding-a-project) · [a certification](#adding-a-certification) ·
    [an image](#adding-an-image)
- [Generated PDFs](#generated-pdfs)
- [Routes](#routes)
- [Project structure](#project-structure)
- [How it fits together](#how-it-fits-together)
- [Tests](#tests)
- [Deploying](#deploying)
- [Analytics](#analytics-optional)
- [Known issues](#known-issues)

---

## Requirements

| Tool | Version |
| --- | --- |
| Node.js | 20 or newer (CI runs 20; developed on 22) |
| npm | ships with Node |

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

> ⚠️ The `/portafolio/` suffix matters. `base` is set to `/portafolio/` in
> [`vite.config.ts`](vite.config.ts) because the site is served from a GitHub
> Pages project path. Opening `http://localhost:5173/` alone shows nothing.
> See [Deploying elsewhere](#deploying-elsewhere) to change it.

**4. Before you push**

```bash
npm run lint    # ESLint
npm test        # builds the site and drives it with Playwright
npm run build   # tsc type-check + production build
```

CI runs all three, so it is worth catching failures locally first.

---

## npm scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload, on port 5173 |
| `npm run build` | `tsc` type-check, then a production build into `dist/` |
| `npm run preview` | Serve the built `dist/` at http://localhost:4173/portafolio/ |
| `npm run lint` | ESLint over the project |
| `npm test` | Playwright end-to-end suite against the production build |
| `npm run test:ui` | The same suite in Playwright's watch UI |
| `npm run deploy-github` | Build and publish `dist/` to the `gh-pages` branch |

---

## What's on the page

The home page is nine sections, in this order. Each is one component in
[`src/components/organisms/`](src/components/organisms/), assembled by
[`HomePage.tsx`](src/components/pages/HomePage.tsx):

| # | Section | What it shows | Data key |
| --- | --- | --- | --- |
| 1 | **Hero** | Name, role, stack strip, value proposition, CTAs, portrait | `portfolio`, `hero`, `home.hero_bullets` |
| 2 | **Facts bar** | Availability, location, spoken languages | `home.facts_*`, `resume.location`, `resume.languages` |
| 3 | **Capabilities** | AI-delivery pitch and six capability cards | `home.capabilities` |
| 4 | **Trusted by** | Client logo marquee | `home.trusted_by` |
| 5 | **Credibility** | Four counting stats | `home.credibility_stats` |
| 6 | **Services** | Five service cards | `home.services` |
| 7 | **Featured** | One project in depth | picked from `resume.work_history` |
| 8 | **Selected work** | Horizontal project rail | `resume.work_history[].achievements` |
| 9 | **Closing CTA** | Contact prompt | `home.cta_*` |

Sections 6, 8 and 9 carry the `#services`, `#work` and `#contact` anchors the
header links to.

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
2. Add a flag SVG at `public/assets/images/flags/<code>.svg`. Draw it as SVG —
   flag emoji do not render as flags on Windows.
3. Register it in `LANGUAGES` in
   [`constants/gloabals.ts`](src/constants/gloabals.ts) — the header switcher,
   the mobile drawer, and both CV pages read from that one list.
4. Map its `date-fns` locale in
   [`ResumeWorkCard`](src/components/molecules/ResumeWorkCard.tsx) and
   [`ResumePrintPage`](src/components/pages/ResumePrintPage.tsx). **Without it
   `date-fns` silently falls back to English**, so a Spanish resume reads
   "5 months".

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

> A `description` written as a bullet list (`"• one\n• two"`) is split back into
> real list items at render time by
> [`resumeText.ts`](src/utils/resumeText.ts) — a few entries were authored that
> way and would otherwise read as a run-on sentence.

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
- **Don't repeat the company in the title.** The card already shows the company
  logo and name above it.
- **`tech_stack` needs no icon path.** Names are matched to an icon by
  [`techIcons.ts`](src/utils/techIcons.ts) — "Next.js 12" resolves to the React
  mark, "Bitcoin" to the Bitcoin mark, and anything unmatched falls back to the
  JavaScript icon. To force one, add `"icon": "docker.svg"`.
- **`image` and `company_image` are optional.** Without artwork the card keeps
  its 16:9 slot with a neutral panel, so the carousel stays aligned.

### Adding a certification

Under `resume.certifications`, rendered on the resume page and in the generated
CV:

```jsonc
{ "title": "AWS Cloud Practitioner", "issuer": "Amazon AWS", "year": "2022" }
```

### Adding an image

Drop the file in `public/assets/images/` and reference it by **file name only**
— the code prefixes the path.

Keep them small. Artwork is displayed at roughly 370px in cards and 700px in
the featured block, so **WebP at 1400px or less** is plenty; logos never need
more than 320px. The directory sits at about 3MB — it was 26MB before the
images were converted, which meant a visitor downloaded megabytes to see
370px cards.

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
clicks. **Edit the JSON and the next download reflects it** — nothing to
re-export.

Both documents use `minPresenceAhead` rather than "never break" so a heading is
never stranded at the foot of a page without leaving a third of the sheet
blank.

---

## Routes

| Path | Page |
| --- | --- |
| `/portafolio/` | Home |
| `/portafolio/resume` | Resume (web layout) |
| `/portafolio/printResume` | Print-first CV + PDF download |
| `/portafolio/cover-letter` | Cover letter |
| anything else | 404 |

The header also links to sections of the home page — `#work`, `#services`,
`#contact` — and those work from any route: the scroll-restore hook honours a
hash instead of forcing the top.

Every route except the home page is `React.lazy`-loaded, so a first visit does
not download the resume, cover letter and printable CV as well.

---

## Project structure

```
├── public/assets/        all site content: translations, images, icons, flags
├── tests/site.spec.ts    the end-to-end suite
├── playwright.config.ts  test runner config (builds + previews the site)
├── .eslintrc.cjs         lint config
├── vite.config.ts        base path and manual vendor chunks
└── src/
    ├── components/
    │   ├── atoms/        small primitives (links, contact icons)
    │   ├── molecules/    cards, section headers, marquees, the language switcher
    │   ├── organisms/    page sections and dialogs
    │   ├── templates/    the shared page shell (nav, footer, background)
    │   ├── pages/        one component per route
    │   ├── pdf/          @react-pdf layouts for the CV and cover letter
    │   └── motion/       the animation system
    ├── constants/        base paths, language list, translation imports
    ├── context/          language provider
    ├── types/            shapes for the translation data
    └── utils/            i18n, tech icons, PDF downloads, resume text parsing
```

---

## How it fits together

### Content flow

```
public/assets/translations/*.json
        ↓ imported by constants/gloabals.ts
   i18n-js  ←  LanguageContext sets i18n.locale
        ↓
   useTranslated(key)  ←  components read copy through this
        ↓
   components  +  src/components/pdf/  (same data, two renderers)
```

`useTranslated` exists because `i18n.t()` reads a **mutable global**
(`i18n.locale`). The active language is therefore a real dependency that
ESLint's `exhaustive-deps` rule cannot see. Rather than nine scattered
suppressions across pages, that exception lives in one place —
[`useTranslated.ts`](src/utils/useTranslated.ts).

### The section system

Every page section uses two shared pieces, so the layout reads as one system
rather than a stack of unrelated boxes:

- **[`SectionSurface`](src/components/molecules/SectionSurface.tsx)** — one
  container (radius, padding, border) in three tones: `quiet`, `raised`,
  `feature`.
- **[`SectionHeader`](src/components/molecules/SectionHeader.tsx)** — one
  eyebrow/title/subtitle treatment, rendering the title as an `<h2>`.

### The motion system

Animation is centralised in [`src/components/motion/`](src/components/motion/)
rather than scattered per component:

| Export | Purpose |
| --- | --- |
| `tokens` | Shared easings, durations, and variants |
| `Reveal` | Scroll-triggered entrance for one block |
| `StaggerGroup` / `StaggerItem` | Cascading entrances for a list |
| `TiltCard` | Pointer-reactive 3D tilt with a specular highlight |
| `AnimatedCounter` | Counts a stat up from zero when it scrolls in |
| `MagneticButton` | CTA that leans toward the pointer |
| `ScrollProgress` | Reading-progress bar |
| `ShimmerText` | Light sweep across the headline |
| `PageTransition` | Route-level entrance |
| `motionize()` | Caches `motion.create()` for MUI styled components |

`MotionConfig reducedMotion="user"` in [`main.tsx`](src/main.tsx) makes every
animation honour the visitor's OS "reduce motion" setting automatically.

**Four gotchas that each cost real debugging time here:**

1. **Use position-based `key`s in animated lists.** Keys built from translated
   text change when the language does, which remounts the item; because the
   stagger parent already fired its `once` viewport trigger, the fresh child
   stays stuck at its `hidden` variant and disappears. This hid 7 of 9 project
   cards on every language switch.
2. **Give animated children object `whileHover`, not a variant label.** In
   framer-motion 13 a label cancels the `initial` state a child inherits from
   its parent.
3. **framer-motion owns the `transform` of any element it animates.** Centring
   with `translateX(-50%)` on such an element silently breaks — use auto
   margins instead.
4. **`overflow: hidden` does not clip inside a `preserve-3d` context.** A tilted
   element cannot clip a spinning child; animate the gradient's angle rather
   than rotating the element.

### Bundle

[`vite.config.ts`](vite.config.ts) splits vendors into their own chunks. Route
splitting alone barely moved the total, because the weight is shared libraries
rather than page code. Separating them means the app chunk that changes on
every deploy is ~90KB gzip instead of a ~280KB monolith, and React, MUI,
framer-motion and date-fns stay cached across releases.

---

## Tests

`npm test` builds the site and drives it with Playwright on desktop and mobile.
The suite covers what a unit test cannot see, and **every check guards a bug
this project actually shipped**:

| Check | The bug it guards |
| --- | --- |
| No console errors or broken images on all five routes | Images broke silently after a bulk WebP conversion |
| Print stylesheet hides screen chrome; paper stays white | The PDF came out with the nav bar and dark backgrounds in it |
| All three languages translate, nothing left invisible | 7 of 9 project cards vanished on language switch |
| Both PDFs download with the right filename | — |
| `prefers-reduced-motion` leaves nothing hidden | Reveals could strand content at opacity 0 |
| Section links scroll correctly, including from another route | — |
| The project dialog's gallery swaps image and caption | — |
| Card and dialog labels translate | `more_info` stayed English in the Spanish file, so the card button never translated |
| One `<h1>` per page | No page had an `<h1>`; the outline started at `<h3>` |
| No horizontal overflow | The language switcher pushed the mobile toolbar off screen |

If you add an animated list, a print rule, or a language, extend
[`tests/site.spec.ts`](tests/site.spec.ts) — that file is where this project's
recurring mistakes are written down.

> The suite scrolls with `behavior: "instant"`. The site sets
> `scroll-behavior: smooth` for the section links, and a smooth sweep never
> reaches the offsets in time for scroll-triggered reveals to fire.

---

## Deploying

Pushing to `main` triggers
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which installs,
**lints, tests**, builds, copies `index.html` to `404.html` for SPA routing, and
publishes to GitHub Pages. `dist/` is generated, not committed.

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
   [`index.html`](index.html), plus `public/robots.txt` and
   `public/sitemap.xml`, so link previews and crawlers keep working.

---

## Analytics (optional)

Nothing third-party loads unless you opt in, so the site ships with no tracking
and no cookie banner. Set a domain at build time to enable a
Plausible-compatible script:

```bash
VITE_ANALYTICS_DOMAIN=pandvictor.github.io npm run build
VITE_ANALYTICS_SRC=https://your-host/script.js   # optional, self-hosted
```

See [`src/utils/analytics.ts`](src/utils/analytics.ts).

---

## Known issues

- Three projects — **Bullseye**, **Regional Agricultural Market** and **Angel
  Ariel** — show a logo where the others show product UI, because no screenshot
  exists. Angel Ariel also has no `modal_details`, so its dialog is text only.
  Adding real screenshots to `public/assets/images/` and referencing them from
  the translations is all that is needed.
