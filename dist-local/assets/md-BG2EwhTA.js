import { H as resolveDirective, L as openBlock, T as guardReactiveProps, X as withCtx, Z as withDirectives, _ as createBlock, _t as normalizeProps, g as createBaseVNode, ht as unref } from "./modules/shiki-V2eyNvW-.js";
import { n as useSlideContext, t as frontmatterToProps } from "./slidev/context-00fxQF-V.js";
import { t as center_default } from "./slidev/center-CFttN9qR.js";
//#endregion
//#region guernica/guernica.jpeg
var guernica_default = "/assets/guernica-9M6uj-vE.jpeg";
//#endregion
//#region slides.md__slidev_27.md
var _hoisted_1 = { class: "absolute inset-0 flex items-center justify-center gap-0" };
var _hoisted_2 = {
	src: guernica_default,
	class: "max-h-80 object-contain"
};
var _sfc_main = {
	__name: "slides.md__slidev_27",
	setup(__props) {
		const { $slidev, $nav, $clicksContext, $clicks, $page, $renderContext, $frontmatter } = useSlideContext();
		$clicksContext.setup();
		return (_ctx, _cache) => {
			const _directive_click = resolveDirective("click");
			return openBlock(), createBlock(center_default, normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 26))), {
				default: withCtx(() => [createBaseVNode("div", _hoisted_1, [_cache[0] || (_cache[0] = createBaseVNode("img", {
					src: "/assets/pomba-paz-XGEg6WRY.jpg",
					class: "max-h-80 object-contain"
				}, null, -1)), withDirectives(createBaseVNode("img", _hoisted_2, null, 512), [[_directive_click]])])]),
				_: 1
			}, 16);
		};
	}
};
//#endregion
export { _sfc_main as default };
