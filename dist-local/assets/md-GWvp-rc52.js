import { L as openBlock, T as guardReactiveProps, X as withCtx, _ as createBlock, _t as normalizeProps, g as createBaseVNode, ht as unref } from "./modules/shiki-V2eyNvW-.js";
import { n as useSlideContext, t as frontmatterToProps } from "./slidev/context-00fxQF-V.js";
import { t as center_default } from "./slidev/center-CFttN9qR.js";
//#region slides.md__slidev_34.md
var _sfc_main = {
	__name: "slides.md__slidev_34",
	setup(__props) {
		const { $slidev, $nav, $clicksContext, $clicks, $page, $renderContext, $frontmatter } = useSlideContext();
		$clicksContext.setup();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(center_default, normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 33))), {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createBaseVNode("div", { class: "absolute inset-0 flex flex-col items-center justify-center gap-4" }, [createBaseVNode("div", { class: "font-serif text-5xl opacity-80" }, "Write!"), createBaseVNode("div", { class: "font-serif text-3xl opacity-80" }, "You are the intellectuals.")], -1)])]),
				_: 1
			}, 16);
		};
	}
};
//#endregion
export { _sfc_main as default };
