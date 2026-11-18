import { _ as _sfc_main$2 } from "./BaseCard-BSiDZ1D5.js";
import { _ as __nuxt_component_0 } from "../server.mjs";
import { _ as _sfc_main$3 } from "./project-B8EWe1WE.js";
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, withModifiers, createCommentVNode, createTextVNode, useSSRContext, resolveDirective } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderAttrs, ssrGetDirectiveProps } from "vue/server-renderer";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProjectCard",
  __ssrInlineRender: true,
  props: {
    project: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_TechBadge = _sfc_main$3;
      _push(ssrRenderComponent(_component_BaseCard, mergeProps({ class: "group relative" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: `/projects/${__props.project.slug}`,
              class: "absolute inset-0 z-0 rounded-xl",
              "aria-label": `View case study — ${__props.project.title}`
            }, null, _parent2, _scopeId));
            _push2(`<div class="pointer-events-none relative z-[1]"${_scopeId}><p class="eyebrow mb-2"${_scopeId}>${ssrInterpolate(__props.project.categories.join(" · "))}</p><h3 class="mb-2 text-lg font-semibold text-ink"${_scopeId}>${ssrInterpolate(__props.project.title)}</h3><p class="mb-4 text-sm text-ink-muted"${_scopeId}>${ssrInterpolate(__props.project.summary)}</p><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(__props.project.techStack, (tech) => {
              _push2(ssrRenderComponent(_component_TechBadge, {
                key: tech,
                label: tech
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div><div class="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]"${_scopeId}><div class="min-h-0 overflow-hidden"${_scopeId}><div class="relative z-[1] mt-4 border-t border-border pt-4"${_scopeId}><p class="eyebrow pointer-events-none mb-2"${_scopeId}>Architecture Focus</p><div class="pointer-events-none mb-3 flex flex-wrap gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(__props.project.architectureHighlights, (highlight) => {
              _push2(`<span class="rounded-md bg-canvas-inset px-2.5 py-1 font-mono text-xs text-ink-muted"${_scopeId}>${ssrInterpolate(highlight)}</span>`);
            });
            _push2(`<!--]--></div><div class="flex items-center gap-4 text-sm"${_scopeId}>`);
            if (__props.project.githubUrl) {
              _push2(`<a${ssrRenderAttr("href", __props.project.githubUrl)} target="_blank" rel="noopener noreferrer" class="relative z-10 pointer-events-auto text-ink-muted hover:text-ink"${_scopeId}> GitHub ↗ </a>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.project.demoUrl) {
              _push2(`<a${ssrRenderAttr("href", __props.project.demoUrl)} target="_blank" rel="noopener noreferrer" class="relative z-10 pointer-events-auto text-ink-muted hover:text-ink"${_scopeId}> Live Demo ↗ </a>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span class="ml-auto inline-flex items-center gap-1 text-accent-bright"${_scopeId}> View case study <span class="transition-transform duration-300 group-hover:translate-x-1"${_scopeId}>→</span></span></div></div></div></div>`);
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: `/projects/${__props.project.slug}`,
                class: "absolute inset-0 z-0 rounded-xl",
                "aria-label": `View case study — ${__props.project.title}`
              }, null, 8, ["to", "aria-label"]),
              createVNode("div", { class: "pointer-events-none relative z-[1]" }, [
                createVNode("p", { class: "eyebrow mb-2" }, toDisplayString(__props.project.categories.join(" · ")), 1),
                createVNode("h3", { class: "mb-2 text-lg font-semibold text-ink" }, toDisplayString(__props.project.title), 1),
                createVNode("p", { class: "mb-4 text-sm text-ink-muted" }, toDisplayString(__props.project.summary), 1),
                createVNode("div", { class: "flex flex-wrap gap-2" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.project.techStack, (tech) => {
                    return openBlock(), createBlock(_component_TechBadge, {
                      key: tech,
                      label: tech
                    }, null, 8, ["label"]);
                  }), 128))
                ])
              ]),
              createVNode("div", { class: "grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]" }, [
                createVNode("div", { class: "min-h-0 overflow-hidden" }, [
                  createVNode("div", { class: "relative z-[1] mt-4 border-t border-border pt-4" }, [
                    createVNode("p", { class: "eyebrow pointer-events-none mb-2" }, "Architecture Focus"),
                    createVNode("div", { class: "pointer-events-none mb-3 flex flex-wrap gap-2" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.project.architectureHighlights, (highlight) => {
                        return openBlock(), createBlock("span", {
                          key: highlight,
                          class: "rounded-md bg-canvas-inset px-2.5 py-1 font-mono text-xs text-ink-muted"
                        }, toDisplayString(highlight), 1);
                      }), 128))
                    ]),
                    createVNode("div", { class: "flex items-center gap-4 text-sm" }, [
                      __props.project.githubUrl ? (openBlock(), createBlock("a", {
                        key: 0,
                        href: __props.project.githubUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        class: "relative z-10 pointer-events-auto text-ink-muted hover:text-ink",
                        onClick: withModifiers(() => {
                        }, ["stop"])
                      }, " GitHub ↗ ", 8, ["href", "onClick"])) : createCommentVNode("", true),
                      __props.project.demoUrl ? (openBlock(), createBlock("a", {
                        key: 1,
                        href: __props.project.demoUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        class: "relative z-10 pointer-events-auto text-ink-muted hover:text-ink",
                        onClick: withModifiers(() => {
                        }, ["stop"])
                      }, " Live Demo ↗ ", 8, ["href", "onClick"])) : createCommentVNode("", true),
                      createVNode("span", { class: "ml-auto inline-flex items-center gap-1 text-accent-bright" }, [
                        createTextVNode(" View case study "),
                        createVNode("span", { class: "transition-transform duration-300 group-hover:translate-x-1" }, "→")
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProjectGrid",
  __ssrInlineRender: true,
  props: {
    projects: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProjectCard = _sfc_main$1;
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-6 sm:grid-cols-2" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.projects, (project, i) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: project.slug,
          initial: { opacity: 0, y: 24 },
          "visible-once": { opacity: 1, y: 0, transition: { duration: 600, delay: i * 100 } }
        }, ssrGetDirectiveProps(_ctx, _directive_motion)))}>`);
        _push(ssrRenderComponent(_component_ProjectCard, { project }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectGrid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=ProjectGrid-DJaKjOBL.js.map
