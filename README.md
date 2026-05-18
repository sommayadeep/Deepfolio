# Deepfolio — Personal Portfolio

Professional portfolio site built with React, TypeScript, GSAP and Three.js.

![Hero Screenshot](public/images/preview.png)

## Table of contents

- [About](#about)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Local development](#local-development)
- [Deployment](#deployment)
- [Configuration](#configuration)
- [Adding screenshots](#adding-screenshots)
- [Contributing](#contributing)
- [License](#license)

## About

Deepfolio is a modern, animated personal portfolio showcasing projects, an interactive 3D character scene, and smooth GSAP-driven UX. The Work section can auto-sync project entries from a GitHub account.

## Features

- Smooth, animated landing with a Three.js character scene
- GSAP-powered scrolling and text animations
- Auto-sync projects from GitHub
- Responsive layout and fast development tooling (Vite)

## Tech stack

- **Framework:** React + TypeScript
- **Animation / 3D:** GSAP, Three.js
- **Build:** Vite
- **Styling:** CSS modules / plain CSS

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

Open http://localhost:5173 (or the URL shown by Vite).

## Deployment

Build for production:

```bash
npm run build
npm run preview
```

Deploy the generated `dist/` folder to Netlify, Vercel, GitHub Pages, or any static hosting provider.

## Configuration

- To enable GitHub auto-sync for the Work section, set your username in a `.env` file:

```bash
VITE_GITHUB_USERNAME=sommayadeep
```

- Map project images in `src/data/projectImageMap.ts` to show screenshots for each repo.

## Adding screenshots

Place the hero screenshot or any preview images at `public/images/` and reference them in the README or the app. Recommended path for the landing hero image:

`public/images/hero-screenshot.png`

If you have the screenshot attached separately, copy it into that location so the preview above renders on GitHub.

## Contributing

- Fixes, improvements and PRs are welcome. Please open an issue first for larger changes.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or collaboration: sommayadeepsa@gmail.com
