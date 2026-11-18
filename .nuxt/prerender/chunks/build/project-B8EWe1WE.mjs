import { defineComponent, mergeProps, useSSRContext } from 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TechBadge",
  __ssrInlineRender: true,
  props: {
    label: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({ class: "inline-flex items-center rounded-md border border-border bg-canvas-inset px-2.5 py-1 font-mono text-xs text-ink-muted" }, _attrs))}>${ssrInterpolate(__props.label)}</span>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TechBadge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_0 = '---\ntitle: "Digital Product Suite"\nslug: "digital-product-suite"\nsummary: "Eleven developer tools and SaaS kits extracted from production systems \u2014 from a multi-tenant boilerplate to sub-25ms PostgreSQL analytics engines."\ncategories: ["Digital Products", "Backend"]\ntechStack: ["TypeScript", "PostgreSQL", "Node.js", "Express", "pg_trgm", "BullMQ"]\narchitectureHighlights: ["Product extraction", "Integration-tested kits", "Gumroad & Whop distribution", "Docs-first packaging"]\ngithubUrl: ""\ndemoUrl: ""\nfeatured: true\norder: 3\n---\n\n## Overview\n\nThe Digital Product Suite is a line of developer tools and SaaS starter kits\nextracted from production codebases and packaged for sale on Gumroad and\nWhop \u2014 not tutorials, but tested, documented engines that other engineers\ndrop into their own stacks.\n\n## What\'s in the Suite\n\n**Multi-tenant SaaS Starter (flagship).** Express + TypeScript + raw-SQL\nmulti-tenancy with `org_id` scoping, JWT auth with refresh rotation, email\nverification, plan quotas, an encrypted per-org credentials vault, role-based\nadmin, idempotent migrations, Docker + CI \u2014 verified with an 8-test suite on a\nfresh machine.\n\n**PostgreSQL micro-engines** (each a focused, drop-in module with a\ncommercial Pro edition):\n\n- **CFO Analytics CTE Engine** \u2014 full P&L, working-capital anatomy, debt-aging\n  waterfalls and SKU margin rankings in a single parallel query, sub-25ms.\n- **Webhook Forensics & Replay Buffer** \u2014 sub-15ms raw ingestion with HMAC\n  verification, `FOR UPDATE SKIP LOCKED` claim locks, and one-click replay.\n- **S3 Tokenized Download Vault** \u2014 expiring download tokens, iOS Safari probe\n  shielding, 60-second quota debouncing, presigned S3/R2/MinIO URLs.\n- **Multi-Tenant Nodemailer Pool** \u2014 warm SMTP transporter pooling,\n  AES-256-GCM encrypted tenant credentials, verification handshakes, platform\n  fallback.\n- **pg_trgm Fuzzy Search** \u2014 weighted multi-column relevance ranking with\n  GIN index migrations and exact-match guards for identifier columns.\n\n**SaaS kits extracted from Soko:** a WhatsApp Commerce Kit (HMAC-verified\nMeta webhooks, conversational ordering), a Bulk Import Kit (header-normalized\nparsing, pg_trgm dedup, per-row transactions), a Demo Sandbox Kit\n(ephemeral orgs with auto-purge for live demos), a Scale-to-Zero Jobs guide,\nand an Encrypted Credentials Vault.\n\n## Engineering Discipline Behind the Products\n\nEvery kit ships with a README quickstart, env example, schema migration,\ntest suite (unit or integration against real PostgreSQL), a license, and a\nscrubbed repo \u2014 no secrets, no localized config. The verification bar is the\nsame one I apply to client work: a fresh machine should go from unzip to green\ntests without a single support email.\n\n## Why It Matters\n\nSelling software forces a different standard of completeness. Edge cases that\nare "fine for now" in a client project become bug reports from strangers.\nThe suite is where my engineering discipline gets audited in public.\n\n## Stack\n\nTypeScript \xB7 Node.js \xB7 Express \xB7 PostgreSQL (pg_trgm, raw SQL) \xB7 BullMQ \xB7 PayPal/Stripe integration patterns\n';
const digitalProductSuite = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __vite_glob_0_0
}, Symbol.toStringTag, { value: "Module" }));
const __vite_glob_0_1 = '---\ntitle: "Flemela \u2014 The Sunrise Bookstore"\nslug: "flemela"\nsummary: "A full-stack e-commerce platform for an independent bookstore \u2014 physical and digital catalog, automated ebook delivery, and a complete admin dashboard."\ncategories: ["E-commerce", "Full Stack"]\ntechStack: ["Nuxt 3", "TypeScript", "Pinia", "Tailwind CSS", "Zod", "Leaflet", "Tiptap"]\narchitectureHighlights: ["Admin dashboard", "Curated storefront sections", "Tokenized ebook delivery", "Catalogue automation tooling"]\ngithubUrl: ""\ndemoUrl: "https://www.thesunrisebookstore.com"\nfeatured: true\norder: 2\n---\n\n## Overview\n\nFlemela (The Sunrise Bookstore) is a full-stack e-commerce platform for an\nindependent bookstore, selling both physical books and DRM-free digital\ndownloads. It powers a public storefront, a complete admin back office, and a\nsuite of catalogue automation tooling \u2014 built on Nuxt 3 with a server API\nlayer close to the data.\n\n## Problem\n\nIndependent bookstores compete with global marketplaces but can\'t afford\noff-the-shelf e-commerce that treats digital downloads, curated shelves, and\nlocalized delivery as afterthoughts. The client needed one system that could\nrun the whole shop: merchandising, orders, ebook fulfillment, and storefront\ncontent \u2014 without a developer in the loop for day-to-day changes.\n\n## Solution\n\nA Nuxt 3 monolith with server API routes, a Pinia-powered storefront, and a\ncustom admin dashboard covering banners, curated shelves, categories, orders,\nstore location (Leaflet pin picker), and announcement tickers \u2014 all editable\nat runtime, no redeploys.\n\n## Architecture\n\n- **Server API layer in Nuxt.** Checkout, orders, books, curated-sections,\n  category shelves, banners, and a dynamic `sitemap.xml` route \u2014 all served\n  from the same Nuxt app, with Zod-validated payloads at the boundary.\n- **Rich-content admin.** Tiptap-powered editing for product and content\n  blocks, so non-developers can shape the storefront safely.\n- **Digital delivery pipeline.** Tokenized ebook downloads tied to orders,\n  with catalogue tooling that audits listings, attaches PDFs, backfills\n  covers, and verifies public-domain editions automatically.\n- **SEO as a feature.** Dynamic sitemap, structured metadata, and per-route\n  Open Graph tags \u2014 the storefront is engineered to be found, not just to work.\n\n## Technical Challenges\n\nThe hard part wasn\'t any single feature \u2014 it was operational: keeping a\ngrowing, messy real-world catalogue (thousands of SKUs with missing covers,\ninconsistent metadata, and mixed physical/digital formats) consistent without\nhand-editing thousands of records. The `tools/catalogue` scripts \u2014 audits,\nPDF attachment, cover uploads, Gutenberg verification \u2014 turned weeks of manual\ndata work into repeatable, idempotent automation.\n\n## Lessons Learned\n\nFor real businesses, the admin dashboard *is* the product. Every hour spent\nmaking back-office workflows fast and safe pays back more than storefront\npolish \u2014 because the storefront only looks after itself if the operator can\nactually run it.\n\n## Stack\n\nNuxt 3 \xB7 TypeScript \xB7 Pinia \xB7 Tailwind CSS \xB7 Zod \xB7 Leaflet \xB7 Tiptap\n';
const flemela = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __vite_glob_0_1
}, Symbol.toStringTag, { value: "Module" }));
const __vite_glob_0_2 = `---
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
without touching code, and present a professional public face \u2014 while keeping
the admin side simple enough to actually use day-to-day.

## Solution

A Vue 3 frontend backed by an Express/MongoDB API, with Cloudinary handling
photo uploads directly from the browser via unsigned upload presets \u2014 no
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

Getting Cloudinary's unsigned upload flow right \u2014 and debugging CORS once
the frontend and backend were deployed separately \u2014 took more iteration than
expected. Local dev hides a lot of cross-origin behavior that only appears
once both pieces are actually deployed.

## Lessons Learned

Offloading file storage entirely to a third-party service (rather than
handling uploads through the API) simplified the backend considerably. It's
a pattern worth defaulting to unless there's a specific reason to proxy
uploads through your own server.

## Stack

Vue 3 \xB7 Express \xB7 MongoDB \xB7 Cloudinary

GitHub: [joy-agency](https://github.com/Vig-Monk/joy-agency-)
Live Demo [joy-agency-](https://joyrecruitmentagency.vercel.app/)`;
const joyAgency = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __vite_glob_0_2
}, Symbol.toStringTag, { value: "Module" }));
const __vite_glob_0_3 = '---\ntitle: "Skills Library \u2014 AI-Assisted Engineering Protocol"\nslug: "skills-library"\nsummary: "A versioned library of rules, templates, and evals that make AI-assisted fullstack work consistent and verifiable \u2014 TypeScript, Nuxt, Node, raw PostgreSQL."\ncategories: ["Tooling"]\ntechStack: ["TypeScript", "Node.js", "PostgreSQL", "Nuxt", "Markdown"]\narchitectureHighlights: ["Router-based skill bundles", "Eval harness", "Stack-specific profiles", "CHANGELOG-driven"]\ngithubUrl: ""\ndemoUrl: ""\nfeatured: false\norder: 6\n---\n\n## Overview\n\nThe Skills Library is a versioned, structured set of rules, templates, and\nworked examples for AI-assisted fullstack engineering \u2014 TypeScript, Nuxt/Vue,\nNode, and PostgreSQL with the raw `pg` driver. Instead of one giant prompt, it\nroutes tasks to small, focused bundles and measures whether they work.\n\n## Problem\n\nAI-assisted development fails quietly: the model almost follows your\nconventions, almost handles your edge cases, almost matches your architecture.\nFor a solo developer shipping production systems, "almost" is where bugs live.\n\n## Solution\n\nA router-based library (`00-index.md` maps task \u2192 skill bundle) with:\n\n- **Core protocols** \u2014 an engineering protocol (recon \u2192 plan \u2192 slices \u2192 verify)\n  that works standalone, plus backend, design, quality, finance, and marketing\n  bundles loaded on demand.\n- **Stack profiles** \u2014 one per stack (node-postgres-pg, nuxt-vue, android-termux,\n  node-express-mongo) and one per project, encoding environment constraints\n  like "Termux-compatible, no native binaries, no ORM".\n- **Templates** \u2014 migrations, ledger schemas, CI configs, ADRs, metric specs,\n  motion CSS, and more, ready to instantiate.\n- **Evals** \u2014 checks that verify the AI actually followed the bundle, not just\n  that it produced plausible output.\n\n## Lessons Learned\n\nThe leverage in AI tooling isn\'t smarter prompts \u2014 it\'s smaller scopes,\nexplicit constraints, and verification. Small bundles beat one giant context,\nevery time.\n\n## Stack\n\nMarkdown \xB7 TypeScript \xB7 Node.js \xB7 Anthropic/OpenAI-compatible agent tooling\n';
const skillsLibrary = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __vite_glob_0_3
}, Symbol.toStringTag, { value: "Module" }));
const __vite_glob_0_4 = '---\ntitle: "Soko Platform"\nslug: "soko-platform"\nsummary: "A multi-tenant SaaS API for commerce \u2014 strict tenant isolation, ORM-free SQL, and branded ID types, built from the inside of the problem."\ncategories: ["SaaS", "Backend"]\ntechStack: ["TypeScript", "Express", "PostgreSQL", "Neon", "Render"]\narchitectureHighlights: ["Multi-tenancy", "Branded ID types", "ORM-free SQL", "55 migrations"]\ngithubUrl: ""\ndemoUrl: ""\nfeatured: true\norder: 1\n---\n\n## Overview\n\nSoko is a multi-tenant SaaS API for commerce, built for operators who run on\ncash, memory, and paper \u2014 and for the SaaS products that want to serve them.\nI worked inside informal market commerce before writing a line of code for it,\nwhich is where the idea \u2014 and the conviction that the problem is real \u2014 came\nfrom.\n\n## Problem\n\nSmall and independent commerce runs on fragmented, offline processes. There is\nno shared system for tracking inventory, orders, or basic sales records across\nindependent tenants, and most off-the-shelf SaaS tools assume a single business\nowner rather than many independent tenants sharing infrastructure.\n\n## Solution\n\nA multi-tenant API where each tenant\'s data is strictly isolated by\norganization, but the underlying infrastructure \u2014 database, auth, deployment \u2014\nis shared. Built with strict-mode TypeScript throughout and branded types\n(`OrgId`, `UserId`) so tenant-scoping mistakes get caught at compile time\nrather than discovered in production.\n\n## Architecture\n\n- **No ORM, by design.** All database access goes through the raw `pg`\n  driver with hand-written SQL. This keeps every query\'s actual behavior\n  visible \u2014 no hidden N+1s, no abstraction hiding what\'s really being sent\n  to PostgreSQL.\n- **Branded types for tenant isolation.** `OrgId` and `UserId` are distinct\n  types at the TypeScript level, not just `string` aliases, so a function\n  expecting one can\'t silently accept the other.\n- **Migrations as the source of truth.** Schema changes go through versioned\n  PostgreSQL migrations (55 and counting) rather than being inferred from\n  model definitions.\n- **Production auth.** JWT access/refresh with rotation and reuse detection,\n  email verification, plan quotas, and per-org encrypted credential vaults.\n\n## From Platform to Products\n\nThe platform\'s internals have been extracted, generalized, and packaged as\nindependent digital products (see the Digital Product Suite case study): a\nmulti-tenant SaaS boilerplate, a bulk import worker, a demo-sandbox\nprovisioner, an encrypted credentials vault, and a scale-to-zero job-gating\npattern \u2014 each tested, zipped, and sold as a standalone kit.\n\n## Technical Challenges\n\nDesigning tenant isolation that\'s enforced structurally rather than just by\nconvention was the central challenge \u2014 it\'s easy to add a `WHERE org_id = ?`\nclause everywhere, and just as easy to forget it once. Branded types push that\ncheck earlier, into the type system, without needing a row-level security layer\nfor the current stage of the project.\n\n## Lessons Learned\n\nCommitting to "no ORM" early forced a clearer mental model of what the\ndatabase is actually doing on every request \u2014 useful discipline, even though\nit means writing more SQL by hand. The tradeoff has been worth it for a system\nwhere correctness of tenant boundaries matters more than development speed.\nAnd building the platform first, then extracting products from it, taught me\nthat the most sellable software is usually the scaffolding you already trust\nin production.\n\n## Stack\n\nTypeScript \xB7 Express \xB7 PostgreSQL (raw `pg`) \xB7 Neon \xB7 Render\n';
const sokoPlatform = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __vite_glob_0_4
}, Symbol.toStringTag, { value: "Module" }));
const __vite_glob_0_5 = `---
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
taken further \u2014 deployed and polished into a genuine portfolio piece rather
than left as a tutorial exercise.

## Problem

Most course projects stop at "it runs locally." The goal with Taskr was to
push past that: a real deployed app, with the API on Render and the frontend
on Vercel, talking to each other in production rather than just on localhost.

## Solution

A standard MEVN task manager \u2014 create, update, complete, and organize
tasks \u2014 used deliberately as a vehicle for learning fullstack fundamentals
end-to-end, from API design through to a live deployment.

## Architecture

A straightforward REST API over Express and MongoDB, paired with a Vue 3
frontend. The interesting part wasn't novel architecture \u2014 it was closing
the loop on deployment: environment variables, CORS, build configuration,
and the small mismatches between local and production environments that
only show up once you actually ship.

## Lessons Learned

This project marked the shift from "tutorial-following" to "fullstack
fundamentals I actually understand." The deployment process in particular \u2014
getting a separately-hosted frontend and backend to work together in
production \u2014 was where most of the real learning happened, more so than the
CRUD logic itself.

## Stack

Vue 3 \xB7 Express \xB7 MongoDB \xB7 Node.js \xB7 Render \xB7 Vercel

GitHub: [express-api-fundamentals](https://github.com/Vig-Monk/express-api-fundamentals)
Live Demo [Ludwigs-tasky](http://ludwigs-tasky.vercel.app)`;
const taskr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __vite_glob_0_5
}, Symbol.toStringTag, { value: "Module" }));
const __vite_glob_0_6 = `---
title: "Zamari Surfaces"
slug: "zamari-surfaces"
summary: "A catalog and quote-request website for a bathroom & kitchen fixtures studio \u2014 collections, finish customizer, and a WhatsApp quote flow."
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
and kitchen fixtures \u2014 sinks, faucets, and natural stone surfaces (granite,
quartz, marble). The site's job is simple and hard: make a premium catalog
feel tangible on a phone, and turn interest into quote requests.

## Solution

A Nuxt 3 single-page experience built from focused, reusable sections \u2014
hero, collections, a finish customizer for visualizing materials, assurance
and reviews sections, and a quote form with a sticky bottom bar on mobile so
the call-to-action is never more than a thumb away.

## Architecture

- **Component-per-section design.** Each storefront section is a self-contained
  Vue component, making the page easy to reorder, A/B, and extend without
  touching global state.
- **Conversion-first layout.** The quote funnel is persistent (sticky mobile
  bar, repeated CTAs) and low-friction \u2014 a visitor is never more than one tap
  from requesting a quote.
- **Config-driven content.** Product and collection data live in composables,
  so catalog updates don't require template surgery.

## Lessons Learned

For local commerce, the website is a salesperson that works nights and
weekends. Every section either builds trust (reviews, assurance) or lowers the
cost of asking for a quote \u2014 anything else is decoration.

## Stack

Nuxt 3 \xB7 Vue 3 \xB7 Tailwind CSS \xB7 TypeScript
`;
const zamariSurfaces = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __vite_glob_0_6
}, Symbol.toStringTag, { value: "Module" }));
function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    return { data: {}, content: raw };
  }
  const [, frontmatterBlock, content] = match;
  const data = {};
  for (const line of (frontmatterBlock != null ? frontmatterBlock : "").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const separatorIndex = trimmed.indexOf(":");
    if (separatorIndex === -1) continue;
    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();
    data[key] = parseValue(value);
  }
  return { data, content: (content != null ? content : "").trim() };
}
function parseValue(value) {
  if (value.startsWith("[") && value.endsWith("]")) {
    const inner = value.slice(1, -1).trim();
    if (!inner) return [];
    return inner.split(",").map((item) => stripQuotes(item.trim())).filter(Boolean);
  }
  if (value === "true") return true;
  if (value === "false") return false;
  if (value !== "" && !Number.isNaN(Number(value))) return Number(value);
  return stripQuotes(value);
}
function stripQuotes(value) {
  if (value.startsWith('"') && value.endsWith('"') || value.startsWith("'") && value.endsWith("'")) {
    return value.slice(1, -1);
  }
  return value;
}
const modules = /* @__PURE__ */ Object.assign({
  "/content/projects/digital-product-suite.md": __vite_glob_0_0,
  "/content/projects/flemela.md": __vite_glob_0_1,
  "/content/projects/joy-agency.md": __vite_glob_0_2,
  "/content/projects/skills-library.md": __vite_glob_0_3,
  "/content/projects/soko-platform.md": __vite_glob_0_4,
  "/content/projects/taskr.md": __vite_glob_0_5,
  "/content/projects/zamari-surfaces.md": __vite_glob_0_6
});
const projects = Object.values(modules).map((raw) => parseFrontmatter(raw).data).sort((a, b) => {
  var _a, _b;
  return ((_a = a.order) != null ? _a : 99) - ((_b = b.order) != null ? _b : 99);
});
const featuredProjects = projects.filter((p) => p.featured);
const lazyModules = /* @__PURE__ */ Object.assign({
  "/content/projects/digital-product-suite.md": () => Promise.resolve().then(() => digitalProductSuite).then((m) => m["default"]),
  "/content/projects/flemela.md": () => Promise.resolve().then(() => flemela).then((m) => m["default"]),
  "/content/projects/joy-agency.md": () => Promise.resolve().then(() => joyAgency).then((m) => m["default"]),
  "/content/projects/skills-library.md": () => Promise.resolve().then(() => skillsLibrary).then((m) => m["default"]),
  "/content/projects/soko-platform.md": () => Promise.resolve().then(() => sokoPlatform).then((m) => m["default"]),
  "/content/projects/taskr.md": () => Promise.resolve().then(() => taskr).then((m) => m["default"]),
  "/content/projects/zamari-surfaces.md": () => Promise.resolve().then(() => zamariSurfaces).then((m) => m["default"])
});
async function getProjectBySlug(slug) {
  const entry = Object.entries(lazyModules).find(
    ([path]) => path.endsWith(`/${slug}.md`)
  );
  if (!entry) return void 0;
  const raw = await entry[1]();
  const { data, content } = parseFrontmatter(raw);
  return { frontmatter: data, content };
}

export { _sfc_main as _, featuredProjects as f, getProjectBySlug as g, projects as p };
//# sourceMappingURL=project-B8EWe1WE.mjs.map
