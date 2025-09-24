import { SitemapStream } from "sitemap";
import { createWriteStream, writeFileSync } from "fs";
import { finished } from "stream/promises";

const hostname = "https://hazaeldevs-portfolio.vercel.app"; // no trailing slash

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/thank-you", changefreq: "monthly", priority: 0.8 },
];

async function generateFiles() {
  // --- Generate sitemap.xml ---
  const sitemapStream = new SitemapStream({ hostname });
  const writeStream = createWriteStream("./public/sitemap.xml", {
    encoding: "utf8",
  });

  sitemapStream.pipe(writeStream);

  // Add all links
  links.forEach((link) => sitemapStream.write(link));
  sitemapStream.end();

  // Wait until writing is finished
  await finished(writeStream);
  console.log("✅ sitemap.xml created in /public");

  // --- Generate robots.txt ---
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${hostname}/sitemap.xml
`;
  writeFileSync("./public/robots.txt", robotsTxt, { encoding: "utf8" });
  console.log("✅ robots.txt created in /public");
}

generateFiles();
