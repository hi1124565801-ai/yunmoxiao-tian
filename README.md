# Yunmoxiao Tian — Personal Academic Website

Official personal website of Yunmoxiao Tian (田云墨筱), a Peking University
undergraduate studying English Language and Literature and Sociology.

Website:

[https://hi1124565801-ai.github.io/yunmoxiao-tian/](https://hi1124565801-ai.github.io/yunmoxiao-tian/)

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
