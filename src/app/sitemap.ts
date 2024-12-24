import { newsAndEvents, rooms } from "@/lib/data";
import { allRoutes } from "@/lib/routes";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const websiteURL =
    process.env.NEXT_PUBLIC_APP_URL || "https://www.theladakhavenue.com"; // Using ENV or fallback

  const siteMap: any = allRoutes.map((route) => ({
    url: process.env.NEXT_PUBLIC_APP_URL + route.path,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  }));

  const dynamicRooms = rooms.flatMap(({ slug }: { slug: string }) => [
    {
      url: `${websiteURL}/our-rooms/${slug}`,
      lastModified: new Date(2024 - 15 - 12), // Ensure correct format
      changeFrequency: "monthly", // Adjust this based on service update frequency
      priority: 0.7, // Adjust if services are crucial to the site
    },
  ]);

  const dynamicBlogs = newsAndEvents.flatMap(
    ({ slug, createdAt }: { slug: string; createdAt: string }) => [
      {
        url: `${websiteURL}/news-and-events/${slug}`,
        lastModified: new Date(createdAt), // Ensure correct format
        changeFrequency: "weekly", // Adjust this based on blog update frequency
        priority: 0.7, // Adjust if blogs are crucial to the site
      },
    ]
  );

  return [...siteMap, ...dynamicBlogs, ...dynamicRooms];
}
