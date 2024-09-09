import { useSSRContext } from 'file:///Users/chrisdavid/Desktop/chelseyCreativeWebsite/node_modules/vue/index.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  data() {
    return {
      snackbar: true
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Notification/Notification.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Notification = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2a584444"]]);

export { Notification as N };
//# sourceMappingURL=Notification-CCloQiT-.mjs.map
