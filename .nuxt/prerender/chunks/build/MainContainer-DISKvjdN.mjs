import { useSSRContext, mergeProps, unref, resolveComponent } from 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrRenderStyle } from 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, a as MainHeader, M as MainFooter } from './server.mjs';

const _sfc_main$1 = {
  components: {
    "footer-main": MainFooter
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_footer_main = resolveComponent("footer-main");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "parent-container" }, _attrs))} data-v-3ec569a1><div class="svg-container" data-v-3ec569a1><div style="${ssrRenderStyle({ "position": "relative", "left": "70px" })}" data-v-3ec569a1><svg width="168" height="920" viewBox="0 0 168 920" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3ec569a1><path d="M61.5001 3.49997C382 478.5 -279.5 237.5 163.5 916.786" stroke="url(#paint0_linear_108_600)" stroke-width="2" data-v-3ec569a1></path><defs data-v-3ec569a1><linearGradient id="paint0_linear_108_600" x1="73.7761" y1="3.32116" x2="87.0974" y2="917.899" gradientUnits="userSpaceOnUse" data-v-3ec569a1><stop stop-color="#FB011C" data-v-3ec569a1></stop><stop offset="1" stop-color="#FDA4AE" data-v-3ec569a1></stop></linearGradient></defs></svg></div></div><div class="footer-deco" data-v-3ec569a1>`);
  _push(ssrRenderComponent(_component_footer_main, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer/FooterWithDeco.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FooterWithDeco = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3ec569a1"]]);
const _sfc_main = {
  __name: "MainContainer",
  __ssrInlineRender: true,
  props: {
    invert: {
      type: Boolean,
      default: false
    },
    navScroll: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-wrap" }, _attrs))} data-v-c35c8ad9>`);
      _push(ssrRenderComponent(unref(MainHeader), { invert: __props.invert }, null, _parent));
      _push(`<div class="${ssrRenderClass([{ "scroll-nav-content": __props.navScroll }, "container-wrap"])}" data-v-c35c8ad9>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      if (__props.invert) {
        _push(ssrRenderComponent(unref(MainFooter), { invert: "" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(FooterWithDeco), null, null, _parent));
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainContainer/MainContainer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MainContainer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c35c8ad9"]]);

export { MainContainer as M };
//# sourceMappingURL=MainContainer-DISKvjdN.mjs.map
