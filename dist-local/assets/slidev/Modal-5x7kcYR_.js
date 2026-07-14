import { B as renderSlot, C as defineComponent, L as openBlock, _ as createBlock, g as createBaseVNode, gt as normalizeClass, ht as unref, m as KeepAlive, v as createCommentVNode, y as createElementBlock } from "../modules/shiki-V2eyNvW-.js";
import { S as useVModel } from "../modules/vue-j1EMyUNA.js";
//#region node_modules/@slidev/client/internals/Modal.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	key: 0,
	class: "fixed top-0 bottom-0 left-0 right-0 grid z-modal"
};
//#endregion
//#region node_modules/@slidev/client/internals/Modal.vue
var Modal_default = /* @__PURE__ */ defineComponent({
	__name: "Modal",
	props: {
		modelValue: { default: false },
		class: { default: "" }
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const value = useVModel(props, "modelValue", __emit);
		function onClick() {
			value.value = false;
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(KeepAlive, null, [unref(value) ? (openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", {
				bg: "black opacity-80",
				class: "absolute top-0 bottom-0 left-0 right-0 -z-1",
				onClick: _cache[0] || (_cache[0] = ($event) => onClick())
			}), createBaseVNode("div", {
				class: normalizeClass(["m-auto rounded-md bg-main shadow", props.class]),
				"dark:border": "~ main"
			}, [renderSlot(_ctx.$slots, "default")], 2)])) : createCommentVNode("v-if", true)], 1024);
		};
	}
});
//#endregion
export { Modal_default as t };
