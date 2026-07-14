import { B as renderSlot, C as defineComponent, L as openBlock, g as createBaseVNode, gt as normalizeClass, y as createElementBlock } from "../modules/shiki-V2eyNvW-.js";
//#endregion
//#region node_modules/@slidev/client/layouts/two-cols.vue
var two_cols_default = /* @__PURE__ */ defineComponent({
	__name: "two-cols",
	props: {
		class: { type: String },
		layoutClass: { type: String }
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(["slidev-layout two-columns w-full h-full grid grid-cols-2", props.layoutClass]) }, [createBaseVNode("div", { class: normalizeClass(["col-left", props.class]) }, [renderSlot(_ctx.$slots, "default"), renderSlot(_ctx.$slots, "left")], 2), createBaseVNode("div", { class: normalizeClass(["col-right", props.class]) }, [renderSlot(_ctx.$slots, "right")], 2)], 2);
		};
	}
});
//#endregion
export { two_cols_default as t };
