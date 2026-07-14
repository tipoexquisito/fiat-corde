import { H as resolveDirective, L as openBlock, T as guardReactiveProps, X as withCtx, Z as withDirectives, _ as createBlock, _t as normalizeProps, b as createTextVNode, g as createBaseVNode, ht as unref, y as createElementBlock } from "./modules/shiki-V2eyNvW-.js";
import { n as useSlideContext, t as frontmatterToProps } from "./slidev/context-00fxQF-V.js";
import { t as image_default } from "./slidev/image-B9oPh5Xi.js";
//#endregion
//#region slides.md__slidev_14.md
var _hoisted_1 = { class: "absolute inset-0 flex flex-col items-center justify-center text-center gap-4" };
var _hoisted_2 = { class: "text-6xl font-bold font-sans" };
var _hoisted_3 = { class: "text-3xl" };
var _hoisted_4 = { class: "text-3xl" };
var _hoisted_5 = { class: "absolute inset-0 flex items-center justify-center" };
var _sfc_main = {
	__name: "slides.md__slidev_14",
	setup(__props) {
		const { $slidev, $nav, $clicksContext, $clicks, $page, $renderContext, $frontmatter } = useSlideContext();
		$clicksContext.setup();
		return (_ctx, _cache) => {
			const _directive_click = resolveDirective("click");
			return openBlock(), createBlock(image_default, normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 13))), {
				default: withCtx(() => [createBaseVNode("div", _hoisted_1, [
					withDirectives((openBlock(), createElementBlock("div", _hoisted_2, [..._cache[0] || (_cache[0] = [createTextVNode("3.16", -1)])])), [[_directive_click]]),
					withDirectives((openBlock(), createElementBlock("div", _hoisted_3, [..._cache[1] || (_cache[1] = [createTextVNode("16 de março de 2003", -1)])])), [[_directive_click]]),
					withDirectives((openBlock(), createElementBlock("div", _hoisted_4, [..._cache[2] || (_cache[2] = [createTextVNode("Cimeira das Lajes", -1)])])), [[_directive_click]])
				]), withDirectives((openBlock(), createElementBlock("div", _hoisted_5, [..._cache[3] || (_cache[3] = [createBaseVNode("img", {
					src: "/assets/cimeira-lajes-Bc7PhPXk.jpg",
					class: "max-h-80 object-contain"
				}, null, -1)])])), [[_directive_click]])]),
				_: 1
			}, 16);
		};
	}
};
//#endregion
export { _sfc_main as default };
