import { s as setInterval } from './interval-gl53xdpR.mjs';
import { _ as _export_sfc, T as ThemeWrapper } from './server.mjs';
import { resolveComponent, withCtx, renderSlot, createVNode, useSSRContext } from 'vue';
import { ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@intlify/core-base';
import 'is-https';
import 'vue-easy-lightbox';
import 'vue3-mq';
import 'vue-kinesis';
import 'vue3-smooth-scroll';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

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
