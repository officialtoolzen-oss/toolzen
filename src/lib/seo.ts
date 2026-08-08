import type { Metadata } from "next";
import { tools } from "@/data/tools";

export const metadataBase = new URL("https://toolzen.com");
export const siteTitle = "ToolZen";
export const siteDescription =
  "ToolZen is a fast, modern suite of free online tools for developers, creators, and marketers.";
export const siteKeywords = [
  "online tools",
  "free utilities",
  "PDF tools",
  "QR codes",
  "developer tools",
  "image compressor",
  "toolzen",
];

export const siteMetadata: Metadata = {
  metadataBase,
  title: {
    default: siteTitle,
    template: "%s | ToolZen",
  },
  description: siteDescription,
  keywords: siteKeywords,
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  verification: {
    google: "REPLACE_WITH_GOOGLE_VERIFICATION_CODE",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    url: metadataBase.toString(),
    siteName: siteTitle,
    images: [
      {
        url: `${metadataBase.toString()}og-card.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  alternates: {
    canonical: metadataBase.toString(),
  },
};

export function createToolMetadata(tool: (typeof tools)[number]): Metadata {
  return {
    title: `${tool.name} | ToolZen`,
    description: tool.seoDescription,
    metadataBase,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: `${tool.name} | ToolZen`,
      description: tool.seoDescription,
      type: "website",
      url: `${metadataBase.toString()}${tool.path}`,
      images: [
        {
          url: tool.ogImage,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${tool.name} | ToolZen`,
      description: tool.seoDescription,
    },
    alternates: {
      canonical: `${metadataBase.toString()}${tool.path}`,
    },
  };
}

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": siteTitle,
      "url": metadataBase.toString(),
      "logo": `${metadataBase.toString()}logo.png`,
      "sameAs": [
        "https://www.facebook.com/toolzen",
        "https://twitter.com/toolzen",
      ],
    },
    {
      "@type": "WebSite",
      "url": metadataBase.toString(),
      "name": siteTitle,
      "description": siteDescription,
      "publisher": {
        "@type": "Organization",
        "name": siteTitle,
      },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": metadataBase.toString(),
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "name": siteTitle,
      "operatingSystem": "Web",
      "applicationCategory": "BusinessApplication",
      "description": siteDescription,
      "url": metadataBase.toString(),
    },
  ],
};
