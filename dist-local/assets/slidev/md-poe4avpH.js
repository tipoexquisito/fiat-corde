import { B as renderSlot, C as defineComponent, H as resolveDirective, L as openBlock, T as guardReactiveProps, X as withCtx, Z as withDirectives, _ as createBlock, _t as normalizeProps, b as createTextVNode, g as createBaseVNode, gt as normalizeClass, h as computed, ht as unref, vt as normalizeStyle, y as createElementBlock } from "../modules/shiki-V2eyNvW-.js";
import { n as useSlideContext, t as frontmatterToProps } from "./context-00fxQF-V.js";
import { t as handleBackground } from "./layoutHelper-CeZWnDRU.js";
//#region node_modules/@slidev/client/layouts/image-right.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { class: "grid grid-cols-2 w-full h-full auto-rows-fr" };
//#endregion
//#region node_modules/@slidev/client/layouts/image-right.vue
var image_right_default = /* @__PURE__ */ defineComponent({
	__name: "image-right",
	props: {
		image: { type: String },
		class: { type: String },
		backgroundSize: {
			type: String,
			default: "cover"
		}
	},
	setup(__props) {
		const props = __props;
		const style = computed(() => handleBackground(props.image, false, props.backgroundSize));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$1, [createBaseVNode("div", { class: normalizeClass(["slidev-layout default", props.class]) }, [renderSlot(_ctx.$slots, "default")], 2), createBaseVNode("div", {
				class: "w-full h-full",
				style: normalizeStyle(style.value)
			}, null, 4)]);
		};
	}
});
//#endregion
//#region slides.md__slidev_11.md
var _hoisted_1 = { class: "mt-8 flex flex-col gap-3 text-3xl font-serif" };
var _sfc_main = {
	__name: "slides.md__slidev_11",
	setup(__props) {
		const { $slidev, $nav, $clicksContext, $clicks, $page, $renderContext, $frontmatter } = useSlideContext();
		$clicksContext.setup();
		return (_ctx, _cache) => {
			const _directive_click = resolveDirective("click");
			return openBlock(), createBlock(image_right_default, normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 10))), {
				default: withCtx(() => [createBaseVNode("div", _hoisted_1, [
					withDirectives((openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [createTextVNode("Alto-mar", -1)])])), [[_directive_click]]),
					withDirectives((openBlock(), createElementBlock("div", null, [..._cache[1] || (_cache[1] = [createTextVNode("À deriva", -1)])])), [[_directive_click]]),
					withDirectives((openBlock(), createElementBlock("div", null, [..._cache[2] || (_cache[2] = [createTextVNode("Vazio", -1)])])), [[_directive_click]]),
					withDirectives((openBlock(), createElementBlock("div", null, [..._cache[3] || (_cache[3] = [createTextVNode("No espaço", -1)])])), [[_directive_click]]),
					withDirectives((openBlock(), createElementBlock("div", null, [..._cache[4] || (_cache[4] = [createTextVNode("Piratas", -1)])])), [[_directive_click]]),
					withDirectives((openBlock(), createElementBlock("div", null, [..._cache[5] || (_cache[5] = [createTextVNode("Naufrágio", -1)])])), [[_directive_click]])
				])]),
				_: 1
			}, 16);
		};
	}
};
//#endregion
export { _sfc_main as default };
