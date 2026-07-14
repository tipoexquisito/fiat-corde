import { L as openBlock, T as guardReactiveProps, X as withCtx, _ as createBlock, _t as normalizeProps, g as createBaseVNode, ht as unref } from "./modules/shiki-V2eyNvW-.js";
import { n as useSlideContext, t as frontmatterToProps } from "./slidev/context-00fxQF-V.js";
import { t as center_default } from "./slidev/center-CFttN9qR.js";
//#endregion
//#region slides.md__slidev_13.md
var _sfc_main = {
	__name: "slides.md__slidev_13",
	setup(__props) {
		const { $slidev, $nav, $clicksContext, $clicks, $page, $renderContext, $frontmatter } = useSlideContext();
		$clicksContext.setup();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(center_default, normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 12))), {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createBaseVNode("div", { class: "absolute inset-0 flex items-center justify-center gap-8" }, [createBaseVNode("img", {
					src: "/assets/3-16-decifrar-imagem-Dls-1vpg.jpg",
					class: "h-full object-contain"
				}), createBaseVNode("img", {
					src: "/assets/3-16-jornal-publico-BMvkUyGc.jpg",
					class: "h-full object-contain"
				})], -1)])]),
				_: 1
			}, 16);
		};
	}
};
//#endregion
export { _sfc_main as default };
