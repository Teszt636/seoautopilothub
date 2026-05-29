import { absoluteUrl } from "@/lib/site";

export type NavItem = {
  label: string;
  href: string;
};

export type LinkItem = {
  title: string;
  description: string;
  href: string;
};

export type ArticleSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ArticleData = {
  slug: string;
  title: string;
  metaDescription: string;
  intro: string;
  audience: string;
  sections: ArticleSection[];
  faqs: FaqItem[];
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guides" },
  { label: "Reviews", href: "/reviews" },
  { label: "Comparisons", href: "/comparisons" },
  { label: "Outrank.so Review", href: "/outrank-so-review" },
];

export const footerNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Contact", href: "/contact" },
  { label: "Recommended tool: Outrank.so", href: "/outrank-so-review" },
];

export const guideLinks: LinkItem[] = [
  {
    title: "AI SEO Automation for Small Businesses",
    description:
      "A practical guide to what can be automated, what still needs review, and how to publish more consistently.",
    href: "/ai-seo-automation-for-small-businesses",
  },
  {
    title: "Outrank.so Review",
    description:
      "A balanced review for small businesses and agencies evaluating an AI-assisted SEO publishing workflow.",
    href: "/outrank-so-review",
  },
  {
    title: "Best AI SEO Automation Tools for Small Businesses",
    description:
      "A scaffolded comparison hub that can grow into a fuller tool evaluation resource.",
    href: "/best-ai-seo-automation-tools-for-small-businesses",
  },
];

export const comparisonLinks: LinkItem[] = [
  {
    title: "Outrank.so vs Surfer SEO",
    description:
      "Compare workflow automation, optimization depth, and where each tool fits for lean teams.",
    href: "/outrank-so-vs-surfer-seo",
  },
  {
    title: "Outrank.so vs Koala Writer",
    description:
      "A positioning page for teams comparing automation-first and writing-first approaches.",
    href: "/outrank-so-vs-koala-writer",
  },
  {
    title: "Best AI SEO Automation Tools for Small Businesses",
    description:
      "A shortlist framework for founders and local businesses choosing practical automation tools.",
    href: "/best-ai-seo-automation-tools-for-small-businesses",
  },
  {
    title: "Best SEO Autopilot Tools for Agencies",
    description:
      "A comparison template for agencies evaluating process efficiency, QA, and client scaling.",
    href: "/best-seo-autopilot-tools-for-agencies",
  },
];

export const articles: ArticleData[] = [
  {
    slug: "ai-blog-automation-for-real-estate-agents",
    title: "AI Blog Automation for Real Estate Agents",
    metaDescription:
      "Learn how real estate agents can use AI-assisted SEO workflows to publish neighborhood, buyer, and seller content more consistently.",
    intro:
      "Real estate agents rarely have time to run a proper editorial calendar. AI-assisted blog automation can help create a repeatable process for local topic research, first drafts, and publishing support without turning the site into thin content.",
    audience: "Real estate agents and small property marketing teams",
    sections: [
      {
        title: "Where real estate content bottlenecks usually happen",
        paragraphs: [
          "Most agents know they should publish neighborhood pages, market updates, and buyer or seller guides. The problem is that listing activity, client communication, and lead follow-up push content to the bottom of the stack.",
          "An automation workflow helps by giving each article a defined path from keyword target to draft to human review instead of treating every post as a one-off project.",
        ],
      },
      {
        title: "What to automate in the workflow",
        paragraphs: [
          "Start with topic clustering around neighborhoods, transaction intent, and recurring customer questions. AI can help expand outlines, draft introductions, structure FAQs, and create consistent internal link suggestions.",
        ],
        bullets: [
          "Keyword grouping for local modifiers and intent",
          "Draft outlines for buyer, seller, and neighborhood pages",
          "Meta title and description suggestions",
          "Internal link prompts between market guides and service pages",
        ],
      },
      {
        title: "What still needs human review",
        paragraphs: [
          "Local credibility matters more than speed alone. Agents should review claims about prices, school districts, regulations, and neighborhood details before publishing.",
          "They should also add personal expertise, first-hand market context, and calls to action that reflect how their business actually converts leads.",
        ],
      },
      {
        title: "A practical publishing cadence",
        paragraphs: [
          "A manageable cadence for solo agents is one neighborhood article, one transactional guide, and one FAQ-based local post per week. That is enough to build topical coverage without overwhelming the business.",
          "If the workflow is stable, an assistant or agency partner can handle formatting, imagery, and CMS upload while the agent focuses on review and local insight.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can AI write real estate blog posts without supervision?",
        answer:
          "It can create usable first drafts, but local facts, compliance-sensitive claims, and market context still need human review before publishing.",
      },
      {
        question: "What type of real estate content benefits most from automation?",
        answer:
          "Neighborhood guides, common buyer or seller questions, and repeatable local market explainers are usually the best starting points.",
      },
      {
        question: "Should real estate agents publish daily with AI?",
        answer:
          "Not necessarily. A steady weekly cadence with strong local relevance is usually more realistic and useful than daily low-quality output.",
      },
    ],
  },
  {
    slug: "automated-seo-content-for-cleaning-companies",
    title: "Automated SEO Content for Cleaning Companies",
    metaDescription:
      "A practical guide to using AI-assisted SEO content workflows for residential and commercial cleaning businesses.",
    intro:
      "Cleaning companies often compete in crowded local markets where service pages alone are not enough. An AI-assisted content workflow can help build supporting pages around service types, location modifiers, and recurring customer questions.",
    audience: "Residential and commercial cleaning companies",
    sections: [
      {
        title: "Why cleaning companies struggle to publish",
        paragraphs: [
          "Owners and office managers are busy with scheduling, hiring, quoting, and customer service. Content creation usually depends on spare time that never appears.",
          "That leads to thin websites with only a few core service pages and little local topical depth.",
        ],
      },
      {
        title: "High-value topics to systemize",
        paragraphs: [
          "Service-area pages, move-out cleaning guides, commercial cleaning FAQs, and pricing expectation articles are all strong candidates for automation support.",
        ],
        bullets: [
          "House cleaning vs deep cleaning comparisons",
          "Office cleaning checklists",
          "Move-in and move-out preparation guides",
          "Location-specific pages tied to real service coverage",
        ],
      },
      {
        title: "How to keep content trustworthy",
        paragraphs: [
          "Teams should review cleaning claims, safety guidance, and pricing statements manually. AI can help structure information, but brand trust depends on accuracy and realistic expectations.",
          "Photos, testimonials, and before-and-after process details should come from the business rather than from generic copy patterns.",
        ],
      },
      {
        title: "Operational workflow for a small team",
        paragraphs: [
          "A simple workflow is monthly topic planning, weekly draft generation, and a final review by the owner or office lead. This makes publishing predictable without adding a full-time content role.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can cleaning companies automate local landing pages?",
        answer:
          "They can automate drafts and templates, but every page should be reviewed so it reflects real service areas and unique selling points.",
      },
      {
        question: "What content works best for cleaning SEO?",
        answer:
          "Service explainers, customer question pages, area pages, and comparison-style articles usually work well when supported by real experience.",
      },
      {
        question: "Is AI SEO enough to rank a cleaning website?",
        answer:
          "No. Rankings also depend on local relevance, internal linking, technical SEO, citations, reviews, and publishing consistency.",
      },
    ],
  },
  {
    slug: "seo-autopilot-for-local-service-businesses",
    title: "SEO Autopilot for Local Service Businesses",
    metaDescription:
      "How local service businesses can build an SEO autopilot workflow without sacrificing quality or local relevance.",
    intro:
      "Local service businesses need a repeatable publishing system more than they need a complicated content operation. The goal of SEO autopilot is not to remove people from the process entirely, but to reduce the time required to publish useful pages consistently.",
    audience: "Local service businesses across home services and B2B services",
    sections: [
      {
        title: "The real meaning of SEO autopilot",
        paragraphs: [
          "For most small businesses, autopilot means semi-automated planning, drafting, and optimization with clear human checkpoints. It does not mean publishing large volumes of unchecked copy.",
          "The strongest systems reduce repetitive work while preserving editorial control on brand fit, local accuracy, and conversion intent.",
        ],
      },
      {
        title: "Core building blocks",
        paragraphs: [
          "A useful system starts with service clusters, service-area coverage, internal linking rules, and a review process for every final draft.",
        ],
        bullets: [
          "Keyword grouping by service and city intent",
          "Template-based article and page creation",
          "Internal links to core service pages",
          "Monthly QA for outdated or underperforming content",
        ],
      },
      {
        title: "Where businesses go wrong",
        paragraphs: [
          "The most common mistake is publishing generic content that could belong to any company in any city. Another is ignoring conversion strategy and treating traffic as the only outcome that matters.",
        ],
      },
      {
        title: "What a sustainable content cadence looks like",
        paragraphs: [
          "A realistic target is four to eight strong pages or articles per month. This is usually enough to show momentum while still allowing time for review, updates, and local customization.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does SEO autopilot mean fully automated publishing?",
        answer:
          "Not if quality matters. Most effective setups still include human review before content goes live.",
      },
      {
        question: "Which local businesses benefit most from this approach?",
        answer:
          "Businesses with recurring customer questions, multiple services, or service-area expansion goals usually benefit the most.",
      },
      {
        question: "How much content should a local business publish monthly?",
        answer:
          "Four to eight useful pages or articles per month is a solid starting range for many small teams.",
      },
    ],
  },
  {
    slug: "ai-seo-tools-for-wordpress-blogs",
    title: "AI SEO Tools for WordPress Blogs",
    metaDescription:
      "A practical look at AI SEO tools and workflows for WordPress site owners who want to publish more consistently.",
    intro:
      "WordPress remains the default publishing stack for many small businesses and solo founders. That makes it a natural fit for AI-assisted SEO workflows, especially when the goal is consistent publishing without adding a full editorial team.",
    audience: "WordPress site owners, small businesses, and bloggers",
    sections: [
      {
        title: "Why WordPress is well suited to AI-assisted workflows",
        paragraphs: [
          "Most WordPress sites already support categories, internal links, editorial plugins, and page templates. That makes it easier to layer in topic planning and draft production workflows without rebuilding the stack.",
        ],
      },
      {
        title: "What tools need to cover",
        paragraphs: [
          "A useful workflow should help with topic research, outlines, draft production, on-page optimization prompts, and editorial review. Publishing convenience matters, but content quality and structure matter more.",
        ],
        bullets: [
          "Keyword clustering",
          "Outline and draft generation",
          "Meta data suggestions",
          "Internal linking recommendations",
        ],
      },
      {
        title: "How to keep WordPress content maintainable",
        paragraphs: [
          "Use clean formatting, avoid overloading posts with generated fluff, and keep a process for updating old content. AI-assisted publishing works better when the site stays organized and easy to audit.",
        ],
      },
      {
        title: "A lean operating model",
        paragraphs: [
          "Many WordPress businesses can run with one person planning topics, one person reviewing drafts, and a simple checklist for formatting, links, and CTA placement before publishing.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can AI tools publish directly to WordPress?",
        answer:
          "Some workflows can support direct or assisted publishing, but review before publishing is still the safer default.",
      },
      {
        question: "Should WordPress site owners rely only on AI-generated content?",
        answer:
          "No. AI is best used as workflow support alongside keyword strategy, technical SEO, and editorial review.",
      },
      {
        question: "Do WordPress blogs need internal links in AI content?",
        answer:
          "Yes. Internal linking is one of the most important parts of turning isolated articles into a stronger SEO system.",
      },
    ],
  },
  {
    slug: "how-to-publish-30-seo-articles-per-month",
    title: "How to Publish 30 SEO Articles per Month",
    metaDescription:
      "A realistic workflow for publishing 30 SEO articles per month with AI assistance, clear QA, and manageable team roles.",
    intro:
      "Publishing 30 SEO articles per month sounds aggressive for a small team, but it is possible when the work is broken into repeatable stages. The key is to automate the repetitive steps while protecting quality at the planning and review stages.",
    audience: "Small businesses, solo founders, and agencies scaling content",
    sections: [
      {
        title: "Start with a topic system, not a volume target",
        paragraphs: [
          "Thirty articles only helps if those pages support a coherent topical map. Group topics into clusters so each draft strengthens a broader content system instead of scattering effort across unrelated keywords.",
        ],
      },
      {
        title: "Break production into stages",
        paragraphs: [
          "The workload becomes manageable when one batch handles research, another handles outlines, another handles draft generation, and another handles QA and publishing.",
        ],
        bullets: [
          "Week 1: topic clustering and keyword mapping",
          "Week 2: outline and brief creation",
          "Week 3: draft generation and review",
          "Week 4: publishing, links, and updates",
        ],
      },
      {
        title: "Protect quality with checkpoints",
        paragraphs: [
          "Use a review checklist for factual claims, internal links, search intent alignment, and CTA placement. AI makes throughput easier, but it does not replace editorial responsibility.",
        ],
      },
      {
        title: "When 30 articles per month is the wrong target",
        paragraphs: [
          "If the business cannot review drafts properly or lacks a clear topic map, lower volume and higher relevance is the better choice. Publishing consistency matters, but so does usefulness.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can one person publish 30 SEO articles per month?",
        answer:
          "It is possible with strong templates and AI support, but most solo operators still need a disciplined workflow and clear review process.",
      },
      {
        question: "Is 30 articles per month too much for a small site?",
        answer:
          "It can be if quality drops or the topics are poorly planned. Volume should follow strategy, not replace it.",
      },
      {
        question: "What matters more than article count?",
        answer:
          "Topic quality, internal linking, relevance to the business, and regular updating usually matter more than raw article volume.",
      },
    ],
  },
];

export const articleCards: LinkItem[] = articles.map((article) => ({
  title: article.title,
  description: article.metaDescription,
  href: `/${article.slug}`,
}));

export function buildBreadcrumbs(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
