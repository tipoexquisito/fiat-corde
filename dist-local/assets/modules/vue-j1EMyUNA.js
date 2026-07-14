import { $ as effectScope, C as defineComponent, D as hasInjectionContext, E as h, F as onMounted, G as useSlots, I as onUnmounted, J as watchEffect, O as inject, Q as customRef, R as provide, at as reactive, ct as shallowReactive, dt as toRaw, et as getCurrentScope, ft as toRef$1, h as computed, ht as unref, it as onScopeDispose, j as nextTick, lt as shallowReadonly, mt as toValue, nt as isRef, ot as readonly, p as Fragment, pt as toRefs$1, q as watch, st as ref, ut as shallowRef, w as getCurrentInstance } from "./shiki-V2eyNvW-.js";
//#region \0@oxc-project+runtime@0.139.0/helpers/esm/typeof.js
function _typeof(o) {
	"@babel/helpers - typeof";
	return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
		return typeof o;
	} : function(o) {
		return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	}, _typeof(o);
}
//#endregion
//#region \0@oxc-project+runtime@0.139.0/helpers/esm/toPrimitive.js
function toPrimitive(t, r) {
	if ("object" != _typeof(t) || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != _typeof(i)) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
//#endregion
//#region \0@oxc-project+runtime@0.139.0/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
	var i = toPrimitive(t, "string");
	return "symbol" == _typeof(i) ? i : i + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.139.0/helpers/esm/defineProperty.js
function _defineProperty(e, r, t) {
	return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
//#endregion
//#region node_modules/vue-router/dist/useApi-s_02lHjl.js
/*!
* vue-router v5.1.0
* (c) 2026 Eduardo San Martin Morote
* @license MIT
*/
var isBrowser$1 = typeof document !== "undefined";
/**
* Allows differentiating lazy components from functional components and vue-class-component
* @internal
*
* @param component
*/
function isRouteComponent(component) {
	return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
function isESModule(obj) {
	return obj.__esModule || obj[Symbol.toStringTag] === "Module" || obj.default && isRouteComponent(obj.default);
}
var assign = Object.assign;
function applyToParams(fn, params) {
	const newParams = {};
	for (const key in params) {
		const value = params[key];
		newParams[key] = isArray$1(value) ? value.map(fn) : fn(value);
	}
	return newParams;
}
var noop$2 = () => {};
/**
* Typesafe alternative to Array.isArray
* https://github.com/microsoft/TypeScript/pull/48228
*
* @internal
*/
var isArray$1 = Array.isArray;
function mergeOptions(defaults, partialOptions) {
	const options = {};
	for (const key in defaults) options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
	return options;
}
var NavigationFailureSymbol = Symbol("");
/**
* Creates a typed NavigationFailure object.
* @internal
* @param type - NavigationFailureType
* @param params - { from, to }
*/
function createRouterError(type, params) {
	return assign(/* @__PURE__ */ new Error(), {
		type,
		[NavigationFailureSymbol]: true
	}, params);
}
function isNavigationFailure(error, type) {
	return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}
/**
* RouteRecord being rendered by the closest ancestor Router View. Used for
* `onBeforeRouteUpdate` and `onBeforeRouteLeave`. rvlm stands for Router View
* Location Matched
*
* @internal
*/
var matchedRouteKey = Symbol("");
/**
* Allows overriding the router view depth to control which component in
* `matched` is rendered. rvd stands for Router View Depth
*
* @internal
*/
var viewDepthKey = Symbol("");
/**
* Allows overriding the router instance returned by `useRouter` in tests. r
* stands for router
*
* @internal
*/
var routerKey = Symbol("");
/**
* Allows overriding the current route returned by `useRoute` in tests. rl
* stands for route location
*
* @internal
*/
var routeLocationKey = Symbol("");
/**
* Allows overriding the current route used by router-view. Internally this is
* used when the `route` prop is passed.
*
* @internal
*/
var routerViewLocationKey = Symbol("");
/**
* Returns the router instance. Equivalent to using `$router` inside
* templates.
*/
function useRouter() {
	return inject(routerKey);
}
/**
* Returns the current route location. Equivalent to using `$route` inside
* templates.
*/
function useRoute(_name) {
	return inject(routeLocationKey);
}
//#endregion
//#region node_modules/vue-router/dist/devtools-DCoWQoU_.js
/*!
* vue-router v5.1.0
* (c) 2026 Eduardo San Martin Morote
* @license MIT
*/
/**
* Encoding Rules (␣ = Space)
* - Path: ␣ " < > # ? { }
* - Query: ␣ " < > # & =
* - Hash: ␣ " < > `
*
* On top of that, the RFC3986 (https://tools.ietf.org/html/rfc3986#section-2.2)
* defines some extra characters to be encoded. Most browsers do not encode them
* in encodeURI https://github.com/whatwg/url/issues/369, so it may be safer to
* also encode `!'()*`. Leaving un-encoded only ASCII alphanumeric(`a-zA-Z0-9`)
* plus `-._~`. This extra safety should be applied to query by patching the
* string returned by encodeURIComponent encodeURI also encodes `[\]^`. `\`
* should be encoded to avoid ambiguity. Browsers (IE, FF, C) transform a `\`
* into a `/` if directly typed in. The _backtick_ (`````) should also be
* encoded everywhere because some browsers like FF encode it when directly
* written while others don't. Safari and IE don't encode ``"<>{}``` in hash.
*/
var HASH_RE = /#/g;
var AMPERSAND_RE = /&/g;
var SLASH_RE = /\//g;
var EQUAL_RE = /=/g;
var IM_RE = /\?/g;
var PLUS_RE = /\+/g;
/**
* NOTE: It's not clear to me if we should encode the + symbol in queries, it
* seems to be less flexible than not doing so and I can't find out the legacy
* systems requiring this for regular requests like text/html. In the standard,
* the encoding of the plus character is only mentioned for
* application/x-www-form-urlencoded
* (https://url.spec.whatwg.org/#urlencoded-parsing) and most browsers seems lo
* leave the plus character as is in queries. To be more flexible, we allow the
* plus character on the query, but it can also be manually encoded by the user.
*
* Resources:
* - https://url.spec.whatwg.org/#urlencoded-parsing
* - https://stackoverflow.com/questions/1634271/url-encoding-the-space-character-or-20
*/
var ENC_BRACKET_OPEN_RE = /%5B/g;
var ENC_BRACKET_CLOSE_RE = /%5D/g;
var ENC_CARET_RE = /%5E/g;
var ENC_BACKTICK_RE = /%60/g;
var ENC_CURLY_OPEN_RE = /%7B/g;
var ENC_PIPE_RE = /%7C/g;
var ENC_CURLY_CLOSE_RE = /%7D/g;
var ENC_SPACE_RE = /%20/g;
/**
* Encode characters that need to be encoded on the path, search and hash
* sections of the URL.
*
* @internal
* @param text - string to encode
* @returns encoded string
*/
function commonEncode(text) {
	return text == null ? "" : encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
/**
* Encode characters that need to be encoded on the hash section of the URL.
*
* @param text - string to encode
* @returns encoded string
*/
function encodeHash(text) {
	return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
/**
* Encode characters that need to be encoded query values on the query
* section of the URL.
*
* @param text - string to encode
* @returns encoded string
*/
function encodeQueryValue(text) {
	return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
/**
* Like `encodeQueryValue` but also encodes the `=` character.
*
* @param text - string to encode
*/
function encodeQueryKey(text) {
	return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
/**
* Encode characters that need to be encoded on the path section of the URL.
*
* @param text - string to encode
* @returns encoded string
*/
function encodePath(text) {
	return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
}
/**
* Encode characters that need to be encoded on the path section of the URL as a
* param. This function encodes everything {@link encodePath} does plus the
* slash (`/`) character. If `text` is `null` or `undefined`, returns an empty
* string instead.
*
* @param text - string to encode
* @returns encoded string
*/
function encodeParam(text) {
	return encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text) {
	if (text == null) return null;
	try {
		return decodeURIComponent("" + text);
	} catch {}
	return "" + text;
}
var TRAILING_SLASH_RE = /\/$/;
var removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
/**
* Transforms a URI into a normalized history location
*
* @param parseQuery
* @param location - URI to normalize
* @param currentLocation - current absolute location. Allows resolving relative
* paths. Must start with `/`. Defaults to `/`
* @returns a normalized history location
*/
function parseURL(parseQuery, location, currentLocation = "/") {
	let path, query = {}, searchString = "", hash = "";
	const hashPos = location.indexOf("#");
	let searchPos = location.indexOf("?");
	searchPos = hashPos >= 0 && searchPos > hashPos ? -1 : searchPos;
	if (searchPos >= 0) {
		path = location.slice(0, searchPos);
		searchString = location.slice(searchPos, hashPos > 0 ? hashPos : location.length);
		query = parseQuery(searchString.slice(1));
	}
	if (hashPos >= 0) {
		path = path || location.slice(0, hashPos);
		hash = location.slice(hashPos, location.length);
	}
	path = resolveRelativePath(path != null ? path : location, currentLocation);
	return {
		fullPath: path + searchString + hash,
		path,
		query,
		hash: decode(hash)
	};
}
/**
* Stringifies a URL object
*
* @param stringifyQuery
* @param location
*/
function stringifyURL(stringifyQuery, location) {
	const query = location.query ? stringifyQuery(location.query) : "";
	return location.path + (query && "?") + query + (location.hash || "");
}
/**
* Strips off the base from the beginning of a location.pathname in a non-case-sensitive way.
*
* @param pathname - location.pathname
* @param base - base to strip off
*/
function stripBase(pathname, base) {
	if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase())) return pathname;
	return pathname.slice(base.length) || "/";
}
/**
* Checks if two RouteLocation are equal. This means that both locations are
* pointing towards the same {@link RouteRecord} and that all `params`, `query`
* parameters and `hash` are the same
*
* @param stringifyQuery - A function that takes a query object of type LocationQueryRaw and returns a string representation of it.
* @param a - first {@link RouteLocation}
* @param b - second {@link RouteLocation}
*/
function isSameRouteLocation(stringifyQuery, a, b) {
	const aLastIndex = a.matched.length - 1;
	const bLastIndex = b.matched.length - 1;
	return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery(a.query) === stringifyQuery(b.query) && a.hash === b.hash;
}
/**
* Check if two `RouteRecords` are equal. Takes into account aliases: they are
* considered equal to the `RouteRecord` they are aliasing.
*
* @param a - first {@link RouteRecord}
* @param b - second {@link RouteRecord}
*/
function isSameRouteRecord(a, b) {
	return (a.aliasOf || a) === (b.aliasOf || b);
}
function isSameRouteLocationParams(a, b) {
	if (Object.keys(a).length !== Object.keys(b).length) return false;
	for (var key in a) if (!isSameRouteLocationParamsValue(a[key], b[key])) return false;
	return true;
}
function isSameRouteLocationParamsValue(a, b) {
	return isArray$1(a) ? isEquivalentArray(a, b) : isArray$1(b) ? isEquivalentArray(b, a) : (a && a.valueOf()) === (b && b.valueOf());
}
/**
* Check if two arrays are the same or if an array with one single entry is the
* same as another primitive value. Used to check query and parameters
*
* @param a - array of values
* @param b - array of values or a single value
*/
function isEquivalentArray(a, b) {
	return isArray$1(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
}
/**
* Resolves a relative path that starts with `.`.
*
* @param to - path location we are resolving
* @param from - currentLocation.path, should start with `/`
*/
function resolveRelativePath(to, from) {
	if (to.startsWith("/")) return to;
	if (!to) return from;
	const fromSegments = from.split("/");
	const toSegments = to.split("/");
	const lastToSegment = toSegments[toSegments.length - 1];
	if (lastToSegment === ".." || lastToSegment === ".") toSegments.push("");
	let position = fromSegments.length - 1;
	let toPosition;
	let segment;
	for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
		segment = toSegments[toPosition];
		if (segment === ".") continue;
		if (segment === "..") {
			if (position > 1) position--;
		} else break;
	}
	return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition).join("/");
}
/**
* Initial route location where the router is. Can be used in navigation guards
* to differentiate the initial navigation.
*
* @example
* ```js
* import { START_LOCATION } from 'vue-router'
*
* router.beforeEach((to, from) => {
*   if (from === START_LOCATION) {
*     // initial navigation
*   }
* })
* ```
*/
var START_LOCATION_NORMALIZED = {
	path: "/",
	name: void 0,
	params: {},
	query: {},
	hash: "",
	fullPath: "/",
	matched: [],
	meta: {},
	redirectedFrom: void 0
};
/**
* Normalizes a base by removing any trailing slash and reading the base tag if
* present.
*
* @param base - base to normalize
*/
function normalizeBase(base) {
	if (!base) if (isBrowser$1) {
		const baseEl = document.querySelector("base");
		base = baseEl && baseEl.getAttribute("href") || "/";
		base = base.replace(/^\w+:\/\/[^/]+/, "");
	} else base = "/";
	if (base[0] !== "/" && base[0] !== "#") base = "/" + base;
	return removeTrailingSlash(base);
}
var BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base, location) {
	return base.replace(BEFORE_HASH_RE, "#") + location;
}
function getElementPosition(el, offset) {
	const docRect = document.documentElement.getBoundingClientRect();
	const elRect = el.getBoundingClientRect();
	return {
		behavior: offset.behavior,
		left: elRect.left - docRect.left - (offset.left || 0),
		top: elRect.top - docRect.top - (offset.top || 0)
	};
}
var computeScrollPosition = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function scrollToPosition(position) {
	let scrollToOptions;
	if ("el" in position) {
		const positionEl = position.el;
		const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
		const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
		if (!el) return;
		scrollToOptions = getElementPosition(el, position);
	} else scrollToOptions = position;
	if ("scrollBehavior" in document.documentElement.style) window.scrollTo(scrollToOptions);
	else window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.scrollX, scrollToOptions.top != null ? scrollToOptions.top : window.scrollY);
}
function getScrollKey(path, delta) {
	return (history.state ? history.state.position - delta : -1) + path;
}
var scrollPositions = /* @__PURE__ */ new Map();
function saveScrollPosition(key, scrollPosition) {
	scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
	const scroll = scrollPositions.get(key);
	scrollPositions.delete(key);
	return scroll;
}
/**
* ScrollBehavior instance used by the router to compute and restore the scroll
* position when navigating.
*/
function isRouteLocation(route) {
	return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
	return typeof name === "string" || typeof name === "symbol";
}
/**
* Transforms a queryString into a {@link LocationQuery} object. Accept both, a
* version with the leading `?` and without Should work as URLSearchParams

* @internal
*
* @param search - search string to parse
* @returns a query object
*/
function parseQuery(search) {
	const query = {};
	if (search === "" || search === "?") return query;
	const searchParams = (search[0] === "?" ? search.slice(1) : search).split("&");
	for (let i = 0; i < searchParams.length; ++i) {
		const searchParam = searchParams[i].replace(PLUS_RE, " ");
		const eqPos = searchParam.indexOf("=");
		const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
		const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
		if (key in query) {
			let currentValue = query[key];
			if (!isArray$1(currentValue)) currentValue = query[key] = [currentValue];
			currentValue.push(value);
		} else query[key] = value;
	}
	return query;
}
/**
* Stringifies a {@link LocationQueryRaw} object. Like `URLSearchParams`, it
* doesn't prepend a `?`
*
* @internal
*
* @param query - query object to stringify
* @returns string version of the query without the leading `?`
*/
function stringifyQuery(query) {
	let search = "";
	for (let key in query) {
		const value = query[key];
		key = encodeQueryKey(key);
		if (value == null) {
			if (value !== void 0) search += (search.length ? "&" : "") + key;
			continue;
		}
		(isArray$1(value) ? value.map((v) => v && encodeQueryValue(v)) : [value && encodeQueryValue(value)]).forEach((value) => {
			if (value !== void 0) {
				search += (search.length ? "&" : "") + key;
				if (value != null) search += "=" + value;
			}
		});
	}
	return search;
}
/**
* Transforms a {@link LocationQueryRaw} into a {@link LocationQuery} by casting
* numbers into strings, removing keys with an undefined value and replacing
* undefined with null in arrays
*
* @param query - query object to normalize
* @returns a normalized query object
*/
function normalizeQuery(query) {
	const normalizedQuery = {};
	for (const key in query) {
		const value = query[key];
		if (value !== void 0) normalizedQuery[key] = isArray$1(value) ? value.map((v) => v == null ? null : "" + v) : value == null ? value : "" + value;
	}
	return normalizedQuery;
}
/**
* Create a list of callbacks that can be reset. Used to create before and after navigation guards list
*/
function useCallbacks() {
	let handlers = [];
	function add(handler) {
		handlers.push(handler);
		return () => {
			const i = handlers.indexOf(handler);
			if (i > -1) handlers.splice(i, 1);
		};
	}
	function reset() {
		handlers = [];
	}
	return {
		add,
		list: () => handlers.slice(),
		reset
	};
}
function guardToPromiseFn(guard, to, from, record, name, runWithContext = (fn) => fn()) {
	const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
	return () => new Promise((resolve, reject) => {
		const next = (valid) => {
			if (valid === false) reject(createRouterError(4, {
				from,
				to
			}));
			else if (valid instanceof Error) reject(valid);
			else if (isRouteLocation(valid)) reject(createRouterError(2, {
				from: to,
				to: valid
			}));
			else {
				if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function") enterCallbackArray.push(valid);
				resolve();
			}
		};
		const guardReturn = runWithContext(() => guard.call(record && record.instances[name], to, from, next));
		let guardCall = Promise.resolve(guardReturn);
		if (guard.length < 3) guardCall = guardCall.then(next);
		guardCall.catch((err) => reject(err));
	});
}
function extractComponentsGuards(matched, guardType, to, from, runWithContext = (fn) => fn()) {
	const guards = [];
	for (const record of matched) for (const name in record.components) {
		let rawComponent = record.components[name];
		if (guardType !== "beforeRouteEnter" && !record.instances[name]) continue;
		if (isRouteComponent(rawComponent)) {
			const guard = (rawComponent.__vccOpts || rawComponent)[guardType];
			guard && guards.push(guardToPromiseFn(guard, to, from, record, name, runWithContext));
		} else {
			let componentPromise = rawComponent();
			guards.push(() => componentPromise.then((resolved) => {
				if (!resolved) throw new Error(`Couldn't resolve component "${name}" at "${record.path}"`);
				const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
				record.mods[name] = resolved;
				record.components[name] = resolvedComponent;
				const guard = (resolvedComponent.__vccOpts || resolvedComponent)[guardType];
				return guard && guardToPromiseFn(guard, to, from, record, name, runWithContext)();
			}));
		}
	}
	return guards;
}
/**
* Split the leaving, updating, and entering records.
* @internal
*
* @param  to - Location we are navigating to
* @param from - Location we are navigating from
*/
function extractChangingRecords(to, from) {
	const leavingRecords = [];
	const updatingRecords = [];
	const enteringRecords = [];
	const len = Math.max(from.matched.length, to.matched.length);
	for (let i = 0; i < len; i++) {
		const recordFrom = from.matched[i];
		if (recordFrom) if (to.matched.find((record) => isSameRouteRecord(record, recordFrom))) updatingRecords.push(recordFrom);
		else leavingRecords.push(recordFrom);
		const recordTo = to.matched[i];
		if (recordTo) {
			if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) enteringRecords.push(recordTo);
		}
	}
	return [
		leavingRecords,
		updatingRecords,
		enteringRecords
	];
}
//#endregion
//#region node_modules/vue-router/dist/vue-router.js
/*!
* vue-router v5.1.0
* (c) 2026 Eduardo San Martin Morote
* @license MIT
*/
var createBaseLocation = () => location.protocol + "//" + location.host;
/**
* Creates a normalized history location from a window.location object
* @param base - The base path
* @param location - The window.location object
*/
function createCurrentLocation(base, location) {
	const { pathname, search, hash } = location;
	const hashPos = base.indexOf("#");
	if (hashPos > -1) {
		let slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
		let pathFromHash = hash.slice(slicePos);
		if (pathFromHash[0] !== "/") pathFromHash = "/" + pathFromHash;
		return stripBase(pathFromHash, "");
	}
	return stripBase(pathname, base) + search + hash;
}
function useHistoryListeners(base, historyState, currentLocation, replace) {
	let listeners = [];
	let teardowns = [];
	let pauseState = null;
	const popStateHandler = ({ state }) => {
		const to = createCurrentLocation(base, location);
		const from = currentLocation.value;
		const fromState = historyState.value;
		let delta = 0;
		if (state) {
			currentLocation.value = to;
			historyState.value = state;
			if (pauseState && pauseState === from) {
				pauseState = null;
				return;
			}
			delta = fromState ? state.position - fromState.position : 0;
		} else replace(to);
		listeners.forEach((listener) => {
			listener(currentLocation.value, from, {
				delta,
				type: "pop",
				direction: delta ? delta > 0 ? "forward" : "back" : ""
			});
		});
	};
	function pauseListeners() {
		pauseState = currentLocation.value;
	}
	function listen(callback) {
		listeners.push(callback);
		const teardown = () => {
			const index = listeners.indexOf(callback);
			if (index > -1) listeners.splice(index, 1);
		};
		teardowns.push(teardown);
		return teardown;
	}
	function beforeUnloadListener() {
		if (document.visibilityState === "hidden") {
			const { history } = window;
			if (!history.state) return;
			history.replaceState(assign({}, history.state, { scroll: computeScrollPosition() }), "");
		}
	}
	function destroy() {
		for (const teardown of teardowns) teardown();
		teardowns = [];
		window.removeEventListener("popstate", popStateHandler);
		window.removeEventListener("pagehide", beforeUnloadListener);
		document.removeEventListener("visibilitychange", beforeUnloadListener);
	}
	window.addEventListener("popstate", popStateHandler);
	window.addEventListener("pagehide", beforeUnloadListener);
	document.addEventListener("visibilitychange", beforeUnloadListener);
	return {
		pauseListeners,
		listen,
		destroy
	};
}
/**
* Creates a state object
*/
function buildState(back, current, forward, replaced = false, computeScroll = false) {
	return {
		back,
		current,
		forward,
		replaced,
		position: window.history.length,
		scroll: computeScroll ? computeScrollPosition() : null
	};
}
function useHistoryStateNavigation(base) {
	const { history, location } = window;
	const currentLocation = { value: createCurrentLocation(base, location) };
	const historyState = { value: history.state };
	if (!historyState.value) changeLocation(currentLocation.value, {
		back: null,
		current: currentLocation.value,
		forward: null,
		position: history.length - 1,
		replaced: true,
		scroll: null
	}, true);
	function changeLocation(to, state, replace) {
		/**
		* if a base tag is provided, and we are on a normal domain, we have to
		* respect the provided `base` attribute because pushState() will use it and
		* potentially erase anything before the `#` like at
		* https://github.com/vuejs/router/issues/685 where a base of
		* `/folder/#` but a base of `/` would erase the `/folder/` section. If
		* there is no host, the `<base>` tag makes no sense and if there isn't a
		* base tag we can just use everything after the `#`.
		*/
		const hashIndex = base.indexOf("#");
		const url = hashIndex > -1 ? (location.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
		try {
			history[replace ? "replaceState" : "pushState"](state, "", url);
			historyState.value = state;
		} catch (err) {
			console.error(err);
			location[replace ? "replace" : "assign"](url);
		}
	}
	function replace(to, data) {
		changeLocation(to, assign({}, history.state, buildState(historyState.value.back, to, historyState.value.forward, true), data, { position: historyState.value.position }), true);
		currentLocation.value = to;
	}
	function push(to, data) {
		const currentState = assign({}, historyState.value, history.state, {
			forward: to,
			scroll: computeScrollPosition()
		});
		changeLocation(currentState.current, currentState, true);
		changeLocation(to, assign({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data), false);
		currentLocation.value = to;
	}
	return {
		location: currentLocation,
		state: historyState,
		push,
		replace
	};
}
/**
* Creates an HTML5 history. Most common history for single page applications.
*
* @param base -
*/
function createWebHistory(base) {
	base = normalizeBase(base);
	const historyNavigation = useHistoryStateNavigation(base);
	const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
	function go(delta, triggerListeners = true) {
		if (!triggerListeners) historyListeners.pauseListeners();
		history.go(delta);
	}
	const routerHistory = assign({
		location: "",
		base,
		go,
		createHref: createHref.bind(null, base)
	}, historyNavigation, historyListeners);
	Object.defineProperty(routerHistory, "location", {
		enumerable: true,
		get: () => historyNavigation.location.value
	});
	Object.defineProperty(routerHistory, "state", {
		enumerable: true,
		get: () => historyNavigation.state.value
	});
	return routerHistory;
}
var ROOT_TOKEN = {
	type: 0,
	value: ""
};
var VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
	if (!path) return [[]];
	if (path === "/") return [[ROOT_TOKEN]];
	if (!path.startsWith("/")) throw new Error(`Invalid path "${path}"`);
	function crash(message) {
		throw new Error(`ERR (${state})/"${buffer}": ${message}`);
	}
	let state = 0;
	let previousState = state;
	const tokens = [];
	let segment;
	function finalizeSegment() {
		if (segment) tokens.push(segment);
		segment = [];
	}
	let i = 0;
	let char;
	let buffer = "";
	let customRe = "";
	function consumeBuffer() {
		if (!buffer) return;
		if (state === 0) segment.push({
			type: 0,
			value: buffer
		});
		else if (state === 1 || state === 2 || state === 3) {
			if (segment.length > 1 && (char === "*" || char === "+")) crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
			segment.push({
				type: 1,
				value: buffer,
				regexp: customRe,
				repeatable: char === "*" || char === "+",
				optional: char === "*" || char === "?"
			});
		} else crash("Invalid state to consume buffer");
		buffer = "";
	}
	function addCharToBuffer() {
		buffer += char;
	}
	while (i < path.length) {
		char = path[i++];
		switch (state) {
			case 0:
				if (char === "\\") {
					previousState = state;
					state = 4;
				} else if (char === "/") {
					if (buffer) consumeBuffer();
					finalizeSegment();
				} else if (char === ":") {
					consumeBuffer();
					state = 1;
				} else addCharToBuffer();
				break;
			case 4:
				addCharToBuffer();
				state = previousState;
				break;
			case 1:
				if (char === "(") state = 2;
				else if (VALID_PARAM_RE.test(char)) addCharToBuffer();
				else {
					consumeBuffer();
					state = 0;
					if (char !== "*" && char !== "?" && char !== "+") i--;
				}
				break;
			case 2:
				if (char === ")") if (customRe[customRe.length - 1] == "\\") customRe = customRe.slice(0, -1) + char;
				else state = 3;
				else customRe += char;
				break;
			case 3:
				consumeBuffer();
				state = 0;
				if (char !== "*" && char !== "?" && char !== "+") i--;
				customRe = "";
				break;
			default:
				crash("Unknown state");
				break;
		}
	}
	if (state === 2) crash(`Unfinished custom RegExp for param "${buffer}"`);
	consumeBuffer();
	finalizeSegment();
	return tokens;
}
var BASE_PARAM_PATTERN = "[^/]+?";
var BASE_PATH_PARSER_OPTIONS = {
	sensitive: false,
	strict: false,
	start: true,
	end: true
};
var REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
/**
* Creates a path parser from an array of Segments (a segment is an array of Tokens)
*
* @param segments - array of segments returned by tokenizePath
* @param extraOptions - optional options for the regexp
* @returns a PathParser
*/
function tokensToParser(segments, extraOptions) {
	const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
	const score = [];
	let pattern = options.start ? "^" : "";
	const keys = [];
	for (const segment of segments) {
		const segmentScores = segment.length ? [] : [90];
		if (options.strict && !segment.length) pattern += "/";
		for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
			const token = segment[tokenIndex];
			let subSegmentScore = 40 + (options.sensitive ? .25 : 0);
			if (token.type === 0) {
				if (!tokenIndex) pattern += "/";
				pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
				subSegmentScore += 40;
			} else if (token.type === 1) {
				const { value, repeatable, optional, regexp } = token;
				keys.push({
					name: value,
					repeatable,
					optional
				});
				const re = regexp ? regexp : BASE_PARAM_PATTERN;
				if (re !== BASE_PARAM_PATTERN) {
					subSegmentScore += 10;
					try {
						new RegExp(`(${re})`);
					} catch (err) {
						throw new Error(`Invalid custom RegExp for param "${value}" (${re}): ` + err.message);
					}
				}
				let subPattern = repeatable ? `((?:${re})(?:/(?:${re}))*)` : `(${re})`;
				if (!tokenIndex) subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
				if (optional) subPattern += "?";
				pattern += subPattern;
				subSegmentScore += 20;
				if (optional) subSegmentScore += -8;
				if (repeatable) subSegmentScore += -20;
				if (re === ".*") subSegmentScore += -50;
			}
			segmentScores.push(subSegmentScore);
		}
		score.push(segmentScores);
	}
	if (options.strict && options.end) {
		const i = score.length - 1;
		score[i][score[i].length - 1] += .7000000000000001;
	}
	if (!options.strict) pattern += "/?";
	if (options.end) pattern += "$";
	else if (options.strict && !pattern.endsWith("/")) pattern += "(?:/|$)";
	const re = new RegExp(pattern, options.sensitive ? "" : "i");
	function parse(path) {
		const match = path.match(re);
		const params = {};
		if (!match) return null;
		for (let i = 1; i < match.length; i++) {
			const value = match[i] || "";
			const key = keys[i - 1];
			params[key.name] = value && key.repeatable ? value.split("/") : value;
		}
		return params;
	}
	function stringify(params) {
		let path = "";
		let avoidDuplicatedSlash = false;
		for (const segment of segments) {
			if (!avoidDuplicatedSlash || !path.endsWith("/")) path += "/";
			avoidDuplicatedSlash = false;
			for (const token of segment) if (token.type === 0) path += token.value;
			else if (token.type === 1) {
				const { value, repeatable, optional } = token;
				const param = value in params ? params[value] : "";
				if (isArray$1(param) && !repeatable) throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
				const text = isArray$1(param) ? param.join("/") : param;
				if (!text) if (optional) {
					if (segment.length < 2) if (path.endsWith("/")) path = path.slice(0, -1);
					else avoidDuplicatedSlash = true;
				} else throw new Error(`Missing required param "${value}"`);
				path += text;
			}
		}
		return path || "/";
	}
	return {
		re,
		score,
		keys,
		parse,
		stringify
	};
}
/**
* Compares an array of numbers as used in PathParser.score and returns a
* number. This function can be used to `sort` an array
*
* @param a - first array of numbers
* @param b - second array of numbers
* @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
* should be sorted first
*/
function compareScoreArray(a, b) {
	let i = 0;
	while (i < a.length && i < b.length) {
		const diff = b[i] - a[i];
		if (diff) return diff;
		i++;
	}
	if (a.length < b.length) return a.length === 1 && a[0] === 80 ? -1 : 1;
	else if (a.length > b.length) return b.length === 1 && b[0] === 80 ? 1 : -1;
	return 0;
}
/**
* Compare function that can be used with `sort` to sort an array of PathParser
*
* @param a - first PathParser
* @param b - second PathParser
* @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
*/
function comparePathParserScore(a, b) {
	let i = 0;
	const aScore = a.score;
	const bScore = b.score;
	while (i < aScore.length && i < bScore.length) {
		const comp = compareScoreArray(aScore[i], bScore[i]);
		if (comp) return comp;
		i++;
	}
	if (Math.abs(bScore.length - aScore.length) === 1) {
		if (isLastScoreNegative(aScore)) return 1;
		if (isLastScoreNegative(bScore)) return -1;
	}
	return bScore.length - aScore.length;
}
/**
* This allows detecting splats at the end of a path: /home/:id(.*)*
*
* @param score - score to check
* @returns true if the last entry is negative
*/
function isLastScoreNegative(score) {
	const last = score[score.length - 1];
	return score.length > 0 && last[last.length - 1] < 0;
}
var PATH_PARSER_OPTIONS_DEFAULTS = {
	strict: false,
	end: true,
	sensitive: false
};
function createRouteRecordMatcher(record, parent, options) {
	const matcher = assign(tokensToParser(tokenizePath(record.path), options), {
		record,
		parent,
		children: [],
		alias: []
	});
	if (parent) {
		if (!matcher.record.aliasOf === !parent.record.aliasOf) parent.children.push(matcher);
	}
	return matcher;
}
/**
* Creates a Router Matcher.
*
* @internal
* @param routes - array of initial routes
* @param globalOptions - global route options
*/
function createRouterMatcher(routes, globalOptions) {
	const matchers = [];
	const matcherMap = /* @__PURE__ */ new Map();
	globalOptions = mergeOptions(PATH_PARSER_OPTIONS_DEFAULTS, globalOptions);
	function getRecordMatcher(name) {
		return matcherMap.get(name);
	}
	function addRoute(record, parent, originalRecord) {
		const isRootAdd = !originalRecord;
		const mainNormalizedRecord = normalizeRouteRecord(record);
		mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
		const options = mergeOptions(globalOptions, record);
		const normalizedRecords = [mainNormalizedRecord];
		if ("alias" in record) {
			const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
			for (const alias of aliases) normalizedRecords.push(normalizeRouteRecord(assign({}, mainNormalizedRecord, {
				components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
				path: alias,
				aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
			})));
		}
		let matcher;
		let originalMatcher;
		for (const normalizedRecord of normalizedRecords) {
			const { path } = normalizedRecord;
			if (parent && path[0] !== "/") {
				const parentPath = parent.record.path;
				const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
				normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
			}
			matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
			if (originalRecord) originalRecord.alias.push(matcher);
			else {
				originalMatcher = originalMatcher || matcher;
				if (originalMatcher !== matcher) originalMatcher.alias.push(matcher);
				if (isRootAdd && record.name && !isAliasRecord(matcher)) removeRoute(record.name);
			}
			if (isMatchable(matcher)) insertMatcher(matcher);
			if (mainNormalizedRecord.children) {
				const children = mainNormalizedRecord.children;
				for (let i = 0; i < children.length; i++) addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
			}
			originalRecord = originalRecord || matcher;
		}
		return originalMatcher ? () => {
			removeRoute(originalMatcher);
		} : noop$2;
	}
	function removeRoute(matcherRef) {
		if (isRouteName(matcherRef)) {
			const matcher = matcherMap.get(matcherRef);
			if (matcher) {
				matcherMap.delete(matcherRef);
				matchers.splice(matchers.indexOf(matcher), 1);
				matcher.children.forEach(removeRoute);
				matcher.alias.forEach(removeRoute);
			}
		} else {
			const index = matchers.indexOf(matcherRef);
			if (index > -1) {
				matchers.splice(index, 1);
				if (matcherRef.record.name) matcherMap.delete(matcherRef.record.name);
				matcherRef.children.forEach(removeRoute);
				matcherRef.alias.forEach(removeRoute);
			}
		}
	}
	function getRoutes() {
		return matchers;
	}
	function insertMatcher(matcher) {
		const index = findInsertionIndex(matcher, matchers);
		matchers.splice(index, 0, matcher);
		if (matcher.record.name && !isAliasRecord(matcher)) matcherMap.set(matcher.record.name, matcher);
	}
	function resolve(location, currentLocation) {
		let matcher;
		let params = {};
		let path;
		let name;
		if ("name" in location && location.name) {
			matcher = matcherMap.get(location.name);
			if (!matcher) throw createRouterError(1, { location });
			name = matcher.record.name;
			params = assign(pickParams(currentLocation.params, matcher.keys.filter((k) => !k.optional).concat(matcher.parent ? matcher.parent.keys.filter((k) => k.optional) : []).map((k) => k.name)), location.params && pickParams(location.params, matcher.keys.map((k) => k.name)));
			path = matcher.stringify(params);
		} else if (location.path != null) {
			path = location.path;
			matcher = matchers.find((m) => m.re.test(path));
			if (matcher) {
				params = matcher.parse(path);
				name = matcher.record.name;
				matcher.keys.forEach((key) => {
					if (key.optional && !params[key.name]) delete params[key.name];
				});
			}
		} else {
			matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
			if (!matcher) throw createRouterError(1, {
				location,
				currentLocation
			});
			name = matcher.record.name;
			params = assign({}, currentLocation.params, location.params);
			path = matcher.stringify(params);
		}
		const matched = [];
		let parentMatcher = matcher;
		while (parentMatcher) {
			matched.unshift(parentMatcher.record);
			parentMatcher = parentMatcher.parent;
		}
		return {
			name,
			path,
			params,
			matched,
			meta: mergeMetaFields(matched)
		};
	}
	routes.forEach((route) => addRoute(route));
	function clearRoutes() {
		matchers.length = 0;
		matcherMap.clear();
	}
	return {
		addRoute,
		resolve,
		removeRoute,
		clearRoutes,
		getRoutes,
		getRecordMatcher
	};
}
/**
* Picks an object param to contain only specified keys.
*
* @param params - params object to pick from
* @param keys - keys to pick
*/
function pickParams(params, keys) {
	const newParams = {};
	for (const key of keys) if (key in params) newParams[key] = params[key];
	return newParams;
}
/**
* Normalizes a RouteRecordRaw. Creates a copy
*
* @param record
* @returns the normalized version
*/
function normalizeRouteRecord(record) {
	const normalized = {
		path: record.path,
		redirect: record.redirect,
		name: record.name,
		meta: record.meta || {},
		aliasOf: record.aliasOf,
		beforeEnter: record.beforeEnter,
		props: normalizeRecordProps(record),
		children: record.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in record ? record.components || null : record.component && { default: record.component }
	};
	Object.defineProperty(normalized, "mods", { value: {} });
	return normalized;
}
/**
* Normalize the optional `props` in a record to always be an object similar to
* components. Also accept a boolean for components.
* @param record
*/
function normalizeRecordProps(record) {
	const propsObject = {};
	const props = record.props || false;
	if ("component" in record) propsObject.default = props;
	else for (const name in record.components) propsObject[name] = typeof props === "object" ? props[name] : props;
	return propsObject;
}
/**
* Checks if a record or any of its parent is an alias
* @param record
*/
function isAliasRecord(record) {
	while (record) {
		if (record.record.aliasOf) return true;
		record = record.parent;
	}
	return false;
}
/**
* Merge meta fields of an array of records
*
* @param matched - array of matched records
*/
function mergeMetaFields(matched) {
	return matched.reduce((meta, record) => assign(meta, record.meta), {});
}
/**
* Performs a binary search to find the correct insertion index for a new matcher.
*
* Matchers are primarily sorted by their score. If scores are tied then we also consider parent/child relationships,
* with descendants coming before ancestors. If there's still a tie, new routes are inserted after existing routes.
*
* @param matcher - new matcher to be inserted
* @param matchers - existing matchers
*/
function findInsertionIndex(matcher, matchers) {
	let lower = 0;
	let upper = matchers.length;
	while (lower !== upper) {
		const mid = lower + upper >> 1;
		if (comparePathParserScore(matcher, matchers[mid]) < 0) upper = mid;
		else lower = mid + 1;
	}
	const insertionAncestor = getInsertionAncestor(matcher);
	if (insertionAncestor) upper = matchers.lastIndexOf(insertionAncestor, upper - 1);
	return upper;
}
function getInsertionAncestor(matcher) {
	let ancestor = matcher;
	while (ancestor = ancestor.parent) if (isMatchable(ancestor) && comparePathParserScore(matcher, ancestor) === 0) return ancestor;
}
/**
* Checks if a matcher can be reachable. This means if it's possible to reach it as a route. For example, routes without
* a component, or name, or redirect, are just used to group other routes.
* @param matcher
* @param matcher.record record of the matcher
* @returns
*/
function isMatchable({ record }) {
	return !!(record.name || record.components && Object.keys(record.components).length || record.redirect);
}
/**
* Returns the internal behavior of a {@link RouterLink} without the rendering part.
*
* @param props - a `to` location and an optional `replace` flag
*/
function useLink(props) {
	const router = inject(routerKey);
	const currentRoute = inject(routeLocationKey);
	const route = computed(() => {
		const to = unref(props.to);
		return router.resolve(to);
	});
	const activeRecordIndex = computed(() => {
		const { matched } = route.value;
		const { length } = matched;
		const routeMatched = matched[length - 1];
		const currentMatched = currentRoute.matched;
		if (!routeMatched || !currentMatched.length) return -1;
		const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
		if (index > -1) return index;
		const parentRecordPath = getOriginalPath(matched[length - 2]);
		return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index;
	});
	const isActive = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
	const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
	function navigate(e = {}) {
		if (guardEvent(e)) {
			const p = router[unref(props.replace) ? "replace" : "push"](unref(props.to)).catch(noop$2);
			if (props.viewTransition && typeof document !== "undefined" && "startViewTransition" in document) document.startViewTransition(() => p);
			return p;
		}
		return Promise.resolve();
	}
	/**
	* NOTE: update {@link _RouterLinkI}'s `$slots` type when updating this
	*/
	return {
		route,
		href: computed(() => route.value.href),
		isActive,
		isExactActive,
		navigate
	};
}
function preferSingleVNode(vnodes) {
	return vnodes.length === 1 ? vnodes[0] : vnodes;
}
/**
* Component to render a link that triggers a navigation on click.
*/
var RouterLink = /* @__PURE__ */ defineComponent({
	name: "RouterLink",
	compatConfig: { MODE: 3 },
	props: {
		to: {
			type: [String, Object],
			required: true
		},
		replace: Boolean,
		activeClass: String,
		exactActiveClass: String,
		custom: Boolean,
		ariaCurrentValue: {
			type: String,
			default: "page"
		},
		viewTransition: Boolean
	},
	useLink,
	setup(props, { slots }) {
		const link = reactive(useLink(props));
		const { options } = inject(routerKey);
		const elClass = computed(() => ({
			[getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
			[getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
		}));
		return () => {
			const children = slots.default && preferSingleVNode(slots.default(link));
			return props.custom ? children : h("a", {
				"aria-current": link.isExactActive ? props.ariaCurrentValue : null,
				href: link.href,
				onClick: link.navigate,
				class: elClass.value
			}, children);
		};
	}
});
function guardEvent(e) {
	if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return;
	if (e.defaultPrevented) return;
	if (e.button !== void 0 && e.button !== 0) return;
	if (e.currentTarget && e.currentTarget.getAttribute) {
		const target = e.currentTarget.getAttribute("target");
		if (/\b_blank\b/i.test(target)) return;
	}
	if (e.preventDefault) e.preventDefault();
	return true;
}
function includesParams(outer, inner) {
	for (const key in inner) {
		const innerValue = inner[key];
		const outerValue = outer[key];
		if (typeof innerValue === "string") {
			if (innerValue !== outerValue) return false;
		} else if (!isArray$1(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value.valueOf() !== outerValue[i].valueOf())) return false;
	}
	return true;
}
/**
* Get the original path value of a record by following its aliasOf
* @param record
*/
function getOriginalPath(record) {
	return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
/**
* Utility class to get the active class based on defaults.
* @param propClass
* @param globalClass
* @param defaultClass
*/
var getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
var RouterViewImpl = /* @__PURE__ */ defineComponent({
	name: "RouterView",
	inheritAttrs: false,
	props: {
		name: {
			type: String,
			default: "default"
		},
		route: Object
	},
	compatConfig: { MODE: 3 },
	setup(props, { attrs, slots }) {
		const injectedRoute = inject(routerViewLocationKey);
		const routeToDisplay = computed(() => props.route || injectedRoute.value);
		const injectedDepth = inject(viewDepthKey, 0);
		const depth = computed(() => {
			let initialDepth = unref(injectedDepth);
			const { matched } = routeToDisplay.value;
			let matchedRoute;
			while ((matchedRoute = matched[initialDepth]) && !matchedRoute.components) initialDepth++;
			return initialDepth;
		});
		const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth.value]);
		provide(viewDepthKey, computed(() => depth.value + 1));
		provide(matchedRouteKey, matchedRouteRef);
		provide(routerViewLocationKey, routeToDisplay);
		const viewRef = ref();
		watch(() => [
			viewRef.value,
			matchedRouteRef.value,
			props.name
		], ([instance, to, name], [oldInstance, from, _oldName]) => {
			if (to) {
				to.instances[name] = instance;
				if (from && from !== to && instance && instance === oldInstance) {
					if (!to.leaveGuards.size) to.leaveGuards = from.leaveGuards;
					if (!to.updateGuards.size) to.updateGuards = from.updateGuards;
				}
			}
			if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
		}, { flush: "post" });
		return () => {
			const route = routeToDisplay.value;
			const currentName = props.name;
			const matchedRoute = matchedRouteRef.value;
			const ViewComponent = matchedRoute && matchedRoute.components[currentName];
			if (!ViewComponent) return normalizeSlot(slots.default, {
				Component: ViewComponent,
				route
			});
			const routePropsOption = matchedRoute.props[currentName];
			const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
			const onVnodeUnmounted = (vnode) => {
				if (vnode.component.isUnmounted) matchedRoute.instances[currentName] = null;
			};
			const component = h(ViewComponent, assign({}, routeProps, attrs, {
				onVnodeUnmounted,
				ref: viewRef
			}));
			return normalizeSlot(slots.default, {
				Component: component,
				route
			}) || component;
		};
	}
});
function normalizeSlot(slot, data) {
	if (!slot) return null;
	const slotContent = slot(data);
	return slotContent.length === 1 ? slotContent[0] : slotContent;
}
/**
* Component to display the current route the user is at.
*/
var RouterView = RouterViewImpl;
/**
* Creates a Router instance that can be used by a Vue app.
*
* @param options - {@link RouterOptions}
*/
function createRouter(options) {
	const matcher = createRouterMatcher(options.routes, options);
	const parseQuery$1 = options.parseQuery || parseQuery;
	const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
	const routerHistory = options.history;
	const beforeGuards = useCallbacks();
	const beforeResolveGuards = useCallbacks();
	const afterGuards = useCallbacks();
	const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
	let pendingLocation = START_LOCATION_NORMALIZED;
	if (isBrowser$1 && options.scrollBehavior && "scrollRestoration" in history) history.scrollRestoration = "manual";
	const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
	const encodeParams = applyToParams.bind(null, encodeParam);
	const decodeParams = applyToParams.bind(null, decode);
	function addRoute(parentOrRoute, route) {
		let parent;
		let record;
		if (isRouteName(parentOrRoute)) {
			parent = matcher.getRecordMatcher(parentOrRoute);
			record = route;
		} else record = parentOrRoute;
		return matcher.addRoute(record, parent);
	}
	function removeRoute(name) {
		const recordMatcher = matcher.getRecordMatcher(name);
		if (recordMatcher) matcher.removeRoute(recordMatcher);
	}
	function getRoutes() {
		return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
	}
	function hasRoute(name) {
		return !!matcher.getRecordMatcher(name);
	}
	function resolve(rawLocation, currentLocation) {
		currentLocation = assign({}, currentLocation || currentRoute.value);
		if (typeof rawLocation === "string") {
			const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
			const matchedRoute = matcher.resolve({ path: locationNormalized.path }, currentLocation);
			const href = routerHistory.createHref(locationNormalized.fullPath);
			return assign(locationNormalized, matchedRoute, {
				params: decodeParams(matchedRoute.params),
				redirectedFrom: void 0,
				href
			});
		}
		let matcherLocation;
		if (rawLocation.path != null) matcherLocation = assign({}, rawLocation, { path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path });
		else {
			const targetParams = assign({}, rawLocation.params);
			for (const key in targetParams) if (targetParams[key] == null) delete targetParams[key];
			matcherLocation = assign({}, rawLocation, { params: encodeParams(targetParams) });
			currentLocation.params = encodeParams(currentLocation.params);
		}
		const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
		const hash = rawLocation.hash || "";
		matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
		const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
			hash: encodeHash(hash),
			path: matchedRoute.path
		}));
		const href = routerHistory.createHref(fullPath);
		return assign({
			fullPath,
			hash,
			query: stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
		}, matchedRoute, {
			redirectedFrom: void 0,
			href
		});
	}
	function locationAsObject(to) {
		return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
	}
	function checkCanceledNavigation(to, from) {
		if (pendingLocation !== to) return createRouterError(8, {
			from,
			to
		});
	}
	function push(to) {
		return pushWithRedirect(to);
	}
	function replace(to) {
		return push(assign(locationAsObject(to), { replace: true }));
	}
	function handleRedirectRecord(to, from) {
		const lastMatched = to.matched[to.matched.length - 1];
		if (lastMatched && lastMatched.redirect) {
			const { redirect } = lastMatched;
			let newTargetLocation = typeof redirect === "function" ? redirect(to, from) : redirect;
			if (typeof newTargetLocation === "string") {
				newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : { path: newTargetLocation };
				newTargetLocation.params = {};
			}
			return assign({
				query: to.query,
				hash: to.hash,
				params: newTargetLocation.path != null ? {} : to.params
			}, newTargetLocation);
		}
	}
	function pushWithRedirect(to, redirectedFrom) {
		const targetLocation = pendingLocation = resolve(to);
		const from = currentRoute.value;
		const data = to.state;
		const force = to.force;
		const replace = to.replace === true;
		const shouldRedirect = handleRedirectRecord(targetLocation, from);
		if (shouldRedirect) return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
			state: typeof shouldRedirect === "object" ? assign({}, data, shouldRedirect.state) : data,
			force,
			replace
		}), redirectedFrom || targetLocation);
		const toLocation = targetLocation;
		toLocation.redirectedFrom = redirectedFrom;
		let failure;
		if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
			failure = createRouterError(16, {
				to: toLocation,
				from
			});
			handleScroll(from, from, true, false);
		}
		return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? isNavigationFailure(error, 2) ? error : markAsReady(error) : triggerError(error, toLocation, from)).then((failure) => {
			if (failure) {
				if (isNavigationFailure(failure, 2)) return pushWithRedirect(assign({ replace }, locationAsObject(failure.to), {
					state: typeof failure.to === "object" ? assign({}, data, failure.to.state) : data,
					force
				}), redirectedFrom || toLocation);
			} else failure = finalizeNavigation(toLocation, from, true, replace, data);
			triggerAfterEach(toLocation, from, failure);
			return failure;
		});
	}
	/**
	* Helper to reject and skip all navigation guards if a new navigation happened
	* @param to
	* @param from
	*/
	function checkCanceledNavigationAndReject(to, from) {
		const error = checkCanceledNavigation(to, from);
		return error ? Promise.reject(error) : Promise.resolve();
	}
	function runWithContext(fn) {
		const app = installedApps.values().next().value;
		return app && typeof app.runWithContext === "function" ? app.runWithContext(fn) : fn();
	}
	function navigate(to, from) {
		let guards;
		const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
		guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
		for (const record of leavingRecords) record.leaveGuards.forEach((guard) => {
			guards.push(guardToPromiseFn(guard, to, from));
		});
		const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
		guards.push(canceledNavigationCheck);
		return runGuardQueue(guards).then(() => {
			guards = [];
			for (const guard of beforeGuards.list()) guards.push(guardToPromiseFn(guard, to, from));
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
			for (const record of updatingRecords) record.updateGuards.forEach((guard) => {
				guards.push(guardToPromiseFn(guard, to, from));
			});
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			guards = [];
			for (const record of enteringRecords) if (record.beforeEnter) if (isArray$1(record.beforeEnter)) for (const beforeEnter of record.beforeEnter) guards.push(guardToPromiseFn(beforeEnter, to, from));
			else guards.push(guardToPromiseFn(record.beforeEnter, to, from));
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			to.matched.forEach((record) => record.enterCallbacks = {});
			guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from, runWithContext);
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			guards = [];
			for (const guard of beforeResolveGuards.list()) guards.push(guardToPromiseFn(guard, to, from));
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).catch((err) => isNavigationFailure(err, 8) ? err : Promise.reject(err));
	}
	function triggerAfterEach(to, from, failure) {
		afterGuards.list().forEach((guard) => runWithContext(() => guard(to, from, failure)));
	}
	/**
	* - Cleans up any navigation guards
	* - Changes the url if necessary
	* - Calls the scrollBehavior
	*/
	function finalizeNavigation(toLocation, from, isPush, replace, data) {
		const error = checkCanceledNavigation(toLocation, from);
		if (error) return error;
		const isFirstNavigation = from === START_LOCATION_NORMALIZED;
		const state = !isBrowser$1 ? {} : history.state;
		if (isPush) if (replace || isFirstNavigation) routerHistory.replace(toLocation.fullPath, assign({ scroll: isFirstNavigation && state && state.scroll }, data));
		else routerHistory.push(toLocation.fullPath, data);
		currentRoute.value = toLocation;
		handleScroll(toLocation, from, isPush, isFirstNavigation);
		markAsReady();
	}
	let removeHistoryListener;
	function setupListeners() {
		if (removeHistoryListener) return;
		removeHistoryListener = routerHistory.listen((to, _from, info) => {
			if (!router.listening) return;
			const toLocation = resolve(to);
			const shouldRedirect = handleRedirectRecord(toLocation, router.currentRoute.value);
			if (shouldRedirect) {
				pushWithRedirect(assign(shouldRedirect, {
					replace: true,
					force: true
				}), toLocation).catch(noop$2);
				return;
			}
			pendingLocation = toLocation;
			const from = currentRoute.value;
			if (isBrowser$1) saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
			navigate(toLocation, from).catch((error) => {
				if (isNavigationFailure(error, 12)) return error;
				if (isNavigationFailure(error, 2)) {
					pushWithRedirect(assign(locationAsObject(error.to), { force: true }), toLocation).then((failure) => {
						if (isNavigationFailure(failure, 20) && !info.delta && info.type === "pop") routerHistory.go(-1, false);
					}).catch(noop$2);
					return Promise.reject();
				}
				if (info.delta) routerHistory.go(-info.delta, false);
				return triggerError(error, toLocation, from);
			}).then((failure) => {
				failure = failure || finalizeNavigation(toLocation, from, false);
				if (failure) {
					if (info.delta && !isNavigationFailure(failure, 8)) routerHistory.go(-info.delta, false);
					else if (info.type === "pop" && isNavigationFailure(failure, 20)) routerHistory.go(-1, false);
				}
				triggerAfterEach(toLocation, from, failure);
			}).catch(noop$2);
		});
	}
	let readyHandlers = useCallbacks();
	let errorListeners = useCallbacks();
	let ready;
	/**
	* Trigger errorListeners added via onError and throws the error as well
	*
	* @param error - error to throw
	* @param to - location we were navigating to when the error happened
	* @param from - location we were navigating from when the error happened
	* @returns the error as a rejected promise
	*/
	function triggerError(error, to, from) {
		markAsReady(error);
		const list = errorListeners.list();
		if (list.length) list.forEach((handler) => handler(error, to, from));
		else console.error(error);
		return Promise.reject(error);
	}
	function isReady() {
		if (ready && currentRoute.value !== START_LOCATION_NORMALIZED) return Promise.resolve();
		return new Promise((resolve, reject) => {
			readyHandlers.add([resolve, reject]);
		});
	}
	function markAsReady(err) {
		if (!ready) {
			ready = !err;
			setupListeners();
			readyHandlers.list().forEach(([resolve, reject]) => err ? reject(err) : resolve());
			readyHandlers.reset();
		}
		return err;
	}
	function handleScroll(to, from, isPush, isFirstNavigation) {
		const { scrollBehavior } = options;
		if (!isBrowser$1 || !scrollBehavior) return Promise.resolve();
		const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
		return nextTick().then(() => scrollBehavior(to, from, scrollPosition)).then((position) => position && scrollToPosition(position)).catch((err) => triggerError(err, to, from));
	}
	const go = (delta) => routerHistory.go(delta);
	let started;
	const installedApps = /* @__PURE__ */ new Set();
	const router = {
		currentRoute,
		listening: true,
		addRoute,
		removeRoute,
		clearRoutes: matcher.clearRoutes,
		hasRoute,
		getRoutes,
		resolve,
		options,
		push,
		replace,
		go,
		back: () => go(-1),
		forward: () => go(1),
		beforeEach: beforeGuards.add,
		beforeResolve: beforeResolveGuards.add,
		afterEach: afterGuards.add,
		onError: errorListeners.add,
		isReady,
		install(app) {
			app.component("RouterLink", RouterLink);
			app.component("RouterView", RouterView);
			app.config.globalProperties.$router = router;
			Object.defineProperty(app.config.globalProperties, "$route", {
				enumerable: true,
				get: () => unref(currentRoute)
			});
			if (isBrowser$1 && !started && currentRoute.value === START_LOCATION_NORMALIZED) {
				started = true;
				push(routerHistory.location).catch((err) => {});
			}
			const reactiveRoute = {};
			for (const key in START_LOCATION_NORMALIZED) Object.defineProperty(reactiveRoute, key, {
				get: () => currentRoute.value[key],
				enumerable: true
			});
			app.provide(routerKey, router);
			app.provide(routeLocationKey, shallowReactive(reactiveRoute));
			app.provide(routerViewLocationKey, currentRoute);
			const unmountApp = app.unmount;
			installedApps.add(app);
			app.unmount = function() {
				installedApps.delete(app);
				if (installedApps.size < 1) {
					pendingLocation = START_LOCATION_NORMALIZED;
					removeHistoryListener && removeHistoryListener();
					removeHistoryListener = null;
					currentRoute.value = START_LOCATION_NORMALIZED;
					started = false;
					ready = false;
				}
				unmountApp();
			};
		}
	};
	function runGuardQueue(guards) {
		return guards.reduce((promise, guard) => promise.then(() => runWithContext(guard)), Promise.resolve());
	}
	return router;
}
//#endregion
//#region node_modules/@vueuse/shared/dist/index.js
/**
* Call onScopeDispose() if it's inside an effect scope lifecycle, if not, do nothing
*
* @param fn
*/
function tryOnScopeDispose$1(fn, failSilently) {
	if (getCurrentScope()) {
		onScopeDispose(fn, failSilently);
		return true;
	}
	return false;
}
var localProvidedStateMap = /* @__PURE__ */ new WeakMap();
/**
* On the basis of `inject`, it is allowed to directly call inject to obtain the value after call provide in the same component.
*
* @example
* ```ts
* injectLocal('MyInjectionKey', 1)
* const injectedValue = injectLocal('MyInjectionKey') // injectedValue === 1
* ```
*
* @__NO_SIDE_EFFECTS__
*/
var injectLocal = (...args) => {
	var _getCurrentInstance;
	const key = args[0];
	const instance = (_getCurrentInstance = getCurrentInstance()) === null || _getCurrentInstance === void 0 ? void 0 : _getCurrentInstance.proxy;
	const owner = instance !== null && instance !== void 0 ? instance : getCurrentScope();
	if (owner == null && !hasInjectionContext()) throw new Error("injectLocal must be called in setup");
	if (owner && localProvidedStateMap.has(owner) && key in localProvidedStateMap.get(owner)) return localProvidedStateMap.get(owner)[key];
	return inject(...args);
};
/**
* On the basis of `provide`, it is allowed to directly call inject to obtain the value after call provide in the same component.
*
* @example
* ```ts
* provideLocal('MyInjectionKey', 1)
* const injectedValue = injectLocal('MyInjectionKey') // injectedValue === 1
* ```
*/
function provideLocal(key, value) {
	var _getCurrentInstance;
	const instance = (_getCurrentInstance = getCurrentInstance()) === null || _getCurrentInstance === void 0 ? void 0 : _getCurrentInstance.proxy;
	const owner = instance !== null && instance !== void 0 ? instance : getCurrentScope();
	if (owner == null) throw new Error("provideLocal must be called in setup");
	if (!localProvidedStateMap.has(owner)) localProvidedStateMap.set(owner, Object.create(null));
	const localProvidedState = localProvidedStateMap.get(owner);
	localProvidedState[key] = value;
	return provide(key, value);
}
var isClient$1 = typeof window !== "undefined" && typeof document !== "undefined";
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
var isDef = (val) => typeof val !== "undefined";
var notNullish$1 = (val) => val != null;
var toString$1 = Object.prototype.toString;
var isObject$2 = (val) => toString$1.call(val) === "[object Object]";
var timestamp = () => +Date.now();
var noop$1 = () => {};
var isIOS = /* @__PURE__ */ getIsIOS();
function getIsIOS() {
	var _window, _window2, _window3;
	return isClient$1 && !!((_window = window) === null || _window === void 0 || (_window = _window.navigator) === null || _window === void 0 ? void 0 : _window.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((_window2 = window) === null || _window2 === void 0 || (_window2 = _window2.navigator) === null || _window2 === void 0 ? void 0 : _window2.maxTouchPoints) > 2 && /iPad|Macintosh/.test((_window3 = window) === null || _window3 === void 0 ? void 0 : _window3.navigator.userAgent));
}
function toRef(...args) {
	if (args.length !== 1) return toRef$1(...args);
	const r = args[0];
	return typeof r === "function" ? readonly(customRef(() => ({
		get: r,
		set: noop$1
	}))) : ref(r);
}
/**
* @internal
*/
function createFilterWrapper(filter, fn) {
	function wrapper(...args) {
		return new Promise((resolve, reject) => {
			Promise.resolve(filter(() => fn.apply(this, args), {
				fn,
				thisArg: this,
				args
			})).then(resolve).catch(reject);
		});
	}
	return wrapper;
}
var bypassFilter = (invoke) => {
	return invoke();
};
/**
* Create an EventFilter that debounce the events
*/
function debounceFilter(ms, options = {}) {
	let timer;
	let maxTimer;
	let lastRejector = noop$1;
	const _clearTimeout = (timer) => {
		clearTimeout(timer);
		lastRejector();
		lastRejector = noop$1;
	};
	let lastInvoker;
	const filter = (invoke) => {
		const duration = toValue(ms);
		const maxDuration = toValue(options.maxWait);
		if (timer) _clearTimeout(timer);
		if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
			if (maxTimer) {
				_clearTimeout(maxTimer);
				maxTimer = void 0;
			}
			return Promise.resolve(invoke());
		}
		return new Promise((resolve, reject) => {
			lastRejector = options.rejectOnCancel ? reject : resolve;
			lastInvoker = invoke;
			if (maxDuration && !maxTimer) maxTimer = setTimeout(() => {
				if (timer) _clearTimeout(timer);
				maxTimer = void 0;
				resolve(lastInvoker());
			}, maxDuration);
			timer = setTimeout(() => {
				if (maxTimer) _clearTimeout(maxTimer);
				maxTimer = void 0;
				resolve(invoke());
			}, duration);
		});
	};
	return filter;
}
/**
* EventFilter that gives extra controls to pause and resume the filter
*
* @param extendFilter  Extra filter to apply when the PausableFilter is active, default to none
* @param options Options to configure the filter
*/
function pausableFilter(extendFilter = bypassFilter, options = {}) {
	const { initialState = "active" } = options;
	const isActive = toRef(initialState === "active");
	function pause() {
		isActive.value = false;
	}
	function resume() {
		isActive.value = true;
	}
	const eventFilter = (...args) => {
		if (isActive.value) extendFilter(...args);
	};
	return {
		isActive: shallowReadonly(isActive),
		pause,
		resume,
		eventFilter
	};
}
function increaseWithUnit(target, delta) {
	var _target$match;
	if (typeof target === "number") return target + delta;
	const value = ((_target$match = target.match(/^-?\d+\.?\d*/)) === null || _target$match === void 0 ? void 0 : _target$match[0]) || "";
	const unit = target.slice(value.length);
	const result = Number.parseFloat(value) + delta;
	if (Number.isNaN(result)) return target;
	return result + unit;
}
/**
* Get a px value for SSR use, do not rely on this method outside of SSR as REM unit is assumed at 16px, which might not be the case on the client
*/
function pxValue(px) {
	return px.endsWith("rem") ? Number.parseFloat(px) * 16 : Number.parseFloat(px);
}
/**
* Create a new subset object by omit giving keys
*/
function objectOmit(obj, keys, omitUndefined = false) {
	return Object.fromEntries(Object.entries(obj).filter(([key, value]) => {
		return (!omitUndefined || value !== void 0) && !keys.includes(key);
	}));
}
function toArray$1(value) {
	return Array.isArray(value) ? value : [value];
}
function getLifeCycleTarget$1(target) {
	return target || getCurrentInstance();
}
/**
* Make a composable function usable with multiple Vue instances.
*
* @see https://vueuse.org/createSharedComposable
*
* @__NO_SIDE_EFFECTS__
*/
function createSharedComposable(composable) {
	if (!isClient$1) return composable;
	let subscribers = 0;
	let state;
	let scope;
	const dispose = () => {
		subscribers -= 1;
		if (scope && subscribers <= 0) {
			scope.stop();
			state = void 0;
			scope = void 0;
		}
	};
	return ((...args) => {
		subscribers += 1;
		if (!scope) {
			scope = effectScope(true);
			state = scope.run(() => composable(...args));
		}
		tryOnScopeDispose$1(dispose);
		return state;
	});
}
function watchWithFilter(source, cb, options = {}) {
	const { eventFilter = bypassFilter, ...watchOptions } = options;
	return watch(source, createFilterWrapper(eventFilter, cb), watchOptions);
}
/** @deprecated Use Vue's built-in `watch` instead. This function will be removed in future version. */
function watchPausable(source, cb, options = {}) {
	const { eventFilter: filter, initialState = "active", ...watchOptions } = options;
	const { eventFilter, pause, resume, isActive } = pausableFilter(filter, { initialState });
	return {
		stop: watchWithFilter(source, cb, {
			...watchOptions,
			eventFilter
		}),
		pause,
		resume,
		isActive
	};
}
/**
* Extended `toRefs` that also accepts refs of an object.
*
* @see https://vueuse.org/toRefs
* @param objectRef A ref or normal object or array.
* @param options Options
*/
function toRefs(objectRef, options = {}) {
	if (!isRef(objectRef)) return toRefs$1(objectRef);
	const result = Array.isArray(objectRef.value) ? Array.from({ length: objectRef.value.length }) : {};
	for (const key in objectRef.value) result[key] = customRef(() => ({
		get() {
			return objectRef.value[key];
		},
		set(v) {
			var _toValue;
			if ((_toValue = toValue(options.replaceRef)) !== null && _toValue !== void 0 ? _toValue : true) if (Array.isArray(objectRef.value)) {
				const copy = [...objectRef.value];
				copy[key] = v;
				objectRef.value = copy;
			} else {
				const newObject = {
					...objectRef.value,
					[key]: v
				};
				Object.setPrototypeOf(newObject, Object.getPrototypeOf(objectRef.value));
				objectRef.value = newObject;
			}
			else objectRef.value[key] = v;
		}
	}));
	return result;
}
/**
* Call onMounted() if it's inside a component lifecycle, if not, just call the function
*
* @param fn
* @param sync if set to false, it will run in the nextTick() of Vue
* @param target
*/
function tryOnMounted(fn, sync = true, target) {
	if (getLifeCycleTarget$1(target)) onMounted(fn, target);
	else if (sync) fn();
	else nextTick(fn);
}
/**
* Wrapper for `setInterval` with controls
*
* @see https://vueuse.org/useIntervalFn
* @param cb
* @param interval
* @param options
*/
function useIntervalFn(cb, interval = 1e3, options = {}) {
	const { immediate = true, immediateCallback = false } = options;
	let timer = null;
	const isActive = shallowRef(false);
	function clean() {
		if (timer) {
			clearInterval(timer);
			timer = null;
		}
	}
	function pause() {
		isActive.value = false;
		clean();
	}
	function resume() {
		const intervalValue = toValue(interval);
		if (intervalValue <= 0) return;
		isActive.value = true;
		if (immediateCallback) cb();
		clean();
		if (isActive.value) timer = setInterval(cb, intervalValue);
	}
	if (immediate && isClient$1) resume();
	if (isRef(interval) || typeof interval === "function") tryOnScopeDispose$1(watch(interval, () => {
		if (isActive.value && isClient$1) resume();
	}));
	tryOnScopeDispose$1(pause);
	return {
		isActive: shallowReadonly(isActive),
		pause,
		resume
	};
}
function useInterval(interval = 1e3, options = {}) {
	const { controls: exposeControls = false, immediate = true, callback } = options;
	const counter = shallowRef(0);
	const update = () => counter.value += 1;
	const reset = () => {
		counter.value = 0;
	};
	const controls = useIntervalFn(callback ? () => {
		update();
		callback(counter.value);
	} : update, interval, { immediate });
	if (exposeControls) return {
		counter: shallowReadonly(counter),
		reset,
		...controls
	};
	else return shallowReadonly(counter);
}
/**
* A boolean ref with a toggler
*
* @see https://vueuse.org/useToggle
* @param [initialValue]
* @param options
*
* @__NO_SIDE_EFFECTS__
*/
function useToggle(initialValue = false, options = {}) {
	const { truthyValue = true, falsyValue = false } = options;
	const valueIsRef = isRef(initialValue);
	const _value = shallowRef(initialValue);
	function toggle(value) {
		if (arguments.length) {
			_value.value = value;
			return _value.value;
		} else {
			const truthy = toValue(truthyValue);
			_value.value = _value.value === truthy ? toValue(falsyValue) : truthy;
			return _value.value;
		}
	}
	if (valueIsRef) return toggle;
	else return [_value, toggle];
}
function watchDebounced(source, cb, options = {}) {
	const { debounce = 0, maxWait = void 0, ...watchOptions } = options;
	return watchWithFilter(source, cb, {
		...watchOptions,
		eventFilter: debounceFilter(debounce, { maxWait })
	});
}
/** @deprecated use `watchDebounced` instead */
var debouncedWatch = watchDebounced;
function watchIgnorable(source, cb, options = {}) {
	const { eventFilter = bypassFilter, ...watchOptions } = options;
	const filteredCb = createFilterWrapper(eventFilter, cb);
	let ignoreUpdates;
	let ignorePrevAsyncUpdates;
	let stop;
	if (watchOptions.flush === "sync") {
		let ignore = false;
		ignorePrevAsyncUpdates = () => {};
		ignoreUpdates = (updater) => {
			ignore = true;
			updater();
			ignore = false;
		};
		stop = watch(source, (...args) => {
			if (!ignore) filteredCb(...args);
		}, watchOptions);
	} else {
		const disposables = [];
		let ignoreCounter = 0;
		let syncCounter = 0;
		ignorePrevAsyncUpdates = () => {
			ignoreCounter = syncCounter;
		};
		disposables.push(watch(source, () => {
			syncCounter++;
		}, {
			...watchOptions,
			flush: "sync"
		}));
		ignoreUpdates = (updater) => {
			const syncCounterPrev = syncCounter;
			updater();
			ignoreCounter += syncCounter - syncCounterPrev;
		};
		disposables.push(watch(source, (...args) => {
			const ignore = ignoreCounter > 0 && ignoreCounter === syncCounter;
			ignoreCounter = 0;
			syncCounter = 0;
			if (ignore) return;
			filteredCb(...args);
		}, watchOptions));
		stop = () => {
			disposables.forEach((fn) => fn());
		};
	}
	return {
		stop,
		ignoreUpdates,
		ignorePrevAsyncUpdates
	};
}
/** @deprecated use `watchIgnorable` instead */
var ignorableWatch = watchIgnorable;
/**
* Shorthand for watching value with {immediate: true}
*
* @see https://vueuse.org/watchImmediate
*/
function watchImmediate$1(source, cb, options) {
	return watch(source, cb, {
		...options,
		immediate: true
	});
}
function whenever(source, cb, options) {
	const stop = watch(source, (v, ov, onInvalidate) => {
		if (v) {
			if (options === null || options === void 0 ? void 0 : options.once) nextTick(() => stop());
			cb(v, ov, onInvalidate);
		}
	}, {
		...options,
		once: false
	});
	return stop;
}
//#endregion
//#region node_modules/@vueuse/core/dist/index.js
var defaultWindow$1 = isClient$1 ? window : void 0;
var defaultDocument$1 = isClient$1 ? window.document : void 0;
var defaultNavigator$1 = isClient$1 ? window.navigator : void 0;
isClient$1 && window.location;
/**
* Get the dom element of a ref of element or Vue component instance
*
* @param elRef
*/
function unrefElement$1(elRef) {
	var _$el;
	const plain = toValue(elRef);
	return (_$el = plain === null || plain === void 0 ? void 0 : plain.$el) !== null && _$el !== void 0 ? _$el : plain;
}
function useEventListener$1(...args) {
	const register = (el, event, listener, options) => {
		el.addEventListener(event, listener, options);
		return () => el.removeEventListener(event, listener, options);
	};
	const firstParamTargets = computed(() => {
		const test = toArray$1(toValue(args[0])).filter((e) => e != null);
		return test.every((e) => typeof e !== "string") ? test : void 0;
	});
	return watchImmediate$1(() => {
		var _firstParamTargets$va, _firstParamTargets$va2;
		return [
			(_firstParamTargets$va = (_firstParamTargets$va2 = firstParamTargets.value) === null || _firstParamTargets$va2 === void 0 ? void 0 : _firstParamTargets$va2.map((e) => unrefElement$1(e))) !== null && _firstParamTargets$va !== void 0 ? _firstParamTargets$va : [defaultWindow$1].filter((e) => e != null),
			toArray$1(toValue(firstParamTargets.value ? args[1] : args[0])),
			toArray$1(unref(firstParamTargets.value ? args[2] : args[1])),
			toValue(firstParamTargets.value ? args[3] : args[2])
		];
	}, ([raw_targets, raw_events, raw_listeners, raw_options], _, onCleanup) => {
		if (!(raw_targets === null || raw_targets === void 0 ? void 0 : raw_targets.length) || !(raw_events === null || raw_events === void 0 ? void 0 : raw_events.length) || !(raw_listeners === null || raw_listeners === void 0 ? void 0 : raw_listeners.length)) return;
		const optionsClone = isObject$2(raw_options) ? { ...raw_options } : raw_options;
		const cleanups = raw_targets.flatMap((el) => raw_events.flatMap((event) => raw_listeners.map((listener) => register(el, event, listener, optionsClone))));
		onCleanup(() => {
			cleanups.forEach((fn) => fn());
		});
	}, { flush: "post" });
}
var _iOSWorkaround = false;
function onClickOutside(target, handler, options = {}) {
	const { window = defaultWindow$1, ignore = [], capture = true, detectIframe = false, controls = false } = options;
	if (!window) return controls ? {
		stop: noop$1,
		cancel: noop$1,
		trigger: noop$1
	} : noop$1;
	if (isIOS && !_iOSWorkaround) {
		_iOSWorkaround = true;
		const listenerOptions = { passive: true };
		Array.from(window.document.body.children).forEach((el) => el.addEventListener("click", noop$1, listenerOptions));
		window.document.documentElement.addEventListener("click", noop$1, listenerOptions);
	}
	let shouldListen = true;
	const shouldIgnore = (event) => {
		return toValue(ignore).some((target) => {
			if (typeof target === "string") return Array.from(window.document.querySelectorAll(target)).some((el) => el === event.target || event.composedPath().includes(el));
			else {
				const el = unrefElement$1(target);
				return el && (event.target === el || event.composedPath().includes(el));
			}
		});
	};
	/**
	* Determines if the given target has multiple root elements.
	* Referenced from: https://github.com/vuejs/test-utils/blob/ccb460be55f9f6be05ab708500a41ec8adf6f4bc/src/vue-wrapper.ts#L21
	*/
	function hasMultipleRoots(target) {
		const vm = toValue(target);
		return vm && vm.$.subTree.shapeFlag === 16;
	}
	function checkMultipleRoots(target, event) {
		const vm = toValue(target);
		const children = vm.$.subTree && vm.$.subTree.children;
		if (children == null || !Array.isArray(children)) return false;
		return children.some((child) => child.el === event.target || event.composedPath().includes(child.el));
	}
	const listener = (event) => {
		const el = unrefElement$1(target);
		if (event.target == null) return;
		if (!(el instanceof Element) && hasMultipleRoots(target) && checkMultipleRoots(target, event)) return;
		if (!el || el === event.target || event.composedPath().includes(el)) return;
		if ("detail" in event && event.detail === 0) shouldListen = !shouldIgnore(event);
		if (!shouldListen) {
			shouldListen = true;
			return;
		}
		handler(event);
	};
	let isProcessingClick = false;
	const cleanup = [
		useEventListener$1(window, "click", (event) => {
			if (!isProcessingClick) {
				isProcessingClick = true;
				setTimeout(() => {
					isProcessingClick = false;
				}, 0);
				listener(event);
			}
		}, {
			passive: true,
			capture
		}),
		useEventListener$1(window, "pointerdown", (e) => {
			const el = unrefElement$1(target);
			shouldListen = !shouldIgnore(e) && !!(el && !e.composedPath().includes(el));
		}, { passive: true }),
		detectIframe && useEventListener$1(window, "blur", (event) => {
			setTimeout(() => {
				const el = unrefElement$1(target);
				let activeEl = window.document.activeElement;
				while (activeEl === null || activeEl === void 0 ? void 0 : activeEl.shadowRoot) activeEl = activeEl.shadowRoot.activeElement;
				if ((activeEl === null || activeEl === void 0 ? void 0 : activeEl.tagName) === "IFRAME" && !(el === null || el === void 0 ? void 0 : el.contains(window.document.activeElement))) handler(event);
			}, 0);
		}, { passive: true })
	].filter(Boolean);
	const stop = () => cleanup.forEach((fn) => fn());
	if (controls) return {
		stop,
		cancel: () => {
			shouldListen = false;
		},
		trigger: (event) => {
			shouldListen = true;
			listener(event);
			shouldListen = false;
		}
	};
	return stop;
}
/**
* Mounted state in ref.
*
* @see https://vueuse.org/useMounted
*
* @__NO_SIDE_EFFECTS__
*/
function useMounted$1() {
	const isMounted = shallowRef(false);
	const instance = getCurrentInstance();
	if (instance) onMounted(() => {
		isMounted.value = true;
	}, instance);
	return isMounted;
}
/* @__NO_SIDE_EFFECTS__ */
function useSupported$1(callback) {
	const isMounted = useMounted$1();
	return computed(() => {
		isMounted.value;
		return Boolean(callback());
	});
}
/**
* Watch for changes being made to the DOM tree.
*
* @see https://vueuse.org/useMutationObserver
* @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver MutationObserver MDN
* @param target
* @param callback
* @param options
*/
function useMutationObserver(target, callback, options = {}) {
	const { window = defaultWindow$1, ...mutationOptions } = options;
	let observer;
	const isSupported = /* @__PURE__ */ useSupported$1(() => window && "MutationObserver" in window);
	const cleanup = () => {
		if (observer) {
			observer.disconnect();
			observer = void 0;
		}
	};
	const stopWatch = watch(computed(() => {
		const items = toArray$1(toValue(target)).map(unrefElement$1).filter(notNullish$1);
		return new Set(items);
	}), (newTargets) => {
		cleanup();
		if (isSupported.value && newTargets.size) {
			observer = new MutationObserver(callback);
			newTargets.forEach((el) => observer.observe(el, mutationOptions));
		}
	}, {
		immediate: true,
		flush: "post"
	});
	const takeRecords = () => {
		return observer === null || observer === void 0 ? void 0 : observer.takeRecords();
	};
	const stop = () => {
		stopWatch();
		cleanup();
	};
	tryOnScopeDispose$1(stop);
	return {
		isSupported,
		stop,
		takeRecords
	};
}
/**
* Fires when the element or any element containing it is removed.
*
* @param target
* @param callback
* @param options
*/
function onElementRemoval(target, callback, options = {}) {
	const { window = defaultWindow$1, document = window === null || window === void 0 ? void 0 : window.document, flush = "sync" } = options;
	if (!window || !document) return noop$1;
	let stopFn;
	const cleanupAndUpdate = (fn) => {
		stopFn === null || stopFn === void 0 || stopFn();
		stopFn = fn;
	};
	const stopWatch = watchEffect(() => {
		const el = unrefElement$1(target);
		if (el) {
			const { stop } = useMutationObserver(document, (mutationsList) => {
				if (mutationsList.map((mutation) => [...mutation.removedNodes]).flat().some((node) => node === el || node.contains(el))) callback(mutationsList);
			}, {
				window,
				childList: true,
				subtree: true
			});
			cleanupAndUpdate(stop);
		}
	}, { flush });
	const stopHandle = () => {
		stopWatch();
		cleanupAndUpdate();
	};
	tryOnScopeDispose$1(stopHandle);
	return stopHandle;
}
function createKeyPredicate(keyFilter) {
	if (typeof keyFilter === "function") return keyFilter;
	else if (typeof keyFilter === "string") return (event) => event.key === keyFilter;
	else if (Array.isArray(keyFilter)) return (event) => keyFilter.includes(event.key);
	return () => true;
}
function onKeyStroke(...args) {
	let key;
	let handler;
	let options = {};
	if (args.length === 3) {
		key = args[0];
		handler = args[1];
		options = args[2];
	} else if (args.length === 2) if (typeof args[1] === "object") {
		key = true;
		handler = args[0];
		options = args[1];
	} else {
		key = args[0];
		handler = args[1];
	}
	else {
		key = true;
		handler = args[0];
	}
	const { target = defaultWindow$1, eventName = "keydown", passive = false, dedupe = false } = options;
	const predicate = createKeyPredicate(key);
	const listener = (e) => {
		if (e.repeat && toValue(dedupe)) return;
		if (predicate(e)) handler(e);
	};
	return useEventListener$1(target, eventName, listener, passive);
}
/**
* Reactive `document.activeElement`
*
* @see https://vueuse.org/useActiveElement
* @param options
*
* @__NO_SIDE_EFFECTS__
*/
function useActiveElement(options = {}) {
	var _options$document;
	const { window = defaultWindow$1, deep = true, triggerOnRemoval = false } = options;
	const document = (_options$document = options.document) !== null && _options$document !== void 0 ? _options$document : window === null || window === void 0 ? void 0 : window.document;
	const getDeepActiveElement = () => {
		let element = document === null || document === void 0 ? void 0 : document.activeElement;
		if (deep) {
			var _element$shadowRoot;
			while (element === null || element === void 0 ? void 0 : element.shadowRoot) element = element === null || element === void 0 || (_element$shadowRoot = element.shadowRoot) === null || _element$shadowRoot === void 0 ? void 0 : _element$shadowRoot.activeElement;
		}
		return element;
	};
	const activeElement = shallowRef();
	const trigger = () => {
		activeElement.value = getDeepActiveElement();
	};
	if (window) {
		const listenerOptions = {
			capture: true,
			passive: true
		};
		useEventListener$1(window, "blur", (event) => {
			if (event.relatedTarget !== null) return;
			trigger();
		}, listenerOptions);
		useEventListener$1(window, "focus", trigger, listenerOptions);
	}
	if (triggerOnRemoval) onElementRemoval(activeElement, trigger, { document });
	trigger();
	return activeElement;
}
var ssrWidthSymbol = Symbol("vueuse-ssr-width");
/* @__NO_SIDE_EFFECTS__ */
function useSSRWidth() {
	const ssrWidth = hasInjectionContext() ? injectLocal(ssrWidthSymbol, null) : null;
	return typeof ssrWidth === "number" ? ssrWidth : void 0;
}
/**
* Reactive Media Query.
*
* @see https://vueuse.org/useMediaQuery
* @param query
* @param options
*/
function useMediaQuery(query, options = {}) {
	const { window = defaultWindow$1, ssrWidth = /* @__PURE__ */ useSSRWidth() } = options;
	const isSupported = /* @__PURE__ */ useSupported$1(() => window && "matchMedia" in window && typeof window.matchMedia === "function");
	const ssrSupport = shallowRef(typeof ssrWidth === "number");
	const mediaQuery = shallowRef();
	const matches = shallowRef(false);
	const handler = (event) => {
		matches.value = event.matches;
	};
	watchEffect(() => {
		if (ssrSupport.value) {
			ssrSupport.value = !isSupported.value;
			matches.value = toValue(query).split(",").some((queryString) => {
				const not = queryString.includes("not all");
				const minWidth = queryString.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
				const maxWidth = queryString.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
				let res = Boolean(minWidth || maxWidth);
				if (minWidth && res) res = ssrWidth >= pxValue(minWidth[1]);
				if (maxWidth && res) res = ssrWidth <= pxValue(maxWidth[1]);
				return not ? !res : res;
			});
			return;
		}
		if (!isSupported.value) return;
		mediaQuery.value = window.matchMedia(toValue(query));
		matches.value = mediaQuery.value.matches;
	});
	useEventListener$1(mediaQuery, "change", handler, { passive: true });
	return computed(() => matches.value);
}
/**
* Breakpoints from Tailwind V2
*
* @see https://tailwindcss.com/docs/breakpoints
*/
var breakpointsTailwind = {
	"sm": 640,
	"md": 768,
	"lg": 1024,
	"xl": 1280,
	"2xl": 1536
};
/**
* Reactively viewport breakpoints
*
* @see https://vueuse.org/useBreakpoints
*
* @__NO_SIDE_EFFECTS__
*/
function useBreakpoints(breakpoints, options = {}) {
	function getValue(k, delta) {
		let v = toValue(breakpoints[toValue(k)]);
		if (delta != null) v = increaseWithUnit(v, delta);
		if (typeof v === "number") v = `${v}px`;
		return v;
	}
	const { window = defaultWindow$1, strategy = "min-width", ssrWidth = /* @__PURE__ */ useSSRWidth() } = options;
	const ssrSupport = typeof ssrWidth === "number";
	const mounted = ssrSupport ? shallowRef(false) : { value: true };
	if (ssrSupport) tryOnMounted(() => mounted.value = !!window);
	function match(query, size) {
		if (!mounted.value && ssrSupport) return query === "min" ? ssrWidth >= pxValue(size) : ssrWidth <= pxValue(size);
		if (!window) return false;
		return window.matchMedia(`(${query}-width: ${size})`).matches;
	}
	const greaterOrEqual = (k) => {
		return useMediaQuery(() => `(min-width: ${getValue(k)})`, options);
	};
	const smallerOrEqual = (k) => {
		return useMediaQuery(() => `(max-width: ${getValue(k)})`, options);
	};
	const shortcutMethods = Object.keys(breakpoints).reduce((shortcuts, k) => {
		Object.defineProperty(shortcuts, k, {
			get: () => strategy === "min-width" ? greaterOrEqual(k) : smallerOrEqual(k),
			enumerable: true,
			configurable: true
		});
		return shortcuts;
	}, {});
	function current() {
		const points = Object.keys(breakpoints).map((k) => [
			k,
			shortcutMethods[k],
			pxValue(getValue(k))
		]).sort((a, b) => a[2] - b[2]);
		return computed(() => points.filter(([, v]) => v.value).map(([k]) => k));
	}
	return Object.assign(shortcutMethods, {
		greaterOrEqual,
		smallerOrEqual,
		greater(k) {
			return useMediaQuery(() => `(min-width: ${getValue(k, .1)})`, options);
		},
		smaller(k) {
			return useMediaQuery(() => `(max-width: ${getValue(k, -.1)})`, options);
		},
		between(a, b) {
			return useMediaQuery(() => `(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -.1)})`, options);
		},
		isGreater(k) {
			return match("min", getValue(k, .1));
		},
		isGreaterOrEqual(k) {
			return match("min", getValue(k));
		},
		isSmaller(k) {
			return match("max", getValue(k, -.1));
		},
		isSmallerOrEqual(k) {
			return match("max", getValue(k));
		},
		isInBetween(a, b) {
			return match("min", getValue(a)) && match("max", getValue(b, -.1));
		},
		current,
		active() {
			const bps = current();
			return computed(() => bps.value.length === 0 ? "" : bps.value.at(strategy === "min-width" ? -1 : 0));
		}
	});
}
function cloneFnJSON(source) {
	return JSON.parse(JSON.stringify(source));
}
var _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var globalKey = "__vueuse_ssr_handlers__";
var handlers = /* @__PURE__ */ getHandlers();
function getHandlers() {
	if (!(globalKey in _global)) _global[globalKey] = _global[globalKey] || {};
	return _global[globalKey];
}
function getSSRHandler(key, fallback) {
	return handlers[key] || fallback;
}
/**
* Reactive dark theme preference.
*
* @see https://vueuse.org/usePreferredDark
* @param [options]
*
* @__NO_SIDE_EFFECTS__
*/
function usePreferredDark(options) {
	return useMediaQuery("(prefers-color-scheme: dark)", options);
}
function guessSerializerType(rawInit) {
	return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
var StorageSerializers = {
	boolean: {
		read: (v) => v === "true",
		write: (v) => String(v)
	},
	object: {
		read: (v) => JSON.parse(v),
		write: (v) => JSON.stringify(v)
	},
	number: {
		read: (v) => Number.parseFloat(v),
		write: (v) => String(v)
	},
	any: {
		read: (v) => v,
		write: (v) => String(v)
	},
	string: {
		read: (v) => v,
		write: (v) => String(v)
	},
	map: {
		read: (v) => new Map(JSON.parse(v)),
		write: (v) => JSON.stringify(Array.from(v.entries()))
	},
	set: {
		read: (v) => new Set(JSON.parse(v)),
		write: (v) => JSON.stringify(Array.from(v))
	},
	date: {
		read: (v) => new Date(v),
		write: (v) => v.toISOString()
	}
};
var customStorageEventName = "vueuse-storage";
/**
* Reactive LocalStorage/SessionStorage.
*
* @see https://vueuse.org/useStorage
*/
function useStorage(key, defaults, storage, options = {}) {
	var _options$serializer;
	const { flush = "pre", deep = true, listenToStorageChanges = true, writeDefaults = true, mergeDefaults = false, shallow, window = defaultWindow$1, eventFilter, onError = (e) => {
		console.error(e);
	}, initOnMounted } = options;
	const data = (shallow ? shallowRef : ref)(typeof defaults === "function" ? defaults() : defaults);
	const keyComputed = computed(() => toValue(key));
	if (!storage) try {
		storage = getSSRHandler("getDefaultStorage", () => defaultWindow$1 === null || defaultWindow$1 === void 0 ? void 0 : defaultWindow$1.localStorage)();
	} catch (e) {
		onError(e);
	}
	if (!storage) return data;
	const rawInit = toValue(defaults);
	const type = guessSerializerType(rawInit);
	const serializer = (_options$serializer = options.serializer) !== null && _options$serializer !== void 0 ? _options$serializer : StorageSerializers[type];
	const { pause: pauseWatch, resume: resumeWatch } = watchPausable(data, (newValue) => write(newValue), {
		flush,
		deep,
		eventFilter
	});
	watch(keyComputed, () => update(), { flush });
	let firstMounted = false;
	const onStorageEvent = (ev) => {
		if (initOnMounted && !firstMounted) return;
		update(ev);
	};
	const onStorageCustomEvent = (ev) => {
		if (initOnMounted && !firstMounted) return;
		updateFromCustomEvent(ev);
	};
	/**
	* The custom event is needed for same-document syncing when using custom
	* storage backends, but it doesn't work across different documents.
	*
	* TODO: Consider implementing a BroadcastChannel-based solution that fixes this.
	*/
	if (window && listenToStorageChanges) if (storage instanceof Storage) useEventListener$1(window, "storage", onStorageEvent, { passive: true });
	else useEventListener$1(window, customStorageEventName, onStorageCustomEvent);
	if (initOnMounted) tryOnMounted(() => {
		firstMounted = true;
		update();
	});
	else update();
	function dispatchWriteEvent(oldValue, newValue) {
		if (window) {
			const payload = {
				key: keyComputed.value,
				oldValue,
				newValue,
				storageArea: storage
			};
			window.dispatchEvent(storage instanceof Storage ? new StorageEvent("storage", payload) : new CustomEvent(customStorageEventName, { detail: payload }));
		}
	}
	function write(v) {
		try {
			const oldValue = storage.getItem(keyComputed.value);
			if (v == null) {
				dispatchWriteEvent(oldValue, null);
				storage.removeItem(keyComputed.value);
			} else {
				const serialized = serializer.write(v);
				if (oldValue !== serialized) {
					storage.setItem(keyComputed.value, serialized);
					dispatchWriteEvent(oldValue, serialized);
				}
			}
		} catch (e) {
			onError(e);
		}
	}
	function read(event) {
		const rawValue = event ? event.newValue : storage.getItem(keyComputed.value);
		if (rawValue == null) {
			if (writeDefaults && rawInit != null) storage.setItem(keyComputed.value, serializer.write(rawInit));
			return rawInit;
		} else if (!event && mergeDefaults) {
			const value = serializer.read(rawValue);
			if (typeof mergeDefaults === "function") return mergeDefaults(value, rawInit);
			else if (type === "object" && !Array.isArray(value)) return {
				...rawInit,
				...value
			};
			return value;
		} else if (typeof rawValue !== "string") return rawValue;
		else return serializer.read(rawValue);
	}
	function update(event) {
		if (event && event.storageArea !== storage) return;
		if (event && event.key == null) {
			data.value = rawInit;
			return;
		}
		if (event && event.key !== keyComputed.value) return;
		pauseWatch();
		try {
			const serializedData = serializer.write(data.value);
			if (event === void 0 || (event === null || event === void 0 ? void 0 : event.newValue) !== serializedData) data.value = read(event);
		} catch (e) {
			onError(e);
		} finally {
			if (event) nextTick(resumeWatch);
			else resumeWatch();
		}
	}
	function updateFromCustomEvent(event) {
		update(event.detail);
	}
	return data;
}
/**
* Reactively track `document.visibilityState`.
*
* @see https://vueuse.org/useDocumentVisibility
*
* @__NO_SIDE_EFFECTS__
*/
function useDocumentVisibility(options = {}) {
	const { document = defaultDocument$1 } = options;
	if (!document) return shallowRef("visible");
	const visibility = shallowRef(document.visibilityState);
	useEventListener$1(document, "visibilitychange", () => {
		visibility.value = document.visibilityState;
	}, { passive: true });
	return visibility;
}
var defaultScrollConfig = {
	speed: 2,
	margin: 30,
	direction: "both"
};
function clampContainerScroll(container) {
	if (container.scrollLeft > container.scrollWidth - container.clientWidth) container.scrollLeft = Math.max(0, container.scrollWidth - container.clientWidth);
	if (container.scrollTop > container.scrollHeight - container.clientHeight) container.scrollTop = Math.max(0, container.scrollHeight - container.clientHeight);
}
/**
* Make elements draggable.
*
* @see https://vueuse.org/useDraggable
* @param target
* @param options
*/
function useDraggable(target, options = {}) {
	var _toValue, _toValue2, _toValue3, _scrollConfig$directi;
	const { pointerTypes, preventDefault, stopPropagation, exact, onMove, onEnd, onStart, initialValue, axis = "both", draggingElement = defaultWindow$1, containerElement, handle: draggingHandle = target, buttons = [0], restrictInView, autoScroll = false } = options;
	const position = ref((_toValue = toValue(initialValue)) !== null && _toValue !== void 0 ? _toValue : {
		x: 0,
		y: 0
	});
	const pressedDelta = ref();
	const filterEvent = (e) => {
		if (pointerTypes) return pointerTypes.includes(e.pointerType);
		return true;
	};
	const handleEvent = (e) => {
		if (toValue(preventDefault)) e.preventDefault();
		if (toValue(stopPropagation)) e.stopPropagation();
	};
	const scrollConfig = toValue(autoScroll);
	const scrollSettings = typeof scrollConfig === "object" ? {
		speed: (_toValue2 = toValue(scrollConfig.speed)) !== null && _toValue2 !== void 0 ? _toValue2 : defaultScrollConfig.speed,
		margin: (_toValue3 = toValue(scrollConfig.margin)) !== null && _toValue3 !== void 0 ? _toValue3 : defaultScrollConfig.margin,
		direction: (_scrollConfig$directi = scrollConfig.direction) !== null && _scrollConfig$directi !== void 0 ? _scrollConfig$directi : defaultScrollConfig.direction
	} : defaultScrollConfig;
	const getScrollAxisValues = (value) => typeof value === "number" ? [value, value] : [value.x, value.y];
	const handleAutoScroll = (container, targetRect, position) => {
		const { clientWidth, clientHeight, scrollLeft, scrollTop, scrollWidth, scrollHeight } = container;
		const [marginX, marginY] = getScrollAxisValues(scrollSettings.margin);
		const [speedX, speedY] = getScrollAxisValues(scrollSettings.speed);
		let deltaX = 0;
		let deltaY = 0;
		if (scrollSettings.direction === "x" || scrollSettings.direction === "both") {
			if (position.x < marginX && scrollLeft > 0) deltaX = -speedX;
			else if (position.x + targetRect.width > clientWidth - marginX && scrollLeft < scrollWidth - clientWidth) deltaX = speedX;
		}
		if (scrollSettings.direction === "y" || scrollSettings.direction === "both") {
			if (position.y < marginY && scrollTop > 0) deltaY = -speedY;
			else if (position.y + targetRect.height > clientHeight - marginY && scrollTop < scrollHeight - clientHeight) deltaY = speedY;
		}
		if (deltaX || deltaY) container.scrollBy({
			left: deltaX,
			top: deltaY,
			behavior: "auto"
		});
	};
	let autoScrollInterval = null;
	const startAutoScroll = () => {
		const container = toValue(containerElement);
		if (container && !autoScrollInterval) autoScrollInterval = setInterval(() => {
			const targetRect = toValue(target).getBoundingClientRect();
			const { x, y } = position.value;
			const relativePosition = {
				x: x - container.scrollLeft,
				y: y - container.scrollTop
			};
			if (relativePosition.x >= 0 && relativePosition.y >= 0) {
				handleAutoScroll(container, targetRect, relativePosition);
				relativePosition.x += container.scrollLeft;
				relativePosition.y += container.scrollTop;
				position.value = relativePosition;
			}
		}, 1e3 / 60);
	};
	const stopAutoScroll = () => {
		if (autoScrollInterval) {
			clearInterval(autoScrollInterval);
			autoScrollInterval = null;
		}
	};
	const isPointerNearEdge = (pointer, container, margin, targetRect) => {
		const [marginX, marginY] = typeof margin === "number" ? [margin, margin] : [margin.x, margin.y];
		const { clientWidth, clientHeight } = container;
		return pointer.x < marginX || pointer.x + targetRect.width > clientWidth - marginX || pointer.y < marginY || pointer.y + targetRect.height > clientHeight - marginY;
	};
	const checkAutoScroll = () => {
		if (toValue(options.disabled) || !pressedDelta.value) return;
		const container = toValue(containerElement);
		if (!container) return;
		const targetRect = toValue(target).getBoundingClientRect();
		const { x, y } = position.value;
		if (isPointerNearEdge({
			x: x - container.scrollLeft,
			y: y - container.scrollTop
		}, container, scrollSettings.margin, targetRect)) startAutoScroll();
		else stopAutoScroll();
	};
	if (toValue(autoScroll)) watch(position, checkAutoScroll);
	const start = (e) => {
		var _container$getBoundin;
		if (!toValue(buttons).includes(e.button)) return;
		if (toValue(options.disabled) || !filterEvent(e)) return;
		if (toValue(exact) && e.target !== toValue(target)) return;
		const container = toValue(containerElement);
		const containerRect = container === null || container === void 0 || (_container$getBoundin = container.getBoundingClientRect) === null || _container$getBoundin === void 0 ? void 0 : _container$getBoundin.call(container);
		const targetRect = toValue(target).getBoundingClientRect();
		const pos = {
			x: e.clientX - (container ? targetRect.left - containerRect.left + (autoScroll ? 0 : container.scrollLeft) : targetRect.left),
			y: e.clientY - (container ? targetRect.top - containerRect.top + (autoScroll ? 0 : container.scrollTop) : targetRect.top)
		};
		if ((onStart === null || onStart === void 0 ? void 0 : onStart(pos, e)) === false) return;
		pressedDelta.value = pos;
		handleEvent(e);
	};
	const move = (e) => {
		if (toValue(options.disabled) || !filterEvent(e)) return;
		if (!pressedDelta.value) return;
		const container = toValue(containerElement);
		if (container instanceof HTMLElement) clampContainerScroll(container);
		const targetRect = toValue(target).getBoundingClientRect();
		let { x, y } = position.value;
		if (axis === "x" || axis === "both") {
			x = e.clientX - pressedDelta.value.x;
			if (container) x = Math.min(Math.max(0, x), container.scrollWidth - targetRect.width);
		}
		if (axis === "y" || axis === "both") {
			y = e.clientY - pressedDelta.value.y;
			if (container) y = Math.min(Math.max(0, y), container.scrollHeight - targetRect.height);
		}
		if (toValue(autoScroll) && container) {
			if (autoScrollInterval === null) handleAutoScroll(container, targetRect, {
				x,
				y
			});
			x += container.scrollLeft;
			y += container.scrollTop;
		}
		if (container && (restrictInView || autoScroll)) {
			if (axis !== "y") {
				const relativeX = x - container.scrollLeft;
				if (relativeX < 0) x = container.scrollLeft;
				else if (relativeX > container.clientWidth - targetRect.width) x = container.clientWidth - targetRect.width + container.scrollLeft;
			}
			if (axis !== "x") {
				const relativeY = y - container.scrollTop;
				if (relativeY < 0) y = container.scrollTop;
				else if (relativeY > container.clientHeight - targetRect.height) y = container.clientHeight - targetRect.height + container.scrollTop;
			}
		}
		position.value = {
			x,
			y
		};
		onMove === null || onMove === void 0 || onMove(position.value, e);
		handleEvent(e);
	};
	const end = (e) => {
		if (toValue(options.disabled) || !filterEvent(e)) return;
		if (!pressedDelta.value) return;
		pressedDelta.value = void 0;
		if (autoScroll) stopAutoScroll();
		onEnd === null || onEnd === void 0 || onEnd(position.value, e);
		handleEvent(e);
	};
	if (isClient$1) {
		const config = () => {
			var _options$capture;
			return {
				capture: (_options$capture = options.capture) !== null && _options$capture !== void 0 ? _options$capture : true,
				passive: !toValue(preventDefault)
			};
		};
		useEventListener$1(draggingHandle, "pointerdown", start, config);
		useEventListener$1(draggingElement, "pointermove", move, config);
		useEventListener$1(draggingElement, "pointerup", end, config);
	}
	return {
		...toRefs(position),
		position,
		isDragging: computed(() => !!pressedDelta.value),
		style: computed(() => `
      left: ${position.value.x}px;
      top: ${position.value.y}px;
      ${autoScroll ? "text-wrap: nowrap;" : ""}
    `)
	};
}
/**
* Reports changes to the dimensions of an Element's content or the border-box
*
* @see https://vueuse.org/useResizeObserver
* @param target
* @param callback
* @param options
*/
function useResizeObserver(target, callback, options = {}) {
	const { window = defaultWindow$1, ...observerOptions } = options;
	let observer;
	const isSupported = /* @__PURE__ */ useSupported$1(() => window && "ResizeObserver" in window);
	const cleanup = () => {
		if (observer) {
			observer.disconnect();
			observer = void 0;
		}
	};
	const stopWatch = watch(computed(() => {
		const _targets = toValue(target);
		return Array.isArray(_targets) ? _targets.map((el) => unrefElement$1(el)) : [unrefElement$1(_targets)];
	}), (els) => {
		cleanup();
		if (isSupported.value && window) {
			observer = new ResizeObserver(callback);
			for (const _el of els) if (_el) observer.observe(_el, observerOptions);
		}
	}, {
		immediate: true,
		flush: "post"
	});
	const stop = () => {
		cleanup();
		stopWatch();
	};
	tryOnScopeDispose$1(stop);
	return {
		isSupported,
		stop
	};
}
/**
* Reactive bounding box of an HTML element.
*
* @see https://vueuse.org/useElementBounding
* @param target
*/
function useElementBounding(target, options = {}) {
	const { reset = true, windowResize = true, windowScroll = true, immediate = true, updateTiming = "sync" } = options;
	const height = shallowRef(0);
	const bottom = shallowRef(0);
	const left = shallowRef(0);
	const right = shallowRef(0);
	const top = shallowRef(0);
	const width = shallowRef(0);
	const x = shallowRef(0);
	const y = shallowRef(0);
	function recalculate() {
		const el = unrefElement$1(target);
		if (!el) {
			if (reset) {
				height.value = 0;
				bottom.value = 0;
				left.value = 0;
				right.value = 0;
				top.value = 0;
				width.value = 0;
				x.value = 0;
				y.value = 0;
			}
			return;
		}
		const rect = el.getBoundingClientRect();
		height.value = rect.height;
		bottom.value = rect.bottom;
		left.value = rect.left;
		right.value = rect.right;
		top.value = rect.top;
		width.value = rect.width;
		x.value = rect.x;
		y.value = rect.y;
	}
	function update() {
		if (updateTiming === "sync") recalculate();
		else if (updateTiming === "next-frame") requestAnimationFrame(() => recalculate());
	}
	useResizeObserver(target, update);
	watch(() => unrefElement$1(target), (ele) => !ele && update());
	useMutationObserver(target, update, { attributeFilter: ["style", "class"] });
	if (windowScroll) useEventListener$1("scroll", update, {
		capture: true,
		passive: true
	});
	if (windowResize) useEventListener$1("resize", update, { passive: true });
	tryOnMounted(() => {
		if (immediate) update();
	});
	return {
		height,
		bottom,
		left,
		right,
		top,
		width,
		x,
		y,
		update
	};
}
/**
* Reactive size of an HTML element.
*
* @see https://vueuse.org/useElementSize
*/
function useElementSize(target, initialSize = {
	width: 0,
	height: 0
}, options = {}) {
	const { window = defaultWindow$1, box = "content-box" } = options;
	const isSVG = computed(() => {
		var _unrefElement;
		return (_unrefElement = unrefElement$1(target)) === null || _unrefElement === void 0 || (_unrefElement = _unrefElement.namespaceURI) === null || _unrefElement === void 0 ? void 0 : _unrefElement.includes("svg");
	});
	const width = shallowRef(initialSize.width);
	const height = shallowRef(initialSize.height);
	const { stop: stop1 } = useResizeObserver(target, ([entry]) => {
		const boxSize = box === "border-box" ? entry.borderBoxSize : box === "content-box" ? entry.contentBoxSize : entry.devicePixelContentBoxSize;
		if (window && isSVG.value) {
			const $elem = unrefElement$1(target);
			if ($elem) {
				const rect = $elem.getBoundingClientRect();
				width.value = rect.width;
				height.value = rect.height;
			}
		} else if (boxSize) {
			const formatBoxSize = toArray$1(boxSize);
			width.value = formatBoxSize.reduce((acc, { inlineSize }) => acc + inlineSize, 0);
			height.value = formatBoxSize.reduce((acc, { blockSize }) => acc + blockSize, 0);
		} else {
			width.value = entry.contentRect.width;
			height.value = entry.contentRect.height;
		}
	}, options);
	tryOnMounted(() => {
		const ele = unrefElement$1(target);
		if (ele) {
			width.value = "offsetWidth" in ele ? ele.offsetWidth : initialSize.width;
			height.value = "offsetHeight" in ele ? ele.offsetHeight : initialSize.height;
		}
	});
	const stop2 = watch(() => unrefElement$1(target), (ele) => {
		width.value = ele ? initialSize.width : 0;
		height.value = ele ? initialSize.height : 0;
	});
	function stop() {
		stop1();
		stop2();
	}
	return {
		width,
		height,
		stop
	};
}
var eventHandlers = [
	"fullscreenchange",
	"webkitfullscreenchange",
	"webkitendfullscreen",
	"mozfullscreenchange",
	"MSFullscreenChange"
];
/**
* Reactive Fullscreen API.
*
* @see https://vueuse.org/useFullscreen
* @param target
* @param options
*/
function useFullscreen(target, options = {}) {
	const { document = defaultDocument$1, autoExit = false } = options;
	const targetRef = computed(() => {
		var _unrefElement;
		return (_unrefElement = unrefElement$1(target)) !== null && _unrefElement !== void 0 ? _unrefElement : document === null || document === void 0 ? void 0 : document.documentElement;
	});
	const isFullscreen = shallowRef(false);
	const requestMethod = computed(() => {
		return [
			"requestFullscreen",
			"webkitRequestFullscreen",
			"webkitEnterFullscreen",
			"webkitEnterFullScreen",
			"webkitRequestFullScreen",
			"mozRequestFullScreen",
			"msRequestFullscreen"
		].find((m) => document && m in document || targetRef.value && m in targetRef.value);
	});
	const exitMethod = computed(() => {
		return [
			"exitFullscreen",
			"webkitExitFullscreen",
			"webkitExitFullScreen",
			"webkitCancelFullScreen",
			"mozCancelFullScreen",
			"msExitFullscreen"
		].find((m) => document && m in document || targetRef.value && m in targetRef.value);
	});
	const fullscreenEnabled = computed(() => {
		return [
			"fullScreen",
			"webkitIsFullScreen",
			"webkitDisplayingFullscreen",
			"mozFullScreen",
			"msFullscreenElement"
		].find((m) => document && m in document || targetRef.value && m in targetRef.value);
	});
	const fullscreenElementMethod = [
		"fullscreenElement",
		"webkitFullscreenElement",
		"mozFullScreenElement",
		"msFullscreenElement"
	].find((m) => document && m in document);
	const isSupported = /* @__PURE__ */ useSupported$1(() => targetRef.value && document && requestMethod.value !== void 0 && exitMethod.value !== void 0 && fullscreenEnabled.value !== void 0);
	const isCurrentElementFullScreen = () => {
		if (fullscreenElementMethod) return (document === null || document === void 0 ? void 0 : document[fullscreenElementMethod]) === targetRef.value;
		return false;
	};
	const isElementFullScreen = () => {
		if (fullscreenEnabled.value) if (document && document[fullscreenEnabled.value] != null) return document[fullscreenEnabled.value];
		else {
			const target = targetRef.value;
			if ((target === null || target === void 0 ? void 0 : target[fullscreenEnabled.value]) != null) return Boolean(target[fullscreenEnabled.value]);
		}
		return false;
	};
	async function exit() {
		if (!isSupported.value || !isFullscreen.value) return;
		if (exitMethod.value) if ((document === null || document === void 0 ? void 0 : document[exitMethod.value]) != null) await document[exitMethod.value]();
		else {
			const target = targetRef.value;
			if ((target === null || target === void 0 ? void 0 : target[exitMethod.value]) != null) await target[exitMethod.value]();
		}
		isFullscreen.value = false;
	}
	async function enter() {
		if (!isSupported.value || isFullscreen.value) return;
		if (isElementFullScreen()) await exit();
		const target = targetRef.value;
		if (requestMethod.value && (target === null || target === void 0 ? void 0 : target[requestMethod.value]) != null) {
			await target[requestMethod.value]();
			isFullscreen.value = true;
		}
	}
	async function toggle() {
		await (isFullscreen.value ? exit() : enter());
	}
	const handlerCallback = () => {
		const isElementFullScreenValue = isElementFullScreen();
		if (!isElementFullScreenValue || isElementFullScreenValue && isCurrentElementFullScreen()) isFullscreen.value = isElementFullScreenValue;
	};
	const listenerOptions = {
		capture: false,
		passive: true
	};
	useEventListener$1(document, eventHandlers, handlerCallback, listenerOptions);
	useEventListener$1(() => unrefElement$1(targetRef), eventHandlers, handlerCallback, listenerOptions);
	tryOnMounted(handlerCallback, false);
	if (autoExit) tryOnScopeDispose$1(exit);
	return {
		isSupported,
		isFullscreen,
		enter,
		exit,
		toggle
	};
}
/**
* Reactive LocalStorage.
*
* @see https://vueuse.org/useLocalStorage
* @param key
* @param initialValue
* @param options
*/
function useLocalStorage(key, initialValue, options = {}) {
	const { window = defaultWindow$1 } = options;
	return useStorage(key, initialValue, window === null || window === void 0 ? void 0 : window.localStorage, options);
}
var DefaultMagicKeysAliasMap = {
	ctrl: "control",
	command: "meta",
	cmd: "meta",
	option: "alt",
	up: "arrowup",
	down: "arrowdown",
	left: "arrowleft",
	right: "arrowright"
};
/**
* Reactive keys pressed state, with magical keys combination support.
*
* @see https://vueuse.org/useMagicKeys
*/
function useMagicKeys(options = {}) {
	const { reactive: useReactive = false, target = defaultWindow$1, aliasMap = DefaultMagicKeysAliasMap, passive = true, onEventFired = noop$1 } = options;
	const current = reactive(/* @__PURE__ */ new Set());
	const obj = {
		toJSON() {
			return {};
		},
		current
	};
	const refs = useReactive ? reactive(obj) : obj;
	const metaDeps = /* @__PURE__ */ new Set();
	const depsMap = /* @__PURE__ */ new Map([
		["Meta", metaDeps],
		["Shift", /* @__PURE__ */ new Set()],
		["Alt", /* @__PURE__ */ new Set()]
	]);
	const usedKeys = /* @__PURE__ */ new Set();
	function setRefs(key, value) {
		if (key in refs) if (useReactive) refs[key] = value;
		else refs[key].value = value;
	}
	function reset() {
		current.clear();
		for (const key of usedKeys) setRefs(key, false);
	}
	function updateDeps(value, e, keys) {
		if (!value || typeof e.getModifierState !== "function") return;
		for (const [modifier, depsSet] of depsMap) if (e.getModifierState(modifier)) {
			keys.forEach((key) => depsSet.add(key));
			break;
		}
	}
	function clearDeps(value, key) {
		if (value) return;
		const depsMapKey = `${key[0].toUpperCase()}${key.slice(1)}`;
		const deps = depsMap.get(depsMapKey);
		if (!["shift", "alt"].includes(key) || !deps) return;
		const depsArray = Array.from(deps);
		const depsIndex = depsArray.indexOf(key);
		depsArray.forEach((key, index) => {
			if (index >= depsIndex) {
				current.delete(key);
				setRefs(key, false);
			}
		});
		deps.clear();
	}
	function updateRefs(e, value) {
		var _e$key, _e$code;
		const key = (_e$key = e.key) === null || _e$key === void 0 ? void 0 : _e$key.toLowerCase();
		const values = [(_e$code = e.code) === null || _e$code === void 0 ? void 0 : _e$code.toLowerCase(), key].filter(Boolean);
		if (!key) return;
		if (key) if (value) current.add(key);
		else current.delete(key);
		for (const key of values) {
			usedKeys.add(key);
			setRefs(key, value);
		}
		updateDeps(value, e, [...current, ...values]);
		clearDeps(value, key);
		if (key === "meta" && !value) {
			metaDeps.forEach((key) => {
				current.delete(key);
				setRefs(key, false);
			});
			metaDeps.clear();
		}
	}
	useEventListener$1(target, "keydown", (e) => {
		updateRefs(e, true);
		return onEventFired(e);
	}, { passive });
	useEventListener$1(target, "keyup", (e) => {
		updateRefs(e, false);
		return onEventFired(e);
	}, { passive });
	useEventListener$1("blur", reset, { passive });
	useEventListener$1("focus", reset, { passive });
	const proxy = new Proxy(refs, { get(target, prop, rec) {
		if (typeof prop !== "string") return Reflect.get(target, prop, rec);
		prop = prop.toLowerCase();
		if (prop in aliasMap) prop = aliasMap[prop];
		if (!(prop in refs)) if (/[+_-]/.test(prop)) {
			const keys = prop.split(/[+_-]/g).map((i) => i.trim());
			refs[prop] = computed(() => keys.map((key) => toValue(proxy[key])).every(Boolean));
		} else refs[prop] = shallowRef(false);
		const r = Reflect.get(target, prop, rec);
		return useReactive ? toValue(r) : r;
	} });
	return proxy;
}
var UseMouseBuiltinExtractors = {
	page: (event) => [event.pageX, event.pageY],
	client: (event) => [event.clientX, event.clientY],
	screen: (event) => [event.screenX, event.screenY],
	movement: (event) => event instanceof MouseEvent ? [event.movementX, event.movementY] : null
};
/**
* Reactive mouse position.
*
* @see https://vueuse.org/useMouse
* @param options
*/
function useMouse(options = {}) {
	const { type = "page", touch = true, resetOnTouchEnds = false, initialValue = {
		x: 0,
		y: 0
	}, window = defaultWindow$1, target = window, scroll = true, eventFilter } = options;
	let _prevMouseEvent = null;
	let _prevScrollX = 0;
	let _prevScrollY = 0;
	const x = shallowRef(initialValue.x);
	const y = shallowRef(initialValue.y);
	const sourceType = shallowRef(null);
	const extractor = typeof type === "function" ? type : UseMouseBuiltinExtractors[type];
	const mouseHandler = (event) => {
		const result = extractor(event);
		_prevMouseEvent = event;
		if (result) {
			[x.value, y.value] = result;
			sourceType.value = "mouse";
		}
		if (window) {
			_prevScrollX = window.scrollX;
			_prevScrollY = window.scrollY;
		}
	};
	const touchHandler = (event) => {
		if (event.touches.length > 0) {
			const result = extractor(event.touches[0]);
			if (result) {
				[x.value, y.value] = result;
				sourceType.value = "touch";
			}
		}
	};
	const scrollHandler = () => {
		if (!_prevMouseEvent || !window) return;
		const pos = extractor(_prevMouseEvent);
		if (_prevMouseEvent instanceof MouseEvent && pos) {
			x.value = pos[0] + window.scrollX - _prevScrollX;
			y.value = pos[1] + window.scrollY - _prevScrollY;
		}
	};
	const reset = () => {
		x.value = initialValue.x;
		y.value = initialValue.y;
	};
	const mouseHandlerWrapper = eventFilter ? (event) => eventFilter(() => mouseHandler(event), {}) : (event) => mouseHandler(event);
	const touchHandlerWrapper = eventFilter ? (event) => eventFilter(() => touchHandler(event), {}) : (event) => touchHandler(event);
	const scrollHandlerWrapper = eventFilter ? () => eventFilter(() => scrollHandler(), {}) : () => scrollHandler();
	if (target) {
		const listenerOptions = { passive: true };
		useEventListener$1(target, ["mousemove", "dragover"], mouseHandlerWrapper, listenerOptions);
		if (touch && type !== "movement") {
			useEventListener$1(target, ["touchstart", "touchmove"], touchHandlerWrapper, listenerOptions);
			if (resetOnTouchEnds) useEventListener$1(target, "touchend", reset, listenerOptions);
		}
		if (scroll && type === "page") useEventListener$1(window, "scroll", scrollHandlerWrapper, listenerOptions);
	}
	return {
		x,
		y,
		sourceType
	};
}
/**
* Reactive swipe detection based on PointerEvents.
*
* @see https://vueuse.org/usePointerSwipe
* @param target
* @param options
*/
function usePointerSwipe(target, options = {}) {
	const targetRef = toRef(target);
	const { threshold = 50, onSwipe, onSwipeEnd, onSwipeStart, disableTextSelect = false } = options;
	const posStart = reactive({
		x: 0,
		y: 0
	});
	const updatePosStart = (x, y) => {
		posStart.x = x;
		posStart.y = y;
	};
	const posEnd = reactive({
		x: 0,
		y: 0
	});
	const updatePosEnd = (x, y) => {
		posEnd.x = x;
		posEnd.y = y;
	};
	const distanceX = computed(() => posStart.x - posEnd.x);
	const distanceY = computed(() => posStart.y - posEnd.y);
	const { max, abs } = Math;
	const isThresholdExceeded = computed(() => max(abs(distanceX.value), abs(distanceY.value)) >= threshold);
	const isSwiping = shallowRef(false);
	const isPointerDown = shallowRef(false);
	const direction = computed(() => {
		if (!isThresholdExceeded.value) return "none";
		if (abs(distanceX.value) > abs(distanceY.value)) return distanceX.value > 0 ? "left" : "right";
		else return distanceY.value > 0 ? "up" : "down";
	});
	const eventIsAllowed = (e) => {
		var _ref, _options$pointerTypes, _options$pointerTypes2;
		const isReleasingButton = e.buttons === 0;
		const isPrimaryButton = e.buttons === 1;
		return (_ref = (_options$pointerTypes = (_options$pointerTypes2 = options.pointerTypes) === null || _options$pointerTypes2 === void 0 ? void 0 : _options$pointerTypes2.includes(e.pointerType)) !== null && _options$pointerTypes !== void 0 ? _options$pointerTypes : isReleasingButton || isPrimaryButton) !== null && _ref !== void 0 ? _ref : true;
	};
	const listenerOptions = { passive: true };
	const stops = [
		useEventListener$1(target, "pointerdown", (e) => {
			if (!eventIsAllowed(e)) return;
			isPointerDown.value = true;
			const eventTarget = e.target;
			eventTarget === null || eventTarget === void 0 || eventTarget.setPointerCapture(e.pointerId);
			const { clientX: x, clientY: y } = e;
			updatePosStart(x, y);
			updatePosEnd(x, y);
			onSwipeStart === null || onSwipeStart === void 0 || onSwipeStart(e);
		}, listenerOptions),
		useEventListener$1(target, "pointermove", (e) => {
			if (!eventIsAllowed(e)) return;
			if (!isPointerDown.value) return;
			const { clientX: x, clientY: y } = e;
			updatePosEnd(x, y);
			if (!isSwiping.value && isThresholdExceeded.value) isSwiping.value = true;
			if (isSwiping.value) onSwipe === null || onSwipe === void 0 || onSwipe(e);
		}, listenerOptions),
		useEventListener$1(target, "pointerup", (e) => {
			if (!eventIsAllowed(e)) return;
			if (isSwiping.value) onSwipeEnd === null || onSwipeEnd === void 0 || onSwipeEnd(e, direction.value);
			isPointerDown.value = false;
			isSwiping.value = false;
		}, listenerOptions)
	];
	tryOnMounted(() => {
		var _targetRef$value;
		(_targetRef$value = targetRef.value) === null || _targetRef$value === void 0 || (_targetRef$value = _targetRef$value.style) === null || _targetRef$value === void 0 || _targetRef$value.setProperty("touch-action", "pan-y");
		if (disableTextSelect) {
			var _targetRef$value2, _targetRef$value3, _targetRef$value4;
			(_targetRef$value2 = targetRef.value) === null || _targetRef$value2 === void 0 || (_targetRef$value2 = _targetRef$value2.style) === null || _targetRef$value2 === void 0 || _targetRef$value2.setProperty("-webkit-user-select", "none");
			(_targetRef$value3 = targetRef.value) === null || _targetRef$value3 === void 0 || (_targetRef$value3 = _targetRef$value3.style) === null || _targetRef$value3 === void 0 || _targetRef$value3.setProperty("-ms-user-select", "none");
			(_targetRef$value4 = targetRef.value) === null || _targetRef$value4 === void 0 || (_targetRef$value4 = _targetRef$value4.style) === null || _targetRef$value4 === void 0 || _targetRef$value4.setProperty("user-select", "none");
		}
	});
	const stop = () => stops.forEach((s) => s());
	return {
		isSwiping: shallowReadonly(isSwiping),
		direction: shallowReadonly(direction),
		posStart: readonly(posStart),
		posEnd: readonly(posEnd),
		distanceX,
		distanceY,
		stop
	};
}
var _id = 0;
/**
* Inject <style> element in head.
*
* Overload: Omitted id
*
* @see https://vueuse.org/useStyleTag
* @param css
* @param options
*/
function useStyleTag(css, options = {}) {
	const isLoaded = shallowRef(false);
	const { document = defaultDocument$1, immediate = true, manual = false, id = `vueuse_styletag_${++_id}` } = options;
	const cssRef = shallowRef(css);
	let stop = () => {};
	const load = () => {
		if (!document) return;
		const el = document.getElementById(id) || document.createElement("style");
		if (!el.isConnected) {
			el.id = id;
			if (options.nonce) el.nonce = options.nonce;
			if (options.media) el.media = options.media;
			document.head.appendChild(el);
		}
		if (isLoaded.value) return;
		stop = watch(cssRef, (value) => {
			el.textContent = value;
		}, { immediate: true });
		isLoaded.value = true;
	};
	const unload = () => {
		if (!document || !isLoaded.value) return;
		stop();
		document.head.removeChild(document.getElementById(id));
		isLoaded.value = false;
	};
	if (immediate && !manual) tryOnMounted(load);
	if (!manual) tryOnScopeDispose$1(unload);
	return {
		id,
		css: cssRef,
		unload,
		load,
		isLoaded: shallowReadonly(isLoaded)
	};
}
Number.POSITIVE_INFINITY;
/**
* Shorthand for v-model binding, props + emit -> ref
*
* @see https://vueuse.org/useVModel
* @param props
* @param key (default 'modelValue')
* @param emit
* @param options
*
* @__NO_SIDE_EFFECTS__
*/
function useVModel(props, key, emit, options = {}) {
	var _vm$$emit, _vm$proxy;
	const { clone = false, passive = false, eventName, deep = false, defaultValue, shouldEmit } = options;
	const vm = getCurrentInstance();
	const _emit = emit || (vm === null || vm === void 0 ? void 0 : vm.emit) || (vm === null || vm === void 0 || (_vm$$emit = vm.$emit) === null || _vm$$emit === void 0 ? void 0 : _vm$$emit.bind(vm)) || (vm === null || vm === void 0 || (_vm$proxy = vm.proxy) === null || _vm$proxy === void 0 || (_vm$proxy = _vm$proxy.$emit) === null || _vm$proxy === void 0 ? void 0 : _vm$proxy.bind(vm === null || vm === void 0 ? void 0 : vm.proxy));
	let event = eventName;
	if (!key) key = "modelValue";
	event = event || `update:${key.toString()}`;
	const cloneFn = (val) => !clone ? val : typeof clone === "function" ? clone(val) : cloneFnJSON(val);
	const getValue = () => isDef(props[key]) ? cloneFn(props[key]) : defaultValue;
	const triggerEmit = (value) => {
		if (shouldEmit) {
			if (shouldEmit(value)) _emit(event, value);
		} else _emit(event, value);
	};
	if (passive) {
		const proxy = ref(getValue());
		let isUpdating = false;
		watch(() => props[key], (v) => {
			if (!isUpdating) {
				isUpdating = true;
				proxy.value = cloneFn(v);
				nextTick(() => isUpdating = false);
			}
		});
		watch(proxy, (v) => {
			if (!isUpdating && (v !== props[key] || deep)) triggerEmit(v);
		}, { deep });
		return proxy;
	} else return computed({
		get() {
			return getValue();
		},
		set(value) {
			triggerEmit(value);
		}
	});
}
/**
* Reactive Screen Wake Lock API.
*
* @see https://vueuse.org/useWakeLock
* @param options
*
* @__NO_SIDE_EFFECTS__
*/
function useWakeLock(options = {}) {
	const { navigator = defaultNavigator$1, document = defaultDocument$1 } = options;
	const requestedType = shallowRef(false);
	const sentinel = shallowRef(null);
	const documentVisibility = useDocumentVisibility({ document });
	const isSupported = /* @__PURE__ */ useSupported$1(() => navigator && "wakeLock" in navigator);
	const isActive = computed(() => !!sentinel.value && documentVisibility.value === "visible");
	if (isSupported.value) {
		useEventListener$1(sentinel, "release", () => {
			var _sentinel$value$type, _sentinel$value;
			requestedType.value = (_sentinel$value$type = (_sentinel$value = sentinel.value) === null || _sentinel$value === void 0 ? void 0 : _sentinel$value.type) !== null && _sentinel$value$type !== void 0 ? _sentinel$value$type : false;
		}, { passive: true });
		whenever(() => documentVisibility.value === "visible" && (document === null || document === void 0 ? void 0 : document.visibilityState) === "visible" && requestedType.value, (type) => {
			requestedType.value = false;
			forceRequest(type);
		});
	}
	async function forceRequest(type) {
		var _sentinel$value2;
		await ((_sentinel$value2 = sentinel.value) === null || _sentinel$value2 === void 0 ? void 0 : _sentinel$value2.release());
		sentinel.value = isSupported.value ? await navigator.wakeLock.request(type) : null;
	}
	async function request(type) {
		if (documentVisibility.value === "visible") await forceRequest(type);
		else requestedType.value = type;
	}
	async function release() {
		requestedType.value = false;
		const s = sentinel.value;
		sentinel.value = null;
		await (s === null || s === void 0 ? void 0 : s.release());
	}
	tryOnScopeDispose$1(() => {
		release();
	});
	return {
		sentinel,
		isSupported,
		isActive,
		request,
		forceRequest,
		release
	};
}
/**
* Reactively track window focus with `window.onfocus` and `window.onblur`.
*
* @see https://vueuse.org/useWindowFocus
*
* @__NO_SIDE_EFFECTS__
*/
function useWindowFocus(options = {}) {
	const { window = defaultWindow$1 } = options;
	if (!window) return shallowRef(false);
	const focused = shallowRef(window.document.hasFocus());
	const listenerOptions = { passive: true };
	useEventListener$1(window, "blur", () => {
		focused.value = false;
	}, listenerOptions);
	useEventListener$1(window, "focus", () => {
		focused.value = true;
	}, listenerOptions);
	return focused;
}
/**
* Reactive window size.
*
* @see https://vueuse.org/useWindowSize
* @param options
*
* @__NO_SIDE_EFFECTS__
*/
function useWindowSize(options = {}) {
	const { window = defaultWindow$1, initialWidth = Number.POSITIVE_INFINITY, initialHeight = Number.POSITIVE_INFINITY, listenOrientation = true, includeScrollbar = true, type = "inner" } = options;
	const width = shallowRef(initialWidth);
	const height = shallowRef(initialHeight);
	const update = () => {
		if (window) if (type === "outer") {
			width.value = window.outerWidth;
			height.value = window.outerHeight;
		} else if (type === "visual" && window.visualViewport) {
			const { width: visualViewportWidth, height: visualViewportHeight, scale } = window.visualViewport;
			width.value = Math.round(visualViewportWidth * scale);
			height.value = Math.round(visualViewportHeight * scale);
		} else if (includeScrollbar) {
			width.value = window.innerWidth;
			height.value = window.innerHeight;
		} else {
			width.value = window.document.documentElement.clientWidth;
			height.value = window.document.documentElement.clientHeight;
		}
	};
	update();
	tryOnMounted(update);
	const listenerOptions = { passive: true };
	useEventListener$1("resize", update, listenerOptions);
	if (window && type === "visual" && window.visualViewport) useEventListener$1(window.visualViewport, "resize", update, listenerOptions);
	if (listenOrientation) watch(useMediaQuery("(orientation: portrait)"), () => update());
	return {
		width,
		height
	};
}
//#endregion
//#region node_modules/defu/dist/defu.mjs
function isPlainObject(value) {
	if (value === null || typeof value !== "object") return false;
	const prototype = Object.getPrototypeOf(value);
	if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) return false;
	if (Symbol.iterator in value) return false;
	if (Symbol.toStringTag in value) return Object.prototype.toString.call(value) === "[object Module]";
	return true;
}
function _defu(baseObject, defaults, namespace = ".", merger) {
	if (!isPlainObject(defaults)) return _defu(baseObject, {}, namespace, merger);
	const object = { ...defaults };
	for (const key of Object.keys(baseObject)) {
		if (key === "__proto__" || key === "constructor") continue;
		const value = baseObject[key];
		if (value === null || value === void 0) continue;
		if (merger && merger(object, key, value, namespace)) continue;
		if (Array.isArray(value) && Array.isArray(object[key])) object[key] = [...value, ...object[key]];
		else if (isPlainObject(value) && isPlainObject(object[key])) object[key] = _defu(value, object[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
		else object[key] = value;
	}
	return object;
}
function createDefu(merger) {
	return (...arguments_) => arguments_.reduce((p, c) => _defu(p, c, "", merger), {});
}
var defu = createDefu();
//#endregion
//#region node_modules/@vueuse/motion/node_modules/@vueuse/shared/index.mjs
function tryOnScopeDispose(fn) {
	if (getCurrentScope()) {
		onScopeDispose(fn);
		return true;
	}
	return false;
}
var isClient = typeof window !== "undefined" && typeof document !== "undefined";
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
var notNullish = (val) => val != null;
var toString = Object.prototype.toString;
var isObject$1 = (val) => toString.call(val) === "[object Object]";
var noop = () => {};
function toArray(value) {
	return Array.isArray(value) ? value : [value];
}
function getLifeCycleTarget(target) {
	return target || getCurrentInstance();
}
function tryOnUnmounted(fn, target) {
	if (getLifeCycleTarget(target)) onUnmounted(fn, target);
}
function watchImmediate(source, cb, options) {
	return watch(source, cb, {
		...options,
		immediate: true
	});
}
//#endregion
//#region node_modules/@vueuse/motion/node_modules/@vueuse/core/index.mjs
var defaultWindow = isClient ? window : void 0;
isClient && window.document;
isClient && window.navigator;
isClient && window.location;
function unrefElement(elRef) {
	var _a;
	const plain = toValue(elRef);
	return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
function useEventListener(...args) {
	const cleanups = [];
	const cleanup = () => {
		cleanups.forEach((fn) => fn());
		cleanups.length = 0;
	};
	const register = (el, event, listener, options) => {
		el.addEventListener(event, listener, options);
		return () => el.removeEventListener(event, listener, options);
	};
	const firstParamTargets = computed(() => {
		const test = toArray(toValue(args[0])).filter((e) => e != null);
		return test.every((e) => typeof e !== "string") ? test : void 0;
	});
	const stopWatch = watchImmediate(() => {
		var _a, _b;
		return [
			(_b = (_a = firstParamTargets.value) == null ? void 0 : _a.map((e) => unrefElement(e))) != null ? _b : [defaultWindow].filter((e) => e != null),
			toArray(toValue(firstParamTargets.value ? args[1] : args[0])),
			toArray(unref(firstParamTargets.value ? args[2] : args[1])),
			toValue(firstParamTargets.value ? args[3] : args[2])
		];
	}, ([raw_targets, raw_events, raw_listeners, raw_options]) => {
		cleanup();
		if (!(raw_targets == null ? void 0 : raw_targets.length) || !(raw_events == null ? void 0 : raw_events.length) || !(raw_listeners == null ? void 0 : raw_listeners.length)) return;
		const optionsClone = isObject$1(raw_options) ? { ...raw_options } : raw_options;
		cleanups.push(...raw_targets.flatMap((el) => raw_events.flatMap((event) => raw_listeners.map((listener) => register(el, event, listener, optionsClone)))));
	}, { flush: "post" });
	const stop = () => {
		stopWatch();
		cleanup();
	};
	tryOnScopeDispose(cleanup);
	return stop;
}
// @__NO_SIDE_EFFECTS__
function useMounted() {
	const isMounted = shallowRef(false);
	const instance = getCurrentInstance();
	if (instance) onMounted(() => {
		isMounted.value = true;
	}, instance);
	return isMounted;
}
// @__NO_SIDE_EFFECTS__
function useSupported(callback) {
	const isMounted = /* @__PURE__ */ useMounted();
	return computed(() => {
		isMounted.value;
		return Boolean(callback());
	});
}
function useIntersectionObserver(target, callback, options = {}) {
	const { root, rootMargin = "0px", threshold = 0, window = defaultWindow, immediate = true } = options;
	const isSupported = /* @__PURE__ */ useSupported(() => window && "IntersectionObserver" in window);
	const targets = computed(() => {
		return toArray(toValue(target)).map(unrefElement).filter(notNullish);
	});
	let cleanup = noop;
	const isActive = shallowRef(immediate);
	const stopWatch = isSupported.value ? watch(() => [
		targets.value,
		unrefElement(root),
		isActive.value
	], ([targets2, root2]) => {
		cleanup();
		if (!isActive.value) return;
		if (!targets2.length) return;
		const observer = new IntersectionObserver(callback, {
			root: unrefElement(root2),
			rootMargin,
			threshold
		});
		targets2.forEach((el) => el && observer.observe(el));
		cleanup = () => {
			observer.disconnect();
			cleanup = noop;
		};
	}, {
		immediate,
		flush: "post"
	}) : noop;
	const stop = () => {
		cleanup();
		stopWatch();
		isActive.value = false;
	};
	tryOnScopeDispose(stop);
	return {
		isSupported,
		isActive,
		pause() {
			cleanup();
			isActive.value = false;
		},
		resume() {
			isActive.value = true;
		},
		stop
	};
}
Number.POSITIVE_INFINITY;
//#endregion
//#region node_modules/framesync/dist/es/on-next-frame.mjs
var defaultTimestep = 1 / 60 * 1e3;
var getCurrentTime = typeof performance !== "undefined" ? () => performance.now() : () => Date.now();
var onNextFrame = typeof window !== "undefined" ? (callback) => window.requestAnimationFrame(callback) : (callback) => setTimeout(() => callback(getCurrentTime()), defaultTimestep);
//#endregion
//#region node_modules/framesync/dist/es/create-render-step.mjs
function createRenderStep(runNextFrame) {
	let toRun = [];
	let toRunNextFrame = [];
	let numToRun = 0;
	let isProcessing = false;
	let flushNextFrame = false;
	const toKeepAlive = /* @__PURE__ */ new WeakSet();
	const step = {
		schedule: (callback, keepAlive = false, immediate = false) => {
			const addToCurrentFrame = immediate && isProcessing;
			const buffer = addToCurrentFrame ? toRun : toRunNextFrame;
			if (keepAlive) toKeepAlive.add(callback);
			if (buffer.indexOf(callback) === -1) {
				buffer.push(callback);
				if (addToCurrentFrame && isProcessing) numToRun = toRun.length;
			}
			return callback;
		},
		cancel: (callback) => {
			const index = toRunNextFrame.indexOf(callback);
			if (index !== -1) toRunNextFrame.splice(index, 1);
			toKeepAlive.delete(callback);
		},
		process: (frameData) => {
			if (isProcessing) {
				flushNextFrame = true;
				return;
			}
			isProcessing = true;
			[toRun, toRunNextFrame] = [toRunNextFrame, toRun];
			toRunNextFrame.length = 0;
			numToRun = toRun.length;
			if (numToRun) for (let i = 0; i < numToRun; i++) {
				const callback = toRun[i];
				callback(frameData);
				if (toKeepAlive.has(callback)) {
					step.schedule(callback);
					runNextFrame();
				}
			}
			isProcessing = false;
			if (flushNextFrame) {
				flushNextFrame = false;
				step.process(frameData);
			}
		}
	};
	return step;
}
//#endregion
//#region node_modules/framesync/dist/es/index.mjs
var maxElapsed = 40;
var useDefaultElapsed = true;
var runNextFrame = false;
var isProcessing = false;
var frame = {
	delta: 0,
	timestamp: 0
};
var stepsOrder = [
	"read",
	"update",
	"preRender",
	"render",
	"postRender"
];
var steps = stepsOrder.reduce((acc, key) => {
	acc[key] = createRenderStep(() => runNextFrame = true);
	return acc;
}, {});
var sync = stepsOrder.reduce((acc, key) => {
	const step = steps[key];
	acc[key] = (process, keepAlive = false, immediate = false) => {
		if (!runNextFrame) startLoop();
		return step.schedule(process, keepAlive, immediate);
	};
	return acc;
}, {});
var cancelSync = stepsOrder.reduce((acc, key) => {
	acc[key] = steps[key].cancel;
	return acc;
}, {});
stepsOrder.reduce((acc, key) => {
	acc[key] = () => steps[key].process(frame);
	return acc;
}, {});
var processStep = (stepId) => steps[stepId].process(frame);
var processFrame = (timestamp) => {
	runNextFrame = false;
	frame.delta = useDefaultElapsed ? defaultTimestep : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
	frame.timestamp = timestamp;
	isProcessing = true;
	stepsOrder.forEach(processStep);
	isProcessing = false;
	if (runNextFrame) {
		useDefaultElapsed = false;
		onNextFrame(processFrame);
	}
};
var startLoop = () => {
	runNextFrame = true;
	useDefaultElapsed = true;
	if (!isProcessing) onNextFrame(processFrame);
};
var getFrameData = () => frame;
//#endregion
//#region node_modules/popmotion/node_modules/tslib/tslib.es6.js
function __rest(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
}
//#endregion
//#region node_modules/popmotion/dist/es/utils/clamp.mjs
var clamp$1 = (min, max, v) => Math.min(Math.max(v, min), max);
//#endregion
//#region node_modules/popmotion/dist/es/animations/utils/find-spring.mjs
var safeMin = .001;
var minDuration = .01;
var minDamping = .05;
function findSpring({ duration = 800, bounce = .25, velocity = 0, mass = 1 }) {
	let envelope;
	let derivative;
	let dampingRatio = 1 - bounce;
	dampingRatio = clamp$1(minDamping, 1, dampingRatio);
	duration = clamp$1(minDuration, 10, duration / 1e3);
	if (dampingRatio < 1) {
		envelope = (undampedFreq) => {
			const exponentialDecay = undampedFreq * dampingRatio;
			const delta = exponentialDecay * duration;
			const a = exponentialDecay - velocity;
			const b = calcAngularFreq(undampedFreq, dampingRatio);
			const c = Math.exp(-delta);
			return safeMin - a / b * c;
		};
		derivative = (undampedFreq) => {
			const delta = undampedFreq * dampingRatio * duration;
			const d = delta * velocity + velocity;
			const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration;
			const f = Math.exp(-delta);
			const g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
			return (-envelope(undampedFreq) + safeMin > 0 ? -1 : 1) * ((d - e) * f) / g;
		};
	} else {
		envelope = (undampedFreq) => {
			return -.001 + Math.exp(-undampedFreq * duration) * ((undampedFreq - velocity) * duration + 1);
		};
		derivative = (undampedFreq) => {
			return Math.exp(-undampedFreq * duration) * ((velocity - undampedFreq) * (duration * duration));
		};
	}
	const initialGuess = 5 / duration;
	const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
	duration = duration * 1e3;
	if (isNaN(undampedFreq)) return {
		stiffness: 100,
		damping: 10,
		duration
	};
	else {
		const stiffness = Math.pow(undampedFreq, 2) * mass;
		return {
			stiffness,
			damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
			duration
		};
	}
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
	let result = initialGuess;
	for (let i = 1; i < rootIterations; i++) result = result - envelope(result) / derivative(result);
	return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
	return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}
//#endregion
//#region node_modules/popmotion/dist/es/animations/generators/spring.mjs
var durationKeys = ["duration", "bounce"];
var physicsKeys = [
	"stiffness",
	"damping",
	"mass"
];
function isSpringType(options, keys) {
	return keys.some((key) => options[key] !== void 0);
}
function getSpringOptions(options) {
	let springOptions = Object.assign({
		velocity: 0,
		stiffness: 100,
		damping: 10,
		mass: 1,
		isResolvedFromDuration: false
	}, options);
	if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
		const derived = findSpring(options);
		springOptions = Object.assign(Object.assign(Object.assign({}, springOptions), derived), {
			velocity: 0,
			mass: 1
		});
		springOptions.isResolvedFromDuration = true;
	}
	return springOptions;
}
function spring(_a) {
	var { from = 0, to = 1, restSpeed = 2, restDelta } = _a, options = __rest(_a, [
		"from",
		"to",
		"restSpeed",
		"restDelta"
	]);
	const state = {
		done: false,
		value: from
	};
	let { stiffness, damping, mass, velocity, duration, isResolvedFromDuration } = getSpringOptions(options);
	let resolveSpring = zero;
	let resolveVelocity = zero;
	function createSpring() {
		const initialVelocity = velocity ? -(velocity / 1e3) : 0;
		const initialDelta = to - from;
		const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
		const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1e3;
		if (restDelta === void 0) restDelta = Math.min(Math.abs(to - from) / 100, .4);
		if (dampingRatio < 1) {
			const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
			resolveSpring = (t) => {
				const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
				return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
			};
			resolveVelocity = (t) => {
				const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
				return dampingRatio * undampedAngularFreq * envelope * (Math.sin(angularFreq * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq + initialDelta * Math.cos(angularFreq * t)) - envelope * (Math.cos(angularFreq * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) - angularFreq * initialDelta * Math.sin(angularFreq * t));
			};
		} else if (dampingRatio === 1) resolveSpring = (t) => to - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
		else {
			const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
			resolveSpring = (t) => {
				const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
				const freqForT = Math.min(dampedAngularFreq * t, 300);
				return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
			};
		}
	}
	createSpring();
	return {
		next: (t) => {
			const current = resolveSpring(t);
			if (!isResolvedFromDuration) {
				const currentVelocity = resolveVelocity(t) * 1e3;
				const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
				const isBelowDisplacementThreshold = Math.abs(to - current) <= restDelta;
				state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
			} else state.done = t >= duration;
			state.value = state.done ? to : current;
			return state;
		},
		flipTarget: () => {
			velocity = -velocity;
			[from, to] = [to, from];
			createSpring();
		}
	};
}
spring.needsInterpolation = (a, b) => typeof a === "string" || typeof b === "string";
var zero = (_t) => 0;
//#endregion
//#region node_modules/popmotion/dist/es/utils/progress.mjs
var progress = (from, to, value) => {
	const toFromDifference = to - from;
	return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};
//#endregion
//#region node_modules/popmotion/dist/es/utils/mix.mjs
var mix = (from, to, progress) => -progress * from + progress * to + from;
//#endregion
//#region node_modules/style-value-types/dist/es/utils.mjs
var clamp = (min, max) => (v) => Math.max(Math.min(v, max), min);
var sanitize = (v) => v % 1 ? Number(v.toFixed(5)) : v;
var floatRegex = /(-)?([\d]*\.?[\d])+/g;
var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi;
var singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function isString(v) {
	return typeof v === "string";
}
//#endregion
//#region node_modules/style-value-types/dist/es/numbers/index.mjs
var number = {
	test: (v) => typeof v === "number",
	parse: parseFloat,
	transform: (v) => v
};
var alpha = Object.assign(Object.assign({}, number), { transform: clamp(0, 1) });
var scale = Object.assign(Object.assign({}, number), { default: 1 });
//#endregion
//#region node_modules/style-value-types/dist/es/numbers/units.mjs
var createUnitType = (unit) => ({
	test: (v) => isString(v) && v.endsWith(unit) && v.split(" ").length === 1,
	parse: parseFloat,
	transform: (v) => `${v}${unit}`
});
var degrees = createUnitType("deg");
var percent = createUnitType("%");
var px = createUnitType("px");
var progressPercentage = Object.assign(Object.assign({}, percent), {
	parse: (v) => percent.parse(v) / 100,
	transform: (v) => percent.transform(v * 100)
});
//#endregion
//#region node_modules/style-value-types/dist/es/color/utils.mjs
var isColorString = (type, testProp) => (v) => {
	return Boolean(isString(v) && singleColorRegex.test(v) && v.startsWith(type) || testProp && Object.prototype.hasOwnProperty.call(v, testProp));
};
var splitColor = (aName, bName, cName) => (v) => {
	if (!isString(v)) return v;
	const [a, b, c, alpha] = v.match(floatRegex);
	return {
		[aName]: parseFloat(a),
		[bName]: parseFloat(b),
		[cName]: parseFloat(c),
		alpha: alpha !== void 0 ? parseFloat(alpha) : 1
	};
};
//#endregion
//#region node_modules/style-value-types/dist/es/color/hsla.mjs
var hsla = {
	test: isColorString("hsl", "hue"),
	parse: splitColor("hue", "saturation", "lightness"),
	transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
		return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
	}
};
//#endregion
//#region node_modules/style-value-types/dist/es/color/rgba.mjs
var clampRgbUnit = clamp(0, 255);
var rgbUnit = Object.assign(Object.assign({}, number), { transform: (v) => Math.round(clampRgbUnit(v)) });
var rgba = {
	test: isColorString("rgb", "red"),
	parse: splitColor("red", "green", "blue"),
	transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};
//#endregion
//#region node_modules/style-value-types/dist/es/color/hex.mjs
function parseHex(v) {
	let r = "";
	let g = "";
	let b = "";
	let a = "";
	if (v.length > 5) {
		r = v.substr(1, 2);
		g = v.substr(3, 2);
		b = v.substr(5, 2);
		a = v.substr(7, 2);
	} else {
		r = v.substr(1, 1);
		g = v.substr(2, 1);
		b = v.substr(3, 1);
		a = v.substr(4, 1);
		r += r;
		g += g;
		b += b;
		a += a;
	}
	return {
		red: parseInt(r, 16),
		green: parseInt(g, 16),
		blue: parseInt(b, 16),
		alpha: a ? parseInt(a, 16) / 255 : 1
	};
}
var hex = {
	test: isColorString("#"),
	parse: parseHex,
	transform: rgba.transform
};
//#endregion
//#region node_modules/style-value-types/dist/es/color/index.mjs
var color = {
	test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
	parse: (v) => {
		if (rgba.test(v)) return rgba.parse(v);
		else if (hsla.test(v)) return hsla.parse(v);
		else return hex.parse(v);
	},
	transform: (v) => {
		return isString(v) ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
	}
};
//#endregion
//#region node_modules/style-value-types/dist/es/complex/index.mjs
var colorToken = "${c}";
var numberToken = "${n}";
function test(v) {
	var _a, _b, _c, _d;
	return isNaN(v) && isString(v) && ((_b = (_a = v.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = v.match(colorRegex)) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) > 0;
}
function analyse$1(v) {
	if (typeof v === "number") v = `${v}`;
	const values = [];
	let numColors = 0;
	const colors = v.match(colorRegex);
	if (colors) {
		numColors = colors.length;
		v = v.replace(colorRegex, colorToken);
		values.push(...colors.map(color.parse));
	}
	const numbers = v.match(floatRegex);
	if (numbers) {
		v = v.replace(floatRegex, numberToken);
		values.push(...numbers.map(number.parse));
	}
	return {
		values,
		numColors,
		tokenised: v
	};
}
function parse(v) {
	return analyse$1(v).values;
}
function createTransformer(v) {
	const { values, numColors, tokenised } = analyse$1(v);
	const numValues = values.length;
	return (v) => {
		let output = tokenised;
		for (let i = 0; i < numValues; i++) output = output.replace(i < numColors ? colorToken : numberToken, i < numColors ? color.transform(v[i]) : sanitize(v[i]));
		return output;
	};
}
var convertNumbersToZero = (v) => typeof v === "number" ? 0 : v;
function getAnimatableNone$1(v) {
	const parsed = parse(v);
	return createTransformer(v)(parsed.map(convertNumbersToZero));
}
var complex = {
	test,
	parse,
	createTransformer,
	getAnimatableNone: getAnimatableNone$1
};
//#endregion
//#region node_modules/style-value-types/dist/es/complex/filter.mjs
var maxDefaults = /* @__PURE__ */ new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function applyDefaultFilter(v) {
	let [name, value] = v.slice(0, -1).split("(");
	if (name === "drop-shadow") return v;
	const [number] = value.match(floatRegex) || [];
	if (!number) return v;
	const unit = value.replace(number, "");
	let defaultValue = maxDefaults.has(name) ? 1 : 0;
	if (number !== value) defaultValue *= 100;
	return name + "(" + defaultValue + unit + ")";
}
var functionRegex = /([a-z-]*)\(.*?\)/g;
var filter = Object.assign(Object.assign({}, complex), { getAnimatableNone: (v) => {
	const functions = v.match(functionRegex);
	return functions ? functions.map(applyDefaultFilter).join(" ") : v;
} });
//#endregion
//#region node_modules/popmotion/dist/es/utils/hsla-to-rgba.mjs
function hueToRgb(p, q, t) {
	if (t < 0) t += 1;
	if (t > 1) t -= 1;
	if (t < 1 / 6) return p + (q - p) * 6 * t;
	if (t < 1 / 2) return q;
	if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
	return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha }) {
	hue /= 360;
	saturation /= 100;
	lightness /= 100;
	let red = 0;
	let green = 0;
	let blue = 0;
	if (!saturation) red = green = blue = lightness;
	else {
		const q = lightness < .5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
		const p = 2 * lightness - q;
		red = hueToRgb(p, q, hue + 1 / 3);
		green = hueToRgb(p, q, hue);
		blue = hueToRgb(p, q, hue - 1 / 3);
	}
	return {
		red: Math.round(red * 255),
		green: Math.round(green * 255),
		blue: Math.round(blue * 255),
		alpha
	};
}
//#endregion
//#region node_modules/popmotion/dist/es/utils/mix-color.mjs
var mixLinearColor = (from, to, v) => {
	const fromExpo = from * from;
	const toExpo = to * to;
	return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
};
var colorTypes = [
	hex,
	rgba,
	hsla
];
var getColorType = (v) => colorTypes.find((type) => type.test(v));
var notAnimatable = (color) => `'${color}' is not an animatable color. Use the equivalent color code instead.`;
var mixColor = (from, to) => {
	let fromColorType = getColorType(from);
	let toColorType = getColorType(to);
	notAnimatable(from);
	notAnimatable(to);
	let fromColor = fromColorType.parse(from);
	let toColor = toColorType.parse(to);
	if (fromColorType === hsla) {
		fromColor = hslaToRgba(fromColor);
		fromColorType = rgba;
	}
	if (toColorType === hsla) {
		toColor = hslaToRgba(toColor);
		toColorType = rgba;
	}
	const blended = Object.assign({}, fromColor);
	return (v) => {
		for (const key in blended) if (key !== "alpha") blended[key] = mixLinearColor(fromColor[key], toColor[key], v);
		blended.alpha = mix(fromColor.alpha, toColor.alpha, v);
		return fromColorType.transform(blended);
	};
};
//#endregion
//#region node_modules/popmotion/dist/es/utils/inc.mjs
var isNum = (v) => typeof v === "number";
//#endregion
//#region node_modules/popmotion/dist/es/utils/pipe.mjs
var combineFunctions = (a, b) => (v) => b(a(v));
var pipe = (...transformers) => transformers.reduce(combineFunctions);
//#endregion
//#region node_modules/popmotion/dist/es/utils/mix-complex.mjs
function getMixer(origin, target) {
	if (isNum(origin)) return (v) => mix(origin, target, v);
	else if (color.test(origin)) return mixColor(origin, target);
	else return mixComplex(origin, target);
}
var mixArray = (from, to) => {
	const output = [...from];
	const numValues = output.length;
	const blendValue = from.map((fromThis, i) => getMixer(fromThis, to[i]));
	return (v) => {
		for (let i = 0; i < numValues; i++) output[i] = blendValue[i](v);
		return output;
	};
};
var mixObject = (origin, target) => {
	const output = Object.assign(Object.assign({}, origin), target);
	const blendValue = {};
	for (const key in output) if (origin[key] !== void 0 && target[key] !== void 0) blendValue[key] = getMixer(origin[key], target[key]);
	return (v) => {
		for (const key in blendValue) output[key] = blendValue[key](v);
		return output;
	};
};
function analyse(value) {
	const parsed = complex.parse(value);
	const numValues = parsed.length;
	let numNumbers = 0;
	let numRGB = 0;
	let numHSL = 0;
	for (let i = 0; i < numValues; i++) if (numNumbers || typeof parsed[i] === "number") numNumbers++;
	else if (parsed[i].hue !== void 0) numHSL++;
	else numRGB++;
	return {
		parsed,
		numNumbers,
		numRGB,
		numHSL
	};
}
var mixComplex = (origin, target) => {
	const template = complex.createTransformer(target);
	const originStats = analyse(origin);
	const targetStats = analyse(target);
	if (originStats.numHSL === targetStats.numHSL && originStats.numRGB === targetStats.numRGB && originStats.numNumbers >= targetStats.numNumbers) return pipe(mixArray(originStats.parsed, targetStats.parsed), template);
	else {
		`${origin}${target}`;
		return (p) => `${p > 0 ? target : origin}`;
	}
};
//#endregion
//#region node_modules/popmotion/dist/es/utils/interpolate.mjs
var mixNumber = (from, to) => (p) => mix(from, to, p);
function detectMixerFactory(v) {
	if (typeof v === "number") return mixNumber;
	else if (typeof v === "string") if (color.test(v)) return mixColor;
	else return mixComplex;
	else if (Array.isArray(v)) return mixArray;
	else if (typeof v === "object") return mixObject;
}
function createMixers(output, ease, customMixer) {
	const mixers = [];
	const mixerFactory = customMixer || detectMixerFactory(output[0]);
	const numMixers = output.length - 1;
	for (let i = 0; i < numMixers; i++) {
		let mixer = mixerFactory(output[i], output[i + 1]);
		if (ease) mixer = pipe(Array.isArray(ease) ? ease[i] : ease, mixer);
		mixers.push(mixer);
	}
	return mixers;
}
function fastInterpolate([from, to], [mixer]) {
	return (v) => mixer(progress(from, to, v));
}
function slowInterpolate(input, mixers) {
	const inputLength = input.length;
	const lastInputIndex = inputLength - 1;
	return (v) => {
		let mixerIndex = 0;
		let foundMixerIndex = false;
		if (v <= input[0]) foundMixerIndex = true;
		else if (v >= input[lastInputIndex]) {
			mixerIndex = lastInputIndex - 1;
			foundMixerIndex = true;
		}
		if (!foundMixerIndex) {
			let i = 1;
			for (; i < inputLength; i++) if (input[i] > v || i === lastInputIndex) break;
			mixerIndex = i - 1;
		}
		const progressInRange = progress(input[mixerIndex], input[mixerIndex + 1], v);
		return mixers[mixerIndex](progressInRange);
	};
}
function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
	const inputLength = input.length;
	output.length;
	!ease || !Array.isArray(ease) || (ease.length, inputLength - 1);
	if (input[0] > input[inputLength - 1]) {
		input = [].concat(input);
		output = [].concat(output);
		input.reverse();
		output.reverse();
	}
	const mixers = createMixers(output, ease, mixer);
	const interpolator = inputLength === 2 ? fastInterpolate(input, mixers) : slowInterpolate(input, mixers);
	return isClamp ? (v) => interpolator(clamp$1(input[0], input[inputLength - 1], v)) : interpolator;
}
//#endregion
//#region node_modules/popmotion/dist/es/easing/utils.mjs
var reverseEasing = (easing) => (p) => 1 - easing(1 - p);
var mirrorEasing = (easing) => (p) => p <= .5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
var createExpoIn = (power) => (p) => Math.pow(p, power);
var createBackIn = (power) => (p) => p * p * ((power + 1) * p - power);
var createAnticipate = (power) => {
	const backEasing = createBackIn(power);
	return (p) => (p *= 2) < 1 ? .5 * backEasing(p) : .5 * (2 - Math.pow(2, -10 * (p - 1)));
};
//#endregion
//#region node_modules/popmotion/dist/es/easing/index.mjs
var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
var BOUNCE_FIRST_THRESHOLD = 4 / 11;
var BOUNCE_SECOND_THRESHOLD = 8 / 11;
var BOUNCE_THIRD_THRESHOLD = 9 / 10;
var linear = (p) => p;
var easeIn = createExpoIn(2);
var easeOut = reverseEasing(easeIn);
var easeInOut = mirrorEasing(easeIn);
var circIn = (p) => 1 - Math.sin(Math.acos(p));
var circOut = reverseEasing(circIn);
var circInOut = mirrorEasing(circOut);
var backIn = createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
var backOut = reverseEasing(backIn);
var backInOut = mirrorEasing(backIn);
var anticipate = createAnticipate(DEFAULT_OVERSHOOT_STRENGTH);
var ca = 4356 / 361;
var cb = 35442 / 1805;
var cc = 16061 / 1805;
var bounceOut = (p) => {
	if (p === 1 || p === 0) return p;
	const p2 = p * p;
	return p < BOUNCE_FIRST_THRESHOLD ? 7.5625 * p2 : p < BOUNCE_SECOND_THRESHOLD ? 9.075 * p2 - 9.9 * p + 3.4 : p < BOUNCE_THIRD_THRESHOLD ? ca * p2 - cb * p + cc : 10.8 * p * p - 20.52 * p + 10.72;
};
var bounceIn = reverseEasing(bounceOut);
var bounceInOut = (p) => p < .5 ? .5 * (1 - bounceOut(1 - p * 2)) : .5 * bounceOut(p * 2 - 1) + .5;
//#endregion
//#region node_modules/popmotion/dist/es/animations/generators/keyframes.mjs
function defaultEasing(values, easing) {
	return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function defaultOffset(values) {
	const numValues = values.length;
	return values.map((_value, i) => i !== 0 ? i / (numValues - 1) : 0);
}
function convertOffsetToTimes(offset, duration) {
	return offset.map((o) => o * duration);
}
function keyframes$1({ from = 0, to = 1, ease, offset, duration = 300 }) {
	const state = {
		done: false,
		value: from
	};
	const values = Array.isArray(to) ? to : [from, to];
	const times = convertOffsetToTimes(offset && offset.length === values.length ? offset : defaultOffset(values), duration);
	function createInterpolator() {
		return interpolate(times, values, { ease: Array.isArray(ease) ? ease : defaultEasing(values, ease) });
	}
	let interpolator = createInterpolator();
	return {
		next: (t) => {
			state.value = interpolator(t);
			state.done = t >= duration;
			return state;
		},
		flipTarget: () => {
			values.reverse();
			interpolator = createInterpolator();
		}
	};
}
//#endregion
//#region node_modules/popmotion/dist/es/animations/generators/decay.mjs
function decay({ velocity = 0, from = 0, power = .8, timeConstant = 350, restDelta = .5, modifyTarget }) {
	const state = {
		done: false,
		value: from
	};
	let amplitude = power * velocity;
	const ideal = from + amplitude;
	const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
	if (target !== ideal) amplitude = target - from;
	return {
		next: (t) => {
			const delta = -amplitude * Math.exp(-t / timeConstant);
			state.done = !(delta > restDelta || delta < -restDelta);
			state.value = state.done ? target : target + delta;
			return state;
		},
		flipTarget: () => {}
	};
}
//#endregion
//#region node_modules/popmotion/dist/es/animations/utils/detect-animation-from-options.mjs
var types = {
	keyframes: keyframes$1,
	spring,
	decay
};
function detectAnimationFromOptions(config) {
	if (Array.isArray(config.to)) return keyframes$1;
	else if (types[config.type]) return types[config.type];
	const keys = new Set(Object.keys(config));
	if (keys.has("ease") || keys.has("duration") && !keys.has("dampingRatio")) return keyframes$1;
	else if (keys.has("dampingRatio") || keys.has("stiffness") || keys.has("mass") || keys.has("damping") || keys.has("restSpeed") || keys.has("restDelta")) return spring;
	return keyframes$1;
}
//#endregion
//#region node_modules/popmotion/dist/es/animations/utils/elapsed.mjs
function loopElapsed(elapsed, duration, delay = 0) {
	return elapsed - duration - delay;
}
function reverseElapsed(elapsed, duration, delay = 0, isForwardPlayback = true) {
	return isForwardPlayback ? loopElapsed(duration + -elapsed, duration, delay) : duration - (elapsed - duration) + delay;
}
function hasRepeatDelayElapsed(elapsed, duration, delay, isForwardPlayback) {
	return isForwardPlayback ? elapsed >= duration + delay : elapsed <= -delay;
}
//#endregion
//#region node_modules/popmotion/dist/es/animations/index.mjs
var framesync = (update) => {
	const passTimestamp = ({ delta }) => update(delta);
	return {
		start: () => sync.update(passTimestamp, true),
		stop: () => cancelSync.update(passTimestamp)
	};
};
function animate(_a) {
	var _b, _c;
	var { from, autoplay = true, driver = framesync, elapsed = 0, repeat: repeatMax = 0, repeatType = "loop", repeatDelay = 0, onPlay, onStop, onComplete, onRepeat, onUpdate } = _a, options = __rest(_a, [
		"from",
		"autoplay",
		"driver",
		"elapsed",
		"repeat",
		"repeatType",
		"repeatDelay",
		"onPlay",
		"onStop",
		"onComplete",
		"onRepeat",
		"onUpdate"
	]);
	let { to } = options;
	let driverControls;
	let repeatCount = 0;
	let computedDuration = options.duration;
	let latest;
	let isComplete = false;
	let isForwardPlayback = true;
	let interpolateFromNumber;
	const animator = detectAnimationFromOptions(options);
	if ((_c = (_b = animator).needsInterpolation) === null || _c === void 0 ? void 0 : _c.call(_b, from, to)) {
		interpolateFromNumber = interpolate([0, 100], [from, to], { clamp: false });
		from = 0;
		to = 100;
	}
	const animation = animator(Object.assign(Object.assign({}, options), {
		from,
		to
	}));
	function repeat() {
		repeatCount++;
		if (repeatType === "reverse") {
			isForwardPlayback = repeatCount % 2 === 0;
			elapsed = reverseElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback);
		} else {
			elapsed = loopElapsed(elapsed, computedDuration, repeatDelay);
			if (repeatType === "mirror") animation.flipTarget();
		}
		isComplete = false;
		onRepeat && onRepeat();
	}
	function complete() {
		driverControls.stop();
		onComplete && onComplete();
	}
	function update(delta) {
		if (!isForwardPlayback) delta = -delta;
		elapsed += delta;
		if (!isComplete) {
			const state = animation.next(Math.max(0, elapsed));
			latest = state.value;
			if (interpolateFromNumber) latest = interpolateFromNumber(latest);
			isComplete = isForwardPlayback ? state.done : elapsed <= 0;
		}
		onUpdate === null || onUpdate === void 0 || onUpdate(latest);
		if (isComplete) {
			if (repeatCount === 0) computedDuration !== null && computedDuration !== void 0 || (computedDuration = elapsed);
			if (repeatCount < repeatMax) hasRepeatDelayElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback) && repeat();
			else complete();
		}
	}
	function play() {
		onPlay === null || onPlay === void 0 || onPlay();
		driverControls = driver(update);
		driverControls.start();
	}
	autoplay && play();
	return { stop: () => {
		onStop === null || onStop === void 0 || onStop();
		driverControls.stop();
	} };
}
//#endregion
//#region node_modules/popmotion/dist/es/utils/velocity-per-second.mjs
function velocityPerSecond(velocity, frameDuration) {
	return frameDuration ? velocity * (1e3 / frameDuration) : 0;
}
//#endregion
//#region node_modules/popmotion/dist/es/animations/inertia.mjs
function inertia({ from = 0, velocity = 0, min, max, power = .8, timeConstant = 750, bounceStiffness = 500, bounceDamping = 10, restDelta = 1, modifyTarget, driver, onUpdate, onComplete, onStop }) {
	let currentAnimation;
	function isOutOfBounds(v) {
		return min !== void 0 && v < min || max !== void 0 && v > max;
	}
	function boundaryNearest(v) {
		if (min === void 0) return max;
		if (max === void 0) return min;
		return Math.abs(min - v) < Math.abs(max - v) ? min : max;
	}
	function startAnimation(options) {
		currentAnimation === null || currentAnimation === void 0 || currentAnimation.stop();
		currentAnimation = animate(Object.assign(Object.assign({}, options), {
			driver,
			onUpdate: (v) => {
				var _a;
				onUpdate === null || onUpdate === void 0 || onUpdate(v);
				(_a = options.onUpdate) === null || _a === void 0 || _a.call(options, v);
			},
			onComplete,
			onStop
		}));
	}
	function startSpring(options) {
		startAnimation(Object.assign({
			type: "spring",
			stiffness: bounceStiffness,
			damping: bounceDamping,
			restDelta
		}, options));
	}
	if (isOutOfBounds(from)) startSpring({
		from,
		velocity,
		to: boundaryNearest(from)
	});
	else {
		let target = power * velocity + from;
		if (typeof modifyTarget !== "undefined") target = modifyTarget(target);
		const boundary = boundaryNearest(target);
		const heading = boundary === min ? -1 : 1;
		let prev;
		let current;
		const checkBoundary = (v) => {
			prev = current;
			current = v;
			velocity = velocityPerSecond(v - prev, getFrameData().delta);
			if (heading === 1 && v > boundary || heading === -1 && v < boundary) startSpring({
				from: v,
				to: boundary,
				velocity
			});
		};
		startAnimation({
			type: "decay",
			from,
			velocity,
			timeConstant,
			power,
			restDelta,
			modifyTarget,
			onUpdate: isOutOfBounds(target) ? checkBoundary : void 0
		});
	}
	return { stop: () => currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop() };
}
//#endregion
//#region node_modules/popmotion/dist/es/easing/cubic-bezier.mjs
var a = (a1, a2) => 1 - 3 * a2 + 3 * a1;
var b = (a1, a2) => 3 * a2 - 6 * a1;
var c = (a1) => 3 * a1;
var calcBezier = (t, a1, a2) => ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
var getSlope = (t, a1, a2) => 3 * a(a1, a2) * t * t + 2 * b(a1, a2) * t + c(a1);
var subdivisionPrecision = 1e-7;
var subdivisionMaxIterations = 10;
function binarySubdivide(aX, aA, aB, mX1, mX2) {
	let currentX;
	let currentT;
	let i = 0;
	do {
		currentT = aA + (aB - aA) / 2;
		currentX = calcBezier(currentT, mX1, mX2) - aX;
		if (currentX > 0) aB = currentT;
		else aA = currentT;
	} while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
	return currentT;
}
var newtonIterations = 8;
var newtonMinSlope = .001;
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
	for (let i = 0; i < newtonIterations; ++i) {
		const currentSlope = getSlope(aGuessT, mX1, mX2);
		if (currentSlope === 0) return aGuessT;
		const currentX = calcBezier(aGuessT, mX1, mX2) - aX;
		aGuessT -= currentX / currentSlope;
	}
	return aGuessT;
}
var kSplineTableSize = 11;
var kSampleStepSize = 1 / (kSplineTableSize - 1);
function cubicBezier(mX1, mY1, mX2, mY2) {
	if (mX1 === mY1 && mX2 === mY2) return linear;
	const sampleValues = new Float32Array(kSplineTableSize);
	for (let i = 0; i < kSplineTableSize; ++i) sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
	function getTForX(aX) {
		let intervalStart = 0;
		let currentSample = 1;
		const lastSample = kSplineTableSize - 1;
		for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) intervalStart += kSampleStepSize;
		--currentSample;
		const dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
		const guessForT = intervalStart + dist * kSampleStepSize;
		const initialSlope = getSlope(guessForT, mX1, mX2);
		if (initialSlope >= newtonMinSlope) return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
		else if (initialSlope === 0) return guessForT;
		else return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
	}
	return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}
//#endregion
//#region node_modules/@vueuse/motion/dist/index.mjs
var motionState = {};
var SubscriptionManager = class {
	constructor() {
		_defineProperty(this, "subscriptions", /* @__PURE__ */ new Set());
	}
	add(handler) {
		this.subscriptions.add(handler);
		return () => this.subscriptions.delete(handler);
	}
	notify(a, b, c) {
		if (!this.subscriptions.size) return;
		for (const handler of this.subscriptions) handler(a, b, c);
	}
	clear() {
		this.subscriptions.clear();
	}
};
function isFloat(value) {
	return !Number.isNaN(Number.parseFloat(value));
}
var MotionValue = class {
	/**
	* init - The initiating value
	* config - Optional configuration options
	*/
	constructor(init) {
		_defineProperty(
			this,
			/**
			* The current state of the `MotionValue`.
			*/
			"current",
			void 0
		);
		_defineProperty(
			this,
			/**
			* The previous state of the `MotionValue`.
			*/
			"prev",
			void 0
		);
		_defineProperty(
			this,
			/**
			* Duration, in milliseconds, since last updating frame.
			*/
			"timeDelta",
			0
		);
		_defineProperty(
			this,
			/**
			* Timestamp of the last time this `MotionValue` was updated.
			*/
			"lastUpdated",
			0
		);
		_defineProperty(
			this,
			/**
			* Functions to notify when the `MotionValue` updates.
			*/
			"updateSubscribers",
			new SubscriptionManager()
		);
		_defineProperty(
			this,
			/**
			* A reference to the currently-controlling Popmotion animation
			*/
			"stopAnimation",
			void 0
		);
		_defineProperty(
			this,
			/**
			* Tracks whether this value can output a velocity.
			*/
			"canTrackVelocity",
			false
		);
		_defineProperty(
			this,
			/**
			* Update and notify `MotionValue` subscribers.
			*
			* @param v
			* @param render
			*/
			"updateAndNotify",
			(v) => {
				this.prev = this.current;
				this.current = v;
				const { delta, timestamp } = getFrameData();
				if (this.lastUpdated !== timestamp) {
					this.timeDelta = delta;
					this.lastUpdated = timestamp;
				}
				sync.postRender(this.scheduleVelocityCheck);
				this.updateSubscribers.notify(this.current);
			}
		);
		_defineProperty(
			this,
			/**
			* Schedule a velocity check for the next frame.
			*/
			"scheduleVelocityCheck",
			() => sync.postRender(this.velocityCheck)
		);
		_defineProperty(
			this,
			/**
			* Updates `prev` with `current` if the value hasn't been updated this frame.
			* This ensures velocity calculations return `0`.
			*/
			"velocityCheck",
			({ timestamp }) => {
				if (!this.canTrackVelocity) this.canTrackVelocity = isFloat(this.current);
				if (timestamp !== this.lastUpdated) this.prev = this.current;
			}
		);
		this.prev = this.current = init;
		this.canTrackVelocity = isFloat(this.current);
	}
	/**
	* Adds a function that will be notified when the `MotionValue` is updated.
	*
	* It returns a function that, when called, will cancel the subscription.
	*/
	onChange(subscription) {
		return this.updateSubscribers.add(subscription);
	}
	clearListeners() {
		this.updateSubscribers.clear();
	}
	/**
	* Sets the state of the `MotionValue`.
	*
	* @param v
	* @param render
	*/
	set(v) {
		this.updateAndNotify(v);
	}
	/**
	* Returns the latest state of `MotionValue`
	*
	* @returns - The latest state of `MotionValue`
	*/
	get() {
		return this.current;
	}
	/**
	* Get previous value.
	*
	* @returns - The previous latest state of `MotionValue`
	*/
	getPrevious() {
		return this.prev;
	}
	/**
	* Returns the latest velocity of `MotionValue`
	*
	* @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
	*/
	getVelocity() {
		return this.canTrackVelocity ? velocityPerSecond(Number.parseFloat(this.current) - Number.parseFloat(this.prev), this.timeDelta) : 0;
	}
	/**
	* Registers a new animation to control this `MotionValue`. Only one
	* animation can drive a `MotionValue` at one time.
	*/
	start(animation) {
		this.stop();
		return new Promise((resolve) => {
			const { stop } = animation(resolve);
			this.stopAnimation = stop;
		}).then(() => this.clearAnimation());
	}
	/**
	* Stop the currently active animation.
	*/
	stop() {
		if (this.stopAnimation) this.stopAnimation();
		this.clearAnimation();
	}
	/**
	* Returns `true` if this value is currently animating.
	*/
	isAnimating() {
		return !!this.stopAnimation;
	}
	/**
	* Clear the current animation reference.
	*/
	clearAnimation() {
		this.stopAnimation = null;
	}
	/**
	* Destroy and clean up subscribers to this `MotionValue`.
	*/
	destroy() {
		this.updateSubscribers.clear();
		this.stop();
	}
};
function getMotionValue(init) {
	return new MotionValue(init);
}
var { isArray } = Array;
function useMotionValues() {
	const motionValues = ref({});
	const stop = (keys) => {
		const destroyKey = (key) => {
			if (!motionValues.value[key]) return;
			motionValues.value[key].stop();
			motionValues.value[key].destroy();
			delete motionValues.value[key];
		};
		if (keys) if (isArray(keys)) keys.forEach(destroyKey);
		else destroyKey(keys);
		else Object.keys(motionValues.value).forEach(destroyKey);
	};
	const get = (key, from, target) => {
		if (motionValues.value[key]) return motionValues.value[key];
		const motionValue = getMotionValue(from);
		motionValue.onChange((v) => target[key] = v);
		motionValues.value[key] = motionValue;
		return motionValue;
	};
	tryOnUnmounted(stop);
	return {
		motionValues,
		get,
		stop
	};
}
function isKeyframesTarget(v) {
	return Array.isArray(v);
}
function underDampedSpring() {
	return {
		type: "spring",
		stiffness: 500,
		damping: 25,
		restDelta: .5,
		restSpeed: 10
	};
}
function criticallyDampedSpring(to) {
	return {
		type: "spring",
		stiffness: 550,
		damping: to === 0 ? 2 * Math.sqrt(550) : 30,
		restDelta: .01,
		restSpeed: 10
	};
}
function overDampedSpring(to) {
	return {
		type: "spring",
		stiffness: 550,
		damping: to === 0 ? 100 : 30,
		restDelta: .01,
		restSpeed: 10
	};
}
function linearTween() {
	return {
		type: "keyframes",
		ease: "linear",
		duration: 300
	};
}
function keyframes(values) {
	return {
		type: "keyframes",
		duration: 800,
		values
	};
}
var defaultTransitions = {
	default: overDampedSpring,
	x: underDampedSpring,
	y: underDampedSpring,
	z: underDampedSpring,
	rotate: underDampedSpring,
	rotateX: underDampedSpring,
	rotateY: underDampedSpring,
	rotateZ: underDampedSpring,
	scaleX: criticallyDampedSpring,
	scaleY: criticallyDampedSpring,
	scale: criticallyDampedSpring,
	backgroundColor: linearTween,
	color: linearTween,
	opacity: linearTween
};
function getDefaultTransition(valueKey, to) {
	let transitionFactory;
	if (isKeyframesTarget(to)) transitionFactory = keyframes;
	else transitionFactory = defaultTransitions[valueKey] || defaultTransitions.default;
	return {
		to,
		...transitionFactory(to)
	};
}
var int = {
	...number,
	transform: Math.round
};
var valueTypes = {
	color,
	backgroundColor: color,
	outlineColor: color,
	fill: color,
	stroke: color,
	borderColor: color,
	borderTopColor: color,
	borderRightColor: color,
	borderBottomColor: color,
	borderLeftColor: color,
	borderWidth: px,
	borderTopWidth: px,
	borderRightWidth: px,
	borderBottomWidth: px,
	borderLeftWidth: px,
	borderRadius: px,
	radius: px,
	borderTopLeftRadius: px,
	borderTopRightRadius: px,
	borderBottomRightRadius: px,
	borderBottomLeftRadius: px,
	width: px,
	maxWidth: px,
	height: px,
	maxHeight: px,
	size: px,
	top: px,
	right: px,
	bottom: px,
	left: px,
	padding: px,
	paddingTop: px,
	paddingRight: px,
	paddingBottom: px,
	paddingLeft: px,
	margin: px,
	marginTop: px,
	marginRight: px,
	marginBottom: px,
	marginLeft: px,
	rotate: degrees,
	rotateX: degrees,
	rotateY: degrees,
	rotateZ: degrees,
	scale,
	scaleX: scale,
	scaleY: scale,
	scaleZ: scale,
	skew: degrees,
	skewX: degrees,
	skewY: degrees,
	distance: px,
	translateX: px,
	translateY: px,
	translateZ: px,
	x: px,
	y: px,
	z: px,
	perspective: px,
	transformPerspective: px,
	opacity: alpha,
	originX: progressPercentage,
	originY: progressPercentage,
	originZ: px,
	zIndex: int,
	filter,
	WebkitFilter: filter,
	fillOpacity: alpha,
	strokeOpacity: alpha,
	numOctaves: int
};
var getValueType = (key) => valueTypes[key];
function getValueAsType(value, type) {
	return type && typeof value === "number" && type.transform ? type.transform(value) : value;
}
function getAnimatableNone(key, value) {
	let defaultValueType = getValueType(key);
	if (defaultValueType !== filter) defaultValueType = complex;
	return defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : void 0;
}
var easingLookup = {
	linear,
	easeIn,
	easeInOut,
	easeOut,
	circIn,
	circInOut,
	circOut,
	backIn,
	backInOut,
	backOut,
	anticipate,
	bounceIn,
	bounceInOut,
	bounceOut
};
function easingDefinitionToFunction(definition) {
	if (Array.isArray(definition)) {
		const [x1, y1, x2, y2] = definition;
		return cubicBezier(x1, y1, x2, y2);
	} else if (typeof definition === "string") return easingLookup[definition];
	return definition;
}
function isEasingArray(ease) {
	return Array.isArray(ease) && typeof ease[0] !== "number";
}
function isAnimatable(key, value) {
	if (key === "zIndex") return false;
	if (typeof value === "number" || Array.isArray(value)) return true;
	if (typeof value === "string" && complex.test(value) && !value.startsWith("url(")) return true;
	return false;
}
function hydrateKeyframes(options) {
	if (Array.isArray(options.to) && options.to[0] === null) {
		options.to = [...options.to];
		options.to[0] = options.from;
	}
	return options;
}
function convertTransitionToAnimationOptions({ ease, times, delay, ...transition }) {
	const options = { ...transition };
	if (times) options.offset = times;
	if (ease) options.ease = isEasingArray(ease) ? ease.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease);
	if (delay) options.elapsed = -delay;
	return options;
}
function getPopmotionAnimationOptions(transition, options, key) {
	if (Array.isArray(options.to)) {
		if (!transition.duration) transition.duration = 800;
	}
	hydrateKeyframes(options);
	if (!isTransitionDefined(transition)) transition = {
		...transition,
		...getDefaultTransition(key, options.to)
	};
	return {
		...options,
		...convertTransitionToAnimationOptions(transition)
	};
}
function isTransitionDefined({ delay, repeat, repeatType, repeatDelay, from, ...transition }) {
	return !!Object.keys(transition).length;
}
function getValueTransition(transition, key) {
	return transition[key] || transition.default || transition;
}
function getAnimation(key, value, target, transition, onComplete) {
	const valueTransition = getValueTransition(transition, key);
	let origin = valueTransition.from === null || valueTransition.from === void 0 ? value.get() : valueTransition.from;
	const isTargetAnimatable = isAnimatable(key, target);
	if (origin === "none" && isTargetAnimatable && typeof target === "string") origin = getAnimatableNone(key, target);
	const isOriginAnimatable = isAnimatable(key, origin);
	function start(complete) {
		const options = {
			from: origin,
			to: target,
			velocity: transition.velocity ? transition.velocity : value.getVelocity(),
			onUpdate: (v) => value.set(v)
		};
		return valueTransition.type === "inertia" || valueTransition.type === "decay" ? inertia({
			...options,
			...valueTransition
		}) : animate({
			...getPopmotionAnimationOptions(valueTransition, options, key),
			onUpdate: (v) => {
				options.onUpdate(v);
				if (valueTransition.onUpdate) valueTransition.onUpdate(v);
			},
			onComplete: () => {
				if (onComplete) onComplete();
				if (complete) complete();
			}
		});
	}
	function set(complete) {
		value.set(target);
		if (onComplete) onComplete();
		if (complete) complete();
		return { stop: () => {} };
	}
	return !isOriginAnimatable || !isTargetAnimatable || valueTransition.type === false ? set : start;
}
function useMotionTransitions() {
	const { motionValues, stop, get } = useMotionValues();
	const push = (key, value, target, transition = {}, onComplete) => {
		const from = target[key];
		const motionValue = get(key, from, target);
		if (transition && transition.immediate) {
			motionValue.set(value);
			return;
		}
		const animation = getAnimation(key, motionValue, value, transition, onComplete);
		motionValue.start(animation);
	};
	return {
		motionValues,
		stop,
		push
	};
}
function useMotionControls(motionProperties, variants = {}, { motionValues, push, stop } = useMotionTransitions()) {
	const _variants = unref(variants);
	const isAnimating = ref(false);
	watch(motionValues, (newVal) => {
		isAnimating.value = Object.values(newVal).filter((value) => value.isAnimating()).length > 0;
	}, {
		immediate: true,
		deep: true
	});
	const getVariantFromKey = (variant) => {
		if (!_variants || !_variants[variant]) throw new Error(`The variant ${variant} does not exist.`);
		return _variants[variant];
	};
	const apply = (variant) => {
		if (typeof variant === "string") variant = getVariantFromKey(variant);
		const animations = Object.entries(variant).map(([key, value]) => {
			if (key === "transition") return void 0;
			return new Promise((resolve) => push(key, value, motionProperties, variant.transition || getDefaultTransition(key, variant[key]), resolve));
		}).filter(Boolean);
		async function waitForComplete() {
			await Promise.all(animations);
			variant.transition?.onComplete?.();
		}
		return Promise.all([waitForComplete()]);
	};
	const set = (variant) => {
		const variantData = isObject$1(variant) ? variant : getVariantFromKey(variant);
		Object.entries(variantData).forEach(([key, value]) => {
			if (key === "transition") return;
			push(key, value, motionProperties, { immediate: true });
		});
	};
	const leave = async (done) => {
		let leaveVariant;
		if (_variants) {
			if (_variants.leave) leaveVariant = _variants.leave;
			if (!_variants.leave && _variants.initial) leaveVariant = _variants.initial;
		}
		if (!leaveVariant) {
			done();
			return;
		}
		await apply(leaveVariant);
		done();
	};
	return {
		isAnimating,
		apply,
		set,
		leave,
		stop
	};
}
var isBrowser = typeof window !== "undefined";
var supportsPointerEvents = () => isBrowser && (window.onpointerdown === null || void 0);
var supportsTouchEvents = () => isBrowser && (window.ontouchstart === null || void 0);
var supportsMouseEvents = () => isBrowser && (window.onmousedown === null || void 0);
function registerEventListeners({ target, state, variants, apply }) {
	const _variants = unref(variants);
	const hovered = ref(false);
	const tapped = ref(false);
	const focused = ref(false);
	const mutableKeys = computed(() => {
		let result = [...Object.keys(state.value || {})];
		if (!_variants) return result;
		if (_variants.hovered) result = [...result, ...Object.keys(_variants.hovered)];
		if (_variants.tapped) result = [...result, ...Object.keys(_variants.tapped)];
		if (_variants.focused) result = [...result, ...Object.keys(_variants.focused)];
		return result;
	});
	const computedProperties = computed(() => {
		const result = {};
		Object.assign(result, state.value);
		if (hovered.value && _variants.hovered) Object.assign(result, _variants.hovered);
		if (tapped.value && _variants.tapped) Object.assign(result, _variants.tapped);
		if (focused.value && _variants.focused) Object.assign(result, _variants.focused);
		for (const key in result) if (!mutableKeys.value.includes(key)) delete result[key];
		return result;
	});
	if (_variants.hovered) {
		useEventListener(target, "mouseenter", () => hovered.value = true);
		useEventListener(target, "mouseleave", () => {
			hovered.value = false;
			tapped.value = false;
		});
	}
	if (_variants.tapped) {
		if (supportsMouseEvents()) {
			useEventListener(target, "mousedown", () => tapped.value = true);
			useEventListener(target, "mouseup", () => tapped.value = false);
		}
		if (supportsPointerEvents()) {
			useEventListener(target, "pointerdown", () => tapped.value = true);
			useEventListener(target, "pointerup", () => tapped.value = false);
		}
		if (supportsTouchEvents()) {
			useEventListener(target, "touchstart", () => tapped.value = true);
			useEventListener(target, "touchend", () => tapped.value = false);
		}
	}
	if (_variants.focused) {
		useEventListener(target, "focus", () => focused.value = true);
		useEventListener(target, "blur", () => focused.value = false);
	}
	watch([
		hovered,
		tapped,
		focused
	], () => {
		apply(computedProperties.value);
	});
}
function registerLifeCycleHooks({ set, target, variants, variant }) {
	const _variants = unref(variants);
	watch(() => target, () => {
		if (!_variants) return;
		if (_variants.initial) {
			set("initial");
			variant.value = "initial";
		}
		if (_variants.enter) variant.value = "enter";
	}, {
		immediate: true,
		flush: "pre"
	});
}
function registerVariantsSync({ state, apply }) {
	watch(state, (newVal) => {
		if (newVal) apply(newVal);
	}, { immediate: true });
}
function registerVisibilityHooks({ target, variants, variant }) {
	const _variants = unref(variants);
	if (_variants && (_variants.visible || _variants.visibleOnce)) useIntersectionObserver(target, ([{ isIntersecting }]) => {
		if (_variants.visible) if (isIntersecting) variant.value = "visible";
		else variant.value = "initial";
		else if (_variants.visibleOnce) {
			if (isIntersecting && variant.value !== "visibleOnce") variant.value = "visibleOnce";
			else if (!variant.value) variant.value = "initial";
		}
	});
}
function useMotionFeatures(instance, options = {
	syncVariants: true,
	lifeCycleHooks: true,
	visibilityHooks: true,
	eventListeners: true
}) {
	if (options.lifeCycleHooks) registerLifeCycleHooks(instance);
	if (options.syncVariants) registerVariantsSync(instance);
	if (options.visibilityHooks) registerVisibilityHooks(instance);
	if (options.eventListeners) registerEventListeners(instance);
}
function reactiveStyle(props = {}) {
	const state = reactive({ ...props });
	const style = ref({});
	watch(state, () => {
		const result = {};
		for (const [key, value] of Object.entries(state)) result[key] = getValueAsType(value, getValueType(key));
		style.value = result;
	}, {
		immediate: true,
		deep: true
	});
	return {
		state,
		style
	};
}
function usePermissiveTarget(target, onTarget) {
	watch(() => unrefElement(target), (el) => {
		if (!el) return;
		onTarget(el);
	}, { immediate: true });
}
var translateAlias = {
	x: "translateX",
	y: "translateY",
	z: "translateZ"
};
function reactiveTransform(props = {}, enableHardwareAcceleration = true) {
	const state = reactive({ ...props });
	const transform = ref("");
	watch(state, (newVal) => {
		let result = "";
		let hasHardwareAcceleration = false;
		if (enableHardwareAcceleration && (newVal.x || newVal.y || newVal.z)) {
			const str = [
				newVal.x || 0,
				newVal.y || 0,
				newVal.z || 0
			].map((val) => getValueAsType(val, px)).join(",");
			result += `translate3d(${str}) `;
			hasHardwareAcceleration = true;
		}
		for (const [key, value] of Object.entries(newVal)) {
			if (enableHardwareAcceleration && (key === "x" || key === "y" || key === "z")) continue;
			const valueAsType = getValueAsType(value, getValueType(key));
			result += `${translateAlias[key] || key}(${valueAsType}) `;
		}
		if (enableHardwareAcceleration && !hasHardwareAcceleration) result += "translateZ(0px) ";
		transform.value = result.trim();
	}, {
		immediate: true,
		deep: true
	});
	return {
		state,
		transform
	};
}
var transformAxes = [
	"",
	"X",
	"Y",
	"Z"
];
var order = [
	"perspective",
	"translate",
	"scale",
	"rotate",
	"skew"
];
var transformProps = [
	"transformPerspective",
	"x",
	"y",
	"z"
];
order.forEach((operationKey) => {
	transformAxes.forEach((axesKey) => {
		const key = operationKey + axesKey;
		transformProps.push(key);
	});
});
var transformPropSet = new Set(transformProps);
function isTransformProp(key) {
	return transformPropSet.has(key);
}
var transformOriginProps = /* @__PURE__ */ new Set([
	"originX",
	"originY",
	"originZ"
]);
function isTransformOriginProp(key) {
	return transformOriginProps.has(key);
}
function splitValues(variant) {
	const transform = {};
	const style = {};
	Object.entries(variant).forEach(([key, value]) => {
		if (isTransformProp(key) || isTransformOriginProp(key)) transform[key] = value;
		else style[key] = value;
	});
	return {
		transform,
		style
	};
}
function variantToStyle(variant) {
	const { transform: _transform, style: _style } = splitValues(variant);
	const { transform } = reactiveTransform(_transform);
	const { style } = reactiveStyle(_style);
	if (transform.value) style.value.transform = transform.value;
	return style.value;
}
function useElementStyle(target, onInit) {
	let _cache;
	let _target;
	const { state, style } = reactiveStyle();
	usePermissiveTarget(target, (el) => {
		_target = el;
		for (const key of Object.keys(valueTypes)) {
			if (el.style[key] === null || el.style[key] === "" || isTransformProp(key) || isTransformOriginProp(key)) continue;
			state[key] = el.style[key];
		}
		if (_cache) Object.entries(_cache).forEach(([key, value]) => el.style[key] = value);
		if (onInit) onInit(state);
	});
	watch(style, (newVal) => {
		if (!_target) {
			_cache = newVal;
			return;
		}
		for (const key in newVal) _target.style[key] = newVal[key];
	}, { immediate: true });
	return { style: state };
}
function parseTransform(transform) {
	const transforms = transform.trim().split(/\) |\)/);
	if (transforms.length === 1) return {};
	const parseValues = (value) => {
		if (value.endsWith("px") || value.endsWith("deg")) return Number.parseFloat(value);
		if (Number.isNaN(Number(value))) return Number(value);
		return value;
	};
	return transforms.reduce((acc, transform2) => {
		if (!transform2) return acc;
		const [name, transformValue] = transform2.split("(");
		const values = transformValue.split(",").map((val) => {
			return parseValues(val.endsWith(")") ? val.replace(")", "") : val.trim());
		});
		const value = values.length === 1 ? values[0] : values;
		return {
			...acc,
			[name]: value
		};
	}, {});
}
function stateFromTransform(state, transform) {
	Object.entries(parseTransform(transform)).forEach(([key, value]) => {
		const axes = [
			"x",
			"y",
			"z"
		];
		if (key === "translate3d") {
			if (value === 0) {
				axes.forEach((axis) => state[axis] = 0);
				return;
			}
			value.forEach((axisValue, index) => state[axes[index]] = axisValue);
			return;
		}
		value = Number.parseFloat(`${value}`);
		if (key === "translateX") {
			state.x = value;
			return;
		}
		if (key === "translateY") {
			state.y = value;
			return;
		}
		if (key === "translateZ") {
			state.z = value;
			return;
		}
		state[key] = value;
	});
}
function useElementTransform(target, onInit) {
	let _cache;
	let _target;
	const { state, transform } = reactiveTransform();
	usePermissiveTarget(target, (el) => {
		_target = el;
		if (el.style.transform) stateFromTransform(state, el.style.transform);
		if (_cache) el.style.transform = _cache;
		if (onInit) onInit(state);
	});
	watch(transform, (newValue) => {
		if (!_target) {
			_cache = newValue;
			return;
		}
		_target.style.transform = newValue;
	}, { immediate: true });
	return { transform: state };
}
function objectEntries(obj) {
	return Object.entries(obj);
}
function useMotionProperties(target, defaultValues) {
	const motionProperties = reactive({});
	const apply = (values) => Object.entries(values).forEach(([key, value]) => motionProperties[key] = value);
	const { style } = useElementStyle(target, apply);
	const { transform } = useElementTransform(target, apply);
	watch(motionProperties, (newVal) => {
		objectEntries(newVal).forEach(([key, value]) => {
			const target2 = isTransformProp(key) ? transform : style;
			if (target2[key] && target2[key] === value) return;
			target2[key] = value;
		});
	}, {
		immediate: true,
		deep: true
	});
	usePermissiveTarget(target, () => defaultValues && apply(defaultValues));
	return {
		motionProperties,
		style,
		transform
	};
}
function useMotionVariants(variants = {}) {
	const _variants = unref(variants);
	const variant = ref();
	return {
		state: computed(() => {
			if (!variant.value) return;
			return _variants[variant.value];
		}),
		variant
	};
}
function useMotion(target, variants = {}, options) {
	const { motionProperties } = useMotionProperties(target);
	const { variant, state } = useMotionVariants(variants);
	const instance = {
		target,
		variant,
		variants,
		state,
		motionProperties,
		...useMotionControls(motionProperties, variants)
	};
	useMotionFeatures(instance, options);
	return instance;
}
var transitionKeys = ["delay", "duration"];
var directivePropsKeys = [
	"initial",
	"enter",
	"leave",
	"visible",
	"visible-once",
	"visibleOnce",
	"hovered",
	"tapped",
	"focused",
	...transitionKeys
];
function isTransitionKey(val) {
	return transitionKeys.includes(val);
}
function resolveVariants(node, variantsRef) {
	const target = node.props ? node.props : node.data && node.data.attrs ? node.data.attrs : {};
	if (target) {
		if (target.variants && isObject$1(target.variants)) variantsRef.value = {
			...variantsRef.value,
			...target.variants
		};
		for (let key of directivePropsKeys) {
			if (!target || !target[key]) continue;
			if (isTransitionKey(key) && typeof target[key] === "number") {
				for (const variantKey of [
					"enter",
					"visible",
					"visibleOnce"
				]) {
					const variantConfig = variantsRef.value[variantKey];
					if (variantConfig == null) continue;
					variantConfig.transition ?? (variantConfig.transition = {});
					variantConfig.transition[key] = target[key];
				}
				continue;
			}
			if (isObject$1(target[key])) {
				const prop = target[key];
				if (key === "visible-once") key = "visibleOnce";
				variantsRef.value[key] = prop;
			}
		}
	}
}
function directive(variants, isPreset = false) {
	const register = (el, binding, node) => {
		const key = binding.value && typeof binding.value === "string" ? binding.value : node.key;
		if (key && motionState[key]) motionState[key].stop();
		const variantsRef = ref(isPreset ? structuredClone(toRaw(variants) || {}) : variants || {});
		if (typeof binding.value === "object") variantsRef.value = binding.value;
		resolveVariants(node, variantsRef);
		const motionInstance = useMotion(el, variantsRef, {
			eventListeners: true,
			lifeCycleHooks: true,
			syncVariants: true,
			visibilityHooks: false
		});
		el.motionInstance = motionInstance;
		if (key) motionState[key] = motionInstance;
	};
	const mounted = (el, _binding, _node) => {
		el.motionInstance && registerVisibilityHooks(el.motionInstance);
	};
	return {
		created: register,
		mounted,
		getSSRProps(binding, node) {
			let { initial: bindingInitial } = binding.value || node && node?.props || {};
			bindingInitial = unref(bindingInitial);
			const initial = defu({}, variants?.initial || {}, bindingInitial || {});
			if (!initial || Object.keys(initial).length === 0) return;
			return { style: variantToStyle(initial) };
		}
	};
}
var presets = {
	__proto__: null,
	fade: {
		initial: { opacity: 0 },
		enter: { opacity: 1 }
	},
	fadeVisible: {
		initial: { opacity: 0 },
		visible: { opacity: 1 }
	},
	fadeVisibleOnce: {
		initial: { opacity: 0 },
		visibleOnce: { opacity: 1 }
	},
	pop: {
		initial: {
			scale: 0,
			opacity: 0
		},
		enter: {
			scale: 1,
			opacity: 1
		}
	},
	popVisible: {
		initial: {
			scale: 0,
			opacity: 0
		},
		visible: {
			scale: 1,
			opacity: 1
		}
	},
	popVisibleOnce: {
		initial: {
			scale: 0,
			opacity: 0
		},
		visibleOnce: {
			scale: 1,
			opacity: 1
		}
	},
	rollBottom: {
		initial: {
			y: 100,
			rotate: 90,
			opacity: 0
		},
		enter: {
			y: 0,
			rotate: 0,
			opacity: 1
		}
	},
	rollLeft: {
		initial: {
			x: -100,
			rotate: 90,
			opacity: 0
		},
		enter: {
			x: 0,
			rotate: 0,
			opacity: 1
		}
	},
	rollRight: {
		initial: {
			x: 100,
			rotate: -90,
			opacity: 0
		},
		enter: {
			x: 0,
			rotate: 0,
			opacity: 1
		}
	},
	rollTop: {
		initial: {
			y: -100,
			rotate: -90,
			opacity: 0
		},
		enter: {
			y: 0,
			rotate: 0,
			opacity: 1
		}
	},
	rollVisibleBottom: {
		initial: {
			y: 100,
			rotate: 90,
			opacity: 0
		},
		visible: {
			y: 0,
			rotate: 0,
			opacity: 1
		}
	},
	rollVisibleLeft: {
		initial: {
			x: -100,
			rotate: 90,
			opacity: 0
		},
		visible: {
			x: 0,
			rotate: 0,
			opacity: 1
		}
	},
	rollVisibleOnceBottom: {
		initial: {
			y: 100,
			rotate: 90,
			opacity: 0
		},
		visibleOnce: {
			y: 0,
			rotate: 0,
			opacity: 1
		}
	},
	rollVisibleOnceLeft: {
		initial: {
			x: -100,
			rotate: 90,
			opacity: 0
		},
		visibleOnce: {
			x: 0,
			rotate: 0,
			opacity: 1
		}
	},
	rollVisibleOnceRight: {
		initial: {
			x: 100,
			rotate: -90,
			opacity: 0
		},
		visibleOnce: {
			x: 0,
			rotate: 0,
			opacity: 1
		}
	},
	rollVisibleOnceTop: {
		initial: {
			y: -100,
			rotate: -90,
			opacity: 0
		},
		visibleOnce: {
			y: 0,
			rotate: 0,
			opacity: 1
		}
	},
	rollVisibleRight: {
		initial: {
			x: 100,
			rotate: -90,
			opacity: 0
		},
		visible: {
			x: 0,
			rotate: 0,
			opacity: 1
		}
	},
	rollVisibleTop: {
		initial: {
			y: -100,
			rotate: -90,
			opacity: 0
		},
		visible: {
			y: 0,
			rotate: 0,
			opacity: 1
		}
	},
	slideBottom: {
		initial: {
			y: 100,
			opacity: 0
		},
		enter: {
			y: 0,
			opacity: 1
		}
	},
	slideLeft: {
		initial: {
			x: -100,
			opacity: 0
		},
		enter: {
			x: 0,
			opacity: 1
		}
	},
	slideRight: {
		initial: {
			x: 100,
			opacity: 0
		},
		enter: {
			x: 0,
			opacity: 1
		}
	},
	slideTop: {
		initial: {
			y: -100,
			opacity: 0
		},
		enter: {
			y: 0,
			opacity: 1
		}
	},
	slideVisibleBottom: {
		initial: {
			y: 100,
			opacity: 0
		},
		visible: {
			y: 0,
			opacity: 1
		}
	},
	slideVisibleLeft: {
		initial: {
			x: -100,
			opacity: 0
		},
		visible: {
			x: 0,
			opacity: 1
		}
	},
	slideVisibleOnceBottom: {
		initial: {
			y: 100,
			opacity: 0
		},
		visibleOnce: {
			y: 0,
			opacity: 1
		}
	},
	slideVisibleOnceLeft: {
		initial: {
			x: -100,
			opacity: 0
		},
		visibleOnce: {
			x: 0,
			opacity: 1
		}
	},
	slideVisibleOnceRight: {
		initial: {
			x: 100,
			opacity: 0
		},
		visibleOnce: {
			x: 0,
			opacity: 1
		}
	},
	slideVisibleOnceTop: {
		initial: {
			y: -100,
			opacity: 0
		},
		visibleOnce: {
			y: 0,
			opacity: 1
		}
	},
	slideVisibleRight: {
		initial: {
			x: 100,
			opacity: 0
		},
		visible: {
			x: 0,
			opacity: 1
		}
	},
	slideVisibleTop: {
		initial: {
			y: -100,
			opacity: 0
		},
		visible: {
			y: 0,
			opacity: 1
		}
	}
};
var CUSTOM_PRESETS = Symbol("");
var MotionComponentProps = {
	preset: {
		type: String,
		required: false
	},
	instance: {
		type: Object,
		required: false
	},
	variants: {
		type: Object,
		required: false
	},
	initial: {
		type: Object,
		required: false
	},
	enter: {
		type: Object,
		required: false
	},
	leave: {
		type: Object,
		required: false
	},
	visible: {
		type: Object,
		required: false
	},
	visibleOnce: {
		type: Object,
		required: false
	},
	hovered: {
		type: Object,
		required: false
	},
	tapped: {
		type: Object,
		required: false
	},
	focused: {
		type: Object,
		required: false
	},
	delay: {
		type: [Number, String],
		required: false
	},
	duration: {
		type: [Number, String],
		required: false
	}
};
function isObject(val) {
	return Object.prototype.toString.call(val) === "[object Object]";
}
function clone(v) {
	if (Array.isArray(v)) return v.map(clone);
	if (isObject(v)) {
		const res = {};
		for (const key in v) res[key] = clone(v[key]);
		return res;
	}
	return v;
}
function setupMotionComponent(props) {
	const instances = reactive({});
	const customPresets = inject(CUSTOM_PRESETS, {});
	const preset = computed(() => {
		if (props.preset == null) return {};
		if (customPresets != null && props.preset in customPresets) return structuredClone(toRaw(customPresets)[props.preset]);
		if (props.preset in presets) return structuredClone(presets[props.preset]);
		return {};
	});
	const propsConfig = computed(() => ({
		initial: props.initial,
		enter: props.enter,
		leave: props.leave,
		visible: props.visible,
		visibleOnce: props.visibleOnce,
		hovered: props.hovered,
		tapped: props.tapped,
		focused: props.focused
	}));
	function applyTransitionHelpers(config, values) {
		for (const transitionKey of ["delay", "duration"]) {
			if (values[transitionKey] == null) continue;
			const transitionValueParsed = Number.parseInt(values[transitionKey]);
			for (const variantKey of [
				"enter",
				"visible",
				"visibleOnce"
			]) {
				const variantConfig = config[variantKey];
				if (variantConfig == null) continue;
				variantConfig.transition ?? (variantConfig.transition = {});
				variantConfig.transition[transitionKey] = transitionValueParsed;
			}
		}
		return config;
	}
	const motionConfig = computed(() => {
		return applyTransitionHelpers({ ...defu({}, propsConfig.value, preset.value, props.variants || {}) }, props);
	});
	function setNodeInstance(node, index, style) {
		var _node$props;
		node.props ?? (node.props = {});
		(_node$props = node.props).style ?? (_node$props.style = {});
		node.props.style = {
			...node.props.style,
			...style
		};
		const elementMotionConfig = applyTransitionHelpers(clone(motionConfig.value), node.props);
		node.props.onVnodeMounted = ({ el }) => {
			instances[index] = useMotion(el, elementMotionConfig);
		};
		node.props.onVnodeUpdated = ({ el }) => {
			const styles = variantToStyle(instances[index].state);
			for (const [key, val] of Object.entries(styles)) el.style[key] = val;
		};
		return node;
	}
	return {
		motionConfig,
		setNodeInstance
	};
}
defineComponent({
	name: "Motion",
	props: {
		...MotionComponentProps,
		is: {
			type: [String, Object],
			default: "div"
		}
	},
	setup(props) {
		const slots = useSlots();
		const { motionConfig, setNodeInstance } = setupMotionComponent(props);
		return () => {
			const style = variantToStyle(motionConfig.value.initial || {});
			const node = h(props.is, void 0, slots);
			setNodeInstance(node, 0, style);
			return node;
		};
	}
});
defineComponent({
	name: "MotionGroup",
	props: {
		...MotionComponentProps,
		is: {
			type: [String, Object],
			required: false
		}
	},
	setup(props) {
		const slots = useSlots();
		const { motionConfig, setNodeInstance } = setupMotionComponent(props);
		return () => {
			const style = variantToStyle(motionConfig.value.initial || {});
			const nodes = slots.default?.() || [];
			for (let i = 0; i < nodes.length; i++) {
				const n = nodes[i];
				if (n.type === Fragment && Array.isArray(n.children)) n.children.forEach(function setChildInstance(child, index) {
					if (child == null) return;
					if (Array.isArray(child)) {
						setChildInstance(child, index);
						return;
					}
					if (typeof child === "object") setNodeInstance(child, index, style);
				});
				else setNodeInstance(n, i, style);
			}
			if (props.is) return h(props.is, void 0, nodes);
			return nodes;
		};
	}
});
//#endregion
//#region node_modules/@vueuse/math/dist/index.js
/**
* `AND` conditions for refs.
*
* @see https://vueuse.org/logicAnd
*
* @__NO_SIDE_EFFECTS__
*/
function logicAnd(...args) {
	return computed(() => args.every((i) => toValue(i)));
}
/** @deprecated use `logicAnd` instead */
var and = logicAnd;
/**
* `NOT` conditions for refs.
*
* @see https://vueuse.org/logicNot
*
* @__NO_SIDE_EFFECTS__
*/
function logicNot(v) {
	return computed(() => !toValue(v));
}
/** @deprecated use `logicNot` instead */
var not = logicNot;
/**
* `OR` conditions for refs.
*
* @see https://vueuse.org/logicOr
*
* @__NO_SIDE_EFFECTS__
*/
function logicOr(...args) {
	return computed(() => args.some((i) => toValue(i)));
}
/** @deprecated use `logicOr` instead */
var or = logicOr;
//#endregion
export { isClient$1 as A, useRouter as B, useWakeLock as C, debouncedWatch as D, createSharedComposable as E, useIntervalFn as F, useToggle as I, createRouter as L, provideLocal as M, timestamp as N, ignorableWatch as O, useInterval as P, createWebHistory as R, useVModel as S, useWindowSize as T, _defineProperty as V, useMediaQuery as _, breakpointsTailwind as a, usePreferredDark as b, useActiveElement as c, useElementBounding as d, useElementSize as f, useMagicKeys as g, useLocalStorage as h, directive as i, objectOmit as j, injectLocal as k, useBreakpoints as l, useFullscreen as m, not as n, onClickOutside as o, useEventListener$1 as p, or as r, onKeyStroke as s, and as t, useDraggable as u, useMouse as v, useWindowFocus as w, useStyleTag as x, usePointerSwipe as y, useRoute as z };
