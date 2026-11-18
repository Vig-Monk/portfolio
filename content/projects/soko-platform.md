---
title: "Soko Platform"
slug: "soko-platform"
summary: "A multi-tenant SaaS API for commerce — strict tenant isolation, ORM-free SQL, and branded ID types, built from the inside of the problem."
categories: ["SaaS", "Backend"]
techStack: ["TypeScript", "Express", "PostgreSQL", "Neon", "Render"]
architectureHighlights: ["Multi-tenancy", "Branded ID types", "ORM-free SQL", "55 migrations"]
githubUrl: ""
demoUrl: ""
featured: true
order: 1
---

## Overview

Soko is a multi-tenant SaaS API for commerce, built for operators who run on
cash, memory, and paper — and for the SaaS products that want to serve them.
I worked inside informal market commerce before writing a line of code for it,
which is where the idea — and the conviction that the problem is real — came
from.

## Problem

Small and independent commerce runs on fragmented, offline processes. There is
no shared system for tracking inventory, orders, or basic sales records across
independent tenants, and most off-the-shelf SaaS tools assume a single business
owner rather than many independent tenants sharing infrastructure.

## Solution

A multi-tenant API where each tenant's data is strictly isolated by
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
  PostgreSQL migrations (55 and counting) rather than being inferred from
  model definitions.
- **Production auth.** JWT access/refresh with rotation and reuse detection,
  email verification, plan quotas, and per-org encrypted credential vaults.

## From Platform to Products

The platform's internals have been extracted, generalized, and packaged as
independent digital products (see the Digital Product Suite case study): a
multi-tenant SaaS boilerplate, a bulk import worker, a demo-sandbox
provisioner, an encrypted credentials vault, and a scale-to-zero job-gating
pattern — each tested, zipped, and sold as a standalone kit.

## Technical Challenges

Designing tenant isolation that's enforced structurally rather than just by
convention was the central challenge — it's easy to add a `WHERE org_id = ?`
clause everywhere, and just as easy to forget it once. Branded types push that
check earlier, into the type system, without needing a row-level security layer
for the current stage of the project.

## Lessons Learned

Committing to "no ORM" early forced a clearer mental model of what the
database is actually doing on every request — useful discipline, even though
it means writing more SQL by hand. The tradeoff has been worth it for a system
where correctness of tenant boundaries matters more than development speed.
And building the platform first, then extracting products from it, taught me
that the most sellable software is usually the scaffolding you already trust
in production.

## Stack

TypeScript · Express · PostgreSQL (raw `pg`) · Neon · Render
