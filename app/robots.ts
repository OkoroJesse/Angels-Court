import { MetadataRoute } from "next";
import { hotelConfig } from "@/data/hotel.config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${hotelConfig.siteUrl}/sitemap.xml`,
  };
}
