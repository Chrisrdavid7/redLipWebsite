import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { ref, computed, useSSRContext } from "vue";
import { i as imgAPI } from "./imgAPI-Bg0XCvmB.js";
import { useHead } from "@vueuse/head";
import "hookable";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Home - Red Lip Productions",
      meta: [
        { name: "description", content: "Red Lip Productions creates a broad range of award winning scripted and unscripted programming for television and digital platforms." },
        { property: "og:title", content: "Home - Red Lip Productions" },
        { property: "og:description", content: "Red Lip Productions creates a broad range of award winning scripted and unscripted programming for television and digital platforms." },
        { property: "og:image", content: "/images/ChelseyLogo.png" }
      ]
    });
    const videoId = ref("aGN09IlVRxs");
    const slides = ref([
      {
        image: imgAPI.flyer[0],
        title: "Nashville Socialites",
        desc: "Red Lip Productions, the talent team behind some of your favorite hit shows, is on the hunt for the city's top stars for a brand new series on a major cable network!",
        link: "https://femalesocialitesdocuseries.castingcrane.com/"
      },
      {
        image: imgAPI.flyer[1],
        title: "Charlotte Socialites",
        desc: "Red Lip Productions is looking for stars in Charlotte for a new hit show on a major cable network!",
        link: "https://femalesocialitesdocuseries.castingcrane.com/"
      },
      {
        image: imgAPI.flyer[2],
        title: "Detroit Finest",
        desc: "Casting for Detroit's finest stars for an exciting new show on a major network!",
        link: "https://femalesocialitesdocuseries.castingcrane.com/"
      }
    ]);
    const shows = ref([
      {
        image: imgAPI.mainPageShows[0],
        url: "https://www.bravotv.com/winter-house"
      },
      {
        image: imgAPI.mainPageShows[1],
        url: "https://www.bravotv.com/the-real-housewives-of-new-jersey"
      },
      {
        image: imgAPI.mainPageShows[2],
        url: "https://www.bravotv.com/family-karma"
      }
    ]);
    const news = ref([
      {
        image: imgAPI.press[0],
        category: "NEWS",
        title: "‘The Real Housewives of Dubai’ Is Put on ‘Pause’ After 2 Seasons...",
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
      }
    ]);
    const currentIndex = ref(0);
    ref(null);
    const currentSlide = computed(() => slides.value[currentIndex.value]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b25ef766><div class="video-container" data-v-b25ef766><div class="video" data-v-b25ef766><iframe width="100%" height="100%"${ssrRenderAttr("src", `https://www.youtube.com/embed/${videoId.value}?autoplay=1&mute=1&controls=0&rel=0&showinfo=0`)} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen data-v-b25ef766></iframe><div class="video-caption" data-v-b25ef766><h1 data-v-b25ef766>The Real Housewives of Potomac</h1><p data-v-b25ef766>Bravo TV &amp; Streaming on Peacock</p></div></div></div><div class="rotating-display" data-v-b25ef766><div class="rotating-item" data-v-b25ef766><div class="slide-content" data-v-b25ef766><h3 data-v-b25ef766>Now Casting</h3><h1 data-v-b25ef766>${ssrInterpolate(currentSlide.value.title)}</h1><p data-v-b25ef766>${ssrInterpolate(currentSlide.value.desc)}</p><a${ssrRenderAttr("href", currentSlide.value.link)} class="cta-button" data-v-b25ef766>Sign Up Here</a></div><div class="slide-image" data-v-b25ef766><img${ssrRenderAttr("src", currentSlide.value.image)} alt="Current Slide" data-v-b25ef766></div></div><div class="navigation left" data-v-b25ef766><span data-v-b25ef766>←</span></div><div class="navigation right" data-v-b25ef766><span data-v-b25ef766>→</span></div></div><div class="shows-section" data-v-b25ef766><div class="row" data-v-b25ef766><div class="title-container" data-v-b25ef766><h1 class="primary-text" data-v-b25ef766>The</h1><h1 class="secondary-text" data-v-b25ef766>Shows</h1><p class="subtitle" data-v-b25ef766>The casting team behind...</p></div><div class="shows-grid" data-v-b25ef766><!--[-->`);
      ssrRenderList(shows.value, (show, index2) => {
        _push(`<div class="show-card" data-v-b25ef766><a${ssrRenderAttr("href", show.url)} target="_blank" rel="noopener noreferrer" data-v-b25ef766><img${ssrRenderAttr("src", show.image)}${ssrRenderAttr("alt", `Image of ${show.title}`)} data-v-b25ef766></a></div>`);
      });
      _push(`<!--]--></div></div></div><div class="news-section" data-v-b25ef766><div class="news-title" data-v-b25ef766><h2 data-v-b25ef766>News</h2></div><div class="news-grid" data-v-b25ef766><!--[-->`);
      ssrRenderList(news.value, (article, index2) => {
        _push(`<div class="news-card" data-v-b25ef766><img${ssrRenderAttr("src", article.image)}${ssrRenderAttr("alt", article.title)} class="news-image" data-v-b25ef766><div class="news-content" data-v-b25ef766><h3 data-v-b25ef766>${ssrInterpolate(article.category)}</h3><p data-v-b25ef766>${ssrInterpolate(article.title)}</p><a${ssrRenderAttr("href", article.link)} target="_blank" class="read-more" data-v-b25ef766>Read More</a></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b25ef766"]]);
export {
  index as default
};
//# sourceMappingURL=index-saSyqIvs.js.map
