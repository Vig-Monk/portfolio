---
title: "Skills Library — AI-Assisted Engineering Protocol"
slug: "skills-library"
summary: "A versioned library of rules, templates, and evals that make AI-assisted fullstack work consistent and verifiable — TypeScript, Nuxt, Node, raw PostgreSQL."
categories: ["Tooling"]
techStack: ["TypeScript", "Node.js", "PostgreSQL", "Nuxt", "Markdown"]
architectureHighlights: ["Router-based skill bundles", "Eval harness", "Stack-specific profiles", "CHANGELOG-driven"]
githubUrl: ""
demoUrl: ""
featured: false
order: 6
---

## Overview

The Skills Library is a versioned, structured set of rules, templates, and
worked examples for AI-assisted fullstack engineering — TypeScript, Nuxt/Vue,
Node, and PostgreSQL with the raw `pg` driver. Instead of one giant prompt, it
routes tasks to small, focused bundles and measures whether they work.

## Problem

AI-assisted development fails quietly: the model almost follows your
conventions, almost handles your edge cases, almost matches your architecture.
For a solo developer shipping production systems, "almost" is where bugs live.

## Solution

A router-based library (`00-index.md` maps task → skill bundle) with:

- **Core protocols** — an engineering protocol (recon → plan → slices → verify)
  that works standalone, plus backend, design, quality, finance, and marketing
  bundles loaded on demand.
- **Stack profiles** — one per stack (node-postgres-pg, nuxt-vue, android-termux,
  node-express-mongo) and one per project, encoding environment constraints
  like "Termux-compatible, no native binaries, no ORM".
- **Templates** — migrations, ledger schemas, CI configs, ADRs, metric specs,
  motion CSS, and more, ready to instantiate.
- **Evals** — checks that verify the AI actually followed the bundle, not just
  that it produced plausible output.

## Lessons Learned

The leverage in AI tooling isn't smarter prompts — it's smaller scopes,
explicit constraints, and verification. Small bundles beat one giant context,
every time.

## Stack

Markdown · TypeScript · Node.js · Anthropic/OpenAI-compatible agent tooling
