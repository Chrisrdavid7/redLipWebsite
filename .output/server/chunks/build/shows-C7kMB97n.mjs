import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, N as Navbar } from './server.mjs';
import { i as imgAPI } from './imgAPI-Bg0XCvmB.mjs';
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

const _sfc_main$1 = {
  props: {
    thumb: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "movie-thumb" }, _attrs))} data-v-0ef169af><a${ssrRenderAttr("href", $props.url)} target="_blank" rel="noopener noreferrer" data-v-0ef169af><img${ssrRenderAttr("src", $props.thumb)}${ssrRenderAttr("alt", `Thumbnail for ${_ctx.title}`)} data-v-0ef169af><h3 data-v-0ef169af>${ssrInterpolate(_ctx.title)}</h3></a></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MovieThumb.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MovieThumb = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0ef169af"]]);
const _sfc_main = {
  __name: "shows",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Shows - Red Lip Productions",
      meta: [
        { name: "description", content: "The award winning team behind the Original Casting and Development of several unscripeted Reality Shows and Series Castings of many." },
        { property: "og:title", content: "Shows - Red Lip Productions" },
        { property: "og:description", content: "Discover upcoming shows and events." },
        { property: "og:image", content: "/images/ChelseyLogo.png" }
      ]
    });
    const originalShows = [
      { image: imgAPI.shows[0], link: "https://www.bravotv.com/the-real-housewives-of-potomac" },
      { image: imgAPI.shows[1], link: "https://www.bravotv.com/the-real-housewives-of-dubai" },
      { image: imgAPI.shows[2], link: "https://www.bravotv.com/winter-house" },
      { image: imgAPI.shows[3], link: "https://www.bravotv.com/family-karma" },
      { image: imgAPI.shows[4], link: "https://www.bravotv.com/summer-house-marthas-vineyard" },
      { image: imgAPI.shows[5], link: "https://www.themoviedb.org/tv/64945-lucky-bastards" },
      { image: imgAPI.shows[6], link: "https://www.imdb.com/title/tt4828106/" },
      { image: imgAPI.shows[7], link: "https://www.bravotv.com/kandi-and-the-gang" },
      { image: imgAPI.shows[8], link: "https://www.bravotv.com/princesses-long-island" }
    ];
    const seriesCastings = [
      { image: imgAPI.shows[9], link: "https://www.bravotv.com/the-real-housewives-of-new-jersey" },
      { image: imgAPI.shows[10], link: "https://www.bravotv.com/summer-house" },
      { image: imgAPI.shows[11], link: "https://www.bravotv.com/the-real-housewives-of-new-york-city" },
      { image: imgAPI.shows[12], link: "https://www.bravotv.com/the-real-housewives-of-atlanta" },
      { image: imgAPI.shows[13], link: "https://www.bravotv.com/shahs-of-sunset" },
      { image: imgAPI.shows[14], link: "https://www.bravotv.com/the-millionaire-matchmaker" },
      { image: imgAPI.shows[15], link: "https://www.vh1.com/shows/basketball-wives" },
      { image: imgAPI.shows[16], link: "https://www.paramountplus.com/shows/ink-master/" },
      { image: imgAPI.shows[17], link: "https://www.history.com/shows/swamp-people" },
      { image: imgAPI.shows[18], link: "https://www.imdb.com/title/tt1125194/" },
      { image: imgAPI.shows[19], link: "https://www.imdb.com/title/tt1839328/" },
      { image: imgAPI.shows[20], link: "https://en.wikipedia.org/wiki/American_Gladiators_(2008_TV_series)_season_1" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "shows-page" }, _attrs))} data-v-de1ba585>`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(`<div class="hero" data-v-de1ba585><h1 class="hero-title" data-v-de1ba585><span class="primary-text" data-v-de1ba585>The</span><span class="secondary-text" data-v-de1ba585>Shows</span></h1><p class="hero-subtitle" data-v-de1ba585>The award-winning team behind...</p></div><div class="shows-container" data-v-de1ba585><h2 class="section-title" data-v-de1ba585>Original Casting and Development</h2><div class="shows-grid" data-v-de1ba585><!--[-->`);
      ssrRenderList(originalShows, (show, index) => {
        _push(ssrRenderComponent(MovieThumb, {
          key: index,
          title: show.title,
          thumb: show.image,
          url: show.link
        }, null, _parent));
      });
      _push(`<!--]--></div></div><div class="shows-container" data-v-de1ba585><h2 class="section-title" data-v-de1ba585>Series Castings</h2><div class="shows-grid" data-v-de1ba585><!--[-->`);
      ssrRenderList(seriesCastings, (casting, index) => {
        _push(ssrRenderComponent(MovieThumb, {
          key: index,
          thumb: casting.image,
          url: casting.link
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shows.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const shows = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-de1ba585"]]);

export { shows as default };
//# sourceMappingURL=shows-C7kMB97n.mjs.map
