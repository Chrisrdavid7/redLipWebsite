import { M as MainContainer } from "./MainContainer-DISKvjdN.js";
import { useSSRContext, mergeProps, resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, resolveDirective, withDirectives } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrGetDirectiveProps } from "vue/server-renderer";
import { _ as _export_sfc, H as Hidden, m as menu2, d as defineNuxtComponent } from "../server.mjs";
import { s as setInterval } from "./interval-gl53xdpR.js";
import { i as imgAPI, T as Title, M as MovieThumb } from "./MovieThumb-DDVI_J62.js";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { N as Notification } from "./Notification-CCloQiT-.js";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "ufo";
import "@intlify/core-base";
import "@vue/devtools-api";
import "@intlify/vue-devtools";
import "js-cookie";
import "cookie-es";
import "is-https";
import "vue-easy-lightbox";
import "vue3-mq";
import "vue-kinesis";
import "vue3-smooth-scroll";
import "vue3-youtube";
const _sfc_main$6 = {
  data() {
    return {
      videoId: "kDignq3wgJg"
      // Your YouTube video ID
    };
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "video-container" }, _attrs))} data-v-a059908c><div class="video" data-v-a059908c><iframe width="100%" height="100%"${ssrRenderAttr("src", "https://www.youtube.com/embed/" + $data.videoId + "?autoplay=1&mute=1&controls=0&rel=0&showinfo=0")} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen data-v-a059908c></iframe><div class="video-caption" data-v-a059908c><h1 data-v-a059908c>I LOVEEEE JENNIFERRR</h1><p data-v-a059908c>Bravo Networks</p></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VideoBanner/VideoBanner.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const VideoBanner = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-a059908c"]]);
const sliderData = [
  {
    image: imgAPI.movie[1],
    link: "https://shorehousecasting.castingcrane.com/age-gate",
    subtitle: "Now Casting",
    title: "Shore House",
    desc: "Chelsey Creative, the talent team behind Summer House, are on the hunt for the next TV sensation at the Jersey Shore!"
  },
  {
    image: imgAPI.movie[13],
    link: "https://chicagofemalemvps.castingcrane.com/",
    subtitle: "Now Casting",
    title: "Chicago Females",
    desc: "The talent team behind Real Housewives of Dubai are looking for Top Socialites in Chicago for our Brand New Show! Sign up or recommend a friend"
  }
];
const _sfc_main$5 = {
  components: {
    Hidden
  },
  data() {
    return {
      content: sliderData,
      transition: "",
      autoplay: null,
      currentImg: 0
    };
  },
  mounted() {
    this.playSlider();
  },
  beforeUnmount() {
    clearInterval(this.autoplay);
  },
  methods: {
    playSlider() {
      this.autoplay = setInterval();
    },
    manualPlay() {
      clearInterval(this.autoplay);
      setTimeout(() => {
        this.playSlider();
      }, 1);
    },
    next() {
      this.manualPlay();
      this.currentImg += 1;
      this.transition = "slide-right";
    },
    prev() {
      this.manualPlay();
      this.currentImg -= 1;
      this.transition = "slide-left";
    },
    swipeLeft() {
      this.next();
    },
    swipeRight() {
      this.prev();
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_hidden = resolveComponent("hidden");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "root" }, _attrs))} data-v-7d89e1f0><div class="slider-wrap" data-v-7d89e1f0><div${ssrRenderAttrs({ name: $data.transition })} data-v-7d89e1f0>`);
  ssrRenderList([$data.currentImg], (number) => {
    _push(`<div class="slide slider-content" data-v-7d89e1f0><div class="inner item" data-v-7d89e1f0><div class="inner-bg" data-v-7d89e1f0><div class="background" data-v-7d89e1f0><figure data-v-7d89e1f0><img${ssrRenderAttr("src", $data.content[Math.abs($data.currentImg) % $data.content.length].image)} alt="promotion" data-v-7d89e1f0></figure></div>`);
    _push(ssrRenderComponent(_component_v_row, null, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_v_col, {
            sm: "7",
            cols: "12",
            class: "pa-0"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="text" data-v-7d89e1f0${_scopeId2}><h4 data-v-7d89e1f0${_scopeId2}><span class="use-text-subtitle2" data-v-7d89e1f0${_scopeId2}>${ssrInterpolate($data.content[Math.abs($data.currentImg) % $data.content.length].subtitle)}</span> ${ssrInterpolate($data.content[Math.abs($data.currentImg) % $data.content.length].title)}</h4><div class="property" data-v-7d89e1f0${_scopeId2}> Confidential </div><article class="desc" data-v-7d89e1f0${_scopeId2}><h6 class="use-text-paragraph" data-v-7d89e1f0${_scopeId2}>${ssrInterpolate($data.content[Math.abs($data.currentImg) % $data.content.length].desc)}</h6></article><div class="btn-area" data-v-7d89e1f0${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_v_btn, {
                  class: "custom-button",
                  href: $data.content[Math.abs($data.currentImg) % $data.content.length].link
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` Sign Up Here `);
                    } else {
                      return [
                        createTextVNode(" Sign Up Here ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(`</div></div>`);
              } else {
                return [
                  createVNode("div", { class: "text" }, [
                    createVNode("h4", null, [
                      createVNode("span", { class: "use-text-subtitle2" }, toDisplayString($data.content[Math.abs($data.currentImg) % $data.content.length].subtitle), 1),
                      createTextVNode(" " + toDisplayString($data.content[Math.abs($data.currentImg) % $data.content.length].title), 1)
                    ]),
                    createVNode("div", { class: "property" }, " Confidential "),
                    createVNode("article", { class: "desc" }, [
                      createVNode("h6", { class: "use-text-paragraph" }, toDisplayString($data.content[Math.abs($data.currentImg) % $data.content.length].desc), 1)
                    ]),
                    createVNode("div", { class: "btn-area" }, [
                      createVNode(_component_v_btn, {
                        class: "custom-button",
                        href: $data.content[Math.abs($data.currentImg) % $data.content.length].link
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Sign Up Here ")
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_v_col, {
            sm: "5",
            cols: "12",
            class: "pa-0"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_hidden, { point: "xsDown" }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="image" data-v-7d89e1f0${_scopeId3}><figure data-v-7d89e1f0${_scopeId3}><img${ssrRenderAttr("src", $data.content[Math.abs($data.currentImg) % $data.content.length].image)} alt="promotion" data-v-7d89e1f0${_scopeId3}></figure></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "image" }, [
                          createVNode("figure", null, [
                            createVNode("img", {
                              src: $data.content[Math.abs($data.currentImg) % $data.content.length].image,
                              alt: "promotion"
                            }, null, 8, ["src"])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_hidden, { point: "xsDown" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "image" }, [
                        createVNode("figure", null, [
                          createVNode("img", {
                            src: $data.content[Math.abs($data.currentImg) % $data.content.length].image,
                            alt: "promotion"
                          }, null, 8, ["src"])
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_v_col, {
              sm: "7",
              cols: "12",
              class: "pa-0"
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "text" }, [
                  createVNode("h4", null, [
                    createVNode("span", { class: "use-text-subtitle2" }, toDisplayString($data.content[Math.abs($data.currentImg) % $data.content.length].subtitle), 1),
                    createTextVNode(" " + toDisplayString($data.content[Math.abs($data.currentImg) % $data.content.length].title), 1)
                  ]),
                  createVNode("div", { class: "property" }, " Confidential "),
                  createVNode("article", { class: "desc" }, [
                    createVNode("h6", { class: "use-text-paragraph" }, toDisplayString($data.content[Math.abs($data.currentImg) % $data.content.length].desc), 1)
                  ]),
                  createVNode("div", { class: "btn-area" }, [
                    createVNode(_component_v_btn, {
                      class: "custom-button",
                      href: $data.content[Math.abs($data.currentImg) % $data.content.length].link
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Sign Up Here ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])
                ])
              ]),
              _: 1
            }),
            createVNode(_component_v_col, {
              sm: "5",
              cols: "12",
              class: "pa-0"
            }, {
              default: withCtx(() => [
                createVNode(_component_hidden, { point: "xsDown" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "image" }, [
                      createVNode("figure", null, [
                        createVNode("img", {
                          src: $data.content[Math.abs($data.currentImg) % $data.content.length].image,
                          alt: "promotion"
                        }, null, 8, ["src"])
                      ])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div></div>`);
  });
  _push(`</div></div><a href="javascript:void(0)" class="prev" data-v-7d89e1f0><i class="ion-ios-arrow-round-back-outline arrow-icon" data-v-7d89e1f0></i></a><a href="javascript:void(0)" class="next" data-v-7d89e1f0><i class="ion-ios-arrow-round-forward-outline arrow-icon" data-v-7d89e1f0></i></a></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Promotions/Promotions.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Promotions = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-7d89e1f0"]]);
const _imports_0 = publicAssetsURL("/images/movie/deco-med-bg.svg");
const _sfc_main$4 = {
  components: {
    "title-main": Title,
    MovieThumb
  },
  data() {
    return {
      imgAPI,
      movieList: [
        {
          //Names commented out for design
          // title: 'Winter House',
          thumb: imgAPI.movie[2],
          url: "https://www.bravotv.com/winter-house"
        },
        {
          // title: 'Real Housewives of New Jersey',
          thumb: imgAPI.movie[3],
          url: "https://www.bravotv.com/the-real-housewives-of-new-jersey"
        },
        {
          // title: 'Family Karma',
          thumb: imgAPI.movie[4],
          url: "https://www.bravotv.com/family-karma"
        }
      ]
    };
  },
  computed: {
    isDesktop() {
      const mdUp = this.$vuetify.display.mdAndUp;
      return mdUp;
    },
    isMobile() {
      const xsDown = this.$vuetify.display.xsAndDown;
      return xsDown;
    },
    isTablet() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_container = resolveComponent("v-container");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_movie_thumb = resolveComponent("movie-thumb");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "root" }, _attrs))} data-v-736e4790><div class="decoration" data-v-736e4790><svg fill="#cccccc" data-v-736e4790><use${ssrRenderAttr("xlink:href", _imports_0 + "#main")} data-v-736e4790></use></svg></div>`);
  _push(ssrRenderComponent(_component_v_container, {
    class: { "fixed-width": $options.isDesktop }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_row, { class: "spacing3" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_col, {
                md: "3",
                cols: "12",
                class: "pt-10"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h1 class="title" data-v-736e4790${_scopeId3}><span class="word-the" data-v-736e4790${_scopeId3}>The</span><span class="word-shows" data-v-736e4790${_scopeId3}>Shows</span></h1><span class="${ssrRenderClass($options.isTablet ? "text-center custom-text" : "custom-text")}" data-v-736e4790${_scopeId3}> The casting team behind... </span>`);
                  } else {
                    return [
                      createVNode("h1", { class: "title" }, [
                        createVNode("span", { class: "word-the" }, "The"),
                        createVNode("span", { class: "word-shows" }, "Shows")
                      ]),
                      createVNode("span", {
                        class: $options.isTablet ? "text-center custom-text" : "custom-text"
                      }, " The casting team behind... ", 2)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<!--[-->`);
              ssrRenderList($data.movieList, (item, index2) => {
                _push3(ssrRenderComponent(_component_v_col, {
                  key: index2,
                  md: "3",
                  sm: "4",
                  cols: "12"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_movie_thumb, {
                        text: item.title,
                        img: item.thumb,
                        url: item.url
                      }, null, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_movie_thumb, {
                          text: item.title,
                          img: item.thumb,
                          url: item.url
                        }, null, 8, ["text", "img", "url"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                createVNode(_component_v_col, {
                  md: "3",
                  cols: "12",
                  class: "pt-10"
                }, {
                  default: withCtx(() => [
                    createVNode("h1", { class: "title" }, [
                      createVNode("span", { class: "word-the" }, "The"),
                      createVNode("span", { class: "word-shows" }, "Shows")
                    ]),
                    createVNode("span", {
                      class: $options.isTablet ? "text-center custom-text" : "custom-text"
                    }, " The casting team behind... ", 2)
                  ]),
                  _: 1
                }),
                (openBlock(true), createBlock(Fragment, null, renderList($data.movieList, (item, index2) => {
                  return openBlock(), createBlock(_component_v_col, {
                    key: index2,
                    md: "3",
                    sm: "4",
                    cols: "12"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_movie_thumb, {
                        text: item.title,
                        img: item.thumb,
                        url: item.url
                      }, null, 8, ["text", "img", "url"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_row, { class: "spacing3" }, {
            default: withCtx(() => [
              createVNode(_component_v_col, {
                md: "3",
                cols: "12",
                class: "pt-10"
              }, {
                default: withCtx(() => [
                  createVNode("h1", { class: "title" }, [
                    createVNode("span", { class: "word-the" }, "The"),
                    createVNode("span", { class: "word-shows" }, "Shows")
                  ]),
                  createVNode("span", {
                    class: $options.isTablet ? "text-center custom-text" : "custom-text"
                  }, " The casting team behind... ", 2)
                ]),
                _: 1
              }),
              (openBlock(true), createBlock(Fragment, null, renderList($data.movieList, (item, index2) => {
                return openBlock(), createBlock(_component_v_col, {
                  key: index2,
                  md: "3",
                  sm: "4",
                  cols: "12"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_movie_thumb, {
                      text: item.title,
                      img: item.thumb,
                      url: item.url
                    }, null, 8, ["text", "img", "url"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Featured/Featured.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Featured = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-736e4790"]]);
const _sfc_main$3 = {
  props: {
    text: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    pressUrl: {
      type: String,
      // Add a prop for the press article URL
      required: true
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_btn = resolveComponent("v-btn");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "news" }, _attrs))} data-v-131bf984><figure data-v-131bf984><img${ssrRenderAttr("src", $props.img)} alt="thumb" data-v-131bf984></figure><div class="desc" data-v-131bf984><div class="text" data-v-131bf984><p class="type caption" data-v-131bf984>${ssrInterpolate(_ctx.$t("movieLanding." + $props.type))}</p><p data-v-131bf984>${ssrInterpolate($props.text)}</p></div>`);
  _push(ssrRenderComponent(_component_v_btn, {
    size: "small",
    variant: "text",
    class: "btn",
    href: $props.pressUrl
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("movieLanding.news_readmore"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("movieLanding.news_readmore")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cards/News.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const NewsCard = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-131bf984"]]);
const newsContent = [
  {
    text: "Melissa Gorga Says She Would Be OK Leaving RHONJ If Bravo Goes a Certain Way",
    img: imgAPI.photo[1],
    type: "caption_news",
    isLatest: true,
    // Mark this as the latest news
    pressUrl: "https://www.hollywoodreporter.com/tv/tv-news/rhonj-melissa-gorga-teresa-giudice-season-15-1235983404/"
  },
  {
    text: "Bravo Unveils New Shows & Renewals Including Chrissy...",
    img: imgAPI.photo[2],
    type: "caption_news",
    isLatest: false,
    // Mark this as regular news
    pressUrl: "https://www.bravotv.com/the-daily-dish/bravo-new-shows-making-it-in-manhattan-on-safari"
  }
];
const _sfc_main$2 = {
  components: {
    NewsCard,
    Splide,
    SplideSlide
  },
  data() {
    return {
      loaded: false,
      newsContent,
      settings: {
        pagination: true,
        type: "loop",
        speed: 500,
        perPage: 2,
        perMove: 1,
        arrows: false,
        autoplay: true,
        interval: 5e3,
        direction: "ltr",
        reducedMotion: {
          speed: 500,
          rewindSpeed: 1e3,
          autoplay: true
        },
        breakpoints: {
          700: {
            perPage: 1
          }
        }
      }
    };
  },
  mounted() {
    this.loaded = true;
    setTimeout(() => {
      if (this.$vuetify.locale.isRtl) {
        this.settings.direction = "rtl";
      } else {
        this.settings.direction = "ltr";
      }
    }, 100);
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_splide = resolveComponent("splide");
  const _component_splide_slide = resolveComponent("splide-slide");
  const _component_news_card = resolveComponent("news-card");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "root" }, _attrs))} data-v-001f5204>`);
  if ($data.loaded) {
    _push(`<div class="carousel" data-v-001f5204>`);
    _push(ssrRenderComponent(_component_splide, { options: $data.settings }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($data.newsContent, (item, index2) => {
            _push2(ssrRenderComponent(_component_splide_slide, { key: index2 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="item" data-v-001f5204${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_news_card, {
                    img: item.img,
                    text: item.text,
                    type: item.type,
                    pressUrl: item.pressUrl,
                    class: "custom-font"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="${ssrRenderClass(["news-title", item.isLatest ? "latest" : ""])}" data-v-001f5204${_scopeId3}>${ssrInterpolate(item.isLatest ? "LATEST NEWS" : "NEWS")}</span>`);
                      } else {
                        return [
                          createVNode("span", {
                            class: ["news-title", item.isLatest ? "latest" : ""]
                          }, toDisplayString(item.isLatest ? "LATEST NEWS" : "NEWS"), 3)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "item" }, [
                      createVNode(_component_news_card, {
                        img: item.img,
                        text: item.text,
                        type: item.type,
                        pressUrl: item.pressUrl,
                        class: "custom-font"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", {
                            class: ["news-title", item.isLatest ? "latest" : ""]
                          }, toDisplayString(item.isLatest ? "LATEST NEWS" : "NEWS"), 3)
                        ]),
                        _: 2
                      }, 1032, ["img", "text", "type", "pressUrl"])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment, null, renderList($data.newsContent, (item, index2) => {
              return openBlock(), createBlock(_component_splide_slide, { key: index2 }, {
                default: withCtx(() => [
                  createVNode("div", { class: "item" }, [
                    createVNode(_component_news_card, {
                      img: item.img,
                      text: item.text,
                      type: item.type,
                      pressUrl: item.pressUrl,
                      class: "custom-font"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", {
                          class: ["news-title", item.isLatest ? "latest" : ""]
                        }, toDisplayString(item.isLatest ? "LATEST NEWS" : "NEWS"), 3)
                      ]),
                      _: 2
                    }, 1032, ["img", "text", "type", "pressUrl"])
                  ])
                ]),
                _: 2
              }, 1024);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NewsEvent/NewsEvent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const NewsEvent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-001f5204"]]);
let counter = 0;
function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset
  };
}
const _sfc_main$1 = {
  data() {
    return {
      menu: menu2,
      show: false,
      sections: [],
      activeMenu: "",
      menuList: [
        createData("home", "/home"),
        // Example for home
        createData("shows", "/shows"),
        // Ensure this points to the 'shows' page
        createData("about", "/about"),
        // Other menu items
        createData("news", "/news")
      ]
    };
  },
  mounted() {
    const section = (void 0).querySelectorAll(".scroll-nav-content > *");
    Array.prototype.forEach.call(section, (e) => {
      this.sections[e.id] = e.offsetTop || 0;
    });
  },
  methods: {
    handleScroll() {
      const scrollPosition = (void 0).documentElement.scrollTop || (void 0).body.scrollTop;
      const topPosition = scrollPosition + 100;
      Object.keys(this.sections).forEach((i) => {
        if (this.sections[i] <= topPosition) {
          this.activeMenu = i;
        }
      });
      if ((void 0).scrollY > 500) {
        this.show = true;
      } else {
        this.show = false;
      }
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_v_tooltip = resolveComponent("v-tooltip");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_icon = resolveComponent("v-icon");
  const _directive_smooth_scroll = resolveDirective("smooth-scroll");
  const _directive_scroll = resolveDirective("scroll");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: [{ show: $data.show }, "page-nav"]
  }, _attrs, ssrGetDirectiveProps(_ctx, _directive_scroll, $options.handleScroll)))} data-v-6262a61b><nav class="section-nav" data-v-6262a61b><!--[-->`);
  ssrRenderList($data.menuList, (item, index2) => {
    _push(ssrRenderComponent(_component_router_link, {
      key: index2,
      to: item.url,
      class: [{ active: $data.activeMenu === item.url }, "nav-item"]
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_v_tooltip, {
            "nudge-top": 5,
            location: "left"
          }, {
            activator: withCtx(({ props }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<span${ssrRenderAttrs(mergeProps({ ref_for: true }, props))} data-v-6262a61b${_scopeId2}>${ssrInterpolate(_ctx.$t("movieLanding.header_" + item.name))}</span>`);
              } else {
                return [
                  createVNode("span", mergeProps({ ref_for: true }, props), toDisplayString(_ctx.$t("movieLanding.header_" + item.name)), 17)
                ];
              }
            }),
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<span class="tooltip" data-v-6262a61b${_scopeId2}>${ssrInterpolate(_ctx.$t("movieLanding.header_" + item.name))}</span>`);
              } else {
                return [
                  createVNode("span", { class: "tooltip" }, toDisplayString(_ctx.$t("movieLanding.header_" + item.name)), 1)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_v_tooltip, {
              "nudge-top": 5,
              location: "left"
            }, {
              activator: withCtx(({ props }) => [
                createVNode("span", mergeProps({ ref_for: true }, props), toDisplayString(_ctx.$t("movieLanding.header_" + item.name)), 17)
              ]),
              default: withCtx(() => [
                createVNode("span", { class: "tooltip" }, toDisplayString(_ctx.$t("movieLanding.header_" + item.name)), 1)
              ]),
              _: 2
            }, 1024)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></nav>`);
  _push(ssrRenderComponent(_component_v_tooltip, {
    "nudge-top": 25,
    location: "left"
  }, {
    activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_btn, mergeProps({
          icon: "",
          size: "large",
          class: "fab anchor-link scrollactive-item",
          href: "#home"
        }, props, ssrGetDirectiveProps(_ctx, _directive_smooth_scroll)), {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_icon, { class: "icon" }, {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` mdi-arrow-up `);
                  } else {
                    return [
                      createTextVNode(" mdi-arrow-up ")
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_icon, { class: "icon" }, {
                  default: withCtx(() => [
                    createTextVNode(" mdi-arrow-up ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
      } else {
        return [
          withDirectives((openBlock(), createBlock(_component_v_btn, mergeProps({
            icon: "",
            size: "large",
            class: "fab anchor-link scrollactive-item",
            href: "#home"
          }, props), {
            default: withCtx(() => [
              createVNode(_component_v_icon, { class: "icon" }, {
                default: withCtx(() => [
                  createTextVNode(" mdi-arrow-up ")
                ]),
                _: 1
              })
            ]),
            _: 2
          }, 1040)), [
            [_directive_smooth_scroll]
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="tooltip" data-v-6262a61b${_scopeId}>To Top</span>`);
      } else {
        return [
          createVNode("span", { class: "tooltip" }, "To Top")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageNav/PageNav.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PageNav = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-6262a61b"]]);
const _sfc_main = defineNuxtComponent({
  components: {
    MainContainer,
    VideoBanner,
    Promotions,
    Featured,
    NewsEvent,
    PageNav,
    Notification
  },
  head() {
    return {
      title: "Chelsey Creative"
    };
  }
}, "$PslAyef5YX");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_main_container = resolveComponent("main-container");
  const _component_video_banner = resolveComponent("video-banner");
  const _component_promotions = resolveComponent("promotions");
  const _component_featured = resolveComponent("featured");
  const _component_news_event = resolveComponent("news-event");
  const _component_hidden = resolveComponent("hidden");
  const _component_page_nav = resolveComponent("page-nav");
  const _component_notification = resolveComponent("notification");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-2caeadbe>`);
  _push(ssrRenderComponent(_component_main_container, { "nav-scroll": "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<section id="home" data-v-2caeadbe${_scopeId}>`);
        _push2(ssrRenderComponent(_component_video_banner, null, null, _parent2, _scopeId));
        _push2(`</section><div id="promotions" data-v-2caeadbe${_scopeId}>`);
        _push2(ssrRenderComponent(_component_promotions, null, null, _parent2, _scopeId));
        _push2(`</div><section id="featured" class="space-top" data-v-2caeadbe${_scopeId}>`);
        _push2(ssrRenderComponent(_component_featured, null, null, _parent2, _scopeId));
        _push2(`</section><section id="news" class="space-top-short" data-v-2caeadbe${_scopeId}>`);
        _push2(ssrRenderComponent(_component_news_event, null, null, _parent2, _scopeId));
        _push2(`</section>`);
        _push2(ssrRenderComponent(_component_hidden, { point: "mdDown" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_page_nav, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_page_nav)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_hidden, { point: "mdDown" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_notification, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_notification)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode("section", { id: "home" }, [
            createVNode(_component_video_banner)
          ]),
          createVNode("div", { id: "promotions" }, [
            createVNode(_component_promotions)
          ]),
          createVNode("section", {
            id: "featured",
            class: "space-top"
          }, [
            createVNode(_component_featured)
          ]),
          createVNode("section", {
            id: "news",
            class: "space-top-short"
          }, [
            createVNode(_component_news_event)
          ]),
          createVNode(_component_hidden, { point: "mdDown" }, {
            default: withCtx(() => [
              createVNode(_component_page_nav)
            ]),
            _: 1
          }),
          createVNode(_component_hidden, { point: "mdDown" }, {
            default: withCtx(() => [
              createVNode(_component_notification)
            ]),
            _: 1
          })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2caeadbe"]]);
export {
  index as default
};
//# sourceMappingURL=index-BTttB23u.js.map
