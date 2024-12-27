import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { useHead } from '@vueuse/head';
import { i as imgAPI } from './imgAPI-Bg0XCvmB.mjs';
import { _ as _export_sfc } from './server.mjs';
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
  __name: "news",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Latest News - Red Lip Productions",
      meta: [
        { name: "description", content: "Discover the latest news, updates, and announcements from Red Lip Productions." },
        { property: "og:title", content: "Latest News - Red Lip Productions" },
        { property: "og:description", content: "Stay up-to-date with the latest news, stories, and casting updates." },
        { property: "og:image", content: "/images/ChelseyLogo.png" }
      ]
    });
    const news2 = ref([
      {
        image: imgAPI.press[0],
        category: "NEWS",
        title: "\u2018The Real Housewives of Dubai\u2019 Is Put on \u2018Pause\u2019 After 2 Seasons...",
        link: "https://www.usmagazine.com/entertainment/news/the-real-housewives-of-dubais-future-status-revealed/"
      },
      {
        image: imgAPI.press[1],
        category: "NEWS",
        title: "Bravo Unveils New Shows & Renewals Including Chrissy...",
        link: "https://www.bravotv.com/the-daily-dish/bravo-new-shows-making-it-in-manhattan-on-safari"
      },
      {
        image: imgAPI.press[2],
        category: "NEWS",
        title: "Melissa Gorga Says She Would Be OK Leaving RHONJ If Bravo Goes a Certain Way",
        link: "https://www.hollywoodreporter.com/tv/tv-news/rhonj-melissa-gorga-teresa-giudice-season-15-1235983404/"
      },
      {
        image: imgAPI.press[3],
        category: "NEWS",
        title: "Chelsey Stephens launches development shingle, signs first-look deal with ITV America",
        link: "https://realscreen.com/2023/03/06/exclusive-chelsey-stephens-launches-development-shingle-signs-first-look-deal-with-itv-america/"
      },
      {
        image: imgAPI.press[4],
        category: "NEWS",
        title: "Bravo will add \u2018The Real Housewives of Dubai\u2019 to its roster, Andy Cohen announces",
        link: "https://www.latimes.com/entertainment-arts/tv/story/2021-11-01/real-housewives-of-dubai-andy-cohen-announces"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "news-page" }, _attrs))} data-v-721329c3><div class="news-header" data-v-721329c3><h1 data-v-721329c3>Latest News</h1><p data-v-721329c3>Stay updated with the latest announcements and stories.</p></div><div class="news-grid" data-v-721329c3><!--[-->`);
      ssrRenderList(news2.value, (article, index) => {
        _push(`<div class="news-card" data-v-721329c3><div class="news-image-container" data-v-721329c3><img${ssrRenderAttr("src", article.image)}${ssrRenderAttr("alt", article.title)} class="news-image" data-v-721329c3></div><div class="news-content" data-v-721329c3><h3 data-v-721329c3>${ssrInterpolate(article.category)}</h3><h2 data-v-721329c3>${ssrInterpolate(article.title)}</h2><a${ssrRenderAttr("href", article.link)} target="_blank" class="read-more" data-v-721329c3>Read More</a></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const news = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-721329c3"]]);

export { news as default };
//# sourceMappingURL=news-DeNGu15c.mjs.map
