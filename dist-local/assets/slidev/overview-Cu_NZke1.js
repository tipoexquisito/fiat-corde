import { C as defineComponent, F as onMounted, I as onUnmounted, L as openBlock, X as withCtx, _ as createBlock, at as reactive, g as createBaseVNode, gt as normalizeClass, h as computed, ht as unref, j as nextTick, p as Fragment, st as ref, ut as shallowRef, v as createCommentVNode, vt as normalizeStyle, x as createVNode, y as createElementBlock, yt as toDisplayString, z as renderList } from "../modules/shiki-V2eyNvW-.js";
import { B as useRouter, z as useRoute } from "../modules/vue-j1EMyUNA.js";
import { B as getSlidePath, R as windowSize, W as createFixedClicks, X as slidesTitle, q as slideAspect, t as useNav } from "../useNav-BevVU56q.js";
import { t as _plugin_vue_export_helper_default } from "../_plugin-vue_export-helper-BOaGB7Aw.js";
import { l as CLICKS_MAX } from "./context-00fxQF-V.js";
import { d as isDark, f as toggleDark, p as useHead, u as isColorSchemaConfigured } from "../index-BrwRSUAk.js";
import { t as IconButton_default } from "./IconButton-CNvL6I62.js";
import { n as ClicksSlider_default } from "./NoteDisplay-C_9E7gEd.js";
import { n as moon_default, r as sun_default } from "../modules/unplugin-icons-d091GBOg.js";
import { i as SlideContainer_default, o as DrawingPreview_default, t as SlideWrapper_default } from "../SlideWrapper-DdpLlR2W.js";
import { t as NoteEditable_default } from "./NoteEditable-CgD0RNJD.js";
//#region node_modules/@slidev/client/pages/overview.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "h-screen w-screen of-hidden flex" };
var _hoisted_2 = {
	key: 0,
	class: "grid grid-rows-[auto_max-content] border-r border-main select-none max-h-full h-full"
};
var _hoisted_3 = { class: "relative" };
var _hoisted_4 = {
	class: "absolute left-0 top-0 bottom-0 w-200 flex flex-col flex-auto items-end group p-6px md:p-10px gap-1 max-h-full of-x-visible of-y-auto",
	style: { "direction": "rtl" }
};
var _hoisted_5 = ["onClick"];
var _hoisted_6 = {
	p2: "",
	border: "t main"
};
var _hoisted_7 = { class: "flex flex-col gap-1 mx-1 items-end" };
var _hoisted_8 = {
	key: 0,
	class: "flex items-end gap-2"
};
var _hoisted_9 = ["onClick"];
var _hoisted_10 = ["onDblclick"];
var _hoisted_11 = {
	key: 2,
	class: "select-none absolute bottom-0 right-0 bg-main rounded-tl p2 op35 text-xs"
};
var _hoisted_12 = {
	key: 1,
	class: "absolute z-2 top-0 right-0 px3 py1.5 border-b border-l rounded-lb bg-main/80 backdrop-blur border-main select-none"
};
var _hoisted_13 = { class: "text-xs op50" };
var cardWidth = 450;
//#endregion
//#region node_modules/@slidev/client/pages/overview.vue
var overview_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "overview",
	setup(__props) {
		useHead({ title: `Overview - ${slidesTitle}` });
		const currentRoute = useRoute();
		const router = useRouter();
		const { openInEditor, slides, isEmbedded } = useNav();
		const isPreviewMode = computed(() => currentRoute.query.mode === "preview");
		const isEmbeddedPreviewMode = computed(() => isPreviewMode.value && isEmbedded.value);
		const overviewCardWidth = computed(() => {
			if (!isPreviewMode.value) return cardWidth;
			if (isEmbeddedPreviewMode.value) return Math.max(0, windowSize.width.value - 16);
			return Math.min(900, Math.max(320, windowSize.width.value - 160));
		});
		const overviewSlideHeight = computed(() => overviewCardWidth.value / slideAspect.value);
		const blocks = reactive(/* @__PURE__ */ new Map());
		const slidePreviews = reactive(/* @__PURE__ */ new Map());
		const activeBlocks = ref([]);
		const scroller = ref();
		const edittingNote = ref(null);
		let ignoreOverviewScrollUntil = 0;
		let pendingOverviewScrollNo;
		let overviewScrollTimer;
		const wordCounts = computed(() => slides.value.map((route) => wordCount(route.meta?.slide?.note || "")));
		const totalWords = computed(() => wordCounts.value.reduce((a, b) => a + b, 0));
		const totalClicks = computed(() => slides.value.map((route) => getSlideClicks(route)).reduce((a, b) => a + b, 0));
		const slideNoDigits = computed(() => String(Math.max(1, slides.value.length)).length);
		const activeSlide = shallowRef();
		const clicksContextMap = /* @__PURE__ */ new WeakMap();
		function getClicksContext(route) {
			if (!clicksContextMap.has(route)) clicksContextMap.set(route, createFixedClicks(route, CLICKS_MAX));
			return clicksContextMap.get(route);
		}
		function getSlideClicks(route) {
			return route.meta?.clicks || getClicksContext(route)?.total;
		}
		function toggleRoute(route) {
			if (activeSlide.value === route) activeSlide.value = void 0;
			else activeSlide.value = route;
		}
		function wordCount(str) {
			const m = str.match(/[\w`'\-\u0392-\u03C9\u00C0-\u00FF\u0600-\u06FF\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF\u3040-\u309F\uAC00-\uD7AF]+/g);
			let count = 0;
			if (!m) return 0;
			for (let i = 0; i < m.length; i++) if (m[i].charCodeAt(0) >= 19968) count += m[i].length;
			else count += 1;
			return count;
		}
		function checkActiveBlocks() {
			const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
			let active;
			const fullyVisible = [];
			for (const [idx, el] of blocks.entries()) {
				const rect = el.getBoundingClientRect();
				const visibleHeight = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0));
				if (visibleHeight === 0) continue;
				if (visibleHeight >= rect.height) fullyVisible.push(idx);
				if (!active || visibleHeight > active.visibleHeight) active = {
					idx,
					visibleHeight
				};
			}
			activeBlocks.value = fullyVisible.length ? fullyVisible : active ? [active.idx] : [];
		}
		function openSlideInNewTab(path) {
			const a = document.createElement("a");
			a.target = "_blank";
			a.href = "/" + path.slice(1);
			a.click();
		}
		function openSlideInBrowser(path) {
			const url = new URL("/" + path.slice(1), location.href).href;
			if (isEmbedded.value) {
				window.parent.postMessage({
					target: "slidev",
					sender: "slidev",
					type: "open-external",
					url
				}, "*");
				return;
			}
			openSlideInNewTab(path);
		}
		function scrollToSlide(idx) {
			const el = blocks.get(idx);
			if (el) el.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}
		function getSlidePreviewTop(idx) {
			const el = slidePreviews.get(idx) || blocks.get(idx);
			if (!el || !scroller.value) return null;
			const scrollerRect = scroller.value.getBoundingClientRect();
			return el.getBoundingClientRect().top - scrollerRect.top + scroller.value.scrollTop;
		}
		function scrollSlideNoIntoCenter(no) {
			if (!scroller.value || slides.value.length === 0) return;
			const clamped = Math.min(Math.max(no, 1), slides.value.length);
			const idx = Math.floor(clamped) - 1;
			const progress = clamped - (idx + 1);
			const start = getSlidePreviewTop(idx);
			const end = getSlidePreviewTop(idx + 1);
			if (start == null) return;
			const top = start + (end == null ? 0 : (end - start) * progress) - scroller.value.clientHeight * .5;
			if (Math.abs(scroller.value.scrollTop - top) < 1) return;
			scroller.value.scrollTo({ top });
		}
		function getInitialSlideNo() {
			const value = currentRoute.query.slideNo;
			const no = Number(Array.isArray(value) ? value[0] : value);
			return Number.isFinite(no) && no > 0 ? no : void 0;
		}
		function updateSlideNoQuery(no) {
			if (!isEmbeddedPreviewMode.value) return;
			const slideNo = Number(no.toFixed(3)).toString();
			if (currentRoute.query.slideNo === slideNo) return;
			router.replace({ query: {
				...currentRoute.query,
				slideNo
			} });
		}
		function getCenteredSlideNo() {
			if (!scroller.value || slides.value.length === 0) return null;
			const center = scroller.value.scrollTop + scroller.value.clientHeight * .5;
			const tops = slides.value.map((_, idx) => getSlidePreviewTop(idx)).filter((top) => top != null);
			if (tops.length === 0) return null;
			if (tops.length === 1 || center <= tops[0]) return 1;
			for (let i = 1; i < tops.length; i++) if (center <= tops[i]) {
				const span = Math.max(1, tops[i] - tops[i - 1]);
				return i + (center - tops[i - 1]) / span;
			}
			return slides.value.length;
		}
		function postOverviewScroll(no) {
			pendingOverviewScrollNo = no;
			if (overviewScrollTimer) return;
			overviewScrollTimer = setTimeout(() => {
				overviewScrollTimer = void 0;
				const no = pendingOverviewScrollNo;
				pendingOverviewScrollNo = void 0;
				if (no == null) return;
				updateSlideNoQuery(no);
				if (Date.now() < ignoreOverviewScrollUntil) return;
				window.parent.postMessage({
					target: "slidev",
					sender: "slidev",
					type: "overview-scroll",
					no
				}, "*");
			}, 50);
		}
		function onOverviewScroll() {
			checkActiveBlocks();
			if (!isEmbeddedPreviewMode.value || Date.now() < ignoreOverviewScrollUntil) return;
			const no = getCenteredSlideNo();
			if (no != null) postOverviewScroll(no);
		}
		function onOverviewMessage({ data }) {
			if (!isEmbeddedPreviewMode.value || data?.target !== "slidev" || data.sender !== "vscode" || data.type !== "overview-scroll") return;
			const no = Number(data.no);
			if (no > 0) {
				ignoreOverviewScrollUntil = Date.now() + 300;
				pendingOverviewScrollNo = void 0;
				updateSlideNoQuery(no);
				scrollSlideNoIntoCenter(no);
			}
		}
		function onMarkerClick(e, clicks, route) {
			const ctx = getClicksContext(route);
			if (ctx.current === clicks) ctx.current = CLICKS_MAX;
			else ctx.current = clicks;
			e.preventDefault();
		}
		function openOverviewSlideSource(e, route) {
			if (e.ctrlKey || e.metaKey) {
				e.preventDefault();
				openSlideInBrowser(getSlidePath(route, false));
				return;
			}
			const slide = route.meta?.slide;
			if (!slide) return;
			window.parent.postMessage({
				target: "slidev",
				type: "command",
				command: "goto",
				args: [slide.filepath, slide.sourceIndex]
			}, "*");
		}
		onMounted(() => {
			window.addEventListener("message", onOverviewMessage);
			const initialSlideNo = isEmbeddedPreviewMode.value ? getInitialSlideNo() : void 0;
			if (initialSlideNo != null) {
				ignoreOverviewScrollUntil = Date.now() + 300;
				scrollSlideNoIntoCenter(initialSlideNo);
			}
			nextTick(() => {
				if (initialSlideNo != null) scrollSlideNoIntoCenter(initialSlideNo);
				checkActiveBlocks();
			});
		});
		onUnmounted(() => {
			window.removeEventListener("message", onOverviewMessage);
			if (overviewScrollTimer) clearTimeout(overviewScrollTimer);
		});
		return (_ctx, _cache) => {
			const _component_carbon_moon = moon_default;
			const _component_carbon_sun = sun_default;
			return openBlock(), createElementBlock("div", _hoisted_1, [
				!unref(isEmbedded) ? (openBlock(), createElementBlock("nav", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(slides), (route, idx) => {
					return openBlock(), createElementBlock("div", {
						key: route.no,
						class: "relative",
						style: { "direction": "ltr" }
					}, [createBaseVNode("button", {
						class: normalizeClass(["relative transition duration-300 w-8 h-8 rounded hover:bg-active hover:op100", activeBlocks.value.includes(idx) ? "op100 text-primary bg-gray:5" : "op20"]),
						onClick: ($event) => scrollToSlide(idx)
					}, [createBaseVNode("div", null, toDisplayString(idx + 1), 1)], 10, _hoisted_5), route.meta?.slide?.title ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(["pointer-events-none select-none absolute left-110% top-50% translate-y--50% ws-nowrap z-label px2 slidev-glass-effect transition duration-400 op0 group-hover:op100", activeBlocks.value.includes(idx) ? "text-primary" : "text-main important-text-op-50"])
					}, toDisplayString(route.meta?.slide?.title), 3)) : createCommentVNode("v-if", true)]);
				}), 128))])]), createBaseVNode("div", _hoisted_6, [!unref(isColorSchemaConfigured) ? (openBlock(), createBlock(IconButton_default, {
					key: 0,
					title: unref(isDark) ? "Switch to light mode theme" : "Switch to dark mode theme",
					onClick: _cache[0] || (_cache[0] = ($event) => unref(toggleDark)())
				}, {
					default: withCtx(() => [unref(isDark) ? (openBlock(), createBlock(_component_carbon_moon, { key: 0 })) : (openBlock(), createBlock(_component_carbon_sun, { key: 1 }))]),
					_: 1
				}, 8, ["title"])) : (openBlock(), createBlock(IconButton_default, {
					key: 1,
					title: unref(isDark) ? "Dark mode" : "Light mode",
					"pointer-events-none": "",
					op50: ""
				}, {
					default: withCtx(() => [unref(isDark) ? (openBlock(), createBlock(_component_carbon_moon, { key: 0 })) : (openBlock(), createBlock(_component_carbon_sun, { key: 1 }))]),
					_: 1
				}, 8, ["title"]))])])) : createCommentVNode("v-if", true),
				createBaseVNode("main", {
					ref_key: "scroller",
					ref: scroller,
					class: "flex-1 h-full of-auto",
					style: normalizeStyle(`grid-template-columns: repeat(auto-fit,minmax(${cardWidth}px,1fr))`),
					onScroll: onOverviewScroll
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(slides), (route, idx) => {
					return openBlock(), createElementBlock("div", {
						key: route.no,
						ref_for: true,
						ref: (el) => blocks.set(idx, el),
						class: normalizeClass(["overview-slide-block relative of-hidden flex gap-4 min-h-50", [idx === 0 && !isEmbeddedPreviewMode.value ? "pt2" : "", isEmbeddedPreviewMode.value ? "justify-center" : "border-t border-main"]])
					}, [
						!isEmbeddedPreviewMode.value ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(["select-none text-right my5 flex flex-col justify-between items-end", isPreviewMode.value ? "w-9" : "w-13"]),
							style: normalizeStyle({ height: `${overviewSlideHeight.value}px` })
						}, [createBaseVNode("div", {
							class: "self-center text-3xl op20 mb2 text-center mr--14px tabular-nums",
							style: normalizeStyle({ width: `${slideNoDigits.value}ch` })
						}, toDisplayString(idx + 1), 5), createBaseVNode("div", _hoisted_7, [createVNode(IconButton_default, {
							class: normalizeClass(["overview-slide-action mr--4 op0", isPreviewMode.value ? "text-lg" : ""]),
							title: "Play in new tab",
							onClick: ($event) => openSlideInNewTab(unref(getSlidePath)(route, false))
						}, {
							default: withCtx(() => [..._cache[4] || (_cache[4] = [createBaseVNode("div", { class: "i-carbon:presentation-file" }, null, -1)])]),
							_: 1
						}, 8, ["class", "onClick"]), createCommentVNode("v-if", true)])], 6)) : createCommentVNode("v-if", true),
						createBaseVNode("div", {
							class: normalizeClass(["flex flex-col", isEmbeddedPreviewMode.value ? "my1 gap-0" : "my5 gap-2"]),
							style: normalizeStyle({ width: `${overviewCardWidth.value}px` })
						}, [
							isEmbeddedPreviewMode.value ? (openBlock(), createElementBlock("div", _hoisted_8, [createBaseVNode("button", {
								type: "button",
								class: "select-none pl-1 text-lg leading-tight op60 tabular-nums hover:op90 hover:underline underline-offset-2",
								onClick: ($event) => openOverviewSlideSource($event, route)
							}, toDisplayString(idx + 1), 9, _hoisted_9), getSlideClicks(route) ? (openBlock(), createBlock(ClicksSlider_default, {
								key: 0,
								active: activeSlide.value === route,
								"clicks-context": getClicksContext(route),
								resettable: "",
								compact: "",
								attached: "",
								class: "ml-auto w-88 min-w-[70%] max-w-[calc(100%-3rem)]",
								onDblclick: ($event) => toggleRoute(route),
								onActivate: ($event) => activeSlide.value = route,
								onReset: _cache[1] || (_cache[1] = ($event) => activeSlide.value = void 0)
							}, null, 8, [
								"active",
								"clicks-context",
								"onDblclick",
								"onActivate"
							])) : createCommentVNode("v-if", true)])) : createCommentVNode("v-if", true),
							createBaseVNode("div", {
								ref_for: true,
								ref: (el) => slidePreviews.set(idx, el),
								class: normalizeClass(["border rounded border-main overflow-hidden bg-main h-max", [isEmbeddedPreviewMode.value && getSlideClicks(route) ? "rounded-tr-0" : "", isEmbeddedPreviewMode.value ? "" : "select-none"]]),
								onDblclick: ($event) => !isEmbeddedPreviewMode.value && openSlideInNewTab(unref(getSlidePath)(route, false))
							}, [(openBlock(), createBlock(SlideContainer_default, {
								key: route.no,
								width: overviewCardWidth.value,
								class: normalizeClass(isEmbeddedPreviewMode.value ? "" : "pointer-events-none important:[&_*]:select-none")
							}, {
								default: withCtx(() => [createVNode(SlideWrapper_default, {
									"clicks-context": getClicksContext(route),
									route,
									"render-context": "overview"
								}, null, 8, ["clicks-context", "route"]), createVNode(DrawingPreview_default, { page: route.no }, null, 8, ["page"])]),
								_: 2
							}, 1032, ["width", "class"]))], 42, _hoisted_10),
							getSlideClicks(route) && !isEmbeddedPreviewMode.value ? (openBlock(), createBlock(ClicksSlider_default, {
								key: 1,
								active: activeSlide.value === route,
								"clicks-context": getClicksContext(route),
								resettable: "",
								class: normalizeClass(["ml-1 w-[calc(100%-0.25rem)]", isPreviewMode.value ? "" : "mt-2"]),
								onDblclick: ($event) => toggleRoute(route),
								onActivate: ($event) => activeSlide.value = route,
								onReset: _cache[2] || (_cache[2] = ($event) => activeSlide.value = void 0)
							}, null, 8, [
								"active",
								"clicks-context",
								"class",
								"onDblclick",
								"onActivate"
							])) : createCommentVNode("v-if", true)
						], 6),
						!isPreviewMode.value ? (openBlock(), createBlock(NoteEditable_default, {
							key: 1,
							no: route.no,
							class: "relative z-1 max-w-250 w-250 text-lg rounded p3",
							"auto-height": true,
							highlight: activeSlide.value === route,
							editing: edittingNote.value === route.no,
							"clicks-context": getClicksContext(route),
							onDblclick: ($event) => edittingNote.value !== route.no ? edittingNote.value = route.no : null,
							"onUpdate:editing": _cache[3] || (_cache[3] = ($event) => edittingNote.value = null),
							onMarkerClick: (e, clicks) => onMarkerClick(e, clicks, route)
						}, null, 8, [
							"no",
							"highlight",
							"editing",
							"clicks-context",
							"onDblclick",
							"onMarkerClick"
						])) : createCommentVNode("v-if", true),
						!isPreviewMode.value && wordCounts.value[idx] > 0 ? (openBlock(), createElementBlock("div", _hoisted_11, toDisplayString(wordCounts.value[idx]) + " words ", 1)) : createCommentVNode("v-if", true)
					], 2);
				}), 128))], 36),
				!unref(isEmbedded) ? (openBlock(), createElementBlock("div", _hoisted_12, [createBaseVNode("div", _hoisted_13, toDisplayString(unref(slides).length) + " slides · " + toDisplayString(totalClicks.value + unref(slides).length - 1) + " clicks · " + toDisplayString(totalWords.value) + " words ", 1)])) : createCommentVNode("v-if", true)
			]);
		};
	}
}), [["__scopeId", "data-v-264c1f43"]]);
//#endregion
export { overview_default as default };
