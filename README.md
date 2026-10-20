# Jordan NGUCHO — Portfolio

Personal website of **Jordan NGUCHO**, Data Scientist & AI Project Lead (Safran Aircraft Engines), co-founder of Docfira, CTO of Scoop Afrique and founder of Jolari Tech.

Static site — plain HTML, CSS and JavaScript, no build step.

## Features

- Bilingual **EN / FR** (auto-detected from the browser, toggle in the nav, remembered)
- Dark / light theme (follows the system, toggle in the nav)
- Animated neural-network hero, typed roles, animated counters, scroll reveals, tilt & magnetic effects (all disabled with `prefers-reduced-motion`)
- Filterable experience timeline and project grid
- Full **case study** per project in a modal — problem, role, solution, architecture pipeline, impact, stack, links — with shareable deep links (`#project/<id>`) and keyboard navigation (← → Esc)
- Skills linked to the projects that use them
- Live GitHub repositories (with an offline fallback)
- Contact form via EmailJS, with automatic `mailto:` fallback; one-click email copy

## Structure

```
index.html        page skeleton, icon sprite, static copy
css/style.css     design tokens (dark/light), layout, components
js/data.js        ALL content: profile, stats, experience, projects, skills, education
js/main.js        rendering, i18n, interactions, contact form
assets/           profile photo (jpg/webp) and CV (PDF)
```

## Editing content

Everything lives in `js/data.js`. Every visible string is `{ en: "...", fr: "..." }`.
To add a project, copy an object in `projects` and change it: `id` becomes the deep link, `hue` sets the card colour, `icon` is one of the sprite icons in `index.html` (`pulse`, `engine`, `wave`, `chart`, `spark`, `building`, `network`, `eye`, `cube`, `leaf`, …), and `tags` map to the filter chips in `categories`.

### Calendly

Paste your booking link in `profile.calendly` in `js/data.js` (e.g. `"https://calendly.com/your-name/30min"`). "Book a call" buttons then appear in the hero, the contact section and every case study. Leave it empty to hide them.

### Project screenshots

Put `name.webp` + `name.jpg` in `assets/projects/` and set `image: "assets/projects/name"` on the project.

Interface labels (buttons, headings) are in the `UI` dictionary at the top of `js/main.js`.

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Any static host works. On **GitHub Pages**: Settings → Pages → deploy from the `main` branch, root folder.

## Contact

ymbeutchou@gmail.com · [LinkedIn](https://linkedin.com/in/jordan-ngucho) · [GitHub](https://github.com/ngucho)
