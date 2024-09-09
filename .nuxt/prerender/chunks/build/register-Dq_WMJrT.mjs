import { _ as _export_sfc, d as defineNuxtComponent, b as brand, u as useLocalePath, l as link } from './server.mjs';
import { S as SocialAuth, T as TitleSecondary, A as AuthFrame } from './AuthFrame-BxUWe5ll.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode } from 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/h3/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/devalue/index.js';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/ufo/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/destr/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/hookable/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/klona/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/scule/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/defu/dist/defu.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/ohash/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/pathe/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/unhead/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/unctx/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/@intlify/core-base/dist/core-base.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/@intlify/vue-devtools/dist/vue-devtools.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/is-https/dist/index.mjs';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/vue-easy-lightbox/dist/vue-easy-lightbox.esm.min.js';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/vue3-mq/dist/vue3-mq.js';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/vue-kinesis/dist/vue-kinesis.ssr.js';
import 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/vue3-smooth-scroll/dist/vue-smooth-scroll.min.js';

const _sfc_main$1 = {
  setup() {
    const localePath = useLocalePath();
    return {
      localePath
    };
  },
  components: {
    SocialAuth,
    TitleSecondary,
    AuthFrame
  },
  data() {
    return {
      routerLink: link,
      valid: true,
      email: "",
      name: "",
      hideDetail: true,
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      password: "",
      confirmPassword: "",
      requiredRules: [(v) => !!v || "This field is required"],
      passwordRules: [
        (v) => !!v || "This field is required",
        (v) => v === this.password || "Passwords do not match"
      ],
      checkbox: false
    };
  },
  computed: {
    isMobile() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    }
  },
  methods: {
    async handleSubmit() {
      const { valid } = await this.$refs.form.validate();
      if (valid) {
        console.log("data submited");
        this.hideDetail = true;
      } else {
        this.hideDetail = false;
      }
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AuthFrame = resolveComponent("AuthFrame");
  const _component_title_secondary = resolveComponent("title-secondary");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_icon = resolveComponent("v-icon");
  const _component_social_auth = resolveComponent("social-auth");
  const _component_v_form = resolveComponent("v-form");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_v_text_field = resolveComponent("v-text-field");
  const _component_v_checkbox = resolveComponent("v-checkbox");
  _push(ssrRenderComponent(_component_AuthFrame, mergeProps({
    title: _ctx.$t("common.register_title"),
    subtitle: _ctx.$t("common.register_subtitle")
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div data-v-91a2d136${_scopeId}><div class="head" data-v-91a2d136${_scopeId}>`);
        _push2(ssrRenderComponent(_component_title_secondary, {
          align: $options.isMobile ? "center" : "left"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(_ctx.$t("common.register"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("common.register")), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_btn, {
          to: $setup.localePath($data.routerLink.movie.login),
          class: "button-link",
          variant: "text",
          size: "small"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_icon, { class: "icon sign-arrow" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` mdi-arrow-right `);
                  } else {
                    return [
                      createTextVNode(" mdi-arrow-right ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(` ${ssrInterpolate(_ctx.$t("common.register_already"))}`);
            } else {
              return [
                createVNode(_component_v_icon, { class: "icon sign-arrow" }, {
                  default: withCtx(() => [
                    createTextVNode(" mdi-arrow-right ")
                  ]),
                  _: 1
                }),
                createTextVNode(" " + toDisplayString(_ctx.$t("common.register_already")), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
        _push2(ssrRenderComponent(_component_social_auth, null, null, _parent2, _scopeId));
        _push2(`<div class="separator" data-v-91a2d136${_scopeId}><p data-v-91a2d136${_scopeId}>${ssrInterpolate(_ctx.$t("common.register_or"))}</p></div>`);
        _push2(ssrRenderComponent(_component_v_form, {
          ref: "form",
          modelValue: $data.valid,
          "onUpdate:modelValue": ($event) => $data.valid = $event
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_row, { class: "spacing3" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      sm: "12",
                      class: "px-3"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_text_field, {
                            modelValue: $data.name,
                            "onUpdate:modelValue": ($event) => $data.name = $event,
                            label: _ctx.$t("common.register_name"),
                            rules: $data.requiredRules,
                            color: "secondary",
                            class: "input",
                            name: "name",
                            filled: "",
                            required: ""
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_text_field, {
                              modelValue: $data.name,
                              "onUpdate:modelValue": ($event) => $data.name = $event,
                              label: _ctx.$t("common.register_name"),
                              rules: $data.requiredRules,
                              color: "secondary",
                              class: "input",
                              name: "name",
                              filled: "",
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      sm: "12",
                      class: "px-3"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_text_field, {
                            modelValue: $data.email,
                            "onUpdate:modelValue": ($event) => $data.email = $event,
                            label: _ctx.$t("common.register_email"),
                            rules: $data.emailRules,
                            color: "secondary",
                            class: "input",
                            name: "email",
                            filled: "",
                            required: ""
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_text_field, {
                              modelValue: $data.email,
                              "onUpdate:modelValue": ($event) => $data.email = $event,
                              label: _ctx.$t("common.register_email"),
                              rules: $data.emailRules,
                              color: "secondary",
                              class: "input",
                              name: "email",
                              filled: "",
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      md: "6",
                      class: "px-3"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_text_field, {
                            modelValue: $data.password,
                            "onUpdate:modelValue": ($event) => $data.password = $event,
                            label: _ctx.$t("common.register_password"),
                            rules: $data.requiredRules,
                            color: "secondary",
                            type: "password",
                            class: "input",
                            name: "email",
                            filled: "",
                            required: ""
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_text_field, {
                              modelValue: $data.password,
                              "onUpdate:modelValue": ($event) => $data.password = $event,
                              label: _ctx.$t("common.register_password"),
                              rules: $data.requiredRules,
                              color: "secondary",
                              type: "password",
                              class: "input",
                              name: "email",
                              filled: "",
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      md: "6",
                      class: "px-3"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_text_field, {
                            modelValue: $data.confirmPassword,
                            "onUpdate:modelValue": ($event) => $data.confirmPassword = $event,
                            label: _ctx.$t("common.register_confirm"),
                            rules: $data.passwordRules,
                            color: "secondary",
                            type: "password",
                            class: "input",
                            name: "confirm",
                            filled: "",
                            required: ""
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_text_field, {
                              modelValue: $data.confirmPassword,
                              "onUpdate:modelValue": ($event) => $data.confirmPassword = $event,
                              label: _ctx.$t("common.register_confirm"),
                              rules: $data.passwordRules,
                              color: "secondary",
                              type: "password",
                              class: "input",
                              name: "confirm",
                              filled: "",
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "12",
                        class: "px-3"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_text_field, {
                            modelValue: $data.name,
                            "onUpdate:modelValue": ($event) => $data.name = $event,
                            label: _ctx.$t("common.register_name"),
                            rules: $data.requiredRules,
                            color: "secondary",
                            class: "input",
                            name: "name",
                            filled: "",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "12",
                        class: "px-3"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_text_field, {
                            modelValue: $data.email,
                            "onUpdate:modelValue": ($event) => $data.email = $event,
                            label: _ctx.$t("common.register_email"),
                            rules: $data.emailRules,
                            color: "secondary",
                            class: "input",
                            name: "email",
                            filled: "",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "6",
                        class: "px-3"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_text_field, {
                            modelValue: $data.password,
                            "onUpdate:modelValue": ($event) => $data.password = $event,
                            label: _ctx.$t("common.register_password"),
                            rules: $data.requiredRules,
                            color: "secondary",
                            type: "password",
                            class: "input",
                            name: "email",
                            filled: "",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "6",
                        class: "px-3"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_text_field, {
                            modelValue: $data.confirmPassword,
                            "onUpdate:modelValue": ($event) => $data.confirmPassword = $event,
                            label: _ctx.$t("common.register_confirm"),
                            rules: $data.passwordRules,
                            color: "secondary",
                            type: "password",
                            class: "input",
                            name: "confirm",
                            filled: "",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div class="btn-area" data-v-91a2d136${_scopeId2}><div class="form-helper" data-v-91a2d136${_scopeId2}><div class="form-control-label" data-v-91a2d136${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_checkbox, {
                modelValue: $data.checkbox,
                "onUpdate:modelValue": ($event) => $data.checkbox = $event,
                label: _ctx.$t("common.form_terms"),
                rules: $data.requiredRules,
                "hide-details": $data.hideDetail,
                color: "secondary",
                required: ""
              }, null, _parent3, _scopeId2));
              _push3(`<span data-v-91a2d136${_scopeId2}><a href="#" class="link" data-v-91a2d136${_scopeId2}>${ssrInterpolate(_ctx.$t("common.form_privacy"))}</a></span></div></div>`);
              _push3(ssrRenderComponent(_component_v_btn, {
                size: "large",
                color: "secondary",
                onClick: $options.handleSubmit
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`${ssrInterpolate(_ctx.$t("common.continue"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("common.continue")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode(_component_v_row, { class: "spacing3" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_col, {
                      cols: "12",
                      sm: "12",
                      class: "px-3"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_text_field, {
                          modelValue: $data.name,
                          "onUpdate:modelValue": ($event) => $data.name = $event,
                          label: _ctx.$t("common.register_name"),
                          rules: $data.requiredRules,
                          color: "secondary",
                          class: "input",
                          name: "name",
                          filled: "",
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      sm: "12",
                      class: "px-3"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_text_field, {
                          modelValue: $data.email,
                          "onUpdate:modelValue": ($event) => $data.email = $event,
                          label: _ctx.$t("common.register_email"),
                          rules: $data.emailRules,
                          color: "secondary",
                          class: "input",
                          name: "email",
                          filled: "",
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      md: "6",
                      class: "px-3"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_text_field, {
                          modelValue: $data.password,
                          "onUpdate:modelValue": ($event) => $data.password = $event,
                          label: _ctx.$t("common.register_password"),
                          rules: $data.requiredRules,
                          color: "secondary",
                          type: "password",
                          class: "input",
                          name: "email",
                          filled: "",
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      md: "6",
                      class: "px-3"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_text_field, {
                          modelValue: $data.confirmPassword,
                          "onUpdate:modelValue": ($event) => $data.confirmPassword = $event,
                          label: _ctx.$t("common.register_confirm"),
                          rules: $data.passwordRules,
                          color: "secondary",
                          type: "password",
                          class: "input",
                          name: "confirm",
                          filled: "",
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "btn-area" }, [
                  createVNode("div", { class: "form-helper" }, [
                    createVNode("div", { class: "form-control-label" }, [
                      createVNode(_component_v_checkbox, {
                        modelValue: $data.checkbox,
                        "onUpdate:modelValue": ($event) => $data.checkbox = $event,
                        label: _ctx.$t("common.form_terms"),
                        rules: $data.requiredRules,
                        "hide-details": $data.hideDetail,
                        color: "secondary",
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules", "hide-details"]),
                      createVNode("span", null, [
                        createVNode("a", {
                          href: "#",
                          class: "link"
                        }, toDisplayString(_ctx.$t("common.form_privacy")), 1)
                      ])
                    ])
                  ]),
                  createVNode(_component_v_btn, {
                    size: "large",
                    color: "secondary",
                    onClick: $options.handleSubmit
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("common.continue")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("div", { class: "head" }, [
              createVNode(_component_title_secondary, {
                align: $options.isMobile ? "center" : "left"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("common.register")), 1)
                ]),
                _: 1
              }, 8, ["align"]),
              createVNode(_component_v_btn, {
                to: $setup.localePath($data.routerLink.movie.login),
                class: "button-link",
                variant: "text",
                size: "small"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_icon, { class: "icon sign-arrow" }, {
                    default: withCtx(() => [
                      createTextVNode(" mdi-arrow-right ")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" " + toDisplayString(_ctx.$t("common.register_already")), 1)
                ]),
                _: 1
              }, 8, ["to"])
            ]),
            createVNode(_component_social_auth),
            createVNode("div", { class: "separator" }, [
              createVNode("p", null, toDisplayString(_ctx.$t("common.register_or")), 1)
            ]),
            createVNode(_component_v_form, {
              ref: "form",
              modelValue: $data.valid,
              "onUpdate:modelValue": ($event) => $data.valid = $event
            }, {
              default: withCtx(() => [
                createVNode(_component_v_row, { class: "spacing3" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_col, {
                      cols: "12",
                      sm: "12",
                      class: "px-3"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_text_field, {
                          modelValue: $data.name,
                          "onUpdate:modelValue": ($event) => $data.name = $event,
                          label: _ctx.$t("common.register_name"),
                          rules: $data.requiredRules,
                          color: "secondary",
                          class: "input",
                          name: "name",
                          filled: "",
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      sm: "12",
                      class: "px-3"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_text_field, {
                          modelValue: $data.email,
                          "onUpdate:modelValue": ($event) => $data.email = $event,
                          label: _ctx.$t("common.register_email"),
                          rules: $data.emailRules,
                          color: "secondary",
                          class: "input",
                          name: "email",
                          filled: "",
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      md: "6",
                      class: "px-3"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_text_field, {
                          modelValue: $data.password,
                          "onUpdate:modelValue": ($event) => $data.password = $event,
                          label: _ctx.$t("common.register_password"),
                          rules: $data.requiredRules,
                          color: "secondary",
                          type: "password",
                          class: "input",
                          name: "email",
                          filled: "",
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      md: "6",
                      class: "px-3"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_text_field, {
                          modelValue: $data.confirmPassword,
                          "onUpdate:modelValue": ($event) => $data.confirmPassword = $event,
                          label: _ctx.$t("common.register_confirm"),
                          rules: $data.passwordRules,
                          color: "secondary",
                          type: "password",
                          class: "input",
                          name: "confirm",
                          filled: "",
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "btn-area" }, [
                  createVNode("div", { class: "form-helper" }, [
                    createVNode("div", { class: "form-control-label" }, [
                      createVNode(_component_v_checkbox, {
                        modelValue: $data.checkbox,
                        "onUpdate:modelValue": ($event) => $data.checkbox = $event,
                        label: _ctx.$t("common.form_terms"),
                        rules: $data.requiredRules,
                        "hide-details": $data.hideDetail,
                        color: "secondary",
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules", "hide-details"]),
                      createVNode("span", null, [
                        createVNode("a", {
                          href: "#",
                          class: "link"
                        }, toDisplayString(_ctx.$t("common.form_privacy")), 1)
                      ])
                    ])
                  ]),
                  createVNode(_component_v_btn, {
                    size: "large",
                    color: "secondary",
                    onClick: $options.handleSubmit
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("common.continue")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ]),
              _: 1
            }, 8, ["modelValue", "onUpdate:modelValue"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Forms/Register.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const RegisterForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-91a2d136"]]);
const _sfc_main = defineNuxtComponent({
  components: {
    RegisterForm
  },
  head() {
    return {
      title: brand.movie.name + " - Register"
    };
  }
}, "$WyhG0HFseq");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_register_form = resolveComponent("register-form");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_register_form, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const register = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { register as default };
//# sourceMappingURL=register-Dq_WMJrT.mjs.map
