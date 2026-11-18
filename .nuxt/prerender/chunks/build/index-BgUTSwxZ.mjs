import { _ as _sfc_main$1 } from './ProjectGrid-DJaKjOBL.mjs';
import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/vue/server-renderer/index.mjs';
import { a as useSeoMeta, u as useHead } from './server.mjs';
import { p as projects } from './project-B8EWe1WE.mjs';
import './BaseCard-BSiDZ1D5.mjs';
import 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/h3/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/destr/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/hookable/dist/index.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Projects \u2014 Ludwig Maingi",
      description: "Featured engineering work, systems architecture, and SaaS applications built with TypeScript, PostgreSQL, and Node.js.",
      ogTitle: "Projects \u2014 Ludwig Maingi",
      ogDescription: "Featured engineering work and system architecture case studies.",
      ogUrl: "https://ludwigmaingi.vercel.app/projects"
    });
    useHead({
      link: [{ rel: "canonical", href: "https://ludwigmaingi.vercel.app/projects" }]
    });
    const categories = [
      "SaaS",
      "Backend",
      "Full Stack",
      "E-commerce",
      "Digital Products",
      "Tooling"
    ];
    const activeCategory = ref("All");
    const filtered = computed(() => {
      if (activeCategory.value === "All") return projects;
      return projects.filter((p) => p.categories.includes(activeCategory.value));
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProjectGrid = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "container-page py-20" }, _attrs))}><p class="eyebrow mb-3">Work</p><h1 class="mb-8 text-display-lg font-display font-semibold text-ink">Projects</h1><div class="mb-10 flex flex-wrap gap-2"><button type="button" class="${ssrRenderClass([
        unref(activeCategory) === "All" ? "border-accent-dim text-accent-bright" : "border-border text-ink-muted hover:text-ink",
        "rounded-lg border px-4 py-2 text-sm transition-colors"
      ])}"> All </button><!--[-->`);
      ssrRenderList(categories, (cat) => {
        _push(`<button type="button" class="${ssrRenderClass([
          unref(activeCategory) === cat ? "border-accent-dim text-accent-bright" : "border-border text-ink-muted hover:text-ink",
          "rounded-lg border px-4 py-2 text-sm transition-colors"
        ])}">${ssrInterpolate(cat)}</button>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_ProjectGrid, { projects: unref(filtered) }, null, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BgUTSwxZ.mjs.map
