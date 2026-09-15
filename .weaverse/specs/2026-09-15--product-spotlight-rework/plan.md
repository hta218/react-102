# Plan: Product spotlight rework

## Problems

- Loader returned `null` when the product had no `context` image, so a picked product could render nothing.
- One image, title, subtitle, a few specs and a link; no price, sale state, colorways, sizes or availability.
- Eyebrow concatenated the raw category slug (`shells`).
- CTA always opened the default colorway.
- Fixed layout: image left, `minmax(380px, …)` panel, many `short-desktop` patches; `specCount` range had no bounds.
- The heading did not label the section.

## Changes

- **Loader** returns `{ product }` only; image choice moves to the component (`galleryImages` of the selected colorway).
- **Gallery**: main preview image plus a thumbnail strip (setting). Clicking a thumbnail swaps the preview. Local state, no slideshow library; the gallery remounts per colorway so the preview resets.
- **Panel** (light, `bg-surface-subtle`): eyebrow prefix + readable category label, `h2` labelling the section, price with compare-at when on sale, subtitle, colorway buttons (sold-out strike), size/option buttons (unavailable disabled), spec rows (`specCount`), shared add-to-cart form (`tone="light"`), "View full details" link deep-linked to the selected colorway and options.
- **Selection** is component state resolved through `resolveProductSelection`; it never touches the PDP's `colorway`/`size` query state.
- **Add-to-cart form** moves to `src/components/add-to-cart-form.tsx` and gains a `tone` prop (`dark` default for the PDP ink panel, `light` for light sections) for the quantity border, CTA shadow, status text and note.
- **AGENTS.md** records the approved exception: `product-spotlight` may embed the shared form with a local selection.
- **Schema**: Layout (`layoutInputs` + image position left/right), Content (eyebrow prefix, details link label, `specCount` 0–6), Media (show thumbnails), Resources (product). No store-specific handles in presets.
- **Placeholder** with no product keeps the same two-column layout using `IMAGES_PLACEHOLDERS`.

## Files touched

- `src/sections/product-spotlight/index.tsx`, `schema.ts`, `loader.ts`
- `src/components/add-to-cart-form.tsx` (moved from `src/app/products/[productHandle]/add-to-cart-form.tsx`)
- `src/app/products/[productHandle]/product-detail.tsx` (import path)
- `tests/dom/mini-cart.test.tsx` (import path)
- `AGENTS.md` (section exception for the shared add-to-cart form)
- `.weaverse/specs/2026-09-15--product-spotlight-rework/*`
