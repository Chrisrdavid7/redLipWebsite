import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, N as Navbar } from './server.mjs';
import { useHead } from '@vueuse/head';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'consola/core';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Contact Us - Red Lip Productions",
      meta: [
        { name: "description", content: "Contact Red Lip Productions to discuss your casting and development needs. We are here to help you bring your ideas to life." },
        { name: "keywords", content: "Red Lip Productions, contact, casting, NYC, development" },
        { property: "og:title", content: "Contact Us - Red Lip Productions" },
        { property: "og:description", content: "Connect with the Red Lip Productions team to explore opportunities in casting and television development." },
        { property: "og:image", content: "/images/ChelseyLogo.png" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-page" }, _attrs))} data-v-c963bf87>`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(`<div class="hero-section" data-v-c963bf87><h1 class="hero-title" data-v-c963bf87>Contact Us</h1></div><div class="content-section" data-v-c963bf87><p data-v-c963bf87> Please note that Red Lip Productions does not accept unsolicited submissions of any kind. Any submissions that are sent will not be reviewed. </p><h2 data-v-c963bf87>Email:</h2><p class="email" data-v-c963bf87>info@redlipproductions.com</p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c963bf87"]]);

export { contact as default };
//# sourceMappingURL=contact-DPIeAOnN.mjs.map
