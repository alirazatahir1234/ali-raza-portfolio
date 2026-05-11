# Ali Raza Tahir - Enterprise + AI Modern Portfolio

Modern Angular portfolio application with a clean enterprise design, subtle gradients/glow, dark/light mode toggle, responsive layout, and centralized typed content architecture.

## Tech Stack

- Angular (latest stable)
- Tailwind CSS (via `@tailwindcss/postcss`)
- Angular animations

## Install

```bash
npm install
```

## Run Locally

```bash
npm start
```

Open `http://localhost:4200/`.

## Production Build

```bash
npm run build
```

Build output is generated under `dist/`.

## Where To Update Portfolio Content

- Main editable portfolio data: `src/app/data/portfolio.data.ts`
- Data contracts/types: `src/app/models/portfolio.model.ts`
- UI layout and sections: `src/app/app.html`
- UI behavior (theme toggle, SEO meta updates): `src/app/app.ts`

## Placeholders To Replace

- Resume file URL in `portfolio.data.ts` (`/assets/Ali-Raza-Tahir-Resume.pdf`)
- Social/profile links (GitHub, LinkedIn, Email) in `portfolio.data.ts`
- SEO URL and social image placeholders in `portfolio.data.ts` and `src/index.html`

## Available Commands

- `npm start` - run dev server
- `npm run build` - create production build
- `npm test` - run tests
