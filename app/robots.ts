import type { MetadataRoute } from "next";

const siteUrl = "https://revandrinse.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Keep the Studio out of search results — it's an admin surface.
        disallow: ["/studio", "/studio/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
