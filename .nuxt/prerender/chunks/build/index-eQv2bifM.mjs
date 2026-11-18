import { _ as _sfc_main$1 } from './BaseButton-R9ud-R1q.mjs';
import { _ as _sfc_main$2 } from './BaseCard-BSiDZ1D5.mjs';
import { _ as _sfc_main$3 } from './ProjectGrid-DJaKjOBL.mjs';
import { f as featuredProjects } from './project-B8EWe1WE.mjs';
import { defineComponent, resolveDirective, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, unref, useSSRContext } from 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import { a as useSeoMeta, u as useHead } from './server.mjs';
import 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/h3/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/destr/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/hookable/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/ofetch/dist/node.mjs';
import 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/node-mock-http/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/unstorage/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'node:fs/promises';
import 'node:path';
import 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/ohash/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/klona/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/defu/dist/defu.mjs';
import 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/scule/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/unctx/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/pathe/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/unhead/dist/server.mjs';
import 'node:async_hooks';
import 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/devalue/index.js';
import 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/unhead/dist/plugins.mjs';
import 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/unhead/dist/utils.mjs';
import 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/vue-router/vue-router.node.mjs';

const _imports_0 = publicAssetsURL("/images/portrait-desktop.webp");
const _imports_1 = publicAssetsURL("/images/portrait-mobile.webp");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Ludwig Maingi \u2014 Backend & Systems Engineer",
      description: "Designing scalable APIs, robust databases, and multi-tenant SaaS systems. Specializing in TypeScript, Node.js, and raw PostgreSQL.",
      ogTitle: "Ludwig Maingi \u2014 Backend & Systems Engineer",
      ogDescription: "Designing APIs, databases, and systems that scale.",
      ogUrl: "https://ludwigmaingi.vercel.app/"
    });
    useHead({
      link: [{ rel: "canonical", href: "https://ludwigmaingi.vercel.app/" }]
    });
    const whatIDo = [
      {
        title: "SaaS Development",
        body: "End-to-end multi-tenant platforms, from schema to deployed API."
      },
      {
        title: "API Design",
        body: "REST APIs with clear contracts, versioning, and auth that holds up under real traffic."
      },
      {
        title: "Database Architecture",
        body: "PostgreSQL schemas designed for correctness first, then speed \u2014 indexes, constraints, migrations."
      },
      {
        title: "System Design",
        body: "Auth flows, RBAC, multi-tenancy boundaries \u2014 the parts that are expensive to get wrong later."
      }
    ];
    const stack = ["TypeScript", "Node.js", "Express", "PostgreSQL", "Redis", "Docker", "AWS"];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButton = _sfc_main$1;
      const _component_BaseCard = _sfc_main$2;
      const _component_ProjectGrid = _sfc_main$3;
      const _directive_motion = resolveDirective("motion");
      _push(`<!--[--><section class="relative overflow-hidden"><div class="pointer-events-none absolute inset-0 -z-10"><div class="absolute -top-32 right-0 h-[36rem] w-[36rem] rounded-full bg-accent/10 blur-[120px]"></div></div><div class="container-page grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:py-32"><div${ssrRenderAttrs(mergeProps({
        initial: { opacity: 0, y: 24 },
        enter: { opacity: 1, y: 0, transition: { duration: 700, delay: 300 } },
        class: "order-1 lg:order-2"
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))}><div class="relative mx-auto max-w-sm lg:max-w-none"><img${ssrRenderAttr("src", _imports_0)} alt="Portrait of Ludwig Maingi, backend and systems engineer" width="891" height="1024" fetchpriority="high" decoding="async" class="hidden w-full rounded-2xl object-cover sm:block"><img${ssrRenderAttr("src", _imports_1)} alt="Portrait of Ludwig Maingi, backend and systems engineer" width="799" height="942" fetchpriority="high" decoding="async" class="w-full rounded-2xl object-cover sm:hidden"></div></div><div class="order-2 lg:order-1"><p${ssrRenderAttrs(mergeProps({
        initial: { opacity: 0, y: 12 },
        enter: { opacity: 1, y: 0, transition: { duration: 500 } },
        class: "eyebrow mb-5"
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))}> Backend &amp; Systems Engineer </p><h1${ssrRenderAttrs(mergeProps({
        initial: { opacity: 0, y: 16 },
        enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 100 } },
        class: "max-w-xl text-display-lg font-display font-semibold leading-[1.05] text-ink sm:text-display-xl"
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))}> Designing APIs, databases, and systems that scale. </h1><p${ssrRenderAttrs(mergeProps({
        initial: { opacity: 0, y: 16 },
        enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 200 } },
        class: "mt-6 max-w-[600px] text-lg leading-relaxed text-ink-muted"
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))}> Helping businesses build reliable software through thoughtful architecture, scalable backend systems, and modern SaaS development. </p><div${ssrRenderAttrs(mergeProps({
        initial: { opacity: 0, y: 16 },
        enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 300 } },
        class: "mt-10 flex flex-wrap gap-4"
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))}>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        to: "/projects",
        class: "hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_rgba(13,157,111,0.5)]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View Projects `);
          } else {
            return [
              createTextVNode(" View Projects ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButton, {
        to: "/about",
        variant: "secondary",
        class: "hover:-translate-y-0.5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` More About My Approach `);
          } else {
            return [
              createTextVNode(" More About My Approach ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div${ssrRenderAttrs(mergeProps({
        initial: { opacity: 0 },
        enter: { opacity: 1, transition: { duration: 600, delay: 400 } },
        class: "mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-faint"
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))}><!--[-->`);
      ssrRenderList(stack, (tech, i) => {
        _push(`<span class="flex items-center gap-5">${ssrInterpolate(tech)} `);
        if (i < stack.length - 1) {
          _push(`<span class="h-1 w-1 rounded-full bg-border"></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span>`);
      });
      _push(`<!--]--></div></div></div></section><div class="divider"></div><section class="container-page py-20"><h2${ssrRenderAttrs(mergeProps({
        initial: { opacity: 0, y: 20, filter: "blur(8px)" },
        "visible-once": { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 600 } },
        class: "mb-10 text-2xl font-semibold text-ink"
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))}> What I Do </h2><div class="grid gap-5 sm:grid-cols-2"><!--[-->`);
      ssrRenderList(whatIDo, (item, i) => {
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
      _push(`<!--]--></div></section><div class="divider"></div><section class="container-page py-20"><h2${ssrRenderAttrs(mergeProps({
        initial: { opacity: 0, y: 20, filter: "blur(8px)" },
        "visible-once": { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 600 } },
        class: "mb-10 text-2xl font-semibold text-ink"
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))}> Featured Projects </h2>`);
      _push(ssrRenderComponent(_component_ProjectGrid, { projects: "featuredProjects" in _ctx ? _ctx.featuredProjects : unref(featuredProjects) }, null, _parent));
      _push(`</section><section class="container-page py-24 text-center"><h2 class="mb-4 text-2xl font-semibold text-ink">Have a project in mind?</h2><p class="mb-8 text-ink-muted">I&#39;m currently available for freelance backend and SaaS work.</p>`);
      _push(ssrRenderComponent(_component_BaseButton, { to: "/contact" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Get in Touch`);
          } else {
            return [
              createTextVNode("Get in Touch")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-eQv2bifM.mjs.map
