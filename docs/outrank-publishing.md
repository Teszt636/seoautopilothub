# Outrank Publishing Notes

## Required environment variable

- `OUTRANK_API_KEY`

Keep this value server-side only. Do not commit it, paste it into source files, expose it with a `NEXT_PUBLIC_` prefix, log it, or render it into HTML.

## How the integration works

SEOAutopilotHub uses Outrank's official Next.js Blog API client package, `outrank-next-js-blog`, from server-side code in `lib/outrank.ts`.

The Outrank documentation describes a default `/blog` starter that reads published articles through a private API key. This site adapts the same server-side API pattern to the existing `/guides/[slug]` route instead of adding a separate `/blog` section.

The integration only reads `process.env.OUTRANK_API_KEY` inside server-only utilities. Client components and browser JavaScript never receive the key.

## Guide URL generation

Published Outrank article slugs are mapped to:

```text
/guides/[slug]
```

Canonical URLs are generated as:

```text
https://www.seoautopilothub.com/guides/[slug]
```

Manual guide articles keep priority. If a manual guide and an Outrank article share the same slug, the manual guide renders at `/guides/[slug]`.

Outrank slugs should be clean lowercase slugs with hyphens, for example:

```text
seo-content-workflow-for-agencies
```

The site filters Outrank guide URLs to lowercase `a-z`, `0-9`, and hyphen-only slugs. Slugs outside that pattern are not listed or rendered.

## Publishing and indexing behavior

The Outrank Next.js Blog API returns published articles for list and article reads. Draft or unavailable articles are not shown in `/guides`, do not render publicly, and are not included in the sitemap.

Individual Outrank article pages return 404 when:

- the API key is missing,
- the slug is unavailable,
- the article is not returned by Outrank,
- the slug is not a clean lowercase guide slug,
- the Outrank API request fails.

## Sitemap inclusion

`app/sitemap.ts` fetches published Outrank article summaries server-side and merges them into the existing sitemap under `/guides/[slug]`.

If `OUTRANK_API_KEY` is missing or the Outrank API is unavailable during build or runtime, the sitemap still returns existing static, top-level, and manual guide URLs. Outrank URLs are omitted until they can be fetched safely.

Manual guide slugs are deduplicated before Outrank sitemap entries are added.

## Guides hub behavior

`/guides` lists existing manual guide articles and, when the API is available, a separate section of published Outrank guide articles. If Outrank cannot be reached, the hub still renders the existing manual content.

## Metadata and schema

Outrank guide pages generate:

- title,
- meta description,
- canonical URL,
- Article JSON-LD,
- BreadcrumbList JSON-LD.

FAQPage JSON-LD is emitted only when structured FAQ data is available. The current Outrank Next.js Blog API package returns article HTML, Markdown, tags, images, and timestamps, but it does not expose structured FAQ fields, so no FAQ schema is generated for Outrank articles unless the API adds that data later.

## Error handling

Outrank API failures are handled inside `lib/outrank.ts`.

- List failures return an empty article list.
- Individual article failures return `null`, causing `/guides/[slug]` to return 404.
- Logs use safe messages such as request context and status code only.
- The API key is never logged.

## Editorial reminders

- Review titles, claims, internal links, and affiliate CTAs before publishing.
- Keep Backlink Exchange disabled during the first test phase unless explicitly approved.
- Do not publish unreviewed risky claims.
- Confirm every published slug is clean, lowercase, and suitable for `/guides/[slug]`.
