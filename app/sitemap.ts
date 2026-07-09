import type { MetadataRoute } from "next";
import { siteUrl } from "./site";

// Sitemap with per-route priority + change frequency so crawlers know which
// pages matter most and how often to re-check them. Data pages (charts, records)
// change most; about/contact rarely.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: {
    path: string;
    priority: number;
    changeFrequency: "daily" | "weekly" | "monthly";
  }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/updates", priority: 0.8, changeFrequency: "daily" },
    { path: "/records", priority: 0.9, changeFrequency: "weekly" },
    { path: "/records/by-the-numbers", priority: 0.9, changeFrequency: "weekly" },
    { path: "/records/charts", priority: 0.9, changeFrequency: "weekly" },
    { path: "/certifications", priority: 0.8, changeFrequency: "weekly" },
    { path: "/music", priority: 0.8, changeFrequency: "weekly" },
    { path: "/records/awards", priority: 0.8, changeFrequency: "weekly" },
    { path: "/records/tours", priority: 0.8, changeFrequency: "weekly" },
    { path: "/records/firsts", priority: 0.7, changeFrequency: "monthly" },
    { path: "/records/africas-biggest", priority: 0.8, changeFrequency: "weekly" },
    { path: "/records/tours/festivals", priority: 0.6, changeFrequency: "monthly" },
    { path: "/records/tours/revenue", priority: 0.6, changeFrequency: "monthly" },
    { path: "/records/cars", priority: 0.6, changeFrequency: "monthly" },
    { path: "/records/tours/map", priority: 0.6, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about", priority: 0.5, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.4, changeFrequency: "monthly" },
  ];
  return routes.map((r) => ({
    url: `${siteUrl}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
