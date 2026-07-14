import { H as resolveDirective, L as openBlock, T as guardReactiveProps, X as withCtx, Z as withDirectives, _ as createBlock, _t as normalizeProps, b as createTextVNode, g as createBaseVNode, ht as unref, y as createElementBlock } from "./modules/shiki-V2eyNvW-.js";
import { n as useSlideContext, t as frontmatterToProps } from "./slidev/context-00fxQF-V.js";
import { t as image_default } from "./slidev/image-B9oPh5Xi.js";
//#region slides.md__slidev_12.md
var _hoisted_1 = { class: "absolute bottom-[30px] left-[100px]" };
var _sfc_main = {
	__name: "slides.md__slidev_12",
	setup(__props) {
		const { $slidev, $nav, $clicksContext, $clicks, $page, $renderContext, $frontmatter } = useSlideContext();
		$clicksContext.setup();
		return (_ctx, _cache) => {
			const _directive_click = resolveDirective("click");
			return openBlock(), createBlock(image_default, normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 11))), {
				default: withCtx(() => [withDirectives((openBlock(), createElementBlock("div", _hoisted_1, [..._cache[0] || (_cache[0] = [createBaseVNode("div", { class: "text-6xl font-bold font-sans" }, "3.16", -1), createBaseVNode("div", null, [
					createTextVNode("Augusto Alves da Silva, 3.16, 2003."),
					createBaseVNode("br"),
					createTextVNode("Coleção Norlinda e José Lima.")
				], -1)])])), [[_directive_click]])]),
				_: 1
			}, 16);
		};
	}
};
//#endregion
export { _sfc_main as default };
