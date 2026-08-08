import { tools } from "@/data/tools";
import { metadataBase } from "@/lib/seo";
import { NextResponse } from "next/server";

export async function GET() {
  const staticPaths = ["/", "/tools", "/categories", "/about", "/contact", "/privacy-policy", "/terms"];
  const toolPaths = tools.map((tool) => `/tools/${tool.slug}`);
  const urlEntries = [...staticPaths, ...toolPaths]
    .map(
      (path) => `  <url>\n    <loc>${metadataBase.toString().replace(/\/$/, "")}${path}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.75</priority>\n  </url>`
    )
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>`;

  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
