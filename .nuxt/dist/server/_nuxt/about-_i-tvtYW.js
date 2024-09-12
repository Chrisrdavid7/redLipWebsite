import { M as MainContainer } from "./MainContainer-DISKvjdN.js";
import { mergeProps, useSSRContext, resolveComponent, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "devalue";
import "@intlify/core-base";
import "@vue/devtools-api";
import "@intlify/vue-devtools";
import "destr";
import "klona";
import "js-cookie";
import "cookie-es";
import "is-https";
import "vue-easy-lightbox";
import "vue3-mq";
import "vue-kinesis";
import "vue3-smooth-scroll";
import "vue3-youtube";
const _sfc_main$1 = {
  name: "About"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "team-container" }, _attrs))} data-v-caefb684><div class="about-us-container" data-v-caefb684><h2 data-v-caefb684>About Us</h2><p data-v-caefb684> Led by founder and CEO Chelsey Stephens, Chelsey Creative is a dynamic, full-service content development and casting company based in New York City, where creativity drives everything we do. With over 15 years of award-winning experience, our core team specializes in content development, creating hit series, and turning real people into superstars. We collaborate with top networks and streaming platforms to develop new shows and cast for existing series, ensuring every project reaches its full creative potential. </p></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About/About.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-caefb684"]]);
const _sfc_main = {
  components: {
    MainContainer,
    About
  },
  head() {
    return {
      title: "About"
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_main_container = resolveComponent("main-container");
  const _component_About = resolveComponent("About", true);
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "about",
    class: "main-wrap"
  }, _attrs))} data-v-4a800fb8>`);
  _push(ssrRenderComponent(_component_main_container, { "nav-scroll": "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="container-general" data-v-4a800fb8${_scopeId}><section id="about-section" class="space-top" data-v-4a800fb8${_scopeId}>`);
        _push2(ssrRenderComponent(_component_About, null, null, _parent2, _scopeId));
        _push2(`</section></div>`);
      } else {
        return [
          createVNode("div", { class: "container-general" }, [
            createVNode("section", {
              id: "about-section",
              class: "space-top"
            }, [
              createVNode(_component_About)
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4a800fb8"]]);
export {
  about as default
};
//# sourceMappingURL=about-_i-tvtYW.js.map
