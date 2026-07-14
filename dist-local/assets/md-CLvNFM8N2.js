import { L as openBlock, T as guardReactiveProps, X as withCtx, _ as createBlock, _t as normalizeProps, g as createBaseVNode, ht as unref } from "./modules/shiki-V2eyNvW-.js";
import { n as useSlideContext, t as frontmatterToProps } from "./slidev/context-00fxQF-V.js";
import { t as center_default } from "./slidev/center-CFttN9qR.js";
//#endregion
//#region slides.md__slidev_36.md
var _sfc_main = {
	__name: "slides.md__slidev_36",
	setup(__props) {
		const { $slidev, $nav, $clicksContext, $clicks, $page, $renderContext, $frontmatter } = useSlideContext();
		$clicksContext.setup();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(center_default, normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 35))), {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createBaseVNode("div", { class: "absolute inset-0 flex items-center justify-center" }, [createBaseVNode("img", {
					src: "/assets/sala-equis-1-Cfa3fzbQ.jpg",
					class: "h-full object-contain"
				}), createBaseVNode("img", {
					src: "/assets/sala-equis-2-jjd2zfk1.jpg",
					class: "h-full object-contain"
				})], -1)])]),
				_: 1
			}, 16);
		};
	}
};
//#endregion
export { _sfc_main as default };
