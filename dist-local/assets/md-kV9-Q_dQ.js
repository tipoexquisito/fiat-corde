import { L as openBlock, T as guardReactiveProps, _ as createBlock, _t as normalizeProps, ht as unref } from "./modules/shiki-V2eyNvW-.js";
import { n as useSlideContext, t as frontmatterToProps } from "./slidev/context-00fxQF-V.js";
import { t as image_default } from "./slidev/image-B9oPh5Xi.js";
//#region slides.md__slidev_18.md
var _sfc_main = {
	__name: "slides.md__slidev_18",
	setup(__props) {
		const { $slidev, $nav, $clicksContext, $clicks, $page, $renderContext, $frontmatter } = useSlideContext();
		$clicksContext.setup();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(image_default, normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 17))), null, 16);
		};
	}
};
//#endregion
export { _sfc_main as default };
