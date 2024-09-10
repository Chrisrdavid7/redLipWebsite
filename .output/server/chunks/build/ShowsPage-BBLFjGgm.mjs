import { T as Title, M as MovieThumb, i as imgAPI } from './MovieThumb-DDVI_J62.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  components: {
    "title-main": Title,
    MovieThumb
  },
  data() {
    return {
      imgAPI,
      originalCastingList: [
        {
          // Real Housewives of Potomac
          thumb: imgAPI.movie[9],
          url: "https://www.bravotv.com/the-real-housewives-of-potomac"
        },
        {
          // Real Housewives of Dubai
          thumb: imgAPI.movie[8],
          url: "https://www.bravotv.com/the-real-housewives-of-dubai"
        },
        {
          // Winter House
          thumb: imgAPI.movie[2],
          url: "https://www.bravotv.com/winter-house"
        },
        {
          // Family Karma
          thumb: imgAPI.movie[4],
          url: "https://www.bravotv.com/family-karma"
        },
        {
          // Summer House: Martha's Vineyard
          thumb: imgAPI.movie[5],
          url: "https://www.bravotv.com/summer-house-marthas-vineyard"
        },
        {
          // Lucky Bastards
          thumb: imgAPI.movie[11],
          url: "https://www.themoviedb.org/tv/64945-lucky-bastards"
        },
        {
          // Princesses Long Island
          thumb: imgAPI.movie[14],
          url: "https://www.imdb.com/title/tt4828106/"
        },
        {
          // Kandi and the Gang
          thumb: imgAPI.movie[6],
          url: "https://www.bravotv.com/kandi-and-the-gang"
        },
        {
          // Princesses Long Island
          thumb: imgAPI.movie[12],
          url: "https://www.bravotv.com/princesses-long-island"
        }
      ],
      seriesCastingList: [
        {
          // Real Housewives of New Jersey
          thumb: imgAPI.movie[3],
          url: "https://www.bravotv.com/the-real-housewives-of-new-jersey"
        },
        {
          // Summer House
          thumb: imgAPI.movie[10],
          url: "https://www.bravotv.com/summer-house"
        },
        {
          // New York
          thumb: imgAPI.movie[21],
          url: "https://www.bravotv.com/the-real-housewives-of-new-york-city"
        },
        {
          // Real Housewives of Atlanta
          thumb: imgAPI.movie[7],
          url: "https://www.bravotv.com/the-real-housewives-of-atlanta"
        },
        {
          // shahs
          thumb: imgAPI.movie[15],
          url: "https://www.bravotv.com/shahs-of-sunset"
        },
        {
          //Match Maker
          thumb: imgAPI.movie[16],
          url: "https://www.bravotv.com/the-millionaire-matchmaker"
        },
        {
          // Basketball Wives
          thumb: imgAPI.movie[17],
          url: "https://www.vh1.com/shows/basketball-wives"
        },
        {
          // Ink Masters
          thumb: imgAPI.movie[18],
          url: "https://www.paramountplus.com/shows/ink-master/"
        },
        {
          // Swamp
          thumb: imgAPI.movie[19],
          url: "https://www.history.com/shows/swamp-people"
        },
        {
          // Blonde
          thumb: imgAPI.movie[20],
          url: "https://www.imdb.com/title/tt1125194/"
        },
        {
          // Swamp
          thumb: imgAPI.movie[22],
          url: "https://www.imdb.com/title/tt1839328/"
        },
        {
          // Blonde
          thumb: imgAPI.movie[23],
          url: "https://en.wikipedia.org/wiki/American_Gladiators_(2008_TV_series)_season_1"
        }
      ]
    };
  },
  computed: {
    isDesktop() {
      return this.$vuetify.display.mdAndUp;
    },
    isMobile() {
      return this.$vuetify.display.xsAndDown;
    },
    isTablet() {
      return this.$vuetify.display.smAndDown;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_container = resolveComponent("v-container");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_title_main = resolveComponent("title-main");
  const _component_movie_thumb = resolveComponent("movie-thumb");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "root" }, _attrs))} data-v-a5b07ed5><div class="theShows" data-v-a5b07ed5>`);
  _push(ssrRenderComponent(_component_v_container, {
    class: { "fixed-width": $options.isDesktop }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_row, {
          class: "spacing3",
          justify: "center"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_col, {
                md: "5",
                cols: "12",
                class: "pt-10"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_title_main, {
                      align: $options.isTablet ? "center" : "left",
                      primary: "The",
                      secondary: "Shows"
                    }, null, _parent4, _scopeId3));
                    _push4(`<span class="${ssrRenderClass($options.isTablet ? "text-center custom-text" : "custom-text")}" data-v-a5b07ed5${_scopeId3}> The award-winning team behind... </span>`);
                  } else {
                    return [
                      createVNode(_component_title_main, {
                        align: $options.isTablet ? "center" : "left",
                        primary: "The",
                        secondary: "Shows"
                      }, null, 8, ["align"]),
                      createVNode("span", {
                        class: $options.isTablet ? "text-center custom-text" : "custom-text"
                      }, " The award-winning team behind... ", 2)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_col, {
                  md: "5",
                  cols: "12",
                  class: "pt-10"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_title_main, {
                      align: $options.isTablet ? "center" : "left",
                      primary: "The",
                      secondary: "Shows"
                    }, null, 8, ["align"]),
                    createVNode("span", {
                      class: $options.isTablet ? "text-center custom-text" : "custom-text"
                    }, " The award-winning team behind... ", 2)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_row, {
          class: "spacing3",
          justify: "center"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_col, {
                md: "12",
                cols: "12"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h2 class="section-title1" data-v-a5b07ed5${_scopeId3}>Original Casting and Development</h2>`);
                  } else {
                    return [
                      createVNode("h2", { class: "section-title1" }, "Original Casting and Development")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<!--[-->`);
              ssrRenderList($data.originalCastingList, (item, index) => {
                _push3(ssrRenderComponent(_component_v_col, {
                  key: index,
                  md: "3",
                  sm: "4",
                  cols: "12",
                  class: "movie-col"
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
                  md: "12",
                  cols: "12"
                }, {
                  default: withCtx(() => [
                    createVNode("h2", { class: "section-title1" }, "Original Casting and Development")
                  ]),
                  _: 1
                }),
                (openBlock(true), createBlock(Fragment, null, renderList($data.originalCastingList, (item, index) => {
                  return openBlock(), createBlock(_component_v_col, {
                    key: index,
                    md: "3",
                    sm: "4",
                    cols: "12",
                    class: "movie-col"
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
        _push2(ssrRenderComponent(_component_v_row, {
          class: "spacing3",
          justify: "center"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_col, {
                md: "12",
                cols: "12"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h2 class="section-title2" data-v-a5b07ed5${_scopeId3}>Series Castings</h2>`);
                  } else {
                    return [
                      createVNode("h2", { class: "section-title2" }, "Series Castings")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<!--[-->`);
              ssrRenderList($data.seriesCastingList, (item, index) => {
                _push3(ssrRenderComponent(_component_v_col, {
                  key: index,
                  md: "3",
                  sm: "4",
                  cols: "12",
                  class: "movie-col"
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
                  md: "12",
                  cols: "12"
                }, {
                  default: withCtx(() => [
                    createVNode("h2", { class: "section-title2" }, "Series Castings")
                  ]),
                  _: 1
                }),
                (openBlock(true), createBlock(Fragment, null, renderList($data.seriesCastingList, (item, index) => {
                  return openBlock(), createBlock(_component_v_col, {
                    key: index,
                    md: "3",
                    sm: "4",
                    cols: "12",
                    class: "movie-col"
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
          createVNode(_component_v_row, {
            class: "spacing3",
            justify: "center"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_col, {
                md: "5",
                cols: "12",
                class: "pt-10"
              }, {
                default: withCtx(() => [
                  createVNode(_component_title_main, {
                    align: $options.isTablet ? "center" : "left",
                    primary: "The",
                    secondary: "Shows"
                  }, null, 8, ["align"]),
                  createVNode("span", {
                    class: $options.isTablet ? "text-center custom-text" : "custom-text"
                  }, " The award-winning team behind... ", 2)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_row, {
            class: "spacing3",
            justify: "center"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_col, {
                md: "12",
                cols: "12"
              }, {
                default: withCtx(() => [
                  createVNode("h2", { class: "section-title1" }, "Original Casting and Development")
                ]),
                _: 1
              }),
              (openBlock(true), createBlock(Fragment, null, renderList($data.originalCastingList, (item, index) => {
                return openBlock(), createBlock(_component_v_col, {
                  key: index,
                  md: "3",
                  sm: "4",
                  cols: "12",
                  class: "movie-col"
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
          }),
          createVNode(_component_v_row, {
            class: "spacing3",
            justify: "center"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_col, {
                md: "12",
                cols: "12"
              }, {
                default: withCtx(() => [
                  createVNode("h2", { class: "section-title2" }, "Series Castings")
                ]),
                _: 1
              }),
              (openBlock(true), createBlock(Fragment, null, renderList($data.seriesCastingList, (item, index) => {
                return openBlock(), createBlock(_component_v_col, {
                  key: index,
                  md: "3",
                  sm: "4",
                  cols: "12",
                  class: "movie-col"
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
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ShowsPage/ShowsPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Shows = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a5b07ed5"]]);

export { Shows as S };
//# sourceMappingURL=ShowsPage-BBLFjGgm.mjs.map
