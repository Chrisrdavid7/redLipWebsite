import { M as MainContainer } from './MainContainer-DISKvjdN.mjs';
import { S as Shows } from './ShowsPage-B1o1lqss.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode } from 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/vue/index.mjs';
import { _ as _export_sfc, d as defineNuxtComponent } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/vue/server-renderer/index.mjs';
import './MovieThumb-D9hnvVSp.mjs';
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

const _sfc_main = defineNuxtComponent({
  components: {
    MainContainer,
    Shows
  },
  head() {
    return {
      title: "Red Lip Shows"
    };
  }
}, "$Kj6j9U3ALB");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_main_container = resolveComponent("main-container");
  const _component_Shows = resolveComponent("Shows", true);
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "shows",
    class: "main-wrap"
  }, _attrs))} data-v-c5aa421b>`);
  _push(ssrRenderComponent(_component_main_container, { "nav-scroll": "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="container-general" data-v-c5aa421b${_scopeId}><section id="shows-section" class="space-top" data-v-c5aa421b${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Shows, null, null, _parent2, _scopeId));
        _push2(`</section></div>`);
      } else {
        return [
          createVNode("div", { class: "container-general" }, [
            createVNode("section", {
              id: "shows-section",
              class: "space-top"
            }, [
              createVNode(_component_Shows)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shows.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const shows = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c5aa421b"]]);

export { shows as default };
//# sourceMappingURL=shows-0kBYGbPz.mjs.map
