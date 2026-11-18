import { _ as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, computed, unref, mergeProps, withCtx, renderSlot, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseButton",
  __ssrInlineRender: true,
  props: {
    variant: { default: "primary" },
    to: {},
    href: {},
    type: { default: "button" }
  },
  setup(__props) {
    const props = __props;
    const isLink = computed(() => Boolean(props.to || props.href));
    const destination = computed(() => props.to || props.href);
    const variantClasses = computed(
      () => props.variant === "primary" ? "bg-accent text-canvas hover:bg-accent-bright" : "bg-transparent border border-border text-ink hover:border-accent-dim hover:text-accent-bright"
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      if (unref(isLink)) {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          to: unref(destination),
          target: props.href ? "_blank" : void 0,
          rel: props.href ? "noopener noreferrer" : void 0,
          class: ["inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200", unref(variantClasses)]
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<button${ssrRenderAttrs(mergeProps({
          type: __props.type,
          class: ["inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200", unref(variantClasses)]
        }, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</button>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BaseButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=BaseButton-R9ud-R1q.js.map
