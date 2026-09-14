# Plan: Home hero polish

## Problems observed (1440×900, 390×844)

- Desktop: stats values and the featured badge are cut off below the fold.
- Headline wraps to five lines in the 0.78fr copy column; "that" sits alone.
- Image is framed by a 20px ink margin and desaturated (`saturate-78`), so it reads as a card, not a hero.
- Mobile: first viewport is text and stats only; the image starts below it.
- No entrance motion.

## Phase 1 — preview

Throwaway route `src/app/test/page.tsx`, hardcoded content:

- `?v=1` — **A + C**: full-bleed image, left/bottom ink gradient, copy bottom-left, blurred stats bar with the featured badge on the section floor, field-report tag top-right.
- `?v=2` — **B + C**: split rebalanced to `1fr / 1.1fr` and locked to one viewport, image flush to the edges at full saturation, headline capped to ~3 lines, stats pinned to the copy column floor, field tag + featured badge on the image. Mobile puts the image first (52svh).
- `?v=1` is now a two-slide slideshow (chosen direction): images crossfade (1s) on their own layer; the copy is a single block that fades out (300ms), swaps, then re-reveals with a stagger by remounting under a new key. Autoplay every 6s with no hover/focus pause (kept simple by request), off under reduced motion; 01/02 controls in the floor bar whose active underline is the autoplay progress bar (its `animationend` advances the slide); stats stay shared; the featured badge follows the slide (one product per slide) as a quiet thumbnail card, not a yellow block, with the title clamped to two lines (one on mobile). Plain React state, no carousel library.
- C (both): signal-colored accent word in the headline, mono field-report tag, image settle-in scale and staggered copy reveal via `@starting-style` (no keyframes; global reduced-motion override applies).

## Phase 2 — ship as a new section

Decision: leave `home-hero` untouched; ship the slideshow as a new section the merchant adds in Studio. Presets carry the demo content, so no seed run is needed.

- `hero-slideshow` (section, INDEX): gradient, stats textarea, 01/02 controls whose active underline is the autoplay progress bar, timing state (`active` for images, `shown` for copy). Passes `{ index, active, shown }` to each slide through `SlideshowContext`.
- `hero-slide` (child): image + focus select, field tag text, featured product (own loader), and a `section-content` child holding the shared subheading/heading/paragraph/buttons, so copy is edited in Studio. All slides share one grid cell; inactive copy stays in the DOM but invisible, so the hero keeps the tallest slide's height.
- The headline accent word from the demo is dropped: shared `Heading` content is plain text. Add a markup convention later only if wanted.
- `src/app/test/` removed after the section was added in Studio.

## Files touched

- `src/app/test/page.tsx`, `src/app/test/hero-variants.tsx` (phase 1 preview, deleted)
- `public/images/editorial/hero-ridge-lookout.webp`, `public/images/editorial/hero-pack-climb.webp`, `docs/editorial-image-sources.md` (clear-sky photos to match the rest of the theme; the earlier storm/fog picks were dropped)
- `src/app/globals.css` (`hero-progress` keyframes for the slide timer)
- `src/sections/hero-slideshow/` (`index.tsx`, `schema.ts`, `context.ts`, `slide/index.tsx`, `slide/schema.ts`, `slide/loader.ts`)
- `src/lib/weaverse/components.ts`, `src/lib/weaverse/section-schemas.ts`, `src/lib/weaverse/server-components.ts`
- `.weaverse/specs/2026-09-14--home-hero-polish/*`
