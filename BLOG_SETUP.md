# Blog System — Setup Instructions

## 1. Install required packages

```bash
npm install next-mdx-remote gray-matter
```

## 2. Add environment variables

Add to `.env.local`:
```bash
RESEND_AUDIENCE_ID=your-resend-audience-id-here
```

Add the same to Vercel → Settings → Environment Variables.

## 3. File structure added

```
content/
  blog/
    small-business-website-design-process.mdx
    build-credible-online-presence.mdx
    custom-business-system-automation.mdx
    lead-tracking-small-teams.mdx
    professional-websites-service-businesses.mdx

app/
  blog/
    page.js                  ← Blog index with search + filters
    [slug]/
      page.js                ← Individual post page
  api/
    newsletter/
      route.js               ← Resend Audiences API

lib/
  blog.js                    ← Utility functions (getAllPosts, getPostBySlug etc.)

components/
  blog/
    BlogSearch.js            ← Client-side search with dropdown
    GiscusComments.js        ← GitHub Discussions comments
    NewsletterSignup.js      ← Resend newsletter signup (compact + full variants)
```

## 4. Add a new blog post

Create a new `.mdx` file in `content/blog/` with this frontmatter:

```mdx
---
title: "Your Post Title"
description: "A one-sentence description for SEO and post cards."
date: "2025-03-01"
slug: "your-post-slug"
tags: ["tag-one", "tag-two"]
category: "web-design"   # or "business-systems"
readingTime: 5
featured: false          # set true to pin to top of blog page
---

Your content here in markdown...
```

Then `git push` — Vercel deploys automatically and the post is live.

## 5. Categories

Currently two categories:
- `web-design`
- `business-systems`

To add a new one, add it to the `CATEGORY_LABELS` object in `app/blog/page.js`.

## 6. Giscus comments

Already configured with:
- Repo: AudiHazael/hazaeldevs-portfolio
- Category: Announcements
- Theme: transparent_dark

Make sure GitHub Discussions is enabled on the repo (Settings → Features → Discussions ✓).
