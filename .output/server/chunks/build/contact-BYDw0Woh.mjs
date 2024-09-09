import { M as MainContainer } from './MainContainer-DISKvjdN.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, d as defineNuxtComponent } from './server.mjs';
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

const _sfc_main$1 = {
  name: "ContactUs"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "team-container" }, _attrs))} data-v-983224f4><div class="about-us-container" data-v-983224f4><h2 data-v-983224f4>Contact Us</h2><p data-v-983224f4>Please note that Chelsey Creative does not accept unsolicited submissions of any kind. Any submissions that are sent will not be reviewed.</p></div><div class="contact-details" data-v-983224f4><div class="contact-item" data-v-983224f4><h3 data-v-983224f4>Email:</h3><p data-v-983224f4><a href="mailto:info@chelseycreative.com" data-v-983224f4>info@chelseycreative.com</a></p></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact/Contact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-983224f4"]]);
const _sfc_main = defineNuxtComponent({
  components: {
    MainContainer,
    Contact
  },
  head() {
    return {
      title: "Red Lip Contact"
    };
  }
}, "$upAkW7AZLX");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_main_container = resolveComponent("main-container");
  const _component_Contact = resolveComponent("Contact", true);
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "contact",
    class: "main-wrap"
  }, _attrs))} data-v-eeefa3f2>`);
  _push(ssrRenderComponent(_component_main_container, { "nav-scroll": "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="container-general" data-v-eeefa3f2${_scopeId}><section id="contact-section" class="space-top" data-v-eeefa3f2${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Contact, null, null, _parent2, _scopeId));
        _push2(`</section></div>`);
      } else {
        return [
          createVNode("div", { class: "container-general" }, [
            createVNode("section", {
              id: "contact-section",
              class: "space-top"
            }, [
              createVNode(_component_Contact)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-eeefa3f2"]]);

export { contact as default };
//# sourceMappingURL=contact-BYDw0Woh.mjs.map
