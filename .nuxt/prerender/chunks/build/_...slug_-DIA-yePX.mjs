import { _ as _sfc_main$1 } from './BaseButton-R9ud-R1q.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/vue/server-renderer/index.mjs';
import { a as useSeoMeta } from './server.mjs';
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
  __name: "[...slug]",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Page Not Found \u2014 Ludwig Maingi",
      robots: "noindex, nofollow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButton = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "container-page flex min-h-[60vh] flex-col items-center justify-center text-center" }, _attrs))}><p class="eyebrow mb-3">404</p><h1 class="mb-4 text-2xl font-semibold text-ink">Page not found</h1><p class="mb-8 text-ink-muted">That route doesn&#39;t exist.</p>`);
      _push(ssrRenderComponent(_component_BaseButton, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Back Home`);
          } else {
            return [
              createTextVNode("Back Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_-DIA-yePX.mjs.map
