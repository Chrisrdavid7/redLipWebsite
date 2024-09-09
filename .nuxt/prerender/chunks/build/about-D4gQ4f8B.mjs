import { M as MainContainer } from './MainContainer-DISKvjdN.mjs';
import { A as About } from './About-DYah-hvS.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/h3/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/devalue/index.js';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/ufo/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/destr/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/hookable/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/klona/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/scule/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/defu/dist/defu.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/ohash/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/pathe/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/unhead/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/unctx/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/@intlify/core-base/dist/core-base.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/@intlify/vue-devtools/dist/vue-devtools.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/is-https/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/vue-easy-lightbox/dist/vue-easy-lightbox.esm.min.js';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/vue3-mq/dist/vue3-mq.js';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/vue-kinesis/dist/vue-kinesis.ssr.js';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/vue3-smooth-scroll/dist/vue-smooth-scroll.min.js';

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

export { about as default };
//# sourceMappingURL=about-D4gQ4f8B.mjs.map
