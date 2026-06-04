# Wellness Journal

A premium personal wellness journal built with Next.js App Router and Tailwind CSS. Inspired by editorial wellness brands such as [Fuerza Happy](https://www.fuerzahappy.com/).

## Features

- **Home** — Training sessions listed as journal entries (day, date, title, summary)
- **Session detail** — Overview, functional training, breathwork, and reflections
- Mobile-first layout with calm typography and warm minimal aesthetics

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (redirects to `/en`). Languages: `/en` and `/zh`.

## Stack

- Next.js 16 (App Router)
- Tailwind CSS 4
- TypeScript

## Content

Bilingual sessions live under `src/data/sessions/`:

- `day06.ts` — shared slug/date + `content.en` / `content.zh`
- `registry.ts` — register new sessions in `sessionRegistry`

Add a session: copy `day06.ts`, then append to `registry.ts`.

## SEO

Set your production URL before deploy:

```bash
cp .env.example .env.local
# NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Built-in: meta titles/descriptions, canonical URLs, Open Graph, Twitter cards, `sitemap.xml`, `robots.txt`, and JSON-LD (`WebSite` + `BlogPosting`).
# wellness-journal
