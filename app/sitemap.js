import { getAllPosts } from "@/lib/blog";

export default function sitemap() {
  const baseUrl = "https://www.hazaeldevs.com";
  const lastModified = new Date();

  const staticRoutes = [
    { url: baseUrl,                    changeFrequency: "monthly",  priority: 1.0 },
    { url: `${baseUrl}/services`,      changeFrequency: "monthly",  priority: 0.9 },
    { url: `${baseUrl}/portfolio`,     changeFrequency: "weekly",   priority: 0.9 },
    { url: `${baseUrl}/systems`,       changeFrequency: "monthly",  priority: 0.8 },
    { url: `${baseUrl}/about`,         changeFrequency: "monthly",  priority: 0.7 },
    { url: `${baseUrl}/contact`,       changeFrequency: "yearly",   priority: 0.6 },
    { url: `${baseUrl}/blog`,          changeFrequency: "weekly",   priority: 0.9 },
  ].map((r) => ({ ...r, lastModified }));

  const posts = getAllPosts();
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
