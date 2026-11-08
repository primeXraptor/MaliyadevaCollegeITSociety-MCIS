import type { MetadataRoute } from "next";
import { settings, content } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!settings.productionUrl) return [];
  return [
    "",
    "/about",
    "/contact",
    "/terminal",
    ...Object.entries(content).flatMap(([k, v]) => [
      `/${k}`,
      ...v.map((e) => `/${k}/${e.slug}`),
    ]),
  ].map((path) => ({ url: `${settings.productionUrl}${path}` }));
}
