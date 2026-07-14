import { H as resolveDirective, L as openBlock, T as guardReactiveProps, X as withCtx, Z as withDirectives, _ as createBlock, _t as normalizeProps, g as createBaseVNode, ht as unref, y as createElementBlock } from "./modules/shiki-V2eyNvW-.js";
import { n as useSlideContext, t as frontmatterToProps } from "./slidev/context-00fxQF-V.js";
import { t as image_default } from "./slidev/image-B9oPh5Xi.js";
import "./history-rhyme-DTq_CPgD.js";
//#region slides.md__slidev_30.md
var _hoisted_1 = { class: "absolute inset-0 flex items-center justify-center bg-black/75" };
var _sfc_main = {
	__name: "slides.md__slidev_30",
	setup(__props) {
		const { $slidev, $nav, $clicksContext, $clicks, $page, $renderContext, $frontmatter } = useSlideContext();
		$clicksContext.setup();
		return (_ctx, _cache) => {
			const _directive_click = resolveDirective("click");
			return openBlock(), createBlock(image_default, normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 29))), {
				default: withCtx(() => [withDirectives((openBlock(), createElementBlock("div", _hoisted_1, [..._cache[0] || (_cache[0] = [createBaseVNode("img", {
					src: "/assets/history-rhyme-CsyDI1RQ.jpeg",
					class: "max-h-80 object-contain"
				}, null, -1)])])), [[_directive_click]])]),
				_: 1
			}, 16);
		};
	}
};
//#endregion
export { _sfc_main as default };
