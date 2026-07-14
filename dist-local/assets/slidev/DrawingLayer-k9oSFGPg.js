import { C as defineComponent, F as onMounted, L as openBlock, N as onBeforeUnmount, gt as normalizeClass, ht as unref, q as watch, st as ref, y as createElementBlock } from "../modules/shiki-V2eyNvW-.js";
import { n as useSlideContext } from "./context-00fxQF-V.js";
import { t as useDrawings } from "../useDrawings-Cz-PkJHi.js";
//#endregion
//#region node_modules/@slidev/client/internals/DrawingLayer.vue
var DrawingLayer_default = /* @__PURE__ */ defineComponent({
	__name: "DrawingLayer",
	setup(__props) {
		const { drauu, drawingEnabled, loadCanvas } = useDrawings();
		const scale = useSlideContext().$scale;
		const svg = ref();
		onMounted(() => {
			drauu.mount(svg.value, svg.value.parentElement);
			watch(scale, (scale) => drauu.options.coordinateScale = 1 / scale, { immediate: true });
			loadCanvas();
		});
		onBeforeUnmount(() => {
			drauu.unmount();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("svg", {
				ref_key: "svg",
				ref: svg,
				class: normalizeClass(["w-full h-full absolute top-0", {
					"pointer-events-none": !unref(drawingEnabled),
					"touch-none": unref(drawingEnabled)
				}])
			}, null, 2);
		};
	}
});
//#endregion
export { DrawingLayer_default as default };
