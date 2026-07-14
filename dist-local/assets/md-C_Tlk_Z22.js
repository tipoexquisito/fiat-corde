import { H as resolveDirective, L as openBlock, T as guardReactiveProps, X as withCtx, Z as withDirectives, _ as createBlock, _t as normalizeProps, b as createTextVNode, g as createBaseVNode, ht as unref, v as createCommentVNode, y as createElementBlock } from "./modules/shiki-V2eyNvW-.js";
import { n as useSlideContext, t as frontmatterToProps } from "./slidev/context-00fxQF-V.js";
import { t as image_default } from "./slidev/image-B9oPh5Xi.js";
//#region slides.md__slidev_5.md
var _hoisted_1 = { class: "absolute inset-0 flex flex-col items-center justify-center gap-8 font-serif text-5xl" };
var _hoisted_2 = { class: "text-red-700" };
var _sfc_main = {
	__name: "slides.md__slidev_5",
	setup(__props) {
		const { $slidev, $nav, $clicksContext, $clicks, $page, $renderContext, $frontmatter } = useSlideContext();
		$clicksContext.setup();
		return (_ctx, _cache) => {
			const _directive_click = resolveDirective("click");
			return openBlock(), createBlock(image_default, normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 4))), {
				default: withCtx(() => [
					_cache[3] || (_cache[3] = createBaseVNode("div", { class: "absolute inset-0 bg-black/60" }, null, -1)),
					createBaseVNode("div", _hoisted_1, [
						_cache[2] || (_cache[2] = createBaseVNode("div", null, "Quem decide?", -1)),
						withDirectives((openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [createTextVNode("Quem paga?", -1)])])), [[_directive_click]]),
						withDirectives((openBlock(), createElementBlock("div", _hoisted_2, [..._cache[1] || (_cache[1] = [
							createTextVNode("Quem fica fora do ", -1),
							createBaseVNode("i", null, "frame", -1),
							createTextVNode("?", -1)
						])])), [[_directive_click]])
					]),
					createCommentVNode("\nLer cada pergunta devagar, com pausa. A terceira fica.\n"),
					createCommentVNode(" ============================================ "),
					createCommentVNode(" MOMENTO 2 — MADRID                           ")
				]),
				_: 1
			}, 16);
		};
	}
};
//#endregion
export { _sfc_main as default };
