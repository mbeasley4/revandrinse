---
name: seo-structure
description: SEO / Local SEO / AEO / GEO setup and known gaps for revandrinse.com
metadata:
  type: project
---

**NAP (consistent across site):** Rev & Rinse Auto Detailing · phone +1 513-432-2052 / "(513) 432-2052" · Madeira, OH 45243 · mobile business, no street address (uses areaServed GeoCircle, midpoint 39.1929,-84.3549, radius 32km). Socials: instagram/facebook/tiktok @revandrinseauto.

**Structured data:**
- Home (app/(site)/page.tsx): @graph with AutomotiveBusiness (@id https://revandrinse.com/#business), WebSite, FAQPage. Has geo, openingHoursSpecification (8-18 daily, by appointment). Stable @id is the canonical business entity other pages reference.
- Before/after page: @graph with AutomotiveBusiness (same @id), BreadcrumbList, ImageGallery (hasPart per vehicle tier, for GEO/AEO), FAQPage.
- app/sitemap.ts and app/robots.ts use Next metadata route conventions (robots disallows /studio).

**Gotchas fixed:** Home previously used `AutoRepair` and had NO FAQPage despite a visible FAQ — standardized to AutomotiveBusiness + added FAQPage mirroring the on-page <FAQ /> copy (Google requires SD to match visible content).

**Remaining opportunities (not yet done):** per-transformation slug pages would add more indexable URLs; LocalBusiness reviews/aggregateRating not present (no review data yet); homepage FAQ component copy is duplicated in two places (FAQ.tsx + page.tsx jsonLd) — keep them in sync.

Related: [[project-overview]]
