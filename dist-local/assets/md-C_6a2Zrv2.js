import { H as resolveDirective, L as openBlock, T as guardReactiveProps, X as withCtx, Z as withDirectives, _ as createBlock, _t as normalizeProps, b as createTextVNode, g as createBaseVNode, ht as unref, y as createElementBlock } from "./modules/shiki-V2eyNvW-.js";
import { n as useSlideContext, t as frontmatterToProps } from "./slidev/context-00fxQF-V.js";
import { t as image_default } from "./slidev/image-B9oPh5Xi.js";
//#region slides.md__slidev_4.md
var _hoisted_1 = { class: "absolute inset-0 flex flex-col items-center justify-center gap-4" };
var _hoisted_2 = { class: "font-serif text-3xl opacity-80" };
var _sfc_main = {
	__name: "slides.md__slidev_4",
	setup(__props) {
		const { $slidev, $nav, $clicksContext, $clicks, $page, $renderContext, $frontmatter } = useSlideContext();
		$clicksContext.setup();
		return (_ctx, _cache) => {
			const _directive_click = resolveDirective("click");
			return openBlock(), createBlock(image_default, normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 3))), {
				default: withCtx(() => [_cache[2] || (_cache[2] = createBaseVNode("div", { class: "absolute inset-0 bg-black/60" }, null, -1)), createBaseVNode("div", _hoisted_1, [_cache[1] || (_cache[1] = createBaseVNode("div", { class: "font-serif text-5xl" }, "Arrifana, 17 de abril de 1809", -1)), withDirectives((openBlock(), createElementBlock("div", _hoisted_2, [..._cache[0] || (_cache[0] = [createTextVNode("Só não teve pintor", -1)])])), [[_directive_click]])])]),
				_: 1
			}, 16);
		};
	}
};
//#endregion
export { _sfc_main as default };
