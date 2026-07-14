import { H as resolveDirective, L as openBlock, T as guardReactiveProps, X as withCtx, Z as withDirectives, _ as createBlock, _t as normalizeProps, b as createTextVNode, g as createBaseVNode, ht as unref, y as createElementBlock } from "./modules/shiki-V2eyNvW-.js";
import { n as useSlideContext, t as frontmatterToProps } from "./slidev/context-00fxQF-V.js";
import { t as center_default } from "./slidev/center-CFttN9qR.js";
//#region slides.md__slidev_33.md
var _hoisted_1 = { class: "absolute inset-0 flex flex-col items-center justify-center gap-4" };
var _hoisted_2 = { class: "font-serif text-3xl" };
var _hoisted_3 = { class: "font-serif text-3xl text-red-700" };
var _sfc_main = {
	__name: "slides.md__slidev_33",
	setup(__props) {
		const { $slidev, $nav, $clicksContext, $clicks, $page, $renderContext, $frontmatter } = useSlideContext();
		$clicksContext.setup();
		return (_ctx, _cache) => {
			const _directive_click = resolveDirective("click");
			return openBlock(), createBlock(center_default, normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 32))), {
				default: withCtx(() => [createBaseVNode("div", _hoisted_1, [
					_cache[2] || (_cache[2] = createBaseVNode("div", { class: "font-serif text-3xl" }, "Quem decide?", -1)),
					withDirectives((openBlock(), createElementBlock("div", _hoisted_2, [..._cache[0] || (_cache[0] = [createTextVNode("Quem paga?", -1)])])), [[_directive_click]]),
					withDirectives((openBlock(), createElementBlock("div", _hoisted_3, [..._cache[1] || (_cache[1] = [createTextVNode("Quem fica fora do frame?", -1)])])), [[_directive_click]])
				])]),
				_: 1
			}, 16);
		};
	}
};
//#endregion
export { _sfc_main as default };
