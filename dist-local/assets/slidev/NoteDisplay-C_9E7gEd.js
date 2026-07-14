import { C as defineComponent, F as onMounted, J as watchEffect, L as openBlock, g as createBaseVNode, gt as normalizeClass, h as computed, ht as unref, j as nextTick, nt as isRef, p as Fragment, q as watch, st as ref, v as createCommentVNode, vt as normalizeStyle, y as createElementBlock, yt as toDisplayString, z as renderList } from "../modules/shiki-V2eyNvW-.js";
import { $ as clamp, et as range } from "../useNav-BevVU56q.js";
import { l as CLICKS_MAX } from "./context-00fxQF-V.js";
//#region node_modules/@slidev/client/internals/ClicksSlider.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["title"];
var _hoisted_2$1 = {
	key: 0,
	"flex-auto": ""
};
var _hoisted_3$1 = { "text-primary": "" };
var _hoisted_4 = {
	op50: "",
	"text-sm": ""
};
var _hoisted_5 = {
	key: 0,
	absolute: "",
	"inset-y-0": "",
	"right-0": "",
	"w-0.5": "",
	"bg-primary": "",
	"z-1": ""
};
//#endregion
//#region node_modules/@slidev/client/internals/ClicksSlider.vue
var ClicksSlider_default = /* @__PURE__ */ defineComponent({
	__name: "ClicksSlider",
	props: {
		clicksContext: {},
		readonly: { type: Boolean },
		active: {
			type: Boolean,
			default: true
		},
		resettable: { type: Boolean },
		compact: { type: Boolean },
		attached: { type: Boolean }
	},
	emits: ["activate", "reset"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const total = computed(() => props.clicksContext.total);
		const start = computed(() => clamp(0, props.clicksContext.clicksStart, total.value));
		const length = computed(() => total.value - start.value + 1);
		const current = computed({
			get() {
				if (props.resettable && !props.active) return -1;
				return props.clicksContext.current > total.value ? -1 : props.clicksContext.current;
			},
			set(value) {
				if (props.resettable && value < 0) {
					emit("reset");
					props.clicksContext.current = CLICKS_MAX;
					return;
				}
				emit("activate");
				props.clicksContext.current = value;
			}
		});
		const isReset = computed(() => props.resettable && current.value < 0);
		const clicksRange = computed(() => range(start.value, total.value + 1));
		const sliderEl = ref();
		let pointerDown;
		function getPointerRatio(event) {
			const rect = sliderEl.value.getBoundingClientRect();
			return (event.clientX - rect.left) / Math.max(1, rect.width);
		}
		function setCurrentFromPointer(event, snap) {
			if (props.readonly || !sliderEl.value || !snap && !(event.buttons & 1)) return;
			const ratio = getPointerRatio(event);
			if (props.resettable && ratio < 0) {
				current.value = -1;
				return;
			}
			const position = clamp(0, ratio, snap ? .999999 : 1) * length.value;
			const currentOffset = clamp(0, current.value - start.value, length.value - 1);
			let next = snap ? start.value + Math.floor(position) : current.value;
			if (!snap && position >= currentOffset + 1.5) next = start.value + Math.floor(position - .5);
			else if (!snap && position < currentOffset - .5) next = start.value + Math.ceil(position - .5);
			current.value = clamp(start.value, next, total.value);
		}
		function onPointerDown(event) {
			if (props.readonly) return;
			sliderEl.value?.setPointerCapture(event.pointerId);
			pointerDown = {
				id: event.pointerId,
				x: event.clientX,
				y: event.clientY
			};
			setCurrentFromPointer(event, true);
		}
		function onPointerMove(event) {
			if (pointerDown?.id === event.pointerId) {
				if (Math.abs(event.clientX - pointerDown.x) <= 3 && Math.abs(event.clientY - pointerDown.y) <= 3) return;
				pointerDown = void 0;
			}
			setCurrentFromPointer(event, false);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(["flex gap-1 select-none", [__props.attached ? "items-end" : "items-center", length.value && props.clicksContext.isMounted ? "" : "op50"]]),
				title: `Clicks in this slide: ${length.value}`
			}, [createBaseVNode("div", { class: normalizeClass(["flex items-center font-mono", [__props.compact ? "gap-1 min-w-0 mr0" : "gap-0.2 min-w-16 mr1", __props.attached ? "h-[22px]" : ""]]) }, [createBaseVNode("div", { class: normalizeClass(["i-carbon:cursor-1 text-sm op50", __props.compact ? "ml-1" : ""]) }, null, 2), current.value >= 0 && current.value !== unref(999999) && __props.active ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [!__props.compact ? (openBlock(), createElementBlock("div", _hoisted_2$1)) : createCommentVNode("v-if", true), createBaseVNode("span", null, [
				createBaseVNode("span", _hoisted_3$1, toDisplayString(current.value), 1),
				_cache[2] || (_cache[2] = createBaseVNode("span", {
					op25: "",
					"text-sm": ""
				}, "/", -1)),
				createBaseVNode("span", _hoisted_4, toDisplayString(total.value), 1)
			])], 64)) : (openBlock(), createElementBlock("div", {
				key: 1,
				op50: "",
				class: normalizeClass(__props.compact ? "" : "flex-auto pl1")
			}, [createBaseVNode("span", {
				class: normalizeClass(__props.compact ? "inline-block text-center" : ""),
				style: normalizeStyle(__props.compact ? {
					width: `${String(total.value).length * 2 + 1}ch`,
					marginLeft: "-0.25ch"
				} : void 0)
			}, toDisplayString(total.value), 7)], 2))], 2), createBaseVNode("div", {
				ref_key: "sliderEl",
				ref: sliderEl,
				relative: "",
				"flex-auto": "",
				"font-mono": "",
				flex: "~",
				"touch-none": "",
				class: normalizeClass([__props.attached ? "h-[22px]" : "h5", isReset.value ? "op80" : ""]),
				onPointerdownCapture: onPointerDown,
				onPointermove: onPointerMove,
				onPointerup: _cache[0] || (_cache[0] = ($event) => isRef(pointerDown) ? pointerDown.value = void 0 : pointerDown = void 0),
				onPointercancel: _cache[1] || (_cache[1] = ($event) => isRef(pointerDown) ? pointerDown.value = void 0 : pointerDown = void 0)
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(clicksRange.value, (i) => {
				return openBlock(), createElementBlock("div", {
					key: i,
					border: "y main",
					"of-hidden": "",
					relative: "",
					class: normalizeClass([
						i === 0 ? "border-l" : "",
						i === 0 ? __props.attached ? "rounded-tl" : "rounded-l" : "",
						i === total.value ? "border-r" : "",
						i === total.value && +i !== +current.value ? __props.attached ? "rounded-tr" : "rounded-r" : "",
						__props.attached ? "border-b-0" : ""
					]),
					style: normalizeStyle({ width: length.value > 0 ? `${1 / length.value * 100}%` : "100%" })
				}, [
					createBaseVNode("div", {
						absolute: "",
						"inset-0": "",
						class: normalizeClass(i <= current.value && __props.active ? "bg-primary op15" : "")
					}, null, 2),
					+i === +current.value && __props.active ? (openBlock(), createElementBlock("div", _hoisted_5)) : createCommentVNode("v-if", true),
					createBaseVNode("div", {
						class: normalizeClass([+i === +current.value && __props.active ? "text-primary font-bold op100" : "op30", i !== total.value ? "border-r-2 border-main" : ""]),
						"w-full": "",
						"h-full": "",
						"text-xs": "",
						flex: "",
						"items-center": "",
						"justify-center": "",
						"z-1": ""
					}, toDisplayString(i), 3)
				], 6);
			}), 128))], 34)], 10, _hoisted_1$1);
		};
	}
});
//#endregion
//#region node_modules/@slidev/client/internals/NoteDisplay.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["innerHTML"];
var _hoisted_2 = ["textContent"];
var _hoisted_3 = ["textContent"];
var CLASS_FADE = "slidev-note-fade";
var CLASS_MARKER = "slidev-note-click-mark";
//#endregion
//#region node_modules/@slidev/client/internals/NoteDisplay.vue
var NoteDisplay_default = /* @__PURE__ */ defineComponent({
	__name: "NoteDisplay",
	props: {
		class: {},
		noteHtml: {},
		note: {},
		highlight: {
			type: Boolean,
			default: true
		},
		placeholder: {},
		clicksContext: {},
		autoScroll: { type: Boolean }
	},
	emits: ["markerDblclick", "markerClick"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const withClicks = computed(() => props.clicksContext != null && props.noteHtml?.includes(CLASS_MARKER));
		const noteDisplay = ref(null);
		function processNote() {
			if (!noteDisplay.value || !withClicks.value) return;
			const markers = Array.from(noteDisplay.value.querySelectorAll(`.${CLASS_MARKER}`));
			const markersMap = /* @__PURE__ */ new Map();
			const parentsMap = /* @__PURE__ */ new Map();
			let lastClicks = 0;
			for (const marker of markers) {
				const clicks = Number(marker.dataset.clicks);
				markersMap.set(marker, clicks);
				let n = marker;
				let p = marker.parentElement;
				while (p && n !== noteDisplay.value) {
					if (!parentsMap.has(p)) parentsMap.set(p, [[null, lastClicks]]);
					parentsMap.get(p).push([n, clicks]);
					n = p;
					p = p.parentElement;
				}
				lastClicks = clicks;
			}
			const siblingsMap = /* @__PURE__ */ new Map();
			for (const [parent, dividers] of parentsMap) {
				let hasPrefix = false;
				let dividerIdx = 0;
				for (const sibling of Array.from(parent.childNodes)) {
					let skip = false;
					while (sibling === dividers[dividerIdx + 1]?.[0]) {
						skip = true;
						dividerIdx++;
					}
					if (skip) continue;
					let siblingEl = sibling;
					if (sibling.nodeType === 3) {
						if (!sibling.textContent?.trim()) continue;
						siblingEl = document.createElement("span");
						siblingEl.textContent = sibling.textContent;
						parent.insertBefore(siblingEl, sibling);
						sibling.remove();
					}
					hasPrefix || (hasPrefix = dividerIdx === 0);
					siblingsMap.set(siblingEl, dividers[dividerIdx][1]);
				}
				if (!hasPrefix) dividers[0][1] = -1;
			}
			return (current) => {
				const enabled = props.highlight;
				for (const [parent, clicks] of parentsMap) parent.classList.toggle(CLASS_FADE, enabled && !clicks.some(([_, c]) => c === current));
				for (const [parent, clicks] of siblingsMap) parent.classList.toggle(CLASS_FADE, enabled && clicks !== current);
				for (const [marker, clicks] of markersMap) {
					marker.classList.remove(CLASS_FADE);
					marker.classList.toggle(`${CLASS_MARKER}-past`, enabled && clicks < current);
					marker.classList.toggle(`${CLASS_MARKER}-active`, enabled && clicks === current);
					marker.classList.toggle(`${CLASS_MARKER}-next`, enabled && clicks === current + 1);
					marker.classList.toggle(`${CLASS_MARKER}-future`, enabled && clicks > current + 1);
					marker.ondblclick = (e) => {
						if (!enabled) return;
						emit("markerDblclick", e, clicks);
						if (e.defaultPrevented) return;
						props.clicksContext.current = clicks;
						e.stopPropagation();
						e.stopImmediatePropagation();
					};
					marker.onclick = (e) => {
						if (enabled) emit("markerClick", e, clicks);
					};
					if (enabled && props.autoScroll && clicks === current) marker.scrollIntoView({
						block: "center",
						behavior: "smooth"
					});
				}
			};
		}
		const applyHighlight = ref();
		watch(() => [props.noteHtml, props.highlight], () => {
			nextTick(() => {
				applyHighlight.value = processNote();
			});
		}, { immediate: true });
		onMounted(() => {
			processNote();
		});
		watchEffect(() => {
			const current = props.clicksContext?.current ?? 999999;
			applyHighlight.value?.(current);
		});
		return (_ctx, _cache) => {
			return __props.noteHtml ? (openBlock(), createElementBlock("div", {
				key: 0,
				ref_key: "noteDisplay",
				ref: noteDisplay,
				class: normalizeClass(["prose dark:prose-invert overflow-auto outline-none slidev-note", [props.class, withClicks.value ? "slidev-note-with-clicks" : ""]]),
				innerHTML: __props.noteHtml
			}, null, 10, _hoisted_1)) : __props.note ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(["prose dark:prose-invert overflow-auto outline-none slidev-note", props.class])
			}, [createBaseVNode("p", { textContent: toDisplayString(__props.note) }, null, 8, _hoisted_2)], 2)) : (openBlock(), createElementBlock("div", {
				key: 2,
				class: normalizeClass(["prose dark:prose-invert overflow-auto outline-none opacity-50 italic select-none slidev-note", props.class])
			}, [createBaseVNode("p", { textContent: toDisplayString(props.placeholder || "No notes.") }, null, 8, _hoisted_3)], 2));
		};
	}
});
//#endregion
export { ClicksSlider_default as n, NoteDisplay_default as t };
