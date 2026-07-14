import { C as defineComponent, L as openBlock, V as resolveComponent, X as withCtx, _ as createBlock, b as createTextVNode, g as createBaseVNode, h as computed, ht as unref, v as createCommentVNode, y as createElementBlock, yt as toDisplayString } from "../modules/shiki-V2eyNvW-.js";
import { B as useRouter } from "../modules/vue-j1EMyUNA.js";
import { t as useNav } from "../useNav-BevVU56q.js";
import { t as _plugin_vue_export_helper_default } from "../_plugin-vue_export-helper-BOaGB7Aw.js";
//#region node_modules/@slidev/client/pages/404.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "grid justify-center text-center pt-15% gap-5" };
var _hoisted_2 = { class: "text-2xl" };
var _hoisted_3 = { class: "op-60" };
var _hoisted_4 = { class: "mt-3 flex flex-col gap-2 max-w-xs mx-auto w-full" };
//#endregion
//#region node_modules/@slidev/client/pages/404.vue
var _404_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "404",
	setup(__props) {
		const RE_DIGITS = /\d+/;
		const { currentRoute } = useRouter();
		const { total } = useNav();
		const guessedSlide = computed(() => {
			const match = currentRoute.value.path.match(RE_DIGITS);
			if (match) {
				const slideNo = +match[0];
				if (slideNo > 0 && slideNo <= total.value) return slideNo;
			}
			return null;
		});
		return (_ctx, _cache) => {
			const _component_RouterLink = resolveComponent("RouterLink");
			return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", null, [_cache[2] || (_cache[2] = createBaseVNode("h1", { class: "text-9xl font-light" }, " 404 ", -1)), createBaseVNode("p", _hoisted_2, [
				_cache[0] || (_cache[0] = createTextVNode(" Page ", -1)),
				createBaseVNode("code", _hoisted_3, toDisplayString(unref(currentRoute).path), 1),
				_cache[1] || (_cache[1] = createTextVNode(" not found ", -1))
			])]), createBaseVNode("div", _hoisted_4, [guessedSlide.value !== 1 ? (openBlock(), createBlock(_component_RouterLink, {
				key: 0,
				to: "/",
				class: "page-link"
			}, {
				default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode(" Go Home ", -1)])]),
				_: 1
			})) : createCommentVNode("v-if", true), guessedSlide.value ? (openBlock(), createBlock(_component_RouterLink, {
				key: 1,
				to: `/${guessedSlide.value}`,
				class: "page-link"
			}, {
				default: withCtx(() => [createTextVNode(" Go to Slide " + toDisplayString(guessedSlide.value), 1)]),
				_: 1
			}, 8, ["to"])) : createCommentVNode("v-if", true)])]);
		};
	}
}), [["__scopeId", "data-v-014f0510"]]);
//#endregion
export { _404_default as default };
