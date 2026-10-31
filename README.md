# 🏮 K-Festa

**Discover Korea's local festivals — a friendly English guide for foreign travelers.**

K-Festa helps visitors find Korea's best local festivals and tells them exactly
when, where, and how to go. From the Boryeong Mud Festival to lanterns drifting
down the Namgang River, every entry includes highlights, insider tips, and clear
transit directions from the nearest hub.

🔗 **Live:** https://develu0825.github.io/k-festa/

## Features

- **15 curated festivals** spanning all four seasons and every region of Korea
- **Smart browse & filter** by when you're visiting, region, and vibe
- **"Happening soon"** — festivals ranked by how close they are to today
- **Rich detail pages** — highlights, traveler tips, getting there, quick facts
- Fast, fully static, mobile-first. No API keys, no backend.

## Tech

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Static export (`output: "export"`) deployed to **GitHub Pages** via GitHub Actions

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to ./out
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
static site and publishes `./out` to GitHub Pages.

---

A weekend project — festival dates shift slightly each year, so always confirm
the official schedule before booking travel.
