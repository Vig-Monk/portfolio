---
title: "Joy Agency"
slug: "joy-agency"
summary: "A domestic staffing platform with a full admin dashboard, built on Vue 3, Express, and MongoDB."
categories: ["Full Stack", "SaaS"]
techStack: ["Vue 3", "Express", "MongoDB", "Cloudinary"]
architectureHighlights: ["Admin dashboard", "Unsigned image uploads", "Dark mode theming"]
githubUrl: ""
demoUrl: ""
featured: true
order: 2
---

## Overview

Joy Agency is a platform for a domestic staffing business, covering both the
public-facing site and a full internal admin dashboard for managing staff
listings and client interactions.

## Problem

The agency needed a way to list available staff with photos, manage listings
without touching code, and present a professional public face — while keeping
the admin side simple enough to actually use day-to-day.

## Solution

A Vue 3 frontend backed by an Express/MongoDB API, with Cloudinary handling
photo uploads directly from the browser via unsigned upload presets — no
server-side upload handling needed, which kept the backend simpler.

## Architecture

- **Unsigned Cloudinary uploads.** Photos go straight from the client to
  Cloudinary using an unsigned upload preset, avoiding the need to proxy
  large file uploads through the API server.
- **Full admin dashboard.** Built out over several iterations to support
  listing management, with dark mode theming applied consistently across
  both public and admin views.
- **CORS and deployment hardening.** Working through cross-origin issues
  between the Vue frontend and Express API in production surfaced several
  configuration details that don't show up in local development.

## Technical Challenges

Getting Cloudinary's unsigned upload flow right — and debugging CORS once
the frontend and backend were deployed separately — took more iteration than
expected. Local dev hides a lot of cross-origin behavior that only appears
once both pieces are actually deployed.

## Lessons Learned

Offloading file storage entirely to a third-party service (rather than
handling uploads through the API) simplified the backend considerably. It's
a pattern worth defaulting to unless there's a specific reason to proxy
uploads through your own server.

## Stack

Vue 3 · Express · MongoDB · Cloudinary

GitHub: [joy-agency](https://github.com/Vig-Monk/joy-agency-)
Live Demo [joy-agency-](https://joyrecruitmentagency.vercel.app/)