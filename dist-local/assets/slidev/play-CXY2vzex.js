const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingControls-CmGZrRSa.js","assets/rolldown-runtime-B-1-B7_t.js","assets/modules/shiki-V2eyNvW-.js","assets/modules/shiki-ipjRpIB4.css","assets/modules/vue-j1EMyUNA.js","assets/useDrawings-Cz-PkJHi.js","assets/useNav-BevVU56q.js","assets/_plugin-vue_export-helper-BOaGB7Aw.js","assets/slidev/context-00fxQF-V.js","assets/index-BrwRSUAk.js","assets/syncState-CyBmabvC.js","assets/index-D4Cm5M6b.css","assets/slidev/IconButton-CNvL6I62.js","assets/slidev/VerticalDivider-Dx1O8vyp.js","assets/DrawingControls-3Mo8NUwa.css"])))=>i.map(i=>d[i]);
import { C as defineComponent, L as openBlock, X as withCtx, _ as createBlock, b as createTextVNode, g as createBaseVNode, gt as normalizeClass, h as computed, ht as unref, it as onScopeDispose, nt as isRef, p as Fragment, q as watch, st as ref, ut as shallowRef, v as createCommentVNode, vt as normalizeStyle, x as createVNode, y as createElementBlock } from "../modules/shiki-V2eyNvW-.js";
import { S as useVModel, p as useEventListener } from "../modules/vue-j1EMyUNA.js";
import { E as showInfoDialog, F as viewerCssFilter, G as __vitePreload, I as viewerCssFilterDefaults, Q as configs_default, f as hideCursorIdle, h as isEditorVertical, k as showRecordingDialog, t as useNav, v as isScreenVertical, w as showEditor } from "../useNav-BevVU56q.js";
import { o as state } from "../index-BrwRSUAk.js";
import { t as useDrawings } from "../useDrawings-Cz-PkJHi.js";
import { t as Modal_default } from "./Modal-5x7kcYR_.js";
import { t as cursor_fill_default } from "../modules/unplugin-icons-d091GBOg.js";
import { i as SlideContainer_default } from "../SlideWrapper-DdpLlR2W.js";
import { a as LaserPointer_default, c as Goto_default, d as useWakeLock, f as useSwipeControls, l as ContextMenu_default, n as SlidesShow_default, r as NavControls_default, s as QuickOverview_default, t as registerShortcuts, u as onContextMenu } from "./shortcuts-Bp4nIP1J.js";
//#region node_modules/@slidev/client/composables/useHideCursorIdle.ts
var TIMEOUT = 2e3;
function useHideCursorIdle(enabled) {
	const shouldHide = computed(() => enabled.value && hideCursorIdle.value);
	function hide() {
		document.body.style.cursor = "none";
	}
	function show() {
		document.body.style.cursor = "";
	}
	let timer = null;
	watch(shouldHide, (value) => {
		if (!value) {
			show();
			if (timer) clearTimeout(timer);
			timer = null;
		}
	});
	onScopeDispose(() => {
		show();
		if (timer) clearTimeout(timer);
		timer = null;
	});
	useEventListener(document.body, ["pointermove", "pointerdown"], () => {
		show();
		if (timer) clearTimeout(timer);
		if (shouldHide.value) timer = setTimeout(hide, TIMEOUT);
		else timer = null;
	}, { passive: true });
}
//#endregion
//#region node_modules/@slidev/client/internals/InfoDialog.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { class: "slidev-info-dialog slidev-layout flex flex-col gap-4 text-base" };
var _hoisted_2 = ["innerHTML"];
//#endregion
//#region node_modules/@slidev/client/internals/InfoDialog.vue
var InfoDialog_default = /* @__PURE__ */ defineComponent({
	__name: "InfoDialog",
	props: { modelValue: { default: false } },
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const value = useVModel(__props, "modelValue", __emit);
		const hasInfo = computed(() => typeof configs_default.info === "string");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				modelValue: unref(value),
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(value) ? value.value = $event : null),
				class: "px-6 py-4"
			}, {
				default: withCtx(() => [createBaseVNode("div", _hoisted_1$1, [hasInfo.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: "mb-4",
					innerHTML: unref(configs_default).info
				}, null, 8, _hoisted_2)) : createCommentVNode("v-if", true), _cache[1] || (_cache[1] = createBaseVNode("a", {
					href: "https://github.com/slidevjs/slidev",
					target: "_blank",
					class: "!opacity-100 !border-none !text-current"
				}, [createBaseVNode("div", { class: "flex gap-1 children:my-auto" }, [
					createBaseVNode("div", { class: "opacity-50 text-sm mr-2" }, "Powered by"),
					createBaseVNode("img", {
						class: "w-5 h-5",
						src: "/assets/logo-BYkHSa_O.png",
						alt: "Slidev logo"
					}),
					createBaseVNode("div", { style: { "color": "#2082A6" } }, [createBaseVNode("b", null, "Sli"), createTextVNode("dev ")])
				])], -1))])]),
				_: 1
			}, 8, ["modelValue"]);
		};
	}
});
//#endregion
//#region node_modules/@slidev/client/internals/Controls.vue
var Controls_default = /* @__PURE__ */ defineComponent({
	__name: "Controls",
	setup(__props) {
		const { isEmbedded } = useNav();
		const drawingEnabled = !configs_default.drawings.presenterOnly && !isEmbedded.value;
		const DrawingControls = shallowRef();
		if (drawingEnabled) __vitePreload(() => import("./DrawingControls-CmGZrRSa.js").then((n) => n.n).then((v) => DrawingControls.value = v.default), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]));
		const WebCamera = shallowRef();
		const RecordingDialog = shallowRef();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [
				DrawingControls.value ? (openBlock(), createBlock(unref(DrawingControls), { key: 0 })) : createCommentVNode("v-if", true),
				createVNode(QuickOverview_default),
				createVNode(Goto_default),
				WebCamera.value ? (openBlock(), createBlock(unref(WebCamera), { key: 1 })) : createCommentVNode("v-if", true),
				RecordingDialog.value ? (openBlock(), createBlock(unref(RecordingDialog), {
					key: 2,
					modelValue: unref(showRecordingDialog),
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(showRecordingDialog) ? showRecordingDialog.value = $event : null)
				}, null, 8, ["modelValue"])) : createCommentVNode("v-if", true),
				unref(configs_default).info ? (openBlock(), createBlock(InfoDialog_default, {
					key: 3,
					modelValue: unref(showInfoDialog),
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(showInfoDialog) ? showInfoDialog.value = $event : null)
				}, null, 8, ["modelValue"])) : createCommentVNode("v-if", true),
				createVNode(ContextMenu_default)
			], 64);
		};
	}
});
//#endregion
//#region node_modules/@slidev/client/internals/PresenterMouse.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	key: 0,
	class: "absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"
};
//#endregion
//#region node_modules/@slidev/client/internals/PresenterMouse.vue
var PresenterMouse_default = /* @__PURE__ */ defineComponent({
	__name: "PresenterMouse",
	setup(__props) {
		return (_ctx, _cache) => {
			const _component_ph_cursor_fill = cursor_fill_default;
			return unref(state).cursor?.style === "cursor" ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(_component_ph_cursor_fill, {
				class: "absolute stroke-white dark:stroke-black",
				style: normalizeStyle({
					left: `${unref(state).cursor.x}%`,
					top: `${unref(state).cursor.y}%`,
					strokeWidth: 16
				})
			}, null, 8, ["style"])])) : createCommentVNode("v-if", true);
		};
	}
});
//#endregion
//#region node_modules/@slidev/client/pages/play.vue
var play_default = /* @__PURE__ */ defineComponent({
	__name: "play",
	setup(__props) {
		const { next, prev, isPrintMode, isPlaying, isEmbedded } = useNav();
		const { isDrawing } = useDrawings();
		const root = ref();
		function onClick(e) {
			if (showEditor.value) return;
			if (e.button === 0 && e.target?.id === "slide-container") if (e.pageX / window.innerWidth > .5) next();
			else prev();
		}
		useSwipeControls(root);
		registerShortcuts();
		useWakeLock();
		useHideCursorIdle(computed(() => isPlaying.value && !isEmbedded.value && !showEditor.value));
		const persistNav = computed(() => isScreenVertical.value || showEditor.value);
		const SideEditor = shallowRef();
		const contentStyle = computed(() => {
			let filter = "";
			if (viewerCssFilter.value.brightness !== viewerCssFilterDefaults.brightness) filter += `brightness(${viewerCssFilter.value.brightness}) `;
			if (viewerCssFilter.value.contrast !== viewerCssFilterDefaults.contrast) filter += `contrast(${viewerCssFilter.value.contrast}) `;
			if (viewerCssFilter.value.sepia !== viewerCssFilterDefaults.sepia) filter += `sepia(${viewerCssFilter.value.sepia}) `;
			if (viewerCssFilter.value.hueRotate !== viewerCssFilterDefaults.hueRotate) filter += `hue-rotate(${viewerCssFilter.value.hueRotate}deg) `;
			if (viewerCssFilter.value.invert) filter += "invert(1) ";
			return { filter };
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [
				createBaseVNode("div", {
					id: "page-root",
					ref_key: "root",
					ref: root,
					class: normalizeClass(["grid", unref(isEditorVertical) ? "grid-rows-[1fr_max-content]" : "grid-cols-[1fr_max-content]"])
				}, [createVNode(SlideContainer_default, {
					style: { background: "var(--slidev-slide-container-background, black)" },
					"is-main": "",
					"content-style": contentStyle.value,
					onPointerdown: onClick,
					onContextmenu: unref(onContextMenu)
				}, {
					default: withCtx(() => [
						createVNode(SlidesShow_default, { "render-context": "slide" }),
						createVNode(PresenterMouse_default),
						createVNode(LaserPointer_default)
					]),
					controls: withCtx(() => [!unref(isPrintMode) ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100 focus-within:opacity-100 focus-visible:opacity-100", [persistNav.value ? "!opacity-100 right-0" : "opacity-0 p-2", unref(isDrawing) ? "pointer-events-none" : ""]])
					}, [createVNode(NavControls_default, { persist: persistNav.value }, null, 8, ["persist"])], 2)) : createCommentVNode("v-if", true)]),
					_: 1
				}, 8, ["content-style", "onContextmenu"]), SideEditor.value && unref(showEditor) ? (openBlock(), createBlock(unref(SideEditor), {
					key: 0,
					resize: true
				})) : createCommentVNode("v-if", true)], 2),
				!unref(isPrintMode) ? (openBlock(), createBlock(Controls_default, { key: 0 })) : createCommentVNode("v-if", true),
				_cache[0] || (_cache[0] = createBaseVNode("div", { id: "twoslash-container" }, null, -1))
			], 64);
		};
	}
});
//#endregion
export { play_default as default };
