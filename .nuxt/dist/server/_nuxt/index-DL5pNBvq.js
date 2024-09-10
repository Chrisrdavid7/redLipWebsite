import { M as MainContainer } from "./MainContainer-DISKvjdN.js";
import { i as imgAPI, T as Title, M as MovieThumb } from "./MovieThumb-DDVI_J62.js";
import { _ as _export_sfc, H as Hidden, u as useLocalePath, l as link, m as menu2, d as defineNuxtComponent } from "../server.mjs";
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, Fragment, renderList, resolveDirective, withDirectives } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrGetDirectiveProps } from "vue/server-renderer";
import { s as setInterval } from "./interval-gl53xdpR.js";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { A as About } from "./About-DYah-hvS.js";
import AOS from "aos";
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
const useYoutube = {
  use: true
};
const _sfc_main$f = {
  components: {
    Hidden
  },
  data() {
    return {
      imgAPI,
      loaded: false,
      videoId: "kDignq3wgJg",
      playerVars: {
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0,
        mute: 1,
        origin: "http://localhost:8010"
      },
      yt: useYoutube,
      play: false,
      playCtrl: true,
      cover: imgAPI.movie[0]
    };
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
    isDesktop() {
      const lgUp = this.$vuetify.display.lgAndUp;
      return lgUp;
    },
    isMobile() {
      const mdDown = this.$vuetify.display.mdAndDown;
      return mdDown;
    }
  },
  mounted() {
    this.loaded = true;
  },
  methods: {
    playing() {
      this.play = true;
      this.playCtrl = true;
    },
    ended(val) {
      if (val.data === 0) {
        this.player.playVideo();
      }
    },
    togglePause() {
      this.playCtrl = !this.playCtrl;
      if (this.playCtrl) {
        this.player.playVideo();
      } else {
        this.player.pauseVideo();
      }
    }
  }
};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_YouTube = resolveComponent("YouTube");
  const _component_v_container = resolveComponent("v-container");
  const _component_hidden = resolveComponent("hidden");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "root" }, _attrs))} data-v-30f21689><div class="video" data-v-30f21689><div class="overlay" data-v-30f21689></div>`);
  if (!$data.play || $options.isMobile) {
    _push(`<img${ssrRenderAttr("src", $data.imgAPI.movie[0])} alt="cover" data-v-30f21689>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.yt.use) {
    _push(`<div data-v-30f21689>`);
    if ($options.isDesktop) {
      _push(ssrRenderComponent(_component_YouTube, {
        ref: "youtube",
        src: $data.videoId,
        vars: $data.playerVars,
        width: "1080",
        height: "720",
        onReady: $options.playing,
        onStateChange: $options.ended
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="caption-banner" data-v-30f21689>`);
  _push(ssrRenderComponent(_component_v_container, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_hidden, { point: "mdDown" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if ($data.play) {
                _push3(ssrRenderComponent(_component_v_btn, {
                  icon: "",
                  variant: "outlined",
                  class: "btn-play",
                  onClick: ($event) => $options.togglePause()
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<span class="${ssrRenderClass({ hidden: $data.playCtrl })}" data-v-30f21689${_scopeId3}>watch</span><span class="${ssrRenderClass({ hidden: $data.playCtrl })}" data-v-30f21689${_scopeId3}>trailer</span>`);
                      if ($data.playCtrl) {
                        _push4(`<i class="ion-ios-pause-outline" data-v-30f21689${_scopeId3}></i>`);
                      } else {
                        _push4(`<i class="ion-ios-play" data-v-30f21689${_scopeId3}></i>`);
                      }
                    } else {
                      return [
                        createVNode("span", {
                          class: { hidden: $data.playCtrl }
                        }, "watch", 2),
                        createVNode("span", {
                          class: { hidden: $data.playCtrl }
                        }, "trailer", 2),
                        $data.playCtrl ? (openBlock(), createBlock("i", {
                          key: 0,
                          class: "ion-ios-pause-outline"
                        })) : (openBlock(), createBlock("i", {
                          key: 1,
                          class: "ion-ios-play"
                        }))
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
            } else {
              return [
                $data.play ? (openBlock(), createBlock(_component_v_btn, {
                  key: 0,
                  icon: "",
                  variant: "outlined",
                  class: "btn-play",
                  onClick: ($event) => $options.togglePause()
                }, {
                  default: withCtx(() => [
                    createVNode("span", {
                      class: { hidden: $data.playCtrl }
                    }, "watch", 2),
                    createVNode("span", {
                      class: { hidden: $data.playCtrl }
                    }, "trailer", 2),
                    $data.playCtrl ? (openBlock(), createBlock("i", {
                      key: 0,
                      class: "ion-ios-pause-outline"
                    })) : (openBlock(), createBlock("i", {
                      key: 1,
                      class: "ion-ios-play"
                    }))
                  ]),
                  _: 1
                }, 8, ["onClick"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_row, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_col, {
                md: "5",
                cols: "12"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<p class="use-text-paragraph" data-v-30f21689${_scopeId3}></p><h2 class="use-text-title" data-v-30f21689${_scopeId3}> The Real Housewives of Dubai </h2><p class="use-text-subtitle" data-v-30f21689${_scopeId3}> Bravo Networks </p>`);
                  } else {
                    return [
                      createVNode("p", { class: "use-text-paragraph" }),
                      createVNode("h2", { class: "use-text-title" }, " The Real Housewives of Dubai "),
                      createVNode("p", { class: "use-text-subtitle" }, " Bravo Networks ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_col, {
                  md: "5",
                  cols: "12"
                }, {
                  default: withCtx(() => [
                    createVNode("p", { class: "use-text-paragraph" }),
                    createVNode("h2", { class: "use-text-title" }, " The Real Housewives of Dubai "),
                    createVNode("p", { class: "use-text-subtitle" }, " Bravo Networks ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_hidden, { point: "mdDown" }, {
            default: withCtx(() => [
              $data.play ? (openBlock(), createBlock(_component_v_btn, {
                key: 0,
                icon: "",
                variant: "outlined",
                class: "btn-play",
                onClick: ($event) => $options.togglePause()
              }, {
                default: withCtx(() => [
                  createVNode("span", {
                    class: { hidden: $data.playCtrl }
                  }, "watch", 2),
                  createVNode("span", {
                    class: { hidden: $data.playCtrl }
                  }, "trailer", 2),
                  $data.playCtrl ? (openBlock(), createBlock("i", {
                    key: 0,
                    class: "ion-ios-pause-outline"
                  })) : (openBlock(), createBlock("i", {
                    key: 1,
                    class: "ion-ios-play"
                  }))
                ]),
                _: 1
              }, 8, ["onClick"])) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          createVNode(_component_v_row, null, {
            default: withCtx(() => [
              createVNode(_component_v_col, {
                md: "5",
                cols: "12"
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "use-text-paragraph" }),
                  createVNode("h2", { class: "use-text-title" }, " The Real Housewives of Dubai "),
                  createVNode("p", { class: "use-text-subtitle" }, " Bravo Networks ")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VideoBanner/VideoBanner.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const VideoBanner = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$f], ["__scopeId", "data-v-30f21689"]]);
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
const _sfc_main$e = {
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
      console.log(this.content[Math.abs(this.currentImg) % this.content.length].image);
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
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_hidden = resolveComponent("hidden");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "root" }, _attrs))} data-v-b34cc98e><div class="slider-wrap" data-v-b34cc98e><div${ssrRenderAttrs({ name: $data.transition })} data-v-b34cc98e>`);
  ssrRenderList([$data.currentImg], (number) => {
    _push(`<div class="slide slider-content" data-v-b34cc98e><div class="inner item" data-v-b34cc98e><div class="inner-bg" data-v-b34cc98e><div class="background" data-v-b34cc98e><figure data-v-b34cc98e><img${ssrRenderAttr("src", $data.content[Math.abs($data.currentImg) % $data.content.length].image)} alt="promotion" data-v-b34cc98e></figure></div>`);
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
                _push3(`<div class="text" data-v-b34cc98e${_scopeId2}><h4 data-v-b34cc98e${_scopeId2}><span class="use-text-subtitle2" data-v-b34cc98e${_scopeId2}>${ssrInterpolate($data.content[Math.abs($data.currentImg) % $data.content.length].subtitle)}</span> ${ssrInterpolate($data.content[Math.abs($data.currentImg) % $data.content.length].title)}</h4><div class="property" data-v-b34cc98e${_scopeId2}> Confidential </div><article class="desc" data-v-b34cc98e${_scopeId2}><h6 class="use-text-paragraph" data-v-b34cc98e${_scopeId2}>${ssrInterpolate($data.content[Math.abs($data.currentImg) % $data.content.length].desc)}</h6></article><div class="btn-area" data-v-b34cc98e${_scopeId2}>`);
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
                      _push4(`<div class="image" data-v-b34cc98e${_scopeId3}><figure data-v-b34cc98e${_scopeId3}><img${ssrRenderAttr("src", $data.content[Math.abs($data.currentImg) % $data.content.length].image)} alt="promotion" data-v-b34cc98e${_scopeId3}></figure></div>`);
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
  _push(`</div></div><a href="javascript:void(0)" class="prev" data-v-b34cc98e><i class="ion-ios-arrow-round-back-outline arrow-icon" data-v-b34cc98e></i></a><a href="javascript:void(0)" class="next" data-v-b34cc98e><i class="ion-ios-arrow-round-forward-outline arrow-icon" data-v-b34cc98e></i></a></div>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Promotions/Promotions.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const Promotions = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$e], ["__scopeId", "data-v-b34cc98e"]]);
const _imports_0$1 = publicAssetsURL("/images/movie/deco-med-bg.svg");
const _sfc_main$d = {
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
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_container = resolveComponent("v-container");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_movie_thumb = resolveComponent("movie-thumb");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "root" }, _attrs))} data-v-736e4790><div class="decoration" data-v-736e4790><svg fill="#cccccc" data-v-736e4790><use${ssrRenderAttr("xlink:href", _imports_0$1 + "#main")} data-v-736e4790></use></svg></div>`);
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
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Featured/Featured.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const Featured = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d], ["__scopeId", "data-v-736e4790"]]);
const _sfc_main$c = {
  components: {
    Hidden,
    Splide,
    SplideSlide
  },
  data() {
    return {
      imgAPI,
      slickOptions: {
        pagination: false,
        speed: 500,
        type: "loop",
        perPage: 1,
        direction: "ltr",
        arrows: false,
        perMove: 1,
        autoplay: true,
        interval: 7e3
      }
    };
  }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_hidden = resolveComponent("hidden");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_splide = resolveComponent("splide");
  const _component_splide_slide = resolveComponent("splide-slide");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "root" }, _attrs))} data-v-4bd48824>`);
  _push(ssrRenderComponent(_component_hidden, { point: "xsDown" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="grid-25" data-v-4bd48824${_scopeId}><img${ssrRenderAttr("src", $data.imgAPI.movie[6])} alt="trending" data-v-4bd48824${_scopeId}>`);
        _push2(ssrRenderComponent(_component_v_btn, {
          variant: "text",
          class: "overlay"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<h5 data-v-4bd48824${_scopeId2}>${ssrInterpolate(_ctx.$t("movieLanding.trending_rent"))}</h5>`);
            } else {
              return [
                createVNode("h5", null, toDisplayString(_ctx.$t("movieLanding.trending_rent")), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="grid-50" data-v-4bd48824${_scopeId}><img${ssrRenderAttr("src", $data.imgAPI.movie[7])} alt="trending" data-v-4bd48824${_scopeId}>`);
        _push2(ssrRenderComponent(_component_v_btn, {
          variant: "text",
          class: "overlay"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<h3 data-v-4bd48824${_scopeId2}><i class="ion-coffee" data-v-4bd48824${_scopeId2}></i> FREE <span data-v-4bd48824${_scopeId2}>Movies</span></h3>`);
            } else {
              return [
                createVNode("h3", null, [
                  createVNode("i", { class: "ion-coffee" }),
                  createTextVNode(" FREE "),
                  createVNode("span", null, "Movies")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="grid-25" data-v-4bd48824${_scopeId}><img${ssrRenderAttr("src", $data.imgAPI.movie[8])} alt="trending" data-v-4bd48824${_scopeId}>`);
        _push2(ssrRenderComponent(_component_v_btn, {
          variant: "text",
          class: "overlay"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<h5 data-v-4bd48824${_scopeId2}>${ssrInterpolate(_ctx.$t("movieLanding.trending_episodes"))}</h5>`);
            } else {
              return [
                createVNode("h5", null, toDisplayString(_ctx.$t("movieLanding.trending_episodes")), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "grid-25" }, [
            createVNode("img", {
              src: $data.imgAPI.movie[6],
              alt: "trending"
            }, null, 8, ["src"]),
            createVNode(_component_v_btn, {
              variant: "text",
              class: "overlay"
            }, {
              default: withCtx(() => [
                createVNode("h5", null, toDisplayString(_ctx.$t("movieLanding.trending_rent")), 1)
              ]),
              _: 1
            })
          ]),
          createVNode("div", { class: "grid-50" }, [
            createVNode("img", {
              src: $data.imgAPI.movie[7],
              alt: "trending"
            }, null, 8, ["src"]),
            createVNode(_component_v_btn, {
              variant: "text",
              class: "overlay"
            }, {
              default: withCtx(() => [
                createVNode("h3", null, [
                  createVNode("i", { class: "ion-coffee" }),
                  createTextVNode(" FREE "),
                  createVNode("span", null, "Movies")
                ])
              ]),
              _: 1
            })
          ]),
          createVNode("div", { class: "grid-25" }, [
            createVNode("img", {
              src: $data.imgAPI.movie[8],
              alt: "trending"
            }, null, 8, ["src"]),
            createVNode(_component_v_btn, {
              variant: "text",
              class: "overlay"
            }, {
              default: withCtx(() => [
                createVNode("h5", null, toDisplayString(_ctx.$t("movieLanding.trending_episodes")), 1)
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_hidden, { point: "smUp" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_splide, {
          ref: "slick",
          options: $data.slickOptions
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_splide_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="grid-25" data-v-4bd48824${_scopeId3}><img${ssrRenderAttr("src", $data.imgAPI.movie[6])} alt="trending" data-v-4bd48824${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_v_btn, {
                      variant: "text",
                      class: "overlay"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<h5 data-v-4bd48824${_scopeId4}>${ssrInterpolate(_ctx.$t("movieLanding.trending_rent"))}</h5>`);
                        } else {
                          return [
                            createVNode("h5", null, toDisplayString(_ctx.$t("movieLanding.trending_rent")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "grid-25" }, [
                        createVNode("img", {
                          src: $data.imgAPI.movie[6],
                          alt: "trending"
                        }, null, 8, ["src"]),
                        createVNode(_component_v_btn, {
                          variant: "text",
                          class: "overlay"
                        }, {
                          default: withCtx(() => [
                            createVNode("h5", null, toDisplayString(_ctx.$t("movieLanding.trending_rent")), 1)
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_splide_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="grid-50" data-v-4bd48824${_scopeId3}><img${ssrRenderAttr("src", $data.imgAPI.movie[7])} alt="trending" data-v-4bd48824${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_v_btn, {
                      variant: "text",
                      class: "overlay"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<h3 data-v-4bd48824${_scopeId4}><i class="ion-coffee" data-v-4bd48824${_scopeId4}></i> FREE <span data-v-4bd48824${_scopeId4}>Movies</span></h3>`);
                        } else {
                          return [
                            createVNode("h3", null, [
                              createVNode("i", { class: "ion-coffee" }),
                              createTextVNode(" FREE "),
                              createVNode("span", null, "Movies")
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "grid-50" }, [
                        createVNode("img", {
                          src: $data.imgAPI.movie[7],
                          alt: "trending"
                        }, null, 8, ["src"]),
                        createVNode(_component_v_btn, {
                          variant: "text",
                          class: "overlay"
                        }, {
                          default: withCtx(() => [
                            createVNode("h3", null, [
                              createVNode("i", { class: "ion-coffee" }),
                              createTextVNode(" FREE "),
                              createVNode("span", null, "Movies")
                            ])
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_splide_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="grid-25" data-v-4bd48824${_scopeId3}><img${ssrRenderAttr("src", $data.imgAPI.movie[8])} alt="trending" data-v-4bd48824${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_v_btn, {
                      variant: "text",
                      class: "overlay"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<h5 data-v-4bd48824${_scopeId4}>${ssrInterpolate(_ctx.$t("movieLanding.trending_episodes"))}</h5>`);
                        } else {
                          return [
                            createVNode("h5", null, toDisplayString(_ctx.$t("movieLanding.trending_episodes")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "grid-25" }, [
                        createVNode("img", {
                          src: $data.imgAPI.movie[8],
                          alt: "trending"
                        }, null, 8, ["src"]),
                        createVNode(_component_v_btn, {
                          variant: "text",
                          class: "overlay"
                        }, {
                          default: withCtx(() => [
                            createVNode("h5", null, toDisplayString(_ctx.$t("movieLanding.trending_episodes")), 1)
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_splide_slide, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "grid-25" }, [
                      createVNode("img", {
                        src: $data.imgAPI.movie[6],
                        alt: "trending"
                      }, null, 8, ["src"]),
                      createVNode(_component_v_btn, {
                        variant: "text",
                        class: "overlay"
                      }, {
                        default: withCtx(() => [
                          createVNode("h5", null, toDisplayString(_ctx.$t("movieLanding.trending_rent")), 1)
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_splide_slide, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "grid-50" }, [
                      createVNode("img", {
                        src: $data.imgAPI.movie[7],
                        alt: "trending"
                      }, null, 8, ["src"]),
                      createVNode(_component_v_btn, {
                        variant: "text",
                        class: "overlay"
                      }, {
                        default: withCtx(() => [
                          createVNode("h3", null, [
                            createVNode("i", { class: "ion-coffee" }),
                            createTextVNode(" FREE "),
                            createVNode("span", null, "Movies")
                          ])
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_splide_slide, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "grid-25" }, [
                      createVNode("img", {
                        src: $data.imgAPI.movie[8],
                        alt: "trending"
                      }, null, 8, ["src"]),
                      createVNode(_component_v_btn, {
                        variant: "text",
                        class: "overlay"
                      }, {
                        default: withCtx(() => [
                          createVNode("h5", null, toDisplayString(_ctx.$t("movieLanding.trending_episodes")), 1)
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_splide, {
            ref: "slick",
            options: $data.slickOptions
          }, {
            default: withCtx(() => [
              createVNode(_component_splide_slide, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "grid-25" }, [
                    createVNode("img", {
                      src: $data.imgAPI.movie[6],
                      alt: "trending"
                    }, null, 8, ["src"]),
                    createVNode(_component_v_btn, {
                      variant: "text",
                      class: "overlay"
                    }, {
                      default: withCtx(() => [
                        createVNode("h5", null, toDisplayString(_ctx.$t("movieLanding.trending_rent")), 1)
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_splide_slide, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "grid-50" }, [
                    createVNode("img", {
                      src: $data.imgAPI.movie[7],
                      alt: "trending"
                    }, null, 8, ["src"]),
                    createVNode(_component_v_btn, {
                      variant: "text",
                      class: "overlay"
                    }, {
                      default: withCtx(() => [
                        createVNode("h3", null, [
                          createVNode("i", { class: "ion-coffee" }),
                          createTextVNode(" FREE "),
                          createVNode("span", null, "Movies")
                        ])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_splide_slide, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "grid-25" }, [
                    createVNode("img", {
                      src: $data.imgAPI.movie[8],
                      alt: "trending"
                    }, null, 8, ["src"]),
                    createVNode(_component_v_btn, {
                      variant: "text",
                      class: "overlay"
                    }, {
                      default: withCtx(() => [
                        createVNode("h5", null, toDisplayString(_ctx.$t("movieLanding.trending_episodes")), 1)
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["options"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Trending/Trending.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const Trending = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c], ["__scopeId", "data-v-4bd48824"]]);
const _sfc_main$b = {
  components: {
    Hidden
  },
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    background: {
      type: String,
      required: true
    },
    total: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_hidden = resolveComponent("hidden");
  const _component_v_btn = resolveComponent("v-btn");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: [[$props.type === "top-over" ? "half-char" : "full-char"], "category"],
    style: { "background-color": "#" + $props.background }
  }, _attrs))} data-v-703b58d8><img${ssrRenderAttr("src", $props.img)} class="shadow"${ssrRenderAttr("alt", $props.title)} data-v-703b58d8><img${ssrRenderAttr("src", $props.img)}${ssrRenderAttr("alt", $props.title)} data-v-703b58d8><span class="property" data-v-703b58d8><span class="title-main use-text-title2" data-v-703b58d8>${ssrInterpolate($props.title)}</span><span class="total use-text-paragraph" data-v-703b58d8>${ssrInterpolate($props.total)}  Items </span>`);
  _push(ssrRenderComponent(_component_hidden, { point: "xsDown" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_btn, {
          block: "",
          size: "large",
          variant: "outlined",
          color: "white",
          class: "button"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Explore `);
            } else {
              return [
                createTextVNode(" Explore ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_btn, {
            block: "",
            size: "large",
            variant: "outlined",
            color: "white",
            class: "button"
          }, {
            default: withCtx(() => [
              createTextVNode(" Explore ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span></div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cards/CategoryBig.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const CategoryBigCard = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b], ["__scopeId", "data-v-703b58d8"]]);
const _sfc_main$a = {
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    background: {
      type: String,
      required: true
    },
    total: {
      type: String,
      required: true
    }
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_btn = resolveComponent("v-btn");
  _push(ssrRenderComponent(_component_v_btn, mergeProps({
    style: { "background-color": "#" + $props.background },
    text: "",
    class: "category full button-base"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", $props.img)}${ssrRenderAttr("alt", $props.title)} data-v-d4ca6784${_scopeId}><span class="property" data-v-d4ca6784${_scopeId}><span class="title-main use-text-title2" data-v-d4ca6784${_scopeId}>${ssrInterpolate($props.title)}</span><span class="total use-text-paragraph" data-v-d4ca6784${_scopeId}>${ssrInterpolate($props.total)} Items </span></span>`);
      } else {
        return [
          createVNode("img", {
            src: $props.img,
            alt: $props.title
          }, null, 8, ["src", "alt"]),
          createVNode("span", { class: "property" }, [
            createVNode("span", { class: "title-main use-text-title2" }, toDisplayString($props.title), 1),
            createVNode("span", { class: "total use-text-paragraph" }, toDisplayString($props.total) + " Items ", 1)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cards/CategorySmall.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const CategorySmallCard = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a], ["__scopeId", "data-v-d4ca6784"]]);
const _sfc_main$9 = {
  components: {
    CategoryBigCard,
    CategorySmallCard,
    "title-main": Title
  },
  data() {
    return {
      imgAPI
    };
  },
  computed: {
    isDesktop() {
      const lgUp = this.$vuetify.display.lgAndUp;
      return lgUp;
    },
    isMobile() {
      const xsDown = this.$vuetify.display.xsAndDown;
      return xsDown;
    }
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_container = resolveComponent("v-container");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_title_main = resolveComponent("title-main");
  const _component_category_small_card = resolveComponent("category-small-card");
  const _component_category_big_card = resolveComponent("category-big-card");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "root" }, _attrs))} data-v-97b33d95>`);
  _push(ssrRenderComponent(_component_v_container, {
    class: { "fixed-width": $options.isDesktop }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_row, { class: "spacing3" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_col, {
                md: "6",
                cols: "12",
                class: "pt-10"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_title_main, {
                      align: $options.isMobile ? "center" : "left",
                      primary: "Top",
                      secondary: "Categories"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_title_main, {
                        align: $options.isMobile ? "center" : "left",
                        primary: "Top",
                        secondary: "Categories"
                      }, null, 8, ["align"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_col, {
                md: "3",
                sm: "6",
                cols: "12"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_category_small_card, {
                      img: $data.imgAPI.movie[9],
                      title: "Academy Awards",
                      total: "24",
                      background: "E79A1C"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_category_small_card, {
                        img: $data.imgAPI.movie[9],
                        title: "Academy Awards",
                        total: "24",
                        background: "E79A1C"
                      }, null, 8, ["img"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_col, {
                md: "3",
                sm: "6",
                cols: "12"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_category_small_card, {
                      img: $data.imgAPI.movie[10],
                      title: "Animations",
                      total: "24",
                      background: "E91E63"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_category_small_card, {
                        img: $data.imgAPI.movie[10],
                        title: "Animations",
                        total: "24",
                        background: "E91E63"
                      }, null, 8, ["img"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_col, {
                  md: "6",
                  cols: "12",
                  class: "pt-10"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_title_main, {
                      align: $options.isMobile ? "center" : "left",
                      primary: "Top",
                      secondary: "Categories"
                    }, null, 8, ["align"])
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  md: "3",
                  sm: "6",
                  cols: "12"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_category_small_card, {
                      img: $data.imgAPI.movie[9],
                      title: "Academy Awards",
                      total: "24",
                      background: "E79A1C"
                    }, null, 8, ["img"])
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  md: "3",
                  sm: "6",
                  cols: "12"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_category_small_card, {
                      img: $data.imgAPI.movie[10],
                      title: "Animations",
                      total: "24",
                      background: "E91E63"
                    }, null, 8, ["img"])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_row, { class: "spacing3" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_col, {
                md: "6",
                cols: "12",
                class: "py-0"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_category_big_card, {
                      img: $data.imgAPI.movie[11],
                      title: "Actions",
                      total: "24",
                      background: "1A237E",
                      type: "top-over"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_row, { class: "spacing3" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_col, {
                            md: "6",
                            sm: "6",
                            cols: "12"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_category_small_card, {
                                  img: $data.imgAPI.movie[12],
                                  title: "Romance Drama",
                                  total: "24",
                                  background: "14A8B9"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_category_small_card, {
                                    img: $data.imgAPI.movie[12],
                                    title: "Romance Drama",
                                    total: "24",
                                    background: "14A8B9"
                                  }, null, 8, ["img"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_col, {
                            md: "6",
                            sm: "6",
                            cols: "12"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_category_small_card, {
                                  img: $data.imgAPI.movie[13],
                                  title: "Commedy",
                                  total: "24",
                                  background: "2AA845"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_category_small_card, {
                                    img: $data.imgAPI.movie[13],
                                    title: "Commedy",
                                    total: "24",
                                    background: "2AA845"
                                  }, null, 8, ["img"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_col, {
                              md: "6",
                              sm: "6",
                              cols: "12"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_category_small_card, {
                                  img: $data.imgAPI.movie[12],
                                  title: "Romance Drama",
                                  total: "24",
                                  background: "14A8B9"
                                }, null, 8, ["img"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              md: "6",
                              sm: "6",
                              cols: "12"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_category_small_card, {
                                  img: $data.imgAPI.movie[13],
                                  title: "Commedy",
                                  total: "24",
                                  background: "2AA845"
                                }, null, 8, ["img"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_category_big_card, {
                        img: $data.imgAPI.movie[11],
                        title: "Actions",
                        total: "24",
                        background: "1A237E",
                        type: "top-over"
                      }, null, 8, ["img"]),
                      createVNode(_component_v_row, { class: "spacing3" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            md: "6",
                            sm: "6",
                            cols: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_category_small_card, {
                                img: $data.imgAPI.movie[12],
                                title: "Romance Drama",
                                total: "24",
                                background: "14A8B9"
                              }, null, 8, ["img"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            md: "6",
                            sm: "6",
                            cols: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_category_small_card, {
                                img: $data.imgAPI.movie[13],
                                title: "Commedy",
                                total: "24",
                                background: "2AA845"
                              }, null, 8, ["img"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_col, {
                md: "6",
                cols: "12",
                class: "py-0"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_category_big_card, {
                      img: $data.imgAPI.movie[14],
                      title: "Super Heroes",
                      total: "24",
                      background: "ED3626",
                      type: "bottom-over"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_category_big_card, {
                        img: $data.imgAPI.movie[14],
                        title: "Super Heroes",
                        total: "24",
                        background: "ED3626",
                        type: "bottom-over"
                      }, null, 8, ["img"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_col, {
                  md: "6",
                  cols: "12",
                  class: "py-0"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_category_big_card, {
                      img: $data.imgAPI.movie[11],
                      title: "Actions",
                      total: "24",
                      background: "1A237E",
                      type: "top-over"
                    }, null, 8, ["img"]),
                    createVNode(_component_v_row, { class: "spacing3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          md: "6",
                          sm: "6",
                          cols: "12"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_category_small_card, {
                              img: $data.imgAPI.movie[12],
                              title: "Romance Drama",
                              total: "24",
                              background: "14A8B9"
                            }, null, 8, ["img"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          md: "6",
                          sm: "6",
                          cols: "12"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_category_small_card, {
                              img: $data.imgAPI.movie[13],
                              title: "Commedy",
                              total: "24",
                              background: "2AA845"
                            }, null, 8, ["img"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  md: "6",
                  cols: "12",
                  class: "py-0"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_category_big_card, {
                      img: $data.imgAPI.movie[14],
                      title: "Super Heroes",
                      total: "24",
                      background: "ED3626",
                      type: "bottom-over"
                    }, null, 8, ["img"])
                  ]),
                  _: 1
                })
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
                md: "6",
                cols: "12",
                class: "pt-10"
              }, {
                default: withCtx(() => [
                  createVNode(_component_title_main, {
                    align: $options.isMobile ? "center" : "left",
                    primary: "Top",
                    secondary: "Categories"
                  }, null, 8, ["align"])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                md: "3",
                sm: "6",
                cols: "12"
              }, {
                default: withCtx(() => [
                  createVNode(_component_category_small_card, {
                    img: $data.imgAPI.movie[9],
                    title: "Academy Awards",
                    total: "24",
                    background: "E79A1C"
                  }, null, 8, ["img"])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                md: "3",
                sm: "6",
                cols: "12"
              }, {
                default: withCtx(() => [
                  createVNode(_component_category_small_card, {
                    img: $data.imgAPI.movie[10],
                    title: "Animations",
                    total: "24",
                    background: "E91E63"
                  }, null, 8, ["img"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_row, { class: "spacing3" }, {
            default: withCtx(() => [
              createVNode(_component_v_col, {
                md: "6",
                cols: "12",
                class: "py-0"
              }, {
                default: withCtx(() => [
                  createVNode(_component_category_big_card, {
                    img: $data.imgAPI.movie[11],
                    title: "Actions",
                    total: "24",
                    background: "1A237E",
                    type: "top-over"
                  }, null, 8, ["img"]),
                  createVNode(_component_v_row, { class: "spacing3" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        md: "6",
                        sm: "6",
                        cols: "12"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_category_small_card, {
                            img: $data.imgAPI.movie[12],
                            title: "Romance Drama",
                            total: "24",
                            background: "14A8B9"
                          }, null, 8, ["img"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        md: "6",
                        sm: "6",
                        cols: "12"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_category_small_card, {
                            img: $data.imgAPI.movie[13],
                            title: "Commedy",
                            total: "24",
                            background: "2AA845"
                          }, null, 8, ["img"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                md: "6",
                cols: "12",
                class: "py-0"
              }, {
                default: withCtx(() => [
                  createVNode(_component_category_big_card, {
                    img: $data.imgAPI.movie[14],
                    title: "Super Heroes",
                    total: "24",
                    background: "ED3626",
                    type: "bottom-over"
                  }, null, 8, ["img"])
                ]),
                _: 1
              })
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Categories/Categories.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Categories = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9], ["__scopeId", "data-v-97b33d95"]]);
const _sfc_main$8 = {
  setup() {
    const localePath = useLocalePath();
    return {
      localePath
    };
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      link
    };
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_btn = resolveComponent("v-btn");
  _push(ssrRenderComponent(_component_v_btn, mergeProps({
    to: $setup.localePath($data.link.movie.detail),
    variant: "text",
    class: "simple-thumb"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="wrap" data-v-bdb29f82${_scopeId}><span class="figure" data-v-bdb29f82${_scopeId}><span data-v-bdb29f82${_scopeId}><i class="${ssrRenderClass($props.icon)}" data-v-bdb29f82${_scopeId}></i></span></span><span class="text" data-v-bdb29f82${_scopeId}>${ssrInterpolate($props.title)}</span></span>`);
      } else {
        return [
          createVNode("span", { class: "wrap" }, [
            createVNode("span", { class: "figure" }, [
              createVNode("span", null, [
                createVNode("i", { class: $props.icon }, null, 2)
              ])
            ]),
            createVNode("span", { class: "text" }, toDisplayString($props.title), 1)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cards/SimpleThumb.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const SimpleThumbCard = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-bdb29f82"]]);
const dataCategories = [
  {
    icon: "ion-ios-heart",
    title: "Romantic"
  },
  {
    icon: "ion-ios-planet",
    title: "sci-fi"
  },
  {
    icon: "ion-md-contacts",
    title: "commedy"
  },
  {
    icon: "ion-ios-star",
    title: "super heroes"
  },
  {
    icon: "ion-ios-flash",
    title: "actions"
  },
  {
    icon: "ion-ios-videocam",
    title: "hollywood"
  },
  {
    icon: "ion-ios-heart",
    title: "Romantic"
  },
  {
    icon: "ion-ios-planet",
    title: "sci-fi"
  },
  {
    icon: "ion-md-contacts",
    title: "commedy"
  },
  {
    icon: "ion-ios-star",
    title: "super heroes"
  },
  {
    icon: "ion-ios-flash",
    title: "actions"
  },
  {
    icon: "ion-ios-videocam",
    title: "hollywood"
  }
];
const _sfc_main$7 = {
  components: {
    "title-main": Title,
    SimpleThumbCard,
    Splide,
    SplideSlide
  },
  data() {
    return {
      dataCategories,
      slickOptions: {
        type: "loop",
        pagination: false,
        speed: 500,
        perPage: 6,
        perMove: 3,
        arrows: false,
        autoplay: true,
        interval: 7e3,
        direction: "ltr",
        breakpoints: {
          1024: {
            perPage: 4
          },
          600: {
            perPage: 2
          }
        },
        reducedMotion: {
          autoplay: true,
          speed: 500,
          rewindSpeed: 1e3
        }
      }
    };
  },
  mounted() {
    setTimeout(() => {
      if (this.$vuetify.locale.isRtl) {
        this.slickOptions.direction = "rtl";
      } else {
        this.slickOptions.direction = "ltr";
      }
    }, 100);
  },
  methods: {
    slickNext() {
      this.$refs.slider.go(">");
    },
    slickPrev() {
      this.$refs.slider.go("<");
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_container = resolveComponent("v-container");
  const _component_title_main = resolveComponent("title-main");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_icon = resolveComponent("v-icon");
  const _component_splide = resolveComponent("splide");
  const _component_splide_slide = resolveComponent("splide-slide");
  const _component_simple_thumb_card = resolveComponent("simple-thumb-card");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "root" }, _attrs))} data-v-e2b0e967>`);
  _push(ssrRenderComponent(_component_v_container, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_title_main, {
          align: "center",
          primary: "All",
          secondary: "Categories"
        }, null, _parent2, _scopeId));
        _push2(`<div class="carousel-wrap" data-v-e2b0e967${_scopeId}>`);
        _push2(ssrRenderComponent(_component_v_btn, {
          class: "nav prev",
          onClick: $options.slickPrev
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_icon, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`mdi-arrow-left`);
                  } else {
                    return [
                      createTextVNode("mdi-arrow-left")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_icon, null, {
                  default: withCtx(() => [
                    createTextVNode("mdi-arrow-left")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_btn, {
          class: "nav next",
          onClick: $options.slickNext
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_icon, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`mdi-arrow-right`);
                  } else {
                    return [
                      createTextVNode("mdi-arrow-right")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_icon, null, {
                  default: withCtx(() => [
                    createTextVNode("mdi-arrow-right")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_splide, {
          ref: "slider",
          options: $data.slickOptions
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList($data.dataCategories, (item, index2) => {
                _push3(ssrRenderComponent(_component_splide_slide, { key: index2 }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="item" data-v-e2b0e967${_scopeId3}>`);
                      _push4(ssrRenderComponent(_component_simple_thumb_card, {
                        title: item.title,
                        icon: item.icon
                      }, null, _parent4, _scopeId3));
                      _push4(`</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "item" }, [
                          createVNode(_component_simple_thumb_card, {
                            title: item.title,
                            icon: item.icon
                          }, null, 8, ["title", "icon"])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList($data.dataCategories, (item, index2) => {
                  return openBlock(), createBlock(_component_splide_slide, { key: index2 }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "item" }, [
                        createVNode(_component_simple_thumb_card, {
                          title: item.title,
                          icon: item.icon
                        }, null, 8, ["title", "icon"])
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode(_component_title_main, {
            align: "center",
            primary: "All",
            secondary: "Categories"
          }),
          createVNode("div", { class: "carousel-wrap" }, [
            createVNode(_component_v_btn, {
              class: "nav prev",
              onClick: $options.slickPrev
            }, {
              default: withCtx(() => [
                createVNode(_component_v_icon, null, {
                  default: withCtx(() => [
                    createTextVNode("mdi-arrow-left")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["onClick"]),
            createVNode(_component_v_btn, {
              class: "nav next",
              onClick: $options.slickNext
            }, {
              default: withCtx(() => [
                createVNode(_component_v_icon, null, {
                  default: withCtx(() => [
                    createTextVNode("mdi-arrow-right")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["onClick"]),
            createVNode(_component_splide, {
              ref: "slider",
              options: $data.slickOptions
            }, {
              default: withCtx(() => [
                (openBlock(true), createBlock(Fragment, null, renderList($data.dataCategories, (item, index2) => {
                  return openBlock(), createBlock(_component_splide_slide, { key: index2 }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "item" }, [
                        createVNode(_component_simple_thumb_card, {
                          title: item.title,
                          icon: item.icon
                        }, null, 8, ["title", "icon"])
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ]),
              _: 1
            }, 8, ["options"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AllCategories/AllCategories.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const AllCategories = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-e2b0e967"]]);
const _sfc_main$6 = {
  props: {
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    featureList: {
      type: Array,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: ""
    }
  },
  computed: {
    calculatePrice() {
      return this.price > 0 ? this.price : "Free";
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_btn = resolveComponent("v-btn");
  _push(ssrRenderComponent(_component_v_card, mergeProps({
    class: [$props.type, "pricing"]
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="title-card" data-v-8975ac68${_scopeId}><p data-v-8975ac68${_scopeId}>${ssrInterpolate($props.title)}</p><h4 class="display-1" data-v-8975ac68${_scopeId}>`);
        if ($props.price > 0) {
          _push2(`<span data-v-8975ac68${_scopeId}>$</span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`${ssrInterpolate($options.calculatePrice)}</h4></div><ul data-v-8975ac68${_scopeId}><!--[-->`);
        ssrRenderList($props.featureList, (item, index2) => {
          _push2(`<li data-v-8975ac68${_scopeId}>${ssrInterpolate(item)}</li>`);
        });
        _push2(`<!--]--></ul><div class="btn-area" data-v-8975ac68${_scopeId}><p class="desc" data-v-8975ac68${_scopeId}>${ssrInterpolate($props.desc)}</p>`);
        _push2(ssrRenderComponent(_component_v_btn, {
          color: $props.type === "basic" ? "secondary" : "primary",
          class: "button",
          large: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Choose Plan `);
            } else {
              return [
                createTextVNode(" Choose Plan ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "title-card" }, [
            createVNode("p", null, toDisplayString($props.title), 1),
            createVNode("h4", { class: "display-1" }, [
              $props.price > 0 ? (openBlock(), createBlock("span", { key: 0 }, "$")) : createCommentVNode("", true),
              createTextVNode(toDisplayString($options.calculatePrice), 1)
            ])
          ]),
          createVNode("ul", null, [
            (openBlock(true), createBlock(Fragment, null, renderList($props.featureList, (item, index2) => {
              return openBlock(), createBlock("li", { key: index2 }, toDisplayString(item), 1);
            }), 128))
          ]),
          createVNode("div", { class: "btn-area" }, [
            createVNode("p", { class: "desc" }, toDisplayString($props.desc), 1),
            createVNode(_component_v_btn, {
              color: $props.type === "basic" ? "secondary" : "primary",
              class: "button",
              large: ""
            }, {
              default: withCtx(() => [
                createTextVNode(" Choose Plan ")
              ]),
              _: 1
            }, 8, ["color"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cards/Pricing.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const PricingCard = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-8975ac68"]]);
const featureList = {
  basic: [
    "Nam sollicitudin dignissim",
    "Cras convallis lacus",
    "Quisque ut metus"
  ],
  best: [
    "Nam sollicitudin dignissim",
    "Cras convallis lacus",
    "Quisque ut metus",
    "Vivamus sit amet",
    "Cras convallis lacus orci"
  ],
  pro: [
    "Nam sollicitudin dignissim",
    "Cras convallis lacus",
    "Nulla lobortis nunc",
    "Vitae scelerisque",
    "Duis sed augue"
  ],
  enterprise: [
    "Nam sollicitudin dignissim",
    "Pellentesque ac bibendum ",
    "Vestibulum consequat",
    "Donec commodo",
    "Duis tristique metus"
  ]
};
const _sfc_main$5 = {
  components: {
    "title-main": Title,
    PricingCard
  },
  data() {
    return {
      feature: featureList,
      loaded: false
    };
  },
  computed: {
    isDesktop() {
      const lgUp = this.$vuetify.display.lgAndUp;
      return lgUp;
    }
  },
  mounted() {
    this.loaded = true;
    AOS.init({
      once: true
    });
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_container = resolveComponent("v-container");
  const _component_title_main = resolveComponent("title-main");
  const _component_pricing_card = resolveComponent("pricing-card");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "root" }, _attrs))} data-v-bca584d5><div class="decoration" data-v-bca584d5><svg fill="#cccccc" data-v-bca584d5><use${ssrRenderAttr("xlink:href", _imports_0$1 + "#main")} data-v-bca584d5></use></svg></div>`);
  _push(ssrRenderComponent(_component_v_container, {
    class: { fixed: $options.isDesktop }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="text-center" data-v-bca584d5${_scopeId}>`);
        _push2(ssrRenderComponent(_component_title_main, {
          align: "center",
          primary: "Flexible",
          secondary: "Pricing and Plan"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
        if ($data.loaded) {
          _push2(`<div class="pricing-wrap" data-v-bca584d5${_scopeId}><section data-v-bca584d5${_scopeId}><div data-aos="fade-up" data-aos-offset="50" data-aos-delay="200" data-aos-duration="400" class="item" data-v-bca584d5${_scopeId}><div data-v-bca584d5${_scopeId}>`);
          _push2(ssrRenderComponent(_component_pricing_card, {
            price: 0,
            "feature-list": $data.feature.basic,
            title: "Basic",
            desc: "Interdum et malesuada fames ac ante ipsum primis in faucibus. ",
            type: "basic"
          }, null, _parent2, _scopeId));
          _push2(`</div></div><div data-aos="fade-up" data-aos-offset="50" data-aos-delay="400" data-aos-duration="400" class="item best" data-v-bca584d5${_scopeId}><div data-v-bca584d5${_scopeId}>`);
          _push2(ssrRenderComponent(_component_pricing_card, {
            price: 24,
            "feature-list": $data.feature.best,
            title: "Best Value",
            desc: "Interdum et malesuada fames ac ante ipsum primis in faucibus. ",
            type: "value"
          }, null, _parent2, _scopeId));
          _push2(`</div></div><div data-aos="fade-up" data-aos-offset="50" data-aos-delay="600" data-aos-duration="400" class="item" data-v-bca584d5${_scopeId}><div data-v-bca584d5${_scopeId}>`);
          _push2(ssrRenderComponent(_component_pricing_card, {
            price: 54,
            "feature-list": $data.feature.pro,
            title: "Pro",
            desc: "Interdum et malesuada fames ac ante ipsum primis in faucibus. "
          }, null, _parent2, _scopeId));
          _push2(`</div></div><div data-aos="fade-up" data-aos-offset="100" data-aos-delay="800" data-aos-duration="400" class="item" data-v-bca584d5${_scopeId}><div data-v-bca584d5${_scopeId}>`);
          _push2(ssrRenderComponent(_component_pricing_card, {
            price: 99,
            "feature-list": $data.feature.enterprise,
            title: "Enterprise",
            desc: " Interdum et malesuada fames ac ante ipsum primis in faucibus. "
          }, null, _parent2, _scopeId));
          _push2(`</div></div></section></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode("div", { class: "text-center" }, [
            createVNode(_component_title_main, {
              align: "center",
              primary: "Flexible",
              secondary: "Pricing and Plan"
            })
          ]),
          $data.loaded ? (openBlock(), createBlock("div", {
            key: 0,
            class: "pricing-wrap"
          }, [
            createVNode("section", null, [
              createVNode("div", {
                "data-aos": "fade-up",
                "data-aos-offset": "50",
                "data-aos-delay": "200",
                "data-aos-duration": "400",
                class: "item"
              }, [
                createVNode("div", null, [
                  createVNode(_component_pricing_card, {
                    price: 0,
                    "feature-list": $data.feature.basic,
                    title: "Basic",
                    desc: "Interdum et malesuada fames ac ante ipsum primis in faucibus. ",
                    type: "basic"
                  }, null, 8, ["feature-list"])
                ])
              ]),
              createVNode("div", {
                "data-aos": "fade-up",
                "data-aos-offset": "50",
                "data-aos-delay": "400",
                "data-aos-duration": "400",
                class: "item best"
              }, [
                createVNode("div", null, [
                  createVNode(_component_pricing_card, {
                    price: 24,
                    "feature-list": $data.feature.best,
                    title: "Best Value",
                    desc: "Interdum et malesuada fames ac ante ipsum primis in faucibus. ",
                    type: "value"
                  }, null, 8, ["feature-list"])
                ])
              ]),
              createVNode("div", {
                "data-aos": "fade-up",
                "data-aos-offset": "50",
                "data-aos-delay": "600",
                "data-aos-duration": "400",
                class: "item"
              }, [
                createVNode("div", null, [
                  createVNode(_component_pricing_card, {
                    price: 54,
                    "feature-list": $data.feature.pro,
                    title: "Pro",
                    desc: "Interdum et malesuada fames ac ante ipsum primis in faucibus. "
                  }, null, 8, ["feature-list"])
                ])
              ]),
              createVNode("div", {
                "data-aos": "fade-up",
                "data-aos-offset": "100",
                "data-aos-delay": "800",
                "data-aos-duration": "400",
                class: "item"
              }, [
                createVNode("div", null, [
                  createVNode(_component_pricing_card, {
                    price: 99,
                    "feature-list": $data.feature.enterprise,
                    title: "Enterprise",
                    desc: " Interdum et malesuada fames ac ante ipsum primis in faucibus. "
                  }, null, 8, ["feature-list"])
                ])
              ])
            ])
          ])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PricingPlan/PricingPlan.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const PricingPlan = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-bca584d5"]]);
const _imports_0 = publicAssetsURL("/images/movie/faq.png");
const faqData = [
  {
    q: "Pellentesque ac bibendum tortor?",
    a: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor."
  },
  {
    q: "In mi nulla, fringilla vestibulum?",
    a: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. "
  },
  {
    q: "Quisque lacinia purus ut libero?",
    a: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. "
  },
  {
    q: "Quisque ut metus sit amet augue?",
    a: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. "
  },
  {
    q: "Pellentesque ac bibendum tortor?",
    a: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. "
  }
];
const _sfc_main$4 = {
  components: {
    Hidden,
    "title-main": Title
  },
  data() {
    return {
      panel: 0,
      faqData
    };
  },
  computed: {
    isMobile() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
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
  const _component_title_main = resolveComponent("title-main");
  const _component_hidden = resolveComponent("hidden");
  const _component_v_expansion_panels = resolveComponent("v-expansion-panels");
  const _component_v_expansion_panel = resolveComponent("v-expansion-panel");
  const _component_v_expansion_panel_title = resolveComponent("v-expansion-panel-title");
  const _component_v_expansion_panel_text = resolveComponent("v-expansion-panel-text");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "root" }, _attrs))} data-v-20247dcc>`);
  _push(ssrRenderComponent(_component_v_container, { class: "fixed-width" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_row, { class: "spacing6" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_col, {
                md: "6",
                class: ["pa-6", $options.isMobile ? "text-center" : "text-left"]
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_title_main, {
                      align: $options.isTablet ? "center" : "left",
                      primary: "Frequently",
                      secondary: "Answered Questions"
                    }, null, _parent4, _scopeId3));
                    _push4(`<p class="${ssrRenderClass([[$options.isMobile ? "text-center" : "text-left"], "text use-text-subtitle2"])}" data-v-20247dcc${_scopeId3}>${ssrInterpolate(_ctx.$t("movieLanding.faq_subtitle"))}</p>`);
                    _push4(ssrRenderComponent(_component_hidden, { point: "smDown" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="illustration" data-v-20247dcc${_scopeId4}><img${ssrRenderAttr("src", _imports_0)} alt="illustration" data-v-20247dcc${_scopeId4}></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "illustration" }, [
                              createVNode("img", {
                                src: _imports_0,
                                alt: "illustration"
                              })
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_title_main, {
                        align: $options.isTablet ? "center" : "left",
                        primary: "Frequently",
                        secondary: "Answered Questions"
                      }, null, 8, ["align"]),
                      createVNode("p", {
                        class: ["text use-text-subtitle2", [$options.isMobile ? "text-center" : "text-left"]]
                      }, toDisplayString(_ctx.$t("movieLanding.faq_subtitle")), 3),
                      createVNode(_component_hidden, { point: "smDown" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "illustration" }, [
                            createVNode("img", {
                              src: _imports_0,
                              alt: "illustration"
                            })
                          ])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_col, {
                md: "6",
                cols: "12",
                class: "pa-6"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="accordion" data-v-20247dcc${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_v_expansion_panels, {
                      modelValue: $data.panel,
                      "onUpdate:modelValue": ($event) => $data.panel = $event,
                      variant: "accordion",
                      "active-class": "expanded"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<!--[-->`);
                          ssrRenderList($data.faqData, (item, index2) => {
                            _push5(ssrRenderComponent(_component_v_expansion_panel, {
                              key: index2,
                              class: "paper"
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(ssrRenderComponent(_component_v_expansion_panel_title, { class: "content" }, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(`<p class="heading" data-v-20247dcc${_scopeId6}>${ssrInterpolate(item.q)}</p>`);
                                      } else {
                                        return [
                                          createVNode("p", { class: "heading" }, toDisplayString(item.q), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent6, _scopeId5));
                                  _push6(ssrRenderComponent(_component_v_expansion_panel_text, { class: "detail" }, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(`<p data-v-20247dcc${_scopeId6}>${ssrInterpolate(item.a)}</p>`);
                                      } else {
                                        return [
                                          createVNode("p", null, toDisplayString(item.a), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent6, _scopeId5));
                                } else {
                                  return [
                                    createVNode(_component_v_expansion_panel_title, { class: "content" }, {
                                      default: withCtx(() => [
                                        createVNode("p", { class: "heading" }, toDisplayString(item.q), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_v_expansion_panel_text, { class: "detail" }, {
                                      default: withCtx(() => [
                                        createVNode("p", null, toDisplayString(item.a), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          });
                          _push5(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList($data.faqData, (item, index2) => {
                              return openBlock(), createBlock(_component_v_expansion_panel, {
                                key: index2,
                                class: "paper"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_expansion_panel_title, { class: "content" }, {
                                    default: withCtx(() => [
                                      createVNode("p", { class: "heading" }, toDisplayString(item.q), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_v_expansion_panel_text, { class: "detail" }, {
                                    default: withCtx(() => [
                                      createVNode("p", null, toDisplayString(item.a), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "accordion" }, [
                        createVNode(_component_v_expansion_panels, {
                          modelValue: $data.panel,
                          "onUpdate:modelValue": ($event) => $data.panel = $event,
                          variant: "accordion",
                          "active-class": "expanded"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList($data.faqData, (item, index2) => {
                              return openBlock(), createBlock(_component_v_expansion_panel, {
                                key: index2,
                                class: "paper"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_expansion_panel_title, { class: "content" }, {
                                    default: withCtx(() => [
                                      createVNode("p", { class: "heading" }, toDisplayString(item.q), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_v_expansion_panel_text, { class: "detail" }, {
                                    default: withCtx(() => [
                                      createVNode("p", null, toDisplayString(item.a), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_col, {
                  md: "6",
                  class: ["pa-6", $options.isMobile ? "text-center" : "text-left"]
                }, {
                  default: withCtx(() => [
                    createVNode(_component_title_main, {
                      align: $options.isTablet ? "center" : "left",
                      primary: "Frequently",
                      secondary: "Answered Questions"
                    }, null, 8, ["align"]),
                    createVNode("p", {
                      class: ["text use-text-subtitle2", [$options.isMobile ? "text-center" : "text-left"]]
                    }, toDisplayString(_ctx.$t("movieLanding.faq_subtitle")), 3),
                    createVNode(_component_hidden, { point: "smDown" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "illustration" }, [
                          createVNode("img", {
                            src: _imports_0,
                            alt: "illustration"
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["class"]),
                createVNode(_component_v_col, {
                  md: "6",
                  cols: "12",
                  class: "pa-6"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "accordion" }, [
                      createVNode(_component_v_expansion_panels, {
                        modelValue: $data.panel,
                        "onUpdate:modelValue": ($event) => $data.panel = $event,
                        variant: "accordion",
                        "active-class": "expanded"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList($data.faqData, (item, index2) => {
                            return openBlock(), createBlock(_component_v_expansion_panel, {
                              key: index2,
                              class: "paper"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_expansion_panel_title, { class: "content" }, {
                                  default: withCtx(() => [
                                    createVNode("p", { class: "heading" }, toDisplayString(item.q), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_v_expansion_panel_text, { class: "detail" }, {
                                  default: withCtx(() => [
                                    createVNode("p", null, toDisplayString(item.a), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_row, { class: "spacing6" }, {
            default: withCtx(() => [
              createVNode(_component_v_col, {
                md: "6",
                class: ["pa-6", $options.isMobile ? "text-center" : "text-left"]
              }, {
                default: withCtx(() => [
                  createVNode(_component_title_main, {
                    align: $options.isTablet ? "center" : "left",
                    primary: "Frequently",
                    secondary: "Answered Questions"
                  }, null, 8, ["align"]),
                  createVNode("p", {
                    class: ["text use-text-subtitle2", [$options.isMobile ? "text-center" : "text-left"]]
                  }, toDisplayString(_ctx.$t("movieLanding.faq_subtitle")), 3),
                  createVNode(_component_hidden, { point: "smDown" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "illustration" }, [
                        createVNode("img", {
                          src: _imports_0,
                          alt: "illustration"
                        })
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["class"]),
              createVNode(_component_v_col, {
                md: "6",
                cols: "12",
                class: "pa-6"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "accordion" }, [
                    createVNode(_component_v_expansion_panels, {
                      modelValue: $data.panel,
                      "onUpdate:modelValue": ($event) => $data.panel = $event,
                      variant: "accordion",
                      "active-class": "expanded"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList($data.faqData, (item, index2) => {
                          return openBlock(), createBlock(_component_v_expansion_panel, {
                            key: index2,
                            class: "paper"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_expansion_panel_title, { class: "content" }, {
                                default: withCtx(() => [
                                  createVNode("p", { class: "heading" }, toDisplayString(item.q), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_v_expansion_panel_text, { class: "detail" }, {
                                default: withCtx(() => [
                                  createVNode("p", null, toDisplayString(item.a), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
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
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Faq/Faq.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Faq = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-20247dcc"]]);
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
    About,
    Featured,
    Trending,
    Categories,
    AllCategories,
    PricingPlan,
    Faq,
    NewsEvent,
    PageNav,
    Hidden,
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
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-6dd6d8d8>`);
  _push(ssrRenderComponent(_component_main_container, { "nav-scroll": "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<section id="home" data-v-6dd6d8d8${_scopeId}>`);
        _push2(ssrRenderComponent(_component_video_banner, null, null, _parent2, _scopeId));
        _push2(`</section><div id="promotions" data-v-6dd6d8d8${_scopeId}>`);
        _push2(ssrRenderComponent(_component_promotions, null, null, _parent2, _scopeId));
        _push2(`</div><section id="featured" class="space-top" data-v-6dd6d8d8${_scopeId}>`);
        _push2(ssrRenderComponent(_component_featured, null, null, _parent2, _scopeId));
        _push2(`</section><section id="news" class="space-top-short" data-v-6dd6d8d8${_scopeId}>`);
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6dd6d8d8"]]);
export {
  index as default
};
//# sourceMappingURL=index-DL5pNBvq.js.map
