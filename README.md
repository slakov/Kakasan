# Kakasan

Landing page for Raj Sherjeet Singh (Slavik), a yoga teacher based in Den Haag.

## Website

This repository is published with GitHub Pages from the `main` branch. The site is dependency-free and uses static HTML, CSS, JavaScript, and local image assets.

The localized HTML files, privacy pages, sitemap, and robots file are generated from `scripts/build-site.mjs`. After editing the content or SEO configuration, rebuild them with:

```sh
node scripts/build-site.mjs
```

## Languages and SEO

English is the default language. Complete localized pages are available at stable, crawlable URLs for English (`/`), Ukrainian (`/uk/`), Russian (`/ru/`), and Dutch (`/nl/`). The Russian and Dutch pages make clear that lessons and personal communication are offered in English or Ukrainian.

Each localized page has its own title and description, canonical URL, reciprocal `hreflang` links, social-sharing metadata, and JSON-LD structured data. `sitemap.xml` lists the localized URLs and `robots.txt` points search engines to the sitemap.

## Analytics and privacy

Google Analytics 4 uses measurement ID `G-NZ9WMGEK0Q` in basic consent mode. The Google tag is not requested and no analytics data is sent until a visitor explicitly accepts optional analytics. Advertising storage, advertising user data, advertising personalization, Google Signals, and ad-personalization features remain disabled.

Visitors can decline analytics, reopen their choice from the footer, or withdraw consent. The preference is stored only in browser `localStorage`. The site tracks page views and a small set of non-identifying interactions after consent; it does not send revealed email addresses or phone numbers to analytics.

The website has no contact form or external fonts. Email and phone links are assembled in the browser only after a visitor asks to reveal them. This discourages basic scraping, but public contact details cannot be made completely secret on a static website.
