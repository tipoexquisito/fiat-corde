import { B as renderSlot, C as defineComponent, L as openBlock, h as computed, vt as normalizeStyle, y as createElementBlock } from "../modules/shiki-V2eyNvW-.js";
import { t as handleBackground } from "./layoutHelper-CeZWnDRU.js";
//#endregion
//#region node_modules/@slidev/client/layouts/image.vue
var image_default = /* @__PURE__ */ defineComponent({
	__name: "image",
	props: {
		image: { type: String },
		backgroundSize: {
			type: String,
			default: "cover"
		}
	},
	setup(__props) {
		const props = __props;
		const style = computed(() => handleBackground(props.image, false, props.backgroundSize));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: "slidev-layout w-full h-full",
				style: normalizeStyle(style.value)
			}, [renderSlot(_ctx.$slots, "default")], 4);
		};
	}
});
//#endregion
export { image_default as t };
