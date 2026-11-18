import{e as v,o as S,c as w,t as _,S as n}from"./B3nYpJJW.js";const P={class:"inline-flex items-center rounded-md border border-border bg-canvas-inset px-2.5 py-1 font-mono text-xs text-ink-muted"},V=v({__name:"TechBadge",props:{label:{}},setup(e){return(t,o)=>(S(),w("span",P,_(e.label),1))}}),c=`---
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
multi-tenancy with \`org_id\` scoping, JWT auth with refresh rotation, email
verification, plan quotas, an encrypted per-org credentials vault, role-based
admin, idempotent migrations, Docker + CI — verified with an 8-test suite on a
fresh machine.

**PostgreSQL micro-engines** (each a focused, drop-in module with a
commercial Pro edition):

- **CFO Analytics CTE Engine** — full P&L, working-capital anatomy, debt-aging
  waterfalls and SKU margin rankings in a single parallel query, sub-25ms.
- **Webhook Forensics & Replay Buffer** — sub-15ms raw ingestion with HMAC
  verification, \`FOR UPDATE SKIP LOCKED\` claim locks, and one-click replay.
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
`,T=Object.freeze(Object.defineProperty({__proto__:null,default:c},Symbol.toStringTag,{value:"Module"})),u=`---
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
  category shelves, banners, and a dynamic \`sitemap.xml\` route — all served
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
hand-editing thousands of records. The \`tools/catalogue\` scripts — audits,
PDF attachment, cover uploads, Gutenberg verification — turned weeks of manual
data work into repeatable, idempotent automation.

## Lessons Learned

For real businesses, the admin dashboard *is* the product. Every hour spent
making back-office workflows fast and safe pays back more than storefront
polish — because the storefront only looks after itself if the operator can
actually run it.

## Stack

Nuxt 3 · TypeScript · Pinia · Tailwind CSS · Zod · Leaflet · Tiptap
`,x=Object.freeze(Object.defineProperty({__proto__:null,default:u},Symbol.toStringTag,{value:"Module"})),h=`---
title: "Joy Agency"
slug: "joy-agency"
summary: "A domestic staffing platform with a full admin dashboard, built on Vue 3, Express, and MongoDB."
categories: ["Full Stack", "SaaS"]
techStack: ["Vue 3", "Express", "MongoDB", "Cloudinary"]
architectureHighlights: ["Admin dashboard", "Unsigned image uploads", "Dark mode theming"]
githubUrl: ""
demoUrl: ""
featured: false
order: 4
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
Live Demo [joy-agency-](https://joyrecruitmentagency.vercel.app/)`,A=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"})),p=`---
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
Node, and PostgreSQL with the raw \`pg\` driver. Instead of one giant prompt, it
routes tasks to small, focused bundles and measures whether they work.

## Problem

AI-assisted development fails quietly: the model almost follows your
conventions, almost handles your edge cases, almost matches your architecture.
For a solo developer shipping production systems, "almost" is where bugs live.

## Solution

A router-based library (\`00-index.md\` maps task → skill bundle) with:

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
`,j=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),m=`---
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
(\`OrgId\`, \`UserId\`) so tenant-scoping mistakes get caught at compile time
rather than discovered in production.

## Architecture

- **No ORM, by design.** All database access goes through the raw \`pg\`
  driver with hand-written SQL. This keeps every query's actual behavior
  visible — no hidden N+1s, no abstraction hiding what's really being sent
  to PostgreSQL.
- **Branded types for tenant isolation.** \`OrgId\` and \`UserId\` are distinct
  types at the TypeScript level, not just \`string\` aliases, so a function
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
convention was the central challenge — it's easy to add a \`WHERE org_id = ?\`
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

TypeScript · Express · PostgreSQL (raw \`pg\`) · Neon · Render
`,E=Object.freeze(Object.defineProperty({__proto__:null,default:m},Symbol.toStringTag,{value:"Module"})),g=`---
title: "Taskr"
slug: "taskr"
summary: "A MEVN-stack task management app, taken from course project to deployed portfolio piece."
categories: ["Full Stack"]
techStack: ["Vue 3", "Express", "MongoDB", "Node.js"]
architectureHighlights: ["MEVN stack", "Deployed on Render & Vercel"]
githubUrl: "https://github.com/Vig-Monk/express-api-fundamentals"
demoUrl: ""
featured: false
order: 7
---

## Overview

Taskr is a task management application built on the MEVN stack (MongoDB,
Express, Vue 3, Node.js). It started as a structured course project and was
taken further — deployed and polished into a genuine portfolio piece rather
than left as a tutorial exercise.

## Problem

Most course projects stop at "it runs locally." The goal with Taskr was to
push past that: a real deployed app, with the API on Render and the frontend
on Vercel, talking to each other in production rather than just on localhost.

## Solution

A standard MEVN task manager — create, update, complete, and organize
tasks — used deliberately as a vehicle for learning fullstack fundamentals
end-to-end, from API design through to a live deployment.

## Architecture

A straightforward REST API over Express and MongoDB, paired with a Vue 3
frontend. The interesting part wasn't novel architecture — it was closing
the loop on deployment: environment variables, CORS, build configuration,
and the small mismatches between local and production environments that
only show up once you actually ship.

## Lessons Learned

This project marked the shift from "tutorial-following" to "fullstack
fundamentals I actually understand." The deployment process in particular —
getting a separately-hosted frontend and backend to work together in
production — was where most of the real learning happened, more so than the
CRUD logic itself.

## Stack

Vue 3 · Express · MongoDB · Node.js · Render · Vercel

GitHub: [express-api-fundamentals](https://github.com/Vig-Monk/express-api-fundamentals)
Live Demo [Ludwigs-tasky](http://ludwigs-tasky.vercel.app)`,O=Object.freeze(Object.defineProperty({__proto__:null,default:g},Symbol.toStringTag,{value:"Module"})),f=`---
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
`,L=Object.freeze(Object.defineProperty({__proto__:null,default:f},Symbol.toStringTag,{value:"Module"}));function b(e){const t=e.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);if(!t)return{data:{},content:e};const[,o,i]=t,r={};for(const s of(o??"").split(`
`)){const a=s.trim();if(!a||a.startsWith("#"))continue;const l=a.indexOf(":");if(l===-1)continue;const y=a.slice(0,l).trim(),k=a.slice(l+1).trim();r[y]=I(k)}return{data:r,content:(i??"").trim()}}function I(e){if(e.startsWith("[")&&e.endsWith("]")){const t=e.slice(1,-1).trim();return t?t.split(",").map(o=>d(o.trim())).filter(Boolean):[]}return e==="true"?!0:e==="false"?!1:e!==""&&!Number.isNaN(Number(e))?Number(e):d(e)}function d(e){return e.startsWith('"')&&e.endsWith('"')||e.startsWith("'")&&e.endsWith("'")?e.slice(1,-1):e}const M=Object.assign({"/content/projects/digital-product-suite.md":c,"/content/projects/flemela.md":u,"/content/projects/joy-agency.md":h,"/content/projects/skills-library.md":p,"/content/projects/soko-platform.md":m,"/content/projects/taskr.md":g,"/content/projects/zamari-surfaces.md":f}),D=Object.values(M).map(e=>b(e).data).sort((e,t)=>(e.order??99)-(t.order??99)),R=D.filter(e=>e.featured),C=Object.assign({"/content/projects/digital-product-suite.md":()=>n(()=>Promise.resolve().then(()=>T),void 0,import.meta.url).then(e=>e.default),"/content/projects/flemela.md":()=>n(()=>Promise.resolve().then(()=>x),void 0,import.meta.url).then(e=>e.default),"/content/projects/joy-agency.md":()=>n(()=>Promise.resolve().then(()=>A),void 0,import.meta.url).then(e=>e.default),"/content/projects/skills-library.md":()=>n(()=>Promise.resolve().then(()=>j),void 0,import.meta.url).then(e=>e.default),"/content/projects/soko-platform.md":()=>n(()=>Promise.resolve().then(()=>E),void 0,import.meta.url).then(e=>e.default),"/content/projects/taskr.md":()=>n(()=>Promise.resolve().then(()=>O),void 0,import.meta.url).then(e=>e.default),"/content/projects/zamari-surfaces.md":()=>n(()=>Promise.resolve().then(()=>L),void 0,import.meta.url).then(e=>e.default)});async function z(e){const t=Object.entries(C).find(([s])=>s.endsWith(`/${e}.md`));if(!t)return;const o=await t[1](),{data:i,content:r}=b(o);return{frontmatter:i,content:r}}export{V as _,R as f,z as g,D as p};
