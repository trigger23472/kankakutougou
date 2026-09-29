# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Working rules

- プロンプトに対する回答は常に日本語で行う。
- リファクタを指示された際は、まず計画を報告し、動作テスト（`npm run build` と、必要に応じて headless Chrome での表示確認）を行ってから実行する。

## Overview

「すこやか感覚ラボ」— a single-page site (Japanese) about sensory integration for children.

- Next.js (App Router), plain JavaScript/JSX, no TypeScript
- No linter or tests
- Deployed on Vercel (Framework Preset: Next.js)

## File structure

- `app/layout.jsx` — `<html>`, metadata, fonts, and the shared shell (sun symbol, header, footer)
- `app/page.jsx` — composes the home page from the section components in `components/home/`
- `app/globals.css` — all styles
- `components/home/` — one file per home section; repeated cards are driven by data arrays at the top of each file
  - `Hero`
  - `SensesSection`
  - `WorriesSection`
  - `PlaySection` (uses `FishBanner`)
  - `AgesSection` (age buttons + parent/supporter cards)
- `components/` — shared components
  - `Header` (client, mobile menu)
  - `Footer`, `Logo`, `SunSymbol`, `Dots`
  - `PageTopLink` (client), `FallbackImage` (client), `DeadLinkGuard` (client)
  - `MobileTabBar` (client, fixed bottom tabs linking to section ids `#top` `#senses` `#worries` `#play` `#ages`, shown only ≤600px)
  - `MoreLink` (the rounded "詳しく見る ›" `.more` link)
  - `navItems.js`
- `public/images/` — optional photos: `hero.jpg`, `parents.jpg`, `supporters.jpg` (currently absent; emoji placeholders are shown instead)

## Running / checking

- `npm run dev` — dev server at http://localhost:3000
- `npm run build` — production build (run this to confirm Vercel will succeed)
- `npm start` — serve the production build

### Visual checks

- Use headless Chrome (`C:\Program Files\Google\Chrome\Application\chrome.exe`) against the running server.
- `--headless=new --window-size=375,...` does not produce a true 375px viewport (there is a minimum window width); use DevTools Protocol `Emulation.setDeviceMetricsOverride` for mobile widths.
- Check at 1280 / 800 / 375px to cover all breakpoints.

## How the pieces fit together

- **Fonts**: from `next/font/google` (self-hosted at build time). CSS uses these variables, not the font names.
  - M PLUS Rounded 1c — body, `--font-rounded`
  - Zen Maru Gothic — headings/logo, `--font-maru`
  - Klee One — handwritten note in hero, `--font-klee`
- **Icons**: from the `lucide-react` package. Components render `<svg class="lucide lucide-name ...">` plus any `className` passed. Icon styling in CSS targets `svg` (e.g. `.btn svg`, `.worry__icon .is-tilted`).
- **Image fallback**: `<FallbackImage src fallback="👧">` renders `<div class="photo-ph">` with the emoji when the image fails to load (also checked on mount, since the error can fire before hydration). `.photo-ph` has per-context overrides (e.g. `.target__photo .photo-ph`).
- **Decorative dots**: `<span class="dot">` elements have no inline styles; each one's size, position and color come from `.hero > .dot:nth-of-type(n)` / `.section--senses > .dot:nth-of-type(n)` in the CSS. Adding, removing or reordering dots requires updating those rules.
- **Inline SVG reuse**:
  - `#sun` — logo; a hidden `<symbol>` rendered by `SunSymbol` in the layout, used by `Logo` in header and footer
  - `#fishShape` — inside the fish banner's `<defs>`. Fish are rendered from the `fishes` array in `FishBanner.jsx`; the swim animation staggers via `.fish:nth-of-type(2n/3n)`.
- **Links**:
  - Every `href="#"` is a not-yet-implemented page; `DeadLinkGuard` calls `preventDefault` on clicks to them.
  - PAGE TOP scrolls smoothly via `PageTopLink`.
  - Header and footer nav both render from `components/navItems.js`.
- **Mobile menu**: `Header` keeps open/closed state, toggling `.is-open` on `#nav` and `aria-expanded` on the button; the nav is only hidden/collapsible below 960px.

## CSS conventions

- **Design tokens** live in `:root` (`--ink`, `--text`, `--muted`, color families `--{blue,pink,green,yellow,purple,teal}` with `-soft` / `-deep` variants, `--dot-*`, `--radius`, `--shadow`). Reuse them before adding new hex values.
- **Naming**: BEM-style blocks like `.sense`, `.worry__icon`, `.age`, `.target`, `.play-list .ic` with color modifiers `--pink/--blue/--green/--yellow/--purple/--teal`; section-specific tweaks use section modifiers (`.section--senses`, `.section--play`, `.section--ages`, `.section--tint`).
- **No inline styles**: avoid inline `style` attributes; add a class/modifier instead.
- **Breakpoints** (desktop-first, at the end of `globals.css`):
  - `1100px` — tighter nav
  - `960px` — hamburger menu, single-column hero, 2-column grids
  - `600px` — dedicated phone layout: compact header, 2-column tile menu, list-style sense cards, 3-column worries, bottom tab bar

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
