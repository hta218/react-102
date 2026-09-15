# Feature: Product spotlight rework

| Field            | Value                                    |
| ---------------- | ---------------------------------------- |
| **Status**       | in-progress                              |
| **Owner**        | @hta218                                  |
| **Issue**        | N/A                                      |
| **Branch**       | `main` (worked on directly, by request)  |
| **Created**      | 2026-09-15                               |
| **Last Updated** | 2026-09-15                               |

## Original Prompt

> Next, the product spotlight section. It is really poor right now. Look at the single-product section in Pilot and learn from it, then lay out here the things you plan to update so I can review first.

Decisions after reviewing the plan:

> 1. Yes, include add to cart.
> 2. Yes to the thumbnail strip, but no slideshow library; clicking a thumbnail item swaps the main preview image.
> 3. Use a light background.

## Summary

The spotlight showed one context image, a title, a few specs and a link, and vanished when a product had no context image. It becomes a compact buy module: a colorway gallery with a clickable thumbnail strip, price and sale state, colorway and size selection held in local state, the shared add-to-cart form, and a deep link to the product page. Ideas come from Pilot's single-product section; the implementation is Forward's own.
