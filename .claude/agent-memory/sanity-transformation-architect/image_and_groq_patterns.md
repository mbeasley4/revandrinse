---
name: image-and-groq-patterns
description: GROQ projection + image pipeline patterns established for the before/after gallery
metadata:
  type: project
---

**Image pipeline:** sanity/lib/image.ts uses the NAMED export `createImageUrlBuilder` from @sanity/image-url (the default export is deprecated in this version and the build prints a notice — AGENTS.md says heed deprecation notices, so use the named one). `urlFor(src).width(900).quality(80).auto("format").url()`.

**Gallery GROQ pattern** (before-after/page.tsx) projects url + lqip inline rather than raw image objects, so blur-up works without extra client work:
```
*[_type == "beforeAfterPair" && defined(before) && defined(after)]
  | order(vehicleType asc, order asc) {
    _id, description, vehicleType,
    "before": { "url": before.asset->url, "lqip": before.asset->metadata.lqip },
    "after":  { "url": after.asset->url,  "lqip": after.asset->metadata.lqip }
  }
```
lqip is passed to BeforeAfterSlider as blurBefore/blurAfter → next/image placeholder="blur".

**Client:** sanity/lib/client.ts uses useCdn: true, apiVersion 2024-01-01. Page uses `export const revalidate = 60` (ISR). next.config.ts whitelists cdn.sanity.io for next/image.

Related: [[project-overview]]
