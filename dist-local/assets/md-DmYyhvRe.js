import { L as openBlock, T as guardReactiveProps, X as withCtx, _ as createBlock, _t as normalizeProps, g as createBaseVNode, ht as unref } from "./modules/shiki-V2eyNvW-.js";
import { n as useSlideContext, t as frontmatterToProps } from "./slidev/context-00fxQF-V.js";
import { t as two_cols_default } from "./slidev/two-cols-CAupNWEW.js";
//#endregion
//#region slides.md__slidev_9.md
var _sfc_main = {
	__name: "slides.md__slidev_9",
	setup(__props) {
		const { $slidev, $nav, $clicksContext, $clicks, $page, $renderContext, $frontmatter } = useSlideContext();
		$clicksContext.setup();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(two_cols_default, normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 8))), {
				left: withCtx((slotProps) => [..._cache[0] || (_cache[0] = [createBaseVNode("img", {
					src: "/assets/goya-2-maio-BSFI00zk.jpg",
					class: "h-full object-contain"
				}, null, -1)])]),
				right: withCtx((slotProps) => [..._cache[1] || (_cache[1] = [createBaseVNode("img", {
					src: "/assets/goya-3-maio-kYKvrSVm.jpg",
					class: "h-full object-contain"
				}, null, -1)])]),
				_: 1
			}, 16);
		};
	}
};
//#endregion
export { _sfc_main as default };
