const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingLayer-k9oSFGPg.js","assets/modules/shiki-V2eyNvW-.js","assets/rolldown-runtime-B-1-B7_t.js","assets/modules/shiki-ipjRpIB4.css","assets/slidev/context-00fxQF-V.js","assets/modules/vue-j1EMyUNA.js","assets/useDrawings-Cz-PkJHi.js","assets/useNav-BevVU56q.js","assets/_plugin-vue_export-helper-BOaGB7Aw.js","assets/index-BrwRSUAk.js","assets/syncState-CyBmabvC.js","assets/index-D4Cm5M6b.css"])))=>i.map(i=>d[i]);
import { A as mergeProps, B as renderSlot, C as defineComponent, F as onMounted, J as watchEffect, L as openBlock, O as inject, T as guardReactiveProps, U as resolveDynamicComponent, W as useModel, X as withCtx, Z as withDirectives, _ as createBlock, _t as normalizeProps, a as Transition, b as createTextVNode, c as vModelCheckbox, d as withKeys, f as withModifiers, g as createBaseVNode, gt as normalizeClass, h as computed, ht as unref, i as tt, k as mergeModels, l as vModelText, m as KeepAlive, n as Vt, nt as isRef, o as TransitionGroup, p as Fragment, q as watch, st as ref, u as vShow, ut as shallowRef, v as createCommentVNode, vt as normalizeStyle, x as createVNode, y as createElementBlock, yt as toDisplayString, z as renderList } from "../modules/shiki-V2eyNvW-.js";
import { B as useRouter, C as useWakeLock$1, F as useIntervalFn, N as timestamp, S as useVModel, d as useElementBounding, n as not, o as onClickOutside, p as useEventListener, r as or, s as onKeyStroke, t as and, v as useMouse, w as useWindowFocus, y as usePointerSwipe } from "../modules/vue-j1EMyUNA.js";
import { $ as clamp, A as slideScale, C as shortcutsLocked, D as showOverview, E as showInfoDialog, F as viewerCssFilter, G as __vitePreload, I as viewerCssFilterDefaults, J as slideHeight, L as wakeLockEnabled, M as toggleOverview, N as togglePresenterCursor, O as showPresenterCursor, P as togglePresenterLayout, Q as configs_default, R as windowSize, S as shortcutsEnabled, T as showGotoDialog, V as slides, W as createFixedClicks, Y as slideWidth, _ as isOnFocus, a as cursorStyle, b as presenterLayout, d as hasViewerCssFilter, f as hideCursorIdle, g as isInputting, i as breakpoints, j as syncDirections, n as activeDragElement, p as hmrSkipTransition, r as activeElement, s as disableTransition, t as useNav, u as fullscreen, w as showEditor, y as magicKeys, z as getSlide } from "../useNav-BevVU56q.js";
import { t as _plugin_vue_export_helper_default } from "../_plugin-vue_export-helper-BOaGB7Aw.js";
import { _ as injectionSlideScale, l as CLICKS_MAX, n as useSlideContext } from "./context-00fxQF-V.js";
import { d as isDark, f as toggleDark, i as downloadPDF, o as state, r as useSlideBounds, t as useDynamicSlideInfo, u as isColorSchemaConfigured } from "../index-BrwRSUAk.js";
import { t as useDrawings } from "../useDrawings-Cz-PkJHi.js";
import { t as IconButton_default } from "./IconButton-CNvL6I62.js";
import { t as VerticalDivider_default } from "./VerticalDivider-Dx1O8vyp.js";
import { a as mainSlideElement, i as SlideContainer_default, n as GlobalBottom, o as DrawingPreview_default, r as GlobalTop, t as SlideWrapper_default } from "../SlideWrapper-DdpLlR2W.js";
//#region node_modules/@slidev/client/composables/useSwipeControls.ts
function useSwipeControls(root) {
	const { next, nextSlide, prev, prevSlide } = useNav();
	const { isDrawing } = useDrawings();
	const swipeBegin = ref(0);
	const { direction, distanceX, distanceY } = usePointerSwipe(root, {
		pointerTypes: ["touch"],
		onSwipeStart() {
			if (isDrawing.value) return;
			swipeBegin.value = timestamp();
		},
		onSwipeEnd() {
			if (!swipeBegin.value) return;
			if (isDrawing.value) return;
			const x = Math.abs(distanceX.value);
			const y = Math.abs(distanceY.value);
			if (x / window.innerWidth > .3 || x > 75) if (direction.value === "left") next();
			else prev();
			else if (y / window.innerHeight > .4 || y > 200) if (direction.value === "down") prevSlide();
			else nextSlide();
		}
	});
}
//#endregion
//#region node_modules/@slidev/client/composables/useWakeLock.ts
function useWakeLock() {
	const { request, release } = useWakeLock$1();
	watch(wakeLockEnabled, (enabled) => {
		if (enabled) request("screen");
		else release();
	}, { immediate: true });
}
//#endregion
//#region node_modules/.slidev/virtual/import-glob.a54cc2bfd6.ts
var import_glob_a54cc2bfd6_default = /* #__PURE__ */ Object.assign({});
//#endregion
//#region node_modules/.slidev/virtual/import-glob.825c9193af.ts
var import_glob_825c9193af_default = /* #__PURE__ */ Object.assign({});
//#endregion
//#region ../../../../../@slidev/setups/context-menu
var context_menu_default$1 = [Object.values(import_glob_a54cc2bfd6_default)[0], Object.values(import_glob_825c9193af_default)[0]].filter(Boolean);
//#endregion
//#region node_modules/@slidev/client/setup/context-menu.ts
var items;
var context_menu_default = () => {
	if (items) return items;
	const { next, nextSlide, prev, prevSlide, hasNext, hasPrev, currentPage, total, isPresenter, enterPresenter, exitPresenter, isEmbedded, isPresenterAvailable } = useNav();
	const { drawingEnabled } = useDrawings();
	const { isFullscreen, toggle: toggleFullscreen } = fullscreen;
	return items = context_menu_default$1.reduce((items, fn) => fn(items), computed(() => [
		{
			small: true,
			icon: "i-carbon:arrow-left",
			label: "Previous Click",
			action: prev,
			disabled: !hasPrev.value
		},
		{
			small: true,
			icon: "i-carbon:arrow-right",
			label: "Next Click",
			action: next,
			disabled: !hasNext.value
		},
		{
			small: true,
			icon: "i-carbon:arrow-up",
			label: "Previous Slide",
			action: prevSlide,
			disabled: currentPage.value <= 1
		},
		{
			small: true,
			icon: "i-carbon:arrow-down",
			label: "Next Slide",
			action: nextSlide,
			disabled: currentPage.value >= total.value
		},
		"separator",
		{
			icon: "i-carbon:text-annotation-toggle",
			label: showEditor.value ? "Hide editor" : "Show editor",
			action: () => showEditor.value = !showEditor.value,
			show: false
		},
		{
			icon: "i-carbon:pen",
			label: drawingEnabled.value ? "Hide drawing toolbar" : "Show drawing toolbar",
			action: () => drawingEnabled.value = !drawingEnabled.value
		},
		{
			icon: "i-carbon:apps",
			label: "Show slide overview",
			action: toggleOverview
		},
		isPresenter.value && {
			icon: "i-carbon:presentation-file",
			label: "Exit Presenter Mode",
			action: exitPresenter
		},
		isPresenterAvailable.value && {
			icon: "i-carbon:user-speaker",
			label: "Enter Presenter Mode",
			action: enterPresenter
		},
		!isEmbedded.value && {
			icon: isFullscreen.value ? "i-carbon:minimize" : "i-carbon:maximize",
			label: isFullscreen.value ? "Close fullscreen" : "Enter fullscreen",
			action: toggleFullscreen
		}
	].filter(Boolean)));
};
//#endregion
//#region node_modules/@slidev/client/logic/contextMenu.ts
var currentContextMenu = shallowRef(null);
function openContextMenu(x, y) {
	currentContextMenu.value = {
		x,
		y,
		items: context_menu_default()
	};
}
function closeContextMenu() {
	currentContextMenu.value = null;
}
function onContextMenu(ev) {
	if (configs_default.contextMenu !== true && configs_default.contextMenu != null && configs_default.contextMenu !== "build") return;
	if (ev.shiftKey || ev.defaultPrevented) return;
	const { isEmbedded } = useNav();
	if (isEmbedded.value) return;
	openContextMenu(ev.pageX, ev.pageY);
	ev.preventDefault();
	ev.stopPropagation();
}
//#endregion
//#region node_modules/@slidev/client/internals/ContextMenu.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$15 = ["title", "onClick"];
var _hoisted_2$9 = ["onClick"];
var _hoisted_3$7 = { class: "mx-auto flex" };
var _hoisted_4$6 = { key: 0 };
var _hoisted_5$4 = { class: "w-full text-xs p2" };
var _hoisted_6$2 = { class: "text-main text-opacity-50!" };
//#endregion
//#region node_modules/@slidev/client/internals/ContextMenu.vue
var ContextMenu_default = /* @__PURE__ */ defineComponent({
	__name: "ContextMenu",
	setup(__props) {
		const container = ref();
		onClickOutside(container, closeContextMenu);
		useEventListener(document, "mousedown", (ev) => {
			if (ev.buttons & 2) closeContextMenu();
		}, {
			passive: true,
			capture: true
		});
		const isExplicitEnabled = computed(() => configs_default.contextMenu != null);
		watch(useWindowFocus(), (hasFocus) => {
			if (!hasFocus) closeContextMenu();
		});
		useDynamicSlideInfo(1);
		const { width, height } = useElementBounding(container);
		const left = computed(() => {
			const x = currentContextMenu.value?.x;
			if (!x) return 0;
			if (x + width.value > windowSize.width.value) return windowSize.width.value - width.value;
			return x;
		});
		const top = computed(() => {
			const y = currentContextMenu.value?.y;
			if (!y) return 0;
			if (y + height.value > windowSize.height.value) return windowSize.height.value - height.value;
			return y;
		});
		return (_ctx, _cache) => {
			return unref(currentContextMenu) ? (openBlock(), createElementBlock("div", {
				key: 0,
				ref_key: "container",
				ref: container,
				style: normalizeStyle(`left:${left.value}px;top:${top.value}px`),
				class: "slidev-glass-effect fixed z-context-menu w-60 flex flex-wrap justify-items-start p-1 animate-fade-in animate-duration-100 rounded-md shadow overflow-hidden select-none",
				onContextmenu: _cache[1] || (_cache[1] = withModifiers(() => {}, ["prevent"])),
				onClick: _cache[2] || (_cache[2] = (...args) => unref(closeContextMenu) && unref(closeContextMenu)(...args))
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(currentContextMenu).items.value, (item, index) => {
				return openBlock(), createElementBlock(Fragment, { key: index }, [item === "separator" ? (openBlock(), createElementBlock("div", {
					key: index,
					class: "w-full my1 border-t border-main"
				})) : item.show ?? true ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [item.small ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(["p-2 w-[40px] h-[40px] inline-block text-center cursor-pointer rounded flex", item.disabled ? `op40` : `hover:bg-active`]),
					title: item.label,
					onClick: item.action
				}, [typeof item.icon === "string" ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass([item.icon, "text-1.2em ma"])
				}, null, 2)) : (openBlock(), createBlock(resolveDynamicComponent(item.icon), { key: 1 }))], 10, _hoisted_1$15)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(["w-full grid grid-cols-[35px_1fr] p-2 pl-0 cursor-pointer rounded", item.disabled ? `op40` : `hover:bg-active`]),
					onClick: item.action
				}, [createBaseVNode("div", _hoisted_3$7, [typeof item.icon === "string" ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass([item.icon, "text-1.2em ma"])
				}, null, 2)) : (openBlock(), createBlock(resolveDynamicComponent(item.icon), { key: 1 }))]), typeof item.label === "string" ? (openBlock(), createElementBlock("div", _hoisted_4$6, toDisplayString(item.label), 1)) : (openBlock(), createBlock(resolveDynamicComponent(item.label), { key: 1 }))], 10, _hoisted_2$9))], 64)) : createCommentVNode("v-if", true)], 64);
			}), 128)), !isExplicitEnabled.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [_cache[6] || (_cache[6] = createBaseVNode("div", { class: "w-full my1 border-t border-main" }, null, -1)), createBaseVNode("div", _hoisted_5$4, [createBaseVNode("div", _hoisted_6$2, [
				_cache[3] || (_cache[3] = createTextVNode(" Hold ", -1)),
				_cache[4] || (_cache[4] = createBaseVNode("kbd", { class: "border px1 py0.5 border-main rounded text-primary" }, "Shift", -1)),
				_cache[5] || (_cache[5] = createTextVNode(" and right click to open the native context menu ", -1)),
				createCommentVNode("v-if", true)
			])])], 64)) : createCommentVNode("v-if", true)], 36)) : createCommentVNode("v-if", true);
		};
	}
});
//#endregion
//#region node_modules/fuse.js/dist/fuse.mjs
/**
* Fuse.js v7.5.0 - Lightweight fuzzy-search (http://fusejs.io)
*
* Copyright (c) 2026 Kiro Risk (http://kiro.me)
* All Rights Reserved. Apache Software License 2.0
*
* http://www.apache.org/licenses/LICENSE-2.0
*/
function isArray(value) {
	return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
}
function baseToString(value) {
	if (typeof value == "string") return value;
	if (typeof value === "bigint") return value.toString();
	const result = value + "";
	return result == "0" && 1 / value == -Infinity ? "-0" : result;
}
function toString(value) {
	return value == null ? "" : baseToString(value);
}
function isString(value) {
	return typeof value === "string";
}
function isNumber(value) {
	return typeof value === "number";
}
function isBoolean(value) {
	return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
}
function isObject(value) {
	return typeof value === "object";
}
function isObjectLike(value) {
	return isObject(value) && value !== null;
}
function isDefined(value) {
	return value !== void 0 && value !== null;
}
function isBlank(value) {
	return !value.trim().length;
}
function getTag(value) {
	return value == null ? value === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
}
var INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
var INVALID_DOC_INDEX = "Invalid doc index: must be a non-negative integer within the bounds of the docs array";
var LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) => `Invalid value for key ${key}`;
var PATTERN_LENGTH_TOO_LARGE = (max) => `Pattern length exceeds max of ${max}.`;
var MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;
var INVALID_KEY_WEIGHT_VALUE = (key) => `Property 'weight' in key '${key}' must be a positive integer`;
var FUSE_MATCH_TOKEN_SEARCH_UNSUPPORTED = "Fuse.match does not support useTokenSearch: token search requires corpus-level statistics (df, fieldCount) that a one-off string comparison does not have. Use new Fuse(...).search(...) instead.";
var hasOwn = Object.prototype.hasOwnProperty;
var KeyStore = class {
	constructor(keys) {
		this._keys = [];
		this._keyMap = {};
		let totalWeight = 0;
		keys.forEach((key) => {
			const obj = createKey(key);
			this._keys.push(obj);
			this._keyMap[obj.id] = obj;
			totalWeight += obj.weight;
		});
		this._keys.forEach((key) => {
			key.weight /= totalWeight;
		});
	}
	get(keyId) {
		return this._keyMap[keyId];
	}
	keys() {
		return this._keys;
	}
	toJSON() {
		return JSON.stringify(this._keys);
	}
};
function createKey(key) {
	let path = null;
	let id = null;
	let src = null;
	let weight = 1;
	let getFn = null;
	if (isString(key) || isArray(key)) {
		src = key;
		path = createKeyPath(key);
		id = createKeyId(key);
	} else {
		if (!hasOwn.call(key, "name")) throw new Error(MISSING_KEY_PROPERTY("name"));
		const name = key.name;
		src = name;
		if (hasOwn.call(key, "weight") && key.weight !== void 0) {
			weight = key.weight;
			if (weight <= 0) throw new Error(INVALID_KEY_WEIGHT_VALUE(createKeyId(name)));
		}
		path = createKeyPath(name);
		id = createKeyId(name);
		getFn = key.getFn ?? null;
	}
	return {
		path,
		id,
		weight,
		src,
		getFn
	};
}
function createKeyPath(key) {
	return isArray(key) ? key : key.split(".");
}
function createKeyId(key) {
	return isArray(key) ? key.join(".") : key;
}
function get(obj, path) {
	const list = [];
	let arr = false;
	const deepGet = (obj, path, index, arrayIndex) => {
		if (!isDefined(obj)) return;
		if (!path[index]) list.push(arrayIndex !== void 0 ? {
			v: obj,
			i: arrayIndex
		} : obj);
		else {
			const value = obj[path[index]];
			if (!isDefined(value)) return;
			if (index === path.length - 1 && (isString(value) || isNumber(value) || isBoolean(value) || typeof value === "bigint")) list.push(arrayIndex !== void 0 ? {
				v: toString(value),
				i: arrayIndex
			} : toString(value));
			else if (isArray(value)) {
				arr = true;
				for (let i = 0, len = value.length; i < len; i += 1) deepGet(value[i], path, index + 1, i);
			} else if (path.length) deepGet(value, path, index + 1, arrayIndex);
		}
	};
	deepGet(obj, isString(path) ? path.split(".") : path, 0);
	return arr ? list : list[0];
}
var MatchOptions = {
	includeMatches: false,
	findAllMatches: false,
	minMatchCharLength: 1
};
var BasicOptions = {
	isCaseSensitive: false,
	ignoreDiacritics: false,
	includeScore: false,
	keys: [],
	shouldSort: true,
	sortFn: (a, b) => a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1
};
var FuzzyOptions = {
	location: 0,
	threshold: .6,
	distance: 100
};
var AdvancedOptions = {
	useExtendedSearch: false,
	useTokenSearch: false,
	tokenize: void 0,
	tokenMatch: "any",
	getFn: get,
	ignoreLocation: false,
	ignoreFieldNorm: false,
	fieldNormWeight: 1
};
var Config = Object.freeze({
	...BasicOptions,
	...MatchOptions,
	...FuzzyOptions,
	...AdvancedOptions
});
function isWordSeparator(code) {
	return code >= 9 && code <= 13 || code === 32 || code === 160;
}
function norm(weight = 1, mantissa = 3) {
	const cache = /* @__PURE__ */ new Map();
	const m = Math.pow(10, mantissa);
	return {
		get(value) {
			let numTokens = 0;
			let inWord = false;
			for (let i = 0; i < value.length; i++) if (!isWordSeparator(value.charCodeAt(i))) {
				if (!inWord) {
					numTokens++;
					inWord = true;
				}
			} else inWord = false;
			if (numTokens === 0) numTokens = 1;
			if (cache.has(numTokens)) return cache.get(numTokens);
			const n = Math.round(m / Math.pow(numTokens, .5 * weight)) / m;
			cache.set(numTokens, n);
			return n;
		},
		clear() {
			cache.clear();
		}
	};
}
var FuseIndex = class {
	constructor({ getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
		this.norm = norm(fieldNormWeight, 3);
		this.getFn = getFn;
		this.isCreated = false;
		this.docs = [];
		this.keys = [];
		this._keysMap = {};
		this.setIndexRecords();
	}
	setSources(docs = []) {
		this.docs = docs;
	}
	setIndexRecords(records = []) {
		this.records = records;
	}
	setKeys(keys = []) {
		this.keys = keys;
		this._keysMap = {};
		keys.forEach((key, idx) => {
			this._keysMap[key.id] = idx;
		});
	}
	create() {
		if (this.isCreated || !this.docs.length) return;
		this.isCreated = true;
		const len = this.docs.length;
		this.records = new Array(len);
		let recordCount = 0;
		if (isString(this.docs[0])) for (let i = 0; i < len; i++) {
			const record = this._createStringRecord(this.docs[i], i);
			if (record) this.records[recordCount++] = record;
		}
		else for (let i = 0; i < len; i++) this.records[recordCount++] = this._createObjectRecord(this.docs[i], i);
		this.records.length = recordCount;
		this.norm.clear();
	}
	add(doc, docIndex) {
		if (!Number.isInteger(docIndex) || docIndex < 0) throw new Error(INVALID_DOC_INDEX);
		if (isString(doc)) {
			const record = this._createStringRecord(doc, docIndex);
			if (record) this.records.push(record);
			return record;
		}
		const record = this._createObjectRecord(doc, docIndex);
		this.records.push(record);
		return record;
	}
	removeAt(idx) {
		if (!Number.isInteger(idx) || idx < 0) throw new Error(INVALID_DOC_INDEX);
		for (let i = 0, len = this.records.length; i < len; i += 1) if (this.records[i].i === idx) {
			this.records.splice(i, 1);
			break;
		}
		for (let i = 0, len = this.records.length; i < len; i += 1) if (this.records[i].i > idx) this.records[i].i -= 1;
	}
	removeAll(indices) {
		const toRemove = /* @__PURE__ */ new Set();
		for (const v of indices) if (Number.isInteger(v) && v >= 0) toRemove.add(v);
		if (toRemove.size === 0) return;
		this.records = this.records.filter((r) => !toRemove.has(r.i));
		const sorted = Array.from(toRemove).sort((a, b) => a - b);
		for (const record of this.records) {
			let lo = 0;
			let hi = sorted.length;
			while (lo < hi) {
				const mid = lo + hi >>> 1;
				if (sorted[mid] < record.i) lo = mid + 1;
				else hi = mid;
			}
			record.i -= lo;
		}
	}
	getValueForItemAtKeyId(item, keyId) {
		return item[this._keysMap[keyId]];
	}
	size() {
		return this.records.length;
	}
	_createStringRecord(doc, docIndex) {
		if (!isDefined(doc) || isBlank(doc)) return null;
		return {
			v: doc,
			i: docIndex,
			n: this.norm.get(doc)
		};
	}
	_createObjectRecord(doc, docIndex) {
		const record = {
			i: docIndex,
			$: {}
		};
		for (let keyIndex = 0, keyLen = this.keys.length; keyIndex < keyLen; keyIndex++) {
			const key = this.keys[keyIndex];
			const value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);
			if (!isDefined(value)) continue;
			if (isArray(value)) {
				const subRecords = [];
				for (let i = 0, len = value.length; i < len; i += 1) {
					const item = value[i];
					if (!isDefined(item)) continue;
					if (isString(item)) {
						if (!isBlank(item)) {
							const subRecord = {
								v: item,
								i,
								n: this.norm.get(item)
							};
							subRecords.push(subRecord);
						}
					} else if (isDefined(item.v)) {
						const text = isString(item.v) ? item.v : toString(item.v);
						if (!isBlank(text)) {
							const subRecord = {
								v: text,
								i: item.i,
								n: this.norm.get(text)
							};
							subRecords.push(subRecord);
						}
					}
				}
				record.$[keyIndex] = subRecords;
			} else if (isString(value) && !isBlank(value)) {
				const subRecord = {
					v: value,
					n: this.norm.get(value)
				};
				record.$[keyIndex] = subRecord;
			}
		}
		return record;
	}
	toJSON() {
		return {
			keys: this.keys.map(({ getFn, ...key }) => key),
			records: this.records
		};
	}
};
function createIndex(keys, docs, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
	const myIndex = new FuseIndex({
		getFn,
		fieldNormWeight
	});
	myIndex.setKeys(keys.map(createKey));
	myIndex.setSources(docs);
	myIndex.create();
	return myIndex;
}
function parseIndex(data, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
	const { keys, records } = data;
	const myIndex = new FuseIndex({
		getFn,
		fieldNormWeight
	});
	myIndex.setKeys(keys);
	myIndex.setIndexRecords(records);
	return myIndex;
}
function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
	const indices = [];
	let start = -1;
	let end = -1;
	let i = 0;
	for (let len = matchmask.length; i < len; i += 1) {
		const match = matchmask[i];
		if (match && start === -1) start = i;
		else if (!match && start !== -1) {
			end = i - 1;
			if (end - start + 1 >= minMatchCharLength) indices.push([start, end]);
			start = -1;
		}
	}
	if (matchmask[i - 1] && i - start >= minMatchCharLength) indices.push([start, i - 1]);
	return indices;
}
function search(text, pattern, patternAlphabet, { location = Config.location, distance = Config.distance, threshold = Config.threshold, findAllMatches = Config.findAllMatches, minMatchCharLength = Config.minMatchCharLength, includeMatches = Config.includeMatches, ignoreLocation = Config.ignoreLocation } = {}) {
	if (pattern.length > 32) throw new Error(PATTERN_LENGTH_TOO_LARGE(32));
	const patternLen = pattern.length;
	const textLen = text.length;
	const expectedLocation = Math.max(0, Math.min(location, textLen));
	let currentThreshold = threshold;
	let bestLocation = expectedLocation;
	const calcScore = (errors, currentLocation) => {
		const accuracy = errors / patternLen;
		if (ignoreLocation) return accuracy;
		const proximity = Math.abs(expectedLocation - currentLocation);
		if (!distance) return proximity ? 1 : accuracy;
		return accuracy + proximity / distance;
	};
	const computeMatches = minMatchCharLength > 1 || includeMatches;
	const matchMask = computeMatches ? Array(textLen) : [];
	let index;
	while ((index = text.indexOf(pattern, bestLocation)) > -1) {
		const score = calcScore(0, index);
		currentThreshold = Math.min(score, currentThreshold);
		bestLocation = index + patternLen;
		if (computeMatches) {
			let i = 0;
			while (i < patternLen) {
				matchMask[index + i] = 1;
				i += 1;
			}
		}
	}
	bestLocation = -1;
	let lastBitArr = [];
	let finalScore = 1;
	let bestErrors = 0;
	let binMax = patternLen + textLen;
	const mask = 1 << patternLen - 1;
	for (let i = 0; i < patternLen; i += 1) {
		let binMin = 0;
		let binMid = binMax;
		while (binMin < binMid) {
			if (calcScore(i, expectedLocation + binMid) <= currentThreshold) binMin = binMid;
			else binMax = binMid;
			binMid = Math.floor((binMax - binMin) / 2 + binMin);
		}
		binMax = binMid;
		let start = Math.max(1, expectedLocation - binMid + 1);
		const finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
		const bitArr = Array(finish + 2);
		bitArr[finish + 1] = (1 << i) - 1;
		for (let j = finish; j >= start; j -= 1) {
			const currentLocation = j - 1;
			const charMatch = patternAlphabet[text[currentLocation]];
			bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
			if (i) bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
			if (bitArr[j] & mask) {
				finalScore = calcScore(i, currentLocation);
				if (finalScore <= currentThreshold) {
					currentThreshold = finalScore;
					bestLocation = currentLocation;
					bestErrors = i;
					if (bestLocation <= expectedLocation) break;
					start = Math.max(1, 2 * expectedLocation - bestLocation);
				}
			}
		}
		if (calcScore(i + 1, expectedLocation) > currentThreshold) break;
		lastBitArr = bitArr;
	}
	if (computeMatches && bestLocation >= 0) {
		const matchEnd = Math.min(textLen - 1, bestLocation + patternLen - 1 + bestErrors);
		for (let k = bestLocation; k <= matchEnd; k += 1) if (patternAlphabet[text[k]]) matchMask[k] = 1;
	}
	const result = {
		isMatch: bestLocation >= 0,
		score: Math.max(.001, finalScore)
	};
	if (computeMatches) {
		const indices = convertMaskToIndices(matchMask, minMatchCharLength);
		if (!indices.length) result.isMatch = false;
		else if (includeMatches) result.indices = indices;
	}
	return result;
}
function createPatternAlphabet(pattern) {
	const mask = {};
	for (let i = 0, len = pattern.length; i < len; i += 1) {
		const char = pattern.charAt(i);
		mask[char] = (mask[char] || 0) | 1 << len - i - 1;
	}
	return mask;
}
function mergeIndices(indices) {
	if (indices.length <= 1) return indices;
	indices.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
	const merged = [indices[0]];
	for (let i = 1, len = indices.length; i < len; i += 1) {
		const last = merged[merged.length - 1];
		const curr = indices[i];
		if (curr[0] <= last[1] + 1) last[1] = Math.max(last[1], curr[1]);
		else merged.push(curr);
	}
	return merged;
}
var NON_DECOMPOSABLE_MAP = {
	"ł": "l",
	"Ł": "L",
	"đ": "d",
	"Đ": "D",
	"ø": "o",
	"Ø": "O",
	"ħ": "h",
	"Ħ": "H",
	"ŧ": "t",
	"Ŧ": "T",
	"ı": "i",
	"ß": "ss"
};
var NON_DECOMPOSABLE_RE = new RegExp("[" + Object.keys(NON_DECOMPOSABLE_MAP).join("") + "]", "g");
var stripDiacritics = typeof String.prototype.normalize === "function" ? (str) => str.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "").replace(NON_DECOMPOSABLE_RE, (ch) => NON_DECOMPOSABLE_MAP[ch]) : (str) => str;
var BitapSearch = class {
	constructor(pattern, { location = Config.location, threshold = Config.threshold, distance = Config.distance, includeMatches = Config.includeMatches, findAllMatches = Config.findAllMatches, minMatchCharLength = Config.minMatchCharLength, isCaseSensitive = Config.isCaseSensitive, ignoreDiacritics = Config.ignoreDiacritics, ignoreLocation = Config.ignoreLocation } = {}) {
		this.options = {
			location,
			threshold,
			distance,
			includeMatches,
			findAllMatches,
			minMatchCharLength,
			isCaseSensitive,
			ignoreDiacritics,
			ignoreLocation
		};
		pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
		pattern = ignoreDiacritics ? stripDiacritics(pattern) : pattern;
		this.pattern = pattern;
		this.chunks = [];
		if (!this.pattern.length) return;
		const addChunk = (pattern, startIndex) => {
			this.chunks.push({
				pattern,
				alphabet: createPatternAlphabet(pattern),
				startIndex
			});
		};
		const len = this.pattern.length;
		if (len > 32) {
			let i = 0;
			const remainder = len % 32;
			const end = len - remainder;
			while (i < end) {
				addChunk(this.pattern.substr(i, 32), i);
				i += 32;
			}
			if (remainder) {
				const startIndex = len - 32;
				addChunk(this.pattern.substr(startIndex), startIndex);
			}
		} else addChunk(this.pattern, 0);
	}
	searchIn(text) {
		const { isCaseSensitive, ignoreDiacritics, includeMatches } = this.options;
		text = isCaseSensitive ? text : text.toLowerCase();
		text = ignoreDiacritics ? stripDiacritics(text) : text;
		if (this.pattern === text) {
			if (text.length < this.options.minMatchCharLength) return {
				isMatch: false,
				score: 1
			};
			const result = {
				isMatch: true,
				score: 0
			};
			if (includeMatches) result.indices = [[0, text.length - 1]];
			return result;
		}
		const { location, distance, threshold, findAllMatches, minMatchCharLength, ignoreLocation } = this.options;
		const allIndices = [];
		let totalScore = 0;
		let hasMatches = false;
		this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
			const { isMatch, score, indices } = search(text, pattern, alphabet, {
				location: location + startIndex,
				distance,
				threshold,
				findAllMatches,
				minMatchCharLength,
				includeMatches,
				ignoreLocation
			});
			if (isMatch) hasMatches = true;
			totalScore += score;
			if (isMatch && indices) allIndices.push(...indices);
		});
		const result = {
			isMatch: hasMatches,
			score: hasMatches ? totalScore / this.chunks.length : 1
		};
		if (hasMatches && includeMatches) result.indices = mergeIndices(allIndices);
		return result;
	}
};
var MULTI_MATCH_TYPES = /* @__PURE__ */ new Set(["fuzzy", "include"]);
function isInverse(type) {
	return type.startsWith("inverse");
}
var matchers = [
	{
		type: "exact",
		multiRegex: /^="(.*)"$/,
		singleRegex: /^=(.*)$/,
		create: (pattern) => ({
			type: "exact",
			search(text) {
				const isMatch = text === pattern;
				return {
					isMatch,
					score: isMatch ? 0 : 1,
					indices: [0, pattern.length - 1]
				};
			}
		})
	},
	{
		type: "include",
		multiRegex: /^'"(.*)"$/,
		singleRegex: /^'(.*)$/,
		create: (pattern) => ({
			type: "include",
			search(text) {
				let location = 0;
				let index;
				const indices = [];
				const patternLen = pattern.length;
				while ((index = text.indexOf(pattern, location)) > -1) {
					location = index + patternLen;
					indices.push([index, location - 1]);
				}
				const isMatch = !!indices.length;
				return {
					isMatch,
					score: isMatch ? 0 : 1,
					indices
				};
			}
		})
	},
	{
		type: "prefix-exact",
		multiRegex: /^\^"(.*)"$/,
		singleRegex: /^\^(.*)$/,
		create: (pattern) => ({
			type: "prefix-exact",
			search(text) {
				const isMatch = text.startsWith(pattern);
				return {
					isMatch,
					score: isMatch ? 0 : 1,
					indices: [0, pattern.length - 1]
				};
			}
		})
	},
	{
		type: "inverse-prefix-exact",
		multiRegex: /^!\^"(.*)"$/,
		singleRegex: /^!\^(.*)$/,
		create: (pattern) => ({
			type: "inverse-prefix-exact",
			search(text) {
				const isMatch = !text.startsWith(pattern);
				return {
					isMatch,
					score: isMatch ? 0 : 1,
					indices: [0, text.length - 1]
				};
			}
		})
	},
	{
		type: "inverse-suffix-exact",
		multiRegex: /^!"(.*)"\$$/,
		singleRegex: /^!(.*)\$$/,
		create: (pattern) => ({
			type: "inverse-suffix-exact",
			search(text) {
				const isMatch = !text.endsWith(pattern);
				return {
					isMatch,
					score: isMatch ? 0 : 1,
					indices: [0, text.length - 1]
				};
			}
		})
	},
	{
		type: "suffix-exact",
		multiRegex: /^"(.*)"\$$/,
		singleRegex: /^(.*)\$$/,
		create: (pattern) => ({
			type: "suffix-exact",
			search(text) {
				const isMatch = text.endsWith(pattern);
				return {
					isMatch,
					score: isMatch ? 0 : 1,
					indices: [text.length - pattern.length, text.length - 1]
				};
			}
		})
	},
	{
		type: "inverse-exact",
		multiRegex: /^!"(.*)"$/,
		singleRegex: /^!(.*)$/,
		create: (pattern) => ({
			type: "inverse-exact",
			search(text) {
				const isMatch = text.indexOf(pattern) === -1;
				return {
					isMatch,
					score: isMatch ? 0 : 1,
					indices: [0, text.length - 1]
				};
			}
		})
	},
	{
		type: "fuzzy",
		multiRegex: /^"(.*)"$/,
		singleRegex: /^(.*)$/,
		create: (pattern, options = {}) => {
			const bitap = new BitapSearch(pattern, {
				location: options.location ?? Config.location,
				threshold: options.threshold ?? Config.threshold,
				distance: options.distance ?? Config.distance,
				includeMatches: options.includeMatches ?? Config.includeMatches,
				findAllMatches: options.findAllMatches ?? Config.findAllMatches,
				minMatchCharLength: options.minMatchCharLength ?? Config.minMatchCharLength,
				isCaseSensitive: options.isCaseSensitive ?? Config.isCaseSensitive,
				ignoreDiacritics: options.ignoreDiacritics ?? Config.ignoreDiacritics,
				ignoreLocation: options.ignoreLocation ?? Config.ignoreLocation
			});
			return {
				type: "fuzzy",
				search(text) {
					return bitap.searchIn(text);
				}
			};
		}
	}
];
var matchersLen = matchers.length;
var ESCAPED_PIPE = "\0";
var OR_TOKEN = "|";
function tokenize(pattern) {
	const tokens = [];
	const len = pattern.length;
	let i = 0;
	while (i < len) {
		while (i < len && pattern[i] === " ") i++;
		if (i >= len) break;
		let j = i;
		while (j < len && pattern[j] !== " " && pattern[j] !== "\"") j++;
		if (j < len && pattern[j] === "\"") {
			j++;
			while (j < len) {
				if (pattern[j] === "\"") {
					const next = j + 1;
					if (next >= len || pattern[next] === " ") {
						j++;
						break;
					}
					if (pattern[next] === "$" && (next + 1 >= len || pattern[next + 1] === " ")) {
						j += 2;
						break;
					}
				}
				j++;
			}
			tokens.push(pattern.substring(i, j));
			i = j;
		} else {
			while (j < len && pattern[j] !== " ") j++;
			tokens.push(pattern.substring(i, j));
			i = j;
		}
	}
	return tokens;
}
function getMatch(pattern, exp) {
	const matches = pattern.match(exp);
	return matches ? matches[1] : null;
}
function parseQuery(pattern, options = {}) {
	return pattern.replace(/\\\|/g, ESCAPED_PIPE).split(OR_TOKEN).map((item) => {
		const query = tokenize(item.replace(/\u0000/g, "|").trim()).filter((item) => item && !!item.trim());
		const results = [];
		for (let i = 0, len = query.length; i < len; i += 1) {
			const queryItem = query[i];
			let found = false;
			let idx = -1;
			while (!found && ++idx < matchersLen) {
				const def = matchers[idx];
				const token = getMatch(queryItem, def.multiRegex);
				if (token) {
					results.push(def.create(token, options));
					found = true;
				}
			}
			if (found) continue;
			idx = -1;
			while (++idx < matchersLen) {
				const def = matchers[idx];
				const token = getMatch(queryItem, def.singleRegex);
				if (token) {
					results.push(def.create(token, options));
					break;
				}
			}
		}
		return results;
	});
}
var ExtendedSearch = class {
	constructor(pattern, { isCaseSensitive = Config.isCaseSensitive, ignoreDiacritics = Config.ignoreDiacritics, includeMatches = Config.includeMatches, minMatchCharLength = Config.minMatchCharLength, ignoreLocation = Config.ignoreLocation, findAllMatches = Config.findAllMatches, location = Config.location, threshold = Config.threshold, distance = Config.distance } = {}) {
		this.query = null;
		this.options = {
			isCaseSensitive,
			ignoreDiacritics,
			includeMatches,
			minMatchCharLength,
			findAllMatches,
			ignoreLocation,
			location,
			threshold,
			distance
		};
		pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
		pattern = ignoreDiacritics ? stripDiacritics(pattern) : pattern;
		this.pattern = pattern;
		this.query = parseQuery(this.pattern, this.options);
	}
	static condition(_, options) {
		return options.useExtendedSearch;
	}
	searchIn(text) {
		const query = this.query;
		if (!query) return {
			isMatch: false,
			score: 1
		};
		const { includeMatches, isCaseSensitive, ignoreDiacritics } = this.options;
		text = isCaseSensitive ? text : text.toLowerCase();
		text = ignoreDiacritics ? stripDiacritics(text) : text;
		let numMatches = 0;
		const allIndices = [];
		let totalScore = 0;
		let hasInverse = false;
		for (let i = 0, qLen = query.length; i < qLen; i += 1) {
			const searchers = query[i];
			allIndices.length = 0;
			numMatches = 0;
			hasInverse = false;
			for (let j = 0, pLen = searchers.length; j < pLen; j += 1) {
				const matcher = searchers[j];
				const { isMatch, indices, score } = matcher.search(text);
				if (isMatch) {
					numMatches += 1;
					totalScore += score;
					if (isInverse(matcher.type)) hasInverse = true;
					if (includeMatches) if (MULTI_MATCH_TYPES.has(matcher.type)) allIndices.push(...indices);
					else allIndices.push(indices);
				} else {
					totalScore = 0;
					numMatches = 0;
					allIndices.length = 0;
					hasInverse = false;
					break;
				}
			}
			if (numMatches) {
				const result = {
					isMatch: true,
					score: totalScore / numMatches
				};
				if (hasInverse) result.hasInverse = true;
				if (includeMatches) result.indices = mergeIndices(allIndices);
				return result;
			}
		}
		return {
			isMatch: false,
			score: 1
		};
	}
};
var registeredSearchers = [];
function register(...args) {
	registeredSearchers.push(...args);
}
function createSearcher(pattern, options) {
	for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
		const searcherClass = registeredSearchers[i];
		if (searcherClass.condition(pattern, options)) return new searcherClass(pattern, options);
	}
	return new BitapSearch(pattern, options);
}
var LogicalOperator = {
	AND: "$and",
	OR: "$or"
};
var KeyType = {
	PATH: "$path",
	PATTERN: "$val"
};
var isExpression = (query) => !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
var isPath = (query) => !!query[KeyType.PATH];
var isLeaf = (query) => !isArray(query) && isObject(query) && !isExpression(query);
var convertToExplicit = (query) => ({ [LogicalOperator.AND]: Object.keys(query).map((key) => ({ [key]: query[key] })) });
function parse(query, options, { auto = true } = {}) {
	const next = (query) => {
		if (isString(query)) {
			const obj = {
				keyId: null,
				pattern: query
			};
			if (auto) obj.searcher = createSearcher(query, options);
			return obj;
		}
		const keys = Object.keys(query);
		const isQueryPath = isPath(query);
		if (!isQueryPath && keys.length > 1 && !isExpression(query)) return next(convertToExplicit(query));
		if (isLeaf(query)) {
			const key = isQueryPath ? query[KeyType.PATH] : keys[0];
			const pattern = isQueryPath ? query[KeyType.PATTERN] : query[key];
			if (!isString(pattern)) throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
			const obj = {
				keyId: createKeyId(key),
				pattern
			};
			if (auto) obj.searcher = createSearcher(pattern, options);
			return obj;
		}
		const node = {
			children: [],
			operator: keys[0]
		};
		keys.forEach((key) => {
			const value = query[key];
			if (isArray(value)) value.forEach((item) => {
				node.children.push(next(item));
			});
		});
		return node;
	};
	if (!isExpression(query)) query = convertToExplicit(query);
	return next(query);
}
function computeScoreSingle(matches, { ignoreFieldNorm = Config.ignoreFieldNorm }) {
	let totalScore = 1;
	matches.forEach(({ key, norm, score }) => {
		const weight = key ? key.weight : null;
		totalScore *= Math.pow(score === 0 && weight ? Number.EPSILON : score, (weight || 1) * (ignoreFieldNorm ? 1 : norm));
	});
	return totalScore;
}
function computeScore(results, { ignoreFieldNorm = Config.ignoreFieldNorm }) {
	results.forEach((result) => {
		result.score = computeScoreSingle(result.matches, { ignoreFieldNorm });
	});
}
var MaxHeap = class {
	constructor(limit, comparator) {
		this.limit = limit;
		this.heap = [];
		this.comparator = comparator;
	}
	get size() {
		return this.heap.length;
	}
	insert(item) {
		if (this.size < this.limit) {
			this.heap.push(item);
			this._bubbleUp(this.size - 1);
		} else if (this.comparator(item, this.heap[0]) < 0) {
			this.heap[0] = item;
			this._sinkDown(0);
		}
	}
	extractSorted() {
		return this.heap.sort(this.comparator);
	}
	_bubbleUp(i) {
		const heap = this.heap;
		while (i > 0) {
			const parent = i - 1 >> 1;
			if (this.comparator(heap[i], heap[parent]) <= 0) break;
			const tmp = heap[i];
			heap[i] = heap[parent];
			heap[parent] = tmp;
			i = parent;
		}
	}
	_sinkDown(i) {
		const heap = this.heap;
		const len = heap.length;
		let largest = i;
		do {
			i = largest;
			const left = 2 * i + 1;
			const right = 2 * i + 2;
			if (left < len && this.comparator(heap[left], heap[largest]) > 0) largest = left;
			if (right < len && this.comparator(heap[right], heap[largest]) > 0) largest = right;
			if (largest !== i) {
				const tmp = heap[i];
				heap[i] = heap[largest];
				heap[largest] = tmp;
			}
		} while (largest !== i);
	}
};
function formatMatches(result) {
	const matches = [];
	result.matches.forEach((match) => {
		if (!isDefined(match.indices) || !match.indices.length) return;
		const obj = {
			indices: match.indices,
			value: match.value
		};
		if (match.key) obj.key = match.key.id;
		if (match.idx > -1) obj.refIndex = match.idx;
		matches.push(obj);
	});
	return matches;
}
function format(results, docs, { includeMatches = Config.includeMatches, includeScore = Config.includeScore } = {}) {
	return results.map((result) => {
		const { idx } = result;
		const data = {
			item: docs[idx],
			refIndex: idx
		};
		if (includeMatches) data.matches = formatMatches(result);
		if (includeScore) data.score = result.score;
		return data;
	});
}
var DEFAULT_TOKEN = /[\p{L}\p{M}\p{N}_]+/gu;
var warned = /* @__PURE__ */ new WeakSet();
function warnNonGlobal(regex) {
	if (!warned.has(regex)) {
		warned.add(regex);
		console.warn(`[Fuse] tokenize regex ${regex} lacks the global flag; only the first match per text will be returned. Add the 'g' flag.`);
	}
}
function resolveTokenize(tokenize) {
	if (typeof tokenize === "function") {
		let validated = false;
		return (text) => {
			const result = tokenize(text);
			if (!validated) {
				validated = true;
				if (!Array.isArray(result) || result.some((t) => typeof t !== "string")) throw new Error(`[Fuse] tokenize function must return string[]; received ${Array.isArray(result) ? "array containing non-strings" : typeof result}.`);
			}
			return result;
		};
	}
	if (tokenize instanceof RegExp) {
		if (!tokenize.global) warnNonGlobal(tokenize);
		return (text) => text.match(tokenize) || [];
	}
	return (text) => text.match(DEFAULT_TOKEN) || [];
}
function createAnalyzer({ isCaseSensitive = false, ignoreDiacritics = false, tokenize } = {}) {
	const tokenizeFn = resolveTokenize(tokenize);
	return { tokenize(text) {
		if (!isCaseSensitive) text = text.toLowerCase();
		if (ignoreDiacritics) text = stripDiacritics(text);
		return tokenizeFn(text);
	} };
}
var TokenSearch = class {
	static condition(_, options) {
		return options.useTokenSearch;
	}
	constructor(pattern, options) {
		this.options = options;
		this.analyzer = createAnalyzer({
			isCaseSensitive: options.isCaseSensitive,
			ignoreDiacritics: options.ignoreDiacritics,
			tokenize: options.tokenize
		});
		const queryTerms = this.analyzer.tokenize(pattern);
		const { df, fieldCount } = options._invertedIndex;
		this.termSearchers = [];
		this.idfWeights = [];
		for (const term of queryTerms) {
			this.termSearchers.push(new BitapSearch(term, {
				location: options.location,
				threshold: options.threshold,
				distance: options.distance,
				includeMatches: options.includeMatches,
				findAllMatches: options.findAllMatches,
				minMatchCharLength: options.minMatchCharLength,
				isCaseSensitive: options.isCaseSensitive,
				ignoreDiacritics: options.ignoreDiacritics,
				ignoreLocation: true
			}));
			const docFreq = df.get(term) || 0;
			const idf = Math.log(1 + (fieldCount - docFreq + .5) / (docFreq + .5));
			this.idfWeights.push(idf);
		}
		this.combineAll = options.tokenMatch === "all";
		this.numTerms = this.termSearchers.length;
		this.useMask = this.numTerms <= 31;
	}
	searchIn(text) {
		if (!this.termSearchers.length) return {
			isMatch: false,
			score: 1
		};
		const allIndices = [];
		let weightedScore = 0;
		let maxPossibleScore = 0;
		let matchedCount = 0;
		let matchedMask = 0;
		const matchedTerms = this.combineAll && !this.useMask ? /* @__PURE__ */ new Set() : null;
		for (let i = 0; i < this.termSearchers.length; i++) {
			const result = this.termSearchers[i].searchIn(text);
			const idf = this.idfWeights[i];
			maxPossibleScore += idf;
			if (result.isMatch) {
				matchedCount++;
				weightedScore += idf * (1 - result.score);
				if (result.indices) allIndices.push(...result.indices);
				if (this.combineAll) if (this.useMask) matchedMask |= 1 << i;
				else matchedTerms.add(i);
			}
		}
		if (matchedCount === 0) return {
			isMatch: false,
			score: 1
		};
		const normalized = maxPossibleScore > 0 ? 1 - weightedScore / maxPossibleScore : 0;
		const searchResult = {
			isMatch: true,
			score: Math.max(.001, normalized)
		};
		if (this.options.includeMatches && allIndices.length) searchResult.indices = mergeIndices(allIndices);
		if (this.combineAll) {
			if (this.useMask) searchResult.matchedMask = matchedMask;
			else searchResult.matchedTerms = matchedTerms;
			searchResult.termCount = this.numTerms;
		}
		return searchResult;
	}
};
function addField(index, text, docIdx, analyzer) {
	const tokens = analyzer.tokenize(text);
	if (!tokens.length) return;
	index.fieldCount++;
	index.docFieldCount.set(docIdx, (index.docFieldCount.get(docIdx) || 0) + 1);
	const distinctTerms = new Set(tokens);
	let perDocTerms = index.docTermFieldHits.get(docIdx);
	if (!perDocTerms) {
		perDocTerms = /* @__PURE__ */ new Map();
		index.docTermFieldHits.set(docIdx, perDocTerms);
	}
	for (const term of distinctTerms) {
		perDocTerms.set(term, (perDocTerms.get(term) || 0) + 1);
		index.df.set(term, (index.df.get(term) || 0) + 1);
	}
}
function ingestRecord(index, record, keyCount, analyzer) {
	const { i: docIdx, v, $: fields } = record;
	if (v !== void 0) {
		addField(index, v, docIdx, analyzer);
		return;
	}
	if (!fields) return;
	for (let keyIdx = 0; keyIdx < keyCount; keyIdx++) {
		const value = fields[keyIdx];
		if (!value) continue;
		if (Array.isArray(value)) for (const sub of value) addField(index, sub.v, docIdx, analyzer);
		else addField(index, value.v, docIdx, analyzer);
	}
}
function buildInvertedIndex(records, keyCount, analyzer) {
	const index = {
		fieldCount: 0,
		df: /* @__PURE__ */ new Map(),
		docFieldCount: /* @__PURE__ */ new Map(),
		docTermFieldHits: /* @__PURE__ */ new Map()
	};
	for (const record of records) ingestRecord(index, record, keyCount, analyzer);
	return index;
}
function addToInvertedIndex(index, record, keyCount, analyzer) {
	ingestRecord(index, record, keyCount, analyzer);
}
function removeFromInvertedIndex(index, docIdx) {
	const fieldCount = index.docFieldCount.get(docIdx);
	if (fieldCount === void 0) return;
	index.fieldCount -= fieldCount;
	index.docFieldCount.delete(docIdx);
	const perDocTerms = index.docTermFieldHits.get(docIdx);
	if (!perDocTerms) return;
	for (const [term, hits] of perDocTerms) {
		const next = (index.df.get(term) || 0) - hits;
		if (next <= 0) index.df.delete(term);
		else index.df.set(term, next);
	}
	index.docTermFieldHits.delete(docIdx);
}
function removeAndShiftInvertedIndex(index, removedIndices) {
	if (removedIndices.length === 0) return;
	const sorted = Array.from(new Set(removedIndices)).sort((a, b) => a - b);
	for (const idx of sorted) removeFromInvertedIndex(index, idx);
	const shift = (oldIdx) => {
		let lo = 0;
		let hi = sorted.length;
		while (lo < hi) {
			const mid = lo + hi >>> 1;
			if (sorted[mid] < oldIdx) lo = mid + 1;
			else hi = mid;
		}
		return oldIdx - lo;
	};
	const firstRemoved = sorted[0];
	const shiftedDocFieldCount = /* @__PURE__ */ new Map();
	for (const [oldKey, count] of index.docFieldCount) shiftedDocFieldCount.set(oldKey > firstRemoved ? shift(oldKey) : oldKey, count);
	index.docFieldCount = shiftedDocFieldCount;
	const shiftedDocTermFieldHits = /* @__PURE__ */ new Map();
	for (const [oldKey, terms] of index.docTermFieldHits) shiftedDocTermFieldHits.set(oldKey > firstRemoved ? shift(oldKey) : oldKey, terms);
	index.docTermFieldHits = shiftedDocTermFieldHits;
}
var Fuse = class {
	constructor(docs, options, index) {
		this.options = {
			...Config,
			...options
		};
		if (this.options.useExtendedSearch && false);
		if (this.options.useTokenSearch && false);
		this._keyStore = new KeyStore(this.options.keys);
		this._docs = docs;
		this._myIndex = null;
		this._invertedIndex = null;
		this.setCollection(docs, index);
		this._lastQuery = null;
		this._lastSearcher = null;
	}
	_getSearcher(query) {
		if (this._lastQuery === query) return this._lastSearcher;
		const searcher = createSearcher(query, this._invertedIndex ? {
			...this.options,
			_invertedIndex: this._invertedIndex
		} : this.options);
		this._lastQuery = query;
		this._lastSearcher = searcher;
		return searcher;
	}
	setCollection(docs, index) {
		this._docs = docs;
		if (index && !(index instanceof FuseIndex)) throw new Error(INCORRECT_INDEX_TYPE);
		this._myIndex = index || createIndex(this.options.keys, this._docs, {
			getFn: this.options.getFn,
			fieldNormWeight: this.options.fieldNormWeight
		});
		if (this.options.useTokenSearch) {
			const analyzer = createAnalyzer({
				isCaseSensitive: this.options.isCaseSensitive,
				ignoreDiacritics: this.options.ignoreDiacritics,
				tokenize: this.options.tokenize
			});
			this._invertedIndex = buildInvertedIndex(this._myIndex.records, this._myIndex.keys.length, analyzer);
		}
		this._invalidateSearcherCache();
	}
	add(doc) {
		if (!isDefined(doc)) return;
		this._docs.push(doc);
		const record = this._myIndex.add(doc, this._docs.length - 1);
		if (this._invertedIndex && record) {
			const analyzer = createAnalyzer({
				isCaseSensitive: this.options.isCaseSensitive,
				ignoreDiacritics: this.options.ignoreDiacritics,
				tokenize: this.options.tokenize
			});
			addToInvertedIndex(this._invertedIndex, record, this._myIndex.keys.length, analyzer);
		}
		this._invalidateSearcherCache();
	}
	remove(predicate = () => false) {
		const results = [];
		const indicesToRemove = [];
		for (let i = 0, len = this._docs.length; i < len; i += 1) if (predicate(this._docs[i], i)) {
			results.push(this._docs[i]);
			indicesToRemove.push(i);
		}
		if (indicesToRemove.length) {
			if (this._invertedIndex) removeAndShiftInvertedIndex(this._invertedIndex, indicesToRemove);
			const toRemove = new Set(indicesToRemove);
			this._docs = this._docs.filter((_, i) => !toRemove.has(i));
			this._myIndex.removeAll(indicesToRemove);
			this._invalidateSearcherCache();
		}
		return results;
	}
	removeAt(idx) {
		if (!Number.isInteger(idx) || idx < 0 || idx >= this._docs.length) throw new Error(INVALID_DOC_INDEX);
		if (this._invertedIndex) removeAndShiftInvertedIndex(this._invertedIndex, [idx]);
		const doc = this._docs.splice(idx, 1)[0];
		this._myIndex.removeAt(idx);
		this._invalidateSearcherCache();
		return doc;
	}
	_invalidateSearcherCache() {
		this._lastQuery = null;
		this._lastSearcher = null;
	}
	getIndex() {
		return this._myIndex;
	}
	_normalizedKeys() {
		return this._myIndex.keys.map((key) => this._keyStore.get(key.id) || key);
	}
	search(query, options) {
		const { limit = -1 } = options || {};
		const { includeMatches, includeScore, shouldSort, sortFn, ignoreFieldNorm } = this.options;
		if (isString(query) && !query.trim()) {
			let docs = this._docs.map((item, idx) => ({
				item,
				refIndex: idx
			}));
			if (isNumber(limit) && limit > -1) docs = docs.slice(0, limit);
			return docs;
		}
		const useHeap = shouldSort && isNumber(limit) && limit > 0 && isString(query);
		const comparator = sortFn;
		const stable = (a, b) => comparator(a, b) || a.idx - b.idx;
		let results;
		if (useHeap) {
			const heap = new MaxHeap(limit, stable);
			if (isString(this._docs[0])) this._searchStringList(query, {
				heap,
				ignoreFieldNorm
			});
			else this._searchObjectList(query, {
				heap,
				ignoreFieldNorm
			});
			results = heap.extractSorted();
		} else {
			results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
			computeScore(results, { ignoreFieldNorm });
			if (shouldSort) results.sort(isString(query) ? stable : comparator);
			if (isNumber(limit) && limit > -1) results = results.slice(0, limit);
		}
		return format(results, this._docs, {
			includeMatches,
			includeScore
		});
	}
	_searchStringList(query, { heap, ignoreFieldNorm } = {}) {
		const searcher = this._getSearcher(query);
		const requireAllTokens = this.options.useTokenSearch && this.options.tokenMatch === "all";
		const { records } = this._myIndex;
		const results = heap ? null : [];
		records.forEach(({ v: text, i: idx, n: norm }) => {
			if (!isDefined(text)) return;
			const searchResult = searcher.searchIn(text);
			if (searchResult.isMatch) {
				const match = {
					score: searchResult.score,
					value: text,
					norm,
					indices: searchResult.indices
				};
				if (requireAllTokens) {
					match.matchedMask = searchResult.matchedMask;
					match.matchedTerms = searchResult.matchedTerms;
					match.termCount = searchResult.termCount;
				}
				const matches = [match];
				if (!requireAllTokens || this._coversAllTokens(matches)) {
					const result = {
						item: text,
						idx,
						matches
					};
					if (heap) {
						result.score = computeScoreSingle(result.matches, { ignoreFieldNorm });
						heap.insert(result);
					} else results.push(result);
				}
			}
		});
		return results;
	}
	_searchLogical(query) {
		const expression = parse(query, this.options);
		const keys = this._normalizedKeys();
		const evaluate = (node, item, idx) => {
			if (!("children" in node)) {
				const { keyId, searcher } = node;
				let matches;
				if (keyId === null) {
					matches = [];
					keys.forEach((key, keyIndex) => {
						matches.push(...this._findMatches({
							key,
							value: item[keyIndex],
							searcher
						}));
					});
				} else matches = this._findMatches({
					key: this._keyStore.get(keyId),
					value: this._myIndex.getValueForItemAtKeyId(item, keyId),
					searcher
				});
				if (matches && matches.length) return [{
					idx,
					item,
					matches
				}];
				return [];
			}
			const { children, operator } = node;
			const res = [];
			for (let i = 0, len = children.length; i < len; i += 1) {
				const child = children[i];
				const result = evaluate(child, item, idx);
				if (result.length) res.push(...result);
				else if (operator === LogicalOperator.AND) return [];
			}
			return res;
		};
		const records = this._myIndex.records;
		const resultMap = /* @__PURE__ */ new Map();
		const results = [];
		records.forEach(({ $: item, i: idx }) => {
			if (isDefined(item)) {
				const expResults = evaluate(expression, item, idx);
				if (expResults.length) {
					if (!resultMap.has(idx)) {
						resultMap.set(idx, {
							idx,
							item,
							matches: []
						});
						results.push(resultMap.get(idx));
					}
					expResults.forEach(({ matches }) => {
						resultMap.get(idx).matches.push(...matches);
					});
				}
			}
		});
		return results;
	}
	_searchObjectList(query, { heap, ignoreFieldNorm } = {}) {
		const searcher = this._getSearcher(query);
		const requireAllTokens = this.options.useTokenSearch && this.options.tokenMatch === "all";
		const { records } = this._myIndex;
		const keys = this._normalizedKeys();
		const results = heap ? null : [];
		records.forEach(({ $: item, i: idx }) => {
			if (!isDefined(item)) return;
			const matches = [];
			let anyKeyFailed = false;
			let hasInverse = false;
			keys.forEach((key, keyIndex) => {
				const keyMatches = this._findMatches({
					key,
					value: item[keyIndex],
					searcher
				});
				if (keyMatches.length) {
					matches.push(...keyMatches);
					if (keyMatches[0].hasInverse) hasInverse = true;
				} else anyKeyFailed = true;
			});
			if (hasInverse && anyKeyFailed) return;
			if (matches.length && (!requireAllTokens || this._coversAllTokens(matches))) {
				const result = {
					idx,
					item,
					matches
				};
				if (heap) {
					result.score = computeScoreSingle(result.matches, { ignoreFieldNorm });
					heap.insert(result);
				} else results.push(result);
			}
		});
		return results;
	}
	_findMatches({ key, value, searcher }) {
		if (!isDefined(value)) return [];
		const matches = [];
		if (isArray(value)) value.forEach(({ v: text, i: idx, n: norm }) => {
			if (!isDefined(text)) return;
			const searchResult = searcher.searchIn(text);
			if (searchResult.isMatch) {
				const match = {
					score: searchResult.score,
					key,
					value: text,
					idx,
					norm,
					indices: searchResult.indices,
					hasInverse: searchResult.hasInverse
				};
				if (searchResult.termCount !== void 0) {
					match.matchedMask = searchResult.matchedMask;
					match.matchedTerms = searchResult.matchedTerms;
					match.termCount = searchResult.termCount;
				}
				matches.push(match);
			}
		});
		else {
			const { v: text, n: norm } = value;
			const searchResult = searcher.searchIn(text);
			if (searchResult.isMatch) {
				const match = {
					score: searchResult.score,
					key,
					value: text,
					norm,
					indices: searchResult.indices,
					hasInverse: searchResult.hasInverse
				};
				if (searchResult.termCount !== void 0) {
					match.matchedMask = searchResult.matchedMask;
					match.matchedTerms = searchResult.matchedTerms;
					match.termCount = searchResult.termCount;
				}
				matches.push(match);
			}
		}
		return matches;
	}
	_coversAllTokens(matches) {
		const termCount = matches.length ? matches[0].termCount : void 0;
		if (termCount === void 0) return true;
		if (termCount <= 31) {
			let coverage = 0;
			for (let i = 0; i < matches.length; i++) coverage |= matches[i].matchedMask || 0;
			return coverage === 2 ** termCount - 1;
		}
		const coverage = /* @__PURE__ */ new Set();
		for (let i = 0; i < matches.length; i++) {
			const terms = matches[i].matchedTerms;
			if (terms) for (const t of terms) coverage.add(t);
		}
		return coverage.size === termCount;
	}
};
Fuse.version = "7.5.0";
Fuse.createIndex = createIndex;
Fuse.parseIndex = parseIndex;
Fuse.config = Config;
Fuse.match = function(pattern, text, options) {
	if (options && options.useTokenSearch) throw new Error(FUSE_MATCH_TOKEN_SEARCH_UNSUPPORTED);
	return createSearcher(pattern, {
		...Config,
		...options
	}).searchIn(text);
};
Fuse.parseQuery = parse;
register(ExtendedSearch);
register(TokenSearch);
Fuse.use = function(...plugins) {
	plugins.forEach((plugin) => register(plugin));
};
var entry_default = Fuse;
//#endregion
//#region ../../../../../@slidev/title-renderer.md?vue&type=script&setup=true&lang.ts
var _hoisted_1$14 = { key: 0 };
var _hoisted_2$8 = { key: 1 };
var _hoisted_3$6 = { key: 2 };
var _hoisted_4$5 = { key: 3 };
var _hoisted_5$3 = { key: 4 };
var _hoisted_6$1 = { key: 5 };
var _hoisted_7$1 = { key: 6 };
var _hoisted_8$1 = { key: 7 };
var _hoisted_9$1 = { key: 8 };
var _hoisted_10$1 = { key: 9 };
var _hoisted_11$1 = { key: 10 };
var _hoisted_12$1 = { key: 11 };
var _hoisted_13 = { key: 12 };
var _hoisted_14 = { key: 13 };
var _hoisted_15 = { key: 14 };
var _hoisted_16 = { key: 15 };
var _hoisted_17 = { key: 16 };
var _hoisted_18 = { key: 17 };
var _hoisted_19 = { key: 18 };
var _hoisted_20 = { key: 19 };
var _hoisted_21 = { key: 20 };
var _hoisted_22 = { key: 21 };
var _hoisted_23 = { key: 22 };
var _hoisted_24 = { key: 23 };
var _hoisted_25 = { key: 24 };
var _hoisted_26 = { key: 25 };
var _hoisted_27 = { key: 26 };
var _hoisted_28 = { key: 27 };
var _hoisted_29 = { key: 28 };
var _hoisted_30 = { key: 29 };
var _hoisted_31 = { key: 30 };
var _hoisted_32 = { key: 31 };
var _hoisted_33 = { key: 32 };
var _hoisted_34 = { key: 33 };
var _hoisted_35 = { key: 34 };
var _hoisted_36 = { key: 35 };
var _hoisted_37 = { key: 36 };
var _hoisted_38 = { key: 37 };
var _hoisted_39 = { key: 38 };
//#endregion
//#region ../../../../../@slidev/title-renderer.md
var title_renderer_default = /* @__PURE__ */ defineComponent({
	__name: "title-renderer",
	props: { no: {} },
	setup(__props) {
		const props = __props;
		const { $page } = useSlideContext();
		const no = computed(() => +(props.no ?? $page.value));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [no.value === 1 ? (openBlock(), createElementBlock("p", _hoisted_1$14, "undefined")) : no.value === 2 ? (openBlock(), createElementBlock("p", _hoisted_2$8, "undefined")) : no.value === 3 ? (openBlock(), createElementBlock("p", _hoisted_3$6, "undefined")) : no.value === 4 ? (openBlock(), createElementBlock("p", _hoisted_4$5, "undefined")) : no.value === 5 ? (openBlock(), createElementBlock("p", _hoisted_5$3, "undefined")) : no.value === 6 ? (openBlock(), createElementBlock("p", _hoisted_6$1, "undefined")) : no.value === 7 ? (openBlock(), createElementBlock("p", _hoisted_7$1, "undefined")) : no.value === 8 ? (openBlock(), createElementBlock("p", _hoisted_8$1, "undefined")) : no.value === 9 ? (openBlock(), createElementBlock("p", _hoisted_9$1, "undefined")) : no.value === 10 ? (openBlock(), createElementBlock("p", _hoisted_10$1, "undefined")) : no.value === 11 ? (openBlock(), createElementBlock("p", _hoisted_11$1, "undefined")) : no.value === 12 ? (openBlock(), createElementBlock("p", _hoisted_12$1, "undefined")) : no.value === 13 ? (openBlock(), createElementBlock("p", _hoisted_13, "undefined")) : no.value === 14 ? (openBlock(), createElementBlock("p", _hoisted_14, "undefined")) : no.value === 15 ? (openBlock(), createElementBlock("p", _hoisted_15, "undefined")) : no.value === 16 ? (openBlock(), createElementBlock("p", _hoisted_16, "undefined")) : no.value === 17 ? (openBlock(), createElementBlock("p", _hoisted_17, "undefined")) : no.value === 18 ? (openBlock(), createElementBlock("p", _hoisted_18, "undefined")) : no.value === 19 ? (openBlock(), createElementBlock("p", _hoisted_19, "undefined")) : no.value === 20 ? (openBlock(), createElementBlock("p", _hoisted_20, "undefined")) : no.value === 21 ? (openBlock(), createElementBlock("p", _hoisted_21, "undefined")) : no.value === 22 ? (openBlock(), createElementBlock("p", _hoisted_22, "undefined")) : no.value === 23 ? (openBlock(), createElementBlock("p", _hoisted_23, "undefined")) : no.value === 24 ? (openBlock(), createElementBlock("p", _hoisted_24, "undefined")) : no.value === 25 ? (openBlock(), createElementBlock("p", _hoisted_25, "undefined")) : no.value === 26 ? (openBlock(), createElementBlock("p", _hoisted_26, "undefined")) : no.value === 27 ? (openBlock(), createElementBlock("p", _hoisted_27, "undefined")) : no.value === 28 ? (openBlock(), createElementBlock("p", _hoisted_28, "undefined")) : no.value === 29 ? (openBlock(), createElementBlock("p", _hoisted_29, "undefined")) : no.value === 30 ? (openBlock(), createElementBlock("p", _hoisted_30, "undefined")) : no.value === 31 ? (openBlock(), createElementBlock("p", _hoisted_31, "undefined")) : no.value === 32 ? (openBlock(), createElementBlock("p", _hoisted_32, "undefined")) : no.value === 33 ? (openBlock(), createElementBlock("p", _hoisted_33, "undefined")) : no.value === 34 ? (openBlock(), createElementBlock("p", _hoisted_34, "undefined")) : no.value === 35 ? (openBlock(), createElementBlock("p", _hoisted_35, "undefined")) : no.value === 36 ? (openBlock(), createElementBlock("p", _hoisted_36, "undefined")) : no.value === 37 ? (openBlock(), createElementBlock("p", _hoisted_37, "undefined")) : no.value === 38 ? (openBlock(), createElementBlock("p", _hoisted_38, "undefined")) : no.value === 39 ? (openBlock(), createElementBlock("p", _hoisted_39, "undefined")) : createCommentVNode("v-if", true)]);
		};
	}
});
//#endregion
//#region node_modules/@slidev/client/internals/Goto.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$13 = {
	class: "bg-main transform",
	shadow: "~",
	p: "x-4 y-2",
	border: "~ transparent rounded dark:main"
};
var _hoisted_2$7 = ["value", "disabled"];
var _hoisted_3$5 = {
	table: "",
	"w-full": "",
	"border-collapse": ""
};
var _hoisted_4$4 = ["border", "onClick"];
var _hoisted_5$2 = {
	"text-right": "",
	op50: "",
	"text-sm": "",
	"table-cell": "",
	"py-2": "",
	"pl-4": "",
	"pr-3": "",
	"vertical-middle": ""
};
//#endregion
//#region node_modules/@slidev/client/internals/Goto.vue
var Goto_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "Goto",
	setup(__props) {
		const container = ref();
		const input = ref();
		const list = ref();
		const items = ref();
		const text = ref("");
		const selectedIndex = ref(0);
		const { go, slides } = useNav();
		function notNull(value) {
			return value !== null && value !== void 0;
		}
		const fuse = computed(() => new entry_default(slides.value.map((i) => i.meta?.slide).filter(notNull), {
			keys: ["no", "title"],
			threshold: .3,
			shouldSort: true,
			minMatchCharLength: 1
		}));
		const path = computed(() => text.value.startsWith("/") ? text.value.substring(1) : text.value);
		const result = computed(() => path.value ? fuse.value.search(path.value).map((result) => result.item) : []);
		const valid = computed(() => !!result.value.length);
		function goTo() {
			if (valid.value) {
				const item = result.value.at(selectedIndex.value || 0);
				if (item) go(item.no);
			}
			close();
		}
		function close() {
			text.value = "";
			showGotoDialog.value = false;
		}
		function focusDown(event) {
			event.preventDefault();
			selectedIndex.value++;
			if (selectedIndex.value >= result.value.length) selectedIndex.value = 0;
			scroll();
		}
		function focusUp(event) {
			event.preventDefault();
			selectedIndex.value--;
			if (selectedIndex.value <= -2) selectedIndex.value = result.value.length - 1;
			scroll();
		}
		function scroll() {
			const item = items.value?.[selectedIndex.value];
			if (item && list.value) {
				if (item.offsetTop + item.offsetHeight > list.value.offsetHeight + list.value.scrollTop) list.value.scrollTo({
					behavior: "smooth",
					top: item.offsetTop + item.offsetHeight - list.value.offsetHeight + 1
				});
				else if (item.offsetTop < list.value.scrollTop) list.value.scrollTo({
					behavior: "smooth",
					top: item.offsetTop
				});
			}
		}
		function updateText(event) {
			selectedIndex.value = 0;
			text.value = event.target.value;
		}
		function select(no) {
			go(no);
			close();
		}
		watch(showGotoDialog, async (show) => {
			if (show) {
				text.value = "";
				selectedIndex.value = 0;
				setTimeout(() => input.value?.focus(), 0);
			} else input.value?.blur();
		});
		watch(activeElement, () => {
			if (!container.value?.contains(activeElement.value)) close();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				id: "slidev-goto-dialog",
				ref_key: "container",
				ref: container,
				class: normalizeClass(["fixed right-5 transition-all", unref(showGotoDialog) ? "top-5" : "-top-20"]),
				"w-90": "",
				"max-w-90": "",
				"min-w-90": ""
			}, [createBaseVNode("div", _hoisted_1$13, [createBaseVNode("input", {
				id: "slidev-goto-input",
				ref_key: "input",
				ref: input,
				value: text.value,
				type: "text",
				disabled: !unref(showGotoDialog),
				class: normalizeClass(["outline-none bg-transparent", { "text-red-400": !valid.value && text.value }]),
				placeholder: "Goto...",
				onKeydown: [
					withKeys(goTo, ["enter"]),
					withKeys(close, ["escape"]),
					withKeys(focusDown, ["down"]),
					withKeys(focusUp, ["up"])
				],
				onInput: updateText
			}, null, 42, _hoisted_2$7)]), unref(showGotoDialog) && result.value.length > 0 ? (openBlock(), createElementBlock("div", {
				key: 0,
				ref_key: "list",
				ref: list,
				class: "autocomplete-list",
				shadow: "~",
				border: "~ transparent rounded dark:main"
			}, [createBaseVNode("ul", _hoisted_3$5, [(openBlock(true), createElementBlock(Fragment, null, renderList(result.value, (item, index) => {
				return openBlock(), createElementBlock("li", {
					ref_for: true,
					ref_key: "items",
					ref: items,
					key: item.id,
					role: "button",
					tabindex: "0",
					"cursor-pointer": "",
					hover: "op100",
					"table-row": "",
					"items-center": "",
					border: index === 0 ? void 0 : "t main",
					class: normalizeClass(selectedIndex.value === index ? "bg-active op100" : "op80"),
					onClick: withModifiers(($event) => select(item.no), ["stop", "prevent"])
				}, [createBaseVNode("div", _hoisted_5$2, toDisplayString(item.no), 1), createVNode(unref(title_renderer_default), {
					"table-cell": "",
					"py-2": "",
					"pr-4": "",
					"w-full": "",
					no: item.no
				}, null, 8, ["no"])], 10, _hoisted_4$4);
			}), 128))])], 512)) : createCommentVNode("v-if", true)], 2);
		};
	}
}), [["__scopeId", "data-v-42be5418"]]);
//#endregion
//#region node_modules/@slidev/client/logic/overview.ts
var min = ref(1);
var max = computed(() => slides.value.length);
var currentOverviewPage = ref(0);
var overviewRowCount = ref(0);
function prevOverviewPage() {
	if (currentOverviewPage.value > min.value) currentOverviewPage.value -= 1;
}
function nextOverviewPage() {
	if (currentOverviewPage.value < max.value) currentOverviewPage.value += 1;
}
function upOverviewPage() {
	if (currentOverviewPage.value > min.value) {
		let current = currentOverviewPage.value - overviewRowCount.value;
		if (current < min.value) current = min.value;
		currentOverviewPage.value = current;
	}
}
function downOverviewPage() {
	if (currentOverviewPage.value < max.value) {
		let current = currentOverviewPage.value + overviewRowCount.value;
		if (current > max.value) current = max.value;
		currentOverviewPage.value = current;
	}
}
//#endregion
//#region node_modules/@slidev/client/internals/QuickOverview.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$12 = ["onClick"];
var _hoisted_2$6 = { class: "text-green font-bold" };
var _hoisted_3$4 = { class: "opacity-50" };
var _hoisted_4$3 = {
	key: 1,
	class: "opacity-50"
};
var _hoisted_5$1 = { class: "fixed top-4 right-4 z-modal text-gray-400 flex flex-col items-center gap-2" };
var padding = 128;
var gap = 32;
//#endregion
//#region node_modules/@slidev/client/internals/QuickOverview.vue
var QuickOverview_default = /* @__PURE__ */ defineComponent({
	__name: "QuickOverview",
	setup(__props) {
		const { currentSlideNo, go: goSlide, slides } = useNav();
		function close() {
			showOverview.value = false;
		}
		function go(page) {
			goSlide(page);
			close();
		}
		function focus(page) {
			if (page === currentOverviewPage.value) return true;
			return false;
		}
		const xs = breakpoints.smaller("xs");
		const sm = breakpoints.smaller("sm");
		const cardWidth = computed(() => {
			if (xs.value) return windowSize.width.value - padding;
			else if (sm.value) return (windowSize.width.value - padding - gap) / 2;
			return 300;
		});
		const rowCount = computed(() => {
			return Math.floor((windowSize.width.value - padding) / (cardWidth.value + gap));
		});
		const keyboardBuffer = ref("");
		useEventListener("keypress", (e) => {
			if (!showOverview.value) {
				keyboardBuffer.value = "";
				return;
			}
			if (e.key === "Enter") {
				e.preventDefault();
				if (keyboardBuffer.value) {
					go(+keyboardBuffer.value);
					keyboardBuffer.value = "";
				} else go(currentOverviewPage.value);
				return;
			}
			const num = Number.parseInt(e.key.replace(/\D/g, ""));
			if (Number.isNaN(num)) {
				keyboardBuffer.value = "";
				return;
			}
			if (!keyboardBuffer.value && num === 0) return;
			keyboardBuffer.value += String(num);
			if (+keyboardBuffer.value > slides.value.length) {
				keyboardBuffer.value = "";
				return;
			}
			const extactMatch = slides.value.findIndex((i) => `/${i.no}` === keyboardBuffer.value);
			if (extactMatch !== -1) currentOverviewPage.value = extactMatch + 1;
			if (+keyboardBuffer.value * 10 > slides.value.length) {
				go(+keyboardBuffer.value);
				keyboardBuffer.value = "";
			}
		});
		watchEffect(() => {
			currentOverviewPage.value = currentSlideNo.value;
			overviewRowCount.value = rowCount.value;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(Transition, {
				"enter-active-class": "duration-150 ease-out",
				"enter-from-class": "opacity-0 scale-102 !backdrop-blur-0px",
				"leave-active-class": "duration-200 ease-in",
				"leave-to-class": "opacity-0 scale-102 !backdrop-blur-0px"
			}, {
				default: withCtx(() => [unref(showOverview) ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: "fixed left-0 right-0 top-0 h-[calc(var(--vh,1vh)*100)] z-modal bg-main !bg-opacity-75 p-16 py-20 overflow-y-auto backdrop-blur-5px select-none",
					onClick: close
				}, [createBaseVNode("div", {
					class: "grid gap-y-4 gap-x-8 w-full",
					style: normalizeStyle(`grid-template-columns: repeat(auto-fit,minmax(${cardWidth.value}px,1fr))`)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(slides), (route, idx) => {
					return openBlock(), createElementBlock("div", {
						key: route.no,
						class: "relative"
					}, [createBaseVNode("div", {
						class: normalizeClass(["inline-block border rounded overflow-hidden bg-main hover:border-primary transition", focus(idx + 1) || unref(currentOverviewPage) === idx + 1 ? "border-primary" : "border-main"]),
						onClick: ($event) => go(route.no)
					}, [(openBlock(), createBlock(SlideContainer_default, {
						key: route.no,
						no: route.no,
						"use-snapshot": true,
						width: cardWidth.value,
						class: "pointer-events-none"
					}, {
						default: withCtx(() => [createVNode(SlideWrapper_default, {
							"clicks-context": unref(createFixedClicks)(route, unref(CLICKS_MAX)),
							route,
							"render-context": "overview"
						}, null, 8, ["clicks-context", "route"]), createVNode(DrawingPreview_default, { page: route.no }, null, 8, ["page"])]),
						_: 2
					}, 1032, ["no", "width"]))], 10, _hoisted_1$12), createBaseVNode("div", {
						class: "absolute top-0",
						style: normalizeStyle(`left: ${cardWidth.value + 5}px`)
					}, [keyboardBuffer.value && String(idx + 1).startsWith(keyboardBuffer.value) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("span", _hoisted_2$6, toDisplayString(keyboardBuffer.value), 1), createBaseVNode("span", _hoisted_3$4, toDisplayString(String(idx + 1).slice(keyboardBuffer.value.length)), 1)], 64)) : (openBlock(), createElementBlock("span", _hoisted_4$3, toDisplayString(idx + 1), 1))], 4)]);
				}), 128))], 4)])) : createCommentVNode("v-if", true)]),
				_: 1
			}), withDirectives(createBaseVNode("div", _hoisted_5$1, [
				createVNode(IconButton_default, {
					title: "Close",
					class: "text-2xl",
					onClick: close
				}, {
					default: withCtx(() => [..._cache[0] || (_cache[0] = [createBaseVNode("div", { class: "i-carbon:close" }, null, -1)])]),
					_: 1
				}),
				(openBlock(), createBlock(IconButton_default, {
					key: 0,
					as: "a",
					title: "Slides Overview",
					target: "_blank",
					href: `${unref("/")}overview`,
					"tab-index": "-1",
					class: "text-2xl"
				}, {
					default: withCtx(() => [..._cache[1] || (_cache[1] = [createBaseVNode("div", { class: "i-carbon:list-boxes" }, null, -1)])]),
					_: 1
				}, 8, ["href"])),
				createCommentVNode("v-if", true)
			], 512), [[vShow, unref(showOverview)]])], 64);
		};
	}
});
//#endregion
//#region node_modules/@slidev/client/composables/useMousePosInSlide.ts
function useMousePosInSlide() {
	const mouse = useMouse();
	return computed(() => {
		const rect = mainSlideElement.value?.getBoundingClientRect();
		if (!rect) return void 0;
		const x = (mouse.x.value - rect.left) / rect.width * 100;
		const y = (mouse.y.value - rect.top) / rect.height * 100;
		if (x < 0 || x > 100 || y < 0 || y > 100) return void 0;
		return {
			x,
			y
		};
	});
}
//#endregion
//#region node_modules/@slidev/client/internals/LaserPointer.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$11 = {
	key: 0,
	class: "absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"
};
//#endregion
//#region node_modules/@slidev/client/internals/LaserPointer.vue
var LaserPointer_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "LaserPointer",
	setup(__props) {
		const selfMouse = useMousePosInSlide();
		const { isPresenter } = useNav();
		const laserPointer = computed(() => {
			if (!isPresenter.value && state.cursor?.style === "laser") return state.cursor;
			if (cursorStyle.value === "laser") return selfMouse.value;
			return null;
		});
		onMounted(() => {
			watchEffect(() => {
				document.body.classList.toggle("slidev-self-laser-active", cursorStyle.value === "laser" && !!laserPointer.value);
			});
		});
		return (_ctx, _cache) => {
			return laserPointer.value ? (openBlock(), createElementBlock("div", _hoisted_1$11, [createBaseVNode("div", {
				class: "laser-pointer",
				style: normalizeStyle({
					left: `${laserPointer.value.x}%`,
					top: `${laserPointer.value.y}%`
				})
			}, null, 4)])) : createCommentVNode("v-if", true);
		};
	}
}), [["__scopeId", "data-v-9cef461a"]]);
//#endregion
//#region ../../../../../@slidev/custom-nav-controls
var custom_nav_controls_default = { render: () => [] };
//#endregion
//#region node_modules/@slidev/client/internals/MenuButton.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$10 = {
	key: 0,
	class: "bg-main text-main shadow-xl absolute bottom-10 left-0 z-menu py2",
	border: "~ main rounded-md"
};
//#endregion
//#region node_modules/@slidev/client/internals/MenuButton.vue
var MenuButton_default = /* @__PURE__ */ defineComponent({
	__name: "MenuButton",
	props: {
		modelValue: { default: false },
		disabled: { default: false }
	},
	setup(__props, { emit: __emit }) {
		const value = useVModel(__props, "modelValue", __emit, { passive: true });
		const el = ref();
		onClickOutside(el, () => {
			value.value = false;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "el",
				ref: el,
				class: "flex relative"
			}, [createBaseVNode("button", {
				class: normalizeClass({ disabled: __props.disabled }),
				onClick: _cache[0] || (_cache[0] = ($event) => value.value = !unref(value))
			}, [renderSlot(_ctx.$slots, "button", {
				value: unref(value),
				class: normalizeClass({ disabled: __props.disabled })
			})], 2), (openBlock(), createBlock(KeepAlive, null, [unref(value) ? (openBlock(), createElementBlock("div", _hoisted_1$10, [renderSlot(_ctx.$slots, "menu")])) : createCommentVNode("v-if", true)], 1024))], 512);
		};
	}
});
//#endregion
//#region node_modules/@slidev/client/internals/FormCheckbox.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$9 = {
	border: "~ main rounded",
	flex: "~ gap-2 items-center",
	relative: "",
	"h-5": "",
	"w-5": "",
	"p0.5": "",
	"hover:bg-active": "",
	p1: ""
};
var _hoisted_2$5 = ["disabled"];
//#endregion
//#region node_modules/@slidev/client/internals/FormCheckbox.vue
var FormCheckbox_default = /* @__PURE__ */ defineComponent({
	__name: "FormCheckbox",
	props: /*@__PURE__*/ mergeModels({ disabled: { type: Boolean } }, {
		"modelValue": {
			type: Boolean,
			type: Boolean
		},
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const value = useModel(__props, "modelValue");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$9, [createBaseVNode("div", {
				"i-ri-check-line": "",
				class: normalizeClass(value.value ? "" : "op0")
			}, null, 2), withDirectives(createBaseVNode("input", {
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
				type: "checkbox",
				absolute: "",
				"inset-0": "",
				"opacity-10": "",
				disabled: __props.disabled
			}, null, 8, _hoisted_2$5), [[vModelCheckbox, value.value]])]);
		};
	}
});
//#endregion
//#region node_modules/@slidev/client/internals/FormItem.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$8 = {
	"w-30": "",
	"h-8": "",
	flex: "~ gap-1 items-center"
};
var _hoisted_2$4 = {
	key: 0,
	"w-1.5": "",
	"h-1.5": "",
	"bg-primary": "",
	rounded: "",
	absolute: "",
	"top-0": "",
	"right--2": ""
};
var _hoisted_3$3 = {
	key: 0,
	"w-1.5": "",
	"h-1.5": "",
	"bg-primary": "",
	rounded: "",
	absolute: "",
	"top-0": "",
	"right--2": ""
};
var _hoisted_4$2 = ["innerHTML"];
//#endregion
//#region node_modules/@slidev/client/internals/FormItem.vue
var FormItem_default = /* @__PURE__ */ defineComponent({
	__name: "FormItem",
	props: {
		title: {},
		nested: { type: [Boolean, Number] },
		div: { type: Boolean },
		description: {},
		dot: { type: Boolean }
	},
	emits: ["reset"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		function reset() {
			emit("reset");
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(__props.div ? "div" : "label"), {
				flex: "~ row gap-2 items-center",
				"select-none": ""
			}, {
				default: withCtx(() => [createBaseVNode("div", _hoisted_1$8, [__props.nested ? (openBlock(), createElementBlock("div", {
					key: 0,
					"i-ri-corner-down-right-line": "",
					op40: "",
					style: normalizeStyle(typeof __props.nested === "number" ? { marginLeft: `${__props.nested * .5 + .5}rem` } : { marginLeft: "0.25rem" })
				}, null, 4)) : createCommentVNode("v-if", true), !__props.description ? (openBlock(), createElementBlock("div", {
					key: 1,
					op75: "",
					relative: "",
					onDblclick: reset
				}, [createTextVNode(toDisplayString(__props.title) + " ", 1), __props.dot ? (openBlock(), createElementBlock("div", _hoisted_2$4)) : createCommentVNode("v-if", true)], 32)) : (openBlock(), createBlock(unref(Vt), {
					key: 2,
					distance: "10"
				}, {
					popper: withCtx(() => [createBaseVNode("div", {
						"text-sm": "",
						"min-w-90": "",
						innerHTML: __props.description
					}, null, 8, _hoisted_4$2)]),
					default: withCtx(() => [createBaseVNode("div", {
						op75: "",
						"text-right": "",
						relative: "",
						onDblclick: reset
					}, [createTextVNode(toDisplayString(__props.title) + " ", 1), __props.dot ? (openBlock(), createElementBlock("div", _hoisted_3$3)) : createCommentVNode("v-if", true)], 32)]),
					_: 1
				}))]), renderSlot(_ctx.$slots, "default")]),
				_: 3
			});
		};
	}
});
//#endregion
//#region node_modules/@slidev/client/internals/FormSlider.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$7 = {
	relative: "",
	"h-22px": ""
};
var _hoisted_2$3 = {
	key: 0,
	"pointer-events-none": "",
	absolute: "",
	"right-1": "",
	"top-0.5": "",
	"text-xs": "",
	op25: ""
};
//#endregion
//#region node_modules/@slidev/client/internals/FormSlider.vue
var FormSlider_default = /* @__PURE__ */ defineComponent({
	__name: "FormSlider",
	props: /*@__PURE__*/ mergeModels({
		max: {},
		min: {},
		step: {},
		unit: {},
		default: {}
	}, {
		"modelValue": { type: Number },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const props = __props;
		const value = useModel(__props, "modelValue");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createBaseVNode("div", {
				relative: "",
				"h-22px": "",
				"w-60": "",
				"flex-auto": "",
				onDblclick: _cache[1] || (_cache[1] = ($event) => props.default !== void 0 ? value.value = props.default : null)
			}, [withDirectives(createBaseVNode("input", mergeProps({
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
				type: "range",
				class: "slider"
			}, props, {
				absolute: "",
				"bottom-0": "",
				"left-0": "",
				"right-0": "",
				"top-0": "",
				"z-10": "",
				"w-full": "",
				"align-top": ""
			}), null, 16), [[
				vModelText,
				value.value,
				void 0,
				{ number: true }
			]]), props.default != null ? (openBlock(), createElementBlock("span", {
				key: 0,
				border: "r main",
				absolute: "",
				"bottom-0": "",
				"top-0": "",
				"h-full": "",
				"w-1px": "",
				op75: "",
				style: normalizeStyle({ left: `${(props.default - __props.min) / (__props.max - __props.min) * 100}%` })
			}, null, 4)) : createCommentVNode("v-if", true)], 32), createBaseVNode("div", _hoisted_1$7, [withDirectives(createBaseVNode("input", mergeProps({
				"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value.value = $event),
				type: "number"
			}, props, {
				border: "~ main rounded",
				m0: "",
				"w-20": "",
				"bg-gray:5": "",
				pl2: "",
				"align-top": "",
				"text-sm": ""
			}), null, 16), [[
				vModelText,
				value.value,
				void 0,
				{ number: true }
			]]), props.unit ? (openBlock(), createElementBlock("span", _hoisted_2$3, toDisplayString(props.unit), 1)) : createCommentVNode("v-if", true)])], 64);
		};
	}
});
//#endregion
//#region node_modules/@slidev/client/logic/color.ts
/**
* Predefined color map for matching the branding
*
* Accpet a 6-digit hex color string or a hue number
* Hue numbers are preferred because they will adapt better contrast in light/dark mode
*
* Hue numbers reference:
* - 0: red
* - 30: orange
* - 60: yellow
* - 120: green
* - 180: cyan
* - 240: blue
* - 270: purple
*/
var predefinedColorMap = {
	error: 0,
	client: 60,
	Light: 60,
	Dark: 240
};
function getHashColorFromString(name, opacity = 1) {
	if (predefinedColorMap[name]) return getHsla(predefinedColorMap[name], opacity);
	let hash = 0;
	for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
	return getHsla(hash % 360, opacity);
}
function getHsla(hue, opacity = 1) {
	return `hsla(${hue}, ${hue === -1 ? 0 : isDark.value ? 50 : 100}%, ${isDark.value ? 60 : 20}%, ${opacity})`;
}
//#endregion
//#region node_modules/@slidev/client/internals/Badge.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$6 = ["textContent"];
//#endregion
//#region node_modules/@slidev/client/internals/Badge.vue
var Badge_default = /* @__PURE__ */ defineComponent({
	__name: "Badge",
	props: {
		text: {},
		color: {
			type: [Boolean, Number],
			default: true
		},
		as: {},
		size: {}
	},
	setup(__props) {
		const props = __props;
		const style = computed(() => {
			if (!props.text || props.color === false) return {};
			return {
				color: typeof props.color === "number" ? getHsla(props.color) : getHashColorFromString(props.text),
				background: typeof props.color === "number" ? getHsla(props.color, .1) : getHashColorFromString(props.text, .1)
			};
		});
		const sizeClasses = computed(() => {
			switch (props.size || "sm") {
				case "sm": return "px-1.5 text-11px leading-1.6em";
			}
			return "";
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(__props.as || "span"), {
				"ws-nowrap": "",
				rounded: "",
				class: normalizeClass(sizeClasses.value),
				style: normalizeStyle(style.value)
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [createBaseVNode("span", { textContent: toDisplayString(props.text) }, null, 8, _hoisted_1$6)])]),
				_: 3
			}, 8, ["class", "style"]);
		};
	}
});
//#endregion
//#region node_modules/@slidev/client/internals/SegmentControl.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$5 = {
	flex: "~ gap-1 items-center",
	rounded: "",
	"bg-gray:4": "",
	p1: "",
	"m--1": ""
};
//#endregion
//#region node_modules/@slidev/client/internals/SegmentControl.vue
var SegmentControl_default = /* @__PURE__ */ defineComponent({
	__name: "SegmentControl",
	props: {
		options: {},
		modelValue: {}
	},
	emits: ["update:modelValue"],
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$5, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (option) => {
				return openBlock(), createBlock(Badge_default, {
					key: option.value,
					class: normalizeClass(["px-2 py-1 text-xs font-mono", option.value === __props.modelValue ? "" : "op50"]),
					color: option.value === __props.modelValue,
					"aria-pressed": option.value === __props.modelValue,
					size: "none",
					text: option.label,
					as: "button",
					onClick: ($event) => _ctx.$emit("update:modelValue", option.value)
				}, null, 8, [
					"class",
					"color",
					"aria-pressed",
					"text",
					"onClick"
				]);
			}), 128))]);
		};
	}
});
//#endregion
//#region node_modules/@slidev/client/internals/Settings.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = {
	"text-sm": "",
	"select-none": "",
	flex: "~ col gap-1",
	"min-w-30": "",
	px4: ""
};
//#endregion
//#region node_modules/@slidev/client/internals/Settings.vue
var Settings_default = /* @__PURE__ */ defineComponent({
	__name: "Settings",
	setup(__props) {
		const { isPresenter } = useNav();
		const { isSupported } = useWakeLock$1();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$4, [
				createVNode(FormItem_default, {
					title: "Invert",
					dot: unref(viewerCssFilter).invert !== unref(viewerCssFilterDefaults).invert,
					onReset: _cache[1] || (_cache[1] = ($event) => unref(viewerCssFilter).invert = unref(viewerCssFilterDefaults).invert)
				}, {
					default: withCtx(() => [createVNode(FormCheckbox_default, {
						modelValue: unref(viewerCssFilter).invert,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(viewerCssFilter).invert = $event)
					}, null, 8, ["modelValue"])]),
					_: 1
				}, 8, ["dot"]),
				createVNode(FormItem_default, {
					title: "Brightness",
					dot: unref(viewerCssFilter).brightness !== unref(viewerCssFilterDefaults).brightness,
					onReset: _cache[3] || (_cache[3] = ($event) => unref(viewerCssFilter).brightness = unref(viewerCssFilterDefaults).brightness)
				}, {
					default: withCtx(() => [createVNode(FormSlider_default, {
						modelValue: unref(viewerCssFilter).brightness,
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(viewerCssFilter).brightness = $event),
						max: 1.5,
						min: .5,
						step: .02,
						default: unref(viewerCssFilterDefaults).brightness
					}, null, 8, ["modelValue", "default"])]),
					_: 1
				}, 8, ["dot"]),
				createVNode(FormItem_default, {
					title: "Contrast",
					dot: unref(viewerCssFilter).contrast !== unref(viewerCssFilterDefaults).contrast,
					onReset: _cache[5] || (_cache[5] = ($event) => unref(viewerCssFilter).contrast = unref(viewerCssFilterDefaults).contrast)
				}, {
					default: withCtx(() => [createVNode(FormSlider_default, {
						modelValue: unref(viewerCssFilter).contrast,
						"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(viewerCssFilter).contrast = $event),
						max: 1.5,
						min: .5,
						step: .02,
						default: unref(viewerCssFilterDefaults).contrast
					}, null, 8, ["modelValue", "default"])]),
					_: 1
				}, 8, ["dot"]),
				createVNode(FormItem_default, {
					title: "Saturation",
					dot: unref(viewerCssFilter).saturate !== unref(viewerCssFilterDefaults).saturate,
					onReset: _cache[7] || (_cache[7] = ($event) => unref(viewerCssFilter).saturate = unref(viewerCssFilterDefaults).saturate)
				}, {
					default: withCtx(() => [createVNode(FormSlider_default, {
						modelValue: unref(viewerCssFilter).saturate,
						"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(viewerCssFilter).saturate = $event),
						max: 1.5,
						min: .5,
						step: .02,
						default: unref(viewerCssFilterDefaults).saturate
					}, null, 8, ["modelValue", "default"])]),
					_: 1
				}, 8, ["dot"]),
				createVNode(FormItem_default, {
					title: "Sepia",
					dot: unref(viewerCssFilter).sepia !== unref(viewerCssFilterDefaults).sepia,
					onReset: _cache[9] || (_cache[9] = ($event) => unref(viewerCssFilter).sepia = unref(viewerCssFilterDefaults).sepia)
				}, {
					default: withCtx(() => [createVNode(FormSlider_default, {
						modelValue: unref(viewerCssFilter).sepia,
						"onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(viewerCssFilter).sepia = $event),
						max: 2,
						min: -2,
						step: .02,
						default: unref(viewerCssFilterDefaults).sepia
					}, null, 8, ["modelValue", "default"])]),
					_: 1
				}, 8, ["dot"]),
				createVNode(FormItem_default, {
					title: "Hue Rotate",
					dot: unref(viewerCssFilter).hueRotate !== unref(viewerCssFilterDefaults).hueRotate,
					onReset: _cache[11] || (_cache[11] = ($event) => unref(viewerCssFilter).hueRotate = unref(viewerCssFilterDefaults).hueRotate)
				}, {
					default: withCtx(() => [createVNode(FormSlider_default, {
						modelValue: unref(viewerCssFilter).hueRotate,
						"onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(viewerCssFilter).hueRotate = $event),
						max: 180,
						min: -180,
						step: .1,
						default: unref(viewerCssFilterDefaults).hueRotate
					}, null, 8, ["modelValue", "default"])]),
					_: 1
				}, 8, ["dot"]),
				_cache[16] || (_cache[16] = createBaseVNode("div", { class: "h-1px opacity-5 bg-current w-full my2" }, null, -1)),
				createVNode(FormItem_default, { title: "Cursor Style" }, {
					default: withCtx(() => [createVNode(SegmentControl_default, {
						modelValue: unref(cursorStyle),
						"onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => isRef(cursorStyle) ? cursorStyle.value = $event : null),
						options: [{
							label: "Cursor",
							value: "cursor"
						}, {
							label: "Laser",
							value: "laser"
						}]
					}, null, 8, ["modelValue"])]),
					_: 1
				}),
				!unref(isPresenter) ? (openBlock(), createBlock(FormItem_default, {
					key: 0,
					title: "Slide Scale"
				}, {
					default: withCtx(() => [createVNode(SegmentControl_default, {
						modelValue: unref(slideScale),
						"onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => isRef(slideScale) ? slideScale.value = $event : null),
						options: [{
							label: "Fit",
							value: 0
						}, {
							label: "1:1",
							value: 1
						}]
					}, null, 8, ["modelValue"])]),
					_: 1
				})) : createCommentVNode("v-if", true),
				unref(isSupported) ? (openBlock(), createBlock(FormItem_default, {
					key: 1,
					title: "Wake Lock"
				}, {
					default: withCtx(() => [createVNode(FormCheckbox_default, {
						modelValue: unref(wakeLockEnabled),
						"onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => isRef(wakeLockEnabled) ? wakeLockEnabled.value = $event : null)
					}, null, 8, ["modelValue"])]),
					_: 1
				})) : createCommentVNode("v-if", true),
				!unref(isPresenter) ? (openBlock(), createBlock(FormItem_default, {
					key: 2,
					title: "Hide Idle Cursor"
				}, {
					default: withCtx(() => [createVNode(FormCheckbox_default, {
						modelValue: unref(hideCursorIdle),
						"onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => isRef(hideCursorIdle) ? hideCursorIdle.value = $event : null)
					}, null, 8, ["modelValue"])]),
					_: 1
				})) : createCommentVNode("v-if", true)
			]);
		};
	}
});
//#endregion
//#region node_modules/@slidev/client/internals/SelectList.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = { class: "select-list" };
var _hoisted_2$2 = { class: "title" };
var _hoisted_3$2 = { class: "items" };
var _hoisted_4$1 = ["onClick"];
//#endregion
//#region node_modules/@slidev/client/internals/SelectList.vue
var SelectList_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SelectList",
	props: {
		modelValue: { type: [
			Object,
			String,
			Number,
			Boolean
		] },
		title: { type: String },
		items: { type: Array }
	},
	setup(__props, { emit: __emit }) {
		const value = useVModel(__props, "modelValue", __emit, { passive: true });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$3, [createBaseVNode("div", _hoisted_2$2, toDisplayString(__props.title), 1), createBaseVNode("div", _hoisted_3$2, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
				return openBlock(), createElementBlock("div", {
					key: item.value,
					class: normalizeClass(["item", { active: unref(value) === item.value }]),
					onClick: () => {
						value.value = item.value;
						item.onClick?.();
					}
				}, [createBaseVNode("div", { class: normalizeClass(["i-carbon:checkmark text-green-500 mya", { "opacity-0": unref(value) !== item.value }]) }, null, 2), createBaseVNode("div", { class: normalizeClass({ "opacity-50": unref(value) !== item.value }) }, toDisplayString(item.display || item.value), 3)], 10, _hoisted_4$1);
			}), 128))])]);
		};
	}
}), [["__scopeId", "data-v-6cd69f25"]]);
//#endregion
//#region node_modules/@slidev/client/internals/SyncControls.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = {
	"text-sm": "",
	flex: "~ col gap-2"
};
var _hoisted_2$1 = {
	px3: "",
	"ws-nowrap": ""
};
var _hoisted_3$1 = {
	"font-bold": "",
	"text-primary": ""
};
//#endregion
//#region node_modules/@slidev/client/internals/SyncControls.vue
var SyncControls_default = /* @__PURE__ */ defineComponent({
	__name: "SyncControls",
	setup(__props) {
		const { isPresenter } = useNav();
		const shouldReceive = computed({
			get: () => isPresenter.value ? syncDirections.value.presenterReceive : syncDirections.value.viewerReceive,
			set(v) {
				if (isPresenter.value) syncDirections.value.presenterReceive = v;
				else syncDirections.value.viewerReceive = v;
			}
		});
		const shouldSend = computed({
			get: () => isPresenter.value ? syncDirections.value.presenterSend : syncDirections.value.viewerSend,
			set(v) {
				if (isPresenter.value) syncDirections.value.presenterSend = v;
				else syncDirections.value.viewerSend = v;
			}
		});
		const state = computed({
			get: () => {
				if (shouldReceive.value && shouldSend.value) return "bidirectional";
				if (shouldReceive.value && !shouldSend.value) return "receive-only";
				if (!shouldReceive.value && shouldSend.value) return "send-only";
				return "off";
			},
			set(v) {
				switch (v) {
					case "bidirectional":
						shouldReceive.value = true;
						shouldSend.value = true;
						break;
					case "receive-only":
						shouldReceive.value = true;
						shouldSend.value = false;
						break;
					case "send-only":
						shouldReceive.value = false;
						shouldSend.value = true;
						break;
					case "off":
						shouldReceive.value = false;
						shouldSend.value = false;
						break;
				}
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(MenuButton_default, null, {
				button: withCtx(() => [createVNode(IconButton_default, { title: "Change sync settings" }, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(["i-ph:arrow-up-bold mx--1.2 scale-x-80", shouldSend.value ? "text-green6 dark:text-green" : "op30"]) }, null, 2), createBaseVNode("div", { class: normalizeClass(["i-ph:arrow-down-bold mx--1.2 scale-x-80", shouldReceive.value ? "text-green6 dark:text-green" : "op30"]) }, null, 2)]),
					_: 1
				})]),
				menu: withCtx(() => [createBaseVNode("div", _hoisted_1$2, [
					createBaseVNode("div", _hoisted_2$1, [_cache[1] || (_cache[1] = createBaseVNode("span", { op75: "" }, "Slides navigation syncing for ", -1)), createBaseVNode("span", _hoisted_3$1, toDisplayString(unref(isPresenter) ? "presenter" : "viewer"), 1)]),
					_cache[2] || (_cache[2] = createBaseVNode("div", { class: "h-1px opacity-10 bg-current w-full" }, null, -1)),
					createVNode(SelectList_default, {
						modelValue: state.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => state.value = $event),
						title: "Sync Mode",
						items: [
							{
								value: "bidirectional",
								display: "Bidirectional Sync"
							},
							{
								value: "receive-only",
								display: "Receive Only"
							},
							{
								value: "send-only",
								display: "Send Only"
							},
							{
								value: "off",
								display: "Disable"
							}
						]
					}, null, 8, ["modelValue"])
				])]),
				_: 1
			});
		};
	}
});
//#endregion
//#region node_modules/@slidev/client/internals/NavControls.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = {
	key: 0,
	class: "i-carbon:minimize"
};
var _hoisted_2 = {
	key: 1,
	class: "i-carbon:maximize"
};
var _hoisted_3 = {
	key: 0,
	class: "i-carbon-moon"
};
var _hoisted_4 = {
	key: 1,
	class: "i-carbon-sun"
};
var _hoisted_5 = {
	key: 0,
	class: "i-carbon-magic-wand-filled color-red-600 dark:color-red-400"
};
var _hoisted_6 = {
	key: 1,
	class: "i-carbon-magic-wand"
};
var _hoisted_7 = {
	key: 0,
	class: "i-ph-cursor-fill"
};
var _hoisted_8 = {
	key: 1,
	class: "i-ph-cursor-duotone"
};
var _hoisted_9 = {
	key: 0,
	"w-2": "",
	"h-2": "",
	"bg-primary": "",
	"rounded-full": "",
	absolute: "",
	"top-0.5": "",
	"right-0.5": ""
};
var _hoisted_10 = { class: "px2 my-auto" };
var _hoisted_11 = { class: "text-lg" };
var _hoisted_12 = { class: "opacity-50 text-sm" };
//#endregion
//#region node_modules/@slidev/client/internals/NavControls.vue
var NavControls_default = /* @__PURE__ */ defineComponent({
	__name: "NavControls",
	props: { persist: { default: false } },
	setup(__props) {
		const props = __props;
		const { currentSlideNo, hasNext, hasPrev, isEmbedded, isPresenter, isPresenterAvailable, next, prev, total, enterPresenter, exitPresenter } = useNav();
		const { brush, drawingEnabled } = useDrawings();
		const md = breakpoints.smaller("md");
		const { isFullscreen, toggle: toggleFullscreen } = fullscreen;
		const root = ref();
		function onMouseLeave() {
			if (root.value && activeElement.value && root.value.contains(activeElement.value)) activeElement.value.blur();
		}
		const barStyle = computed(() => props.persist ? "text-$slidev-controls-foreground bg-transparent" : "rounded-md bg-main shadow-xl border border-main");
		const RecordingControls = shallowRef();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("nav", {
				ref_key: "root",
				ref: root,
				class: "flex flex-col"
			}, [createBaseVNode("div", {
				class: normalizeClass(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:p-2", barStyle.value]),
				onMouseleave: onMouseLeave
			}, [
				!unref(isEmbedded) ? (openBlock(), createBlock(IconButton_default, {
					key: 0,
					title: unref(isFullscreen) ? "Close fullscreen" : "Enter fullscreen",
					onClick: unref(toggleFullscreen)
				}, {
					default: withCtx(() => [unref(isFullscreen) ? (openBlock(), createElementBlock("div", _hoisted_1$1)) : (openBlock(), createElementBlock("div", _hoisted_2))]),
					_: 1
				}, 8, ["title", "onClick"])) : createCommentVNode("v-if", true),
				createVNode(IconButton_default, {
					disabled: !unref(hasPrev),
					title: "Go to previous slide",
					onClick: unref(prev)
				}, {
					default: withCtx(() => [..._cache[6] || (_cache[6] = [createBaseVNode("div", { class: "i-carbon:arrow-left" }, null, -1)])]),
					_: 1
				}, 8, ["disabled", "onClick"]),
				createVNode(IconButton_default, {
					disabled: !unref(hasNext),
					title: "Go to next slide",
					onClick: unref(next)
				}, {
					default: withCtx(() => [..._cache[7] || (_cache[7] = [createBaseVNode("div", { class: "i-carbon:arrow-right" }, null, -1)])]),
					_: 1
				}, 8, ["disabled", "onClick"]),
				!unref(isEmbedded) ? (openBlock(), createBlock(IconButton_default, {
					key: 1,
					title: "Show slide overview",
					onClick: _cache[0] || (_cache[0] = ($event) => unref(toggleOverview)())
				}, {
					default: withCtx(() => [..._cache[8] || (_cache[8] = [createBaseVNode("div", { class: "i-carbon:apps" }, null, -1)])]),
					_: 1
				})) : createCommentVNode("v-if", true),
				!unref(isColorSchemaConfigured) ? (openBlock(), createBlock(IconButton_default, {
					key: 2,
					title: unref(isDark) ? "Switch to light mode theme" : "Switch to dark mode theme",
					onClick: _cache[1] || (_cache[1] = ($event) => unref(toggleDark)())
				}, {
					default: withCtx(() => [unref(isDark) ? (openBlock(), createElementBlock("div", _hoisted_3)) : (openBlock(), createElementBlock("div", _hoisted_4))]),
					_: 1
				}, 8, ["title"])) : createCommentVNode("v-if", true),
				createVNode(VerticalDivider_default),
				!unref(isEmbedded) ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
					!unref(isPresenter) && !unref(md) && RecordingControls.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(RecordingControls)), createVNode(VerticalDivider_default)], 64)) : createCommentVNode("v-if", true),
					unref(isPresenter) ? (openBlock(), createBlock(IconButton_default, {
						key: 1,
						title: unref(cursorStyle) === "laser" ? unref(showPresenterCursor) ? "Disable laser pointer" : "Enable laser pointer" : unref(showPresenterCursor) ? "Hide presenter cursor" : "Show presenter cursor",
						active: unref(showPresenterCursor),
						onClick: _cache[2] || (_cache[2] = ($event) => unref(togglePresenterCursor)())
					}, {
						default: withCtx(() => [unref(cursorStyle) === "laser" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [unref(showPresenterCursor) ? (openBlock(), createElementBlock("div", _hoisted_5)) : (openBlock(), createElementBlock("div", _hoisted_6))], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [unref(showPresenterCursor) ? (openBlock(), createElementBlock("div", _hoisted_7)) : (openBlock(), createElementBlock("div", _hoisted_8))], 64))]),
						_: 1
					}, 8, ["title", "active"])) : createCommentVNode("v-if", true),
					!unref(configs_default).drawings.presenterOnly || unref(isPresenter) ? (openBlock(), createBlock(IconButton_default, {
						key: 2,
						class: "relative",
						title: unref(drawingEnabled) ? "Hide drawing toolbar" : "Show drawing toolbar",
						active: unref(drawingEnabled),
						onClick: _cache[3] || (_cache[3] = ($event) => drawingEnabled.value = !unref(drawingEnabled))
					}, {
						default: withCtx(() => [_cache[9] || (_cache[9] = createBaseVNode("div", { class: "i-carbon:pen" }, null, -1)), unref(drawingEnabled) ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: "absolute left-1 right-1 bottom-0 h-0.7 rounded-full",
							style: normalizeStyle({ background: unref(brush).color })
						}, null, 4)) : createCommentVNode("v-if", true)]),
						_: 1
					}, 8, ["title", "active"])) : createCommentVNode("v-if", true),
					createVNode(VerticalDivider_default),
					unref(isPresenter) ? (openBlock(), createBlock(IconButton_default, {
						key: 3,
						title: "Play Mode",
						onClick: unref(exitPresenter)
					}, {
						default: withCtx(() => [..._cache[10] || (_cache[10] = [createBaseVNode("div", { class: "i-carbon:presentation-file" }, null, -1)])]),
						_: 1
					}, 8, ["onClick"])) : createCommentVNode("v-if", true),
					unref(isPresenterAvailable) ? (openBlock(), createBlock(IconButton_default, {
						key: 4,
						title: "Presenter Mode",
						onClick: unref(enterPresenter)
					}, {
						default: withCtx(() => [..._cache[11] || (_cache[11] = [createBaseVNode("div", { class: "i-carbon:user-speaker" }, null, -1)])]),
						_: 1
					}, 8, ["onClick"])) : createCommentVNode("v-if", true),
					createCommentVNode("v-if", true)
				], 64)) : createCommentVNode("v-if", true),
				(openBlock(), createElementBlock(Fragment, { key: 4 }, [unref(configs_default).download ? (openBlock(), createBlock(IconButton_default, {
					key: 0,
					title: "Download as PDF",
					onClick: unref(downloadPDF)
				}, {
					default: withCtx(() => [..._cache[13] || (_cache[13] = [createBaseVNode("div", { class: "i-carbon:download" }, null, -1)])]),
					_: 1
				}, 8, ["onClick"])) : createCommentVNode("v-if", true)], 64)),
				createCommentVNode("v-if", true),
				!unref(isPresenter) && unref(configs_default).info && !unref(isEmbedded) ? (openBlock(), createBlock(IconButton_default, {
					key: 6,
					title: "Show info",
					onClick: _cache[5] || (_cache[5] = ($event) => showInfoDialog.value = !unref(showInfoDialog))
				}, {
					default: withCtx(() => [..._cache[15] || (_cache[15] = [createBaseVNode("div", { class: "i-carbon:information" }, null, -1)])]),
					_: 1
				})) : createCommentVNode("v-if", true),
				!unref(isEmbedded) ? (openBlock(), createElementBlock(Fragment, { key: 7 }, [
					createVNode(VerticalDivider_default),
					unref(isPresenter) ? (openBlock(), createBlock(IconButton_default, {
						key: 0,
						title: "Toggle Presenter Layout",
						class: "aspect-ratio-initial flex items-center",
						onClick: unref(togglePresenterLayout)
					}, {
						default: withCtx(() => [_cache[16] || (_cache[16] = createBaseVNode("div", { class: "i-carbon:template" }, null, -1)), createTextVNode(" " + toDisplayString(unref(presenterLayout)), 1)]),
						_: 1
					}, 8, ["onClick"])) : createCommentVNode("v-if", true),
					(openBlock(), createBlock(SyncControls_default, { key: 1 })),
					createVNode(MenuButton_default, null, {
						button: withCtx(({ value }) => [createVNode(IconButton_default, {
							title: "More Options",
							active: value
						}, {
							default: withCtx(() => [_cache[17] || (_cache[17] = createBaseVNode("div", { class: "i-carbon:settings-adjust" }, null, -1)), unref(hasViewerCssFilter) ? (openBlock(), createElementBlock("div", _hoisted_9)) : createCommentVNode("v-if", true)]),
							_: 1
						}, 8, ["active"])]),
						menu: withCtx(() => [createVNode(Settings_default)]),
						_: 1
					})
				], 64)) : createCommentVNode("v-if", true),
				!unref(isEmbedded) ? (openBlock(), createBlock(VerticalDivider_default, { key: 8 })) : createCommentVNode("v-if", true),
				createBaseVNode("div", _hoisted_10, [createBaseVNode("span", _hoisted_11, toDisplayString(unref(currentSlideNo)), 1), createBaseVNode("span", _hoisted_12, " / " + toDisplayString(unref(total)), 1)]),
				createVNode(unref(custom_nav_controls_default))
			], 34)], 512);
		};
	}
});
//#endregion
//#region node_modules/@slidev/client/composables/usePreloadImages.ts
var loaded = /* @__PURE__ */ new Set();
var loading = /* @__PURE__ */ new Set();
var RE_TRAILING_SLASH = /\/$/;
function resolveUrl(url) {
	if (url.startsWith("http") || url.startsWith("//")) return url;
	return `${"/".replace(RE_TRAILING_SLASH, "")}${url.startsWith("/") ? url : `/${url}`}`;
}
var RETRY_LIMIT = 2;
var retries = /* @__PURE__ */ new Map();
var preloadedCount = ref(0);
var totalImagesCount = ref(0);
/**
* Progress of slide-image preloading, from 0 to 1 (1 when every preloadable
* image in the deck has loaded, or when the deck has no images).
*/
var preloadProgress = computed(() => totalImagesCount.value === 0 ? 1 : preloadedCount.value / totalImagesCount.value);
computed(() => preloadProgress.value >= 1);
function preloadImage(url) {
	const resolved = resolveUrl(url);
	if (loaded.has(resolved) || loading.has(resolved)) return;
	loading.add(resolved);
	const img = new Image();
	img.onload = () => {
		loading.delete(resolved);
		loaded.add(resolved);
		retries.delete(resolved);
		preloadedCount.value = loaded.size;
	};
	img.onerror = () => {
		loading.delete(resolved);
		const attempts = retries.get(resolved) ?? 0;
		if (attempts < RETRY_LIMIT) {
			retries.set(resolved, attempts + 1);
			setTimeout(preloadImage, 1e3 * (attempts + 1), url);
		}
	};
	img.src = resolved;
}
function preloadSlideImages(route) {
	const images = route.meta?.slide?.images;
	if (images?.length) for (const url of images) preloadImage(url);
}
function usePreloadImages(currentRoute, prevRoute, nextRoute, slides) {
	const config = configs_default.preloadImages;
	if (config === false) return;
	const ahead = typeof config === "object" && config?.ahead || 3;
	watchEffect(() => {
		const all = slides.value;
		if (!all?.length) return;
		const urls = /* @__PURE__ */ new Set();
		for (const route of all) for (const url of route.meta?.slide?.images ?? []) urls.add(resolveUrl(url));
		totalImagesCount.value = urls.size;
	});
	watchEffect(() => {
		const current = currentRoute.value;
		const all = slides.value;
		if (!current || !all?.length) return;
		preloadSlideImages(current);
		preloadSlideImages(prevRoute.value);
		preloadSlideImages(nextRoute.value);
		const currentIdx = current.no - 1;
		for (let i = 1; i <= ahead; i++) {
			const idx = currentIdx + i;
			if (idx < all.length) preloadSlideImages(all[idx]);
		}
	});
	watchEffect((onCleanup) => {
		const all = slides.value;
		const timeout = setTimeout(() => {
			if (all?.length) for (const route of all) preloadSlideImages(route);
		}, 3e3);
		onCleanup(() => clearTimeout(timeout));
	});
}
//#endregion
//#region node_modules/@slidev/client/composables/useViewTransition.ts
function useViewTransition() {
	const router = useRouter();
	const isViewTransition = ref(false);
	let viewTransitionFinish;
	let viewTransitionAbort;
	const supportViewTransition = typeof document !== "undefined" && "startViewTransition" in document;
	router.beforeResolve((to, from) => {
		const fromMeta = getSlide(from.params.no)?.meta;
		const toMeta = getSlide(to.params.no)?.meta;
		const fromNo = fromMeta?.slide?.no;
		const toNo = toMeta?.slide?.no;
		if ((fromNo != null && toNo != null && fromNo !== toNo && ((fromNo < toNo ? fromMeta?.transition : toMeta?.transition) ?? configs_default.transition)) !== "view-transition") {
			isViewTransition.value = false;
			return;
		}
		if (!supportViewTransition) {
			isViewTransition.value = false;
			console.warn("View transition is not supported in your browser, fallback to normal transition.");
			return;
		}
		isViewTransition.value = true;
		const promise = new Promise((resolve, reject) => {
			viewTransitionFinish = resolve;
			viewTransitionAbort = reject;
		});
		let changeRoute;
		const ready = new Promise((resolve) => changeRoute = resolve);
		setTimeout(() => {
			document.startViewTransition(() => {
				changeRoute();
				return promise;
			});
		}, 50);
		return ready;
	});
	if (supportViewTransition) router.afterEach(() => {
		viewTransitionFinish?.();
		viewTransitionAbort?.();
	});
	return isViewTransition;
}
//#endregion
//#region node_modules/@slidev/client/internals/DragControl.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-drag-id"];
var ctrlSize = 10;
var minRemain = 10;
var ctrlClasses = `absolute border border-gray bg-gray dark:border-gray-500 dark:bg-gray-800 bg-opacity-30 `;
var moveInterval = 20;
//#endregion
//#region node_modules/@slidev/client/internals/DragControl.vue
var DragControl_default = /* @__PURE__ */ defineComponent({
	__name: "DragControl",
	props: { data: {} },
	setup(__props) {
		const { dragId, zoom, autoHeight, x0, y0, width, height, rotate, isArrow } = __props.data;
		const slideScale = inject(injectionSlideScale, ref(1));
		const scale = computed(() => slideScale.value * zoom.value);
		const { left: slideLeft, top: slideTop } = useSlideBounds();
		const minSize = isArrow ? Number.NEGATIVE_INFINITY : 40;
		const rotateRad = computed(() => rotate.value * Math.PI / 180);
		const rotateSin = computed(() => Math.sin(rotateRad.value));
		const rotateCos = computed(() => Math.cos(rotateRad.value));
		const boundingWidth = computed(() => width.value * rotateCos.value + height.value * rotateSin.value);
		const boundingHeight = computed(() => width.value * rotateSin.value + height.value * rotateCos.value);
		const boundingLeft = computed(() => x0.value - boundingWidth.value / 2);
		const boundingTop = computed(() => y0.value - boundingHeight.value / 2);
		const boundingRight = computed(() => x0.value + boundingWidth.value / 2);
		const boundingBottom = computed(() => y0.value + boundingHeight.value / 2);
		const arrowRevX = computed(() => isArrow && width.value < 0);
		const arrowRevY = computed(() => isArrow && height.value < 0);
		let currentDrag = null;
		function onPointerdown(ev) {
			if (ev.buttons !== 1) return;
			ev.preventDefault();
			ev.stopPropagation();
			const elBounds = ev.target.getBoundingClientRect();
			const cross1x = width.value * rotateCos.value - height.value * rotateSin.value;
			const cross1y = width.value * rotateSin.value + height.value * rotateCos.value;
			const cross2x = width.value * rotateCos.value + height.value * rotateSin.value;
			const cross2y = -width.value * rotateSin.value + height.value * rotateCos.value;
			currentDrag = {
				x0: x0.value,
				y0: y0.value,
				width: width.value,
				height: height.value,
				rotate: rotate.value,
				dx0: ev.clientX - (elBounds.left + elBounds.right) / 2,
				dy0: ev.clientY - (elBounds.top + elBounds.bottom) / 2,
				ltx: x0.value - cross1x / 2,
				lty: y0.value - cross1y / 2,
				rtx: x0.value + cross2x / 2,
				rty: y0.value - cross2y / 2,
				lbx: x0.value - cross2x / 2,
				lby: y0.value + cross2y / 2,
				rbx: x0.value + cross1x / 2,
				rby: y0.value + cross1y / 2
			};
			ev.currentTarget.setPointerCapture(ev.pointerId);
		}
		function onPointermove(ev) {
			if (!currentDrag || ev.buttons !== 1) return;
			ev.preventDefault();
			ev.stopPropagation();
			const x = (ev.clientX - slideLeft.value - currentDrag.dx0) / scale.value;
			const y = (ev.clientY - slideTop.value - currentDrag.dy0) / scale.value;
			x0.value = clamp(x, -boundingWidth.value / 2 + minRemain, slideWidth.value + boundingWidth.value / 2 - minRemain);
			y0.value = clamp(y, -boundingHeight.value / 2 + minRemain, slideHeight.value + boundingHeight.value / 2 - minRemain);
		}
		function onPointerup(ev) {
			if (!currentDrag) return;
			ev.preventDefault();
			ev.stopPropagation();
			currentDrag = null;
		}
		function getCornerProps(isLeft, isTop) {
			return {
				onPointerdown,
				onPointermove: (ev) => {
					if (!currentDrag || ev.buttons !== 1) return;
					ev.preventDefault();
					ev.stopPropagation();
					let x = (ev.clientX - slideLeft.value) / scale.value;
					let y = (ev.clientY - slideTop.value) / scale.value;
					const { ltx, lty, rtx, rty, lbx, lby, rbx, rby } = currentDrag;
					const ratio = currentDrag.width / currentDrag.height;
					const wMin = Math.max(minSize, minSize * ratio);
					function getSize(w1, h1) {
						if (ev.shiftKey) {
							const w = Math.max(w1, h1 * ratio, wMin);
							return {
								w,
								h: w / ratio
							};
						} else return {
							w: Math.max(w1, minSize),
							h: Math.max(h1, minSize)
						};
					}
					if (isLeft) if (isTop) {
						const { w, h } = getSize((rbx - x) * rotateCos.value + (rby - y) * rotateSin.value, -(rbx - x) * rotateSin.value + (rby - y) * rotateCos.value);
						x = rbx - w * rotateCos.value + h * rotateSin.value;
						y = rby - w * rotateSin.value - h * rotateCos.value;
					} else {
						const { w, h } = getSize((rtx - x) * rotateCos.value - (y - rty) * rotateSin.value, (rtx - x) * rotateSin.value + (y - rty) * rotateCos.value);
						x = rtx - w * rotateCos.value - h * rotateSin.value;
						y = rty - w * rotateSin.value + h * rotateCos.value;
					}
					else if (isTop) {
						const { w, h } = getSize((x - lbx) * rotateCos.value - (lby - y) * rotateSin.value, (x - lbx) * rotateSin.value + (lby - y) * rotateCos.value);
						x = lbx + w * rotateCos.value + h * rotateSin.value;
						y = lby + w * rotateSin.value - h * rotateCos.value;
					} else {
						const { w, h } = getSize((x - ltx) * rotateCos.value + (y - lty) * rotateSin.value, -(x - ltx) * rotateSin.value + (y - lty) * rotateCos.value);
						x = ltx + w * rotateCos.value - h * rotateSin.value;
						y = lty + w * rotateSin.value + h * rotateCos.value;
					}
					if (isLeft) if (isTop) {
						x0.value = (x + rbx) / 2;
						y0.value = (y + rby) / 2;
						width.value = (rbx - x) * rotateCos.value + (rby - y) * rotateSin.value;
						height.value = -(rbx - x) * rotateSin.value + (rby - y) * rotateCos.value;
					} else {
						x0.value = (x + rtx) / 2;
						y0.value = (y + rty) / 2;
						width.value = (rtx - x) * rotateCos.value - (y - rty) * rotateSin.value;
						height.value = (rtx - x) * rotateSin.value + (y - rty) * rotateCos.value;
					}
					else if (isTop) {
						x0.value = (x + lbx) / 2;
						y0.value = (y + lby) / 2;
						width.value = (x - lbx) * rotateCos.value - (lby - y) * rotateSin.value;
						height.value = (x - lbx) * rotateSin.value + (lby - y) * rotateCos.value;
					} else {
						x0.value = (x + ltx) / 2;
						y0.value = (y + lty) / 2;
						width.value = (x - ltx) * rotateCos.value + (y - lty) * rotateSin.value;
						height.value = -(x - ltx) * rotateSin.value + (y - lty) * rotateCos.value;
					}
				},
				onPointerup,
				style: {
					width: `${ctrlSize}px`,
					height: `${ctrlSize}px`,
					margin: `-${ctrlSize / 2}px`,
					left: isLeft !== arrowRevX.value ? "0" : void 0,
					right: isLeft !== arrowRevX.value ? void 0 : "0",
					top: isTop !== arrowRevY.value ? "0" : void 0,
					bottom: isTop !== arrowRevY.value ? void 0 : "0",
					cursor: isArrow ? "move" : +isLeft + +isTop === 1 ? "nesw-resize" : "nwse-resize",
					borderRadius: isArrow ? "50%" : void 0
				},
				class: ctrlClasses
			};
		}
		function getBorderProps(dir) {
			return {
				onPointerdown,
				onPointermove: (ev) => {
					if (!currentDrag || ev.buttons !== 1) return;
					ev.preventDefault();
					ev.stopPropagation();
					const x = (ev.clientX - slideLeft.value) / scale.value;
					const y = (ev.clientY - slideTop.value) / scale.value;
					const { ltx, lty, rtx, rty, lbx, lby, rbx, rby } = currentDrag;
					if (dir === "l") {
						const rx = (rtx + rbx) / 2;
						const ry = (rty + rby) / 2;
						width.value = Math.max((rx - x) * rotateCos.value + (ry - y) * rotateSin.value, minSize);
						x0.value = rx - width.value * rotateCos.value / 2;
						y0.value = ry - width.value * rotateSin.value / 2;
					} else if (dir === "r") {
						const lx = (ltx + lbx) / 2;
						const ly = (lty + lby) / 2;
						width.value = Math.max((x - lx) * rotateCos.value + (y - ly) * rotateSin.value, minSize);
						x0.value = lx + width.value * rotateCos.value / 2;
						y0.value = ly + width.value * rotateSin.value / 2;
					} else if (dir === "t") {
						const bx = (lbx + rbx) / 2;
						const by = (lby + rby) / 2;
						height.value = Math.max((by - y) * rotateCos.value - (bx - x) * rotateSin.value, minSize);
						x0.value = bx + height.value * rotateSin.value / 2;
						y0.value = by - height.value * rotateCos.value / 2;
					} else if (dir === "b") {
						const tx = (ltx + rtx) / 2;
						const ty = (lty + rty) / 2;
						height.value = Math.max((y - ty) * rotateCos.value - (x - tx) * rotateSin.value, minSize);
						x0.value = tx - height.value * rotateSin.value / 2;
						y0.value = ty + height.value * rotateCos.value / 2;
					}
				},
				onPointerup,
				style: {
					width: `${ctrlSize}px`,
					height: `${ctrlSize}px`,
					margin: `-${ctrlSize / 2}px`,
					left: dir === "l" ? "0" : dir === "r" ? `100%` : `50%`,
					top: dir === "t" ? "0" : dir === "b" ? `100%` : `50%`,
					cursor: "lr".includes(dir) ? "ew-resize" : "ns-resize",
					borderRadius: "50%"
				},
				class: ctrlClasses
			};
		}
		function getRotateProps() {
			return {
				onPointerdown,
				onPointermove: (ev) => {
					if (!currentDrag || ev.buttons !== 1) return;
					ev.preventDefault();
					ev.stopPropagation();
					const x = (ev.clientX - slideLeft.value - currentDrag.dx0) / scale.value - ctrlSize / 4;
					const y = (ev.clientY - slideTop.value - currentDrag.dy0) / scale.value - ctrlSize / 4;
					let angle = Math.atan2(y - y0.value, x - x0.value) * 180 / Math.PI + 90;
					for (const a of [
						0,
						90,
						180,
						270,
						360
					]) if (Math.abs(angle - a) < 5) {
						angle = a % 360;
						break;
					}
					rotate.value = angle;
				},
				onPointerup,
				style: {
					width: `${ctrlSize}px`,
					height: `${ctrlSize}px`,
					margin: `-${ctrlSize / 2}px`,
					left: "50%",
					top: "-20px",
					cursor: "grab",
					borderRadius: "50%"
				},
				class: ctrlClasses
			};
		}
		const intervalFnOptions = {
			immediate: false,
			immediateCallback: false
		};
		const moveLeft = useIntervalFn(() => {
			if (boundingRight.value <= minRemain) return;
			x0.value--;
		}, moveInterval, intervalFnOptions);
		const moveRight = useIntervalFn(() => {
			if (boundingLeft.value >= slideWidth.value - minRemain) return;
			x0.value++;
		}, moveInterval, intervalFnOptions);
		const moveUp = useIntervalFn(() => {
			if (boundingBottom.value <= minRemain) return;
			y0.value--;
		}, moveInterval, intervalFnOptions);
		const moveDown = useIntervalFn(() => {
			if (boundingTop.value >= slideHeight.value - minRemain) return;
			y0.value++;
		}, moveInterval, intervalFnOptions);
		watchEffect(() => {
			function shortcut(key, fn) {
				if (magicKeys[key].value) fn.resume();
				else fn.pause();
			}
			shortcut("left", moveLeft);
			shortcut("right", moveRight);
			shortcut("up", moveUp);
			shortcut("down", moveDown);
		});
		return (_ctx, _cache) => {
			return Number.isFinite(unref(x0)) ? (openBlock(), createElementBlock("div", {
				key: 0,
				id: "drag-control-container",
				"data-drag-id": unref(dragId),
				style: normalizeStyle({
					position: "absolute",
					zIndex: 100,
					left: `${unref(zoom) * (unref(x0) - Math.abs(unref(width)) / 2)}px`,
					top: `${unref(zoom) * (unref(y0) - Math.abs(unref(height)) / 2)}px`,
					width: `${unref(zoom) * Math.abs(unref(width))}px`,
					height: `${unref(zoom) * Math.abs(unref(height))}px`,
					transformOrigin: "center center",
					transform: `rotate(${unref(rotate)}deg)`
				}),
				onPointerdown,
				onPointermove,
				onPointerup
			}, [createBaseVNode("div", { class: normalizeClass(["absolute inset-0 z-nav dark:b-gray-400", unref(isArrow) ? "" : "b b-dark"]) }, [!unref(autoHeight) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
				createBaseVNode("div", normalizeProps(guardReactiveProps(getCornerProps(true, true))), null, 16),
				createBaseVNode("div", normalizeProps(guardReactiveProps(getCornerProps(false, false))), null, 16),
				!unref(isArrow) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("div", normalizeProps(guardReactiveProps(getCornerProps(true, false))), null, 16), createBaseVNode("div", normalizeProps(guardReactiveProps(getCornerProps(false, true))), null, 16)], 64)) : createCommentVNode("v-if", true)
			], 64)) : createCommentVNode("v-if", true), !unref(isArrow) ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
				createBaseVNode("div", normalizeProps(guardReactiveProps(getBorderProps("l"))), null, 16),
				createBaseVNode("div", normalizeProps(guardReactiveProps(getBorderProps("r"))), null, 16),
				!unref(autoHeight) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("div", normalizeProps(guardReactiveProps(getBorderProps("t"))), null, 16), createBaseVNode("div", normalizeProps(guardReactiveProps(getBorderProps("b"))), null, 16)], 64)) : createCommentVNode("v-if", true),
				createBaseVNode("div", normalizeProps(guardReactiveProps(getRotateProps())), null, 16),
				createBaseVNode("div", {
					class: "absolute -top-15px w-0 b b-dashed b-dark dark:b-gray-400",
					style: normalizeStyle({
						left: "calc(50% - 1px)",
						height: unref(autoHeight) ? "14px" : "10px"
					})
				}, null, 4)
			], 64)) : createCommentVNode("v-if", true)], 2)], 44, _hoisted_1)) : createCommentVNode("v-if", true);
		};
	}
});
//#endregion
//#region node_modules/@slidev/client/internals/SlidesShow.vue
var SlidesShow_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SlidesShow",
	props: { renderContext: {} },
	setup(__props) {
		const { currentSlideRoute, currentTransition, getPrimaryClicks, prevRoute, nextRoute, slides, isPrintMode, isPrintWithClicks, clicksDirection, printRange } = useNav();
		function preloadRoute(route) {
			if (route.meta.preload !== false) {
				route.meta.__preloaded = true;
				route.load();
			}
		}
		watchEffect(() => {
			preloadRoute(currentSlideRoute.value);
			preloadRoute(prevRoute.value);
			preloadRoute(nextRoute.value);
		});
		watchEffect((onCleanup) => {
			const routes = slides.value;
			const timeout = setTimeout(() => {
				routes.forEach(preloadRoute);
			}, 3e3);
			onCleanup(() => clearTimeout(timeout));
		});
		usePreloadImages(currentSlideRoute, prevRoute, nextRoute, slides);
		const hasViewTransition = useViewTransition();
		const DrawingLayer = shallowRef();
		__vitePreload(() => import("./DrawingLayer-k9oSFGPg.js").then((v) => DrawingLayer.value = v.default), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]));
		const loadedRoutes = computed(() => isPrintMode.value ? printRange.value.map((no) => slides.value[no - 1]) : slides.value.filter((r) => r.meta?.__preloaded || r === currentSlideRoute.value));
		function onAfterLeave() {
			hmrSkipTransition.value = true;
			tt();
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [
				createCommentVNode(" Global Bottom "),
				createVNode(unref(GlobalBottom)),
				createCommentVNode(" Slides "),
				(openBlock(), createBlock(resolveDynamicComponent(unref(hasViewTransition) && !unref(isPrintMode) && !unref(hmrSkipTransition) && !unref(disableTransition) ? "div" : TransitionGroup), mergeProps(unref(hmrSkipTransition) || unref(disableTransition) || unref(isPrintMode) ? {} : unref(currentTransition), {
					id: "slideshow",
					tag: "div",
					class: {
						"slidev-nav-go-forward": unref(clicksDirection) > 0,
						"slidev-nav-go-backward": unref(clicksDirection) < 0
					},
					onAfterLeave
				}), {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(loadedRoutes.value, (route) => {
						return withDirectives((openBlock(), createBlock(SlideWrapper_default, {
							key: route.no,
							"clicks-context": unref(isPrintMode) && !unref(isPrintWithClicks) ? unref(createFixedClicks)(route, unref(CLICKS_MAX)) : unref(getPrimaryClicks)(route),
							route,
							"render-context": __props.renderContext
						}, null, 8, [
							"clicks-context",
							"route",
							"render-context"
						])), [[vShow, route === unref(currentSlideRoute)]]);
					}), 128))]),
					_: 1
				}, 16, ["class"])),
				unref(activeDragElement) ? (openBlock(), createBlock(DragControl_default, {
					key: 0,
					data: unref(activeDragElement)
				}, null, 8, ["data"])) : createCommentVNode("v-if", true),
				createCommentVNode(" Global Top "),
				createVNode(unref(GlobalTop)),
				DrawingLayer.value ? (openBlock(), createBlock(unref(DrawingLayer), { key: 1 })) : createCommentVNode("v-if", true)
			], 64);
		};
	}
}), [["__scopeId", "data-v-7fa97661"]]);
//#endregion
//#region node_modules/.slidev/virtual/import-glob.3beb8fa93b.ts
var import_glob_3beb8fa93b_default = /* #__PURE__ */ Object.assign({});
//#endregion
//#region node_modules/.slidev/virtual/import-glob.10785149a7.ts
var import_glob_10785149a7_default = /* #__PURE__ */ Object.assign({});
//#endregion
//#region ../../../../../@slidev/setups/shortcuts
var shortcuts_default = [Object.values(import_glob_3beb8fa93b_default)[0], Object.values(import_glob_10785149a7_default)[0]].filter(Boolean);
//#endregion
//#region node_modules/@slidev/client/setup/shortcuts.ts
function setupShortcuts() {
	const { go, goFirst, goLast, next, nextSlide, prev, prevSlide } = useNav();
	const { drawingEnabled } = useDrawings();
	const { escape, space, shift, left, right, up, down, enter, d, g, o, "`": backtick } = magicKeys;
	const context = {
		next,
		prev,
		nextSlide,
		prevSlide,
		go,
		goFirst,
		goLast,
		downloadPDF,
		toggleDark,
		toggleOverview,
		toggleDrawing: () => drawingEnabled.value = !drawingEnabled.value,
		escapeOverview: () => showOverview.value = false,
		showGotoDialog: () => showGotoDialog.value = !showGotoDialog.value
	};
	const navViaArrowKeys = and(not(showOverview), not(activeDragElement));
	let shortcuts = [
		{
			name: "next_space",
			key: and(space, not(shift)),
			fn: next,
			autoRepeat: true
		},
		{
			name: "prev_space",
			key: and(space, shift),
			fn: prev,
			autoRepeat: true
		},
		{
			name: "next_right",
			key: and(right, not(shift), navViaArrowKeys),
			fn: next,
			autoRepeat: true
		},
		{
			name: "prev_left",
			key: and(left, not(shift), navViaArrowKeys),
			fn: prev,
			autoRepeat: true
		},
		{
			name: "next_page_key",
			key: "pageDown",
			fn: next,
			autoRepeat: true
		},
		{
			name: "prev_page_key",
			key: "pageUp",
			fn: prev,
			autoRepeat: true
		},
		{
			name: "next_down",
			key: and(down, navViaArrowKeys),
			fn: nextSlide,
			autoRepeat: true
		},
		{
			name: "prev_up",
			key: and(up, navViaArrowKeys),
			fn: prevSlide,
			autoRepeat: true
		},
		{
			name: "next_shift",
			key: and(right, shift),
			fn: nextSlide,
			autoRepeat: true
		},
		{
			name: "prev_shift",
			key: and(left, shift),
			fn: prevSlide,
			autoRepeat: true
		},
		{
			name: "toggle_dark",
			key: and(d, not(drawingEnabled)),
			fn: toggleDark
		},
		{
			name: "toggle_overview",
			key: and(or(o, backtick), not(drawingEnabled)),
			fn: toggleOverview
		},
		{
			name: "hide_overview",
			key: and(escape, not(drawingEnabled)),
			fn: () => showOverview.value = false
		},
		{
			name: "goto",
			key: and(g, not(drawingEnabled)),
			fn: () => showGotoDialog.value = !showGotoDialog.value
		},
		{
			name: "next_overview",
			key: and(right, showOverview),
			fn: nextOverviewPage
		},
		{
			name: "prev_overview",
			key: and(left, showOverview),
			fn: prevOverviewPage
		},
		{
			name: "up_overview",
			key: and(up, showOverview),
			fn: upOverviewPage
		},
		{
			name: "down_overview",
			key: and(down, showOverview),
			fn: downOverviewPage
		},
		{
			name: "goto_from_overview",
			key: and(enter, showOverview),
			fn: () => {
				go(currentOverviewPage.value);
				showOverview.value = false;
			}
		}
	];
	const baseShortcutNames = new Set(shortcuts.map((s) => s.name));
	for (const setup of shortcuts_default) shortcuts = setup(context, shortcuts);
	if (shortcuts.filter((s) => s.name && baseShortcutNames.has(s.name)).length === 0) {
		const message = [
			"========== WARNING ==========",
			"defineShortcutsSetup did not return any of the base shortcuts.",
			"See https://sli.dev/custom/config-shortcuts.html for migration.",
			"If it is intentional, return at least one shortcut with one of the base names (e.g. name:\"goto\")."
		].join("\n\n");
		alert(message);
		console.warn(message);
	}
	return shortcuts;
}
//#endregion
//#region node_modules/@slidev/client/logic/shortcuts.ts
function registerShortcuts() {
	const { isPrintMode } = useNav();
	const enabled = and(not(isInputting), not(isOnFocus), not(isPrintMode), shortcutsEnabled, not(shortcutsLocked));
	const allShortcuts = setupShortcuts();
	new Map(allShortcuts.map((options) => [options.key, options])).forEach((options) => {
		if (options.fn) shortcut(options.key, options.fn, options.autoRepeat);
	});
	strokeShortcut("f", () => fullscreen.toggle());
	function shortcut(key, fn, autoRepeat = false) {
		if (typeof key === "string") key = magicKeys[key];
		const source = and(key, enabled);
		let count = 0;
		let timer;
		const trigger = () => {
			clearTimeout(timer);
			if (!source.value) {
				count = 0;
				return;
			}
			if (autoRepeat) {
				timer = setTimeout(trigger, Math.max(1e3 - count * 250, 150));
				count++;
			}
			fn();
		};
		return watch(source, trigger, { flush: "sync" });
	}
	function strokeShortcut(key, fn) {
		return onKeyStroke(key, (ev) => {
			if (!enabled.value) return;
			if (!ev.repeat) fn();
		});
	}
}
//#endregion
export { LaserPointer_default as a, Goto_default as c, useWakeLock as d, useSwipeControls as f, SegmentControl_default as i, ContextMenu_default as l, SlidesShow_default as n, useMousePosInSlide as o, NavControls_default as r, QuickOverview_default as s, registerShortcuts as t, onContextMenu as u };
