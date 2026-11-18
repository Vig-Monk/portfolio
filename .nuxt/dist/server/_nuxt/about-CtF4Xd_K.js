import { defineComponent, ref, mergeProps, unref, useSSRContext, resolveDirective, withCtx, createVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrGetDirectiveProps, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./BaseCard-BSiDZ1D5.js";
import { a as useSeoMeta, u as useHead } from "../server.mjs";
import "/data/data/com.termux/files/home/storage/portfolio/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/data/data/com.termux/files/home/storage/portfolio/node_modules/hookable/dist/index.mjs";
import "/data/data/com.termux/files/home/storage/portfolio/node_modules/unctx/dist/index.mjs";
import "/data/data/com.termux/files/home/storage/portfolio/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/data/data/com.termux/files/home/storage/portfolio/node_modules/defu/dist/defu.mjs";
import "/data/data/com.termux/files/home/storage/portfolio/node_modules/ufo/dist/index.mjs";
import "/data/data/com.termux/files/home/storage/portfolio/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MetricCounter",
  __ssrInlineRender: true,
  props: {
    target: {},
    suffix: {},
    duration: {}
  },
  setup(__props) {
    const display = ref(0);
    const el = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        ref_key: "el",
        ref: el
      }, _attrs))}>${ssrInterpolate(unref(display))}${ssrInterpolate(__props.suffix)}</span>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MetricCounter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "About — Ludwig Maingi",
      description: "Self-taught backend and systems engineer. Building multi-tenant SaaS, e-commerce platforms, database architectures, and APIs — remote-first, worldwide.",
      ogTitle: "About — Ludwig Maingi",
      ogDescription: "Self-taught backend and systems engineer. Remote-first, worldwide.",
      ogUrl: "https://ludwigmaingi.vercel.app/about"
    });
    useHead({
      link: [{ rel: "canonical", href: "https://ludwigmaingi.vercel.app/about" }]
    });
    const metrics = [
      { label: "Projects Shipped", value: 7, suffix: "" },
      { label: "Auth Systems Built", value: 4, suffix: "" },
      { label: "Databases Designed", value: 5, suffix: "" },
      { label: "Products Shipped", value: 11, suffix: "" }
    ];
    const journey = [
      {
        period: "Getting started",
        title: "Started programming, self-taught, on Android",
        body: "Termux and Acode from day one — a constraint that shaped every toolchain decision since: lean setups, no native binaries, explicit code over hidden abstractions."
      },
      {
        period: "First full build",
        title: "Built Taskr",
        body: "A MEVN-stack task manager, taken through a full audit and made production-ready — the first project that forced real decisions about structure, not just following a tutorial."
      },
      {
        period: "First real client",
        title: "Shipped Joy Agency",
        body: "A staffing platform (Vue 3, Express, MongoDB, Cloudinary) built and deployed for a real client — resolving real production issues, not toy-project ones: CORS, SPA rewrites, upload failures."
      },
      {
        period: "Now",
        title: "Designing Soko",
        body: "A multi-tenant SaaS platform for commerce, TypeScript and raw PostgreSQL by design — no ORM, branded ID types, explicit transactions. Built from the inside: I worked inside informal market commerce, which is where the problem became real to me."
      },
      {
        period: "Products",
        title: "Launched the Digital Product Suite",
        body: "Extracted the production internals of Soko and Flemela into eleven standalone tools and SaaS kits — tested, documented, and shipped as digital products on Gumroad and Whop."
      },
      {
        period: "Ongoing",
        title: "Deepening the fundamentals",
        body: "Structured DSA study and distributed-systems concepts, anchored to Soko, Flemela, and the Digital Product Suite as real reference points rather than abstract exercises."
      }
    ];
    const values = [
      {
        title: "Correctness first",
        body: "Constraints, types, and migrations come before performance work. Speed optimizations happen once the schema can be trusted."
      },
      {
        title: "Security",
        body: "Refresh token rotation with reuse detection, not just access tokens with long lifespans — auth that assumes tokens will eventually leak, and plans for it."
      },
      {
        title: "Scalability",
        body: "Indexing and schema decisions get made upfront, before the data volume that would expose a bad one — not retrofitted after a slow query shows up in production."
      },
      {
        title: "Maintainability",
        body: "Snake_case types that mirror raw pg output, explicit transactions, no implicit any — so six months from now, the code still reads like what it actually does."
      },
      {
        title: "No ORM, on purpose",
        body: "Raw pg and hand-written SQL keep query behavior visible and debuggable — no hidden N+1s from an abstraction layer deciding what to run."
      },
      {
        title: "Multi-tenancy from day one",
        body: "Branded ID types (OrgId, UserId) make tenant isolation a compile-time concern, not a runtime hope."
      }
    ];
    const architectureTopics = [
      "JWT auth with refresh token rotation",
      "Role-based access control (RBAC)",
      "Multi-tenant schema isolation",
      "PostgreSQL indexing strategy",
      "Caching and queue processing patterns"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MetricCounter = _sfc_main$1;
      const _component_BaseCard = _sfc_main$2;
      const _directive_motion = resolveDirective("motion");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "container-page py-20" }, _attrs))}><p class="eyebrow mb-3">About</p><h1 class="mb-8 text-display-lg font-display font-semibold text-ink">My Story</h1><div class="markdown-body mb-16 max-w-2xl"><p> I&#39;m a self-taught fullstack developer working remote-first with clients and teams worldwide. My background is in forex and futures trading, which is where the technical-analysis habit of mind came from — reading systems for risk before reading them for features. </p><p> I develop entirely on Android, using Termux and Acode. That constraint has shaped how I build: lean toolchains, explicit code over heavy abstractions, and a strong bias toward understanding exactly what&#39;s running rather than trusting a framework to hide it from me. </p><p> Before this, I worked inside informal market commerce — which is why commerce infrastructure is a focus rather than an afterthought. I&#39;ve seen the problem from the inside, and I build for it wherever it exists. </p></div><div class="mb-16 grid grid-cols-2 gap-6 sm:grid-cols-4"><!--[-->`);
      ssrRenderList(metrics, (m, i) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: m.label,
          initial: { opacity: 0, y: 16 },
          "visible-once": { opacity: 1, y: 0, transition: { duration: 500, delay: i * 100 } },
          class: "text-center"
        }, ssrGetDirectiveProps(_ctx, _directive_motion)))}><p class="text-3xl font-display font-semibold text-accent-bright sm:text-4xl">`);
        _push(ssrRenderComponent(_component_MetricCounter, {
          target: m.value,
          suffix: m.suffix
        }, null, _parent));
        _push(`</p><p class="mt-1 text-xs text-ink-muted">${ssrInterpolate(m.label)}</p></div>`);
      });
      _push(`<!--]--></div><h2 class="mb-8 text-2xl font-semibold text-ink">Engineering Journey</h2><div class="relative mb-16 pl-10"><div class="absolute bottom-1 left-[7px] top-1 w-px bg-border"></div><ol class="space-y-10"><!--[-->`);
      ssrRenderList(journey, (step, i) => {
        _push(`<li${ssrRenderAttrs(mergeProps({
          key: step.title,
          initial: { opacity: 0, x: -16 },
          "visible-once": { opacity: 1, x: 0, transition: { duration: 500, delay: i * 150 } },
          class: "relative"
        }, ssrGetDirectiveProps(_ctx, _directive_motion)))}><span class="absolute -left-10 top-0.5 h-4 w-4 rounded-full border-2 border-accent-bright bg-canvas"></span><p class="eyebrow mb-1">${ssrInterpolate(step.period)}</p><h3 class="mb-1 font-semibold text-ink">${ssrInterpolate(step.title)}</h3><p class="max-w-xl text-sm text-ink-muted">${ssrInterpolate(step.body)}</p></li>`);
      });
      _push(`<!--]--></ol></div><h2 class="mb-6 text-2xl font-semibold text-ink">Engineering Values</h2><div class="mb-16 grid gap-5 sm:grid-cols-3"><!--[-->`);
      ssrRenderList(values, (item, i) => {
        _push(ssrRenderComponent(_component_BaseCard, mergeProps({
          key: item.title,
          hoverable: false,
          initial: { opacity: 0, y: 24 },
          "visible-once": { opacity: 1, y: 0, transition: { duration: 600, delay: i * 100 } }
        }, ssrGetDirectiveProps(_ctx, _directive_motion)), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h3 class="mb-2 font-semibold text-ink"${_scopeId}>${ssrInterpolate(item.title)}</h3><p class="text-sm text-ink-muted"${_scopeId}>${ssrInterpolate(item.body)}</p>`);
            } else {
              return [
                createVNode("h3", { class: "mb-2 font-semibold text-ink" }, toDisplayString(item.title), 1),
                createVNode("p", { class: "text-sm text-ink-muted" }, toDisplayString(item.body), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><h2 class="mb-6 text-2xl font-semibold text-ink">Systems I Design For</h2><ul class="mb-16 grid gap-3 sm:grid-cols-2"><!--[-->`);
      ssrRenderList(architectureTopics, (topic) => {
        _push(`<li class="rounded-lg border border-border bg-canvas-raised px-4 py-3 text-sm text-ink-muted">${ssrInterpolate(topic)}</li>`);
      });
      _push(`<!--]--></ul><h2 class="mb-6 text-2xl font-semibold text-ink">Stack</h2><p class="max-w-2xl text-ink-muted"> TypeScript, Node.js, Express, PostgreSQL (raw <code class="font-mono text-accent-bright">pg</code>, no ORM, by design), Nuxt, Neon, deployed to Render and Vercel. </p></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=about-CtF4Xd_K.js.map
