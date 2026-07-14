import { H as resolveDirective, L as openBlock, T as guardReactiveProps, X as withCtx, Z as withDirectives, _ as createBlock, _t as normalizeProps, b as createTextVNode, g as createBaseVNode, ht as unref, y as createElementBlock } from "./modules/shiki-V2eyNvW-.js";
import { n as useSlideContext, t as frontmatterToProps } from "./slidev/context-00fxQF-V.js";
import { t as center_default } from "./slidev/center-CFttN9qR.js";
//#region slides.md__slidev_29.md
var _hoisted_1 = { class: "absolute inset-0 flex flex-col items-center justify-center gap-4" };
var _hoisted_2 = { class: "font-sans text-xl opacity-80" };
var _hoisted_3 = { class: "font-sans text-xl opacity-80" };
var _hoisted_4 = { class: "font-sans text-3xl opacity-80" };
var _sfc_main = {
	__name: "slides.md__slidev_29",
	setup(__props) {
		const { $slidev, $nav, $clicksContext, $clicks, $page, $renderContext, $frontmatter } = useSlideContext();
		$clicksContext.setup();
		return (_ctx, _cache) => {
			const _directive_click = resolveDirective("click");
			return openBlock(), createBlock(center_default, normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 28))), {
				default: withCtx(() => [createBaseVNode("div", _hoisted_1, [
					_cache[3] || (_cache[3] = createBaseVNode("div", { class: "font-serif text-9xl" }, "3 de maio", -1)),
					withDirectives((openBlock(), createElementBlock("div", _hoisted_2, [..._cache[0] || (_cache[0] = [createTextVNode("Fuzilamento em Madrid", -1)])])), [[_directive_click]]),
					withDirectives((openBlock(), createElementBlock("div", _hoisted_3, [..._cache[1] || (_cache[1] = [createTextVNode("Chegada a Madrid", -1)])])), [[_directive_click]]),
					withDirectives((openBlock(), createElementBlock("div", _hoisted_4, [..._cache[2] || (_cache[2] = [createTextVNode("Dia Mundial da Liberdade de Imprensa", -1)])])), [[_directive_click]])
				])]),
				_: 1
			}, 16);
		};
	}
};
//#endregion
export { _sfc_main as default };
