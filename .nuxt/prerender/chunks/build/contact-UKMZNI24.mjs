import { _ as _sfc_main$1 } from './BaseButton-R9ud-R1q.mjs';
import { defineComponent, reactive, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'file:///data/data/com.termux/files/home/storage/portfolio/node_modules/vue/server-renderer/index.mjs';
import { a as useSeoMeta, u as useHead } from './server.mjs';
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
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Contact \u2014 Ludwig Maingi | Backend & Systems Engineer",
      description: "Get in touch with Ludwig Maingi for global remote contracts, backend systems architecture, and SaaS development. Based in UTC+3 with European and US overlap.",
      ogTitle: "Contact \u2014 Ludwig Maingi",
      ogDescription: "Available for global remote backend engineering contracts and freelance architecture projects.",
      ogUrl: "https://ludwigmaingi.vercel.app/contact"
    });
    useHead({
      link: [{ rel: "canonical", href: "https://ludwigmaingi.vercel.app/contact" }]
    });
    const form = reactive({ name: "", email: "", message: "" });
    const submitted = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButton = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "container-page py-20" }, _attrs))}><p class="eyebrow mb-3">Contact</p><h1 class="mb-6 text-display-lg font-display font-semibold text-ink">Let&#39;s talk.</h1><div class="mb-12 flex flex-col items-start gap-3 sm:flex-row sm:items-center"><span class="inline-flex items-center gap-2 rounded-full border border-accent-dim bg-accent/10 px-3.5 py-1.5 text-sm font-medium text-accent-bright"><span class="h-2 w-2 rounded-full bg-accent-bright animate-pulse"></span> Available for global remote contracts &amp; freelance work </span><span class="text-sm text-ink-muted">Usually responds within 24 hours</span></div><div class="grid gap-12 sm:grid-cols-2"><div class="space-y-6"><div><h2 class="mb-3 text-lg font-semibold text-ink">Direct Channels</h2><ul class="space-y-3 text-sm"><li><a href="mailto:ludwigmaingi@gmail.com" class="font-mono text-ink-muted transition-colors hover:text-accent-bright"> ludwigmaingi@gmail.com </a></li><li><a href="https://github.com/Vig-Monk" target="_blank" rel="noopener noreferrer" class="font-mono text-ink-muted transition-colors hover:text-accent-bright"> github.com/Vig-Monk \u2197 </a></li></ul></div><div class="rounded-xl border border-border bg-canvas-raised p-5"><h3 class="mb-2 text-sm font-semibold text-ink">Timezone &amp; Collaboration</h3><p class="mb-2 text-xs leading-relaxed text-ink-muted"> Remote-first, working from <strong class="text-ink">UTC+3 (EAT)</strong> \u2014 async-friendly and comfortable across regions. </p><ul class="space-y-1.5 text-xs text-ink-muted"><li class="flex items-center gap-2"><span class="text-accent-bright">\u2713</span><span><strong>UK &amp; Europe (GMT/BST/CET):</strong> Full working-day overlap (0\u20132 hour difference).</span></li><li class="flex items-center gap-2"><span class="text-accent-bright">\u2713</span><span><strong>US East Coast (EST/EDT):</strong> Direct morning overlap.</span></li><li class="flex items-center gap-2"><span class="text-accent-bright">\u2713</span><span><strong>US West Coast &amp; APAC:</strong> Async-first with written updates and scheduled overlap windows.</span></li></ul></div></div>`);
      if (!unref(submitted)) {
        _push(`<form class="space-y-4"><div><label for="name" class="mb-1.5 block text-sm text-ink-muted">Name</label><input id="name"${ssrRenderAttr("value", unref(form).name)} type="text" required class="w-full rounded-lg border border-border bg-canvas-raised px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent-dim focus:outline-none" placeholder="Jane Doe"></div><div><label for="email" class="mb-1.5 block text-sm text-ink-muted">Email</label><input id="email"${ssrRenderAttr("value", unref(form).email)} type="email" required class="w-full rounded-lg border border-border bg-canvas-raised px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent-dim focus:outline-none" placeholder="jane@company.com"></div><div><label for="message" class="mb-1.5 block text-sm text-ink-muted">Message</label><textarea id="message" rows="4" required class="w-full rounded-lg border border-border bg-canvas-raised px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent-dim focus:outline-none" placeholder="Tell me about your architecture, API requirements, or project timeline...">${ssrInterpolate(unref(form).message)}</textarea></div>`);
        _push(ssrRenderComponent(_component_BaseButton, { type: "submit" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Send Message`);
            } else {
              return [
                createTextVNode("Send Message")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</form>`);
      } else {
        _push(`<div class="rounded-xl border border-accent-dim/40 bg-accent/5 p-6 text-sm text-ink-muted"><p class="font-semibold text-ink">Message received!</p><p class="mt-1"> Thank you for reaching out. If your matter is urgent, please send an email directly to <a href="mailto:ludwigmaingi@gmail.com" class="text-accent-bright underline">ludwigmaingi@gmail.com</a>. </p></div>`);
      }
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-UKMZNI24.mjs.map
