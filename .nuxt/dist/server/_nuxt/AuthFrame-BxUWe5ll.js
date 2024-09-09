import { useSSRContext, mergeProps, resolveComponent, withCtx, createVNode, createTextVNode, toDisplayString, renderSlot, openBlock, createBlock } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc, u as useLocalePath, H as Hidden, b as brand, l as link, c as __nuxt_component_0 } from "../server.mjs";
import { publicAssetsURL } from "#internal/nuxt/paths";
const _sfc_main$2 = {
  props: {
    align: {
      type: String,
      default: "left"
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["title-secondary", $props.align]
  }, _attrs))} data-v-90c4092c><h3 data-v-90c4092c>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</h3></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Title/TitleSecondary.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TitleSecondary = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-90c4092c"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_v_btn = resolveComponent("v-btn");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "socmed-side-login" }, _attrs))} data-v-27c0eb34>`);
  _push(ssrRenderComponent(_component_v_btn, {
    class: "navi-btn",
    large: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="ion-logo-facebook" data-v-27c0eb34${_scopeId}></i> Facebook `);
      } else {
        return [
          createVNode("i", { class: "ion-logo-facebook" }),
          createTextVNode(" Facebook ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    class: "blue-btn",
    large: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="ion-logo-twitter" data-v-27c0eb34${_scopeId}></i> Twitter `);
      } else {
        return [
          createVNode("i", { class: "ion-logo-twitter" }),
          createTextVNode(" Twitter ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    class: "red-btn",
    large: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="ion-logo-google" data-v-27c0eb34${_scopeId}></i> Google `);
      } else {
        return [
          createVNode("i", { class: "ion-logo-google" }),
          createTextVNode(" Google ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Forms/SocialAuth.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SocialAuth = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-27c0eb34"]]);
const _imports_0 = publicAssetsURL("/images/movie-logo.svg");
const _sfc_main = {
  setup() {
    const localePath = useLocalePath();
    return {
      localePath
    };
  },
  components: {
    Hidden
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      brand,
      routerLink: link
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_hidden = resolveComponent("hidden");
  const _component_nuxt_link = __nuxt_component_0;
  const _component_v_container = resolveComponent("v-container");
  const _component_v_card = resolveComponent("v-card");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-wrap" }, _attrs))} data-v-36453717>`);
  _push(ssrRenderComponent(_component_hidden, { point: "mdUp" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="logo logo-header" data-v-36453717${_scopeId}>`);
        _push2(ssrRenderComponent(_component_nuxt_link, {
          to: $setup.localePath($data.routerLink.movie.home)
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_0)} alt="logo" data-v-36453717${_scopeId2}><p class="use-text-subtitle2" data-v-36453717${_scopeId2}>${ssrInterpolate($data.brand.movie.projectName)}</p>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_0,
                  alt: "logo"
                }),
                createVNode("p", { class: "use-text-subtitle2" }, toDisplayString($data.brand.movie.projectName), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "logo logo-header" }, [
            createVNode(_component_nuxt_link, {
              to: $setup.localePath($data.routerLink.movie.home)
            }, {
              default: withCtx(() => [
                createVNode("img", {
                  src: _imports_0,
                  alt: "logo"
                }),
                createVNode("p", { class: "use-text-subtitle2" }, toDisplayString($data.brand.movie.projectName), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_container, { class: "max-lg inner-wrap" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="decoration" data-v-36453717${_scopeId}><svg class="left-deco" width="1045px" height="1468px" viewBox="0 0 1045 1468" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-v-36453717${_scopeId}><g transform="translate(-1030.000000, 0.000000)" data-v-36453717${_scopeId}><g transform="translate(950.000000, 0.000000)" data-v-36453717${_scopeId}><path d="M0,0 L805.395445,0 C731.131815,0 740.666667,76.9414646 834,230.824394 C915.57424,365.319569 1045,513.536468 1045,652.024982 C1045,806.30828 951.877684,902.632061 904.5,1091.56209 C874.07902,1212.87314 909.795583,1338.35244 1011.64969,1468 L0,1468 L0,0 Z" data-v-36453717${_scopeId}></path></g></g></svg><svg class="right-deco" width="389px" height="1468px" viewBox="0 0 389 1468" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-v-36453717${_scopeId}><g transform="translate(-2171.000000, 0.000000)" data-v-36453717${_scopeId}><g transform="translate(-950.000000, 0.000000)" data-v-36453717${_scopeId}><g transform="translate(950.000000, 0.000000)" data-v-36453717${_scopeId}><path d="M2329.58044,-732.909805 L3294.66463,-608.836163 C3018.10652,-208.944402 2934.07929,71.8618948 3042.58292,233.582726 C3136.98689,374.288498 3255.13325,471.945016 3255.13325,636.668858 C3255.13325,820.179655 3107.51302,903.798038 3059.64228,1128.51906 C3028.9047,1272.81133 3063.63816,1429.66837 3163.84265,1599.0902 L2141.66463,1599.0902 L2329.58044,-732.909805 Z" transform="translate(2718.164626, 433.090195) rotate(179.000000) translate(-2718.164626, -433.090195) " data-v-36453717${_scopeId}></path></g></g></g></svg></div>`);
        _push2(ssrRenderComponent(_component_v_card, { class: "form-box fragment-fadeUp" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_btn, {
                to: $setup.localePath($data.routerLink.movie.home),
                variant: "text",
                icon: "",
                class: "backtohome"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<i class="ion-ios-home-outline" data-v-36453717${_scopeId3}></i><i class="ion-ios-arrow-round-back-outline" data-v-36453717${_scopeId3}></i>`);
                  } else {
                    return [
                      createVNode("i", { class: "ion-ios-home-outline" }),
                      createVNode("i", { class: "ion-ios-arrow-round-back-outline" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div class="auth-frame" data-v-36453717${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_row, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_col, {
                      md: "5",
                      cols: "12"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_hidden, { point: "smDown" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<div class="greeting" data-v-36453717${_scopeId5}><div class="logo" data-v-36453717${_scopeId5}><img${ssrRenderAttr("src", _imports_0)} alt="logo" data-v-36453717${_scopeId5}><p class="use-text-subtitle2" data-v-36453717${_scopeId5}>${ssrInterpolate($data.brand.movie.projectName)}</p></div><h4 class="use-text-subtitle pb-2" data-v-36453717${_scopeId5}>${ssrInterpolate($props.title)}</h4><h6 class="use-text-paragraph" data-v-36453717${_scopeId5}>${ssrInterpolate($props.subtitle)}</h6></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "greeting" }, [
                                    createVNode("div", { class: "logo" }, [
                                      createVNode("img", {
                                        src: _imports_0,
                                        alt: "logo"
                                      }),
                                      createVNode("p", { class: "use-text-subtitle2" }, toDisplayString($data.brand.movie.projectName), 1)
                                    ]),
                                    createVNode("h4", { class: "use-text-subtitle pb-2" }, toDisplayString($props.title), 1),
                                    createVNode("h6", { class: "use-text-paragraph" }, toDisplayString($props.subtitle), 1)
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_hidden, { point: "smDown" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "greeting" }, [
                                  createVNode("div", { class: "logo" }, [
                                    createVNode("img", {
                                      src: _imports_0,
                                      alt: "logo"
                                    }),
                                    createVNode("p", { class: "use-text-subtitle2" }, toDisplayString($data.brand.movie.projectName), 1)
                                  ]),
                                  createVNode("h4", { class: "use-text-subtitle pb-2" }, toDisplayString($props.title), 1),
                                  createVNode("h6", { class: "use-text-paragraph" }, toDisplayString($props.subtitle), 1)
                                ])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_col, {
                      md: "7",
                      cols: "12"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="form-wrap" data-v-36453717${_scopeId4}>`);
                          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push5, _parent5, _scopeId4);
                          _push5(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "form-wrap" }, [
                              renderSlot(_ctx.$slots, "default", {}, void 0, true)
                            ])
                          ];
                        }
                      }),
                      _: 3
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_col, {
                        md: "5",
                        cols: "12"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_hidden, { point: "smDown" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "greeting" }, [
                                createVNode("div", { class: "logo" }, [
                                  createVNode("img", {
                                    src: _imports_0,
                                    alt: "logo"
                                  }),
                                  createVNode("p", { class: "use-text-subtitle2" }, toDisplayString($data.brand.movie.projectName), 1)
                                ]),
                                createVNode("h4", { class: "use-text-subtitle pb-2" }, toDisplayString($props.title), 1),
                                createVNode("h6", { class: "use-text-paragraph" }, toDisplayString($props.subtitle), 1)
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        md: "7",
                        cols: "12"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "form-wrap" }, [
                            renderSlot(_ctx.$slots, "default", {}, void 0, true)
                          ])
                        ]),
                        _: 3
                      })
                    ];
                  }
                }),
                _: 3
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode(_component_v_btn, {
                  to: $setup.localePath($data.routerLink.movie.home),
                  variant: "text",
                  icon: "",
                  class: "backtohome"
                }, {
                  default: withCtx(() => [
                    createVNode("i", { class: "ion-ios-home-outline" }),
                    createVNode("i", { class: "ion-ios-arrow-round-back-outline" })
                  ]),
                  _: 1
                }, 8, ["to"]),
                createVNode("div", { class: "auth-frame" }, [
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        md: "5",
                        cols: "12"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_hidden, { point: "smDown" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "greeting" }, [
                                createVNode("div", { class: "logo" }, [
                                  createVNode("img", {
                                    src: _imports_0,
                                    alt: "logo"
                                  }),
                                  createVNode("p", { class: "use-text-subtitle2" }, toDisplayString($data.brand.movie.projectName), 1)
                                ]),
                                createVNode("h4", { class: "use-text-subtitle pb-2" }, toDisplayString($props.title), 1),
                                createVNode("h6", { class: "use-text-paragraph" }, toDisplayString($props.subtitle), 1)
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        md: "7",
                        cols: "12"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "form-wrap" }, [
                            renderSlot(_ctx.$slots, "default", {}, void 0, true)
                          ])
                        ]),
                        _: 3
                      })
                    ]),
                    _: 3
                  })
                ])
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode("div", { class: "decoration" }, [
            (openBlock(), createBlock("svg", {
              class: "left-deco",
              width: "1045px",
              height: "1468px",
              viewBox: "0 0 1045 1468",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "xmlns:xlink": "http://www.w3.org/1999/xlink"
            }, [
              createVNode("g", { transform: "translate(-1030.000000, 0.000000)" }, [
                createVNode("g", { transform: "translate(950.000000, 0.000000)" }, [
                  createVNode("path", { d: "M0,0 L805.395445,0 C731.131815,0 740.666667,76.9414646 834,230.824394 C915.57424,365.319569 1045,513.536468 1045,652.024982 C1045,806.30828 951.877684,902.632061 904.5,1091.56209 C874.07902,1212.87314 909.795583,1338.35244 1011.64969,1468 L0,1468 L0,0 Z" })
                ])
              ])
            ])),
            (openBlock(), createBlock("svg", {
              class: "right-deco",
              width: "389px",
              height: "1468px",
              viewBox: "0 0 389 1468",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "xmlns:xlink": "http://www.w3.org/1999/xlink"
            }, [
              createVNode("g", { transform: "translate(-2171.000000, 0.000000)" }, [
                createVNode("g", { transform: "translate(-950.000000, 0.000000)" }, [
                  createVNode("g", { transform: "translate(950.000000, 0.000000)" }, [
                    createVNode("path", {
                      d: "M2329.58044,-732.909805 L3294.66463,-608.836163 C3018.10652,-208.944402 2934.07929,71.8618948 3042.58292,233.582726 C3136.98689,374.288498 3255.13325,471.945016 3255.13325,636.668858 C3255.13325,820.179655 3107.51302,903.798038 3059.64228,1128.51906 C3028.9047,1272.81133 3063.63816,1429.66837 3163.84265,1599.0902 L2141.66463,1599.0902 L2329.58044,-732.909805 Z",
                      transform: "translate(2718.164626, 433.090195) rotate(179.000000) translate(-2718.164626, -433.090195) "
                    })
                  ])
                ])
              ])
            ]))
          ]),
          createVNode(_component_v_card, { class: "form-box fragment-fadeUp" }, {
            default: withCtx(() => [
              createVNode(_component_v_btn, {
                to: $setup.localePath($data.routerLink.movie.home),
                variant: "text",
                icon: "",
                class: "backtohome"
              }, {
                default: withCtx(() => [
                  createVNode("i", { class: "ion-ios-home-outline" }),
                  createVNode("i", { class: "ion-ios-arrow-round-back-outline" })
                ]),
                _: 1
              }, 8, ["to"]),
              createVNode("div", { class: "auth-frame" }, [
                createVNode(_component_v_row, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_col, {
                      md: "5",
                      cols: "12"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_hidden, { point: "smDown" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "greeting" }, [
                              createVNode("div", { class: "logo" }, [
                                createVNode("img", {
                                  src: _imports_0,
                                  alt: "logo"
                                }),
                                createVNode("p", { class: "use-text-subtitle2" }, toDisplayString($data.brand.movie.projectName), 1)
                              ]),
                              createVNode("h4", { class: "use-text-subtitle pb-2" }, toDisplayString($props.title), 1),
                              createVNode("h6", { class: "use-text-paragraph" }, toDisplayString($props.subtitle), 1)
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      md: "7",
                      cols: "12"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "form-wrap" }, [
                          renderSlot(_ctx.$slots, "default", {}, void 0, true)
                        ])
                      ]),
                      _: 3
                    })
                  ]),
                  _: 3
                })
              ])
            ]),
            _: 3
          })
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Forms/AuthFrame.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AuthFrame = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-36453717"]]);
export {
  AuthFrame as A,
  SocialAuth as S,
  TitleSecondary as T
};
//# sourceMappingURL=AuthFrame-BxUWe5ll.js.map
