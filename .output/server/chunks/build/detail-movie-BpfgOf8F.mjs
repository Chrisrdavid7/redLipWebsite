import { M as MainContainer } from './MainContainer-DISKvjdN.mjs';
import { S as Shows } from './ShowsPage-BYVi-kfY.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode } from 'vue';
import { _ as _export_sfc, d as defineNuxtComponent } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './MovieThumb-DDVI_J62.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@intlify/core-base';
import 'is-https';
import 'vue-easy-lightbox';
import 'vue3-mq';
import 'vue-kinesis';
import 'vue3-smooth-scroll';

const _sfc_main = defineNuxtComponent({
  components: {
    MainContainer,
    Shows
  },
  head() {
    return {
      title: "Chelsey Shows"
    };
  }
}, "$rJJFo3mjVC");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_main_container = resolveComponent("main-container");
  const _component_Shows = resolveComponent("Shows");
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "detail-movie",
    class: "main-wrap"
  }, _attrs))} data-v-282a3672>`);
  _push(ssrRenderComponent(_component_main_container, { "nav-scroll": "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="container-general" data-v-282a3672${_scopeId}><section id="shows" class="space-top" data-v-282a3672${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Shows, null, null, _parent2, _scopeId));
        _push2(`</section></div>`);
      } else {
        return [
          createVNode("div", { class: "container-general" }, [
            createVNode("section", {
              id: "shows",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/detail-movie.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const detailMovie = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-282a3672"]]);

export { detailMovie as default };
//# sourceMappingURL=detail-movie-BpfgOf8F.mjs.map