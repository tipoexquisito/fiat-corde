import { C as defineComponent, F as onMounted, J as watchEffect, K as useTemplateRef, L as openBlock, X as withCtx, Z as withDirectives, _ as createBlock, b as createTextVNode, g as createBaseVNode, gt as normalizeClass, h as computed, ht as unref, nt as isRef, p as Fragment, q as watch, st as ref, u as vShow, ut as shallowRef, v as createCommentVNode, vt as normalizeStyle, x as createVNode, y as createElementBlock, yt as toDisplayString } from "../modules/shiki-V2eyNvW-.js";
import { _ as useMediaQuery, h as useLocalStorage, p as useEventListener, w as useWindowFocus } from "../modules/vue-j1EMyUNA.js";
import { O as showPresenterCursor, U as createClicksContextBase, X as slidesTitle, a as cursorStyle, b as presenterLayout, m as increasePresenterFontSize, o as decreasePresenterFontSize, t as useNav, w as showEditor, x as presenterNotesFontSize } from "../useNav-BevVU56q.js";
import { t as _plugin_vue_export_helper_default } from "../_plugin-vue_export-helper-BOaGB7Aw.js";
import { n as useSlideInfo, o as state, p as useHead } from "../index-BrwRSUAk.js";
import { t as useDrawings } from "../useDrawings-Cz-PkJHi.js";
import { t as DrawingControls_default } from "./DrawingControls-CmGZrRSa.js";
import { t as IconButton_default } from "./IconButton-CNvL6I62.js";
import { n as ClicksSlider_default, t as NoteDisplay_default } from "./NoteDisplay-C_9E7gEd.js";
import { n as useTimer, r as CurrentProgressBar_default, t as TimerBar_default } from "./TimerBar-CIeAoV39.js";
import { i as SlideContainer_default, t as SlideWrapper_default } from "../SlideWrapper-DdpLlR2W.js";
import "./NoteEditable-CgD0RNJD.js";
import { a as LaserPointer_default, c as Goto_default, d as useWakeLock, f as useSwipeControls, i as SegmentControl_default, l as ContextMenu_default, n as SlidesShow_default, o as useMousePosInSlide, r as NavControls_default, s as QuickOverview_default, t as registerShortcuts, u as onContextMenu } from "./shortcuts-Bp4nIP1J.js";
//#endregion
//#region node_modules/@slidev/client/internals/NoteStatic.vue
var NoteStatic_default = /* @__PURE__ */ defineComponent({
	__name: "NoteStatic",
	props: {
		no: {},
		class: {},
		clicksContext: {}
	},
	setup(__props) {
		const props = __props;
		const { info } = useSlideInfo(props.no);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(NoteDisplay_default, {
				class: normalizeClass(props.class),
				note: unref(info)?.note,
				"note-html": unref(info)?.noteHTML,
				"clicks-context": __props.clicksContext
			}, null, 8, [
				"class",
				"note",
				"note-html",
				"clicks-context"
			]);
		};
	}
});
//#endregion
//#region node_modules/@slidev/client/internals/ScreenCaptureMirror.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = {
	"h-full": "",
	"w-full": ""
};
var _hoisted_2$2 = {
	key: 0,
	"w-full": "",
	"h-full": "",
	flex: "~ col gap-4 items-center justify-center"
};
//#endregion
//#region node_modules/@slidev/client/internals/ScreenCaptureMirror.vue
var ScreenCaptureMirror_default = /* @__PURE__ */ defineComponent({
	__name: "ScreenCaptureMirror",
	setup(__props) {
		const video = useTemplateRef("video");
		const stream = shallowRef(null);
		const started = shallowRef(false);
		async function startCapture() {
			stream.value = await navigator.mediaDevices.getDisplayMedia({
				video: { cursor: "always" },
				audio: false,
				selfBrowserSurface: "include",
				preferCurrentTab: false
			});
			video.value.srcObject = stream.value;
			video.value.play();
			started.value = true;
			stream.value.addEventListener("inactive", () => {
				video.value.srcObject = null;
				started.value = false;
			});
			stream.value.addEventListener("ended", () => {
				video.value.srcObject = null;
				started.value = false;
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$2, [withDirectives(createBaseVNode("video", {
				ref_key: "video",
				ref: video,
				class: "w-full h-full object-contain"
			}, null, 512), [[vShow, started.value]]), !started.value ? (openBlock(), createElementBlock("div", _hoisted_2$2, [_cache[0] || (_cache[0] = createBaseVNode("div", { op50: "" }, [
				createTextVNode(" Use screen capturing to mirror your main screen back to presenter view."),
				createBaseVNode("br"),
				createTextVNode(" Click the button below and "),
				createBaseVNode("b", null, "select your other monitor or window"),
				createTextVNode(". ")
			], -1)), createBaseVNode("button", {
				class: "slidev-form-button",
				onClick: startCapture
			}, " Start Screen Mirroring ")])) : createCommentVNode("v-if", true)]);
		};
	}
});
//#endregion
//#region node_modules/@slidev/client/internals/TimerInlined.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { class: "w-22px cursor-pointer" };
var _hoisted_2$1 = { class: "group-not-hover:hidden flex flex-col items-center" };
var _hoisted_3$1 = {
	key: 0,
	class: "i-carbon:pause text-lg"
};
var _hoisted_4$1 = {
	key: 1,
	class: "i-carbon:play"
};
var _hoisted_5$1 = { class: "text-3xl px-3 my-auto font-mono" };
//#endregion
//#region node_modules/@slidev/client/internals/TimerInlined.vue
var TimerInlined_default = /* @__PURE__ */ defineComponent({
	__name: "TimerInlined",
	setup(__props) {
		const { status, percentage, mode, timer, reset, toggle } = useTimer();
		const color = computed(() => {
			if (status.value === "stopped") return "op50";
			if (status.value === "paused") return "text-blue6 dark:text-blue3";
			if (percentage.value > 100) return "text-red6 dark:text-red3";
			else if (percentage.value > 80) return "text-yellow6 dark:text-yellow3";
			else return "text-green6 dark:text-green3";
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(["group flex items-center justify-center pl-4 select-none", color.value]) }, [createBaseVNode("div", _hoisted_1$1, [createBaseVNode("div", { class: normalizeClass(["group-hover:hidden text-2xl", unref(mode) === "countdown" ? "i-carbon:timer" : "i-carbon:time"]) }, null, 2), createBaseVNode("div", _hoisted_2$1, [createBaseVNode("div", {
				class: "relative op-80 hover:op-100",
				onClick: _cache[0] || (_cache[0] = (...args) => unref(toggle) && unref(toggle)(...args))
			}, [unref(status) === "running" ? (openBlock(), createElementBlock("div", _hoisted_3$1)) : (openBlock(), createElementBlock("div", _hoisted_4$1))]), createBaseVNode("div", {
				class: "op-80 hover:op-100",
				onClick: _cache[1] || (_cache[1] = (...args) => unref(reset) && unref(reset)(...args))
			}, [..._cache[2] || (_cache[2] = [createBaseVNode("div", { class: "i-carbon:renew" }, null, -1)])])])]), createBaseVNode("div", _hoisted_5$1, [
				unref(timer).h ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("span", null, toDisplayString(unref(timer).h), 1), _cache[3] || (_cache[3] = createBaseVNode("span", { op50: "" }, ":", -1))], 64)) : createCommentVNode("v-if", true),
				createBaseVNode("span", null, toDisplayString(unref(timer).m), 1),
				_cache[4] || (_cache[4] = createBaseVNode("span", { op50: "" }, ":", -1)),
				createBaseVNode("span", null, toDisplayString(unref(timer).s), 1)
			])], 2);
		};
	}
});
//#endregion
//#region node_modules/@slidev/client/pages/presenter.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "bg-main h-full slidev-presenter grid grid-rows-[max-content_1fr] of-hidden" };
var _hoisted_2 = {
	flex: "~ gap-4 items-center",
	border: "b main",
	p1: ""
};
var _hoisted_3 = { class: "relative grid-section next flex flex-col p-2 lg:p-4" };
var _hoisted_4 = {
	key: 2,
	class: "h-full flex justify-center items-center"
};
var _hoisted_5 = {
	key: 3,
	class: "h-full grid grid-rows-[1fr_min-content]"
};
//#endregion
//#region node_modules/@slidev/client/pages/presenter.vue
var presenter_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "presenter",
	setup(__props) {
		const inFocus = useWindowFocus();
		const main = ref();
		const gridContainer = ref();
		const noteSection = ref();
		const bottomSection = ref();
		registerShortcuts();
		useSwipeControls(main);
		useWakeLock();
		const { clicksContext, currentSlideNo, currentSlideRoute, hasNext, nextRoute, slides, getPrimaryClicks } = useNav();
		const { isDrawing } = useDrawings();
		useHead({ title: `Presenter - ${slidesTitle}` });
		ref(false);
		const clicksCtxMap = computed(() => slides.value.map((route) => {
			const clicks = ref(0);
			return {
				context: createClicksContextBase(clicks, route?.meta.slide?.frontmatter.clicksStart ?? 0, route?.meta.clicks),
				clicks
			};
		}));
		const nextFrame = computed(() => {
			if (clicksContext.value.current < clicksContext.value.total) return [currentSlideRoute.value, clicksContext.value.current + 1];
			else if (hasNext.value) return [nextRoute.value, 0];
			else return null;
		});
		const nextFrameClicksCtx = computed(() => {
			return nextFrame.value && clicksCtxMap.value[nextFrame.value[0].no - 1];
		});
		watch(nextFrame, () => {
			if (nextFrameClicksCtx.value && nextFrame.value) nextFrameClicksCtx.value.clicks.value = nextFrame.value[1];
		}, { immediate: true });
		const mainSlideMode = useLocalStorage("slidev-presenter-main-slide-mode", "slides");
		const notesWidth = useLocalStorage("slidev-presenter-notes-width", 360);
		const notesRowSize = useLocalStorage("slidev-presenter-notes-row-size", 280);
		const bottomSectionHeight = ref(0);
		const isResizingNotes = ref(false);
		const isResizingNotesRow = ref(false);
		const resizeStartX = ref(0);
		const resizeStartWidth = ref(360);
		const resizeStartY = ref(0);
		const resizeStartRowSize = ref(280);
		const RESIZER_LIMITS = {
			minNotesWidth: 240,
			maxNotesWidth: 720,
			minNotesRowSize: 160,
			maxNotesWidthRatio: .7,
			maxNotesRowHeightRatio: .75
		};
		const isLayout1Wide = useMediaQuery("(min-aspect-ratio: 1/1)");
		const isLayout1Stacked = useMediaQuery("(max-aspect-ratio: 3/5)");
		const isNotesOnRight = computed(() => presenterLayout.value === 1 && isLayout1Wide.value);
		const isNotesResizable = computed(() => !(presenterLayout.value === 1 && isLayout1Stacked.value));
		const isNotesRowResizable = computed(() => presenterLayout.value === 1 && !isLayout1Stacked.value || presenterLayout.value === 2 || presenterLayout.value === 3);
		const isNotesOnBottom = computed(() => presenterLayout.value === 1 && !isLayout1Stacked.value);
		function clampNotesWidth(width) {
			if (!Number.isFinite(width)) return RESIZER_LIMITS.minNotesWidth;
			return Math.max(RESIZER_LIMITS.minNotesWidth, Math.min(RESIZER_LIMITS.maxNotesWidth, Math.round(width)));
		}
		function updateNotesWidthFromPointer(clientX) {
			const container = gridContainer.value;
			if (!container) return;
			const rect = container.getBoundingClientRect();
			const deltaX = clientX - resizeStartX.value;
			const nextWidth = clampNotesWidth(isNotesOnRight.value ? resizeStartWidth.value - deltaX : resizeStartWidth.value + deltaX);
			const maxByViewport = Math.round(rect.width * RESIZER_LIMITS.maxNotesWidthRatio);
			notesWidth.value = Math.min(nextWidth, Math.max(RESIZER_LIMITS.minNotesWidth, maxByViewport));
		}
		function onNotesResizeStart(e) {
			if (!isNotesResizable.value) return;
			if (e.button !== 0) return;
			e.preventDefault();
			resizeStartX.value = e.clientX;
			resizeStartWidth.value = notesWidth.value;
			isResizingNotes.value = true;
		}
		function clampNotesRowSize(size) {
			if (!Number.isFinite(size)) return RESIZER_LIMITS.minNotesRowSize;
			return Math.max(RESIZER_LIMITS.minNotesRowSize, Math.round(size));
		}
		function updateNotesRowSizeFromPointer(clientY) {
			const container = gridContainer.value;
			if (!container) return;
			const rect = container.getBoundingClientRect();
			const deltaY = clientY - resizeStartY.value;
			const proposed = isNotesOnBottom.value ? resizeStartRowSize.value - deltaY : resizeStartRowSize.value + deltaY;
			const maxByViewport = Math.round(rect.height * RESIZER_LIMITS.maxNotesRowHeightRatio);
			notesRowSize.value = Math.min(clampNotesRowSize(proposed), Math.max(RESIZER_LIMITS.minNotesRowSize, maxByViewport));
		}
		function onNotesRowResizeStart(e) {
			if (!isNotesRowResizable.value) return;
			if (e.button !== 0) return;
			e.preventDefault();
			const currentHeight = presenterLayout.value === 2 ? main.value?.getBoundingClientRect().height : noteSection.value?.getBoundingClientRect().height;
			resizeStartY.value = e.clientY;
			resizeStartRowSize.value = clampNotesRowSize(currentHeight ?? notesRowSize.value);
			isResizingNotesRow.value = true;
		}
		function updateBottomSectionHeight() {
			const element = bottomSection.value;
			if (!element) return;
			bottomSectionHeight.value = Math.round(element.getBoundingClientRect().height);
		}
		function stopResizing() {
			isResizingNotes.value = false;
			isResizingNotesRow.value = false;
		}
		function syncResizerLayoutState() {
			updateBottomSectionHeight();
			normalizeResizerState();
		}
		useEventListener(window, "pointermove", (e) => {
			if (isResizingNotes.value) updateNotesWidthFromPointer(e.clientX);
			if (isResizingNotesRow.value) updateNotesRowSizeFromPointer(e.clientY);
		});
		useEventListener(window, "pointerup", stopResizing);
		useEventListener(window, "pointercancel", stopResizing);
		onMounted(() => {
			syncResizerLayoutState();
		});
		useEventListener(window, "resize", () => {
			syncResizerLayoutState();
		});
		function normalizeResizerState() {
			notesWidth.value = clampNotesWidth(notesWidth.value);
			notesRowSize.value = clampNotesRowSize(notesRowSize.value);
			const container = gridContainer.value;
			if (!container) return;
			const rect = container.getBoundingClientRect();
			const maxWidth = Math.round(rect.width * RESIZER_LIMITS.maxNotesWidthRatio);
			const maxRowSize = Math.round(rect.height * RESIZER_LIMITS.maxNotesRowHeightRatio);
			notesWidth.value = Math.min(notesWidth.value, Math.max(RESIZER_LIMITS.minNotesWidth, maxWidth));
			notesRowSize.value = Math.min(notesRowSize.value, Math.max(RESIZER_LIMITS.minNotesRowSize, maxRowSize));
		}
		const SideEditor = shallowRef();
		onMounted(() => {
			const mouse = useMousePosInSlide();
			const focus = useWindowFocus();
			watchEffect(() => {
				if (!mouse.value || !focus.value || isDrawing.value || !showPresenterCursor.value) state.cursor = void 0;
				else state.cursor = {
					...mouse.value,
					style: cursorStyle.value
				};
			});
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [
				createBaseVNode("div", _hoisted_1, [createBaseVNode("div", null, [createVNode(CurrentProgressBar_default), createVNode(TimerBar_default)]), createBaseVNode("div", {
					ref_key: "gridContainer",
					ref: gridContainer,
					class: normalizeClass(["grid-container", `layout${unref(presenterLayout)}`]),
					style: normalizeStyle({
						"--slidev-presenter-notes-width": `${unref(notesWidth)}px`,
						"--slidev-presenter-notes-row-size": `${unref(notesRowSize)}px`,
						"--slidev-presenter-bottom-height": `${bottomSectionHeight.value}px`
					})
				}, [
					createCommentVNode(" Unified vertical resizer for wide layout "),
					isNotesResizable.value && isNotesOnRight.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: "notes-vertical-resizer",
						role: "separator",
						"aria-orientation": "vertical",
						title: "Resize notes panel",
						onPointerdown: onNotesResizeStart
					}, null, 32)) : createCommentVNode("v-if", true),
					createCommentVNode(" Unified vertical resizer for layout 3 "),
					isNotesResizable.value && unref(presenterLayout) === 3 ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: "notes-vertical-resizer-left",
						role: "separator",
						"aria-orientation": "vertical",
						title: "Resize notes panel",
						onPointerdown: onNotesResizeStart
					}, null, 32)) : createCommentVNode("v-if", true),
					createBaseVNode("div", {
						ref_key: "main",
						ref: main,
						class: "relative grid-section main flex flex-col"
					}, [
						createBaseVNode("div", _hoisted_2, [
							_cache[3] || (_cache[3] = createBaseVNode("span", {
								op50: "",
								px2: ""
							}, "Current", -1)),
							_cache[4] || (_cache[4] = createBaseVNode("div", { "flex-auto": "" }, null, -1)),
							createVNode(SegmentControl_default, {
								modelValue: unref(mainSlideMode),
								"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(mainSlideMode) ? mainSlideMode.value = $event : null),
								options: [{
									label: "Slides",
									value: "slides"
								}, {
									label: "Screen Mirror",
									value: "mirror"
								}]
							}, null, 8, ["modelValue"])
						]),
						unref(mainSlideMode) === "mirror" ? (openBlock(), createBlock(ScreenCaptureMirror_default, { key: 0 })) : createCommentVNode("v-if", true),
						createCommentVNode(" We use v-show here to still infer the clicks context "),
						withDirectives(createVNode(SlideContainer_default, {
							key: "main",
							class: "p-2 lg:p-4 flex-auto",
							"is-main": "",
							onContextmenu: unref(onContextMenu)
						}, {
							default: withCtx(() => [createVNode(SlidesShow_default, { "render-context": "presenter" }), createVNode(LaserPointer_default)]),
							_: 1
						}, 8, ["onContextmenu"]), [[vShow, unref(mainSlideMode) === "slides"]]),
						(openBlock(), createBlock(ClicksSlider_default, {
							key: unref(currentSlideRoute)?.no,
							"clicks-context": unref(getPrimaryClicks)(unref(currentSlideRoute)),
							class: "w-full pb2 px4 flex-none"
						}, null, 8, ["clicks-context"]))
					], 512),
					createBaseVNode("div", _hoisted_3, [
						isNotesRowResizable.value && unref(presenterLayout) === 2 ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: "notes-row-resizer top-[-6px]",
							role: "separator",
							"aria-orientation": "horizontal",
							title: "Resize notes panel height",
							onPointerdown: onNotesRowResizeStart
						}, null, 32)) : createCommentVNode("v-if", true),
						nextFrame.value && nextFrameClicksCtx.value ? (openBlock(), createBlock(SlideContainer_default, { key: "next" }, {
							default: withCtx(() => [(openBlock(), createBlock(SlideWrapper_default, {
								key: nextFrame.value[0].no,
								"clicks-context": nextFrameClicksCtx.value.context,
								route: nextFrame.value[0],
								"render-context": "previewNext"
							}, null, 8, ["clicks-context", "route"]))]),
							_: 1
						})) : (openBlock(), createElementBlock("div", _hoisted_4, [..._cache[5] || (_cache[5] = [createBaseVNode("div", { class: "text-gray-500" }, " End of the presentation ", -1)])])),
						_cache[6] || (_cache[6] = createBaseVNode("div", { class: "absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm" }, " Next ", -1))
					]),
					createBaseVNode("div", {
						ref_key: "noteSection",
						ref: noteSection,
						class: "relative grid-section note overflow-hidden"
					}, [
						isNotesResizable.value && !isNotesOnRight.value && unref(presenterLayout) !== 3 ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: "notes-resizer right-[-6px]",
							role: "separator",
							"aria-orientation": "vertical",
							title: "Resize notes panel",
							onPointerdown: onNotesResizeStart
						}, null, 32)) : createCommentVNode("v-if", true),
						isNotesRowResizable.value && unref(presenterLayout) !== 2 ? (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(["notes-row-resizer", isNotesOnBottom.value ? "top-[-6px]" : "bottom-[-6px]"]),
							role: "separator",
							"aria-orientation": "horizontal",
							title: "Resize notes panel height",
							onPointerdown: onNotesRowResizeStart
						}, null, 34)) : createCommentVNode("v-if", true),
						SideEditor.value && unref(showEditor) ? (openBlock(), createBlock(unref(SideEditor), {
							key: 2,
							class: "h-full"
						})) : (openBlock(), createElementBlock("div", _hoisted_5, [
							(openBlock(), createBlock(NoteStatic_default, {
								key: `static-${unref(currentSlideNo)}`,
								no: unref(currentSlideNo),
								class: "w-full max-w-full h-full overflow-auto p-2 lg:p-4",
								style: normalizeStyle({ fontSize: `${unref(presenterNotesFontSize)}em` }),
								"clicks-context": unref(clicksContext)
							}, null, 8, [
								"no",
								"style",
								"clicks-context"
							])),
							_cache[10] || (_cache[10] = createBaseVNode("div", {
								"border-t": "",
								"border-main": ""
							}, null, -1)),
							createBaseVNode("div", { class: normalizeClass(["py-1 px-2 text-sm transition", unref(inFocus) ? "" : "op25"]) }, [
								createVNode(IconButton_default, {
									title: "Increase font size",
									onClick: unref(increasePresenterFontSize)
								}, {
									default: withCtx(() => [..._cache[7] || (_cache[7] = [createBaseVNode("div", { class: "i-carbon:zoom-in" }, null, -1)])]),
									_: 1
								}, 8, ["onClick"]),
								createVNode(IconButton_default, {
									title: "Decrease font size",
									onClick: unref(decreasePresenterFontSize)
								}, {
									default: withCtx(() => [..._cache[8] || (_cache[8] = [createBaseVNode("div", { class: "i-carbon:zoom-out" }, null, -1)])]),
									_: 1
								}, 8, ["onClick"]),
								createCommentVNode("v-if", true)
							], 2)
						]))
					], 512),
					createBaseVNode("div", {
						ref_key: "bottomSection",
						ref: bottomSection,
						class: "grid-section bottom flex"
					}, [
						createVNode(NavControls_default, {
							persist: true,
							class: normalizeClass(["transition", unref(inFocus) ? "" : "op25"])
						}, null, 8, ["class"]),
						_cache[11] || (_cache[11] = createBaseVNode("div", { "flex-auto": "" }, null, -1)),
						createVNode(TimerInlined_default)
					], 512),
					(openBlock(), createBlock(DrawingControls_default, { key: 2 }))
				], 6)]),
				createVNode(Goto_default),
				createVNode(QuickOverview_default),
				createVNode(ContextMenu_default)
			], 64);
		};
	}
}), [["__scopeId", "data-v-0c4ec578"]]);
//#endregion
export { presenter_default as default };
