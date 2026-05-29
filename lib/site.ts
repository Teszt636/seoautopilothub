import type { Metadata } from "next";

export const siteConfig = {
  name: "SEOAutopilotHub",
  domain: "https://www.seoautopilothub.com",
  description:
    "Practical guides, reviews, and workflows for AI SEO automation built for small businesses, agencies, and solo founders.",
  affiliateUrl: "https://outrank.so/?via=affiliate-placeholder",
  socialImage: "/opengraph-image",
};

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
};

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.domain).toString();
}

export function buildMetadata({
  title,
  description,
  path,
  type = "website",
}: MetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type,
      images: [
        {
          url: absoluteUrl(siteConfig.socialImage),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(siteConfig.socialImage)],
    },
  };
}
