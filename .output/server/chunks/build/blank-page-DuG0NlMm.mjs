import { M as MainContainer } from './MainContainer-DISKvjdN.mjs';
import { N as Notification } from './Notification-CCloQiT-.mjs';
import { _ as _export_sfc, d as defineNuxtComponent, b as brand } from './server.mjs';
import { useSSRContext, resolveComponent, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
    Notification
  },
  head() {
    return {
      title: brand.movie.name + " - Blank Page"
    };
  }
}, "$INwjAkouKo");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_main_container = resolveComponent("main-container");
  const _component_notification = resolveComponent("notification");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-488574f2><section id="home" data-v-488574f2></section>`);
  _push(ssrRenderComponent(_component_main_container, { invert: "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<section class="space-top space-bottom" data-v-488574f2${_scopeId}><h2 class="text-h2 text-center font-weight-bold mb-4" data-v-488574f2${_scopeId}>${ssrInterpolate(_ctx.$t("common.title"))}</h2><h4 class="text-h4 text-center" data-v-488574f2${_scopeId}>${ssrInterpolate(_ctx.$t("common.subtitle"))}</h4></section>`);
        _push2(ssrRenderComponent(_component_notification, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode("section", { class: "space-top space-bottom" }, [
            createVNode("h2", { class: "text-h2 text-center font-weight-bold mb-4" }, toDisplayString(_ctx.$t("common.title")), 1),
            createVNode("h4", { class: "text-h4 text-center" }, toDisplayString(_ctx.$t("common.subtitle")), 1)
          ]),
          createVNode(_component_notification)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blank-page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blankPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-488574f2"]]);

export { blankPage as default };
//# sourceMappingURL=blank-page-DuG0NlMm.mjs.map
