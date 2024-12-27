import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc, N as Navbar } from "../server.mjs";
import { useHead } from "@vueuse/head";
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
import "destr";
import "klona";
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "About Us - Red Lip Productions",
      meta: [
        { name: "description", content: "Learn about Red Lip Productions’s mission, values, and our role in the casting and content development industry." },
        { property: "og:title", content: "About Us - Red Lip Productions" },
        { property: "og:description", content: "Discover our mission, values, and passion for casting and content development." },
        { property: "og:image", content: "/images/ChelseyLogo.png" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "about-page" }, _attrs))} data-v-3db92269>`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(`<div class="hero-section" data-v-3db92269><h1 class="hero-title" data-v-3db92269>About Us</h1></div><div class="content-section" data-v-3db92269><p data-v-3db92269> Red Lip Productions is a dynamic, full-service content development, casting, and television production company based in New York City, where creativity is at the heart of everything we do. </p><p data-v-3db92269> With over 15 years of award-winning experience, our dedicated team specializes in crafting hit series and transforming real people into household names. </p><p data-v-3db92269> We collaborate with leading networks and streaming platforms to bring new shows to life and cast for existing series, ensuring every project achieves its fullest creative potential. </p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3db92269"]]);
export {
  about as default
};
//# sourceMappingURL=about-iS1ravSA.js.map
