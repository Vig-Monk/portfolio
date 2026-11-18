---
title: "Digital Product Suite"
slug: "digital-product-suite"
summary: "Eleven developer tools and SaaS kits extracted from production systems — from a multi-tenant boilerplate to sub-25ms PostgreSQL analytics engines."
categories: ["Digital Products", "Backend"]
techStack: ["TypeScript", "PostgreSQL", "Node.js", "Express", "pg_trgm", "BullMQ"]
architectureHighlights: ["Product extraction", "Integration-tested kits", "Gumroad & Whop distribution", "Docs-first packaging"]
githubUrl: ""
demoUrl: ""
featured: true
order: 3
---

## Overview

The Digital Product Suite is a line of developer tools and SaaS starter kits
extracted from production codebases and packaged for sale on Gumroad and
Whop — not tutorials, but tested, documented engines that other engineers
drop into their own stacks.

## What's in the Suite

**Multi-tenant SaaS Starter (flagship).** Express + TypeScript + raw-SQL
multi-tenancy with `org_id` scoping, JWT auth with refresh rotation, email
verification, plan quotas, an encrypted per-org credentials vault, role-based
admin, idempotent migrations, Docker + CI — verified with an 8-test suite on a
fresh machine.

**PostgreSQL micro-engines** (each a focused, drop-in module with a
commercial Pro edition):

- **CFO Analytics CTE Engine** — full P&L, working-capital anatomy, debt-aging
  waterfalls and SKU margin rankings in a single parallel query, sub-25ms.
- **Webhook Forensics & Replay Buffer** — sub-15ms raw ingestion with HMAC
  verification, `FOR UPDATE SKIP LOCKED` claim locks, and one-click replay.
- **S3 Tokenized Download Vault** — expiring download tokens, iOS Safari probe
  shielding, 60-second quota debouncing, presigned S3/R2/MinIO URLs.
- **Multi-Tenant Nodemailer Pool** — warm SMTP transporter pooling,
  AES-256-GCM encrypted tenant credentials, verification handshakes, platform
  fallback.
- **pg_trgm Fuzzy Search** — weighted multi-column relevance ranking with
  GIN index migrations and exact-match guards for identifier columns.

**SaaS kits extracted from Soko:** a WhatsApp Commerce Kit (HMAC-verified
Meta webhooks, conversational ordering), a Bulk Import Kit (header-normalized
parsing, pg_trgm dedup, per-row transactions), a Demo Sandbox Kit
(ephemeral orgs with auto-purge for live demos), a Scale-to-Zero Jobs guide,
and an Encrypted Credentials Vault.

## Engineering Discipline Behind the Products

Every kit ships with a README quickstart, env example, schema migration,
test suite (unit or integration against real PostgreSQL), a license, and a
scrubbed repo — no secrets, no localized config. The verification bar is the
same one I apply to client work: a fresh machine should go from unzip to green
tests without a single support email.

## Why It Matters

Selling software forces a different standard of completeness. Edge cases that
are "fine for now" in a client project become bug reports from strangers.
The suite is where my engineering discipline gets audited in public.

## Stack

TypeScript · Node.js · Express · PostgreSQL (pg_trgm, raw SQL) · BullMQ · PayPal/Stripe integration patterns
