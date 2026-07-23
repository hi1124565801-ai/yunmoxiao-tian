# Yunmoxiao Tian — Academic Portfolio

The source for Yunmoxiao Tian's public academic portfolio, combining research,
long-form writing, photography, media features, and the Literary City Atlas.

## Public website

<https://hi1124565801-ai.github.io/yunmoxiao-tian/>

## Technology

- Next.js 16
- React 19
- TypeScript
- react-simple-maps and world-atlas
- GitHub Actions and GitHub Pages

## Local development

```bash
corepack enable
pnpm install
pnpm run dev:preview
```

## Validation

```bash
pnpm exec tsc --noEmit
pnpm run lint
pnpm run build
pnpm run build:github
```

Content is maintained in `data/`, while images and the downloadable CV live
under `public/`. Pushing to `main` automatically rebuilds and publishes the
GitHub Pages site.
