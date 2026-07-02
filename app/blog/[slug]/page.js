import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPosts, getRelatedPosts } from "@/lib/blog";
import GiscusComments from "@/components/blog/GiscusComments";
import NewsletterSignup from "@/components/blog/NewsletterSignup";
import {
  ArrowLongRightIcon,
  ArrowLongLeftIcon,
} from "@heroicons/react/24/outline";

// ─── Static params ────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `https://www.hazaeldevs.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.hazaeldevs.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Audi Hazael"],
      tags: post.tags,
    },
  };
}

// ─── MDX custom components ────────────────────────────────────────────────────
const components = {
  h1: (props) => (
    <h1
      className="text-3xl font-bold text-zinc-50 mt-10 mb-4 leading-tight"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="text-2xl font-bold text-zinc-50 mt-10 mb-3 leading-snug"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="text-xl font-semibold text-zinc-100 mt-8 mb-2" {...props} />
  ),
  p: (props) => <p className="text-gray-300 leading-relaxed mb-5" {...props} />,
  ul: (props) => <ul className="space-y-2 mb-5 pl-1" {...props} />,
  ol: (props) => (
    <ol className="space-y-2 mb-5 pl-5 list-decimal text-gray-300" {...props} />
  ),
  li: (props) => (
    <li className="flex items-start gap-2 text-gray-300">
      <span className="text-purple-400 mt-1 shrink-0">✦</span>
      <span {...props} />
    </li>
  ),
  strong: (props) => (
    <strong className="font-semibold text-zinc-100" {...props} />
  ),
  em: (props) => <em className="italic text-zinc-300" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-purple-500/50 pl-5 my-6 text-zinc-400 italic"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="bg-zinc-800 border border-zinc-700 rounded px-1.5 py-0.5 text-sm text-purple-300 font-mono"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 overflow-x-auto mb-5 text-sm"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="text-purple-400 hover:text-purple-300 underline underline-offset-4 transition-colors"
      {...props}
    />
  ),
  hr: () => <hr className="border-zinc-800 my-10" />,
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = getRelatedPosts(post.slug, post.category, 3);
  const postIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = allPosts[postIndex + 1] || null;
  const nextPost = allPosts[postIndex - 1] || null;

  // JSON-LD Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Audi Hazael",
      url: "https://www.hazaeldevs.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Haza'ElDevs",
      url: "https://www.hazaeldevs.com",
    },
    url: `https://www.hazaeldevs.com/blog/${post.slug}`,
    keywords: post.tags?.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />
      <main className="pt-24 text-zinc-100">
        {/* ── Post header ── */}
        <header className="px-6 md:px-10 pt-16 pb-10 border-b border-zinc-800">
          <div className="md:max-w-[65ch] mx-auto space-y-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              <ArrowLongLeftIcon className="w-4 h-4" />
              All posts
            </Link>

            <div className="flex flex-wrap gap-2">
              {post.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-zinc-50 leading-tight">
              {post.title}
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed">
              {post.description}
            </p>

            <div className="flex items-center gap-3 text-sm text-zinc-500 pt-2 border-t border-zinc-800">
              <span>Audi Hazael</span>
              <span>·</span>
              <span>
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span>·</span>
              <span>{post.readingTime} min read</span>
            </div>
          </div>
        </header>

        {/* ── Post body ── */}
        <article className="px-6 md:px-10 py-14">
          <div className="md:max-w-[65ch] mx-auto">
            <MDXRemote source={post.content} components={components} />
          </div>
        </article>

        {/* ── Compact newsletter ── */}
        <div className="px-6 md:px-10 pb-10">
          <div className="md:max-w-[65ch] mx-auto">
            <NewsletterSignup compact />
          </div>
        </div>

        {/* ── Comments ── */}
        <div className="px-6 md:px-10 pb-16">
          <div className="md:max-w-[65ch] mx-auto">
            <GiscusComments />
          </div>
        </div>

        {/* ── Prev / Next navigation ── */}
        {(prevPost || nextPost) && (
          <div className="px-6 md:px-10 py-10 border-t border-zinc-800">
            <div className="md:max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group flex flex-col gap-1 bg-zinc-900/40 hover:bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-6 transition-all duration-200"
                >
                  <span className="text-xs text-zinc-500 flex items-center gap-1">
                    <ArrowLongLeftIcon className="w-3 h-3" /> Previous
                  </span>
                  <span className="font-semibold text-zinc-100 group-hover:text-white text-sm leading-snug">
                    {prevPost.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}

              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group flex flex-col gap-1 bg-zinc-900/40 hover:bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-6 transition-all duration-200 text-right"
                >
                  <span className="text-xs text-zinc-500 flex items-center justify-end gap-1">
                    Next <ArrowLongRightIcon className="w-3 h-3" />
                  </span>
                  <span className="font-semibold text-zinc-100 group-hover:text-white text-sm leading-snug">
                    {nextPost.title}
                  </span>
                </Link>
              )}
            </div>
          </div>
        )}

        {/* ── Related posts ── */}
        {related.length > 0 && (
          <section className="px-6 md:px-10 py-12 border-t border-zinc-800">
            <div className="md:max-w-[80%] mx-auto space-y-6">
              <h2 className="text-2xl font-bold text-zinc-50">Related posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {related.map((rPost) => (
                  <Link
                    key={rPost.slug}
                    href={`/blog/${rPost.slug}`}
                    className="group flex flex-col bg-zinc-900/40 hover:bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-6 space-y-3 transition-all duration-200"
                  >
                    <h3 className="font-semibold text-zinc-100 group-hover:text-white text-sm leading-snug">
                      {rPost.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                      {rPost.description}
                    </p>
                    <span className="text-xs text-zinc-500">
                      {rPost.readingTime} min read
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <NewsletterSignup />
      </main>
      <Footer />
    </>
  );
}
