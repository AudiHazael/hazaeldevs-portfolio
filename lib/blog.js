import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

// ─── Get all posts ────────────────────────────────────────────────────────────
export function getAllPosts() {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
    const { data, content } = matter(raw);
    return {
      ...data,
      content,
      slug: data.slug || filename.replace(".mdx", ""),
    };
  });

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// ─── Get single post by slug ──────────────────────────────────────────────────
export function getPostBySlug(slug) {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  for (const filename of files) {
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
    const { data, content } = matter(raw);
    const postSlug = data.slug || filename.replace(".mdx", "");
    if (postSlug === slug) {
      return { ...data, content, slug: postSlug };
    }
  }
  return null;
}

// ─── Get posts by category ────────────────────────────────────────────────────
export function getPostsByCategory(category) {
  return getAllPosts().filter((p) => p.category === category);
}

// ─── Get posts by tag ─────────────────────────────────────────────────────────
export function getPostsByTag(tag) {
  return getAllPosts().filter((p) => p.tags?.includes(tag));
}

// ─── Get related posts ────────────────────────────────────────────────────────
export function getRelatedPosts(currentSlug, category, limit = 3) {
  return getAllPosts()
    .filter((p) => p.slug !== currentSlug && p.category === category)
    .slice(0, limit);
}

// ─── Get all unique tags ──────────────────────────────────────────────────────
export function getAllTags() {
  const posts = getAllPosts();
  const tags = new Set();
  posts.forEach((p) => p.tags?.forEach((t) => tags.add(t)));
  return Array.from(tags);
}

// ─── Get all unique categories ────────────────────────────────────────────────
export function getAllCategories() {
  const posts = getAllPosts();
  const cats = new Set(posts.map((p) => p.category).filter(Boolean));
  return Array.from(cats);
}
