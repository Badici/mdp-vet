import type { MetadataRoute } from "next";

const baseUrl = "https://mdp-vet.ro";

const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/servicii", changeFrequency: "monthly", priority: 0.9 },
  { path: "/despre-noi", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.9 },
  { path: "/politica-de-cookies", changeFrequency: "yearly", priority: 0.3 },
  { path: "/politica-de-confidentialitate", changeFrequency: "yearly", priority: 0.3 },
  { path: "/termeni-si-conditii", changeFrequency: "yearly", priority: 0.3 },
  { path: "/regulament-de-ordine-interioara", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
