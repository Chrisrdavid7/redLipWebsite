import { s as setInterval } from './interval-gl53xdpR.mjs';
import { _ as _export_sfc, T as ThemeWrapper } from './server.mjs';
import { resolveComponent, withCtx, renderSlot, createVNode, useSSRContext } from 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/vue/index.mjs';
import { ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrRenderSlot } from 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/hookable/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/unctx/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/h3/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/unhead/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/radix3/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/defu/dist/defu.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/ufo/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/@intlify/core-base/dist/core-base.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/@intlify/vue-devtools/dist/vue-devtools.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/is-https/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/vue-easy-lightbox/dist/vue-easy-lightbox.esm.min.js';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/vue3-mq/dist/vue3-mq.js';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/vue-kinesis/dist/vue-kinesis.ssr.js';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/vue3-smooth-scroll/dist/vue-smooth-scroll.min.js';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/devalue/index.js';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/destr/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/klona/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/scule/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/ohash/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/unstorage/drivers/lru-cache.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/pathe/dist/index.mjs';

const _imports_0 = publicAssetsURL("/images/loading.gif");
const _sfc_main = {
  components: {
    ThemeWrapper
  },
  data() {
    return {
      loading: 0,
      interval: 0,
      bufferValue: 10
    };
  },
  mounted() {
    this.startBuffer();
    setTimeout(() => {
      this.loading = 100;
      clearInterval(this.interval);
    }, 1e3);
    const preloader = (void 0).getElementById("preloader");
    if (preloader !== null || void 0) {
      preloader.remove();
    }
  },
  methods: {
    startBuffer() {
      clearInterval(this.interval);
      this.interval = setInterval();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_theme_wrapper = resolveComponent("theme-wrapper");
  const _component_v_progress_linear = resolveComponent("v-progress-linear");
  const _component_v_app = resolveComponent("v-app");
  const _component_v_main = resolveComponent("v-main");
  _push(`<!--[--><div id="preloader" style="${ssrRenderStyle({ "position": "absolute", "zIndex": "10000", "background": "#fafafa", "width": "100%", "height": "100%" })}"><img style="${ssrRenderStyle({ "opacity": "0.5", "position": "absolute", "top": "calc(50% - 50px)", "left": "calc(50% - 50px)" })}"${ssrRenderAttr("src", _imports_0)} alt="loading"></div>`);
  _push(ssrRenderComponent(_component_theme_wrapper, { theme: "passion" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_progress_linear, {
          modelValue: $data.loading,
          "onUpdate:modelValue": ($event) => $data.loading = $event,
          active: $data.loading < 100,
          "buffer-value": $data.bufferValue,
          absolute: "",
          color: "primary",
          class: "top-loading"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_app, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_main, {
                id: "main-wrap",
                class: ["page-enter-active", { "page-fade-transition-exit": $data.loading >= 100 }]
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default")
                    ];
                  }
                }),
                _: 3
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_main, {
                  id: "main-wrap",
                  class: ["page-enter-active", { "page-fade-transition-exit": $data.loading >= 100 }]
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["class"])
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_progress_linear, {
            modelValue: $data.loading,
            "onUpdate:modelValue": ($event) => $data.loading = $event,
            active: $data.loading < 100,
            "buffer-value": $data.bufferValue,
            absolute: "",
            color: "primary",
            class: "top-loading"
          }, null, 8, ["modelValue", "onUpdate:modelValue", "active", "buffer-value"]),
          createVNode(_component_v_app, null, {
            default: withCtx(() => [
              createVNode(_component_v_main, {
                id: "main-wrap",
                class: ["page-enter-active", { "page-fade-transition-exit": $data.loading >= 100 }]
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 8, ["class"])
            ]),
            _: 3
          })
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-Buy5__a1.mjs.map
