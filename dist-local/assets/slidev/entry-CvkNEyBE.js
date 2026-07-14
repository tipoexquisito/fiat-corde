import { L as openBlock, V as resolveComponent, X as withCtx, b as createTextVNode, g as createBaseVNode, x as createVNode, y as createElementBlock } from "../modules/shiki-V2eyNvW-.js";
import { t as _plugin_vue_export_helper_default } from "../_plugin-vue_export-helper-BOaGB7Aw.js";
//#region node_modules/@slidev/client/pages/entry.vue
var _sfc_main = {};
var _hoisted_1 = { class: "h-full w-full flex items-center justify-center gap-5 lt-md:flex-col" };
function _sfc_render(_ctx, _cache) {
	const _component_RouterLink = resolveComponent("RouterLink");
	return openBlock(), createElementBlock("div", _hoisted_1, [
		createVNode(_component_RouterLink, {
			to: "/",
			class: "page-link"
		}, {
			default: withCtx(() => [..._cache[0] || (_cache[0] = [createBaseVNode("div", { class: "i-carbon:presentation-file" }, null, -1), createTextVNode(" Slides ", -1)])]),
			_: 1
		}),
		createVNode(_component_RouterLink, {
			to: "/presenter",
			class: "page-link"
		}, {
			default: withCtx(() => [..._cache[1] || (_cache[1] = [createBaseVNode("div", { class: "i-carbon:user-speaker" }, null, -1), createTextVNode(" Presenter ", -1)])]),
			_: 1
		}),
		createVNode(_component_RouterLink, {
			to: "/notes",
			class: "page-link"
		}, {
			default: withCtx(() => [..._cache[2] || (_cache[2] = [createBaseVNode("div", { class: "i-carbon:catalog" }, null, -1), createTextVNode(" Notes ", -1)])]),
			_: 1
		}),
		createVNode(_component_RouterLink, {
			to: "/overview",
			class: "page-link"
		}, {
			default: withCtx(() => [..._cache[3] || (_cache[3] = [createBaseVNode("div", { class: "i-carbon:list-boxes" }, null, -1), createTextVNode(" Overview ", -1)])]),
			_: 1
		})
	]);
}
var entry_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d5062f01"]]);
//#endregion
export { entry_default as default };
