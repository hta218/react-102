# Feature: Home hero polish

| Field            | Value                                    |
| ---------------- | ---------------------------------------- |
| **Status**       | completed                                |
| **Owner**        | @hta218                                  |
| **Issue**        | N/A                                      |
| **Branch**       | `main` (worked on directly, by request)  |
| **Created**      | 2026-09-14                               |
| **Last Updated** | 2026-09-14                               |

## Original Prompt

> OK, now start polishing more thoroughly (work directly on main), section by section, page by page, starting with the home page first.
> I'm not really happy with the first hero yet. Is there a way to make this first hero more impressive? Suggest first.

Follow-up, after options A (full-bleed overlay), B (rebalanced split) and C (brand detail + motion) were proposed:

> I want to test both A and B + C => quickly create a /test route that uses a param so I can preview ?v=1 or ?v=2.

## Summary

The home hero reads as a boxed split card: stats and the featured badge fall below the fold on desktop, the headline breaks into five ragged lines, and mobile shows no image in the first viewport. This work explores two stronger directions on a throwaway `/test` route, then ports the chosen one into the `home-hero` section.
