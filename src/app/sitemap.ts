import { allRoutes } from "@/lib/routes";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteMap: any = allRoutes.map((route) => ({
    url: process.env.NEXT_PUBLIC_APP_URL + route.path,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  }));

  return siteMap;
}
