const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/modules/file-saver-Bjz2jPFz.js","assets/rolldown-runtime-B-1-B7_t.js","assets/slidev/entry-CvkNEyBE.js","assets/modules/shiki-V2eyNvW-.js","assets/modules/shiki-ipjRpIB4.css","assets/_plugin-vue_export-helper-BOaGB7Aw.js","assets/entry-B9yqiw_R.css","assets/slidev/overview-Cu_NZke1.js","assets/modules/vue-j1EMyUNA.js","assets/useNav-BevVU56q.js","assets/slidev/context-00fxQF-V.js","assets/slidev/IconButton-CNvL6I62.js","assets/slidev/NoteDisplay-C_9E7gEd.js","assets/NoteDisplay-DRfXbFOS.css","assets/modules/unplugin-icons-d091GBOg.js","assets/SlideWrapper-DdpLlR2W.js","assets/syncState-CyBmabvC.js","assets/useDrawings-Cz-PkJHi.js","assets/SlideWrapper-j2F1aOIy.css","assets/slidev/NoteEditable-CgD0RNJD.js","assets/overview-DYYNwpSi.css","assets/slidev/notes-CVImN9Zw.js","assets/slidev/Modal-5x7kcYR_.js","assets/slidev/TimerBar-CIeAoV39.js","assets/slidev/notes-edit-BSA0bZVR.js","assets/slidev/presenter-DW2mrOIi.js","assets/slidev/DrawingControls-CmGZrRSa.js","assets/slidev/VerticalDivider-Dx1O8vyp.js","assets/DrawingControls-3Mo8NUwa.css","assets/slidev/shortcuts-Bp4nIP1J.js","assets/shortcuts-Dowx5Q5W.css","assets/presenter-B577ri7-.css","assets/slidev/play-CXY2vzex.js","assets/play-BJul2ati.css","assets/slidev/404-CKhF6Qqu.js","assets/404-BQm5HUGB.css"])))=>i.map(i=>d[i]);
import { r as __toESM } from "./rolldown-runtime-B-1-B7_t.js";
import { C as defineComponent, D as hasInjectionContext, J as watchEffect, L as openBlock, M as onActivated, N as onBeforeUnmount, O as inject, P as onDeactivated, V as resolveComponent, at as reactive, et as getCurrentScope, h as computed, ht as unref, mt as toValue, nt as isRef, p as Fragment, q as watch, s as createApp, st as ref, t as TwoslashFloatingVue, ut as shallowRef, v as createCommentVNode, w as getCurrentInstance, x as createVNode, y as createElementBlock } from "./modules/shiki-V2eyNvW-.js";
import { A as isClient, B as useRouter, I as useToggle, L as createRouter, R as createWebHistory, V as _defineProperty, b as usePreferredDark, d as useElementBounding, h as useLocalStorage, i as directive, k as injectLocal, o as onClickOutside, w as useWindowFocus, x as useStyleTag } from "./modules/vue-j1EMyUNA.js";
import { A as slideScale, B as getSlidePath, G as __vitePreload, J as slideHeight, Q as configs_default, R as windowSize, W as createFixedClicks, X as slidesTitle, Y as slideWidth, Z as themeVars, c as editorHeight, h as isEditorVertical, j as syncDirections, l as editorWidth, n as activeDragElement, p as hmrSkipTransition, t as useNav, w as showEditor, z as getSlide } from "./useNav-BevVU56q.js";
import { a as CLASS_VCLICK_HIDDEN, c as CLASS_VCLICK_TARGET, d as injectionClicksContext, f as injectionCurrentPage, g as injectionSlideElement, i as CLASS_VCLICK_CURRENT, m as injectionRenderContext, o as CLASS_VCLICK_HIDDEN_EXP, p as injectionFrontmatter, r as CLASS_VCLICK_ANIMATION_PREFIX, s as CLASS_VCLICK_PRIOR, u as TRUST_ORIGINS, y as injectionSlidevContext } from "./slidev/context-00fxQF-V.js";
import { n as define, r as randId, t as createSyncState } from "./syncState-CyBmabvC.js";
//#region \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
ref(false);
ref(false);
//#endregion
//#region node_modules/unhead/dist/shared/unhead.1eoQpFT1.mjs
var DupeableTags = /* @__PURE__ */ new Set([
	"link",
	"style",
	"script",
	"noscript"
]);
var TagsWithInnerContent = /* @__PURE__ */ new Set([
	"title",
	"titleTemplate",
	"script",
	"style",
	"noscript"
]);
var HasElementTags = /* @__PURE__ */ new Set([
	"base",
	"meta",
	"link",
	"style",
	"script",
	"noscript"
]);
var ValidHeadTags = /* @__PURE__ */ new Set([
	"title",
	"base",
	"htmlAttrs",
	"bodyAttrs",
	"meta",
	"link",
	"style",
	"script",
	"noscript"
]);
var UniqueTags = /* @__PURE__ */ new Set([
	"base",
	"title",
	"titleTemplate",
	"bodyAttrs",
	"htmlAttrs",
	"templateParams"
]);
var TagConfigKeys = /* @__PURE__ */ new Set([
	"key",
	"tagPosition",
	"tagPriority",
	"tagDuplicateStrategy",
	"innerHTML",
	"textContent",
	"processTemplateParams"
]);
var UsesMergeStrategy = /* @__PURE__ */ new Set([
	"templateParams",
	"htmlAttrs",
	"bodyAttrs"
]);
var MetaTagsArrayable = /* @__PURE__ */ new Set([
	"theme-color",
	"google-site-verification",
	"og",
	"article",
	"book",
	"profile",
	"twitter",
	"author"
]);
var TagPriorityAliases = {
	critical: -8,
	high: -1,
	low: 2
};
// @__NO_SIDE_EFFECTS__
function isUnsafeKey(key) {
	return key === "__proto__" || key === "constructor" || key === "prototype";
}
//#endregion
//#region node_modules/hookable/dist/index.mjs
function callHooks(hooks, args, startIndex, task) {
	for (let i = startIndex; i < hooks.length; i += 1) try {
		const result = task ? task.run(() => hooks[i](...args)) : hooks[i](...args);
		if (result && typeof result.then === "function") return Promise.resolve(result).then(() => callHooks(hooks, args, i + 1, task));
	} catch (error) {
		return Promise.reject(error);
	}
}
var HookableCore = class {
	constructor() {
		_defineProperty(this, "_hooks", void 0);
		this._hooks = {};
	}
	hook(name, fn) {
		if (!name || typeof fn !== "function") return () => {};
		this._hooks[name] = this._hooks[name] || [];
		this._hooks[name].push(fn);
		return () => {
			if (fn) {
				this.removeHook(name, fn);
				fn = void 0;
			}
		};
	}
	removeHook(name, function_) {
		const hooks = this._hooks[name];
		if (hooks) {
			const index = hooks.indexOf(function_);
			if (index !== -1) hooks.splice(index, 1);
			if (hooks.length === 0) this._hooks[name] = void 0;
		}
	}
	callHook(name, ...args) {
		const hooks = this._hooks[name];
		if (!hooks || hooks.length === 0) return;
		return callHooks(hooks, args, 0);
	}
};
//#endregion
//#region node_modules/unhead/dist/shared/unhead.Bm4Y6XQI.mjs
function createHooks(hooks) {
	const instance = new HookableCore();
	for (const key in hooks || {}) instance.hook(key, hooks[key]);
	return instance;
}
function callHook(head, hook, ctx) {
	if (!(head.hooks?._hooks?.[hook])?.length) return;
	return head.hooks?.callHook(hook, ctx);
}
//#endregion
//#region node_modules/unhead/dist/shared/unhead.CR32jx68.mjs
var META_NOREWRITE_RE = /^(?:viewport|description|keywords|robots)$/;
var META_KEY_ATTRS = [
	"name",
	"property",
	"http-equiv"
];
function isMetaArrayDupeKey(v) {
	const i = v.indexOf(":");
	if (i === -1) return false;
	const j = v.indexOf(":", i + 1);
	return MetaTagsArrayable.has(v.slice(i + 1, j === -1 ? v.length : j));
}
function dedupeKey(tag) {
	const { props, tag: t, key } = tag;
	if (UniqueTags.has(t)) return t;
	if (t === "link" && props.rel === "canonical") return "canonical";
	if (t === "link" && props.rel === "alternate") {
		if (props.hreflang) return `alternate:${props.hreflang}`;
		if (props.type) return `alternate:${props.type}:${props.href || ""}`;
	}
	if (props.charset) return "charset";
	if (t === "meta") for (const n of META_KEY_ATTRS) {
		const v = props[n];
		if (v !== void 0) return `meta:${v}${(typeof v !== "string" || !v.includes(":")) && !META_NOREWRITE_RE.test(v) && key ? `:key:${key}` : ""}`;
	}
	if (key) return `${t}:key:${key}`;
	if (props.id) return `${t}:id:${props.id}`;
	if (t === "link" && props.rel === "alternate") return `alternate:${props.href || ""}`;
	return TagsWithInnerContent.has(t) && (tag.textContent || tag.innerHTML) ? `${t}:content:${tag.textContent || tag.innerHTML}` : void 0;
}
function hashTag(tag) {
	const identity = tag._h || tag._d || tag.textContent || tag.innerHTML;
	if (identity) return identity;
	let hash = `${tag.tag}:`;
	let separator = "";
	for (const key in tag.props) if (Object.hasOwn(tag.props, key)) {
		hash += `${separator}${key}:${String(tag.props[key])}`;
		separator = ",";
	}
	return hash;
}
function walkResolver(val, resolve, key) {
	if (key === "_resolver") return val;
	if (typeof val === "function" && (!key || key !== "titleTemplate" && !key.startsWith("on"))) val = val();
	const v = resolve ? resolve(key, val) : val;
	if (Array.isArray(v)) {
		let out;
		for (let i = 0; i < v.length; i++) {
			const r = walkResolver(v[i], resolve);
			if (out) out[i] = r;
			else if (r !== v[i]) {
				out = v.slice(0, i);
				out[i] = r;
			}
		}
		return out || v;
	}
	if (v?.constructor === Object) {
		let next;
		for (const k in v) {
			const unsafe = /* @__PURE__ */ isUnsafeKey(k);
			const r = unsafe ? void 0 : walkResolver(v[k], resolve, k);
			if (!next && (unsafe || r !== v[k])) {
				next = {};
				for (const pk in v) {
					if (pk === k) break;
					next[pk] = v[pk];
				}
			}
			if (next && !unsafe) next[k] = r;
		}
		return next || v;
	}
	return v;
}
var INVALID_ATTR_NAME_RE = /[\s"'<>/=\x00-\x1F\x7F]/;
function normalizeStyleClassProps(key, value) {
	const isStyle = key === "style";
	const store = isStyle ? /* @__PURE__ */ new Map() : /* @__PURE__ */ new Set();
	const add = (v) => {
		if (!v) return;
		if (isStyle) {
			const i = v.indexOf(":");
			i > 0 && store.set(v.slice(0, i).trim(), v.slice(i + 1).trim());
		} else v.split(" ").forEach((c) => c && store.add(c));
	};
	if (typeof value === "string") (isStyle ? value.split(";") : [value]).forEach(add);
	else if (Array.isArray(value)) value.forEach(add);
	else if (value && typeof value === "object") for (const k in value) {
		const v = value[k];
		v && v !== "false" && (isStyle ? store.set(k.trim(), String(v)) : add(k));
	}
	return store;
}
function normalizeProps(tag, input) {
	tag.props = tag.props || {};
	if (!input) return tag;
	if (tag.tag === "templateParams") {
		tag.props = input;
		return tag;
	}
	const isHtmlTag = HasElementTags.has(tag.tag) || tag.tag === "htmlAttrs" || tag.tag === "bodyAttrs";
	for (const prop in input) {
		if (/* @__PURE__ */ isUnsafeKey(prop)) continue;
		const isData = prop.startsWith("data-");
		const isHtmlAttr = isHtmlTag && !TagConfigKeys.has(prop);
		const key = isHtmlAttr && !isData ? prop.toLowerCase() : prop;
		if (isHtmlAttr && (!key || INVALID_ATTR_NAME_RE.test(key))) continue;
		const value = input[prop];
		if (value === null) tag.props[key] = null;
		else if (prop === "class" || prop === "style") tag.props[prop] = normalizeStyleClassProps(prop, value);
		else if (TagConfigKeys.has(prop)) if ((prop === "textContent" || prop === "innerHTML") && typeof value === "object") {
			const type = input.type || "application/json";
			if (type.endsWith("json") || type === "speculationrules" || type === "importmap") {
				tag.props.type = input.type = type;
				tag[prop] = JSON.stringify(value);
			}
		} else tag[prop] = value;
		else if (value !== void 0) {
			const str = String(value);
			const isMeta = tag.tag === "meta" && key === "content";
			tag.props[key] = str === "true" || str === "" ? isData || isMeta ? str : true : !value && isData && str === "false" ? "false" : value;
		}
	}
	return tag;
}
function normalizeTag(tagName, _input) {
	const tag = normalizeProps({
		tag: tagName,
		props: {}
	}, typeof _input === "object" && typeof _input !== "function" ? _input : { [tagName === "script" || tagName === "noscript" || tagName === "style" ? "innerHTML" : "textContent"]: _input });
	if (tag.key && DupeableTags.has(tag.tag)) tag.props["data-hid"] = tag._h = tag.key;
	if (tag.tag === "script" && typeof tag.innerHTML === "object") {
		tag.innerHTML = JSON.stringify(tag.innerHTML);
		tag.props.type = tag.props.type || "application/json";
	}
	if (Array.isArray(tag.props.content)) {
		const tags = [];
		for (const content of tag.props.content) tags.push({
			...tag,
			props: {
				...tag.props,
				content
			}
		});
		return tags;
	}
	return tag;
}
function pushNormalizedTag(tags, tag) {
	if (Array.isArray(tag)) for (const t of tag) tags.push(t);
	else tags.push(tag);
}
function normalizeEntryToTags(input, propResolvers) {
	if (!input) return [];
	if (typeof input === "function") input = input();
	let resolve;
	if (propResolvers.length) {
		resolve = (key, val) => {
			for (let i = 0; i < propResolvers.length; i++) val = propResolvers[i](key, val);
			return val;
		};
		input = resolve(void 0, input);
	}
	input = walkResolver(input, resolve);
	const tags = [];
	for (const key in input) {
		const value = input[key];
		if (value !== void 0) if (Array.isArray(value)) for (const v of value) pushNormalizedTag(tags, normalizeTag(key, v));
		else pushNormalizedTag(tags, normalizeTag(key, value));
	}
	return tags;
}
var LT_RE = /</g;
var SCRIPT_END_RE = /<\/script/g;
var sortTags = (a, b) => a._w === b._w ? a._p - b._p : a._w - b._w;
var DEFAULT_TAG_WEIGHT = () => 100;
function isEmptyProps(props) {
	for (const _ in props) return false;
	return true;
}
var TAG_MUTATING_HOOK_RE = /^tags:|:render/;
function pushEntryTags(ctx, entries, needsClone) {
	for (const tags of entries) for (const t of tags) if (needsClone) {
		const props = { ...t.props };
		if (props.class instanceof Set) props.class = new Set(props.class);
		if (props.style instanceof Map) props.style = new Map(props.style);
		ctx.tags.push({
			...t,
			props
		});
	} else ctx.tags.push(t);
}
function valuesToTags(ctx, sortFlatMeta) {
	ctx.tags = [];
	for (const value of ctx.tagMap.values()) if (Array.isArray(value)) for (const tag of value) ctx.tags.push(tag);
	else ctx.tags.push(value);
	if (sortFlatMeta) ctx.tags.sort(sortTags);
}
function dedupeTags(ctx) {
	let hasFlatMeta = false;
	for (const next of ctx.tags.sort(sortTags)) {
		const k = next._d || hashTag(next);
		if (!k) continue;
		const prev = ctx.tagMap.get(k);
		if (!prev) {
			ctx.tagMap.set(k, next);
			continue;
		}
		if ((next.tagDuplicateStrategy || (UsesMergeStrategy.has(next.tag) ? "merge" : null) || (next.key && next.key === prev.key ? "merge" : null)) === "merge") {
			const props = { ...prev.props };
			for (const p in next.props) props[p] = p === "style" ? new Map([...prev.props.style || /* @__PURE__ */ new Map(), ...next.props[p]]) : p === "class" ? /* @__PURE__ */ new Set([...prev.props.class || [], ...next.props[p]]) : next.props[p];
			ctx.tagMap.set(k, {
				...next,
				props
			});
		} else if (next._p >> 10 === prev._p >> 10 && next.tag === "meta" && isMetaArrayDupeKey(k)) {
			ctx.tagMap.set(k, Object.assign([...Array.isArray(prev) ? prev : [prev], next], next));
			hasFlatMeta = true;
		} else if (next._w === prev._w ? next._p > prev._p : next._w < prev._w) ctx.tagMap.set(k, next);
	}
	return hasFlatMeta;
}
function resolveTitleTemplate(ctx, head) {
	const title = ctx.tagMap.get("title");
	const tpl = ctx.tagMap.get("titleTemplate");
	head._title = title?.textContent;
	if (!tpl) return;
	const fn = tpl.textContent;
	head._titleTemplate = fn;
	if (!fn) return;
	let v = typeof fn === "function" ? fn(title?.textContent) : fn;
	if (typeof v === "string" && !head.plugins.has("template-params")) v = v.replace("%s", title?.textContent || "");
	if (title) v === null ? ctx.tagMap.delete("title") : ctx.tagMap.set("title", {
		...title,
		textContent: v
	});
	else ctx.tagMap.set("titleTemplate", {
		...tpl,
		tag: "title",
		textContent: v
	});
}
function sanitizeTags(tags) {
	const out = [];
	for (let t of tags) {
		const { innerHTML, tag, props } = t;
		if (!ValidHeadTags.has(tag) || isEmptyProps(props) && !innerHTML && !t.textContent) continue;
		if (tag === "meta" && !props.content && !props["http-equiv"] && !props.charset) continue;
		if (tag === "script" && (innerHTML || t.textContent)) {
			const type = String(props.type);
			const isJsonLike = type.endsWith("json") || type === "importmap" || type === "speculationrules";
			const escape = (content) => isJsonLike ? (typeof content === "string" ? content : JSON.stringify(content)).replace(LT_RE, "\\u003C") : typeof content === "string" ? content.replace(SCRIPT_END_RE, "<\\/script") : content;
			t = { ...t };
			if (innerHTML) t.innerHTML = escape(innerHTML);
			if (t.textContent) t.textContent = escape(t.textContent);
			t._d = dedupeKey(t);
		}
		out.push(t);
	}
	return out;
}
function resolveTags(head, options) {
	const weightFn = options?.tagWeight ?? head.resolvedOptions._tagWeight ?? DEFAULT_TAG_WEIGHT;
	const ctx = {
		tagMap: /* @__PURE__ */ new Map(),
		tags: []
	};
	const hooks = head.hooks?._hooks || {};
	const entries = [...head.entries.values()];
	for (const e of entries) if (e._pending !== void 0) {
		e.input = e._pending;
		delete e._pending;
		delete e._tags;
	}
	callHook(head, "entries:resolve", {
		entries,
		...ctx
	});
	const entryTags = [];
	for (const e of entries) {
		if (!e._tags) {
			const tags = normalizeEntryToTags(e.input, head.resolvedOptions.propResolvers || []);
			for (const t of tags) Object.assign(t, e.options);
			const normalizeCtx = {
				tags,
				entry: e
			};
			callHook(head, "entries:normalize", normalizeCtx);
			for (let i = 0; i < normalizeCtx.tags.length; i++) {
				const t = normalizeCtx.tags[i];
				t._w = weightFn(t);
				t._p = (e._i << 10) + i;
				t._d = dedupeKey(t);
				if (!t._d) t._h = hashTag(t);
			}
			e._tags = normalizeCtx.tags;
		}
		entryTags.push(e._tags);
	}
	let needsClone = false;
	for (const k in hooks) if (TAG_MUTATING_HOOK_RE.test(k) && hooks[k]?.some((f) => !f._nonMutating)) {
		needsClone = true;
		break;
	}
	pushEntryTags(ctx, entryTags, needsClone);
	const hasFlatMeta = dedupeTags(ctx);
	resolveTitleTemplate(ctx, head);
	valuesToTags(ctx, hasFlatMeta);
	callHook(head, "tags:beforeResolve", ctx);
	callHook(head, "tags:resolve", ctx);
	callHook(head, "tags:afterResolve", ctx);
	return sanitizeTags(ctx.tags);
}
//#endregion
//#region node_modules/@unhead/vue/dist/shared/vue.DKb5ZKVl.mjs
var headSymbol = "usehead";
// @__NO_SIDE_EFFECTS__
function injectHead() {
	if (hasInjectionContext()) {
		const instance = inject(headSymbol);
		if (instance) return instance;
	}
	throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
// @__NO_SIDE_EFFECTS__
function vueInstall(head) {
	return { install(app) {
		app.config.globalProperties.$unhead = head;
		app.config.globalProperties.$head = head;
		app.provide(headSymbol, head);
	} }.install;
}
//#endregion
//#region node_modules/@unhead/vue/dist/shared/vue.CkLIG7eN.mjs
var VueResolver = (_, value) => {
	return isRef(value) ? toValue(value) : value;
};
//#endregion
//#region node_modules/@unhead/vue/dist/shared/vue.CxU8BAii.mjs
function useHead(input, options = {}) {
	const head = options.head || /* @__PURE__ */ injectHead();
	return head.ssr ? head.push(input || {}, options) : clientUseHead(head, input, options);
}
function clientUseHead(head, input, options = {}) {
	const scope = getCurrentScope();
	if (scope && !scope.active) return {
		patch() {},
		dispose() {},
		_i: -1
	};
	const deactivated = ref(false);
	if (options.onRendered && scope) {
		const _onRendered = options.onRendered;
		options = {
			...options,
			onRendered: (ctx) => scope.run(() => _onRendered(ctx))
		};
	}
	let entry;
	watchEffect(() => {
		const i = deactivated.value ? {} : walkResolver(input, VueResolver);
		if (entry) entry.patch(i);
		else entry = head.push(i, options);
	});
	if (getCurrentInstance()) {
		onBeforeUnmount(() => {
			entry.dispose();
		});
		onDeactivated(() => {
			deactivated.value = true;
		});
		onActivated(() => {
			deactivated.value = false;
		});
	}
	return entry;
}
//#endregion
//#region node_modules/unhead/dist/shared/unhead.WK9wg_ep.mjs
function registerPlugin(head, p) {
	if (typeof p === "function" && p.key && head.plugins.has(p.key)) return;
	const plugin = typeof p === "function" ? p(head) : p;
	const key = plugin.key || String(head.plugins.size + 1);
	if (!head.plugins.get(key)) {
		head.plugins.set(key, plugin);
		for (const k in plugin.hooks || {}) head.hooks?.hook(k, plugin.hooks[k]);
	}
}
// @__NO_SIDE_EFFECTS__
function createUnhead(renderer, resolvedOptions = {}) {
	const ssr = !resolvedOptions.document;
	const entries = /* @__PURE__ */ new Map();
	const head = {
		_entryCount: 1,
		plugins: /* @__PURE__ */ new Map(),
		resolvedOptions,
		ssr,
		entries,
		render: () => renderer(head),
		use: (p) => registerPlugin(head, p),
		push(input, _options) {
			const _i = _options?._index ?? head._entryCount++;
			const options = _options ? { ..._options } : {};
			delete options.head;
			delete options.onRendered;
			const entry = {
				_i,
				input,
				options
			};
			entries.set(_i, entry);
			return {
				_i,
				dispose() {
					entries.delete(_i);
				},
				patch(input2) {
					if (ssr) {
						entry.input = input2;
						delete entry._tags;
					} else entry._pending = input2;
					if (!entries.has(_i)) entries.set(_i, entry);
				}
			};
		}
	};
	resolvedOptions.init?.forEach((e) => e && head.push(e));
	return head;
}
//#endregion
//#region node_modules/.slidev/virtual/import-glob.44a2ac915d.ts
var import_glob_44a2ac915d_default = /* #__PURE__ */ Object.assign({});
//#endregion
//#region node_modules/.slidev/virtual/import-glob.bc63dd128a.ts
var import_glob_bc63dd128a_default = /* #__PURE__ */ Object.assign({});
//#endregion
//#region ../../../../../@slidev/setups/root
var root_default = [Object.values(import_glob_44a2ac915d_default)[0], Object.values(import_glob_bc63dd128a_default)[0]].filter(Boolean);
//#endregion
//#region node_modules/@slidev/client/logic/dark.ts
var preferredDark = usePreferredDark();
var store = useLocalStorage("slidev-color-schema", "auto");
var isColorSchemaConfigured = computed(() => configs_default.colorSchema !== "auto");
var isDark = computed({
	get() {
		if (isColorSchemaConfigured.value) return configs_default.colorSchema === "dark";
		return store.value === "auto" ? preferredDark.value : store.value === "dark";
	},
	set(v) {
		if (isColorSchemaConfigured.value) return;
		store.value = v === preferredDark.value ? "auto" : v ? "dark" : "light";
	}
});
var toggleDark = useToggle(isDark);
if (isClient) {
	const CSS_DISABLE_TRANS = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
	watch(isDark, (v) => {
		const style = window.document.createElement("style");
		style.appendChild(document.createTextNode(CSS_DISABLE_TRANS));
		window.document.head.appendChild(style);
		const html = document.querySelector("html");
		html.classList.toggle("dark", v);
		html.classList.toggle("light", !v);
		window.getComputedStyle(style).opacity;
		document.head.removeChild(style);
	}, { immediate: true });
}
//#endregion
//#region node_modules/@slidev/client/composables/usePrintStyles.ts
function usePrintStyles() {
	const { isPrintMode } = useNav();
	useStyleTag(computed(() => isPrintMode.value ? `
@page {
  size: ${slideWidth.value}px ${slideHeight.value}px;
  margin: 0px;
}

* {
  transition: none !important;
  transition-duration: 0s !important;
}` : ""));
}
//#endregion
//#region node_modules/yaml/browser/dist/nodes/identity.js
var ALIAS = Symbol.for("yaml.alias");
var DOC = Symbol.for("yaml.document");
var MAP = Symbol.for("yaml.map");
var PAIR = Symbol.for("yaml.pair");
var SCALAR = Symbol.for("yaml.scalar");
var SEQ = Symbol.for("yaml.seq");
var NODE_TYPE = Symbol.for("yaml.node.type");
var isAlias = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === ALIAS;
var isDocument = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === DOC;
var isMap = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === MAP;
var isPair = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === PAIR;
var isScalar = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === SCALAR;
var isSeq = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === SEQ;
function isCollection(node) {
	if (node && typeof node === "object") switch (node[NODE_TYPE]) {
		case MAP:
		case SEQ: return true;
	}
	return false;
}
function isNode(node) {
	if (node && typeof node === "object") switch (node[NODE_TYPE]) {
		case ALIAS:
		case MAP:
		case SCALAR:
		case SEQ: return true;
	}
	return false;
}
var hasAnchor = (node) => (isScalar(node) || isCollection(node)) && !!node.anchor;
//#endregion
//#region node_modules/yaml/browser/dist/visit.js
var BREAK$1 = Symbol("break visit");
var SKIP$1 = Symbol("skip children");
var REMOVE$1 = Symbol("remove node");
/**
* Apply a visitor to an AST node or document.
*
* Walks through the tree (depth-first) starting from `node`, calling a
* `visitor` function with three arguments:
*   - `key`: For sequence values and map `Pair`, the node's index in the
*     collection. Within a `Pair`, `'key'` or `'value'`, correspondingly.
*     `null` for the root node.
*   - `node`: The current node.
*   - `path`: The ancestry of the current node.
*
* The return value of the visitor may be used to control the traversal:
*   - `undefined` (default): Do nothing and continue
*   - `visit.SKIP`: Do not visit the children of this node, continue with next
*     sibling
*   - `visit.BREAK`: Terminate traversal completely
*   - `visit.REMOVE`: Remove the current node, then continue with the next one
*   - `Node`: Replace the current node, then continue by visiting it
*   - `number`: While iterating the items of a sequence or map, set the index
*     of the next step. This is useful especially if the index of the current
*     node has changed.
*
* If `visitor` is a single function, it will be called with all values
* encountered in the tree, including e.g. `null` values. Alternatively,
* separate visitor functions may be defined for each `Map`, `Pair`, `Seq`,
* `Alias` and `Scalar` node. To define the same visitor function for more than
* one node type, use the `Collection` (map and seq), `Value` (map, seq & scalar)
* and `Node` (alias, map, seq & scalar) targets. Of all these, only the most
* specific defined one will be used for each node.
*/
function visit$1(node, visitor) {
	const visitor_ = initVisitor(visitor);
	if (isDocument(node)) {
		if (visit_(null, node.contents, visitor_, Object.freeze([node])) === REMOVE$1) node.contents = null;
	} else visit_(null, node, visitor_, Object.freeze([]));
}
/** Terminate visit traversal completely */
visit$1.BREAK = BREAK$1;
/** Do not visit the children of the current node */
visit$1.SKIP = SKIP$1;
/** Remove the current node */
visit$1.REMOVE = REMOVE$1;
function visit_(key, node, visitor, path) {
	const ctrl = callVisitor(key, node, visitor, path);
	if (isNode(ctrl) || isPair(ctrl)) {
		replaceNode(key, path, ctrl);
		return visit_(key, ctrl, visitor, path);
	}
	if (typeof ctrl !== "symbol") {
		if (isCollection(node)) {
			path = Object.freeze(path.concat(node));
			for (let i = 0; i < node.items.length; ++i) {
				const ci = visit_(i, node.items[i], visitor, path);
				if (typeof ci === "number") i = ci - 1;
				else if (ci === BREAK$1) return BREAK$1;
				else if (ci === REMOVE$1) {
					node.items.splice(i, 1);
					i -= 1;
				}
			}
		} else if (isPair(node)) {
			path = Object.freeze(path.concat(node));
			const ck = visit_("key", node.key, visitor, path);
			if (ck === BREAK$1) return BREAK$1;
			else if (ck === REMOVE$1) node.key = null;
			const cv = visit_("value", node.value, visitor, path);
			if (cv === BREAK$1) return BREAK$1;
			else if (cv === REMOVE$1) node.value = null;
		}
	}
	return ctrl;
}
/**
* Apply an async visitor to an AST node or document.
*
* Walks through the tree (depth-first) starting from `node`, calling a
* `visitor` function with three arguments:
*   - `key`: For sequence values and map `Pair`, the node's index in the
*     collection. Within a `Pair`, `'key'` or `'value'`, correspondingly.
*     `null` for the root node.
*   - `node`: The current node.
*   - `path`: The ancestry of the current node.
*
* The return value of the visitor may be used to control the traversal:
*   - `Promise`: Must resolve to one of the following values
*   - `undefined` (default): Do nothing and continue
*   - `visit.SKIP`: Do not visit the children of this node, continue with next
*     sibling
*   - `visit.BREAK`: Terminate traversal completely
*   - `visit.REMOVE`: Remove the current node, then continue with the next one
*   - `Node`: Replace the current node, then continue by visiting it
*   - `number`: While iterating the items of a sequence or map, set the index
*     of the next step. This is useful especially if the index of the current
*     node has changed.
*
* If `visitor` is a single function, it will be called with all values
* encountered in the tree, including e.g. `null` values. Alternatively,
* separate visitor functions may be defined for each `Map`, `Pair`, `Seq`,
* `Alias` and `Scalar` node. To define the same visitor function for more than
* one node type, use the `Collection` (map and seq), `Value` (map, seq & scalar)
* and `Node` (alias, map, seq & scalar) targets. Of all these, only the most
* specific defined one will be used for each node.
*/
async function visitAsync(node, visitor) {
	const visitor_ = initVisitor(visitor);
	if (isDocument(node)) {
		if (await visitAsync_(null, node.contents, visitor_, Object.freeze([node])) === REMOVE$1) node.contents = null;
	} else await visitAsync_(null, node, visitor_, Object.freeze([]));
}
/** Terminate visit traversal completely */
visitAsync.BREAK = BREAK$1;
/** Do not visit the children of the current node */
visitAsync.SKIP = SKIP$1;
/** Remove the current node */
visitAsync.REMOVE = REMOVE$1;
async function visitAsync_(key, node, visitor, path) {
	const ctrl = await callVisitor(key, node, visitor, path);
	if (isNode(ctrl) || isPair(ctrl)) {
		replaceNode(key, path, ctrl);
		return visitAsync_(key, ctrl, visitor, path);
	}
	if (typeof ctrl !== "symbol") {
		if (isCollection(node)) {
			path = Object.freeze(path.concat(node));
			for (let i = 0; i < node.items.length; ++i) {
				const ci = await visitAsync_(i, node.items[i], visitor, path);
				if (typeof ci === "number") i = ci - 1;
				else if (ci === BREAK$1) return BREAK$1;
				else if (ci === REMOVE$1) {
					node.items.splice(i, 1);
					i -= 1;
				}
			}
		} else if (isPair(node)) {
			path = Object.freeze(path.concat(node));
			const ck = await visitAsync_("key", node.key, visitor, path);
			if (ck === BREAK$1) return BREAK$1;
			else if (ck === REMOVE$1) node.key = null;
			const cv = await visitAsync_("value", node.value, visitor, path);
			if (cv === BREAK$1) return BREAK$1;
			else if (cv === REMOVE$1) node.value = null;
		}
	}
	return ctrl;
}
function initVisitor(visitor) {
	if (typeof visitor === "object" && (visitor.Collection || visitor.Node || visitor.Value)) return Object.assign({
		Alias: visitor.Node,
		Map: visitor.Node,
		Scalar: visitor.Node,
		Seq: visitor.Node
	}, visitor.Value && {
		Map: visitor.Value,
		Scalar: visitor.Value,
		Seq: visitor.Value
	}, visitor.Collection && {
		Map: visitor.Collection,
		Seq: visitor.Collection
	}, visitor);
	return visitor;
}
function callVisitor(key, node, visitor, path) {
	if (typeof visitor === "function") return visitor(key, node, path);
	if (isMap(node)) return visitor.Map?.(key, node, path);
	if (isSeq(node)) return visitor.Seq?.(key, node, path);
	if (isPair(node)) return visitor.Pair?.(key, node, path);
	if (isScalar(node)) return visitor.Scalar?.(key, node, path);
	if (isAlias(node)) return visitor.Alias?.(key, node, path);
}
function replaceNode(key, path, node) {
	const parent = path[path.length - 1];
	if (isCollection(parent)) parent.items[key] = node;
	else if (isPair(parent)) if (key === "key") parent.key = node;
	else parent.value = node;
	else if (isDocument(parent)) parent.contents = node;
	else {
		const pt = isAlias(parent) ? "alias" : "scalar";
		throw new Error(`Cannot replace node with ${pt} parent`);
	}
}
//#endregion
//#region node_modules/yaml/browser/dist/doc/directives.js
var escapeChars = {
	"!": "%21",
	",": "%2C",
	"[": "%5B",
	"]": "%5D",
	"{": "%7B",
	"}": "%7D"
};
var escapeTagName = (tn) => tn.replace(/[!,[\]{}]/g, (ch) => escapeChars[ch]);
var Directives = class Directives {
	constructor(yaml, tags) {
		/**
		* The directives-end/doc-start marker `---`. If `null`, a marker may still be
		* included in the document's stringified representation.
		*/
		this.docStart = null;
		/** The doc-end marker `...`.  */
		this.docEnd = false;
		this.yaml = Object.assign({}, Directives.defaultYaml, yaml);
		this.tags = Object.assign({}, Directives.defaultTags, tags);
	}
	clone() {
		const copy = new Directives(this.yaml, this.tags);
		copy.docStart = this.docStart;
		return copy;
	}
	/**
	* During parsing, get a Directives instance for the current document and
	* update the stream state according to the current version's spec.
	*/
	atDocument() {
		const res = new Directives(this.yaml, this.tags);
		switch (this.yaml.version) {
			case "1.1":
				this.atNextDocument = true;
				break;
			case "1.2":
				this.atNextDocument = false;
				this.yaml = {
					explicit: Directives.defaultYaml.explicit,
					version: "1.2"
				};
				this.tags = Object.assign({}, Directives.defaultTags);
				break;
		}
		return res;
	}
	/**
	* @param onError - May be called even if the action was successful
	* @returns `true` on success
	*/
	add(line, onError) {
		if (this.atNextDocument) {
			this.yaml = {
				explicit: Directives.defaultYaml.explicit,
				version: "1.1"
			};
			this.tags = Object.assign({}, Directives.defaultTags);
			this.atNextDocument = false;
		}
		const parts = line.trim().split(/[ \t]+/);
		const name = parts.shift();
		switch (name) {
			case "%TAG": {
				if (parts.length !== 2) {
					onError(0, "%TAG directive should contain exactly two parts");
					if (parts.length < 2) return false;
				}
				const [handle, prefix] = parts;
				this.tags[handle] = prefix;
				return true;
			}
			case "%YAML": {
				this.yaml.explicit = true;
				if (parts.length !== 1) {
					onError(0, "%YAML directive should contain exactly one part");
					return false;
				}
				const [version] = parts;
				if (version === "1.1" || version === "1.2") {
					this.yaml.version = version;
					return true;
				} else {
					const isValid = /^\d+\.\d+$/.test(version);
					onError(6, `Unsupported YAML version ${version}`, isValid);
					return false;
				}
			}
			default:
				onError(0, `Unknown directive ${name}`, true);
				return false;
		}
	}
	/**
	* Resolves a tag, matching handles to those defined in %TAG directives.
	*
	* @returns Resolved tag, which may also be the non-specific tag `'!'` or a
	*   `'!local'` tag, or `null` if unresolvable.
	*/
	tagName(source, onError) {
		if (source === "!") return "!";
		if (source[0] !== "!") {
			onError(`Not a valid tag: ${source}`);
			return null;
		}
		if (source[1] === "<") {
			const verbatim = source.slice(2, -1);
			if (verbatim === "!" || verbatim === "!!") {
				onError(`Verbatim tags aren't resolved, so ${source} is invalid.`);
				return null;
			}
			if (source[source.length - 1] !== ">") onError("Verbatim tags must end with a >");
			return verbatim;
		}
		const [, handle, suffix] = source.match(/^(.*!)([^!]*)$/s);
		if (!suffix) onError(`The ${source} tag has no suffix`);
		const prefix = this.tags[handle];
		if (prefix) try {
			return prefix + decodeURIComponent(suffix);
		} catch (error) {
			onError(String(error));
			return null;
		}
		if (handle === "!") return source;
		onError(`Could not resolve tag: ${source}`);
		return null;
	}
	/**
	* Given a fully resolved tag, returns its printable string form,
	* taking into account current tag prefixes and defaults.
	*/
	tagString(tag) {
		for (const [handle, prefix] of Object.entries(this.tags)) if (tag.startsWith(prefix)) return handle + escapeTagName(tag.substring(prefix.length));
		return tag[0] === "!" ? tag : `!<${tag}>`;
	}
	toString(doc) {
		const lines = this.yaml.explicit ? [`%YAML ${this.yaml.version || "1.2"}`] : [];
		const tagEntries = Object.entries(this.tags);
		let tagNames;
		if (doc && tagEntries.length > 0 && isNode(doc.contents)) {
			const tags = {};
			visit$1(doc.contents, (_key, node) => {
				if (isNode(node) && node.tag) tags[node.tag] = true;
			});
			tagNames = Object.keys(tags);
		} else tagNames = [];
		for (const [handle, prefix] of tagEntries) {
			if (handle === "!!" && prefix === "tag:yaml.org,2002:") continue;
			if (!doc || tagNames.some((tn) => tn.startsWith(prefix))) lines.push(`%TAG ${handle} ${prefix}`);
		}
		return lines.join("\n");
	}
};
Directives.defaultYaml = {
	explicit: false,
	version: "1.2"
};
Directives.defaultTags = { "!!": "tag:yaml.org,2002:" };
//#endregion
//#region node_modules/yaml/browser/dist/doc/anchors.js
/**
* Verify that the input string is a valid anchor.
*
* Will throw on errors.
*/
function anchorIsValid(anchor) {
	if (/[\x00-\x19\s,[\]{}]/.test(anchor)) {
		const msg = `Anchor must not contain whitespace or control characters: ${JSON.stringify(anchor)}`;
		throw new Error(msg);
	}
	return true;
}
//#endregion
//#region node_modules/yaml/browser/dist/doc/applyReviver.js
/**
* Applies the JSON.parse reviver algorithm as defined in the ECMA-262 spec,
* in section 24.5.1.1 "Runtime Semantics: InternalizeJSONProperty" of the
* 2021 edition: https://tc39.es/ecma262/#sec-json.parse
*
* Includes extensions for handling Map and Set objects.
*/
function applyReviver(reviver, obj, key, val) {
	if (val && typeof val === "object") if (Array.isArray(val)) for (let i = 0, len = val.length; i < len; ++i) {
		const v0 = val[i];
		const v1 = applyReviver(reviver, val, String(i), v0);
		if (v1 === void 0) delete val[i];
		else if (v1 !== v0) val[i] = v1;
	}
	else if (val instanceof Map) for (const k of Array.from(val.keys())) {
		const v0 = val.get(k);
		const v1 = applyReviver(reviver, val, k, v0);
		if (v1 === void 0) val.delete(k);
		else if (v1 !== v0) val.set(k, v1);
	}
	else if (val instanceof Set) for (const v0 of Array.from(val)) {
		const v1 = applyReviver(reviver, val, v0, v0);
		if (v1 === void 0) val.delete(v0);
		else if (v1 !== v0) {
			val.delete(v0);
			val.add(v1);
		}
	}
	else for (const [k, v0] of Object.entries(val)) {
		const v1 = applyReviver(reviver, val, k, v0);
		if (v1 === void 0) delete val[k];
		else if (v1 !== v0) val[k] = v1;
	}
	return reviver.call(obj, key, val);
}
//#endregion
//#region node_modules/yaml/browser/dist/nodes/toJS.js
/**
* Recursively convert any node or its contents to native JavaScript
*
* @param value - The input value
* @param arg - If `value` defines a `toJSON()` method, use this
*   as its first argument
* @param ctx - Conversion context, originally set in Document#toJS(). If
*   `{ keep: true }` is not set, output should be suitable for JSON
*   stringification.
*/
function toJS(value, arg, ctx) {
	if (Array.isArray(value)) return value.map((v, i) => toJS(v, String(i), ctx));
	if (value && typeof value.toJSON === "function") {
		if (!ctx || !hasAnchor(value)) return value.toJSON(arg, ctx);
		const data = {
			aliasCount: 0,
			count: 1,
			res: void 0
		};
		ctx.anchors.set(value, data);
		ctx.onCreate = (res) => {
			data.res = res;
			delete ctx.onCreate;
		};
		const res = value.toJSON(arg, ctx);
		if (ctx.onCreate) ctx.onCreate(res);
		return res;
	}
	if (typeof value === "bigint" && !ctx?.keep) return Number(value);
	return value;
}
//#endregion
//#region node_modules/yaml/browser/dist/nodes/Node.js
var NodeBase = class {
	constructor(type) {
		Object.defineProperty(this, NODE_TYPE, { value: type });
	}
	/** Create a copy of this node.  */
	clone() {
		const copy = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
		if (this.range) copy.range = this.range.slice();
		return copy;
	}
	/** A plain JavaScript representation of this node. */
	toJS(doc, { mapAsMap, maxAliasCount, onAnchor, reviver } = {}) {
		if (!isDocument(doc)) throw new TypeError("A document argument is required");
		const ctx = {
			anchors: /* @__PURE__ */ new Map(),
			doc,
			keep: true,
			mapAsMap: mapAsMap === true,
			mapKeyWarned: false,
			maxAliasCount: typeof maxAliasCount === "number" ? maxAliasCount : 100
		};
		const res = toJS(this, "", ctx);
		if (typeof onAnchor === "function") for (const { count, res } of ctx.anchors.values()) onAnchor(res, count);
		return typeof reviver === "function" ? applyReviver(reviver, { "": res }, "", res) : res;
	}
};
//#endregion
//#region node_modules/yaml/browser/dist/nodes/Alias.js
var Alias = class extends NodeBase {
	constructor(source) {
		super(ALIAS);
		this.source = source;
		Object.defineProperty(this, "tag", { set() {
			throw new Error("Alias nodes cannot have tags");
		} });
	}
	/**
	* Resolve the value of this alias within `doc`, finding the last
	* instance of the `source` anchor before this node.
	*/
	resolve(doc, ctx) {
		if (ctx?.maxAliasCount === 0) throw new ReferenceError("Alias resolution is disabled");
		let nodes;
		if (ctx?.aliasResolveCache) nodes = ctx.aliasResolveCache;
		else {
			nodes = [];
			visit$1(doc, { Node: (_key, node) => {
				if (isAlias(node) || hasAnchor(node)) nodes.push(node);
			} });
			if (ctx) ctx.aliasResolveCache = nodes;
		}
		let found = void 0;
		for (const node of nodes) {
			if (node === this) break;
			if (node.anchor === this.source) found = node;
		}
		return found;
	}
	toJSON(_arg, ctx) {
		if (!ctx) return { source: this.source };
		const { anchors, doc, maxAliasCount } = ctx;
		const source = this.resolve(doc, ctx);
		if (!source) {
			const msg = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
			throw new ReferenceError(msg);
		}
		let data = anchors.get(source);
		if (!data) {
			toJS(source, null, ctx);
			data = anchors.get(source);
		}
		/* istanbul ignore if */
		if (data?.res === void 0) throw new ReferenceError("This should not happen: Alias anchor was not resolved?");
		if (maxAliasCount >= 0) {
			data.count += 1;
			if (data.aliasCount === 0) data.aliasCount = getAliasCount(doc, source, anchors);
			if (data.count * data.aliasCount > maxAliasCount) throw new ReferenceError("Excessive alias count indicates a resource exhaustion attack");
		}
		return data.res;
	}
	toString(ctx, _onComment, _onChompKeep) {
		const src = `*${this.source}`;
		if (ctx) {
			anchorIsValid(this.source);
			if (ctx.options.verifyAliasOrder && !ctx.anchors.has(this.source)) {
				const msg = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
				throw new Error(msg);
			}
			if (ctx.implicitKey) return `${src} `;
		}
		return src;
	}
};
function getAliasCount(doc, node, anchors) {
	if (isAlias(node)) {
		const source = node.resolve(doc);
		const anchor = anchors && source && anchors.get(source);
		return anchor ? anchor.count * anchor.aliasCount : 0;
	} else if (isCollection(node)) {
		let count = 0;
		for (const item of node.items) {
			const c = getAliasCount(doc, item, anchors);
			if (c > count) count = c;
		}
		return count;
	} else if (isPair(node)) {
		const kc = getAliasCount(doc, node.key, anchors);
		const vc = getAliasCount(doc, node.value, anchors);
		return Math.max(kc, vc);
	}
	return 1;
}
//#endregion
//#region node_modules/yaml/browser/dist/nodes/Scalar.js
var isScalarValue = (value) => !value || typeof value !== "function" && typeof value !== "object";
var Scalar = class extends NodeBase {
	constructor(value) {
		super(SCALAR);
		this.value = value;
	}
	toJSON(arg, ctx) {
		return ctx?.keep ? this.value : toJS(this.value, arg, ctx);
	}
	toString() {
		return String(this.value);
	}
};
Scalar.BLOCK_FOLDED = "BLOCK_FOLDED";
Scalar.BLOCK_LITERAL = "BLOCK_LITERAL";
Scalar.PLAIN = "PLAIN";
Scalar.QUOTE_DOUBLE = "QUOTE_DOUBLE";
Scalar.QUOTE_SINGLE = "QUOTE_SINGLE";
//#endregion
//#region node_modules/yaml/browser/dist/doc/createNode.js
var defaultTagPrefix = "tag:yaml.org,2002:";
function findTagObject(value, tagName, tags) {
	if (tagName) {
		const match = tags.filter((t) => t.tag === tagName);
		const tagObj = match.find((t) => !t.format) ?? match[0];
		if (!tagObj) throw new Error(`Tag ${tagName} not found`);
		return tagObj;
	}
	return tags.find((t) => t.identify?.(value) && !t.format);
}
function createNode(value, tagName, ctx) {
	if (isDocument(value)) value = value.contents;
	if (isNode(value)) return value;
	if (isPair(value)) {
		const map = ctx.schema[MAP].createNode?.(ctx.schema, null, ctx);
		map.items.push(value);
		return map;
	}
	if (value instanceof String || value instanceof Number || value instanceof Boolean || typeof BigInt !== "undefined" && value instanceof BigInt) value = value.valueOf();
	const { aliasDuplicateObjects, onAnchor, onTagObj, schema, sourceObjects } = ctx;
	let ref = void 0;
	if (aliasDuplicateObjects && value && typeof value === "object") {
		ref = sourceObjects.get(value);
		if (ref) {
			ref.anchor ?? (ref.anchor = onAnchor(value));
			return new Alias(ref.anchor);
		} else {
			ref = {
				anchor: null,
				node: null
			};
			sourceObjects.set(value, ref);
		}
	}
	if (tagName?.startsWith("!!")) tagName = defaultTagPrefix + tagName.slice(2);
	let tagObj = findTagObject(value, tagName, schema.tags);
	if (!tagObj) {
		if (value && typeof value.toJSON === "function") value = value.toJSON();
		if (!value || typeof value !== "object") {
			const node = new Scalar(value);
			if (ref) ref.node = node;
			return node;
		}
		tagObj = value instanceof Map ? schema[MAP] : Symbol.iterator in Object(value) ? schema[SEQ] : schema[MAP];
	}
	if (onTagObj) {
		onTagObj(tagObj);
		delete ctx.onTagObj;
	}
	const node = tagObj?.createNode ? tagObj.createNode(ctx.schema, value, ctx) : typeof tagObj?.nodeClass?.from === "function" ? tagObj.nodeClass.from(ctx.schema, value, ctx) : new Scalar(value);
	if (tagName) node.tag = tagName;
	else if (!tagObj.default) node.tag = tagObj.tag;
	if (ref) ref.node = node;
	return node;
}
//#endregion
//#region node_modules/yaml/browser/dist/nodes/Collection.js
function collectionFromPath(schema, path, value) {
	let v = value;
	for (let i = path.length - 1; i >= 0; --i) {
		const k = path[i];
		if (typeof k === "number" && Number.isInteger(k) && k >= 0) {
			const a = [];
			a[k] = v;
			v = a;
		} else v = /* @__PURE__ */ new Map([[k, v]]);
	}
	return createNode(v, void 0, {
		aliasDuplicateObjects: false,
		keepUndefined: false,
		onAnchor: () => {
			throw new Error("This should not happen, please report a bug.");
		},
		schema,
		sourceObjects: /* @__PURE__ */ new Map()
	});
}
var isEmptyPath = (path) => path == null || typeof path === "object" && !!path[Symbol.iterator]().next().done;
var Collection = class extends NodeBase {
	constructor(type, schema) {
		super(type);
		Object.defineProperty(this, "schema", {
			value: schema,
			configurable: true,
			enumerable: false,
			writable: true
		});
	}
	/**
	* Create a copy of this collection.
	*
	* @param schema - If defined, overwrites the original's schema
	*/
	clone(schema) {
		const copy = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
		if (schema) copy.schema = schema;
		copy.items = copy.items.map((it) => isNode(it) || isPair(it) ? it.clone(schema) : it);
		if (this.range) copy.range = this.range.slice();
		return copy;
	}
	/**
	* Adds a value to the collection. For `!!map` and `!!omap` the value must
	* be a Pair instance or a `{ key, value }` object, which may not have a key
	* that already exists in the map.
	*/
	addIn(path, value) {
		if (isEmptyPath(path)) this.add(value);
		else {
			const [key, ...rest] = path;
			const node = this.get(key, true);
			if (isCollection(node)) node.addIn(rest, value);
			else if (node === void 0 && this.schema) this.set(key, collectionFromPath(this.schema, rest, value));
			else throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
		}
	}
	/**
	* Removes a value from the collection.
	* @returns `true` if the item was found and removed.
	*/
	deleteIn(path) {
		const [key, ...rest] = path;
		if (rest.length === 0) return this.delete(key);
		const node = this.get(key, true);
		if (isCollection(node)) return node.deleteIn(rest);
		else throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
	}
	/**
	* Returns item at `key`, or `undefined` if not found. By default unwraps
	* scalar values from their surrounding node; to disable set `keepScalar` to
	* `true` (collections are always returned intact).
	*/
	getIn(path, keepScalar) {
		const [key, ...rest] = path;
		const node = this.get(key, true);
		if (rest.length === 0) return !keepScalar && isScalar(node) ? node.value : node;
		else return isCollection(node) ? node.getIn(rest, keepScalar) : void 0;
	}
	hasAllNullValues(allowScalar) {
		return this.items.every((node) => {
			if (!isPair(node)) return false;
			const n = node.value;
			return n == null || allowScalar && isScalar(n) && n.value == null && !n.commentBefore && !n.comment && !n.tag;
		});
	}
	/**
	* Checks if the collection includes a value with the key `key`.
	*/
	hasIn(path) {
		const [key, ...rest] = path;
		if (rest.length === 0) return this.has(key);
		const node = this.get(key, true);
		return isCollection(node) ? node.hasIn(rest) : false;
	}
	/**
	* Sets a value in this collection. For `!!set`, `value` needs to be a
	* boolean to add/remove the item from the set.
	*/
	setIn(path, value) {
		const [key, ...rest] = path;
		if (rest.length === 0) this.set(key, value);
		else {
			const node = this.get(key, true);
			if (isCollection(node)) node.setIn(rest, value);
			else if (node === void 0 && this.schema) this.set(key, collectionFromPath(this.schema, rest, value));
			else throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
		}
	}
};
//#endregion
//#region node_modules/yaml/browser/dist/stringify/stringifyComment.js
/**
* Stringifies a comment.
*
* Empty comment lines are left empty,
* lines consisting of a single space are replaced by `#`,
* and all other lines are prefixed with a `#`.
*/
var stringifyComment = (str) => str.replace(/^(?!$)(?: $)?/gm, "#");
function indentComment(comment, indent) {
	if (/^\n+$/.test(comment)) return comment.substring(1);
	return indent ? comment.replace(/^(?! *$)/gm, indent) : comment;
}
var lineComment = (str, indent, comment) => str.endsWith("\n") ? indentComment(comment, indent) : comment.includes("\n") ? "\n" + indentComment(comment, indent) : (str.endsWith(" ") ? "" : " ") + comment;
//#endregion
//#region node_modules/yaml/browser/dist/stringify/foldFlowLines.js
var FOLD_FLOW = "flow";
var FOLD_BLOCK = "block";
var FOLD_QUOTED = "quoted";
/**
* Tries to keep input at up to `lineWidth` characters, splitting only on spaces
* not followed by newlines or spaces unless `mode` is `'quoted'`. Lines are
* terminated with `\n` and started with `indent`.
*/
function foldFlowLines(text, indent, mode = "flow", { indentAtStart, lineWidth = 80, minContentWidth = 20, onFold, onOverflow } = {}) {
	if (!lineWidth || lineWidth < 0) return text;
	if (lineWidth < minContentWidth) minContentWidth = 0;
	const endStep = Math.max(1 + minContentWidth, 1 + lineWidth - indent.length);
	if (text.length <= endStep) return text;
	const folds = [];
	const escapedFolds = {};
	let end = lineWidth - indent.length;
	if (typeof indentAtStart === "number") if (indentAtStart > lineWidth - Math.max(2, minContentWidth)) folds.push(0);
	else end = lineWidth - indentAtStart;
	let split = void 0;
	let prev = void 0;
	let overflow = false;
	let i = -1;
	let escStart = -1;
	let escEnd = -1;
	if (mode === "block") {
		i = consumeMoreIndentedLines(text, i, indent.length);
		if (i !== -1) end = i + endStep;
	}
	for (let ch; ch = text[i += 1];) {
		if (mode === "quoted" && ch === "\\") {
			escStart = i;
			switch (text[i + 1]) {
				case "x":
					i += 3;
					break;
				case "u":
					i += 5;
					break;
				case "U":
					i += 9;
					break;
				default: i += 1;
			}
			escEnd = i;
		}
		if (ch === "\n") {
			if (mode === "block") i = consumeMoreIndentedLines(text, i, indent.length);
			end = i + indent.length + endStep;
			split = void 0;
		} else {
			if (ch === " " && prev && prev !== " " && prev !== "\n" && prev !== "	") {
				const next = text[i + 1];
				if (next && next !== " " && next !== "\n" && next !== "	") split = i;
			}
			if (i >= end) if (split) {
				folds.push(split);
				end = split + endStep;
				split = void 0;
			} else if (mode === "quoted") {
				while (prev === " " || prev === "	") {
					prev = ch;
					ch = text[i += 1];
					overflow = true;
				}
				const j = i > escEnd + 1 ? i - 2 : escStart - 1;
				if (escapedFolds[j]) return text;
				folds.push(j);
				escapedFolds[j] = true;
				end = j + endStep;
				split = void 0;
			} else overflow = true;
		}
		prev = ch;
	}
	if (overflow && onOverflow) onOverflow();
	if (folds.length === 0) return text;
	if (onFold) onFold();
	let res = text.slice(0, folds[0]);
	for (let i = 0; i < folds.length; ++i) {
		const fold = folds[i];
		const end = folds[i + 1] || text.length;
		if (fold === 0) res = `\n${indent}${text.slice(0, end)}`;
		else {
			if (mode === "quoted" && escapedFolds[fold]) res += `${text[fold]}\\`;
			res += `\n${indent}${text.slice(fold + 1, end)}`;
		}
	}
	return res;
}
/**
* Presumes `i + 1` is at the start of a line
* @returns index of last newline in more-indented block
*/
function consumeMoreIndentedLines(text, i, indent) {
	let end = i;
	let start = i + 1;
	let ch = text[start];
	while (ch === " " || ch === "	") if (i < start + indent) ch = text[++i];
	else {
		do
			ch = text[++i];
		while (ch && ch !== "\n");
		end = i;
		start = i + 1;
		ch = text[start];
	}
	return end;
}
//#endregion
//#region node_modules/yaml/browser/dist/stringify/stringifyString.js
var getFoldOptions = (ctx, isBlock) => ({
	indentAtStart: isBlock ? ctx.indent.length : ctx.indentAtStart,
	lineWidth: ctx.options.lineWidth,
	minContentWidth: ctx.options.minContentWidth
});
var containsDocumentMarker = (str) => /^(%|---|\.\.\.)/m.test(str);
function lineLengthOverLimit(str, lineWidth, indentLength) {
	if (!lineWidth || lineWidth < 0) return false;
	const limit = lineWidth - indentLength;
	const strLen = str.length;
	if (strLen <= limit) return false;
	for (let i = 0, start = 0; i < strLen; ++i) if (str[i] === "\n") {
		if (i - start > limit) return true;
		start = i + 1;
		if (strLen - start <= limit) return false;
	}
	return true;
}
function doubleQuotedString(value, ctx) {
	const json = JSON.stringify(value);
	if (ctx.options.doubleQuotedAsJSON) return json;
	const { implicitKey } = ctx;
	const minMultiLineLength = ctx.options.doubleQuotedMinMultiLineLength;
	const indent = ctx.indent || (containsDocumentMarker(value) ? "  " : "");
	let str = "";
	let start = 0;
	for (let i = 0, ch = json[i]; ch; ch = json[++i]) {
		if (ch === " " && json[i + 1] === "\\" && json[i + 2] === "n") {
			str += json.slice(start, i) + "\\ ";
			i += 1;
			start = i;
			ch = "\\";
		}
		if (ch === "\\") switch (json[i + 1]) {
			case "u":
				{
					str += json.slice(start, i);
					const code = json.substr(i + 2, 4);
					switch (code) {
						case "0000":
							str += "\\0";
							break;
						case "0007":
							str += "\\a";
							break;
						case "000b":
							str += "\\v";
							break;
						case "001b":
							str += "\\e";
							break;
						case "0085":
							str += "\\N";
							break;
						case "00a0":
							str += "\\_";
							break;
						case "2028":
							str += "\\L";
							break;
						case "2029":
							str += "\\P";
							break;
						default: if (code.substr(0, 2) === "00") str += "\\x" + code.substr(2);
						else str += json.substr(i, 6);
					}
					i += 5;
					start = i + 1;
				}
				break;
			case "n":
				if (implicitKey || json[i + 2] === "\"" || json.length < minMultiLineLength) i += 1;
				else {
					str += json.slice(start, i) + "\n\n";
					while (json[i + 2] === "\\" && json[i + 3] === "n" && json[i + 4] !== "\"") {
						str += "\n";
						i += 2;
					}
					str += indent;
					if (json[i + 2] === " ") str += "\\";
					i += 1;
					start = i + 1;
				}
				break;
			default: i += 1;
		}
	}
	str = start ? str + json.slice(start) : json;
	return implicitKey ? str : foldFlowLines(str, indent, FOLD_QUOTED, getFoldOptions(ctx, false));
}
function singleQuotedString(value, ctx) {
	if (ctx.options.singleQuote === false || ctx.implicitKey && value.includes("\n") || /[ \t]\n|\n[ \t]/.test(value)) return doubleQuotedString(value, ctx);
	const indent = ctx.indent || (containsDocumentMarker(value) ? "  " : "");
	const res = "'" + value.replace(/'/g, "''").replace(/\n+/g, `$&\n${indent}`) + "'";
	return ctx.implicitKey ? res : foldFlowLines(res, indent, FOLD_FLOW, getFoldOptions(ctx, false));
}
function quotedString(value, ctx) {
	const { singleQuote } = ctx.options;
	let qs;
	if (singleQuote === false) qs = doubleQuotedString;
	else {
		const hasDouble = value.includes("\"");
		const hasSingle = value.includes("'");
		if (hasDouble && !hasSingle) qs = singleQuotedString;
		else if (hasSingle && !hasDouble) qs = doubleQuotedString;
		else qs = singleQuote ? singleQuotedString : doubleQuotedString;
	}
	return qs(value, ctx);
}
var blockEndNewlines;
try {
	blockEndNewlines = /* @__PURE__ */ new RegExp("(^|(?<!\n))\n+(?!\n|$)", "g");
} catch {
	blockEndNewlines = /\n+(?!\n|$)/g;
}
function blockString({ comment, type, value }, ctx, onComment, onChompKeep) {
	const { blockQuote, commentString, lineWidth } = ctx.options;
	if (!blockQuote || /\n[\t ]+$/.test(value)) return quotedString(value, ctx);
	const indent = ctx.indent || (ctx.forceBlockIndent || containsDocumentMarker(value) ? "  " : "");
	const literal = blockQuote === "literal" ? true : blockQuote === "folded" || type === Scalar.BLOCK_FOLDED ? false : type === Scalar.BLOCK_LITERAL ? true : !lineLengthOverLimit(value, lineWidth, indent.length);
	if (!value) return literal ? "|\n" : ">\n";
	let chomp;
	let endStart;
	for (endStart = value.length; endStart > 0; --endStart) {
		const ch = value[endStart - 1];
		if (ch !== "\n" && ch !== "	" && ch !== " ") break;
	}
	let end = value.substring(endStart);
	const endNlPos = end.indexOf("\n");
	if (endNlPos === -1) chomp = "-";
	else if (value === end || endNlPos !== end.length - 1) {
		chomp = "+";
		if (onChompKeep) onChompKeep();
	} else chomp = "";
	if (end) {
		value = value.slice(0, -end.length);
		if (end[end.length - 1] === "\n") end = end.slice(0, -1);
		end = end.replace(blockEndNewlines, `$&${indent}`);
	}
	let startWithSpace = false;
	let startEnd;
	let startNlPos = -1;
	for (startEnd = 0; startEnd < value.length; ++startEnd) {
		const ch = value[startEnd];
		if (ch === " ") startWithSpace = true;
		else if (ch === "\n") startNlPos = startEnd;
		else break;
	}
	let start = value.substring(0, startNlPos < startEnd ? startNlPos + 1 : startEnd);
	if (start) {
		value = value.substring(start.length);
		start = start.replace(/\n+/g, `$&${indent}`);
	}
	let header = (startWithSpace ? indent ? "2" : "1" : "") + chomp;
	if (comment) {
		header += " " + commentString(comment.replace(/ ?[\r\n]+/g, " "));
		if (onComment) onComment();
	}
	if (!literal) {
		const foldedValue = value.replace(/\n+/g, "\n$&").replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, "$1$2").replace(/\n+/g, `$&${indent}`);
		let literalFallback = false;
		const foldOptions = getFoldOptions(ctx, true);
		if (blockQuote !== "folded" && type !== Scalar.BLOCK_FOLDED) foldOptions.onOverflow = () => {
			literalFallback = true;
		};
		const body = foldFlowLines(`${start}${foldedValue}${end}`, indent, FOLD_BLOCK, foldOptions);
		if (!literalFallback) return `>${header}\n${indent}${body}`;
	}
	value = value.replace(/\n+/g, `$&${indent}`);
	return `|${header}\n${indent}${start}${value}${end}`;
}
function plainString(item, ctx, onComment, onChompKeep) {
	const { type, value } = item;
	const { actualString, implicitKey, indent, indentStep, inFlow } = ctx;
	if (implicitKey && value.includes("\n") || inFlow && /[[\]{},]/.test(value)) return quotedString(value, ctx);
	if (/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(value)) return implicitKey || inFlow || !value.includes("\n") ? quotedString(value, ctx) : blockString(item, ctx, onComment, onChompKeep);
	if (!implicitKey && !inFlow && type !== Scalar.PLAIN && value.includes("\n")) return blockString(item, ctx, onComment, onChompKeep);
	if (containsDocumentMarker(value)) {
		if (indent === "") {
			ctx.forceBlockIndent = true;
			return blockString(item, ctx, onComment, onChompKeep);
		} else if (implicitKey && indent === indentStep) return quotedString(value, ctx);
	}
	const str = value.replace(/\n+/g, `$&\n${indent}`);
	if (actualString) {
		const test = (tag) => tag.default && tag.tag !== "tag:yaml.org,2002:str" && tag.test?.test(str);
		const { compat, tags } = ctx.doc.schema;
		if (tags.some(test) || compat?.some(test)) return quotedString(value, ctx);
	}
	return implicitKey ? str : foldFlowLines(str, indent, FOLD_FLOW, getFoldOptions(ctx, false));
}
function stringifyString(item, ctx, onComment, onChompKeep) {
	const { implicitKey, inFlow } = ctx;
	const ss = typeof item.value === "string" ? item : Object.assign({}, item, { value: String(item.value) });
	let { type } = item;
	if (type !== Scalar.QUOTE_DOUBLE) {
		if (/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(ss.value)) type = Scalar.QUOTE_DOUBLE;
	}
	const _stringify = (_type) => {
		switch (_type) {
			case Scalar.BLOCK_FOLDED:
			case Scalar.BLOCK_LITERAL: return implicitKey || inFlow ? quotedString(ss.value, ctx) : blockString(ss, ctx, onComment, onChompKeep);
			case Scalar.QUOTE_DOUBLE: return doubleQuotedString(ss.value, ctx);
			case Scalar.QUOTE_SINGLE: return singleQuotedString(ss.value, ctx);
			case Scalar.PLAIN: return plainString(ss, ctx, onComment, onChompKeep);
			default: return null;
		}
	};
	let res = _stringify(type);
	if (res === null) {
		const { defaultKeyType, defaultStringType } = ctx.options;
		const t = implicitKey && defaultKeyType || defaultStringType;
		res = _stringify(t);
		if (res === null) throw new Error(`Unsupported default string type ${t}`);
	}
	return res;
}
//#endregion
//#region node_modules/yaml/browser/dist/stringify/stringify.js
function createStringifyContext(doc, options) {
	const opt = Object.assign({
		blockQuote: true,
		commentString: stringifyComment,
		defaultKeyType: null,
		defaultStringType: "PLAIN",
		directives: null,
		doubleQuotedAsJSON: false,
		doubleQuotedMinMultiLineLength: 40,
		falseStr: "false",
		flowCollectionPadding: true,
		indentSeq: true,
		lineWidth: 80,
		minContentWidth: 20,
		nullStr: "null",
		simpleKeys: false,
		singleQuote: null,
		trailingComma: false,
		trueStr: "true",
		verifyAliasOrder: true
	}, doc.schema.toStringOptions, options);
	let inFlow;
	switch (opt.collectionStyle) {
		case "block":
			inFlow = false;
			break;
		case "flow":
			inFlow = true;
			break;
		default: inFlow = null;
	}
	return {
		anchors: /* @__PURE__ */ new Set(),
		doc,
		flowCollectionPadding: opt.flowCollectionPadding ? " " : "",
		indent: "",
		indentStep: typeof opt.indent === "number" ? " ".repeat(opt.indent) : "  ",
		inFlow,
		options: opt
	};
}
function getTagObject(tags, item) {
	if (item.tag) {
		const match = tags.filter((t) => t.tag === item.tag);
		if (match.length > 0) return match.find((t) => t.format === item.format) ?? match[0];
	}
	let tagObj = void 0;
	let obj;
	if (isScalar(item)) {
		obj = item.value;
		let match = tags.filter((t) => t.identify?.(obj));
		if (match.length > 1) {
			const testMatch = match.filter((t) => t.test);
			if (testMatch.length > 0) match = testMatch;
		}
		tagObj = match.find((t) => t.format === item.format) ?? match.find((t) => !t.format);
	} else {
		obj = item;
		tagObj = tags.find((t) => t.nodeClass && obj instanceof t.nodeClass);
	}
	if (!tagObj) {
		const name = obj?.constructor?.name ?? (obj === null ? "null" : typeof obj);
		throw new Error(`Tag not resolved for ${name} value`);
	}
	return tagObj;
}
function stringifyProps(node, tagObj, { anchors, doc }) {
	if (!doc.directives) return "";
	const props = [];
	const anchor = (isScalar(node) || isCollection(node)) && node.anchor;
	if (anchor && anchorIsValid(anchor)) {
		anchors.add(anchor);
		props.push(`&${anchor}`);
	}
	const tag = node.tag ?? (tagObj.default ? null : tagObj.tag);
	if (tag) props.push(doc.directives.tagString(tag));
	return props.join(" ");
}
function stringify(item, ctx, onComment, onChompKeep) {
	if (isPair(item)) return item.toString(ctx, onComment, onChompKeep);
	if (isAlias(item)) {
		if (ctx.doc.directives) return item.toString(ctx);
		if (ctx.resolvedAliases?.has(item)) throw new TypeError(`Cannot stringify circular structure without alias nodes`);
		else {
			if (ctx.resolvedAliases) ctx.resolvedAliases.add(item);
			else ctx.resolvedAliases = /* @__PURE__ */ new Set([item]);
			item = item.resolve(ctx.doc);
		}
	}
	let tagObj = void 0;
	const node = isNode(item) ? item : ctx.doc.createNode(item, { onTagObj: (o) => tagObj = o });
	tagObj ?? (tagObj = getTagObject(ctx.doc.schema.tags, node));
	const props = stringifyProps(node, tagObj, ctx);
	if (props.length > 0) ctx.indentAtStart = (ctx.indentAtStart ?? 0) + props.length + 1;
	const str = typeof tagObj.stringify === "function" ? tagObj.stringify(node, ctx, onComment, onChompKeep) : isScalar(node) ? stringifyString(node, ctx, onComment, onChompKeep) : node.toString(ctx, onComment, onChompKeep);
	if (!props) return str;
	return isScalar(node) || str[0] === "{" || str[0] === "[" ? `${props} ${str}` : `${props}\n${ctx.indent}${str}`;
}
//#endregion
//#region node_modules/yaml/browser/dist/stringify/stringifyPair.js
function stringifyPair({ key, value }, ctx, onComment, onChompKeep) {
	const { allNullValues, doc, indent, indentStep, options: { commentString, indentSeq, simpleKeys } } = ctx;
	let keyComment = isNode(key) && key.comment || null;
	if (simpleKeys) {
		if (keyComment) throw new Error("With simple keys, key nodes cannot have comments");
		if (isCollection(key) || !isNode(key) && typeof key === "object") throw new Error("With simple keys, collection cannot be used as a key value");
	}
	let explicitKey = !simpleKeys && (!key || keyComment && value == null && !ctx.inFlow || isCollection(key) || (isScalar(key) ? key.type === Scalar.BLOCK_FOLDED || key.type === Scalar.BLOCK_LITERAL : typeof key === "object"));
	ctx = Object.assign({}, ctx, {
		allNullValues: false,
		implicitKey: !explicitKey && (simpleKeys || !allNullValues),
		indent: indent + indentStep
	});
	let keyCommentDone = false;
	let chompKeep = false;
	let str = stringify(key, ctx, () => keyCommentDone = true, () => chompKeep = true);
	if (!explicitKey && !ctx.inFlow && str.length > 1024) {
		if (simpleKeys) throw new Error("With simple keys, single line scalar must not span more than 1024 characters");
		explicitKey = true;
	}
	if (ctx.inFlow) {
		if (allNullValues || value == null) {
			if (keyCommentDone && onComment) onComment();
			return str === "" ? "?" : explicitKey ? `? ${str}` : str;
		}
	} else if (allNullValues && !simpleKeys || value == null && explicitKey) {
		str = `? ${str}`;
		if (keyComment && !keyCommentDone) str += lineComment(str, ctx.indent, commentString(keyComment));
		else if (chompKeep && onChompKeep) onChompKeep();
		return str;
	}
	if (keyCommentDone) keyComment = null;
	if (explicitKey) {
		if (keyComment) str += lineComment(str, ctx.indent, commentString(keyComment));
		str = `? ${str}\n${indent}:`;
	} else {
		str = `${str}:`;
		if (keyComment) str += lineComment(str, ctx.indent, commentString(keyComment));
	}
	let vsb, vcb, valueComment;
	if (isNode(value)) {
		vsb = !!value.spaceBefore;
		vcb = value.commentBefore;
		valueComment = value.comment;
	} else {
		vsb = false;
		vcb = null;
		valueComment = null;
		if (value && typeof value === "object") value = doc.createNode(value);
	}
	ctx.implicitKey = false;
	if (!explicitKey && !keyComment && isScalar(value)) ctx.indentAtStart = str.length + 1;
	chompKeep = false;
	if (!indentSeq && indentStep.length >= 2 && !ctx.inFlow && !explicitKey && isSeq(value) && !value.flow && !value.tag && !value.anchor) ctx.indent = ctx.indent.substring(2);
	let valueCommentDone = false;
	const valueStr = stringify(value, ctx, () => valueCommentDone = true, () => chompKeep = true);
	let ws = " ";
	if (keyComment || vsb || vcb) {
		ws = vsb ? "\n" : "";
		if (vcb) {
			const cs = commentString(vcb);
			ws += `\n${indentComment(cs, ctx.indent)}`;
		}
		if (valueStr === "" && !ctx.inFlow) {
			if (ws === "\n" && valueComment) ws = "\n\n";
		} else ws += `\n${ctx.indent}`;
	} else if (!explicitKey && isCollection(value)) {
		const vs0 = valueStr[0];
		const nl0 = valueStr.indexOf("\n");
		const hasNewline = nl0 !== -1;
		const flow = ctx.inFlow ?? value.flow ?? value.items.length === 0;
		if (hasNewline || !flow) {
			let hasPropsLine = false;
			if (hasNewline && (vs0 === "&" || vs0 === "!")) {
				let sp0 = valueStr.indexOf(" ");
				if (vs0 === "&" && sp0 !== -1 && sp0 < nl0 && valueStr[sp0 + 1] === "!") sp0 = valueStr.indexOf(" ", sp0 + 1);
				if (sp0 === -1 || nl0 < sp0) hasPropsLine = true;
			}
			if (!hasPropsLine) ws = `\n${ctx.indent}`;
		}
	} else if (valueStr === "" || valueStr[0] === "\n") ws = "";
	str += ws + valueStr;
	if (ctx.inFlow) {
		if (valueCommentDone && onComment) onComment();
	} else if (valueComment && !valueCommentDone) str += lineComment(str, ctx.indent, commentString(valueComment));
	else if (chompKeep && onChompKeep) onChompKeep();
	return str;
}
//#endregion
//#region node_modules/yaml/browser/dist/log.js
function warn(logLevel, warning) {
	if (logLevel === "debug" || logLevel === "warn") console.warn(warning);
}
//#endregion
//#region node_modules/yaml/browser/dist/schema/yaml-1.1/merge.js
var MERGE_KEY = "<<";
var merge = {
	identify: (value) => value === MERGE_KEY || typeof value === "symbol" && value.description === MERGE_KEY,
	default: "key",
	tag: "tag:yaml.org,2002:merge",
	test: /^<<$/,
	resolve: () => Object.assign(new Scalar(Symbol(MERGE_KEY)), { addToJSMap: addMergeToJSMap }),
	stringify: () => MERGE_KEY
};
var isMergeKey = (ctx, key) => (merge.identify(key) || isScalar(key) && (!key.type || key.type === Scalar.PLAIN) && merge.identify(key.value)) && ctx?.doc.schema.tags.some((tag) => tag.tag === merge.tag && tag.default);
function addMergeToJSMap(ctx, map, value) {
	const source = resolveAliasValue(ctx, value);
	if (isSeq(source)) for (const it of source.items) mergeValue(ctx, map, it);
	else if (Array.isArray(source)) for (const it of source) mergeValue(ctx, map, it);
	else mergeValue(ctx, map, source);
}
function mergeValue(ctx, map, value) {
	const source = resolveAliasValue(ctx, value);
	if (!isMap(source)) throw new Error("Merge sources must be maps or map aliases");
	const srcMap = source.toJSON(null, ctx, Map);
	for (const [key, value] of srcMap) if (map instanceof Map) {
		if (!map.has(key)) map.set(key, value);
	} else if (map instanceof Set) map.add(key);
	else if (!Object.prototype.hasOwnProperty.call(map, key)) Object.defineProperty(map, key, {
		value,
		writable: true,
		enumerable: true,
		configurable: true
	});
	return map;
}
function resolveAliasValue(ctx, value) {
	return ctx && isAlias(value) ? value.resolve(ctx.doc, ctx) : value;
}
//#endregion
//#region node_modules/yaml/browser/dist/nodes/addPairToJSMap.js
function addPairToJSMap(ctx, map, { key, value }) {
	if (isNode(key) && key.addToJSMap) key.addToJSMap(ctx, map, value);
	else if (isMergeKey(ctx, key)) addMergeToJSMap(ctx, map, value);
	else {
		const jsKey = toJS(key, "", ctx);
		if (map instanceof Map) map.set(jsKey, toJS(value, jsKey, ctx));
		else if (map instanceof Set) map.add(jsKey);
		else {
			const stringKey = stringifyKey(key, jsKey, ctx);
			const jsValue = toJS(value, stringKey, ctx);
			if (stringKey in map) Object.defineProperty(map, stringKey, {
				value: jsValue,
				writable: true,
				enumerable: true,
				configurable: true
			});
			else map[stringKey] = jsValue;
		}
	}
	return map;
}
function stringifyKey(key, jsKey, ctx) {
	if (jsKey === null) return "";
	if (typeof jsKey !== "object") return String(jsKey);
	if (isNode(key) && ctx?.doc) {
		const strCtx = createStringifyContext(ctx.doc, {});
		strCtx.anchors = /* @__PURE__ */ new Set();
		for (const node of ctx.anchors.keys()) strCtx.anchors.add(node.anchor);
		strCtx.inFlow = true;
		strCtx.inStringifyKey = true;
		const strKey = key.toString(strCtx);
		if (!ctx.mapKeyWarned) {
			let jsonStr = JSON.stringify(strKey);
			if (jsonStr.length > 40) jsonStr = jsonStr.substring(0, 36) + "...\"";
			warn(ctx.doc.options.logLevel, `Keys with collection values will be stringified due to JS Object restrictions: ${jsonStr}. Set mapAsMap: true to use object keys.`);
			ctx.mapKeyWarned = true;
		}
		return strKey;
	}
	return JSON.stringify(jsKey);
}
//#endregion
//#region node_modules/yaml/browser/dist/nodes/Pair.js
function createPair(key, value, ctx) {
	return new Pair(createNode(key, void 0, ctx), createNode(value, void 0, ctx));
}
var Pair = class Pair {
	constructor(key, value = null) {
		Object.defineProperty(this, NODE_TYPE, { value: PAIR });
		this.key = key;
		this.value = value;
	}
	clone(schema) {
		let { key, value } = this;
		if (isNode(key)) key = key.clone(schema);
		if (isNode(value)) value = value.clone(schema);
		return new Pair(key, value);
	}
	toJSON(_, ctx) {
		return addPairToJSMap(ctx, ctx?.mapAsMap ? /* @__PURE__ */ new Map() : {}, this);
	}
	toString(ctx, onComment, onChompKeep) {
		return ctx?.doc ? stringifyPair(this, ctx, onComment, onChompKeep) : JSON.stringify(this);
	}
};
//#endregion
//#region node_modules/yaml/browser/dist/stringify/stringifyCollection.js
function stringifyCollection(collection, ctx, options) {
	return (ctx.inFlow ?? collection.flow ? stringifyFlowCollection : stringifyBlockCollection)(collection, ctx, options);
}
function stringifyBlockCollection({ comment, items }, ctx, { blockItemPrefix, flowChars, itemIndent, onChompKeep, onComment }) {
	const { indent, options: { commentString } } = ctx;
	const itemCtx = Object.assign({}, ctx, {
		indent: itemIndent,
		type: null
	});
	let chompKeep = false;
	const lines = [];
	for (let i = 0; i < items.length; ++i) {
		const item = items[i];
		let comment = null;
		if (isNode(item)) {
			if (!chompKeep && item.spaceBefore) lines.push("");
			addCommentBefore(ctx, lines, item.commentBefore, chompKeep);
			if (item.comment) comment = item.comment;
		} else if (isPair(item)) {
			const ik = isNode(item.key) ? item.key : null;
			if (ik) {
				if (!chompKeep && ik.spaceBefore) lines.push("");
				addCommentBefore(ctx, lines, ik.commentBefore, chompKeep);
			}
		}
		chompKeep = false;
		let str = stringify(item, itemCtx, () => comment = null, () => chompKeep = true);
		if (comment) str += lineComment(str, itemIndent, commentString(comment));
		if (chompKeep && comment) chompKeep = false;
		lines.push(blockItemPrefix + str);
	}
	let str;
	if (lines.length === 0) str = flowChars.start + flowChars.end;
	else {
		str = lines[0];
		for (let i = 1; i < lines.length; ++i) {
			const line = lines[i];
			str += line ? `\n${indent}${line}` : "\n";
		}
	}
	if (comment) {
		str += "\n" + indentComment(commentString(comment), indent);
		if (onComment) onComment();
	} else if (chompKeep && onChompKeep) onChompKeep();
	return str;
}
function stringifyFlowCollection({ items }, ctx, { flowChars, itemIndent }) {
	const { indent, indentStep, flowCollectionPadding: fcPadding, options: { commentString } } = ctx;
	itemIndent += indentStep;
	const itemCtx = Object.assign({}, ctx, {
		indent: itemIndent,
		inFlow: true,
		type: null
	});
	let reqNewline = false;
	let linesAtValue = 0;
	const lines = [];
	for (let i = 0; i < items.length; ++i) {
		const item = items[i];
		let comment = null;
		if (isNode(item)) {
			if (item.spaceBefore) lines.push("");
			addCommentBefore(ctx, lines, item.commentBefore, false);
			if (item.comment) comment = item.comment;
		} else if (isPair(item)) {
			const ik = isNode(item.key) ? item.key : null;
			if (ik) {
				if (ik.spaceBefore) lines.push("");
				addCommentBefore(ctx, lines, ik.commentBefore, false);
				if (ik.comment) reqNewline = true;
			}
			const iv = isNode(item.value) ? item.value : null;
			if (iv) {
				if (iv.comment) comment = iv.comment;
				if (iv.commentBefore) reqNewline = true;
			} else if (item.value == null && ik?.comment) comment = ik.comment;
		}
		if (comment) reqNewline = true;
		let str = stringify(item, itemCtx, () => comment = null);
		reqNewline || (reqNewline = lines.length > linesAtValue || str.includes("\n"));
		if (i < items.length - 1) str += ",";
		else if (ctx.options.trailingComma) {
			if (ctx.options.lineWidth > 0) reqNewline || (reqNewline = lines.reduce((sum, line) => sum + line.length + 2, 2) + (str.length + 2) > ctx.options.lineWidth);
			if (reqNewline) str += ",";
		}
		if (comment) str += lineComment(str, itemIndent, commentString(comment));
		lines.push(str);
		linesAtValue = lines.length;
	}
	const { start, end } = flowChars;
	if (lines.length === 0) return start + end;
	else {
		if (!reqNewline) {
			const len = lines.reduce((sum, line) => sum + line.length + 2, 2);
			reqNewline = ctx.options.lineWidth > 0 && len > ctx.options.lineWidth;
		}
		if (reqNewline) {
			let str = start;
			for (const line of lines) str += line ? `\n${indentStep}${indent}${line}` : "\n";
			return `${str}\n${indent}${end}`;
		} else return `${start}${fcPadding}${lines.join(" ")}${fcPadding}${end}`;
	}
}
function addCommentBefore({ indent, options: { commentString } }, lines, comment, chompKeep) {
	if (comment && chompKeep) comment = comment.replace(/^\n+/, "");
	if (comment) {
		const ic = indentComment(commentString(comment), indent);
		lines.push(ic.trimStart());
	}
}
//#endregion
//#region node_modules/yaml/browser/dist/nodes/YAMLMap.js
function findPair(items, key) {
	const k = isScalar(key) ? key.value : key;
	for (const it of items) if (isPair(it)) {
		if (it.key === key || it.key === k) return it;
		if (isScalar(it.key) && it.key.value === k) return it;
	}
}
var YAMLMap = class extends Collection {
	static get tagName() {
		return "tag:yaml.org,2002:map";
	}
	constructor(schema) {
		super(MAP, schema);
		this.items = [];
	}
	/**
	* A generic collection parsing method that can be extended
	* to other node classes that inherit from YAMLMap
	*/
	static from(schema, obj, ctx) {
		const { keepUndefined, replacer } = ctx;
		const map = new this(schema);
		const add = (key, value) => {
			if (typeof replacer === "function") value = replacer.call(obj, key, value);
			else if (Array.isArray(replacer) && !replacer.includes(key)) return;
			if (value !== void 0 || keepUndefined) map.items.push(createPair(key, value, ctx));
		};
		if (obj instanceof Map) for (const [key, value] of obj) add(key, value);
		else if (obj && typeof obj === "object") for (const key of Object.keys(obj)) add(key, obj[key]);
		if (typeof schema.sortMapEntries === "function") map.items.sort(schema.sortMapEntries);
		return map;
	}
	/**
	* Adds a value to the collection.
	*
	* @param overwrite - If not set `true`, using a key that is already in the
	*   collection will throw. Otherwise, overwrites the previous value.
	*/
	add(pair, overwrite) {
		let _pair;
		if (isPair(pair)) _pair = pair;
		else if (!pair || typeof pair !== "object" || !("key" in pair)) _pair = new Pair(pair, pair?.value);
		else _pair = new Pair(pair.key, pair.value);
		const prev = findPair(this.items, _pair.key);
		const sortEntries = this.schema?.sortMapEntries;
		if (prev) {
			if (!overwrite) throw new Error(`Key ${_pair.key} already set`);
			if (isScalar(prev.value) && isScalarValue(_pair.value)) prev.value.value = _pair.value;
			else prev.value = _pair.value;
		} else if (sortEntries) {
			const i = this.items.findIndex((item) => sortEntries(_pair, item) < 0);
			if (i === -1) this.items.push(_pair);
			else this.items.splice(i, 0, _pair);
		} else this.items.push(_pair);
	}
	delete(key) {
		const it = findPair(this.items, key);
		if (!it) return false;
		return this.items.splice(this.items.indexOf(it), 1).length > 0;
	}
	get(key, keepScalar) {
		const node = findPair(this.items, key)?.value;
		return (!keepScalar && isScalar(node) ? node.value : node) ?? void 0;
	}
	has(key) {
		return !!findPair(this.items, key);
	}
	set(key, value) {
		this.add(new Pair(key, value), true);
	}
	/**
	* @param ctx - Conversion context, originally set in Document#toJS()
	* @param {Class} Type - If set, forces the returned collection type
	* @returns Instance of Type, Map, or Object
	*/
	toJSON(_, ctx, Type) {
		const map = Type ? new Type() : ctx?.mapAsMap ? /* @__PURE__ */ new Map() : {};
		if (ctx?.onCreate) ctx.onCreate(map);
		for (const item of this.items) addPairToJSMap(ctx, map, item);
		return map;
	}
	toString(ctx, onComment, onChompKeep) {
		if (!ctx) return JSON.stringify(this);
		for (const item of this.items) if (!isPair(item)) throw new Error(`Map items must all be pairs; found ${JSON.stringify(item)} instead`);
		if (!ctx.allNullValues && this.hasAllNullValues(false)) ctx = Object.assign({}, ctx, { allNullValues: true });
		return stringifyCollection(this, ctx, {
			blockItemPrefix: "",
			flowChars: {
				start: "{",
				end: "}"
			},
			itemIndent: ctx.indent || "",
			onChompKeep,
			onComment
		});
	}
};
//#endregion
//#region node_modules/yaml/browser/dist/schema/common/map.js
var map$1 = {
	collection: "map",
	default: true,
	nodeClass: YAMLMap,
	tag: "tag:yaml.org,2002:map",
	resolve(map, onError) {
		if (!isMap(map)) onError("Expected a mapping for this tag");
		return map;
	},
	createNode: (schema, obj, ctx) => YAMLMap.from(schema, obj, ctx)
};
//#endregion
//#region node_modules/yaml/browser/dist/nodes/YAMLSeq.js
var YAMLSeq = class extends Collection {
	static get tagName() {
		return "tag:yaml.org,2002:seq";
	}
	constructor(schema) {
		super(SEQ, schema);
		this.items = [];
	}
	add(value) {
		this.items.push(value);
	}
	/**
	* Removes a value from the collection.
	*
	* `key` must contain a representation of an integer for this to succeed.
	* It may be wrapped in a `Scalar`.
	*
	* @returns `true` if the item was found and removed.
	*/
	delete(key) {
		const idx = asItemIndex(key);
		if (typeof idx !== "number") return false;
		return this.items.splice(idx, 1).length > 0;
	}
	get(key, keepScalar) {
		const idx = asItemIndex(key);
		if (typeof idx !== "number") return void 0;
		const it = this.items[idx];
		return !keepScalar && isScalar(it) ? it.value : it;
	}
	/**
	* Checks if the collection includes a value with the key `key`.
	*
	* `key` must contain a representation of an integer for this to succeed.
	* It may be wrapped in a `Scalar`.
	*/
	has(key) {
		const idx = asItemIndex(key);
		return typeof idx === "number" && idx < this.items.length;
	}
	/**
	* Sets a value in this collection. For `!!set`, `value` needs to be a
	* boolean to add/remove the item from the set.
	*
	* If `key` does not contain a representation of an integer, this will throw.
	* It may be wrapped in a `Scalar`.
	*/
	set(key, value) {
		const idx = asItemIndex(key);
		if (typeof idx !== "number") throw new Error(`Expected a valid index, not ${key}.`);
		const prev = this.items[idx];
		if (isScalar(prev) && isScalarValue(value)) prev.value = value;
		else this.items[idx] = value;
	}
	toJSON(_, ctx) {
		const seq = [];
		if (ctx?.onCreate) ctx.onCreate(seq);
		let i = 0;
		for (const item of this.items) seq.push(toJS(item, String(i++), ctx));
		return seq;
	}
	toString(ctx, onComment, onChompKeep) {
		if (!ctx) return JSON.stringify(this);
		return stringifyCollection(this, ctx, {
			blockItemPrefix: "- ",
			flowChars: {
				start: "[",
				end: "]"
			},
			itemIndent: (ctx.indent || "") + "  ",
			onChompKeep,
			onComment
		});
	}
	static from(schema, obj, ctx) {
		const { replacer } = ctx;
		const seq = new this(schema);
		if (obj && Symbol.iterator in Object(obj)) {
			let i = 0;
			for (let it of obj) {
				if (typeof replacer === "function") {
					const key = obj instanceof Set ? it : String(i++);
					it = replacer.call(obj, key, it);
				}
				seq.items.push(createNode(it, void 0, ctx));
			}
		}
		return seq;
	}
};
function asItemIndex(key) {
	let idx = isScalar(key) ? key.value : key;
	if (idx && typeof idx === "string") idx = Number(idx);
	return typeof idx === "number" && Number.isInteger(idx) && idx >= 0 ? idx : null;
}
//#endregion
//#region node_modules/yaml/browser/dist/schema/common/seq.js
var seq = {
	collection: "seq",
	default: true,
	nodeClass: YAMLSeq,
	tag: "tag:yaml.org,2002:seq",
	resolve(seq, onError) {
		if (!isSeq(seq)) onError("Expected a sequence for this tag");
		return seq;
	},
	createNode: (schema, obj, ctx) => YAMLSeq.from(schema, obj, ctx)
};
//#endregion
//#region node_modules/yaml/browser/dist/schema/json/schema.js
function intIdentify(value) {
	return typeof value === "bigint" || Number.isInteger(value);
}
var stringifyJSON = ({ value }) => JSON.stringify(value);
var jsonScalars = [
	{
		identify: (value) => typeof value === "string",
		default: true,
		tag: "tag:yaml.org,2002:str",
		resolve: (str) => str,
		stringify: stringifyJSON
	},
	{
		identify: (value) => value == null,
		createNode: () => new Scalar(null),
		default: true,
		tag: "tag:yaml.org,2002:null",
		test: /^null$/,
		resolve: () => null,
		stringify: stringifyJSON
	},
	{
		identify: (value) => typeof value === "boolean",
		default: true,
		tag: "tag:yaml.org,2002:bool",
		test: /^true$|^false$/,
		resolve: (str) => str === "true",
		stringify: stringifyJSON
	},
	{
		identify: intIdentify,
		default: true,
		tag: "tag:yaml.org,2002:int",
		test: /^-?(?:0|[1-9][0-9]*)$/,
		resolve: (str, _onError, { intAsBigInt }) => intAsBigInt ? BigInt(str) : parseInt(str, 10),
		stringify: ({ value }) => intIdentify(value) ? value.toString() : JSON.stringify(value)
	},
	{
		identify: (value) => typeof value === "number",
		default: true,
		tag: "tag:yaml.org,2002:float",
		test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
		resolve: (str) => parseFloat(str),
		stringify: stringifyJSON
	}
];
[map$1, seq].concat(jsonScalars, {
	default: true,
	tag: "",
	test: /^/,
	resolve(str, onError) {
		onError(`Unresolved plain scalar ${JSON.stringify(str)}`);
		return str;
	}
});
//#endregion
//#region node_modules/yaml/browser/dist/schema/yaml-1.1/pairs.js
function createPairs(schema, iterable, ctx) {
	const { replacer } = ctx;
	const pairs = new YAMLSeq(schema);
	pairs.tag = "tag:yaml.org,2002:pairs";
	let i = 0;
	if (iterable && Symbol.iterator in Object(iterable)) for (let it of iterable) {
		if (typeof replacer === "function") it = replacer.call(iterable, String(i++), it);
		let key, value;
		if (Array.isArray(it)) if (it.length === 2) {
			key = it[0];
			value = it[1];
		} else throw new TypeError(`Expected [key, value] tuple: ${it}`);
		else if (it && it instanceof Object) {
			const keys = Object.keys(it);
			if (keys.length === 1) {
				key = keys[0];
				value = it[key];
			} else throw new TypeError(`Expected tuple with one key, not ${keys.length} keys`);
		} else key = it;
		pairs.items.push(createPair(key, value, ctx));
	}
	return pairs;
}
//#endregion
//#region node_modules/yaml/browser/dist/schema/yaml-1.1/omap.js
var YAMLOMap = class YAMLOMap extends YAMLSeq {
	constructor() {
		super();
		this.add = YAMLMap.prototype.add.bind(this);
		this.delete = YAMLMap.prototype.delete.bind(this);
		this.get = YAMLMap.prototype.get.bind(this);
		this.has = YAMLMap.prototype.has.bind(this);
		this.set = YAMLMap.prototype.set.bind(this);
		this.tag = YAMLOMap.tag;
	}
	/**
	* If `ctx` is given, the return type is actually `Map<unknown, unknown>`,
	* but TypeScript won't allow widening the signature of a child method.
	*/
	toJSON(_, ctx) {
		if (!ctx) return super.toJSON(_);
		const map = /* @__PURE__ */ new Map();
		if (ctx?.onCreate) ctx.onCreate(map);
		for (const pair of this.items) {
			let key, value;
			if (isPair(pair)) {
				key = toJS(pair.key, "", ctx);
				value = toJS(pair.value, key, ctx);
			} else key = toJS(pair, "", ctx);
			if (map.has(key)) throw new Error("Ordered maps must not include duplicate keys");
			map.set(key, value);
		}
		return map;
	}
	static from(schema, iterable, ctx) {
		const pairs = createPairs(schema, iterable, ctx);
		const omap = new this();
		omap.items = pairs.items;
		return omap;
	}
};
YAMLOMap.tag = "tag:yaml.org,2002:omap";
//#endregion
//#region node_modules/yaml/browser/dist/schema/yaml-1.1/set.js
var YAMLSet = class YAMLSet extends YAMLMap {
	constructor(schema) {
		super(schema);
		this.tag = YAMLSet.tag;
	}
	add(key) {
		let pair;
		if (isPair(key)) pair = key;
		else if (key && typeof key === "object" && "key" in key && "value" in key && key.value === null) pair = new Pair(key.key, null);
		else pair = new Pair(key, null);
		if (!findPair(this.items, pair.key)) this.items.push(pair);
	}
	/**
	* If `keepPair` is `true`, returns the Pair matching `key`.
	* Otherwise, returns the value of that Pair's key.
	*/
	get(key, keepPair) {
		const pair = findPair(this.items, key);
		return !keepPair && isPair(pair) ? isScalar(pair.key) ? pair.key.value : pair.key : pair;
	}
	set(key, value) {
		if (typeof value !== "boolean") throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof value}`);
		const prev = findPair(this.items, key);
		if (prev && !value) this.items.splice(this.items.indexOf(prev), 1);
		else if (!prev && value) this.items.push(new Pair(key));
	}
	toJSON(_, ctx) {
		return super.toJSON(_, ctx, Set);
	}
	toString(ctx, onComment, onChompKeep) {
		if (!ctx) return JSON.stringify(this);
		if (this.hasAllNullValues(true)) return super.toString(Object.assign({}, ctx, { allNullValues: true }), onComment, onChompKeep);
		else throw new Error("Set items must all have null values");
	}
	static from(schema, iterable, ctx) {
		const { replacer } = ctx;
		const set = new this(schema);
		if (iterable && Symbol.iterator in Object(iterable)) for (let value of iterable) {
			if (typeof replacer === "function") value = replacer.call(iterable, value, value);
			set.items.push(createPair(value, null, ctx));
		}
		return set;
	}
};
YAMLSet.tag = "tag:yaml.org,2002:set";
//#endregion
//#region node_modules/yaml/browser/dist/parse/cst-visit.js
var BREAK = Symbol("break visit");
var SKIP = Symbol("skip children");
var REMOVE = Symbol("remove item");
/**
* Apply a visitor to a CST document or item.
*
* Walks through the tree (depth-first) starting from the root, calling a
* `visitor` function with two arguments when entering each item:
*   - `item`: The current item, which included the following members:
*     - `start: SourceToken[]` – Source tokens before the key or value,
*       possibly including its anchor or tag.
*     - `key?: Token | null` – Set for pair values. May then be `null`, if
*       the key before the `:` separator is empty.
*     - `sep?: SourceToken[]` – Source tokens between the key and the value,
*       which should include the `:` map value indicator if `value` is set.
*     - `value?: Token` – The value of a sequence item, or of a map pair.
*   - `path`: The steps from the root to the current node, as an array of
*     `['key' | 'value', number]` tuples.
*
* The return value of the visitor may be used to control the traversal:
*   - `undefined` (default): Do nothing and continue
*   - `visit.SKIP`: Do not visit the children of this token, continue with
*      next sibling
*   - `visit.BREAK`: Terminate traversal completely
*   - `visit.REMOVE`: Remove the current item, then continue with the next one
*   - `number`: Set the index of the next step. This is useful especially if
*     the index of the current token has changed.
*   - `function`: Define the next visitor for this item. After the original
*     visitor is called on item entry, next visitors are called after handling
*     a non-empty `key` and when exiting the item.
*/
function visit(cst, visitor) {
	if ("type" in cst && cst.type === "document") cst = {
		start: cst.start,
		value: cst.value
	};
	_visit(Object.freeze([]), cst, visitor);
}
/** Terminate visit traversal completely */
visit.BREAK = BREAK;
/** Do not visit the children of the current item */
visit.SKIP = SKIP;
/** Remove the current item */
visit.REMOVE = REMOVE;
/** Find the item at `path` from `cst` as the root */
visit.itemAtPath = (cst, path) => {
	let item = cst;
	for (const [field, index] of path) {
		const tok = item?.[field];
		if (tok && "items" in tok) item = tok.items[index];
		else return void 0;
	}
	return item;
};
/**
* Get the immediate parent collection of the item at `path` from `cst` as the root.
*
* Throws an error if the collection is not found, which should never happen if the item itself exists.
*/
visit.parentCollection = (cst, path) => {
	const parent = visit.itemAtPath(cst, path.slice(0, -1));
	const field = path[path.length - 1][0];
	const coll = parent?.[field];
	if (coll && "items" in coll) return coll;
	throw new Error("Parent collection not found");
};
function _visit(path, item, visitor) {
	let ctrl = visitor(item, path);
	if (typeof ctrl === "symbol") return ctrl;
	for (const field of ["key", "value"]) {
		const token = item[field];
		if (token && "items" in token) {
			for (let i = 0; i < token.items.length; ++i) {
				const ci = _visit(Object.freeze(path.concat([[field, i]])), token.items[i], visitor);
				if (typeof ci === "number") i = ci - 1;
				else if (ci === BREAK) return BREAK;
				else if (ci === REMOVE) {
					token.items.splice(i, 1);
					i -= 1;
				}
			}
			if (typeof ctrl === "function" && field === "key") ctrl = ctrl(item, path);
		}
	}
	return typeof ctrl === "function" ? ctrl(item, path) : ctrl;
}
//#endregion
//#region node_modules/@slidev/client/logic/utils.ts
function makeId(length = 5) {
	const result = [];
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	const charactersLength = 52;
	for (let i = 0; i < length; i++) result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
	return result.join("");
}
//#endregion
//#region ../../../../../@server-reactive/drawings?diff
var data$1 = reactive({});
var onSet$1 = [];
var onPatch$2 = [];
define(data$1, "$syncUp", true);
define(data$1, "$syncDown", true);
define(data$1, "$paused", false);
define(data$1, "$onSet", (fn) => onSet$1.push(fn));
define(data$1, "$onPatch", (fn) => onPatch$2.push(fn));
randId();
define(data$1, "$patch", async () => false);
//#endregion
//#region node_modules/@slidev/client/state/drawings.ts
var { init: initDrawingState, onPatch: onPatchDrawingState, onUpdate: onDrawingUpdate, patch: patchDrawingState, state: drawingState } = createSyncState(data$1, data$1, false);
//#endregion
//#region ../../../../../@server-reactive/nav
var data = reactive({
	"page": 0,
	"clicks": 0,
	"timer": {
		"status": "stopped",
		"slides": {},
		"startedAt": 0,
		"pausedAt": 0
	}
});
var onSet = [];
var onPatch$1 = [];
define(data, "$syncUp", true);
define(data, "$syncDown", true);
define(data, "$paused", false);
define(data, "$onSet", (fn) => onSet.push(fn));
define(data, "$onPatch", (fn) => onPatch$1.push(fn));
randId();
define(data, "$patch", async () => false);
//#endregion
//#region node_modules/@slidev/client/state/shared.ts
var { init, onPatch, onUpdate, patch, state } = createSyncState(data, {
	page: 1,
	clicks: 0,
	clicksTotal: 0,
	timer: {
		status: "stopped",
		slides: {},
		startedAt: 0,
		pausedAt: 0
	}
});
//#endregion
//#region node_modules/@slidev/client/setup/root.ts
function setupRoot() {
	const app = getCurrentInstance().appContext.app;
	const context = reactive({
		nav: useNav(),
		configs: configs_default,
		themeConfigs: computed(() => configs_default.themeConfig)
	});
	app.provide(injectionRenderContext, ref("none"));
	app.provide(injectionSlidevContext, context);
	app.provide(injectionCurrentPage, computed(() => context.nav.currentSlideNo));
	app.provide(injectionClicksContext, shallowRef(createFixedClicks()));
	for (const setup of root_default) setup();
	const { clicksContext, currentSlideNo, hasPrimarySlide, isNotesViewer, isPresenter, isPrintMode } = useNav();
	useHead({
		title: slidesTitle,
		htmlAttrs: configs_default.htmlAttrs
	});
	usePrintStyles();
	init(`${slidesTitle} - shared`);
	initDrawingState(`${slidesTitle} - drawings`);
	const id = `${location.origin}_${makeId()}`;
	const syncType = computed(() => isPresenter.value ? "presenter" : "viewer");
	function updateSharedState() {
		if (!(isPresenter.value ? syncDirections.value.presenterSend : syncDirections.value.viewerSend)) return;
		if (isNotesViewer.value || isPrintMode.value) return;
		if (!isPresenter.value && !TRUST_ORIGINS.includes(location.host.split(":")[0])) return;
		patch("page", +currentSlideNo.value);
		patch("clicks", clicksContext.value.current);
		patch("clicksTotal", clicksContext.value.total);
		patch("lastUpdate", {
			id,
			type: syncType.value,
			time: Date.now()
		});
	}
	const router = useRouter();
	router.afterEach(updateSharedState);
	watch(clicksContext, updateSharedState);
	onPatch((state) => {
		if (!(isPresenter.value ? syncDirections.value.presenterReceive : syncDirections.value.viewerReceive)) return;
		if (!hasPrimarySlide.value || isPrintMode.value) return;
		if (state.lastUpdate?.type === syncType.value) return;
		if (+state.page === +currentSlideNo.value && +clicksContext.value.current === +state.clicks) return;
		hmrSkipTransition.value = false;
		router.replace({
			path: getSlidePath(state.page, isPresenter.value),
			query: {
				...router.currentRoute.value.query,
				clicks: state.clicks || 0
			}
		});
	});
}
//#endregion
//#region node_modules/@slidev/client/App.vue
var App_default = /* @__PURE__ */ defineComponent({
	__name: "App",
	setup(__props) {
		setupRoot();
		watchEffect(() => {
			for (const [key, value] of Object.entries(themeVars.value)) document.body.style.setProperty(key, value.toString());
		});
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createElementBlock(Fragment, null, [createVNode(_component_RouterView), createCommentVNode("v-if", true)], 64);
		};
	}
});
//#endregion
//#region node_modules/unhead/dist/shared/unhead.CaGVnLUe.mjs
var WHITESPACE_RE = /\s+/;
// @__NO_SIDE_EFFECTS__
function createDomRenderer(options = {}) {
	return (head) => _renderDOMHead(head, options);
}
function hasPendingEntries(head) {
	for (const entry of head.entries.values()) if (entry._pending !== void 0) return true;
	return false;
}
function cleanupDomState(state) {
	for (const k in state._s) state._s[k]();
	for (const k in state._p) state._p[k]();
	state._s = {};
	state._p = {};
	state._e.clear();
	state._l.clear();
}
function createDomState(head, dom) {
	const state = {
		_d: dom,
		_t: dom.title,
		_e: /* @__PURE__ */ new Map([["htmlAttrs", dom.documentElement], ["bodyAttrs", dom.body]]),
		_p: {},
		_s: {},
		_l: /* @__PURE__ */ new Map()
	};
	for (const el of [...dom.body.children, ...dom.head.children]) {
		const tag = el.tagName.toLowerCase();
		if (!HasElementTags.has(tag)) continue;
		const props = { innerHTML: el.innerHTML };
		for (const n of el.getAttributeNames()) props[n] = el.getAttribute(n);
		const next = normalizeProps({
			tag,
			props: {}
		}, props);
		next.key = el.getAttribute("data-hid") || void 0;
		const dedupe = dedupeKey(next) || hashTag(next);
		let k = dedupe;
		let c = 1;
		while (state._e.has(k)) k = `${dedupe}:${c++}`;
		state._e.set(k, el);
	}
	for (const entry of head.entries.values()) if (entry._o !== void 0) {
		const orig = entry._o;
		for (const t of ["bodyAttrs", "htmlAttrs"]) {
			const cls = orig[t]?.class;
			if (typeof cls === "string") {
				const $el = state._e.get(t);
				for (const c of cls.split(WHITESPACE_RE)) if (c) state._p[`${t}:attr:class:${c}`] = () => $el.classList.remove(c);
			}
		}
	}
	return state;
}
function _renderDOMHead(head, options = {}) {
	const dom = options.document || head.resolvedOptions.document;
	const activeState = head._dom;
	const documentChanged = !!activeState && activeState._d !== dom;
	if (!dom || !documentChanged && !head.dirty && !hasPendingEntries(head)) return false;
	if (head._du) return false;
	const defaultView = dom.defaultView;
	head._du = true;
	let didRender = false;
	try {
		let track = function(id, scope, fn, fresh) {
			const k = `${id}:${scope}`;
			renderState._s[k] = !fresh && renderState._p[k] || fn;
			delete renderState._p[k];
		}, reclaim = function(key) {
			const prev = renderState._p[key];
			delete renderState._p[key];
			return prev;
		}, trackEvent = function(id, k, ev, source, $el, target) {
			const scope = `event:${k}`;
			const key = `${id}:${scope}`;
			const prev = renderState._l.get(key);
			if (prev && prev[0] === target && prev[1] === ev && prev[2] === source) {
				track(id, scope, prev[4]);
				return;
			}
			prev?.[4]();
			const dk = `data-${k}`;
			const handler = ((e) => source.call($el, e));
			const cleanup = () => {
				target.removeEventListener(ev, handler);
				if ($el.getAttribute(dk) === "") $el.removeAttribute(dk);
				if (renderState._l.get(key)?.[3] === handler) renderState._l.delete(key);
			};
			target.addEventListener(ev, handler);
			renderState._l.set(key, [
				target,
				ev,
				source,
				handler,
				cleanup
			]);
			$el.setAttribute(dk, "");
			track(id, scope, cleanup, true);
		}, trackCtx = function({ id, $el, tag }) {
			const isAttr = tag.tag.endsWith("Attrs");
			renderState._e.set(id, $el);
			if (!isAttr) {
				const text = tag.textContent;
				if (text != null && text !== "") {
					if (text !== $el.textContent) $el.textContent = text;
					track(id, "text", () => {
						if ($el.textContent === text) $el.textContent = "";
					}, true);
				}
				const html = tag.innerHTML;
				if (html != null && html !== "") {
					if (html !== $el.innerHTML) $el.innerHTML = html;
					track(id, "html", () => {
						if ($el.innerHTML === html) $el.innerHTML = "";
					}, true);
				}
				const elKey = `${id}:el`;
				renderState._s[elKey] = reclaim(elKey) || (() => {
					$el?.remove();
					renderState._e.delete(id);
				});
			}
			for (const k in tag.props) {
				const v = tag.props[k];
				if (k[0] === "o" && k[1] === "n" && typeof v === "function") {
					const ev = k.slice(2);
					if ($el?.dataset?.[`${k}fired`]) v.call($el, new ((defaultView?.Event) || Event)(ev));
					trackEvent(id, k, ev, v, $el, tag.tag === "bodyAttrs" && defaultView ? defaultView : $el);
					continue;
				}
				const ck = `${id}:attr:${k}`;
				if (k === "class" && v) for (const c of v) {
					const key = `${ck}:${c}`;
					renderState._s[key] = reclaim(key) || (() => $el.classList.remove(c));
					if (!$el.classList.contains(c)) $el.classList.add(c);
				}
				else if (k === "style" && v) for (const [sk, sv] of v) {
					const key = `${ck}:${sk}`;
					renderState._s[key] = reclaim(key) || (() => $el.style.removeProperty(sk));
					$el.style.setProperty(sk, sv);
				}
				else if (v !== false && v !== null) {
					if ($el.getAttribute(k) !== v) $el.setAttribute(k, v === true ? "" : String(v));
					renderState._s[ck] = reclaim(ck) || (() => $el.removeAttribute(k));
				}
			}
		};
		const beforeRenderCtx = {
			shouldRender: true,
			tags: []
		};
		callHook(head, "dom:beforeRender", beforeRenderCtx);
		if (!beforeRenderCtx.shouldRender) return false;
		let state = head._dom;
		if (state?._d !== dom) {
			if (state) cleanupDomState(state);
			state = void 0;
		}
		if (!state) state = createDomState(head, dom);
		else state._p = state._s;
		state._s = {};
		const renderState = state;
		const pending = [];
		const frag = {};
		head.dirty = false;
		const rawTags = resolveTags(head, options.tagWeight ? { tagWeight: options.tagWeight } : void 0);
		const tags = [];
		const dupeKeyCounter = {};
		for (const tag of rawTags) {
			const count = dupeKeyCounter[tag._d] || 0;
			const id = (count ? `${tag._d}:${count}` : tag._d) || tag._h;
			const ctx = {
				tag,
				id,
				shouldRender: true
			};
			if (tag._d && isMetaArrayDupeKey(tag._d)) dupeKeyCounter[tag._d] = count + 1;
			tags.push(ctx);
			if (tag.tag === "title") {
				dom.title = tag.textContent;
				track("title", "", () => dom.title = renderState._t);
				continue;
			}
			ctx.$el = renderState._e.get(id);
			if (ctx.$el) trackCtx(ctx);
			else if (HasElementTags.has(tag.tag)) pending.push(ctx);
		}
		for (const ctx of pending) {
			var _ref;
			ctx.$el = dom.createElement(ctx.tag.tag);
			trackCtx(ctx);
			(frag[_ref = ctx.tag.tagPosition || "head"] ?? (frag[_ref] = dom.createDocumentFragment())).appendChild(ctx.$el);
		}
		if (frag.head) dom.head.appendChild(frag.head);
		if (frag.bodyOpen) dom.body.insertBefore(frag.bodyOpen, dom.body.firstChild);
		if (frag.bodyClose) dom.body.appendChild(frag.bodyClose);
		for (const k in renderState._p) renderState._p[k]();
		head._dom = renderState;
		didRender = true;
		callHook(head, "dom:rendered", { renders: tags });
	} catch (e) {
		head.dirty = true;
		throw e;
	} finally {
		head._du = false;
	}
	if (didRender && (head.dirty || hasPendingEntries(head))) _renderDOMHead(head, options);
	return didRender;
}
//#endregion
//#region node_modules/unhead/dist/shared/unhead.BNhb5t7_.mjs
var tagWeight = (tag) => typeof tag.tagPriority === "number" ? tag.tagPriority : 100 + (TagPriorityAliases[tag.tagPriority] || 0);
function createHead$1(options = {}) {
	options.document = options.document || (typeof window !== "undefined" ? document : void 0);
	const renderer = options.render || /* @__PURE__ */ createDomRenderer({ document: options.document });
	const core = /* @__PURE__ */ createUnhead(renderer, {
		document: options.document,
		propResolvers: options.propResolvers,
		_tagWeight: tagWeight,
		init: []
	});
	const hooks = createHooks(options.hooks);
	let dirty = false;
	const head = {
		...core,
		ssr: false,
		hooks,
		use: (p) => registerPlugin(head, p),
		get dirty() {
			return dirty;
		},
		set dirty(v) {
			dirty = v;
		},
		render: () => renderer(head),
		invalidate() {
			for (const e of core.entries.values()) delete e._tags;
			dirty = true;
			hooks.callHook("entries:updated", head);
		},
		push(input, _options) {
			const onRendered = _options?.onRendered;
			const unhook = onRendered ? hooks.hook("dom:rendered", onRendered) : void 0;
			const active = core.push(input, _options);
			core.entries.get(active._i)._o = input;
			dirty = true;
			hooks.callHook("entries:updated", head);
			return {
				_i: active._i,
				patch(input2) {
					active.patch(input2);
					dirty = true;
					hooks.callHook("entries:updated", head);
				},
				dispose() {
					unhook?.();
					if (core.entries.has(active._i)) {
						active.dispose();
						head.invalidate();
					}
				}
			};
		}
	};
	hooks.hook("entries:updated", () => {
		renderer(head);
	});
	options.plugins?.forEach((p) => registerPlugin(head, p));
	options.init?.forEach((e) => e && head.push(e));
	return head;
}
//#endregion
//#region node_modules/@unhead/vue/dist/client.mjs
// @__NO_SIDE_EFFECTS__
function createHead(options = {}) {
	const domRenderer = /* @__PURE__ */ createDomRenderer();
	let head;
	let renderId = 0;
	const debouncedRenderer = () => {
		const id = ++renderId;
		setTimeout(() => {
			if (id === renderId) domRenderer(head);
		}, 0);
	};
	head = createHead$1({
		render: debouncedRenderer,
		...options
	});
	head.install = /* @__PURE__ */ vueInstall(head);
	return head;
}
//#endregion
//#region node_modules/.slidev/virtual/import-glob.960a00578b.ts
var import_glob_960a00578b_default = /* #__PURE__ */ Object.assign({});
//#endregion
//#region node_modules/.slidev/virtual/import-glob.2177f7c2b2.ts
var import_glob_2177f7c2b2_default = /* #__PURE__ */ Object.assign({});
//#endregion
//#region ../../../../../@slidev/setups/main
var main_default = [Object.values(import_glob_960a00578b_default)[0], Object.values(import_glob_2177f7c2b2_default)[0]].filter(Boolean);
//#endregion
//#region node_modules/@slidev/client/utils.ts
function getSlideClass(route, extra = "") {
	const classes = ["slidev-page", extra];
	const no = route?.meta?.slide?.no;
	if (no != null) classes.push(`slidev-page-${no}`);
	return classes.filter(Boolean).join(" ");
}
async function downloadPDF() {
	const { saveAs } = await __vitePreload(async () => {
		const { saveAs } = await import("./modules/file-saver-Bjz2jPFz.js").then((n) => /* @__PURE__ */ __toESM(n.t(), 1));
		return { saveAs };
	}, __vite__mapDeps([0,1]));
	saveAs(typeof configs_default.download === "string" ? configs_default.download : configs_default.exportFilename ? `${configs_default.exportFilename}.pdf` : `/slidev-exported.pdf`, `${configs_default.title}.pdf`);
}
function directiveInject(dir, key, defaultValue) {
	return (dir.instance?.$).provides[key] ?? defaultValue;
}
//#endregion
//#region node_modules/@slidev/client/modules/v-click.ts
var RE_WHITESPACE_OR_COMMA = /[\s,]+/;
function syncAnimationClasses(el, animations) {
	const targetClasses = animations.map((a) => `${CLASS_VCLICK_ANIMATION_PREFIX}${a}`);
	el.classList.forEach((c) => {
		if (c.startsWith("slidev-vclick-anim-") && !targetClasses.includes(c)) el.classList.remove(c);
	});
	targetClasses.forEach((c) => el.classList.add(c));
}
function createVClickDirectives() {
	return { install(app) {
		app.directive("click", {
			name: "v-click",
			mounted(el, dir) {
				const resolved = resolveClick(el, dir, dir.value);
				if (resolved == null) return;
				el.classList.toggle(CLASS_VCLICK_TARGET, true);
				el.dataset.slidevClicksStart = String(resolved.start);
				if (Number.isFinite(resolved.end)) el.dataset.slidevClicksEnd = String(resolved.end);
				el.watchStopHandle = watchEffect(() => {
					const active = resolved.isActive.value;
					const current = resolved.isCurrent.value;
					const prior = active && !current;
					if (resolved.flagHide) {
						el.classList.toggle(CLASS_VCLICK_HIDDEN, active);
						el.classList.toggle(CLASS_VCLICK_HIDDEN_EXP, active);
					} else el.classList.toggle(CLASS_VCLICK_HIDDEN, !active);
					syncAnimationClasses(el, resolved.flagAnimations.value);
					el.classList.toggle(CLASS_VCLICK_CURRENT, current);
					el.classList.toggle(CLASS_VCLICK_PRIOR, prior);
				});
			},
			unmounted
		});
		app.directive("after", {
			name: "v-after",
			mounted(el, dir) {
				const resolved = resolveClick(el, dir, "+0");
				if (resolved == null) return;
				el.classList.toggle(CLASS_VCLICK_TARGET, true);
				el.watchStopHandle = watchEffect(() => {
					const active = resolved.isActive.value;
					const current = resolved.isCurrent.value;
					const prior = active && !current;
					if (resolved.flagHide) {
						el.classList.toggle(CLASS_VCLICK_HIDDEN, active);
						el.classList.toggle(CLASS_VCLICK_HIDDEN_EXP, active);
					} else el.classList.toggle(CLASS_VCLICK_HIDDEN, !active);
					syncAnimationClasses(el, resolved.flagAnimations.value);
					el.classList.toggle(CLASS_VCLICK_CURRENT, current);
					el.classList.toggle(CLASS_VCLICK_PRIOR, prior);
				});
			},
			unmounted
		});
		app.directive("click-hide", {
			name: "v-click-hide",
			mounted(el, dir) {
				const resolved = resolveClick(el, dir, dir.value, true);
				if (resolved == null) return;
				el.classList.toggle(CLASS_VCLICK_TARGET, true);
				el.watchStopHandle = watchEffect(() => {
					const active = resolved.isActive.value;
					const current = resolved.isCurrent.value;
					const prior = active && !current;
					el.classList.toggle(CLASS_VCLICK_HIDDEN, active);
					el.classList.toggle(CLASS_VCLICK_HIDDEN_EXP, active);
					syncAnimationClasses(el, resolved.flagAnimations.value);
					el.classList.toggle(CLASS_VCLICK_CURRENT, current);
					el.classList.toggle(CLASS_VCLICK_PRIOR, prior);
				});
			},
			unmounted
		});
	} };
}
var resolvedClickMap = /* @__PURE__ */ new Map();
function resolveClick(el, dir, value, explicitHide = false) {
	const ctx = directiveInject(dir, injectionClicksContext)?.value;
	const frontmatter = directiveInject(dir, injectionFrontmatter);
	if (!el || !ctx) return null;
	const flagHide = explicitHide || dir.modifiers.hide !== false && dir.modifiers.hide != null;
	/**
	* Resolves the animation presets for this element.
	* Priority: directive modifiers (stacked) > slide frontmatter > global config.
	* Modifiers allow composition, e.g., v-click.fade.up.scale.
	*/
	const elModifiers = Object.keys({ ...dir.modifiers }).filter((m) => m !== "hide");
	const flagAnimations = computed(() => {
		if (elModifiers.length > 0) return elModifiers;
		const preset = frontmatter?.clickAnimation || configs_default.clickAnimation;
		if (preset) return preset.split(RE_WHITESPACE_OR_COMMA).filter(Boolean);
		return [];
	});
	const info = ctx.calculate(value);
	if (!info) return null;
	ctx.register(el, info);
	const isShown = computed(() => flagHide ? !info.isActive.value : info.isActive.value);
	const visibilityState = computed(() => {
		if (isShown.value) return "shown";
		if (Number.isFinite(info.end)) return ctx.current < info.start ? "before" : "after";
		else return flagHide ? "after" : "before";
	});
	const resolved = {
		...info,
		isShown,
		visibilityState,
		flagHide,
		flagAnimations
	};
	resolvedClickMap.set(el, resolved);
	return resolved;
}
function unmounted(el, dir) {
	el.classList.toggle(CLASS_VCLICK_TARGET, false);
	(directiveInject(dir, injectionClicksContext)?.value)?.unregister(el);
	el.watchStopHandle?.();
}
//#endregion
//#region node_modules/@slidev/client/composables/useSlideBounds.ts
function useSlideBounds(slideElement = inject(injectionSlideElement, ref())) {
	const bounding = useElementBounding(slideElement);
	const stop = watch([
		showEditor,
		isEditorVertical,
		editorWidth,
		editorHeight,
		slideScale,
		windowSize.width,
		windowSize.height
	], () => {
		setTimeout(bounding.update, 300);
	}, {
		flush: "post",
		immediate: true
	});
	return {
		...bounding,
		stop
	};
}
//#endregion
//#region node_modules/@slidev/client/composables/useSlideInfo.ts
function useSlideInfo(no) {
	return {
		info: ref(getSlide(no)?.meta.slide ?? null),
		update: async () => {}
	};
}
var map = {};
function useDynamicSlideInfo(no) {
	function get(no) {
		return map[no] ?? (map[no] = useSlideInfo(no));
	}
	return {
		info: computed({
			get() {
				return get(unref(no)).info.value;
			},
			set(newInfo) {
				get(unref(no)).info.value = newInfo;
			}
		}),
		update: async (data, newId) => {
			const info = get(newId ?? unref(no));
			const newData = await info.update(data);
			if (newData) info.info.value = newData;
			return newData;
		}
	};
}
//#endregion
//#region node_modules/@slidev/client/composables/useDragElements.ts
function useDragElementsUpdater(no) {
	return () => {};
}
function useDragElement(directive, posRaw, markdownSource, isArrow = false) {
	function inject(key) {
		return directive ? directiveInject(directive, key) : injectLocal(key);
	}
	const renderContext = inject(injectionRenderContext);
	const frontmatter = inject("$$slidev-fontmatter") ?? {};
	const page = inject(injectionCurrentPage);
	const updater = computed(() => useDragElementsUpdater(page.value));
	const scale = inject("$$slidev-slide-scale") ?? ref(1);
	const zoom = inject("$$slidev-slide-zoom") ?? ref(1);
	const { left: slideLeft, top: slideTop, stop: stopWatchBounds } = useSlideBounds(inject("$$slidev-slide-element") ?? ref());
	const { isPrintMode } = useNav();
	const enabled = ["slide", "presenter"].includes(renderContext.value) && !isPrintMode.value;
	let dataSource = directive ? "directive" : "prop";
	let dragId = makeId();
	let pos;
	if (Array.isArray(posRaw)) pos = posRaw;
	else if (typeof posRaw === "string" && posRaw.includes(",")) pos = posRaw.split(",").map(Number);
	else if (posRaw != null) {
		dataSource = "frontmatter";
		dragId = `${posRaw}`;
		posRaw = frontmatter?.dragPos?.[dragId];
		pos = posRaw?.split(",").map(Number);
	}
	if (dataSource !== "frontmatter" && !markdownSource) throw new Error("[Slidev] Can not identify the source position of the v-drag element, please provide an explicit `id` prop.");
	const watchStopHandles = [stopWatchBounds];
	const autoHeight = !isArrow && posRaw != null && !Number.isFinite(pos?.[3]);
	pos ?? (pos = [
		NaN,
		NaN,
		0
	]);
	const width = ref(pos[2]);
	const x0 = ref(pos[0] + pos[2] / 2);
	const rotate = ref(isArrow ? 0 : pos[4] ?? 0);
	const rotateRad = computed(() => rotate.value * Math.PI / 180);
	const rotateSin = computed(() => Math.sin(rotateRad.value));
	const rotateCos = computed(() => Math.cos(rotateRad.value));
	const container = ref();
	const bounds = ref({
		left: 0,
		top: 0,
		width: 0,
		height: 0
	});
	const actualHeight = ref(0);
	function updateBounds() {
		if (!container.value) return;
		const rect = container.value.getBoundingClientRect();
		bounds.value = {
			left: rect.left / zoom.value,
			top: rect.top / zoom.value,
			width: rect.width / zoom.value,
			height: rect.height / zoom.value
		};
		actualHeight.value = (bounds.value.width + bounds.value.height) / scale.value / (Math.abs(rotateSin.value) + Math.abs(rotateCos.value)) - width.value;
	}
	watchStopHandles.push(watch(width, updateBounds, { flush: "post" }));
	const configuredHeight = ref(pos[3] ?? 0);
	const height = autoHeight ? computed({
		get: () => (autoHeight ? actualHeight.value : configuredHeight.value) || 0,
		set: (v) => !autoHeight && (configuredHeight.value = v)
	}) : configuredHeight;
	const configuredY0 = autoHeight ? ref(pos[1]) : ref(pos[1] + pos[3] / 2);
	const y0 = autoHeight ? computed({
		get: () => configuredY0.value + height.value / 2,
		set: (v) => configuredY0.value = v - height.value / 2
	}) : configuredY0;
	const containerStyle = computed(() => {
		return Number.isFinite(x0.value) ? {
			position: "absolute",
			zIndex: 100,
			left: `${x0.value - width.value / 2}px`,
			top: `${y0.value - height.value / 2}px`,
			width: `${width.value}px`,
			height: autoHeight ? void 0 : `${height.value}px`,
			transformOrigin: "center center",
			transform: `rotate(${rotate.value}deg)`
		} : {
			position: "absolute",
			zIndex: 100
		};
	});
	watchStopHandles.push(watch([
		x0,
		y0,
		width,
		height,
		rotate
	], ([x0, y0, w, h, r]) => {
		let posStr = [
			x0 - w / 2,
			y0 - h / 2,
			w
		].map(Math.round).join();
		if (autoHeight) posStr += dataSource === "directive" ? ",NaN" : ",_";
		else posStr += `,${Math.round(h)}`;
		if (Math.round(r) !== 0) posStr += `,${Math.round(r)}`;
		if (dataSource === "directive") posStr = `[${posStr}]`;
		updater.value(dragId, posStr, dataSource, markdownSource);
	}));
	const state = {
		dragId,
		dataSource,
		markdownSource,
		isArrow,
		zoom,
		autoHeight,
		x0,
		y0,
		width,
		height,
		rotate,
		container,
		containerStyle,
		watchStopHandles,
		dragging: computed(() => activeDragElement.value === state),
		mounted() {
			if (!enabled) return;
			updateBounds();
			if (!posRaw) setTimeout(() => {
				updateBounds();
				x0.value = (bounds.value.left + bounds.value.width / 2 - slideLeft.value) / scale.value;
				y0.value = (bounds.value.top - slideTop.value) / scale.value;
				width.value = bounds.value.width / scale.value;
				height.value = bounds.value.height / scale.value;
			}, 100);
		},
		unmounted() {
			if (!enabled) return;
			state.stopDragging();
		},
		startDragging() {
			if (!enabled) return;
			updateBounds();
			activeDragElement.value = state;
		},
		stopDragging() {
			if (!enabled) return;
			if (activeDragElement.value === state) activeDragElement.value = null;
		}
	};
	watchStopHandles.push(onClickOutside(container, (ev) => {
		const container = document.querySelector("#drag-control-container");
		if (container && ev.target && container.contains(ev.target)) return;
		state.stopDragging();
	}), watch(useWindowFocus(), (focused) => {
		if (!focused) state.stopDragging();
	}));
	return state;
}
//#endregion
//#region node_modules/@slidev/client/modules/v-drag.ts
function createVDragDirective() {
	return { install(app) {
		app.directive("drag", {
			name: "v-drag",
			created(el, binding, vnode) {
				const state = useDragElement(binding, binding.value, vnode.props?.markdownSource);
				if (vnode.props) {
					vnode.props = { ...vnode.props };
					delete vnode.props.markdownSource;
				}
				state.container.value = el;
				el.draggingState = state;
				el.dataset.dragId = state.dragId;
				state.watchStopHandles.push(watch(state.containerStyle, (style) => {
					for (const [k, v] of Object.entries(style)) if (v) el.style[k] = v;
				}, { immediate: true }));
				el.addEventListener("dblclick", state.startDragging);
			},
			mounted(el) {
				el.draggingState.mounted();
			},
			unmounted(el) {
				const state = el.draggingState;
				state.unmounted();
				el.removeEventListener("dblclick", state.startDragging);
				state.watchStopHandles.forEach((fn) => fn());
			}
		});
	} };
}
//#endregion
//#region node_modules/roughjs/bin/math.js
function randomSeed() {
	return Math.floor(Math.random() * 2 ** 31);
}
var Random = class {
	constructor(seed) {
		this.seed = seed;
	}
	next() {
		if (this.seed) return (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31;
		else return Math.random();
	}
};
//#endregion
//#region node_modules/hachure-fill/bin/hachure.js
function rotatePoints(points, center, degrees) {
	if (points && points.length) {
		const [cx, cy] = center;
		const angle = Math.PI / 180 * degrees;
		const cos = Math.cos(angle);
		const sin = Math.sin(angle);
		for (const p of points) {
			const [x, y] = p;
			p[0] = (x - cx) * cos - (y - cy) * sin + cx;
			p[1] = (x - cx) * sin + (y - cy) * cos + cy;
		}
	}
}
function rotateLines(lines, center, degrees) {
	const points = [];
	lines.forEach((line) => points.push(...line));
	rotatePoints(points, center, degrees);
}
function areSamePoints(p1, p2) {
	return p1[0] === p2[0] && p1[1] === p2[1];
}
function hachureLines(polygons, hachureGap, hachureAngle, hachureStepOffset = 1) {
	const angle = hachureAngle;
	const gap = Math.max(hachureGap, .1);
	const polygonList = polygons[0] && polygons[0][0] && typeof polygons[0][0] === "number" ? [polygons] : polygons;
	const rotationCenter = [0, 0];
	if (angle) for (const polygon of polygonList) rotatePoints(polygon, rotationCenter, angle);
	const lines = straightHachureLines(polygonList, gap, hachureStepOffset);
	if (angle) {
		for (const polygon of polygonList) rotatePoints(polygon, rotationCenter, -angle);
		rotateLines(lines, rotationCenter, -angle);
	}
	return lines;
}
function straightHachureLines(polygons, gap, hachureStepOffset) {
	const vertexArray = [];
	for (const polygon of polygons) {
		const vertices = [...polygon];
		if (!areSamePoints(vertices[0], vertices[vertices.length - 1])) vertices.push([vertices[0][0], vertices[0][1]]);
		if (vertices.length > 2) vertexArray.push(vertices);
	}
	const lines = [];
	gap = Math.max(gap, .1);
	const edges = [];
	for (const vertices of vertexArray) for (let i = 0; i < vertices.length - 1; i++) {
		const p1 = vertices[i];
		const p2 = vertices[i + 1];
		if (p1[1] !== p2[1]) {
			const ymin = Math.min(p1[1], p2[1]);
			edges.push({
				ymin,
				ymax: Math.max(p1[1], p2[1]),
				x: ymin === p1[1] ? p1[0] : p2[0],
				islope: (p2[0] - p1[0]) / (p2[1] - p1[1])
			});
		}
	}
	edges.sort((e1, e2) => {
		if (e1.ymin < e2.ymin) return -1;
		if (e1.ymin > e2.ymin) return 1;
		if (e1.x < e2.x) return -1;
		if (e1.x > e2.x) return 1;
		if (e1.ymax === e2.ymax) return 0;
		return (e1.ymax - e2.ymax) / Math.abs(e1.ymax - e2.ymax);
	});
	if (!edges.length) return lines;
	let activeEdges = [];
	let y = edges[0].ymin;
	let iteration = 0;
	while (activeEdges.length || edges.length) {
		if (edges.length) {
			let ix = -1;
			for (let i = 0; i < edges.length; i++) {
				if (edges[i].ymin > y) break;
				ix = i;
			}
			edges.splice(0, ix + 1).forEach((edge) => {
				activeEdges.push({
					s: y,
					edge
				});
			});
		}
		activeEdges = activeEdges.filter((ae) => {
			if (ae.edge.ymax <= y) return false;
			return true;
		});
		activeEdges.sort((ae1, ae2) => {
			if (ae1.edge.x === ae2.edge.x) return 0;
			return (ae1.edge.x - ae2.edge.x) / Math.abs(ae1.edge.x - ae2.edge.x);
		});
		if (hachureStepOffset !== 1 || iteration % gap === 0) {
			if (activeEdges.length > 1) for (let i = 0; i < activeEdges.length; i = i + 2) {
				const nexti = i + 1;
				if (nexti >= activeEdges.length) break;
				const ce = activeEdges[i].edge;
				const ne = activeEdges[nexti].edge;
				lines.push([[Math.round(ce.x), y], [Math.round(ne.x), y]]);
			}
		}
		y += hachureStepOffset;
		activeEdges.forEach((ae) => {
			ae.edge.x = ae.edge.x + hachureStepOffset * ae.edge.islope;
		});
		iteration++;
	}
	return lines;
}
//#endregion
//#region node_modules/roughjs/bin/fillers/scan-line-hachure.js
function polygonHachureLines(polygonList, o) {
	var _a;
	const angle = o.hachureAngle + 90;
	let gap = o.hachureGap;
	if (gap < 0) gap = o.strokeWidth * 4;
	gap = Math.round(Math.max(gap, .1));
	let skipOffset = 1;
	if (o.roughness >= 1) {
		if ((((_a = o.randomizer) === null || _a === void 0 ? void 0 : _a.next()) || Math.random()) > .7) skipOffset = gap;
	}
	return hachureLines(polygonList, gap, angle, skipOffset || 1);
}
//#endregion
//#region node_modules/roughjs/bin/fillers/hachure-filler.js
var HachureFiller = class {
	constructor(helper) {
		this.helper = helper;
	}
	fillPolygons(polygonList, o) {
		return this._fillPolygons(polygonList, o);
	}
	_fillPolygons(polygonList, o) {
		const lines = polygonHachureLines(polygonList, o);
		return {
			type: "fillSketch",
			ops: this.renderLines(lines, o)
		};
	}
	renderLines(lines, o) {
		const ops = [];
		for (const line of lines) ops.push(...this.helper.doubleLineOps(line[0][0], line[0][1], line[1][0], line[1][1], o));
		return ops;
	}
};
//#endregion
//#region node_modules/roughjs/bin/geometry.js
function lineLength(line) {
	const p1 = line[0];
	const p2 = line[1];
	return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
}
//#endregion
//#region node_modules/roughjs/bin/fillers/zigzag-filler.js
var ZigZagFiller = class extends HachureFiller {
	fillPolygons(polygonList, o) {
		let gap = o.hachureGap;
		if (gap < 0) gap = o.strokeWidth * 4;
		gap = Math.max(gap, .1);
		const lines = polygonHachureLines(polygonList, Object.assign({}, o, { hachureGap: gap }));
		const zigZagAngle = Math.PI / 180 * o.hachureAngle;
		const zigzagLines = [];
		const dgx = gap * .5 * Math.cos(zigZagAngle);
		const dgy = gap * .5 * Math.sin(zigZagAngle);
		for (const [p1, p2] of lines) if (lineLength([p1, p2])) zigzagLines.push([[p1[0] - dgx, p1[1] + dgy], [...p2]], [[p1[0] + dgx, p1[1] - dgy], [...p2]]);
		return {
			type: "fillSketch",
			ops: this.renderLines(zigzagLines, o)
		};
	}
};
//#endregion
//#region node_modules/roughjs/bin/fillers/hatch-filler.js
var HatchFiller = class extends HachureFiller {
	fillPolygons(polygonList, o) {
		const set = this._fillPolygons(polygonList, o);
		const o2 = Object.assign({}, o, { hachureAngle: o.hachureAngle + 90 });
		const set2 = this._fillPolygons(polygonList, o2);
		set.ops = set.ops.concat(set2.ops);
		return set;
	}
};
//#endregion
//#region node_modules/roughjs/bin/fillers/dot-filler.js
var DotFiller = class {
	constructor(helper) {
		this.helper = helper;
	}
	fillPolygons(polygonList, o) {
		o = Object.assign({}, o, { hachureAngle: 0 });
		const lines = polygonHachureLines(polygonList, o);
		return this.dotsOnLines(lines, o);
	}
	dotsOnLines(lines, o) {
		const ops = [];
		let gap = o.hachureGap;
		if (gap < 0) gap = o.strokeWidth * 4;
		gap = Math.max(gap, .1);
		let fweight = o.fillWeight;
		if (fweight < 0) fweight = o.strokeWidth / 2;
		const ro = gap / 4;
		for (const line of lines) {
			const length = lineLength(line);
			const dl = length / gap;
			const count = Math.ceil(dl) - 1;
			const offset = length - count * gap;
			const x = (line[0][0] + line[1][0]) / 2 - gap / 4;
			const minY = Math.min(line[0][1], line[1][1]);
			for (let i = 0; i < count; i++) {
				const y = minY + offset + i * gap;
				const cx = x - ro + Math.random() * 2 * ro;
				const cy = y - ro + Math.random() * 2 * ro;
				const el = this.helper.ellipse(cx, cy, fweight, fweight, o);
				ops.push(...el.ops);
			}
		}
		return {
			type: "fillSketch",
			ops
		};
	}
};
//#endregion
//#region node_modules/roughjs/bin/fillers/dashed-filler.js
var DashedFiller = class {
	constructor(helper) {
		this.helper = helper;
	}
	fillPolygons(polygonList, o) {
		const lines = polygonHachureLines(polygonList, o);
		return {
			type: "fillSketch",
			ops: this.dashedLine(lines, o)
		};
	}
	dashedLine(lines, o) {
		const offset = o.dashOffset < 0 ? o.hachureGap < 0 ? o.strokeWidth * 4 : o.hachureGap : o.dashOffset;
		const gap = o.dashGap < 0 ? o.hachureGap < 0 ? o.strokeWidth * 4 : o.hachureGap : o.dashGap;
		const ops = [];
		lines.forEach((line) => {
			const length = lineLength(line);
			const count = Math.floor(length / (offset + gap));
			const startOffset = (length + gap - count * (offset + gap)) / 2;
			let p1 = line[0];
			let p2 = line[1];
			if (p1[0] > p2[0]) {
				p1 = line[1];
				p2 = line[0];
			}
			const alpha = Math.atan((p2[1] - p1[1]) / (p2[0] - p1[0]));
			for (let i = 0; i < count; i++) {
				const lstart = i * (offset + gap);
				const lend = lstart + offset;
				const start = [p1[0] + lstart * Math.cos(alpha) + startOffset * Math.cos(alpha), p1[1] + lstart * Math.sin(alpha) + startOffset * Math.sin(alpha)];
				const end = [p1[0] + lend * Math.cos(alpha) + startOffset * Math.cos(alpha), p1[1] + lend * Math.sin(alpha) + startOffset * Math.sin(alpha)];
				ops.push(...this.helper.doubleLineOps(start[0], start[1], end[0], end[1], o));
			}
		});
		return ops;
	}
};
//#endregion
//#region node_modules/roughjs/bin/fillers/zigzag-line-filler.js
var ZigZagLineFiller = class {
	constructor(helper) {
		this.helper = helper;
	}
	fillPolygons(polygonList, o) {
		const gap = o.hachureGap < 0 ? o.strokeWidth * 4 : o.hachureGap;
		const zo = o.zigzagOffset < 0 ? gap : o.zigzagOffset;
		o = Object.assign({}, o, { hachureGap: gap + zo });
		const lines = polygonHachureLines(polygonList, o);
		return {
			type: "fillSketch",
			ops: this.zigzagLines(lines, zo, o)
		};
	}
	zigzagLines(lines, zo, o) {
		const ops = [];
		lines.forEach((line) => {
			const length = lineLength(line);
			const count = Math.round(length / (2 * zo));
			let p1 = line[0];
			let p2 = line[1];
			if (p1[0] > p2[0]) {
				p1 = line[1];
				p2 = line[0];
			}
			const alpha = Math.atan((p2[1] - p1[1]) / (p2[0] - p1[0]));
			for (let i = 0; i < count; i++) {
				const lstart = i * 2 * zo;
				const lend = (i + 1) * 2 * zo;
				const dz = Math.sqrt(2 * Math.pow(zo, 2));
				const start = [p1[0] + lstart * Math.cos(alpha), p1[1] + lstart * Math.sin(alpha)];
				const end = [p1[0] + lend * Math.cos(alpha), p1[1] + lend * Math.sin(alpha)];
				const middle = [start[0] + dz * Math.cos(alpha + Math.PI / 4), start[1] + dz * Math.sin(alpha + Math.PI / 4)];
				ops.push(...this.helper.doubleLineOps(start[0], start[1], middle[0], middle[1], o), ...this.helper.doubleLineOps(middle[0], middle[1], end[0], end[1], o));
			}
		});
		return ops;
	}
};
//#endregion
//#region node_modules/roughjs/bin/fillers/filler.js
var fillers = {};
function getFiller(o, helper) {
	let fillerName = o.fillStyle || "hachure";
	if (!fillers[fillerName]) switch (fillerName) {
		case "zigzag":
			if (!fillers[fillerName]) fillers[fillerName] = new ZigZagFiller(helper);
			break;
		case "cross-hatch":
			if (!fillers[fillerName]) fillers[fillerName] = new HatchFiller(helper);
			break;
		case "dots":
			if (!fillers[fillerName]) fillers[fillerName] = new DotFiller(helper);
			break;
		case "dashed":
			if (!fillers[fillerName]) fillers[fillerName] = new DashedFiller(helper);
			break;
		case "zigzag-line":
			if (!fillers[fillerName]) fillers[fillerName] = new ZigZagLineFiller(helper);
			break;
		default:
			fillerName = "hachure";
			if (!fillers[fillerName]) fillers[fillerName] = new HachureFiller(helper);
			break;
	}
	return fillers[fillerName];
}
//#endregion
//#region node_modules/path-data-parser/lib/parser.js
var COMMAND = 0;
var NUMBER = 1;
var EOD = 2;
var PARAMS = {
	A: 7,
	a: 7,
	C: 6,
	c: 6,
	H: 1,
	h: 1,
	L: 2,
	l: 2,
	M: 2,
	m: 2,
	Q: 4,
	q: 4,
	S: 4,
	s: 4,
	T: 2,
	t: 2,
	V: 1,
	v: 1,
	Z: 0,
	z: 0
};
function tokenize(d) {
	const tokens = new Array();
	while (d !== "") if (d.match(/^([ \t\r\n,]+)/)) d = d.substr(RegExp.$1.length);
	else if (d.match(/^([aAcChHlLmMqQsStTvVzZ])/)) {
		tokens[tokens.length] = {
			type: COMMAND,
			text: RegExp.$1
		};
		d = d.substr(RegExp.$1.length);
	} else if (d.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) {
		tokens[tokens.length] = {
			type: NUMBER,
			text: `${parseFloat(RegExp.$1)}`
		};
		d = d.substr(RegExp.$1.length);
	} else return [];
	tokens[tokens.length] = {
		type: EOD,
		text: ""
	};
	return tokens;
}
function isType(token, type) {
	return token.type === type;
}
function parsePath(d) {
	const segments = [];
	const tokens = tokenize(d);
	let mode = "BOD";
	let index = 0;
	let token = tokens[index];
	while (!isType(token, EOD)) {
		let paramsCount = 0;
		const params = [];
		if (mode === "BOD") if (token.text === "M" || token.text === "m") {
			index++;
			paramsCount = PARAMS[token.text];
			mode = token.text;
		} else return parsePath("M0,0" + d);
		else if (isType(token, NUMBER)) paramsCount = PARAMS[mode];
		else {
			index++;
			paramsCount = PARAMS[token.text];
			mode = token.text;
		}
		if (index + paramsCount < tokens.length) {
			for (let i = index; i < index + paramsCount; i++) {
				const numbeToken = tokens[i];
				if (isType(numbeToken, NUMBER)) params[params.length] = +numbeToken.text;
				else throw new Error("Param not a number: " + mode + "," + numbeToken.text);
			}
			if (typeof PARAMS[mode] === "number") {
				const segment = {
					key: mode,
					data: params
				};
				segments.push(segment);
				index += paramsCount;
				token = tokens[index];
				if (mode === "M") mode = "L";
				if (mode === "m") mode = "l";
			} else throw new Error("Bad segment: " + mode);
		} else throw new Error("Path data ended short");
	}
	return segments;
}
//#endregion
//#region node_modules/path-data-parser/lib/absolutize.js
function absolutize(segments) {
	let cx = 0, cy = 0;
	let subx = 0, suby = 0;
	const out = [];
	for (const { key, data } of segments) switch (key) {
		case "M":
			out.push({
				key: "M",
				data: [...data]
			});
			[cx, cy] = data;
			[subx, suby] = data;
			break;
		case "m":
			cx += data[0];
			cy += data[1];
			out.push({
				key: "M",
				data: [cx, cy]
			});
			subx = cx;
			suby = cy;
			break;
		case "L":
			out.push({
				key: "L",
				data: [...data]
			});
			[cx, cy] = data;
			break;
		case "l":
			cx += data[0];
			cy += data[1];
			out.push({
				key: "L",
				data: [cx, cy]
			});
			break;
		case "C":
			out.push({
				key: "C",
				data: [...data]
			});
			cx = data[4];
			cy = data[5];
			break;
		case "c": {
			const newdata = data.map((d, i) => i % 2 ? d + cy : d + cx);
			out.push({
				key: "C",
				data: newdata
			});
			cx = newdata[4];
			cy = newdata[5];
			break;
		}
		case "Q":
			out.push({
				key: "Q",
				data: [...data]
			});
			cx = data[2];
			cy = data[3];
			break;
		case "q": {
			const newdata = data.map((d, i) => i % 2 ? d + cy : d + cx);
			out.push({
				key: "Q",
				data: newdata
			});
			cx = newdata[2];
			cy = newdata[3];
			break;
		}
		case "A":
			out.push({
				key: "A",
				data: [...data]
			});
			cx = data[5];
			cy = data[6];
			break;
		case "a":
			cx += data[5];
			cy += data[6];
			out.push({
				key: "A",
				data: [
					data[0],
					data[1],
					data[2],
					data[3],
					data[4],
					cx,
					cy
				]
			});
			break;
		case "H":
			out.push({
				key: "H",
				data: [...data]
			});
			cx = data[0];
			break;
		case "h":
			cx += data[0];
			out.push({
				key: "H",
				data: [cx]
			});
			break;
		case "V":
			out.push({
				key: "V",
				data: [...data]
			});
			cy = data[0];
			break;
		case "v":
			cy += data[0];
			out.push({
				key: "V",
				data: [cy]
			});
			break;
		case "S":
			out.push({
				key: "S",
				data: [...data]
			});
			cx = data[2];
			cy = data[3];
			break;
		case "s": {
			const newdata = data.map((d, i) => i % 2 ? d + cy : d + cx);
			out.push({
				key: "S",
				data: newdata
			});
			cx = newdata[2];
			cy = newdata[3];
			break;
		}
		case "T":
			out.push({
				key: "T",
				data: [...data]
			});
			cx = data[0];
			cy = data[1];
			break;
		case "t":
			cx += data[0];
			cy += data[1];
			out.push({
				key: "T",
				data: [cx, cy]
			});
			break;
		case "Z":
		case "z":
			out.push({
				key: "Z",
				data: []
			});
			cx = subx;
			cy = suby;
			break;
	}
	return out;
}
//#endregion
//#region node_modules/path-data-parser/lib/normalize.js
function normalize(segments) {
	const out = [];
	let lastType = "";
	let cx = 0, cy = 0;
	let subx = 0, suby = 0;
	let lcx = 0, lcy = 0;
	for (const { key, data } of segments) {
		switch (key) {
			case "M":
				out.push({
					key: "M",
					data: [...data]
				});
				[cx, cy] = data;
				[subx, suby] = data;
				break;
			case "C":
				out.push({
					key: "C",
					data: [...data]
				});
				cx = data[4];
				cy = data[5];
				lcx = data[2];
				lcy = data[3];
				break;
			case "L":
				out.push({
					key: "L",
					data: [...data]
				});
				[cx, cy] = data;
				break;
			case "H":
				cx = data[0];
				out.push({
					key: "L",
					data: [cx, cy]
				});
				break;
			case "V":
				cy = data[0];
				out.push({
					key: "L",
					data: [cx, cy]
				});
				break;
			case "S": {
				let cx1 = 0, cy1 = 0;
				if (lastType === "C" || lastType === "S") {
					cx1 = cx + (cx - lcx);
					cy1 = cy + (cy - lcy);
				} else {
					cx1 = cx;
					cy1 = cy;
				}
				out.push({
					key: "C",
					data: [
						cx1,
						cy1,
						...data
					]
				});
				lcx = data[0];
				lcy = data[1];
				cx = data[2];
				cy = data[3];
				break;
			}
			case "T": {
				const [x, y] = data;
				let x1 = 0, y1 = 0;
				if (lastType === "Q" || lastType === "T") {
					x1 = cx + (cx - lcx);
					y1 = cy + (cy - lcy);
				} else {
					x1 = cx;
					y1 = cy;
				}
				const cx1 = cx + 2 * (x1 - cx) / 3;
				const cy1 = cy + 2 * (y1 - cy) / 3;
				const cx2 = x + 2 * (x1 - x) / 3;
				const cy2 = y + 2 * (y1 - y) / 3;
				out.push({
					key: "C",
					data: [
						cx1,
						cy1,
						cx2,
						cy2,
						x,
						y
					]
				});
				lcx = x1;
				lcy = y1;
				cx = x;
				cy = y;
				break;
			}
			case "Q": {
				const [x1, y1, x, y] = data;
				const cx1 = cx + 2 * (x1 - cx) / 3;
				const cy1 = cy + 2 * (y1 - cy) / 3;
				const cx2 = x + 2 * (x1 - x) / 3;
				const cy2 = y + 2 * (y1 - y) / 3;
				out.push({
					key: "C",
					data: [
						cx1,
						cy1,
						cx2,
						cy2,
						x,
						y
					]
				});
				lcx = x1;
				lcy = y1;
				cx = x;
				cy = y;
				break;
			}
			case "A": {
				const r1 = Math.abs(data[0]);
				const r2 = Math.abs(data[1]);
				const angle = data[2];
				const largeArcFlag = data[3];
				const sweepFlag = data[4];
				const x = data[5];
				const y = data[6];
				if (r1 === 0 || r2 === 0) {
					out.push({
						key: "C",
						data: [
							cx,
							cy,
							x,
							y,
							x,
							y
						]
					});
					cx = x;
					cy = y;
				} else if (cx !== x || cy !== y) {
					arcToCubicCurves(cx, cy, x, y, r1, r2, angle, largeArcFlag, sweepFlag).forEach(function(curve) {
						out.push({
							key: "C",
							data: curve
						});
					});
					cx = x;
					cy = y;
				}
				break;
			}
			case "Z":
				out.push({
					key: "Z",
					data: []
				});
				cx = subx;
				cy = suby;
				break;
		}
		lastType = key;
	}
	return out;
}
function degToRad(degrees) {
	return Math.PI * degrees / 180;
}
function rotate(x, y, angleRad) {
	return [x * Math.cos(angleRad) - y * Math.sin(angleRad), x * Math.sin(angleRad) + y * Math.cos(angleRad)];
}
function arcToCubicCurves(x1, y1, x2, y2, r1, r2, angle, largeArcFlag, sweepFlag, recursive) {
	const angleRad = degToRad(angle);
	let params = [];
	let f1 = 0, f2 = 0, cx = 0, cy = 0;
	if (recursive) [f1, f2, cx, cy] = recursive;
	else {
		[x1, y1] = rotate(x1, y1, -angleRad);
		[x2, y2] = rotate(x2, y2, -angleRad);
		const x = (x1 - x2) / 2;
		const y = (y1 - y2) / 2;
		let h = x * x / (r1 * r1) + y * y / (r2 * r2);
		if (h > 1) {
			h = Math.sqrt(h);
			r1 = h * r1;
			r2 = h * r2;
		}
		const sign = largeArcFlag === sweepFlag ? -1 : 1;
		const r1Pow = r1 * r1;
		const r2Pow = r2 * r2;
		const left = r1Pow * r2Pow - r1Pow * y * y - r2Pow * x * x;
		const right = r1Pow * y * y + r2Pow * x * x;
		const k = sign * Math.sqrt(Math.abs(left / right));
		cx = k * r1 * y / r2 + (x1 + x2) / 2;
		cy = k * -r2 * x / r1 + (y1 + y2) / 2;
		f1 = Math.asin(parseFloat(((y1 - cy) / r2).toFixed(9)));
		f2 = Math.asin(parseFloat(((y2 - cy) / r2).toFixed(9)));
		if (x1 < cx) f1 = Math.PI - f1;
		if (x2 < cx) f2 = Math.PI - f2;
		if (f1 < 0) f1 = Math.PI * 2 + f1;
		if (f2 < 0) f2 = Math.PI * 2 + f2;
		if (sweepFlag && f1 > f2) f1 = f1 - Math.PI * 2;
		if (!sweepFlag && f2 > f1) f2 = f2 - Math.PI * 2;
	}
	let df = f2 - f1;
	if (Math.abs(df) > Math.PI * 120 / 180) {
		const f2old = f2;
		const x2old = x2;
		const y2old = y2;
		if (sweepFlag && f2 > f1) f2 = f1 + Math.PI * 120 / 180 * 1;
		else f2 = f1 + Math.PI * 120 / 180 * -1;
		x2 = cx + r1 * Math.cos(f2);
		y2 = cy + r2 * Math.sin(f2);
		params = arcToCubicCurves(x2, y2, x2old, y2old, r1, r2, angle, 0, sweepFlag, [
			f2,
			f2old,
			cx,
			cy
		]);
	}
	df = f2 - f1;
	const c1 = Math.cos(f1);
	const s1 = Math.sin(f1);
	const c2 = Math.cos(f2);
	const s2 = Math.sin(f2);
	const t = Math.tan(df / 4);
	const hx = 4 / 3 * r1 * t;
	const hy = 4 / 3 * r2 * t;
	const m1 = [x1, y1];
	const m2 = [x1 + hx * s1, y1 - hy * c1];
	const m3 = [x2 + hx * s2, y2 - hy * c2];
	const m4 = [x2, y2];
	m2[0] = 2 * m1[0] - m2[0];
	m2[1] = 2 * m1[1] - m2[1];
	if (recursive) return [
		m2,
		m3,
		m4
	].concat(params);
	else {
		params = [
			m2,
			m3,
			m4
		].concat(params);
		const curves = [];
		for (let i = 0; i < params.length; i += 3) {
			const r1 = rotate(params[i][0], params[i][1], angleRad);
			const r2 = rotate(params[i + 1][0], params[i + 1][1], angleRad);
			const r3 = rotate(params[i + 2][0], params[i + 2][1], angleRad);
			curves.push([
				r1[0],
				r1[1],
				r2[0],
				r2[1],
				r3[0],
				r3[1]
			]);
		}
		return curves;
	}
}
//#endregion
//#region node_modules/roughjs/bin/renderer.js
var helper = {
	randOffset,
	randOffsetWithRange,
	ellipse,
	doubleLineOps: doubleLineFillOps
};
function line(x1, y1, x2, y2, o) {
	return {
		type: "path",
		ops: _doubleLine(x1, y1, x2, y2, o)
	};
}
function linearPath(points, close, o) {
	const len = (points || []).length;
	if (len > 2) {
		const ops = [];
		for (let i = 0; i < len - 1; i++) ops.push(..._doubleLine(points[i][0], points[i][1], points[i + 1][0], points[i + 1][1], o));
		if (close) ops.push(..._doubleLine(points[len - 1][0], points[len - 1][1], points[0][0], points[0][1], o));
		return {
			type: "path",
			ops
		};
	} else if (len === 2) return line(points[0][0], points[0][1], points[1][0], points[1][1], o);
	return {
		type: "path",
		ops: []
	};
}
function polygon(points, o) {
	return linearPath(points, true, o);
}
function rectangle(x, y, width, height, o) {
	return polygon([
		[x, y],
		[x + width, y],
		[x + width, y + height],
		[x, y + height]
	], o);
}
function curve(inputPoints, o) {
	if (inputPoints.length) {
		const pointsList = typeof inputPoints[0][0] === "number" ? [inputPoints] : inputPoints;
		const o1 = _curveWithOffset(pointsList[0], 1 * (1 + o.roughness * .2), o);
		const o2 = o.disableMultiStroke ? [] : _curveWithOffset(pointsList[0], 1.5 * (1 + o.roughness * .22), cloneOptionsAlterSeed(o));
		for (let i = 1; i < pointsList.length; i++) {
			const points = pointsList[i];
			if (points.length) {
				const underlay = _curveWithOffset(points, 1 * (1 + o.roughness * .2), o);
				const overlay = o.disableMultiStroke ? [] : _curveWithOffset(points, 1.5 * (1 + o.roughness * .22), cloneOptionsAlterSeed(o));
				for (const item of underlay) if (item.op !== "move") o1.push(item);
				for (const item of overlay) if (item.op !== "move") o2.push(item);
			}
		}
		return {
			type: "path",
			ops: o1.concat(o2)
		};
	}
	return {
		type: "path",
		ops: []
	};
}
function ellipse(x, y, width, height, o) {
	return ellipseWithParams(x, y, o, generateEllipseParams(width, height, o)).opset;
}
function generateEllipseParams(width, height, o) {
	const psq = Math.sqrt(Math.PI * 2 * Math.sqrt((Math.pow(width / 2, 2) + Math.pow(height / 2, 2)) / 2));
	const stepCount = Math.ceil(Math.max(o.curveStepCount, o.curveStepCount / Math.sqrt(200) * psq));
	const increment = Math.PI * 2 / stepCount;
	let rx = Math.abs(width / 2);
	let ry = Math.abs(height / 2);
	const curveFitRandomness = 1 - o.curveFitting;
	rx += _offsetOpt(rx * curveFitRandomness, o);
	ry += _offsetOpt(ry * curveFitRandomness, o);
	return {
		increment,
		rx,
		ry
	};
}
function ellipseWithParams(x, y, o, ellipseParams) {
	const [ap1, cp1] = _computeEllipsePoints(ellipseParams.increment, x, y, ellipseParams.rx, ellipseParams.ry, 1, ellipseParams.increment * _offset(.1, _offset(.4, 1, o), o), o);
	let o1 = _curve(ap1, null, o);
	if (!o.disableMultiStroke && o.roughness !== 0) {
		const [ap2] = _computeEllipsePoints(ellipseParams.increment, x, y, ellipseParams.rx, ellipseParams.ry, 1.5, 0, o);
		const o2 = _curve(ap2, null, o);
		o1 = o1.concat(o2);
	}
	return {
		estimatedPoints: cp1,
		opset: {
			type: "path",
			ops: o1
		}
	};
}
function arc(x, y, width, height, start, stop, closed, roughClosure, o) {
	const cx = x;
	const cy = y;
	let rx = Math.abs(width / 2);
	let ry = Math.abs(height / 2);
	rx += _offsetOpt(rx * .01, o);
	ry += _offsetOpt(ry * .01, o);
	let strt = start;
	let stp = stop;
	while (strt < 0) {
		strt += Math.PI * 2;
		stp += Math.PI * 2;
	}
	if (stp - strt > Math.PI * 2) {
		strt = 0;
		stp = Math.PI * 2;
	}
	const ellipseInc = Math.PI * 2 / o.curveStepCount;
	const arcInc = Math.min(ellipseInc / 2, (stp - strt) / 2);
	const ops = _arc(arcInc, cx, cy, rx, ry, strt, stp, 1, o);
	if (!o.disableMultiStroke) {
		const o2 = _arc(arcInc, cx, cy, rx, ry, strt, stp, 1.5, o);
		ops.push(...o2);
	}
	if (closed) if (roughClosure) ops.push(..._doubleLine(cx, cy, cx + rx * Math.cos(strt), cy + ry * Math.sin(strt), o), ..._doubleLine(cx, cy, cx + rx * Math.cos(stp), cy + ry * Math.sin(stp), o));
	else ops.push({
		op: "lineTo",
		data: [cx, cy]
	}, {
		op: "lineTo",
		data: [cx + rx * Math.cos(strt), cy + ry * Math.sin(strt)]
	});
	return {
		type: "path",
		ops
	};
}
function svgPath(path, o) {
	const segments = normalize(absolutize(parsePath(path)));
	const ops = [];
	let first = [0, 0];
	let current = [0, 0];
	for (const { key, data } of segments) switch (key) {
		case "M":
			current = [data[0], data[1]];
			first = [data[0], data[1]];
			break;
		case "L":
			ops.push(..._doubleLine(current[0], current[1], data[0], data[1], o));
			current = [data[0], data[1]];
			break;
		case "C": {
			const [x1, y1, x2, y2, x, y] = data;
			ops.push(..._bezierTo(x1, y1, x2, y2, x, y, current, o));
			current = [x, y];
			break;
		}
		case "Z":
			ops.push(..._doubleLine(current[0], current[1], first[0], first[1], o));
			current = [first[0], first[1]];
			break;
	}
	return {
		type: "path",
		ops
	};
}
function solidFillPolygon(polygonList, o) {
	const ops = [];
	for (const points of polygonList) if (points.length) {
		const offset = o.maxRandomnessOffset || 0;
		const len = points.length;
		if (len > 2) {
			ops.push({
				op: "move",
				data: [points[0][0] + _offsetOpt(offset, o), points[0][1] + _offsetOpt(offset, o)]
			});
			for (let i = 1; i < len; i++) ops.push({
				op: "lineTo",
				data: [points[i][0] + _offsetOpt(offset, o), points[i][1] + _offsetOpt(offset, o)]
			});
		}
	}
	return {
		type: "fillPath",
		ops
	};
}
function patternFillPolygons(polygonList, o) {
	return getFiller(o, helper).fillPolygons(polygonList, o);
}
function patternFillArc(x, y, width, height, start, stop, o) {
	const cx = x;
	const cy = y;
	let rx = Math.abs(width / 2);
	let ry = Math.abs(height / 2);
	rx += _offsetOpt(rx * .01, o);
	ry += _offsetOpt(ry * .01, o);
	let strt = start;
	let stp = stop;
	while (strt < 0) {
		strt += Math.PI * 2;
		stp += Math.PI * 2;
	}
	if (stp - strt > Math.PI * 2) {
		strt = 0;
		stp = Math.PI * 2;
	}
	const increment = (stp - strt) / o.curveStepCount;
	const points = [];
	for (let angle = strt; angle <= stp; angle = angle + increment) points.push([cx + rx * Math.cos(angle), cy + ry * Math.sin(angle)]);
	points.push([cx + rx * Math.cos(stp), cy + ry * Math.sin(stp)]);
	points.push([cx, cy]);
	return patternFillPolygons([points], o);
}
function randOffset(x, o) {
	return _offsetOpt(x, o);
}
function randOffsetWithRange(min, max, o) {
	return _offset(min, max, o);
}
function doubleLineFillOps(x1, y1, x2, y2, o) {
	return _doubleLine(x1, y1, x2, y2, o, true);
}
function cloneOptionsAlterSeed(ops) {
	const result = Object.assign({}, ops);
	result.randomizer = void 0;
	if (ops.seed) result.seed = ops.seed + 1;
	return result;
}
function random(ops) {
	if (!ops.randomizer) ops.randomizer = new Random(ops.seed || 0);
	return ops.randomizer.next();
}
function _offset(min, max, ops, roughnessGain = 1) {
	return ops.roughness * roughnessGain * (random(ops) * (max - min) + min);
}
function _offsetOpt(x, ops, roughnessGain = 1) {
	return _offset(-x, x, ops, roughnessGain);
}
function _doubleLine(x1, y1, x2, y2, o, filling = false) {
	const singleStroke = filling ? o.disableMultiStrokeFill : o.disableMultiStroke;
	const o1 = _line(x1, y1, x2, y2, o, true, false);
	if (singleStroke) return o1;
	const o2 = _line(x1, y1, x2, y2, o, true, true);
	return o1.concat(o2);
}
function _line(x1, y1, x2, y2, o, move, overlay) {
	const lengthSq = Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
	const length = Math.sqrt(lengthSq);
	let roughnessGain = 1;
	if (length < 200) roughnessGain = 1;
	else if (length > 500) roughnessGain = .4;
	else roughnessGain = -.0016668 * length + 1.233334;
	let offset = o.maxRandomnessOffset || 0;
	if (offset * offset * 100 > lengthSq) offset = length / 10;
	const halfOffset = offset / 2;
	const divergePoint = .2 + random(o) * .2;
	let midDispX = o.bowing * o.maxRandomnessOffset * (y2 - y1) / 200;
	let midDispY = o.bowing * o.maxRandomnessOffset * (x1 - x2) / 200;
	midDispX = _offsetOpt(midDispX, o, roughnessGain);
	midDispY = _offsetOpt(midDispY, o, roughnessGain);
	const ops = [];
	const randomHalf = () => _offsetOpt(halfOffset, o, roughnessGain);
	const randomFull = () => _offsetOpt(offset, o, roughnessGain);
	const preserveVertices = o.preserveVertices;
	if (move) if (overlay) ops.push({
		op: "move",
		data: [x1 + (preserveVertices ? 0 : randomHalf()), y1 + (preserveVertices ? 0 : randomHalf())]
	});
	else ops.push({
		op: "move",
		data: [x1 + (preserveVertices ? 0 : _offsetOpt(offset, o, roughnessGain)), y1 + (preserveVertices ? 0 : _offsetOpt(offset, o, roughnessGain))]
	});
	if (overlay) ops.push({
		op: "bcurveTo",
		data: [
			midDispX + x1 + (x2 - x1) * divergePoint + randomHalf(),
			midDispY + y1 + (y2 - y1) * divergePoint + randomHalf(),
			midDispX + x1 + 2 * (x2 - x1) * divergePoint + randomHalf(),
			midDispY + y1 + 2 * (y2 - y1) * divergePoint + randomHalf(),
			x2 + (preserveVertices ? 0 : randomHalf()),
			y2 + (preserveVertices ? 0 : randomHalf())
		]
	});
	else ops.push({
		op: "bcurveTo",
		data: [
			midDispX + x1 + (x2 - x1) * divergePoint + randomFull(),
			midDispY + y1 + (y2 - y1) * divergePoint + randomFull(),
			midDispX + x1 + 2 * (x2 - x1) * divergePoint + randomFull(),
			midDispY + y1 + 2 * (y2 - y1) * divergePoint + randomFull(),
			x2 + (preserveVertices ? 0 : randomFull()),
			y2 + (preserveVertices ? 0 : randomFull())
		]
	});
	return ops;
}
function _curveWithOffset(points, offset, o) {
	if (!points.length) return [];
	const ps = [];
	ps.push([points[0][0] + _offsetOpt(offset, o), points[0][1] + _offsetOpt(offset, o)]);
	ps.push([points[0][0] + _offsetOpt(offset, o), points[0][1] + _offsetOpt(offset, o)]);
	for (let i = 1; i < points.length; i++) {
		ps.push([points[i][0] + _offsetOpt(offset, o), points[i][1] + _offsetOpt(offset, o)]);
		if (i === points.length - 1) ps.push([points[i][0] + _offsetOpt(offset, o), points[i][1] + _offsetOpt(offset, o)]);
	}
	return _curve(ps, null, o);
}
function _curve(points, closePoint, o) {
	const len = points.length;
	const ops = [];
	if (len > 3) {
		const b = [];
		const s = 1 - o.curveTightness;
		ops.push({
			op: "move",
			data: [points[1][0], points[1][1]]
		});
		for (let i = 1; i + 2 < len; i++) {
			const cachedVertArray = points[i];
			b[0] = [cachedVertArray[0], cachedVertArray[1]];
			b[1] = [cachedVertArray[0] + (s * points[i + 1][0] - s * points[i - 1][0]) / 6, cachedVertArray[1] + (s * points[i + 1][1] - s * points[i - 1][1]) / 6];
			b[2] = [points[i + 1][0] + (s * points[i][0] - s * points[i + 2][0]) / 6, points[i + 1][1] + (s * points[i][1] - s * points[i + 2][1]) / 6];
			b[3] = [points[i + 1][0], points[i + 1][1]];
			ops.push({
				op: "bcurveTo",
				data: [
					b[1][0],
					b[1][1],
					b[2][0],
					b[2][1],
					b[3][0],
					b[3][1]
				]
			});
		}
		if (closePoint && closePoint.length === 2) {
			const ro = o.maxRandomnessOffset;
			ops.push({
				op: "lineTo",
				data: [closePoint[0] + _offsetOpt(ro, o), closePoint[1] + _offsetOpt(ro, o)]
			});
		}
	} else if (len === 3) {
		ops.push({
			op: "move",
			data: [points[1][0], points[1][1]]
		});
		ops.push({
			op: "bcurveTo",
			data: [
				points[1][0],
				points[1][1],
				points[2][0],
				points[2][1],
				points[2][0],
				points[2][1]
			]
		});
	} else if (len === 2) ops.push(..._line(points[0][0], points[0][1], points[1][0], points[1][1], o, true, true));
	return ops;
}
function _computeEllipsePoints(increment, cx, cy, rx, ry, offset, overlap, o) {
	const coreOnly = o.roughness === 0;
	const corePoints = [];
	const allPoints = [];
	if (coreOnly) {
		increment = increment / 4;
		allPoints.push([cx + rx * Math.cos(-increment), cy + ry * Math.sin(-increment)]);
		for (let angle = 0; angle <= Math.PI * 2; angle = angle + increment) {
			const p = [cx + rx * Math.cos(angle), cy + ry * Math.sin(angle)];
			corePoints.push(p);
			allPoints.push(p);
		}
		allPoints.push([cx + rx * Math.cos(0), cy + ry * Math.sin(0)]);
		allPoints.push([cx + rx * Math.cos(increment), cy + ry * Math.sin(increment)]);
	} else {
		const radOffset = _offsetOpt(.5, o) - Math.PI / 2;
		allPoints.push([_offsetOpt(offset, o) + cx + .9 * rx * Math.cos(radOffset - increment), _offsetOpt(offset, o) + cy + .9 * ry * Math.sin(radOffset - increment)]);
		const endAngle = Math.PI * 2 + radOffset - .01;
		for (let angle = radOffset; angle < endAngle; angle = angle + increment) {
			const p = [_offsetOpt(offset, o) + cx + rx * Math.cos(angle), _offsetOpt(offset, o) + cy + ry * Math.sin(angle)];
			corePoints.push(p);
			allPoints.push(p);
		}
		allPoints.push([_offsetOpt(offset, o) + cx + rx * Math.cos(radOffset + Math.PI * 2 + overlap * .5), _offsetOpt(offset, o) + cy + ry * Math.sin(radOffset + Math.PI * 2 + overlap * .5)]);
		allPoints.push([_offsetOpt(offset, o) + cx + .98 * rx * Math.cos(radOffset + overlap), _offsetOpt(offset, o) + cy + .98 * ry * Math.sin(radOffset + overlap)]);
		allPoints.push([_offsetOpt(offset, o) + cx + .9 * rx * Math.cos(radOffset + overlap * .5), _offsetOpt(offset, o) + cy + .9 * ry * Math.sin(radOffset + overlap * .5)]);
	}
	return [allPoints, corePoints];
}
function _arc(increment, cx, cy, rx, ry, strt, stp, offset, o) {
	const radOffset = strt + _offsetOpt(.1, o);
	const points = [];
	points.push([_offsetOpt(offset, o) + cx + .9 * rx * Math.cos(radOffset - increment), _offsetOpt(offset, o) + cy + .9 * ry * Math.sin(radOffset - increment)]);
	for (let angle = radOffset; angle <= stp; angle = angle + increment) points.push([_offsetOpt(offset, o) + cx + rx * Math.cos(angle), _offsetOpt(offset, o) + cy + ry * Math.sin(angle)]);
	points.push([cx + rx * Math.cos(stp), cy + ry * Math.sin(stp)]);
	points.push([cx + rx * Math.cos(stp), cy + ry * Math.sin(stp)]);
	return _curve(points, null, o);
}
function _bezierTo(x1, y1, x2, y2, x, y, current, o) {
	const ops = [];
	const ros = [o.maxRandomnessOffset || 1, (o.maxRandomnessOffset || 1) + .3];
	let f = [0, 0];
	const iterations = o.disableMultiStroke ? 1 : 2;
	const preserveVertices = o.preserveVertices;
	for (let i = 0; i < iterations; i++) {
		if (i === 0) ops.push({
			op: "move",
			data: [current[0], current[1]]
		});
		else ops.push({
			op: "move",
			data: [current[0] + (preserveVertices ? 0 : _offsetOpt(ros[0], o)), current[1] + (preserveVertices ? 0 : _offsetOpt(ros[0], o))]
		});
		f = preserveVertices ? [x, y] : [x + _offsetOpt(ros[i], o), y + _offsetOpt(ros[i], o)];
		ops.push({
			op: "bcurveTo",
			data: [
				x1 + _offsetOpt(ros[i], o),
				y1 + _offsetOpt(ros[i], o),
				x2 + _offsetOpt(ros[i], o),
				y2 + _offsetOpt(ros[i], o),
				f[0],
				f[1]
			]
		});
	}
	return ops;
}
//#endregion
//#region node_modules/points-on-curve/lib/curve-to-bezier.js
function clone(p) {
	return [...p];
}
function curveToBezier(pointsIn, curveTightness = 0) {
	const len = pointsIn.length;
	if (len < 3) throw new Error("A curve must have at least three points.");
	const out = [];
	if (len === 3) out.push(clone(pointsIn[0]), clone(pointsIn[1]), clone(pointsIn[2]), clone(pointsIn[2]));
	else {
		const points = [];
		points.push(pointsIn[0], pointsIn[0]);
		for (let i = 1; i < pointsIn.length; i++) {
			points.push(pointsIn[i]);
			if (i === pointsIn.length - 1) points.push(pointsIn[i]);
		}
		const b = [];
		const s = 1 - curveTightness;
		out.push(clone(points[0]));
		for (let i = 1; i + 2 < points.length; i++) {
			const cachedVertArray = points[i];
			b[0] = [cachedVertArray[0], cachedVertArray[1]];
			b[1] = [cachedVertArray[0] + (s * points[i + 1][0] - s * points[i - 1][0]) / 6, cachedVertArray[1] + (s * points[i + 1][1] - s * points[i - 1][1]) / 6];
			b[2] = [points[i + 1][0] + (s * points[i][0] - s * points[i + 2][0]) / 6, points[i + 1][1] + (s * points[i][1] - s * points[i + 2][1]) / 6];
			b[3] = [points[i + 1][0], points[i + 1][1]];
			out.push(b[1], b[2], b[3]);
		}
	}
	return out;
}
//#endregion
//#region node_modules/points-on-curve/lib/index.js
function distance(p1, p2) {
	return Math.sqrt(distanceSq(p1, p2));
}
function distanceSq(p1, p2) {
	return Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2);
}
function distanceToSegmentSq(p, v, w) {
	const l2 = distanceSq(v, w);
	if (l2 === 0) return distanceSq(p, v);
	let t = ((p[0] - v[0]) * (w[0] - v[0]) + (p[1] - v[1]) * (w[1] - v[1])) / l2;
	t = Math.max(0, Math.min(1, t));
	return distanceSq(p, lerp(v, w, t));
}
function lerp(a, b, t) {
	return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
}
function flatness(points, offset) {
	const p1 = points[offset + 0];
	const p2 = points[offset + 1];
	const p3 = points[offset + 2];
	const p4 = points[offset + 3];
	let ux = 3 * p2[0] - 2 * p1[0] - p4[0];
	ux *= ux;
	let uy = 3 * p2[1] - 2 * p1[1] - p4[1];
	uy *= uy;
	let vx = 3 * p3[0] - 2 * p4[0] - p1[0];
	vx *= vx;
	let vy = 3 * p3[1] - 2 * p4[1] - p1[1];
	vy *= vy;
	if (ux < vx) ux = vx;
	if (uy < vy) uy = vy;
	return ux + uy;
}
function getPointsOnBezierCurveWithSplitting(points, offset, tolerance, newPoints) {
	const outPoints = newPoints || [];
	if (flatness(points, offset) < tolerance) {
		const p0 = points[offset + 0];
		if (outPoints.length) {
			if (distance(outPoints[outPoints.length - 1], p0) > 1) outPoints.push(p0);
		} else outPoints.push(p0);
		outPoints.push(points[offset + 3]);
	} else {
		const t = .5;
		const p1 = points[offset + 0];
		const p2 = points[offset + 1];
		const p3 = points[offset + 2];
		const p4 = points[offset + 3];
		const q1 = lerp(p1, p2, t);
		const q2 = lerp(p2, p3, t);
		const q3 = lerp(p3, p4, t);
		const r1 = lerp(q1, q2, t);
		const r2 = lerp(q2, q3, t);
		const red = lerp(r1, r2, t);
		getPointsOnBezierCurveWithSplitting([
			p1,
			q1,
			r1,
			red
		], 0, tolerance, outPoints);
		getPointsOnBezierCurveWithSplitting([
			red,
			r2,
			q3,
			p4
		], 0, tolerance, outPoints);
	}
	return outPoints;
}
function simplify(points, distance) {
	return simplifyPoints(points, 0, points.length, distance);
}
function simplifyPoints(points, start, end, epsilon, newPoints) {
	const outPoints = newPoints || [];
	const s = points[start];
	const e = points[end - 1];
	let maxDistSq = 0;
	let maxNdx = 1;
	for (let i = start + 1; i < end - 1; ++i) {
		const distSq = distanceToSegmentSq(points[i], s, e);
		if (distSq > maxDistSq) {
			maxDistSq = distSq;
			maxNdx = i;
		}
	}
	if (Math.sqrt(maxDistSq) > epsilon) {
		simplifyPoints(points, start, maxNdx + 1, epsilon, outPoints);
		simplifyPoints(points, maxNdx, end, epsilon, outPoints);
	} else {
		if (!outPoints.length) outPoints.push(s);
		outPoints.push(e);
	}
	return outPoints;
}
function pointsOnBezierCurves(points, tolerance = .15, distance) {
	const newPoints = [];
	const numSegments = (points.length - 1) / 3;
	for (let i = 0; i < numSegments; i++) getPointsOnBezierCurveWithSplitting(points, i * 3, tolerance, newPoints);
	if (distance && distance > 0) return simplifyPoints(newPoints, 0, newPoints.length, distance);
	return newPoints;
}
//#endregion
//#region node_modules/points-on-path/lib/index.js
function pointsOnPath(path, tolerance, distance) {
	const normalized = normalize(absolutize(parsePath(path)));
	const sets = [];
	let currentPoints = [];
	let start = [0, 0];
	let pendingCurve = [];
	const appendPendingCurve = () => {
		if (pendingCurve.length >= 4) currentPoints.push(...pointsOnBezierCurves(pendingCurve, tolerance));
		pendingCurve = [];
	};
	const appendPendingPoints = () => {
		appendPendingCurve();
		if (currentPoints.length) {
			sets.push(currentPoints);
			currentPoints = [];
		}
	};
	for (const { key, data } of normalized) switch (key) {
		case "M":
			appendPendingPoints();
			start = [data[0], data[1]];
			currentPoints.push(start);
			break;
		case "L":
			appendPendingCurve();
			currentPoints.push([data[0], data[1]]);
			break;
		case "C":
			if (!pendingCurve.length) {
				const lastPoint = currentPoints.length ? currentPoints[currentPoints.length - 1] : start;
				pendingCurve.push([lastPoint[0], lastPoint[1]]);
			}
			pendingCurve.push([data[0], data[1]]);
			pendingCurve.push([data[2], data[3]]);
			pendingCurve.push([data[4], data[5]]);
			break;
		case "Z":
			appendPendingCurve();
			currentPoints.push([start[0], start[1]]);
			break;
	}
	appendPendingPoints();
	if (!distance) return sets;
	const out = [];
	for (const set of sets) {
		const simplifiedSet = simplify(set, distance);
		if (simplifiedSet.length) out.push(simplifiedSet);
	}
	return out;
}
//#endregion
//#region node_modules/roughjs/bin/generator.js
var NOS = "none";
var RoughGenerator = class {
	constructor(config) {
		this.defaultOptions = {
			maxRandomnessOffset: 2,
			roughness: 1,
			bowing: 1,
			stroke: "#000",
			strokeWidth: 1,
			curveTightness: 0,
			curveFitting: .95,
			curveStepCount: 9,
			fillStyle: "hachure",
			fillWeight: -1,
			hachureAngle: -41,
			hachureGap: -1,
			dashOffset: -1,
			dashGap: -1,
			zigzagOffset: -1,
			seed: 0,
			disableMultiStroke: false,
			disableMultiStrokeFill: false,
			preserveVertices: false,
			fillShapeRoughnessGain: .8
		};
		this.config = config || {};
		if (this.config.options) this.defaultOptions = this._o(this.config.options);
	}
	static newSeed() {
		return randomSeed();
	}
	_o(options) {
		return options ? Object.assign({}, this.defaultOptions, options) : this.defaultOptions;
	}
	_d(shape, sets, options) {
		return {
			shape,
			sets: sets || [],
			options: options || this.defaultOptions
		};
	}
	line(x1, y1, x2, y2, options) {
		const o = this._o(options);
		return this._d("line", [line(x1, y1, x2, y2, o)], o);
	}
	rectangle(x, y, width, height, options) {
		const o = this._o(options);
		const paths = [];
		const outline = rectangle(x, y, width, height, o);
		if (o.fill) {
			const points = [
				[x, y],
				[x + width, y],
				[x + width, y + height],
				[x, y + height]
			];
			if (o.fillStyle === "solid") paths.push(solidFillPolygon([points], o));
			else paths.push(patternFillPolygons([points], o));
		}
		if (o.stroke !== NOS) paths.push(outline);
		return this._d("rectangle", paths, o);
	}
	ellipse(x, y, width, height, options) {
		const o = this._o(options);
		const paths = [];
		const ellipseParams = generateEllipseParams(width, height, o);
		const ellipseResponse = ellipseWithParams(x, y, o, ellipseParams);
		if (o.fill) if (o.fillStyle === "solid") {
			const shape = ellipseWithParams(x, y, o, ellipseParams).opset;
			shape.type = "fillPath";
			paths.push(shape);
		} else paths.push(patternFillPolygons([ellipseResponse.estimatedPoints], o));
		if (o.stroke !== NOS) paths.push(ellipseResponse.opset);
		return this._d("ellipse", paths, o);
	}
	circle(x, y, diameter, options) {
		const ret = this.ellipse(x, y, diameter, diameter, options);
		ret.shape = "circle";
		return ret;
	}
	linearPath(points, options) {
		const o = this._o(options);
		return this._d("linearPath", [linearPath(points, false, o)], o);
	}
	arc(x, y, width, height, start, stop, closed = false, options) {
		const o = this._o(options);
		const paths = [];
		const outline = arc(x, y, width, height, start, stop, closed, true, o);
		if (closed && o.fill) if (o.fillStyle === "solid") {
			const fillOptions = Object.assign({}, o);
			fillOptions.disableMultiStroke = true;
			const shape = arc(x, y, width, height, start, stop, true, false, fillOptions);
			shape.type = "fillPath";
			paths.push(shape);
		} else paths.push(patternFillArc(x, y, width, height, start, stop, o));
		if (o.stroke !== NOS) paths.push(outline);
		return this._d("arc", paths, o);
	}
	curve(points, options) {
		const o = this._o(options);
		const paths = [];
		const outline = curve(points, o);
		if (o.fill && o.fill !== NOS) if (o.fillStyle === "solid") {
			const fillShape = curve(points, Object.assign(Object.assign({}, o), {
				disableMultiStroke: true,
				roughness: o.roughness ? o.roughness + o.fillShapeRoughnessGain : 0
			}));
			paths.push({
				type: "fillPath",
				ops: this._mergedShape(fillShape.ops)
			});
		} else {
			const polyPoints = [];
			const inputPoints = points;
			if (inputPoints.length) {
				const pointsList = typeof inputPoints[0][0] === "number" ? [inputPoints] : inputPoints;
				for (const points of pointsList) if (points.length < 3) polyPoints.push(...points);
				else if (points.length === 3) polyPoints.push(...pointsOnBezierCurves(curveToBezier([
					points[0],
					points[0],
					points[1],
					points[2]
				]), 10, (1 + o.roughness) / 2));
				else polyPoints.push(...pointsOnBezierCurves(curveToBezier(points), 10, (1 + o.roughness) / 2));
			}
			if (polyPoints.length) paths.push(patternFillPolygons([polyPoints], o));
		}
		if (o.stroke !== NOS) paths.push(outline);
		return this._d("curve", paths, o);
	}
	polygon(points, options) {
		const o = this._o(options);
		const paths = [];
		const outline = linearPath(points, true, o);
		if (o.fill) if (o.fillStyle === "solid") paths.push(solidFillPolygon([points], o));
		else paths.push(patternFillPolygons([points], o));
		if (o.stroke !== NOS) paths.push(outline);
		return this._d("polygon", paths, o);
	}
	path(d, options) {
		const o = this._o(options);
		const paths = [];
		if (!d) return this._d("path", paths, o);
		d = (d || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
		const hasFill = o.fill && o.fill !== "transparent" && o.fill !== NOS;
		const hasStroke = o.stroke !== NOS;
		const simplified = !!(o.simplification && o.simplification < 1);
		const distance = simplified ? 4 - 4 * (o.simplification || 1) : (1 + o.roughness) / 2;
		const sets = pointsOnPath(d, 1, distance);
		const shape = svgPath(d, o);
		if (hasFill) if (o.fillStyle === "solid") if (sets.length === 1) {
			const fillShape = svgPath(d, Object.assign(Object.assign({}, o), {
				disableMultiStroke: true,
				roughness: o.roughness ? o.roughness + o.fillShapeRoughnessGain : 0
			}));
			paths.push({
				type: "fillPath",
				ops: this._mergedShape(fillShape.ops)
			});
		} else paths.push(solidFillPolygon(sets, o));
		else paths.push(patternFillPolygons(sets, o));
		if (hasStroke) if (simplified) sets.forEach((set) => {
			paths.push(linearPath(set, false, o));
		});
		else paths.push(shape);
		return this._d("path", paths, o);
	}
	opsToPath(drawing, fixedDecimals) {
		let path = "";
		for (const item of drawing.ops) {
			const data = typeof fixedDecimals === "number" && fixedDecimals >= 0 ? item.data.map((d) => +d.toFixed(fixedDecimals)) : item.data;
			switch (item.op) {
				case "move":
					path += `M${data[0]} ${data[1]} `;
					break;
				case "bcurveTo":
					path += `C${data[0]} ${data[1]}, ${data[2]} ${data[3]}, ${data[4]} ${data[5]} `;
					break;
				case "lineTo":
					path += `L${data[0]} ${data[1]} `;
					break;
			}
		}
		return path.trim();
	}
	toPaths(drawable) {
		const sets = drawable.sets || [];
		const o = drawable.options || this.defaultOptions;
		const paths = [];
		for (const drawing of sets) {
			let path = null;
			switch (drawing.type) {
				case "path":
					path = {
						d: this.opsToPath(drawing),
						stroke: o.stroke,
						strokeWidth: o.strokeWidth,
						fill: NOS
					};
					break;
				case "fillPath":
					path = {
						d: this.opsToPath(drawing),
						stroke: NOS,
						strokeWidth: 0,
						fill: o.fill || NOS
					};
					break;
				case "fillSketch":
					path = this.fillSketch(drawing, o);
					break;
			}
			if (path) paths.push(path);
		}
		return paths;
	}
	fillSketch(drawing, o) {
		let fweight = o.fillWeight;
		if (fweight < 0) fweight = o.strokeWidth / 2;
		return {
			d: this.opsToPath(drawing),
			stroke: o.fill || NOS,
			strokeWidth: fweight,
			fill: NOS
		};
	}
	_mergedShape(input) {
		return input.filter((d, i) => {
			if (i === 0) return true;
			if (d.op === "move") return false;
			return true;
		});
	}
};
//#endregion
//#region node_modules/@slidev/rough-notation/dist/index.mjs
var SVG_NS = "http://www.w3.org/2000/svg";
var DEFAULT_ANIMATION_DURATION = 800;
var defaultOptions = null;
function getDefaultOptions() {
	if (!defaultOptions) defaultOptions = new RoughGenerator().defaultOptions;
	return defaultOptions;
}
function getOptions(type, seed, overrides) {
	return {
		...getDefaultOptions(),
		maxRandomnessOffset: 2,
		roughness: type === "highlight" ? 3 : 1.5,
		bowing: 1,
		stroke: "#000",
		strokeWidth: 1.5,
		curveTightness: 0,
		curveFitting: .95,
		curveStepCount: 9,
		fillStyle: "hachure",
		fillWeight: -1,
		hachureAngle: -41,
		hachureGap: -1,
		dashOffset: -1,
		dashGap: -1,
		zigzagOffset: -1,
		disableMultiStroke: type !== "double",
		disableMultiStrokeFill: false,
		seed,
		...overrides
	};
}
function parsePadding(config) {
	const p = config.padding;
	if (p || p === 0) {
		if (typeof p === "number") return [
			p,
			p,
			p,
			p
		];
		else if (Array.isArray(p)) {
			const pa = p;
			if (pa.length) switch (pa.length) {
				case 4: return [...pa];
				case 1: return [
					pa[0],
					pa[0],
					pa[0],
					pa[0]
				];
				case 2: return [...pa, ...pa];
				case 3: return [...pa, pa[1]];
				default: return [
					pa[0],
					pa[1],
					pa[2],
					pa[3]
				];
			}
		}
	}
	return [
		5,
		5,
		5,
		5
	];
}
function renderAnnotation(svg, rect, config, animationGroupDelay, animationDuration, seed) {
	const opList = [];
	let strokeWidth = config.strokeWidth || 2;
	const padding = parsePadding(config);
	const animate = config.animate === void 0 ? true : !!config.animate;
	const iterations = config.iterations || 2;
	const rtl = config.rtl ? 1 : 0;
	const o = getOptions("single", seed, config);
	switch (config.type) {
		case "underline": {
			const y = rect.y + rect.h + padding[2];
			for (let i = rtl; i < iterations + rtl; i++) if (i % 2) opList.push(line(rect.x + rect.w, y, rect.x, y, o));
			else opList.push(line(rect.x, y, rect.x + rect.w, y, o));
			break;
		}
		case "strike-through": {
			const y = rect.y + rect.h / 2;
			for (let i = rtl; i < iterations + rtl; i++) if (i % 2) opList.push(line(rect.x + rect.w, y, rect.x, y, o));
			else opList.push(line(rect.x, y, rect.x + rect.w, y, o));
			break;
		}
		case "box": {
			const x = rect.x - padding[3];
			const y = rect.y - padding[0];
			const width = rect.w + (padding[1] + padding[3]);
			const height = rect.h + (padding[0] + padding[2]);
			for (let i = 0; i < iterations; i++) opList.push(rectangle(x, y, width, height, o));
			break;
		}
		case "bracket": {
			const brackets = Array.isArray(config.brackets) ? config.brackets : config.brackets ? [config.brackets] : ["right"];
			const lx = rect.x - padding[3] * 2;
			const rx = rect.x + rect.w + padding[1] * 2;
			const ty = rect.y - padding[0] * 2;
			const by = rect.y + rect.h + padding[2] * 2;
			for (const br of brackets) {
				let points;
				switch (br) {
					case "bottom":
						points = [
							[lx, rect.y + rect.h],
							[lx, by],
							[rx, by],
							[rx, rect.y + rect.h]
						];
						break;
					case "top":
						points = [
							[lx, rect.y],
							[lx, ty],
							[rx, ty],
							[rx, rect.y]
						];
						break;
					case "left":
						points = [
							[rect.x, ty],
							[lx, ty],
							[lx, by],
							[rect.x, by]
						];
						break;
					case "right":
						points = [
							[rect.x + rect.w, ty],
							[rx, ty],
							[rx, by],
							[rect.x + rect.w, by]
						];
						break;
				}
				if (points) opList.push(linearPath(points, false, o));
			}
			break;
		}
		case "crossed-off": {
			const x = rect.x;
			const y = rect.y;
			const x2 = x + rect.w;
			const y2 = y + rect.h;
			for (let i = rtl; i < iterations + rtl; i++) if (i % 2) opList.push(line(x2, y2, x, y, o));
			else opList.push(line(x, y, x2, y2, o));
			for (let i = rtl; i < iterations + rtl; i++) if (i % 2) opList.push(line(x, y2, x2, y, o));
			else opList.push(line(x2, y, x, y2, o));
			break;
		}
		case "circle": {
			const doubleO = getOptions("double", seed, config);
			const width = rect.w + (padding[1] + padding[3]);
			const height = rect.h + (padding[0] + padding[2]);
			const x = rect.x - padding[3] + width / 2;
			const y = rect.y - padding[0] + height / 2;
			const fullItr = Math.floor(iterations / 2);
			const singleItr = iterations - fullItr * 2;
			for (let i = 0; i < fullItr; i++) opList.push(ellipse(x, y, width, height, doubleO));
			for (let i = 0; i < singleItr; i++) opList.push(ellipse(x, y, width, height, o));
			break;
		}
		case "highlight": {
			const o2 = getOptions("highlight", seed, config);
			strokeWidth = rect.h * .95;
			const y = rect.y + rect.h / 2;
			for (let i = rtl; i < iterations + rtl; i++) if (i % 2) opList.push(line(rect.x + rect.w, y, rect.x, y, o2));
			else opList.push(line(rect.x, y, rect.x + rect.w, y, o2));
			break;
		}
	}
	if (opList.length) {
		const pathStrings = opsToPath(opList);
		const lengths = [];
		const pathElements = [];
		let totalLength = 0;
		const setAttr = (p, an, av) => p.setAttribute(an, av);
		for (const d of pathStrings) {
			const path = document.createElementNS(SVG_NS, "path");
			setAttr(path, "d", d);
			setAttr(path, "fill", "none");
			setAttr(path, "stroke", config.color || "currentColor");
			setAttr(path, "stroke-width", `${strokeWidth}`);
			if (config.opacity !== void 0) setAttr(path, "style", `opacity:${config.opacity}`);
			if (animate) {
				const length = path.getTotalLength();
				lengths.push(length);
				totalLength += length;
			}
			svg.appendChild(path);
			pathElements.push(path);
		}
		if (animate) {
			let durationOffset = 0;
			for (let i = 0; i < pathElements.length; i++) {
				const path = pathElements[i];
				const length = lengths[i];
				const duration = totalLength ? animationDuration * (length / totalLength) : 0;
				const delay = animationGroupDelay + durationOffset;
				const style = path.style;
				style.strokeDashoffset = `${length}`;
				style.strokeDasharray = `${length}`;
				style.animation = `rough-notation-dash ${duration}ms ease-out ${delay}ms forwards`;
				durationOffset += duration;
			}
			return sleep(animationDuration + animationGroupDelay);
		}
	}
	return sleep(0);
}
function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
function opsToPath(opList) {
	const paths = [];
	for (const drawing of opList) {
		let path = "";
		for (const item of drawing.ops) {
			const data = item.data;
			switch (item.op) {
				case "move":
					if (path.trim()) paths.push(path.trim());
					path = `M${data[0]} ${data[1]} `;
					break;
				case "bcurveTo":
					path += `C${data[0]} ${data[1]}, ${data[2]} ${data[3]}, ${data[4]} ${data[5]} `;
					break;
				case "lineTo":
					path += `L${data[0]} ${data[1]} `;
					break;
			}
		}
		if (path.trim()) paths.push(path.trim());
	}
	return paths;
}
function ensureKeyframes() {
	if (!window.__rno_kf_s) {
		const style = window.__rno_kf_s = document.createElement("style");
		style.textContent = `@keyframes rough-notation-dash { to { stroke-dashoffset: 0; } }`;
		document.head.appendChild(style);
	}
}
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
	enumerable: true,
	configurable: true,
	writable: true,
	value
}) : obj[key] = value;
var __publicField = (obj, key, value) => {
	__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
	return value;
};
var RoughAnnotationImpl = class {
	constructor(e, config) {
		__publicField(this, "_state", "unattached");
		__publicField(this, "_config");
		__publicField(this, "_resizing", false);
		__publicField(this, "_ro");
		__publicField(this, "_seed", randomSeed());
		__publicField(this, "_e");
		__publicField(this, "_svg");
		__publicField(this, "_lastSizes", []);
		__publicField(this, "_animationDelay", 0);
		__publicField(this, "_resizeListener", () => {
			if (!this._resizing) {
				this._resizing = true;
				setTimeout(() => {
					this._resizing = false;
					if (this._state === "showing") {
						if (this.haveRectsChanged()) this.show();
					}
				}, 400);
			}
		});
		__publicField(this, "pendingRefresh");
		this._e = e;
		this._config = JSON.parse(JSON.stringify(config));
		this.attach();
	}
	getConfig(key) {
		return this._config[key];
	}
	setConfig(key, value) {
		if (this._config[key] !== value) {
			this._config[key] = value;
			this.refresh();
		}
	}
	get animate() {
		return this._config.animate;
	}
	set animate(value) {
		this._config.animate = value;
	}
	get animationDuration() {
		return this._config.animationDuration;
	}
	set animationDuration(value) {
		this._config.animationDuration = value;
	}
	get iterations() {
		return this._config.iterations;
	}
	set iterations(value) {
		this._config.iterations = value;
	}
	get color() {
		return this._config.color;
	}
	set color(value) {
		if (this._config.color !== value) {
			this._config.color = value;
			this.refresh();
		}
	}
	get class() {
		return this._config.class;
	}
	set class(value) {
		if (this._config.class !== value) {
			this._config.class = value;
			if (this._svg) this._svg.setAttribute("class", ["rough-annotation", this._config.class || ""].filter(Boolean).join(" "));
		}
	}
	get strokeWidth() {
		return this._config.strokeWidth;
	}
	set strokeWidth(value) {
		if (this._config.strokeWidth !== value) {
			this._config.strokeWidth = value;
			this.refresh();
		}
	}
	get padding() {
		return this._config.padding;
	}
	set padding(value) {
		if (this._config.padding !== value) {
			this._config.padding = value;
			this.refresh();
		}
	}
	attach() {
		if (this._state === "unattached" && this._e.parentElement) {
			ensureKeyframes();
			const svg = this._svg = document.createElementNS(SVG_NS, "svg");
			svg.setAttribute("class", ["rough-annotation", this._config.class || ""].filter(Boolean).join(" "));
			const style = svg.style;
			style.position = "absolute";
			style.top = "0";
			style.left = "0";
			style.overflow = "visible";
			style.pointerEvents = "none";
			style.width = "100px";
			style.height = "100px";
			const prepend = this._config.type === "highlight";
			this._e.insertAdjacentElement(prepend ? "beforebegin" : "afterend", svg);
			this._state = "not-showing";
			if (prepend) {
				const computedPos = window.getComputedStyle(this._e).position;
				if (!computedPos || computedPos === "static") this._e.style.position = "relative";
			}
			this.attachListeners();
		}
	}
	detachListeners() {
		window.removeEventListener("resize", this._resizeListener);
		if (this._ro) this._ro.unobserve(this._e);
	}
	attachListeners() {
		this.detachListeners();
		window.addEventListener("resize", this._resizeListener, { passive: true });
		if (!this._ro && "ResizeObserver" in window) this._ro = new window.ResizeObserver((entries) => {
			for (const entry of entries) if (entry.contentRect) this._resizeListener();
		});
		if (this._ro) this._ro.observe(this._e);
	}
	haveRectsChanged() {
		if (this._lastSizes.length) {
			const newRects = this.rects();
			if (newRects.length === this._lastSizes.length) {
				for (let i = 0; i < newRects.length; i++) if (!this.isSameRect(newRects[i], this._lastSizes[i])) return true;
			} else return true;
		}
		return false;
	}
	isSameRect(rect1, rect2) {
		const si = (a, b) => Math.round(a) === Math.round(b);
		return si(rect1.x, rect2.x) && si(rect1.y, rect2.y) && si(rect1.w, rect2.w) && si(rect1.h, rect2.h);
	}
	isShowing() {
		return this._state !== "not-showing";
	}
	refresh() {
		if (this.isShowing() && !this.pendingRefresh) this.pendingRefresh = Promise.resolve().then(() => {
			if (this.isShowing()) this.show();
			delete this.pendingRefresh;
		});
	}
	async show() {
		switch (this._state) {
			case "unattached": break;
			case "showing":
				this.hide();
				if (this._svg) await this.render(this._svg, true);
				break;
			case "not-showing":
				this.attach();
				if (this._svg) await this.render(this._svg, false);
				break;
		}
	}
	hide() {
		if (this._svg) while (this._svg.lastChild) this._svg.removeChild(this._svg.lastChild);
		this._state = "not-showing";
	}
	remove() {
		if (this._svg && this._svg.parentElement) this._svg.parentElement.removeChild(this._svg);
		this._svg = void 0;
		this._state = "unattached";
		this.detachListeners();
	}
	async render(svg, ensureNoAnimation) {
		let config = this._config;
		if (ensureNoAnimation) {
			config = JSON.parse(JSON.stringify(this._config));
			config.animate = false;
		}
		const rects = this.rects();
		let totalWidth = 0;
		rects.forEach((rect) => totalWidth += rect.w);
		const totalDuration = config.animationDuration || DEFAULT_ANIMATION_DURATION;
		let delay = 0;
		const promises = [];
		for (let i = 0; i < rects.length; i++) {
			const ad = totalDuration * (rects[i].w / totalWidth);
			promises.push(renderAnnotation(svg, rects[i], config, delay + this._animationDelay + (this._config.delay || 0), ad, this._seed));
			delay += ad;
		}
		this._lastSizes = rects;
		this._state = "showing";
		return await Promise.all(promises);
	}
	rects() {
		const ret = [];
		if (this._svg) if (this._config.multiline) {
			const elementRects = this._e.getClientRects();
			for (let i = 0; i < elementRects.length; i++) ret.push(this.svgRect(this._svg, elementRects[i]));
		} else ret.push(this.svgRect(this._svg, this._e.getBoundingClientRect()));
		return ret;
	}
	svgRect(svg, bounds) {
		const rect1 = svg.getBoundingClientRect();
		const rect2 = bounds;
		return {
			x: (rect2.x || rect2.left) - (rect1.x || rect1.left),
			y: (rect2.y || rect2.top) - (rect1.y || rect1.top),
			w: rect2.width,
			h: rect2.height
		};
	}
};
function annotate(element, config) {
	return new RoughAnnotationImpl(element, config);
}
//#endregion
//#region node_modules/@slidev/client/modules/v-mark.ts
function addClass(options, cls) {
	options.class = [options.class, cls].filter(Boolean).join(" ");
	return options;
}
var vMarkModifiers = {
	"box": (options) => Object.assign(options, { type: "box" }),
	"circle": (options) => Object.assign(options, { type: "circle" }),
	"underline": (options) => Object.assign(options, { type: "underline" }),
	"highlight": (options) => Object.assign(options, { type: "highlight" }),
	"strike-through": (options) => Object.assign(options, { type: "strike-through" }),
	"crossed-off": (options) => Object.assign(options, { type: "crossed-off" }),
	"bracket": (options) => Object.assign(options, { type: "bracket" }),
	"strike": (options) => Object.assign(options, { type: "strike-through" }),
	"cross": (options) => Object.assign(options, { type: "crossed-off" }),
	"crossed": (options) => Object.assign(options, { type: "crossed-off" }),
	"linethrough": (options) => Object.assign(options, { type: "strike-through" }),
	"line-through": (options) => Object.assign(options, { type: "strike-through" }),
	"black": (options) => addClass(options, "text-black"),
	"blue": (options) => addClass(options, "text-blue"),
	"cyan": (options) => addClass(options, "text-cyan"),
	"gray": (options) => addClass(options, "text-gray"),
	"green": (options) => addClass(options, "text-green"),
	"indigo": (options) => addClass(options, "text-indigo"),
	"lime": (options) => addClass(options, "text-lime"),
	"orange": (options) => addClass(options, "text-orange"),
	"pink": (options) => addClass(options, "text-pink"),
	"purple": (options) => addClass(options, "text-purple"),
	"red": (options) => addClass(options, "text-red"),
	"teal": (options) => addClass(options, "text-teal"),
	"white": (options) => addClass(options, "text-white"),
	"yellow": (options) => addClass(options, "text-yellow")
};
var vMarkModifiersDynamic = [[/^delay-?(\d+)?$/, (match, options, value) => {
	options.delay = (match[1] ? Number.parseInt(match[1]) : value) || 300;
	return options;
}], [/^(?:op|opacity)-?(\d+)?$/, (match, options, value) => {
	options.opacity = ((match[1] ? Number.parseInt(match[1]) : value) || 100) / 100;
	return options;
}]];
/**
* This supports v-mark directive to add notations to elements, powered by `rough-notation`.
*/
function createVMarkDirective() {
	return { install(app) {
		app.directive("mark", {
			name: "v-mark",
			mounted: (el, binding) => {
				const { isPrintMode } = useNav();
				const options = computed(() => {
					const bindingOptions = typeof binding.value === "object" && !Array.isArray(binding.value) ? { ...binding.value } : { at: binding.value };
					let modifierOptions = { at: bindingOptions.at };
					const unknownModifiers = Object.entries(binding.modifiers).filter(([k, v]) => {
						if (vMarkModifiers[k]) {
							modifierOptions = vMarkModifiers[k](modifierOptions, v);
							return false;
						}
						for (const [re, fn] of vMarkModifiersDynamic) {
							const match = k.match(re);
							if (match) {
								modifierOptions = fn(match, modifierOptions, v);
								return false;
							}
						}
						return true;
					});
					if (unknownModifiers.length) console.warn("[Slidev] Invalid modifiers for v-mark:", unknownModifiers);
					const options = {
						...modifierOptions,
						...bindingOptions
					};
					options.type || (options.type = "underline");
					if (isPrintMode.value) options.animationDuration = 1;
					return options;
				});
				const annotation = annotate(el, options.value);
				const resolvedClick = resolveClick(el, binding, options.value.at);
				if (!resolvedClick) {
					annotation.show();
					return;
				}
				el.watchStopHandle = watchEffect(() => {
					let shouldShow;
					if (options.value.class) annotation.class = options.value.class;
					if (options.value.color) annotation.color = options.value.color;
					const at = options.value.at;
					if (at === true) shouldShow = true;
					else if (at === false) shouldShow = false;
					else shouldShow = resolvedClick.isActive.value;
					if (shouldShow == null) return;
					if (shouldShow) annotation.show();
					else annotation.hide();
				});
			},
			unmounted: (el) => {
				el.watchStopHandle?.();
			}
		});
	} };
}
//#endregion
//#region node_modules/@slidev/client/modules/v-motion.ts
function createVMotionDirectives() {
	return { install(app) {
		const original = directive();
		app.directive("motion", {
			name: "v-motion",
			mounted(el, binding, node, prevNode) {
				const clicksContext = directiveInject(binding, injectionClicksContext);
				const thisPage = directiveInject(binding, injectionCurrentPage);
				const renderContext = directiveInject(binding, injectionRenderContext);
				const { currentPage, clicks: currentClicks, isPrintMode } = useNav();
				const props = node.props = { ...node.props };
				const variantInitial = {
					...props.initial,
					...props.variants?.["slidev-initial"]
				};
				const variantEnter = {
					...props.enter,
					...props.variants?.["slidev-enter"]
				};
				const variantLeave = {
					...props.leave,
					...props.variants?.["slidev-leave"]
				};
				delete props.initial;
				delete props.enter;
				delete props.leave;
				const idPrefix = `${makeId()}-`;
				const clicks = [];
				for (const k of Object.keys(props)) if (k.startsWith("click-")) {
					const s = k.slice(6);
					const at = s.includes("-") ? s.split("-").map(Number) : +s;
					const id = idPrefix + s;
					clicks.push({
						id,
						at,
						variant: { ...props[k] },
						info: clicksContext?.value.calculate(at)
					});
					delete props[k];
				}
				clicks.sort((a, b) => (Array.isArray(a.at) ? a.at[0] : a.at) - (Array.isArray(b.at) ? b.at[0] : b.at));
				original.created(el, binding, node, prevNode);
				original.mounted(el, binding, node, prevNode);
				const motion = el.motionInstance;
				motion.clickIds = clicks.map((i) => i.id);
				motion.set(variantInitial);
				motion.watchStopHandle = watch([
					thisPage,
					currentPage,
					currentClicks
				].filter(Boolean), () => {
					const visibility = resolvedClickMap.get(el)?.visibilityState.value ?? "shown";
					if (!clicksContext?.value || !["slide", "presenter"].includes(renderContext?.value ?? "")) {
						const mixedVariant = {
							...variantInitial,
							...variantEnter
						};
						for (const { variant } of clicks) Object.assign(mixedVariant, variant);
						motion.set(mixedVariant);
					} else if (isPrintMode.value || thisPage?.value === currentPage.value) if (visibility === "shown") {
						const mixedVariant = {
							...variantInitial,
							...variantEnter
						};
						for (const { variant, info } of clicks) if (!info || info.isActive.value) Object.assign(mixedVariant, variant);
						if (isPrintMode.value) motion.set(mixedVariant);
						else motion.apply(mixedVariant);
					} else motion.apply(visibility === "before" ? variantInitial : variantLeave);
					else motion.apply((thisPage?.value ?? -1) > currentPage.value ? variantInitial : variantLeave);
				}, { immediate: true });
			},
			unmounted(el) {
				el.motionInstance.watchStopHandle();
			}
		});
	} };
}
//#endregion
//#region node_modules/.slidev/virtual/import-glob.bb2b8c0123.ts
var import_glob_bb2b8c0123_default = /* #__PURE__ */ Object.assign({});
//#endregion
//#region node_modules/.slidev/virtual/import-glob.c489aee6b1.ts
var import_glob_c489aee6b1_default = /* #__PURE__ */ Object.assign({});
//#endregion
//#region ../../../../../@slidev/setups/routes
var routes_default = [Object.values(import_glob_bb2b8c0123_default)[0], Object.values(import_glob_c489aee6b1_default)[0]].filter(Boolean);
//#endregion
//#region node_modules/@slidev/client/setup/routes.ts
function setupRoutes() {
	const routes = [];
	function passwordGuard(to) {
		if (!configs_default.remote || configs_default.remote === to.query.password) return true;
		if (configs_default.remote && to.query.password === void 0) {
			const password = prompt("Enter password");
			if (configs_default.remote === password) return true;
		}
		if (to.params.no) return { path: `/${to.params.no}` };
		return { path: "" };
	}
	routes.push({
		name: "entry",
		path: "/entry",
		component: () => __vitePreload(() => import("./slidev/entry-CvkNEyBE.js"), __vite__mapDeps([2,3,1,4,5,6])),
		beforeEnter: passwordGuard
	}, {
		name: "overview",
		path: "/overview",
		component: () => __vitePreload(() => import("./slidev/overview-Cu_NZke1.js"), __vite__mapDeps([7,3,1,4,8,9,5,10,11,12,13,14,15,16,17,18,19,20])),
		beforeEnter: passwordGuard
	}, {
		name: "notes",
		path: "/notes",
		component: () => __vitePreload(() => import("./slidev/notes-CVImN9Zw.js"), __vite__mapDeps([21,3,1,4,8,9,5,10,11,22,12,13,23])),
		beforeEnter: passwordGuard
	}, {
		name: "notes-edit",
		path: "/notes-edit",
		component: () => __vitePreload(() => import("./slidev/notes-edit-BSA0bZVR.js"), __vite__mapDeps([24,3,1,4,8,9,5,10,11,22])),
		beforeEnter: passwordGuard
	}, {
		name: "presenter",
		path: "/presenter/:no",
		component: () => __vitePreload(() => import("./slidev/presenter-DW2mrOIi.js"), __vite__mapDeps([25,3,1,4,8,9,5,10,17,26,11,27,28,12,13,23,15,16,18,19,29,30,31])),
		beforeEnter: passwordGuard
	}, {
		path: "/presenter",
		redirect: { path: "/presenter/1" }
	});
	routes.push({
		name: "play",
		path: "/:no",
		component: () => __vitePreload(() => import("./slidev/play-CXY2vzex.js"), __vite__mapDeps([32,3,1,4,8,9,5,10,17,22,14,15,16,18,29,11,27,30,33]))
	}, {
		path: "",
		redirect: { path: "/1" }
	}, {
		path: "/:pathMatch(.*)*",
		name: "NotFound",
		component: () => __vitePreload(() => import("./slidev/404-CKhF6Qqu.js"), __vite__mapDeps([34,3,1,4,8,9,5,10,35]))
	});
	return routes_default.reduce((routes, setup) => setup(routes), routes);
}
//#endregion
//#region node_modules/@slidev/client/setup/main.ts
async function setupMain(app) {
	function setMaxHeight() {
		document.documentElement.style.setProperty("--vh", `${window.innerHeight * .01}px`);
	}
	setMaxHeight();
	window.addEventListener("resize", setMaxHeight);
	const router = createRouter({
		history: createWebHistory("/"),
		routes: setupRoutes()
	});
	app.use(router);
	app.use(/* @__PURE__ */ createHead());
	app.use(createVClickDirectives());
	app.use(createVMarkDirective());
	app.use(createVDragDirective());
	app.use(createVMotionDirectives());
	app.use(TwoslashFloatingVue, { container: "#twoslash-container" });
	const context = {
		app,
		router
	};
	for (const setup of main_default) await setup(context);
}
//#endregion
//#region node_modules/@slidev/client/main.ts
async function main() {
	const app = createApp(App_default);
	await setupMain(app);
	app.mount("#app");
}
main();
//#endregion
export { getSlideClass as a, onPatchDrawingState as c, isDark as d, toggleDark as f, downloadPDF as i, patchDrawingState as l, useSlideInfo as n, state as o, useHead as p, useSlideBounds as r, drawingState as s, useDynamicSlideInfo as t, isColorSchemaConfigured as u };
