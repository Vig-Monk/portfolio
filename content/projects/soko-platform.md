---
title: "Soko Platform"
slug: "soko-platform"
summary: "A multi-tenant SaaS API for East African commerce, starting with fresh produce traders at Wakulima Market."
categories: ["SaaS", "Backend"]
techStack: ["TypeScript", "Express", "PostgreSQL", "Neon", "Render"]
architectureHighlights: ["Multi-tenancy", "Branded ID types", "ORM-free SQL", "Migrations"]
githubUrl: ""
demoUrl: ""
featured: true
order: 1
---

## Overview

Soko is a multi-tenant SaaS API built for East African commerce, with the
first target market being fresh produce traders at Wakulima Market in
Nairobi. I worked there as a market porter, which is where the idea — and
the conviction that the problem is real — came from.

## Problem

Small traders at markets like Wakulima run on cash, memory, and paper. There's
no shared system for tracking inventory, orders, or basic sales records across
multiple traders or stalls, and most off-the-shelf SaaS tools assume a single
business owner rather than many independent tenants sharing infrastructure.

## Solution

A multi-tenant API where each trader's data is strictly isolated by
organization, but the underlying infrastructure — database, auth, deployment —
is shared. Built with strict-mode TypeScript throughout and branded types
(`OrgId`, `UserId`) so tenant-scoping mistakes get caught at compile time
rather than discovered in production.

## Architecture

- **No ORM, by design.** All database access goes through the raw `pg`
  driver with hand-written SQL. This keeps every query's actual behavior
  visible — no hidden N+1s, no abstraction hiding what's really being sent
  to PostgreSQL.
- **Branded types for tenant isolation.** `OrgId` and `UserId` are distinct
  types at the TypeScript level, not just `string` aliases, so a function
  expecting one can't silently accept the other.
- **Migrations as the source of truth.** Schema changes go through versioned
  PostgreSQL migrations rather than being inferred from model definitions.

## Technical Challenges

Designing tenant isolation that's enforced structurally rather than just by
convention was the central challenge — it's easy to add a `WHERE org_id = ?`
clause everywhere, and just as easy to forget it once. Branded types push
that check earlier, into the type system, without needing a row-level
security layer for the current stage of the project.

## Lessons Learned

Committing to "no ORM" early forced a clearer mental model of what the
database is actually doing on every request — useful discipline, even though
it means writing more SQL by hand. The tradeoff has been worth it for a
system where correctness of tenant boundaries matters more than development
speed.

## Stack

TypeScript · Express · PostgreSQL (raw `pg`) · Neon · Render