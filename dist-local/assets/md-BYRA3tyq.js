import { H as resolveDirective, L as openBlock, T as guardReactiveProps, X as withCtx, Z as withDirectives, _ as createBlock, _t as normalizeProps, b as createTextVNode, g as createBaseVNode, ht as unref, v as createCommentVNode, y as createElementBlock } from "./modules/shiki-V2eyNvW-.js";
import { n as useSlideContext, t as frontmatterToProps } from "./slidev/context-00fxQF-V.js";
import { t as two_cols_default } from "./slidev/two-cols-CAupNWEW.js";
//#region slides.md__slidev_22.md
var _hoisted_1 = { class: "text-2xl text-right font-sans" };
var _sfc_main = {
	__name: "slides.md__slidev_22",
	setup(__props) {
		const { $slidev, $nav, $clicksContext, $clicks, $page, $renderContext, $frontmatter } = useSlideContext();
		$clicksContext.setup();
		return (_ctx, _cache) => {
			const _directive_click = resolveDirective("click");
			return openBlock(), createBlock(two_cols_default, normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 21))), {
				left: withCtx((slotProps) => [..._cache[0] || (_cache[0] = [createBaseVNode("p", null, [createBaseVNode("i", { class: "text-4xl font-serif" }, [
					createTextVNode("\"Não estava à espera que "),
					createBaseVNode("br"),
					createTextVNode("a visita fosse tão política.\"")
				])], -1)])]),
				right: withCtx((slotProps) => [
					withDirectives((openBlock(), createElementBlock("div", _hoisted_1, [..._cache[1] || (_cache[1] = [
						createTextVNode("Os alunos também ", -1),
						createBaseVNode("br", null, null, -1),
						createTextVNode(" não estavam.", -1)
					])])), [[_directive_click]]),
					createCommentVNode("\nPausa longa. A frase não me pertence. Mudar ligeiramente a voz.\n\"Não estava à espera que a visita fosse tão política.\"\n\nSilêncio.\n\"Os alunos também não estavam.\"\nDeixar a frase respirar.\n\nTal como a mediadora não estava à espera, provavelmente esta plateia também não.\nHabituámo-nos a pedir à arte que nos entretenha. E ela insiste em fazer o seu trabalho.\nPorque esta corrente é antiga.\n\nGoya, Madrid, 1808.\n"),
					createCommentVNode(" ============================================ "),
					createCommentVNode(" MOMENTO 4 — A RIMA                            ")
				]),
				_: 1
			}, 16);
		};
	}
};
//#endregion
export { _sfc_main as default };
