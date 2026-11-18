---
title: "Flemela — The Sunrise Bookstore"
slug: "flemela"
summary: "A full-stack e-commerce platform for an independent bookstore — physical and digital catalog, automated ebook delivery, and a complete admin dashboard."
categories: ["E-commerce", "Full Stack"]
techStack: ["Nuxt 3", "TypeScript", "Pinia", "Tailwind CSS", "Zod", "Leaflet", "Tiptap"]
architectureHighlights: ["Admin dashboard", "Curated storefront sections", "Tokenized ebook delivery", "Catalogue automation tooling"]
githubUrl: ""
demoUrl: "https://www.thesunrisebookstore.com"
featured: true
order: 2
---

## Overview

Flemela (The Sunrise Bookstore) is a full-stack e-commerce platform for an
independent bookstore, selling both physical books and DRM-free digital
downloads. It powers a public storefront, a complete admin back office, and a
suite of catalogue automation tooling — built on Nuxt 3 with a server API
layer close to the data.

## Problem

Independent bookstores compete with global marketplaces but can't afford
off-the-shelf e-commerce that treats digital downloads, curated shelves, and
localized delivery as afterthoughts. The client needed one system that could
run the whole shop: merchandising, orders, ebook fulfillment, and storefront
content — without a developer in the loop for day-to-day changes.

## Solution

A Nuxt 3 monolith with server API routes, a Pinia-powered storefront, and a
custom admin dashboard covering banners, curated shelves, categories, orders,
store location (Leaflet pin picker), and announcement tickers — all editable
at runtime, no redeploys.

## Architecture

- **Server API layer in Nuxt.** Checkout, orders, books, curated-sections,
  category shelves, banners, and a dynamic `sitemap.xml` route — all served
  from the same Nuxt app, with Zod-validated payloads at the boundary.
- **Rich-content admin.** Tiptap-powered editing for product and content
  blocks, so non-developers can shape the storefront safely.
- **Digital delivery pipeline.** Tokenized ebook downloads tied to orders,
  with catalogue tooling that audits listings, attaches PDFs, backfills
  covers, and verifies public-domain editions automatically.
- **SEO as a feature.** Dynamic sitemap, structured metadata, and per-route
  Open Graph tags — the storefront is engineered to be found, not just to work.

## Technical Challenges

The hard part wasn't any single feature — it was operational: keeping a
growing, messy real-world catalogue (thousands of SKUs with missing covers,
inconsistent metadata, and mixed physical/digital formats) consistent without
hand-editing thousands of records. The `tools/catalogue` scripts — audits,
PDF attachment, cover uploads, Gutenberg verification — turned weeks of manual
data work into repeatable, idempotent automation.

## Lessons Learned

For real businesses, the admin dashboard *is* the product. Every hour spent
making back-office workflows fast and safe pays back more than storefront
polish — because the storefront only looks after itself if the operator can
actually run it.

## Stack

Nuxt 3 · TypeScript · Pinia · Tailwind CSS · Zod · Leaflet · Tiptap
