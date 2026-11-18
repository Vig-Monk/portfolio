---
title: "Zamari Surfaces"
slug: "zamari-surfaces"
summary: "A catalog and quote-request website for a bathroom & kitchen fixtures studio — collections, finish customizer, and a WhatsApp quote flow."
categories: ["Full Stack"]
techStack: ["Nuxt 3", "Vue 3", "Tailwind CSS", "TypeScript"]
architectureHighlights: ["Component-driven catalog", "Quote-request funnel", "Conversion-focused UX"]
githubUrl: ""
demoUrl: ""
featured: false
order: 5
---

## Overview

Zamari Surfaces is a marketing and catalog site for a studio selling bathroom
and kitchen fixtures — sinks, faucets, and natural stone surfaces (granite,
quartz, marble). The site's job is simple and hard: make a premium catalog
feel tangible on a phone, and turn interest into quote requests.

## Solution

A Nuxt 3 single-page experience built from focused, reusable sections —
hero, collections, a finish customizer for visualizing materials, assurance
and reviews sections, and a quote form with a sticky bottom bar on mobile so
the call-to-action is never more than a thumb away.

## Architecture

- **Component-per-section design.** Each storefront section is a self-contained
  Vue component, making the page easy to reorder, A/B, and extend without
  touching global state.
- **Conversion-first layout.** The quote funnel is persistent (sticky mobile
  bar, repeated CTAs) and low-friction — a visitor is never more than one tap
  from requesting a quote.
- **Config-driven content.** Product and collection data live in composables,
  so catalog updates don't require template surgery.

## Lessons Learned

For local commerce, the website is a salesperson that works nights and
weekends. Every section either builds trust (reviews, assurance) or lowers the
cost of asking for a quote — anything else is decoration.

## Stack

Nuxt 3 · Vue 3 · Tailwind CSS · TypeScript
