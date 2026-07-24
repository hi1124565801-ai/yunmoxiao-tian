# Search submission checklist for Yunmoxiao Tian / 田云墨筱

Official canonical website:

<https://hi1124565801-ai.github.io/yunmoxiao-tian/>

Public sitemap:

<https://hi1124565801-ai.github.io/yunmoxiao-tian/sitemap.xml>

## Verification tokens

Add real verification tokens once in `config/seo.ts`:

- `googleSiteVerification`
- `bingSiteVerification`
- `baiduSiteVerification`

Leave a field as `null` until the corresponding search engine provides a real
token. Empty or invented verification metadata is intentionally not rendered.

## Google Search Console

1. Add the URL-prefix property
   `https://hi1124565801-ai.github.io/yunmoxiao-tian/`.
2. Choose HTML tag verification.
3. Copy only the token value into `googleSiteVerification` in `config/seo.ts`.
4. Deploy the site and complete verification in Search Console.
5. Submit
   `https://hi1124565801-ai.github.io/yunmoxiao-tian/sitemap.xml`.
6. Use URL Inspection and request indexing for:
   - `https://hi1124565801-ai.github.io/yunmoxiao-tian/`
   - `https://hi1124565801-ai.github.io/yunmoxiao-tian/research/`
   - `https://hi1124565801-ai.github.io/yunmoxiao-tian/writing/`
   - `https://hi1124565801-ai.github.io/yunmoxiao-tian/media/`
   - `https://hi1124565801-ai.github.io/yunmoxiao-tian/photography/`
   - `https://hi1124565801-ai.github.io/yunmoxiao-tian/literary-mapping/`
7. Review Page Indexing, Crawl, Core Web Vitals, and Enhancements reports after
   Google has processed the property.

## Bing Webmaster Tools

1. Add the same URL-prefix site or import the verified Search Console property.
2. If using a meta tag, copy its token into `bingSiteVerification`.
3. Deploy and verify ownership.
4. Submit the public sitemap.
5. Use URL Submission for the homepage and the five primary section pages.

## Baidu Search Resource Platform

1. Add the full HTTPS project-site URL.
2. Select HTML tag verification when available.
3. Copy the real token into `baiduSiteVerification`.
4. Deploy and complete ownership verification.
5. Submit the sitemap or individual URLs through the submission tools available
   to the verified account.

Search-engine account verification, ownership confirmation, and manual indexing
requests must be completed by the website owner. Code changes cannot log in,
accept account terms, or request indexing on the owner’s behalf.

## Root robots.txt limitation

This portfolio is a GitHub Pages project site under `/yunmoxiao-tian/`. The
project publishes a helpful file at
`https://hi1124565801-ai.github.io/yunmoxiao-tian/robots.txt`, but the host-level
standard location is `https://hi1124565801-ai.github.io/robots.txt`.

The current project does not control that host-root location. If a separate
`hi1124565801-ai/hi1124565801-ai.github.io` user-site repository is created or
restored later, publish this at its root:

```text
User-agent: *
Allow: /

Sitemap: https://hi1124565801-ai.github.io/yunmoxiao-tian/sitemap.xml
```

Until then, keep all primary pages indexable and submit the project sitemap
directly in each webmaster platform.

## External identity links

Add the canonical website to profiles and documents that you personally control:

1. LinkedIn Contact Info.
2. LinkedIn Featured.
3. GitHub profile bio or website field.
4. GitHub Profile README (`hi1124565801-ai/hi1124565801-ai`).
5. The contact/header area of the CV.
6. Email signatures.
7. Literary City Atlas Creator or About section.
8. Editable Peking University profiles or public introductions.
9. The WeChat publication introduction or relevant articles.

Use descriptive link text such as:

- Yunmoxiao Tian
- Yunmoxiao Tian’s Personal Website
- 田云墨筱个人主页

Avoid using “click here” for every link. These identity-consistent links help
search engines connect Yunmoxiao Tian, Tian Yunmoxiao, and 田云墨筱 as the same
person.
