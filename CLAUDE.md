# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

「すこやか感覚ラボ」— a single-page static site (Japanese) about sensory integration for children. Plain HTML/CSS/JS: no build step, package manager, linter, or tests. Not a git repository.

- `index.html` — markup only
- `css/style.css` — all styles
- `js/main.js` — all behavior (loaded at the end of `<body>`, so no DOMContentLoaded wrapper)
- `images/` — optional photos: `hero.jpg`, `parents.jpg`, `supporters.jpg` (currently empty; emoji placeholders are shown instead)

Keep this file layout: `index.html` references `css/style.css` and `js/main.js` by relative path, so moving them breaks the page.

## Running / checking

Open `index.html` directly in a browser (works over `file://`). External dependencies are loaded from CDNs, so a network connection is needed for fonts and icons:
- Google Fonts: M PLUS Rounded 1c (body), Zen Maru Gothic (headings/logo), Klee One (handwritten note in hero)
- Lucide icons `lucide@0.468.0` UMD from jsDelivr

For visual checks use headless Chrome (`C:\Program Files\Google\Chrome\Application\chrome.exe`). Note that `--headless=new --window-size=375,...` does not produce a true 375px viewport (there is a minimum window width); use DevTools Protocol `Emulation.setDeviceMetricsOverride` for mobile widths. Check at 1280 / 800 / 375px to cover all breakpoints.

## How the pieces fit together

- **Icons**: markup uses `<i data-lucide="name">`; `lucide.createIcons()` in `main.js` replaces each with `<svg class="lucide lucide-name ...">`, carrying over the `<i>`'s classes. So icon styling in CSS targets `svg` (e.g. `.btn svg`, `.worry__icon .is-tilted`), not `i`.
- **Image fallback**: `<img data-fallback="👧">` — `main.js` swaps any image that fails to load for `<div class="photo-ph">` containing the emoji. `.photo-ph` has per-context overrides (e.g. `.target__photo .photo-ph`).
- **Decorative dots**: `<span class="dot">` elements have no inline styles; each one's size, position and color come from `.hero > .dot:nth-of-type(n)` / `.section--senses > .dot:nth-of-type(n)` in the CSS. Adding, removing or reordering dots requires updating those rules.
- **Inline SVG reuse**: `#sun` (logo, a hidden `<symbol>` at the top of body, used in header and footer) and `#fishShape` (inside the fish banner's `<defs>`). The fish swim animation staggers via `.fish:nth-of-type(2n/3n)`.
- **Links**: every `href="#"` is a not-yet-implemented page; `main.js` calls `preventDefault` on them. PAGE TOP (`#pageTop`) scrolls smoothly via JS. The header nav and footer nav are duplicated in the HTML and must be edited together.
- **Mobile menu**: `#menuBtn` toggles `.is-open` on `#nav` and syncs `aria-expanded`; the nav is only hidden/collapsible below 960px.

## CSS conventions

- Design tokens live in `:root` (`--ink`, `--text`, `--muted`, color families `--{blue,pink,green,yellow,purple,teal}` with `-soft` / `-deep` variants, `--dot-*`, `--radius`, `--shadow`). Reuse them before adding new hex values.
- BEM-style naming: blocks like `.sense`, `.worry__icon`, `.age`, `.target`, `.play-list .ic` with color modifiers `--pink/--blue/--green/--yellow/--purple/--teal`; section-specific tweaks use section modifiers (`.section--senses`, `.section--play`, `.section--ages`, `.section--tint`).
- Avoid inline `style` attributes; add a class/modifier instead.
- Breakpoints (desktop-first, at the end of `style.css`): `1100px` (tighter nav), `960px` (hamburger menu, single-column hero, 2-column grids), `600px` (phone paddings/sizes).
