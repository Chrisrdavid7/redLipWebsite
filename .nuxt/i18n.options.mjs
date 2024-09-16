export const localeCodes = ["ar","de","id","pt","zh","en"]

export const localeMessages = {
  "ar": [{ key: "../lang/ar-AR.json", load: () => import("../lang/ar-AR.json" /* webpackChunkName: "lang_lang_lang_ar_AR_json" */) }],
  "de": [{ key: "../lang/de-DE.json", load: () => import("../lang/de-DE.json" /* webpackChunkName: "lang_lang_lang_de_DE_json" */) }],
  "id": [{ key: "../lang/id-ID.json", load: () => import("../lang/id-ID.json" /* webpackChunkName: "lang_lang_lang_id_ID_json" */) }],
  "pt": [{ key: "../lang/pt-PT.json", load: () => import("../lang/pt-PT.json" /* webpackChunkName: "lang_lang_lang_pt_PT_json" */) }],
  "zh": [{ key: "../lang/zh-ZH.json", load: () => import("../lang/zh-ZH.json" /* webpackChunkName: "lang_lang_lang_zh_ZH_json" */) }],
  "en": [{ key: "../lang/en-US.json", load: () => import("../lang/en-US.json" /* webpackChunkName: "lang_lang_lang_en_US_json" */) }],
}

export const resolveNuxtI18nOptions = async (context) => {
  const nuxtI18nOptions = Object({})
  nuxtI18nOptions.experimental = Object({"jsTsFormatResource":false})
  nuxtI18nOptions.bundle = Object({"compositionOnly":true,"runtimeOnly":false,"fullInstall":true,"dropMessageCompiler":false})
  nuxtI18nOptions.compilation = Object({"jit":true,"strictMessage":true,"escapeHtml":false})
  nuxtI18nOptions.customBlocks = Object({"defaultSFCLang":"json","globalSFCScope":false})
 const vueI18nConfigLoader = async (loader) => {
            const config = await loader().then(r => r.default || r)
            return typeof config === 'object'
              ? config
              : typeof config === 'function'
                ? await config()
                : {}
          }
  const vueI18n = await vueI18nConfigLoader((() => import("../config/i18n.js?hash=bc1a344f&config=1" /* webpackChunkName: "__config_i18n_js_bc1a344f" */)))
  nuxtI18nOptions.vueI18n = vueI18n
  nuxtI18nOptions.vueI18n.messages ??= {}
  nuxtI18nOptions.locales = [Object({"code":"ar","iso":"ar-AR","name":"Arabic","dir":"rtl","files":["lang/ar-AR.json"],"hashes":["37fc0908"],"types":["static"]}),Object({"code":"de","iso":"de-DE","name":"Deutch","dir":"ltr","files":["lang/de-DE.json"],"hashes":["78192edd"],"types":["static"]}),Object({"code":"id","iso":"id-ID","name":"Bahasa Indonesia","dir":"ltr","files":["lang/id-ID.json"],"hashes":["4fb676f1"],"types":["static"]}),Object({"code":"pt","iso":"pt-PT","name":"Portuguese","dir":"ltr","files":["lang/pt-PT.json"],"hashes":["41407a30"],"types":["static"]}),Object({"code":"zh","iso":"zh-ZH","name":"Chinese","dir":"ltr","files":["lang/zh-ZH.json"],"hashes":["11840fa1"],"types":["static"]}),Object({"code":"en","iso":"eng-US","name":"English","dir":"ltr","files":["lang/en-US.json"],"hashes":["0025fc0a"],"types":["static"]})]
  nuxtI18nOptions.defaultLocale = "en"
  nuxtI18nOptions.defaultDirection = "ltr"
  nuxtI18nOptions.routesNameSeparator = "___"
  nuxtI18nOptions.trailingSlash = false
  nuxtI18nOptions.defaultLocaleRouteNameSuffix = "default"
  nuxtI18nOptions.strategy = "no_prefix"
  nuxtI18nOptions.lazy = true
  nuxtI18nOptions.langDir = "lang"
  nuxtI18nOptions.rootRedirect = null
  nuxtI18nOptions.detectBrowserLanguage = Object({"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true})
  nuxtI18nOptions.differentDomains = false
  nuxtI18nOptions.baseUrl = ""
  nuxtI18nOptions.dynamicRouteParams = false
  nuxtI18nOptions.customRoutes = "page"
  nuxtI18nOptions.pages = Object({})
  nuxtI18nOptions.skipSettingLocaleOnNavigate = false
  nuxtI18nOptions.types = "composition"
  nuxtI18nOptions.debug = false
  nuxtI18nOptions.parallelPlugin = false
  nuxtI18nOptions.i18nModules = []
  return nuxtI18nOptions
}

export const nuxtI18nOptionsDefault = Object({experimental: Object({"jsTsFormatResource":false}),bundle: Object({"compositionOnly":true,"runtimeOnly":false,"fullInstall":true,"dropMessageCompiler":false}),compilation: Object({"jit":true,"strictMessage":true,"escapeHtml":false}),customBlocks: Object({"defaultSFCLang":"json","globalSFCScope":false}),vueI18n: "",locales: [],defaultLocale: "",defaultDirection: "ltr",routesNameSeparator: "___",trailingSlash: false,defaultLocaleRouteNameSuffix: "default",strategy: "prefix_except_default",lazy: false,langDir: null,rootRedirect: null,detectBrowserLanguage: Object({"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true}),differentDomains: false,baseUrl: "",dynamicRouteParams: false,customRoutes: "page",pages: Object({}),skipSettingLocaleOnNavigate: false,types: "composition",debug: false,parallelPlugin: false})

export const nuxtI18nInternalOptions = Object({__normalizedLocales: [Object({"code":"ar","iso":"ar-AR","name":"Arabic","dir":"rtl","files":["lang/ar-AR.json"],"hashes":["37fc0908"],"types":["static"]}),Object({"code":"de","iso":"de-DE","name":"Deutch","dir":"ltr","files":["lang/de-DE.json"],"hashes":["78192edd"],"types":["static"]}),Object({"code":"id","iso":"id-ID","name":"Bahasa Indonesia","dir":"ltr","files":["lang/id-ID.json"],"hashes":["4fb676f1"],"types":["static"]}),Object({"code":"pt","iso":"pt-PT","name":"Portuguese","dir":"ltr","files":["lang/pt-PT.json"],"hashes":["41407a30"],"types":["static"]}),Object({"code":"zh","iso":"zh-ZH","name":"Chinese","dir":"ltr","files":["lang/zh-ZH.json"],"hashes":["11840fa1"],"types":["static"]}),Object({"code":"en","iso":"eng-US","name":"English","dir":"ltr","files":["lang/en-US.json"],"hashes":["0025fc0a"],"types":["static"]})]})
export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const isSSG = false
export const parallelPlugin = false
