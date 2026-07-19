// app/robots.js
// Next.js generates /robots.txt automatically from this file.
// Replaces any robots rules in vercel.json.

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/llms.txt", "/llms-full.txt"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-Web",
          "PerplexityBot",
          "Google-Extended",
          "CCBot",
          "Applebot-Extended",
        ],
        allow: ["/", "/llms.txt", "/llms-full.txt"],
      },
    ],
    sitemap: "https://www.hazaeldevs.com/sitemap.xml",
    host: "https://www.hazaeldevs.com",
  };
}
