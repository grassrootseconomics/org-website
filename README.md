# Grassroots Economics Website

The public website for [Grassroots Economics](https://grassecon.org)

## Tech Stack

- **Next.js 16** with App Router
- **React 19**
- **Tailwind CSS 4**
- **Framer Motion** for animations
- **TypeScript**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/            # Pages (App Router)
│   ├── about/
│   ├── blog/       # Pulls posts from Substack RSS feed
│   ├── contact/
│   ├── dashboard/
│   ├── food-forests/
│   ├── how-it-works/
│   ├── media/
│   ├── mooc/
│   ├── research/
│   ├── sarafu-network/
│   ├── support/
│   └── terms/
├── components/     # Reusable UI components
│   └── shared/     # Section, Button, ScrollReveal, etc.
├── data/           # Static data (team, stories, publications)
└── lib/            # Utilities (Substack RSS parser, constants)
```

## Blog

The blog page fetches posts from the [Grassroots Economics Substack](https://grassecon.substack.com) RSS feed at build time, with ISR revalidation every hour. Post images are extracted from the feed's `enclosure` elements and displayed as cover images on each card.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |
