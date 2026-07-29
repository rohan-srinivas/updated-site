# Rohan Srinivasa Babu — Updated Portfolio

A modern Quarto portfolio designed for GitHub Pages at:

`https://rohan-srinivas.github.io/updated-site/`

## Local preview

```bash
quarto preview
```

## Publish

Push to `main`. The workflow in `.github/workflows/publish.yml` renders the site and deploys `_site` to GitHub Pages.

In the GitHub repository, set **Settings → Pages → Source** to **GitHub Actions**.

## Main content files

- `index.qmd` — homepage
- `experience.qmd` — roles and employer-specific work
- `projects.qmd` — automatic project listing
- `projects/capstone/index.qmd` — Oregon safety capstone
- `projects/prague-metro/index.qmd` — Prague Metro placeholder case study
- `about.qmd` — personal story
- `resume.qmd` — downloadable/embedded resume
- `styles.scss` — visual system
- `scripts/site.js` — theme toggle and subtle motion
