import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import BlogSearch from "@/components/blog/BlogSearch";
import NewsletterSignup from "@/components/blog/NewsletterSignup";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Blog — Websites, Systems & Business Growth",
  description:
    "Practical writing on website design, business systems, and building a credible online presence. By Audi Hazael of Haza'ElDevs.",
  alternates: { canonical: "https://www.hazaeldevs.com/blog" },
  openGraph: {
    title: "Blog | Haza'ElDevs",
    description: "Practical writing on websites, business systems, and growth.",
    url: "https://www.hazaeldevs.com/blog",
  },
};

const CATEGORY_LABELS = {
  "web-design": "Web Design",
  "business-systems": "Business Systems",
};

export default function BlogPage({ searchParams }) {
  const allPosts = getAllPosts();
  const categories = getAllCategories();
  const activeCategory = searchParams?.category || "all";

  const filtered =
    activeCategory === "all"
      ? allPosts
      : allPosts.filter((p) => p.category === activeCategory);

  const featured = allPosts.find((p) => p.featured);
  const rest = filtered.filter((p) => p.slug !== featured?.slug);

  return (
    <>
      <Navbar />
      <main className="pt-24 text-zinc-100">
        {/* ── Hero ── */}
        <section className="px-6 md:px-10 pt-16 pb-12 md:max-w-[80%] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="text-purple-300/50 text-sm font-semibold uppercase tracking-widest">
                Blog
              </span>
              <h1 className="mt-3 text-5xl md:text-6xl font-bold text-zinc-50 leading-[1.05] tracking-tight">
                Writing that{" "}
                <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-300 to-fuchsia-400">
                  works.
                </span>
              </h1>
              <p className="mt-4 text-gray-400 max-w-lg leading-relaxed">
                Practical writing on website design, business systems, and
                building a credible online presence. No fluff.
              </p>
            </div>
            {/* <BlogSearch posts={allPosts} /> */}
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mt-8">
            <Link
              href="/blog"
              className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                activeCategory === "all"
                  ? "bg-purple-500/20 border-purple-500/40 text-purple-300"
                  : "border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200"
              }`}
            >
              All
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/blog?category=${cat}`}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-purple-500/20 border-purple-500/40 text-purple-300"
                    : "border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200"
                }`}
              >
                {CATEGORY_LABELS[cat] || cat}
              </Link>
            ))}
          </div>
        </section>

        {/* ── Featured post ── */}
        {featured && activeCategory === "all" && (
          <section className="px-6 md:px-10 pb-12 border-t border-zinc-800">
            <div className="md:max-w-[80%] mx-auto pt-12">
              <span className="text-xs font-semibold text-purple-400/70 uppercase tracking-widest">
                Featured
              </span>
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4 bg-zinc-900/40 hover:bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-8 transition-all duration-200"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {featured.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-50 leading-snug group-hover:text-white transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed">
                    {featured.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-zinc-500">
                    <span>
                      {new Date(featured.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span>·</span>
                    <span>{featured.readingTime} min read</span>
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    <ArrowLongRightIcon className="w-8 h-8 text-purple-400" />
                  </span>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* ── Post grid ── */}
        <section className="px-6 md:px-10 py-12 border-t border-zinc-800">
          <div className="md:max-w-[80%] mx-auto space-y-8">
            {rest.length === 0 ? (
              <p className="text-zinc-500 text-sm">
                No posts in this category yet.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {rest.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col bg-zinc-900/40 hover:bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-6 space-y-4 transition-all duration-200"
                  >
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags?.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="font-bold text-zinc-50 text-lg leading-snug group-hover:text-white transition-colors flex-1">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-zinc-500 pt-2 border-t border-zinc-800">
                      <span>
                        {new Date(post.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span>{post.readingTime} min read</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── Newsletter ── */}
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  );
}
