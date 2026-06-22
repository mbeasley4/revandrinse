---
name: project-overview
description: Rev & Rinse Auto Detailing — Next.js 16 + Sanity site, content model, and key facts
metadata:
  type: project
---

Rev & Rinse Auto Detailing — mobile car detailing business in Madeira, OH (45243), serving the greater Cincinnati / I-275 corridor. Site at https://revandrinse.com.

**Stack:** Next.js 16.2.6 (App Router, Turbopack), React 19, Sanity v5, next-sanity 12, Tailwind v4. Sanity project `kkqsrykv`, dataset `production`.

**Content model:** Single document type `beforeAfterPair` (sanity/schemaTypes/beforeAfterPair.ts). Fields: vehicleType (string radio: car/suv/minivan), description (string), before (image, hotspot), after (image, hotspot), order (number). No category reference docs — vehicle tiers are a fixed inline taxonomy that mirrors the pricing page.

**vehicleType values + labels:** car→"Cars", suv→"SUV", minivan→"Mini Van". Exported as `VEHICLE_TYPES` from the schema file and reused by Studio structure. Page section order is always Cars → SUV → Mini Van (driven by an array in the page, NOT by GROQ alpha sort).

**Content state (as of 2026-06-22):** 12 published beforeAfterPair docs — 6 car, 3 suv, 3 minivan. All have valid lqip metadata. Descriptions are just "Interior"/"Exterior" (legacy). The original pricing page only has TWO tiers (Sedan/Small SUV, Large SUV/Trucks/Vans) while the gallery now has THREE — these are intentionally not 1:1.

**Why:** User wanted the before/after gallery reorganized by vehicle type to match pricing structure and stand out visually.
**How to apply:** When adding gallery features, extend beforeAfterPair; keep section order array-driven; remember content is published (live site reads published via CDN, so MCP patches must be published to appear).

Related: [[seo-structure]], [[image-and-groq-patterns]]
