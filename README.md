# Eliora Studio (eliora-studio.com)

Eliora-only static site (Astro). Extracted from the Miragea site; Miragea stays at https://miragea-ss.github.io.

- `/` Eliora home (public/index.html), `/atelier/{en,ja,zh}/`, `/discovery/...`, `/skills/` (noindex for now), `/legal/tokusho/`
- Post-purchase `/dl/...` pages are noindex and are not linked from nav or `/skills/`.
- `/eliora/index.html` is only a redirect to `/`. Infinite Canvas, the workflow pack and the local kit are intentionally not part of this site.
- Links back to Miragea are absolute `https://miragea-ss.github.io/...`.
- Deploy: GitHub Pages via `.github/workflows/deploy.yml`; `public/CNAME` = eliora-studio.com.
