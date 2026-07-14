import { B as renderSlot, C as defineComponent, E as h, F as onMounted, I as onUnmounted, J as watchEffect, L as openBlock, U as resolveDynamicComponent, Y as watchSyncEffect, _ as createBlock, at as reactive, ft as toRef, g as createBaseVNode, gt as normalizeClass, h as computed, ht as unref, i as tt, p as Fragment, q as watch, st as ref, v as createCommentVNode, vt as normalizeStyle, x as createVNode, y as createElementBlock } from "./modules/shiki-V2eyNvW-.js";
import { M as provideLocal, V as _defineProperty, f as useElementSize } from "./modules/vue-j1EMyUNA.js";
import { A as slideScale, J as slideHeight, Q as configs_default, Y as slideWidth, q as slideAspect, t as useNav, z as getSlide } from "./useNav-BevVU56q.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BOaGB7Aw.js";
import { _ as injectionSlideScale, d as injectionClicksContext, f as injectionCurrentPage, g as injectionSlideElement, h as injectionRoute, m as injectionRenderContext, p as injectionFrontmatter, v as injectionSlideZoom } from "./slidev/context-00fxQF-V.js";
import { n as define, r as randId, t as createSyncState } from "./syncState-CyBmabvC.js";
import { a as getSlideClass, d as isDark } from "./index-BrwRSUAk.js";
import { t as useDrawings } from "./useDrawings-Cz-PkJHi.js";
//#region node_modules/@slidev/client/internals/DrawingPreview.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = ["innerHTML"];
//#endregion
//#region node_modules/@slidev/client/internals/DrawingPreview.vue
var DrawingPreview_default = /* @__PURE__ */ defineComponent({
	__name: "DrawingPreview",
	props: { page: {} },
	setup(__props) {
		const { drawingState } = useDrawings();
		return (_ctx, _cache) => {
			return unref(drawingState)[__props.page] ? (openBlock(), createElementBlock("svg", {
				key: 0,
				class: "w-full h-full absolute top-0 pointer-events-none",
				innerHTML: unref(drawingState)[__props.page]
			}, null, 8, _hoisted_1$2)) : createCommentVNode("v-if", true);
		};
	}
});
//#endregion
//#region ../../../../../@server-reactive/snapshots?diff
var data = reactive({});
var onSet = [];
var onPatch = [];
define(data, "$syncUp", true);
define(data, "$syncDown", true);
define(data, "$paused", false);
define(data, "$onSet", (fn) => onSet.push(fn));
define(data, "$onPatch", (fn) => onPatch.push(fn));
randId();
define(data, "$patch", async () => false);
//#endregion
//#region node_modules/@slidev/client/state/snapshot.ts
var snapshotState = createSyncState(data, data, true);
//#endregion
//#region node_modules/@slidev/client/logic/screenshot.ts
var chromeVersion$1 = window.navigator.userAgent.match(/Chrome\/(\d+)/)?.[1];
chromeVersion$1 && Number(chromeVersion$1);
//#endregion
//#region node_modules/@slidev/client/logic/snapshot.ts
var chromeVersion = window.navigator.userAgent.match(/Chrome\/(\d+)/)?.[1];
chromeVersion && Number(chromeVersion);
var SlideSnapshotManager = class {
	constructor() {
		_defineProperty(this, "_screenshotSession", null);
	}
	getSnapshot(slideNo, isDark) {
		const id = slideNo + (isDark ? "-dark" : "-light");
		const data = snapshotState.state[id];
		if (!data) return;
		const slide = getSlide(slideNo);
		if (!slide) return;
		if (data?.revision === slide?.meta.slide.revision) return data.image;
	}
	async saveSnapshot(slideNo, dataUrl, isDark) {
		return false;
	}
	async startCapturing(nav) {
		return false;
	}
};
var snapshotManager = new SlideSnapshotManager();
//#endregion
//#region node_modules/@slidev/client/internals/SlideContainer.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["id"];
var _hoisted_2 = ["id"];
var _hoisted_3 = { class: "slidev-slide-container w-full h-full relative" };
var _hoisted_4 = ["src"];
var mainSlideElement = ref(null);
//#endregion
//#region node_modules/@slidev/client/internals/SlideContainer.vue
var SlideContainer_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SlideContainer",
	props: {
		width: { type: Number },
		meta: { default: () => ({}) },
		isMain: {
			type: Boolean,
			default: false
		},
		no: {
			type: Number,
			required: false
		},
		useSnapshot: {
			type: Boolean,
			default: false
		},
		contentStyle: {
			type: Object,
			default: () => ({})
		}
	},
	setup(__props) {
		const props = __props;
		const { isPrintMode } = useNav();
		const container = ref(null);
		const containerSize = useElementSize(container);
		const slideElement = ref(null);
		const width = computed(() => props.width ?? containerSize.width.value);
		const height = computed(() => props.width ? props.width / slideAspect.value : containerSize.height.value);
		const scale = computed(() => {
			if (slideScale.value && !isPrintMode.value) return +slideScale.value;
			return Math.min(width.value / slideWidth.value, height.value / slideHeight.value);
		});
		const contentStyle = computed(() => ({
			...props.contentStyle,
			"height": `${slideHeight.value}px`,
			"width": `${slideWidth.value}px`,
			"--slidev-slide-scale": scale.value
		}));
		const containerStyle = computed(() => props.width ? {
			width: `${props.width}px`,
			height: `${props.width / slideAspect.value}px`
		} : {});
		if (props.isMain) {
			const rootStyle = document.documentElement.style;
			watchEffect(() => rootStyle.setProperty("--slidev-slide-scale", scale.value.toString()));
			onUnmounted(() => rootStyle.removeProperty("--slidev-slide-scale"));
		}
		provideLocal(injectionSlideScale, scale);
		provideLocal(injectionSlideElement, slideElement);
		watchSyncEffect(() => {
			if (props.isMain) mainSlideElement.value = slideElement.value;
		});
		onMounted(() => {
			watch(() => props.isMain && scale.value, () => {
				tt();
			});
		});
		const snapshot = computed(() => {
			if (props.no == null || !props.useSnapshot) return void 0;
			return snapshotManager.getSnapshot(props.no, isDark.value);
		});
		return (_ctx, _cache) => {
			return !snapshot.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				id: __props.isMain ? "slide-container" : void 0,
				ref_key: "container",
				ref: container,
				class: "slidev-slide-container",
				style: normalizeStyle(containerStyle.value)
			}, [createBaseVNode("div", {
				id: __props.isMain ? "slide-content" : void 0,
				ref_key: "slideElement",
				ref: slideElement,
				class: "slidev-slide-content",
				style: normalizeStyle(contentStyle.value)
			}, [renderSlot(_ctx.$slots, "default", {}, void 0, true)], 12, _hoisted_2), renderSlot(_ctx.$slots, "controls", {}, void 0, true)], 12, _hoisted_1$1)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createCommentVNode(" Image Snapshot "), createBaseVNode("div", _hoisted_3, [createBaseVNode("img", {
				src: snapshot.value,
				class: "w-full h-full object-cover",
				style: normalizeStyle(containerStyle.value)
			}, null, 12, _hoisted_4), _cache[0] || (_cache[0] = createBaseVNode("div", {
				absolute: "",
				"bottom-1": "",
				"right-1": "",
				"p0.5": "",
				"text-cyan:75": "",
				"bg-cyan:10": "",
				rounded: "",
				title: "Snapshot"
			}, [createBaseVNode("div", { class: "i-carbon-camera" })], -1))])], 2112));
		};
	}
}), [["__scopeId", "data-v-20e025db"]]);
//#endregion
//#region node_modules/.slidev/virtual/import-glob.2e746bc9c7.ts
var import_glob_2e746bc9c7_default = /* #__PURE__ */ Object.assign({});
//#endregion
//#region node_modules/.slidev/virtual/import-glob.4d0bd696f6.ts
var import_glob_4d0bd696f6_default = /* #__PURE__ */ Object.assign({});
//#endregion
//#region node_modules/.slidev/virtual/import-glob.5851b16b46.ts
var import_glob_5851b16b46_default = /* #__PURE__ */ Object.assign({});
//#endregion
//#region node_modules/.slidev/virtual/import-glob.713b1a2fd9.ts
var import_glob_713b1a2fd9_default = /* #__PURE__ */ Object.assign({});
//#endregion
//#region node_modules/.slidev/virtual/import-glob.22f6997099.ts
var import_glob_22f6997099_default = /* #__PURE__ */ Object.assign({});
//#endregion
//#region node_modules/.slidev/virtual/import-glob.9e7671f0dd.ts
var import_glob_9e7671f0dd_default = /* #__PURE__ */ Object.assign({});
//#endregion
//#region node_modules/.slidev/virtual/import-glob.094b2d72d4.ts
var import_glob_094b2d72d4_default = /* #__PURE__ */ Object.assign({});
//#endregion
//#region node_modules/.slidev/virtual/import-glob.3bc039b2e8.ts
var import_glob_3bc039b2e8_default = /* #__PURE__ */ Object.assign({});
//#endregion
//#region ../../../../../@slidev/global-layers
var GlobalTopComponents = [Object.values(import_glob_2e746bc9c7_default)[0], Object.values(import_glob_4d0bd696f6_default)[0]].filter(Boolean);
var GlobalTop = { render: () => GlobalTopComponents.map((comp) => h(comp)) };
var GlobalBottomComponents = [Object.values(import_glob_5851b16b46_default)[0], Object.values(import_glob_713b1a2fd9_default)[0]].filter(Boolean);
var GlobalBottom = { render: () => GlobalBottomComponents.map((comp) => h(comp)) };
var SlideTopComponents = [Object.values(import_glob_22f6997099_default)[0], Object.values(import_glob_9e7671f0dd_default)[0]].filter(Boolean);
var SlideTop = { render: () => SlideTopComponents.map((comp) => h(comp)) };
var SlideBottomComponents = [Object.values(import_glob_094b2d72d4_default)[0], Object.values(import_glob_3bc039b2e8_default)[0]].filter(Boolean);
var SlideBottom = { render: () => SlideBottomComponents.map((comp) => h(comp)) };
//#endregion
//#region node_modules/@slidev/client/internals/SlideWrapper.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-slidev-no", "lang"];
//#endregion
//#region node_modules/@slidev/client/internals/SlideWrapper.vue
var SlideWrapper_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SlideWrapper",
	props: {
		clicksContext: {
			type: Object,
			required: true
		},
		renderContext: {
			type: String,
			default: "slide"
		},
		route: {
			type: Object,
			required: true
		}
	},
	setup(__props) {
		const props = __props;
		const zoom = computed(() => props.route.meta?.slide?.frontmatter.zoom ?? 1);
		provideLocal(injectionRoute, props.route);
		provideLocal(injectionFrontmatter, props.route.meta.slide.frontmatter);
		provideLocal(injectionCurrentPage, ref(props.route.no));
		provideLocal(injectionRenderContext, ref(props.renderContext));
		provideLocal(injectionClicksContext, toRef(props, "clicksContext"));
		provideLocal(injectionSlideZoom, zoom);
		const style = computed(() => ({
			"user-select": configs_default.selectable ? void 0 : "none",
			"--slidev-slide-zoom-scale": zoom.value === 1 ? void 0 : zoom.value
		}));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				"data-slidev-no": props.route.no,
				class: normalizeClass(unref(getSlideClass)(__props.route, ["slide", "presenter"].includes(props.renderContext) ? "" : "disable-view-transition")),
				style: normalizeStyle(style.value),
				lang: props.route.meta.slide.frontmatter.lang
			}, [
				createVNode(unref(SlideBottom)),
				(openBlock(), createBlock(resolveDynamicComponent(props.route.component))),
				createVNode(unref(SlideTop))
			], 14, _hoisted_1);
		};
	}
}), [["__scopeId", "data-v-9167a1ed"]]);
//#endregion
export { mainSlideElement as a, SlideContainer_default as i, GlobalBottom as n, DrawingPreview_default as o, GlobalTop as r, SlideWrapper_default as t };
