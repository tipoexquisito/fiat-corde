import { H as resolveDirective, L as openBlock, T as guardReactiveProps, X as withCtx, Z as withDirectives, _ as createBlock, _t as normalizeProps, b as createTextVNode, g as createBaseVNode, ht as unref, v as createCommentVNode, y as createElementBlock } from "./modules/shiki-V2eyNvW-.js";
import { n as useSlideContext, t as frontmatterToProps } from "./slidev/context-00fxQF-V.js";
import { t as center_default } from "./slidev/center-CFttN9qR.js";
//#region slides.md__slidev_31.md
var _hoisted_1 = { class: "absolute inset-0 flex flex-col items-center justify-center gap-6 font-serif text-4xl" };
var _sfc_main = {
	__name: "slides.md__slidev_31",
	setup(__props) {
		const { $slidev, $nav, $clicksContext, $clicks, $page, $renderContext, $frontmatter } = useSlideContext();
		$clicksContext.setup();
		return (_ctx, _cache) => {
			const _directive_click = resolveDirective("click");
			return openBlock(), createBlock(center_default, normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 30))), {
				default: withCtx(() => [createCommentVNode("\n- O fotojornalismo não é isento.\n- A arte não é isenta.\n- A pedagogia também não é.\n\nSe o 3 de maio de 1808 merece um feriado, uma parede no Museu e a nossa memória, o que merece o que estamos a assistir agora?\n\nPausa.\n\n"), createBaseVNode("div", _hoisted_1, [
					_cache[2] || (_cache[2] = createBaseVNode("div", null, "O fotojornalismo não é isento.", -1)),
					withDirectives((openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [createTextVNode("A arte não é isenta.", -1)])])), [[_directive_click]]),
					withDirectives((openBlock(), createElementBlock("div", null, [..._cache[1] || (_cache[1] = [createTextVNode("A pedagogia também não é.", -1)])])), [[_directive_click]])
				])]),
				_: 1
			}, 16);
		};
	}
};
//#endregion
export { _sfc_main as default };
