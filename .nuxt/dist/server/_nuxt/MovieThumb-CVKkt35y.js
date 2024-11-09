import { useSSRContext, mergeProps, resolveComponent, withCtx, createVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const imgAPI = {
  avatar: [],
  photo: [
    "/images/shoreHouse.jpg",
    "/images/hollywood.jpg",
    "/images/bravoLogo.png"
  ],
  movie: [
    "/images/dubai-logo.png",
    "/images/nashvilleFlyer.jpg",
    "/images/Winterhouse2.jpg",
    "/images/NewJersey.jpg",
    "/images/Karma.jpg",
    "/images/Marthas.jpg",
    "/images/Kandi.jpg",
    "/images/atlanta.jpg",
    "/images/dubaiPicture.jpg",
    "/images/Potomac.jpg",
    "/images/SummerHouseBravo.jpg",
    "/images/Lucky.jpg",
    "/images/Princess.jpg",
    "/images/NewChicagoFlyer.png",
    "/images/MotherFunder.jpg",
    "/images/shahs.jpg",
    "/images/Matchmaker.jpg",
    "/images/Basketball.jpg",
    "/images/Ink.jpg",
    "/images/Swamp.jpg",
    "/images/Blonde.jpg",
    "/images/Newyork.jpg",
    "/images/Newly.jpg",
    "/images/American.jpg",
    "/images/nashvilleFlyer.jpg",
    "/images/charlotteFlyer.jpg",
    "/images/detroitFlyer.jpg"
  ]
};
const _sfc_main$1 = {
  props: {
    primary: {
      type: String,
      required: true
    },
    secondary: {
      type: String,
      required: true
    },
    align: {
      type: String,
      default: "left"
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: [$props.align, "title-main"]
  }, _attrs))} data-v-ea51ef18><h4 class="primary-title" data-v-ea51ef18>${ssrInterpolate($props.primary)}</h4><h4 class="secondary-title" data-v-ea51ef18>${ssrInterpolate($props.secondary)}</h4></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Title/Title.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Title = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-ea51ef18"]]);
const _sfc_main = {
  props: {
    img: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    url: {
      type: String,
      // Add a prop for the URL
      required: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_btn = resolveComponent("v-btn");
  _push(ssrRenderComponent(_component_v_card, mergeProps({ class: "movie-thumb" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_btn, {
          href: $props.url,
          class: "btn-wrap",
          text: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span class="figure" data-v-d2253490${_scopeId2}><i class="ion-ios-play play" data-v-d2253490${_scopeId2}></i><img${ssrRenderAttr("src", $props.img)} alt="text" data-v-d2253490${_scopeId2}><span class="figcaption" data-v-d2253490${_scopeId2}>${ssrInterpolate(_ctx.$t("movieLanding.featured_caption"))}</span></span><span class="text" data-v-d2253490${_scopeId2}>${ssrInterpolate($props.text)}</span>`);
            } else {
              return [
                createVNode("span", { class: "figure" }, [
                  createVNode("i", { class: "ion-ios-play play" }),
                  createVNode("img", {
                    src: $props.img,
                    alt: "text"
                  }, null, 8, ["src"]),
                  createVNode("span", { class: "figcaption" }, toDisplayString(_ctx.$t("movieLanding.featured_caption")), 1)
                ]),
                createVNode("span", { class: "text" }, toDisplayString($props.text), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_btn, {
            href: $props.url,
            class: "btn-wrap",
            text: ""
          }, {
            default: withCtx(() => [
              createVNode("span", { class: "figure" }, [
                createVNode("i", { class: "ion-ios-play play" }),
                createVNode("img", {
                  src: $props.img,
                  alt: "text"
                }, null, 8, ["src"]),
                createVNode("span", { class: "figcaption" }, toDisplayString(_ctx.$t("movieLanding.featured_caption")), 1)
              ]),
              createVNode("span", { class: "text" }, toDisplayString($props.text), 1)
            ]),
            _: 1
          }, 8, ["href"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cards/MovieThumb.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MovieThumb = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d2253490"]]);
export {
  MovieThumb as M,
  Title as T,
  imgAPI as i
};
//# sourceMappingURL=MovieThumb-CVKkt35y.js.map
