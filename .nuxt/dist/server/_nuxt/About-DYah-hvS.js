import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  name: "About"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "team-container" }, _attrs))} data-v-caefb684><div class="about-us-container" data-v-caefb684><h2 data-v-caefb684>About Us</h2><p data-v-caefb684> Led by founder and CEO Chelsey Stephens, Chelsey Creative is a dynamic, full-service content development and casting company based in New York City, where creativity drives everything we do. With over 15 years of award-winning experience, our core team specializes in content development, creating hit series, and turning real people into superstars. We collaborate with top networks and streaming platforms to develop new shows and cast for existing series, ensuring every project reaches its full creative potential. </p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-caefb684"]]);
export {
  About as A
};
//# sourceMappingURL=About-DYah-hvS.js.map
