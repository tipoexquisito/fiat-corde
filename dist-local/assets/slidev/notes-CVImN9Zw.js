import { C as defineComponent, L as openBlock, X as withCtx, b as createTextVNode, g as createBaseVNode, h as computed, ht as unref, p as Fragment, q as watch, st as ref, vt as normalizeStyle, x as createVNode, y as createElementBlock, yt as toDisplayString } from "../modules/shiki-V2eyNvW-.js";
import { h as useLocalStorage } from "../modules/vue-j1EMyUNA.js";
import { U as createClicksContextBase, X as slidesTitle, t as useNav, u as fullscreen } from "../useNav-BevVU56q.js";
import { o as state, p as useHead } from "../index-BrwRSUAk.js";
import { t as IconButton_default } from "./IconButton-CNvL6I62.js";
import { t as Modal_default } from "./Modal-5x7kcYR_.js";
import { n as ClicksSlider_default, t as NoteDisplay_default } from "./NoteDisplay-C_9E7gEd.js";
import { r as CurrentProgressBar_default, t as TimerBar_default } from "./TimerBar-CIeAoV39.js";
//#region node_modules/@slidev/client/pages/notes.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex my-1" };
var _hoisted_2 = { class: "h-full flex flex-col" };
var _hoisted_3 = {
	class: "flex-none border-t border-main",
	px3: "",
	py2: ""
};
var _hoisted_4 = { class: "flex-none border-t border-main" };
var _hoisted_5 = { class: "flex gap-1 items-center px-6 py-3" };
var _hoisted_6 = {
	key: 0,
	class: "i-carbon:minimize"
};
var _hoisted_7 = {
	key: 1,
	class: "i-carbon:maximize"
};
var _hoisted_8 = { class: "px2 my-auto" };
var _hoisted_9 = { class: "text-lg" };
var _hoisted_10 = { class: "opacity-50 text-sm" };
//#endregion
//#region node_modules/@slidev/client/pages/notes.vue
var notes_default = /* @__PURE__ */ defineComponent({
	__name: "notes",
	setup(__props) {
		useHead({ title: `Notes - ${slidesTitle}` });
		const { slides, total } = useNav();
		const { isFullscreen, toggle: toggleFullscreen } = fullscreen;
		const scroller = ref();
		const fontSize = useLocalStorage("slidev-notes-font-size", 18);
		const pageNo = computed(() => state.page);
		const showHelp = ref(false);
		const currentRoute = computed(() => slides.value.find((i) => i.no === pageNo.value));
		watch(pageNo, () => {
			scroller.value?.scrollTo({
				left: 0,
				top: 0,
				behavior: "smooth"
			});
			window.scrollTo({
				left: 0,
				top: 0,
				behavior: "smooth"
			});
		});
		function increaseFontSize() {
			fontSize.value = fontSize.value + 1;
		}
		function decreaseFontSize() {
			fontSize.value = fontSize.value - 1;
		}
		const clicksContext = computed(() => {
			const clicks = state.clicks;
			const total = state.clicksTotal;
			return createClicksContextBase(ref(clicks), void 0, total);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(Modal_default, {
				modelValue: showHelp.value,
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => showHelp.value = $event),
				class: "px-6 py-4 flex flex-col gap-2"
			}, {
				default: withCtx(() => [
					_cache[3] || (_cache[3] = createBaseVNode("div", { class: "flex gap-2 text-xl" }, [createBaseVNode("div", { class: "i-carbon:information my-auto" }), createTextVNode(" Help ")], -1)),
					_cache[4] || (_cache[4] = createBaseVNode("div", { class: "prose dark:prose-invert" }, [createBaseVNode("p", null, "This is the hands-free live notes viewer."), createBaseVNode("p", null, "It's designed to be used in a separate view or device. The progress is controlled by and auto synced with the main presenter or slide.")], -1)),
					createBaseVNode("div", _hoisted_1, [createBaseVNode("button", {
						class: "slidev-form-button",
						onClick: _cache[0] || (_cache[0] = ($event) => showHelp.value = false)
					}, " Close ")])
				]),
				_: 1
			}, 8, ["modelValue"]), createBaseVNode("div", _hoisted_2, [
				createVNode(CurrentProgressBar_default, {
					"clicks-context": clicksContext.value,
					current: pageNo.value
				}, null, 8, ["clicks-context", "current"]),
				createVNode(TimerBar_default),
				createBaseVNode("div", {
					ref_key: "scroller",
					ref: scroller,
					class: "px-5 py-3 flex-auto h-full overflow-auto",
					style: normalizeStyle({ fontSize: `${unref(fontSize)}px` })
				}, [createVNode(NoteDisplay_default, {
					note: currentRoute.value?.meta.slide.note,
					"note-html": currentRoute.value?.meta.slide.noteHTML,
					placeholder: `No notes for Slide ${pageNo.value}.`,
					"clicks-context": clicksContext.value,
					"auto-scroll": true
				}, null, 8, [
					"note",
					"note-html",
					"placeholder",
					"clicks-context"
				])], 4),
				createBaseVNode("div", _hoisted_3, [createVNode(ClicksSlider_default, {
					"clicks-context": clicksContext.value,
					readonly: ""
				}, null, 8, ["clicks-context"])]),
				createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [
					createVNode(IconButton_default, {
						title: unref(isFullscreen) ? "Close fullscreen" : "Enter fullscreen",
						onClick: unref(toggleFullscreen)
					}, {
						default: withCtx(() => [unref(isFullscreen) ? (openBlock(), createElementBlock("div", _hoisted_6)) : (openBlock(), createElementBlock("div", _hoisted_7))]),
						_: 1
					}, 8, ["title", "onClick"]),
					createVNode(IconButton_default, {
						title: "Increase font size",
						onClick: increaseFontSize
					}, {
						default: withCtx(() => [..._cache[5] || (_cache[5] = [createBaseVNode("div", { class: "i-carbon:zoom-in" }, null, -1)])]),
						_: 1
					}),
					createVNode(IconButton_default, {
						title: "Decrease font size",
						onClick: decreaseFontSize
					}, {
						default: withCtx(() => [..._cache[6] || (_cache[6] = [createBaseVNode("div", { class: "i-carbon:zoom-out" }, null, -1)])]),
						_: 1
					}),
					createVNode(IconButton_default, {
						title: "Edit notes",
						to: "/notes-edit",
						target: "_blank"
					}, {
						default: withCtx(() => [..._cache[7] || (_cache[7] = [createBaseVNode("div", { class: "i-carbon:edit" }, null, -1)])]),
						_: 1
					}),
					createVNode(IconButton_default, {
						title: "Help",
						class: "rounded-full",
						onClick: _cache[2] || (_cache[2] = ($event) => showHelp.value = true)
					}, {
						default: withCtx(() => [..._cache[8] || (_cache[8] = [createBaseVNode("div", { class: "i-carbon:help" }, null, -1)])]),
						_: 1
					}),
					_cache[9] || (_cache[9] = createBaseVNode("div", { class: "flex-auto" }, null, -1)),
					createBaseVNode("div", _hoisted_8, [createBaseVNode("span", _hoisted_9, toDisplayString(pageNo.value), 1), createBaseVNode("span", _hoisted_10, " / " + toDisplayString(unref(total)), 1)])
				])])
			])], 64);
		};
	}
});
//#endregion
export { notes_default as default };
