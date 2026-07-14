import { B as renderSlot, C as defineComponent, L as openBlock, U as resolveDynamicComponent, X as withCtx, _ as createBlock, g as createBaseVNode, gt as normalizeClass, h as computed, yt as toDisplayString } from "../modules/shiki-V2eyNvW-.js";
//#region node_modules/@slidev/client/internals/IconButton.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "sr-only" };
//#endregion
//#region node_modules/@slidev/client/internals/IconButton.vue
var IconButton_default = /* @__PURE__ */ defineComponent({
	__name: "IconButton",
	props: {
		title: {},
		icon: {},
		as: {},
		to: {},
		disabled: { type: Boolean },
		active: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const type = computed(() => props.as || (props.to ? "router-link" : "button"));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(type.value), {
				class: normalizeClass(["slidev-icon-btn", {
					disabled: __props.disabled,
					active: __props.active
				}]),
				title: __props.title,
				to: __props.to
			}, {
				default: withCtx(() => [createBaseVNode("span", _hoisted_1, toDisplayString(__props.title), 1), renderSlot(_ctx.$slots, "default", {}, () => [createBaseVNode("div", { class: normalizeClass(__props.icon) }, null, 2)])]),
				_: 3
			}, 8, [
				"class",
				"title",
				"to"
			]);
		};
	}
});
//#endregion
export { IconButton_default as t };
