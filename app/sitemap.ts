import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.phoenixcloudtech.com";
  const now = new Date();

  const routes = [
    { url: baseUrl, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${baseUrl}/who-we-are`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/what-we-do`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/what-we-do/hcm-implementation`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/what-we-do/payroll-implementation`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/what-we-do/managed-services`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/what-we-do/professional-services`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/how-we-deliver`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/results`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, changeFrequency: "yearly" as const, priority: 0.9 },
  ];

  return routes.map((route) => ({
    ...route,
    lastModified: now,
  }));
}
