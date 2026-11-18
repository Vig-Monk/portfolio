import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseCard",
  __ssrInlineRender: true,
  props: {
    hoverable: { type: Boolean, default: true }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [
          "relative overflow-hidden rounded-xl border border-border bg-canvas-raised p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)] transition-all duration-300",
          __props.hoverable ? "hover:-translate-y-1.5 hover:border-accent-dim hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.55),inset_0_1px_0_0_rgba(255,255,255,0.04)]" : ""
        ]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BaseCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BaseCard-BSiDZ1D5.mjs.map
