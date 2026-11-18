import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { a as useSeoMeta } from "../server.mjs";
import "/data/data/com.termux/files/home/storage/portfolio/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/data/data/com.termux/files/home/storage/portfolio/node_modules/hookable/dist/index.mjs";
import "/data/data/com.termux/files/home/storage/portfolio/node_modules/unctx/dist/index.mjs";
import "/data/data/com.termux/files/home/storage/portfolio/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/data/data/com.termux/files/home/storage/portfolio/node_modules/defu/dist/defu.mjs";
import "/data/data/com.termux/files/home/storage/portfolio/node_modules/ufo/dist/index.mjs";
import "/data/data/com.termux/files/home/storage/portfolio/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dev",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Dev Notes — Ludwig Maingi",
      robots: "noindex, nofollow"
    });
    const architectureNotes = [
      "Soko's tenant isolation is enforced with branded TypeScript types (OrgId, UserId), not just naming convention — a function expecting one can't silently accept the other.",
      "No ORM anywhere in the stack. Raw pg with hand-written SQL keeps every query's real behavior visible instead of hidden behind an abstraction.",
      "Auth uses refresh token rotation with reuse detection — a stolen refresh token that gets reused after rotation immediately signals a compromise."
    ];
    const favoriteTools = [
      "Termux + Acode — the entire dev environment lives on a phone, on purpose.",
      "Raw pg over any ORM, including Prisma (which doesn't run in this environment anyway).",
      "TypeScript strict mode with no implicit any, everywhere."
    ];
    const currentlyLearning = [
      "DSA, scoped to the ~20% of concepts that cover 80% of real-world use cases, anchored to Soko, Flemela, and the Digital Product Suite as reference points instead of abstract problems.",
      "Distributed systems fundamentals, as Soko's multi-tenant architecture grows.",
      "OOP patterns in TypeScript, applied back into the Soko codebase as they land."
    ];
    const experiments = [
      "Reading codebases the way multi-timeframe trading reads a chart — zoom out for architecture, zoom in for the one function that's about to break."
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "container-page py-20" }, _attrs))}><p class="eyebrow mb-3">You found it</p><h1 class="mb-4 text-display-lg font-display font-semibold text-ink">Dev Notes</h1><p class="mb-16 max-w-xl text-ink-muted"> A page that isn&#39;t linked anywhere. If you got here with ↑ ↑ ↓ ↓ ← → ← → B A, you&#39;re exactly the kind of person this page is for. </p><h2 class="mb-4 text-xl font-semibold text-ink">Architecture Notes</h2><ul class="mb-12 space-y-3"><!--[-->`);
      ssrRenderList(architectureNotes, (note) => {
        _push(`<li class="rounded-lg border border-border bg-canvas-raised px-4 py-3 text-sm text-ink-muted">${ssrInterpolate(note)}</li>`);
      });
      _push(`<!--]--></ul><h2 class="mb-4 text-xl font-semibold text-ink">Favorite Tools</h2><ul class="mb-12 space-y-3"><!--[-->`);
      ssrRenderList(favoriteTools, (tool) => {
        _push(`<li class="rounded-lg border border-border bg-canvas-raised px-4 py-3 text-sm text-ink-muted">${ssrInterpolate(tool)}</li>`);
      });
      _push(`<!--]--></ul><h2 class="mb-4 text-xl font-semibold text-ink">Currently Learning</h2><ul class="mb-12 space-y-3"><!--[-->`);
      ssrRenderList(currentlyLearning, (item) => {
        _push(`<li class="rounded-lg border border-border bg-canvas-raised px-4 py-3 text-sm text-ink-muted">${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul><h2 class="mb-4 text-xl font-semibold text-ink">Fun Engineering Experiments</h2><ul class="space-y-3"><!--[-->`);
      ssrRenderList(experiments, (item) => {
        _push(`<li class="rounded-lg border border-border bg-canvas-raised px-4 py-3 text-sm text-ink-muted">${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dev.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=dev-4ACmWdsO.js.map
