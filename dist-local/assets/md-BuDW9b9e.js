import { L as openBlock, T as guardReactiveProps, X as withCtx, _ as createBlock, _t as normalizeProps, b as createTextVNode, g as createBaseVNode, ht as unref } from "./modules/shiki-V2eyNvW-.js";
import { n as useSlideContext, t as frontmatterToProps } from "./slidev/context-00fxQF-V.js";
import { t as image_default } from "./slidev/image-B9oPh5Xi.js";
//#region slides.md__slidev_1.md
var _sfc_main = {
	__name: "slides.md__slidev_1",
	setup(__props) {
		const { $slidev, $nav, $clicksContext, $clicks, $page, $renderContext, $frontmatter } = useSlideContext();
		$clicksContext.setup();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(image_default, normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 0))), {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createBaseVNode("div", { class: "absolute left-[30px] bottom-[30px]" }, [
					createBaseVNode("b", null, "Mobilidade Erasmus+ KA1"),
					createBaseVNode("br"),
					createTextVNode(" Metodologias Ativas para o Ensino e a Aprendizagem"),
					createBaseVNode("br"),
					createTextVNode(" Madrid, maio 2026"),
					createBaseVNode("br"),
					createBaseVNode("p", null, "Filipe Gama - julho 2026")
				], -1)])]),
				_: 1
			}, 16);
		};
	}
};
//#endregion
export { _sfc_main as default };
