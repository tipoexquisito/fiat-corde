const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/md-BuDW9b9e.js","assets/modules/shiki-V2eyNvW-.js","assets/rolldown-runtime-B-1-B7_t.js","assets/modules/shiki-ipjRpIB4.css","assets/slidev/context-00fxQF-V.js","assets/modules/vue-j1EMyUNA.js","assets/slidev/image-B9oPh5Xi.js","assets/slidev/layoutHelper-CeZWnDRU.js","assets/md-D3Ph8VCz.js","assets/md--h5sdOp3.js","assets/md-C_6a2Zrv2.js","assets/md-C_Tlk_Z22.js","assets/md-Bxf5Ul9x2.js","assets/md-DlUDqLJc.js","assets/slidev/center-CFttN9qR.js","assets/_plugin-vue_export-helper-BOaGB7Aw.js","assets/md-DtXiyOsh2.js","assets/md-DmYyhvRe.js","assets/slidev/two-cols-CAupNWEW.js","assets/md-C8YZCCxI.js","assets/slidev/md-poe4avpH.js","assets/md-C0tN0KNl.js","assets/md-CYdjgpOQ.js","assets/md-DAq4x9g5.js","assets/md-FBwLtSZI.js","assets/md-Do_-NsPQ.js","assets/md-BoXw34J9.js","assets/md-kV9-Q_dQ.js","assets/md-D-gcx04r.js","assets/slidev/md-DnmQp1Je.js","assets/md-D_-o1ghO.js","assets/md-BYRA3tyq.js","assets/md-BOGzqUiV.js","assets/history-rhyme-DTq_CPgD.js","assets/md-DAoe0aRW.js","assets/md-cXe-ibPq.js","assets/md-BspxS3uG.js","assets/md-BG2EwhTA.js","assets/md-CCPeJ3RT.js","assets/md-DAp3EnC9.js","assets/md-CkODPYUY2.js","assets/md-DcxbYQ_s.js","assets/md-CNiIJjW_2.js","assets/md-CwRrY-ij.js","assets/md-GWvp-rc52.js","assets/md-CpN2fawU2.js","assets/md-CLvNFM8N2.js","assets/md-u0OnPSiv2.js","assets/md-xjItg25A2.js","assets/md-BtBzYvsR2.js"])))=>i.map(i=>d[i]);
import { C as defineComponent, F as onMounted, I as onUnmounted, L as openBlock, S as defineAsyncComponent, at as reactive, ct as shallowReactive, g as createBaseVNode, h as computed, ht as unref, j as nextTick, mt as toValue, p as Fragment, q as watch, st as ref, tt as isReadonly, ut as shallowRef, v as createCommentVNode, y as createElementBlock, yt as toDisplayString } from "./modules/shiki-V2eyNvW-.js";
import { A as isClient, B as useRouter, E as createSharedComposable, I as useToggle, T as useWindowSize, a as breakpointsTailwind, c as useActiveElement, g as useMagicKeys, h as useLocalStorage, l as useBreakpoints, m as useFullscreen, z as useRoute } from "./modules/vue-j1EMyUNA.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BOaGB7Aw.js";
import { l as CLICKS_MAX } from "./slidev/context-00fxQF-V.js";
function clamp(n, min, max) {
	return Math.min(max, Math.max(min, n));
}
function sum(...args) {
	return flattenArrayable(args).reduce((a, b) => a + b, 0);
}
function toArray(array) {
	array = array ?? [];
	return Array.isArray(array) ? array : [array];
}
function flattenArrayable(array) {
	return toArray(array).flat(1);
}
function uniq(array) {
	return Array.from(new Set(array));
}
function range(...args) {
	let start, stop, step;
	if (args.length === 1) {
		start = 0;
		step = 1;
		[stop] = args;
	} else [start, stop, step = 1] = args;
	const arr = [];
	let current = start;
	while (current < stop) {
		arr.push(current);
		current += step || 1;
	}
	return arr;
}
function notNullish(v) {
	return v != null;
}
function objectMap(obj, fn) {
	return Object.fromEntries(Object.entries(obj).map(([k, v]) => fn(k, v)).filter(notNullish));
}
//#endregion
//#region ../../../../../@slidev/configs
var configs_default = {
	"theme": "default",
	"title": "Slidev",
	"titleTemplate": "%s - Slidev",
	"addons": [],
	"remoteAssets": false,
	"monaco": true,
	"monacoTypesSource": "local",
	"monacoTypesAdditionalPackages": [],
	"monacoTypesIgnorePackages": [],
	"monacoRunAdditionalDeps": [],
	"monacoRunUseStrict": true,
	"download": false,
	"export": {},
	"info": false,
	"highlighter": "shiki",
	"twoslash": true,
	"lineNumbers": false,
	"colorSchema": "dark",
	"routerMode": "history",
	"aspectRatio": 1.7777777777777777,
	"canvasWidth": 980,
	"exportFilename": "",
	"selectable": false,
	"themeConfig": {},
	"fonts": {
		"sans": [
			"\"Inter\"",
			"ui-sans-serif",
			"system-ui",
			"-apple-system",
			"BlinkMacSystemFont",
			"\"Segoe UI\"",
			"Roboto",
			"\"Helvetica Neue\"",
			"Arial",
			"\"Noto Sans\"",
			"sans-serif",
			"\"Apple Color Emoji\"",
			"\"Segoe UI Emoji\"",
			"\"Segoe UI Symbol\"",
			"\"Noto Color Emoji\""
		],
		"serif": [
			"\"Cormorant Garamond\"",
			"ui-serif",
			"Georgia",
			"Cambria",
			"\"Times New Roman\"",
			"Times",
			"serif"
		],
		"mono": [
			"\"Fira Code\"",
			"ui-monospace",
			"SFMono-Regular",
			"Menlo",
			"Monaco",
			"Consolas",
			"\"Liberation Mono\"",
			"\"Courier New\"",
			"monospace"
		],
		"webfonts": [
			"Inter",
			"Cormorant Garamond",
			"Fira Code"
		],
		"provider": "google",
		"local": ["Avenir Next"],
		"italic": false,
		"weights": [
			"200",
			"400",
			"600"
		]
	},
	"favicon": "https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",
	"drawings": {
		"enabled": true,
		"persist": false,
		"presenterOnly": false,
		"syncAll": true
	},
	"plantUmlServer": "https://www.plantuml.com/plantuml",
	"codeCopy": true,
	"magicMoveCopy": true,
	"author": "",
	"record": "dev",
	"css": "unocss",
	"presenter": true,
	"browserExporter": "dev",
	"htmlAttrs": {},
	"transition": "none",
	"editor": true,
	"mcp": true,
	"contextMenu": null,
	"wakeLock": true,
	"pwa": false,
	"mdc": false,
	"comark": false,
	"seoMeta": {},
	"notesAutoRuby": {},
	"duration": "30min",
	"timer": "stopwatch",
	"magicMoveDuration": 800,
	"preloadImages": true,
	"clickAnimation": "",
	"layout": "image",
	"image": "/xtra/jornadas-pedagogicas.jpeg",
	"slidesTitle": "Slidev"
};
//#endregion
//#region node_modules/@slidev/client/env.ts
var mode = "build";
var slideAspect = computed(() => configs_default.aspectRatio);
var slideWidth = computed(() => configs_default.canvasWidth);
var slideHeight = computed(() => Math.ceil(slideWidth.value / slideAspect.value));
var themeVars = computed(() => {
	return objectMap(configs_default.themeConfig || {}, (k, v) => [`--slidev-theme-${k}`, v]);
});
var slidesTitle = configs_default.slidesTitle;
//#endregion
//#region \0vite/preload-helper.js
var scriptRel = "modulepreload";
var assetsURL = function(dep) {
	return "/" + dep;
};
var seen = {};
var __vitePreload = function preload(baseModule, deps, importerUrl) {
	let promise = Promise.resolve();
	if (deps && deps.length > 0) {
		const links = document.getElementsByTagName("link");
		const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
		const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
		function allSettled(promises) {
			return Promise.all(promises.map((p) => Promise.resolve(p).then((value) => ({
				status: "fulfilled",
				value
			}), (reason) => ({
				status: "rejected",
				reason
			}))));
		}
		function importMetaResolve(specifier) {
			if (import.meta.resolve) return import.meta.resolve(specifier);
			return new URL(
				specifier,
				/** #__KEEP__ */
				import.meta.url
			).href;
		}
		promise = allSettled(deps.map((dep) => {
			dep = assetsURL(dep, importerUrl);
			dep = importMetaResolve(dep);
			if (dep in seen) return;
			seen[dep] = true;
			const isCss = dep.endsWith(".css");
			for (let i = links.length - 1; i >= 0; i--) {
				const link = links[i];
				if (link.href === dep && (!isCss || link.rel === "stylesheet")) return;
			}
			const link = document.createElement("link");
			link.rel = isCss ? "stylesheet" : scriptRel;
			if (!isCss) link.as = "script";
			link.crossOrigin = "";
			link.href = dep;
			if (cspNonce) link.setAttribute("nonce", cspNonce);
			document.head.appendChild(link);
			if (isCss) return new Promise((res, rej) => {
				link.addEventListener("load", res);
				link.addEventListener("error", () => rej(/* @__PURE__ */ new Error(`Unable to preload CSS for ${dep}`)));
			});
		}));
	}
	function handlePreloadError(err) {
		const e = new Event("vite:preloadError", { cancelable: true });
		e.payload = err;
		window.dispatchEvent(e);
		if (!e.defaultPrevented) throw err;
	}
	return promise.then((res) => {
		for (const item of res || []) {
			if (item.status !== "rejected") continue;
			handlePreloadError(item.reason);
		}
		return baseModule().catch(handlePreloadError);
	});
};
//#endregion
//#region node_modules/@slidev/client/composables/useClicks.ts
function normalizeSingleAtValue(at) {
	if (at === false || at === "false") return null;
	if (at == null || at === true || at === "true") return "+1";
	if (typeof at === "string" && "+-".includes(at[0])) return at;
	const v = +at;
	if (Number.isNaN(v)) {
		console.error(`Invalid "at" prop value: ${at}`);
		return null;
	}
	if (v <= 0) {
		console.warn(`[Slidev] "at" prop value must be greater than 0, but got ${at}, has been set to 1`);
		return 1;
	}
	return v;
}
function normalizeRangeAtValue(at) {
	if (Array.isArray(at)) return [normalizeSingleAtValue(at[0]), normalizeSingleAtValue(at[1])];
	return null;
}
function createClicksContextBase(current, clicksStart = 0, clicksTotalOverrides) {
	const isMounted = ref(false);
	let relativeSizeMap = /* @__PURE__ */ new Map();
	let maxMap = /* @__PURE__ */ new Map();
	const context = {
		get current() {
			return clamp(+current.value, clicksStart, context.total);
		},
		set current(value) {
			current.value = isMounted.value ? clamp(value, clicksStart, context.total) : value;
		},
		clicksStart,
		get relativeSizeMap() {
			return relativeSizeMap;
		},
		get maxMap() {
			return maxMap;
		},
		get isMounted() {
			return isMounted.value;
		},
		setup() {
			onMounted(() => {
				isMounted.value = true;
				maxMap = shallowReactive(maxMap);
				if (!isReadonly(current)) context.current = current.value;
			});
			onUnmounted(() => {
				isMounted.value = false;
				relativeSizeMap = /* @__PURE__ */ new Map();
				maxMap = /* @__PURE__ */ new Map();
			});
		},
		calculateSince(rawAt, size = 1) {
			const at = normalizeSingleAtValue(rawAt);
			if (at == null) return null;
			let start, max, delta;
			if (typeof at === "string") {
				const offset = context.currentOffset;
				const value = +at;
				start = offset + value;
				max = offset + value + size - 1;
				delta = value + size - 1;
			} else {
				start = at;
				max = at + size - 1;
				delta = 0;
			}
			return {
				start,
				end: +Number.POSITIVE_INFINITY,
				max,
				delta,
				currentOffset: computed(() => context.current - start),
				isCurrent: computed(() => context.current === start),
				isActive: computed(() => context.current >= start)
			};
		},
		calculateRange(rawAt) {
			const at = normalizeRangeAtValue(rawAt);
			if (at == null) return null;
			const [a, b] = at;
			let start, end, delta;
			if (typeof a === "string") {
				start = context.currentOffset + +a;
				delta = +a;
			} else {
				start = a;
				delta = 0;
			}
			if (typeof b === "string") {
				end = start + +b;
				delta += +b;
			} else end = b;
			return {
				start,
				end,
				max: end,
				delta,
				currentOffset: computed(() => context.current - start),
				isCurrent: computed(() => context.current === start),
				isActive: computed(() => start <= context.current && context.current < end)
			};
		},
		calculate(at) {
			if (Array.isArray(at)) return context.calculateRange(at);
			return context.calculateSince(at);
		},
		register(el, info) {
			if (!info) return;
			const { delta, max } = info;
			relativeSizeMap.set(el, delta);
			maxMap.set(el, max);
		},
		unregister(el) {
			relativeSizeMap.delete(el);
			maxMap.delete(el);
		},
		get currentOffset() {
			return sum(...relativeSizeMap.values());
		},
		get total() {
			return clicksTotalOverrides ?? (isMounted.value ? Math.max(0, ...maxMap.values()) : 0);
		}
	};
	return context;
}
function createFixedClicks(route, currentInit = 0) {
	const clicksStart = route?.meta.slide?.frontmatter.clicksStart ?? 0;
	const clicks = ref(Math.max(toValue(currentInit), clicksStart));
	watch(() => toValue(currentInit), (v) => {
		clicks.value = Math.max(v, clicksStart);
	});
	return createClicksContextBase(clicks, clicksStart, route?.meta?.clicks);
}
//#endregion
//#region node_modules/@slidev/parser/dist/utils.mjs
/**
* Parse timestamp into seconds
*
* Accepts:
* - 10:50.1
* - 10s
* - 5m
* - 3min
* - 3mins 5secs
* - 10.5m3s
* - +10s
* - 1h10m30s
* - 1h4s
* - 1:1:1
*/
var RE_ALPHA = /[a-z]/i;
function parseTimeString(timestamp) {
	if (typeof timestamp === "number") return {
		seconds: timestamp,
		relative: false
	};
	const relative = timestamp.startsWith("+");
	if (relative) timestamp = timestamp.slice(1);
	let seconds = 0;
	if (timestamp.includes(":")) {
		const parts = timestamp.split(":").map(Number);
		let h = 0;
		let m = 0;
		let s = 0;
		if (parts.length === 3) {
			h = parts[0];
			m = parts[1];
			s = parts[2];
		} else if (parts.length === 2) {
			m = parts[0];
			s = parts[1];
		} else if (parts.length === 1) s = parts[0];
		else throw new TypeError("Invalid timestamp format");
		if (Number.isNaN(h) || Number.isNaN(m) || Number.isNaN(s)) throw new TypeError("Invalid timestamp format");
		seconds = (h || 0) * 3600 + (m || 0) * 60 + (s || 0);
	} else if (!RE_ALPHA.test(timestamp)) seconds = Number(timestamp);
	else {
		const unitMap = {
			s: 1,
			sec: 1,
			secs: 1,
			m: 60,
			min: 60,
			mins: 60,
			h: 3600,
			hr: 3600,
			hrs: 3600,
			hour: 3600,
			hours: 3600,
			day: 86400,
			days: 86400,
			week: 604800,
			weeks: 604800,
			month: 2629746,
			months: 2629746,
			year: 31556952,
			years: 31556952
		};
		const regex = /([\d.]+)([a-z]+)/gi;
		const matches = timestamp.matchAll(regex);
		if (matches) for (const match of matches) {
			const value = Number(match[1]);
			if (Number.isNaN(value)) throw new TypeError(`Invalid timestamp value: ${match[1]}`);
			const unit = match[2].toLowerCase();
			if (!(unit in unitMap)) throw new TypeError(`Invalid timestamp unit: ${unit}`);
			seconds += value * unitMap[unit];
		}
		const remaining = timestamp.replace(regex, "").trim();
		if (remaining) throw new TypeError(`Unknown timestamp remaining: ${remaining}`);
	}
	return {
		seconds,
		relative
	};
}
/**
* 1,3-5,8 => [1, 3, 4, 5, 8]
*/
function parseRangeString(total, rangeStr) {
	if (!rangeStr || rangeStr === "all" || rangeStr === "*") return range(1, total + 1);
	if (rangeStr === "none") return [];
	const indexes = [];
	for (const part of rangeStr.split(/[,;]/g)) if (!part.includes("-")) indexes.push(+part);
	else {
		const [start, end] = part.split("-", 2);
		indexes.push(...range(+start, !end ? total + 1 : +end + 1));
	}
	return uniq(indexes).filter((i) => i <= total).sort((a, b) => a - b);
}
//#endregion
//#region node_modules/@slidev/client/layouts/error.vue
var _sfc_main = {};
var _hoisted_1$1 = { class: "px-4 py-10 text-center text-red-700 dark:text-red-500 font-bold font-mono" };
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("div", _hoisted_1$1, toDisplayString("Failed to fetch this slide. Please check your network connection."));
}
var error_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
//#region node_modules/@slidev/client/internals/SlideLoading.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "h-full w-full flex items-center justify-center gap-2 slidev-slide-loading" };
//#endregion
//#region node_modules/@slidev/client/internals/SlideLoading.vue
var SlideLoading_default = /* @__PURE__ */ defineComponent({
	__name: "SlideLoading",
	setup(__props) {
		const timeout = ref(false);
		onMounted(() => {
			setTimeout(() => {
				timeout.value = true;
			}, 200);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [timeout.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [_cache[0] || (_cache[0] = createBaseVNode("div", { class: "i-svg-spinners-90-ring-with-bg text-xl" }, null, -1)), _cache[1] || (_cache[1] = createBaseVNode("div", null, "Loading slide...", -1))], 64)) : createCommentVNode("v-if", true)]);
		};
	}
});
var frontmatter$38 = reactive({
	"theme": "default",
	"colorSchema": "dark",
	"fonts": {
		"serif": "Cormorant Garamond",
		"sans": "Inter"
	},
	"transition": "none",
	"layout": "image",
	"image": "/xtra/jornadas-pedagogicas.jpeg"
});
var meta$38 = shallowReactive({
	get layout() {
		return frontmatter$38.layout;
	},
	get transition() {
		return frontmatter$38.transition;
	},
	get class() {
		return frontmatter$38.class;
	},
	get clicks() {
		return frontmatter$38.clicks;
	},
	get name() {
		return frontmatter$38.name;
	},
	get preload() {
		return frontmatter$38.preload;
	},
	slide: {
		"content": "",
		"revision": "-q8d18v",
		"frontmatterRaw": "theme: default\ncolorSchema: dark\nfonts:\n  serif: 'Cormorant Garamond'\n  sans: 'Inter'\ntransition: none\nlayout: image\nimage: /xtra/jornadas-pedagogicas.jpeg\n",
		"note": "",
		"index": 0,
		"noteHTML": "<p>Olá. Chamo-me Filipe, sou formador no Ensino Profissional da Escola Secundária de Arrifana, nas áreas de Design, Comunicação Visual e Marketing Digital. Venho falar-vos da minha mobilidade Erasmus+, do curso de Metodologias Ativas que frequentei em Madrid e de como o estou a aplicar como estratégia de disseminação.</p>\n<p>Meio segundo. Corte seco.</p>\n",
		"images": ["/xtra/jornadas-pedagogicas.jpeg"],
		"raw": "",
		frontmatter: frontmatter$38,
		filepath: "",
		start: 0,
		sourceIndex: 0,
		id: 0,
		no: 1
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$37 = reactive({
	"layout": "image",
	"backgroundSize": "contain",
	"image": "/goya/goya-3-maio.jpg"
});
var meta$37 = shallowReactive({
	get layout() {
		return frontmatter$37.layout;
	},
	get transition() {
		return frontmatter$37.transition;
	},
	get class() {
		return frontmatter$37.class;
	},
	get clicks() {
		return frontmatter$37.clicks;
	},
	get name() {
		return frontmatter$37.name;
	},
	get preload() {
		return frontmatter$37.preload;
	},
	slide: {
		"content": "",
		"revision": "-kjos46",
		"frontmatterRaw": "layout: image\nbackgroundSize: contain\nimage: /goya/goya-3-maio.jpg\n",
		"note": "",
		"index": 1,
		"noteHTML": "<p>Silêncio. Dez segundos.</p>\n<p>Isto não é um quadro histórico. É uma reportagem de guerra.</p>\n<p>Madrid, 3 de maio de 1808. As tropas de Napoleão executam os madrilenos que se revoltaram na véspera. Goya vivia lá, viu e pintou.\nAntes de existir fotojornalismo, isto era o fotojornalismo.</p>\n",
		"images": ["/goya/goya-3-maio.jpg"],
		"raw": "",
		frontmatter: frontmatter$37,
		filepath: "",
		start: 25,
		sourceIndex: 1,
		id: 1,
		no: 2
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$36 = reactive({
	"layout": "image",
	"image": "/goya/goya-3-maio.jpg",
	"backgroundSize": "150%"
});
var meta$36 = shallowReactive({
	get layout() {
		return frontmatter$36.layout;
	},
	get transition() {
		return frontmatter$36.transition;
	},
	get class() {
		return frontmatter$36.class;
	},
	get clicks() {
		return frontmatter$36.clicks;
	},
	get name() {
		return frontmatter$36.name;
	},
	get preload() {
		return frontmatter$36.preload;
	},
	slide: {
		"content": "",
		"revision": "-rn5qiq",
		"frontmatterRaw": "layout: image\nimage: /goya/goya-3-maio.jpg\nbackgroundSize: 150%\n",
		"note": "",
		"index": 2,
		"noteHTML": "<p>Reparem no enquadramento:</p>\n<ul>\n<li>O pelotão não tem rosto, é uma máquina.</li>\n<li>O fuzilado tem rosto. Braços abertos, camisa branca, iluminado.</li>\n<li>Goya escolheu: escolheu quem vemos, quem não vemos, de que lado sentimos.</li>\n</ul>\n",
		"images": ["/goya/goya-3-maio.jpg"],
		"raw": "",
		frontmatter: frontmatter$36,
		filepath: "",
		start: 40,
		sourceIndex: 2,
		id: 2,
		no: 3
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$35 = reactive({
	"layout": "image",
	"image": "/goya/goya-3-maio.jpg",
	"backgroundSize": "150%"
});
var meta$35 = shallowReactive({
	get layout() {
		return frontmatter$35.layout;
	},
	get transition() {
		return frontmatter$35.transition;
	},
	get class() {
		return frontmatter$35.class;
	},
	get clicks() {
		return frontmatter$35.clicks;
	},
	get name() {
		return frontmatter$35.name;
	},
	get preload() {
		return frontmatter$35.preload;
	},
	slide: {
		"content": "",
		"revision": "kau341",
		"frontmatterRaw": "layout: image\nimage: /goya/goya-3-maio.jpg\nbackgroundSize: 150%\n",
		"note": "",
		"index": 3,
		"noteHTML": "<p>Agora reparem noutra coisa.</p>\n<p>Um ano depois, na madrugada de 17 de abril de 1809, as mesmas tropas cercaram Arrifana. A população refugiou-se na igreja, o que se revelou uma armadilha.\nOs homens foram obrigados a sair e um em cada cinco foi fuzilado. Os Quintados.</p>\n<p>CLICK</p>\n<p>Este quadro não está só em Madrid. Também aconteceu aqui. Só não teve pintor.</p>\n<p>Goya fez do 3 de maio memória universal. O massacre de Arrifana teve de esperar pela recriação histórica que vimos em abril.</p>\n<p>É essa a diferença entre ter um repórter e não ter.</p>\n",
		"images": ["/goya/goya-3-maio.jpg"],
		"raw": "",
		frontmatter: frontmatter$35,
		filepath: "",
		start: 53,
		sourceIndex: 3,
		id: 3,
		no: 4
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$34 = reactive({
	"layout": "image",
	"image": "/goya/goya-3-maio.jpg",
	"backgroundSize": "150%"
});
var meta$34 = shallowReactive({
	get layout() {
		return frontmatter$34.layout;
	},
	get transition() {
		return frontmatter$34.transition;
	},
	get class() {
		return frontmatter$34.class;
	},
	get clicks() {
		return frontmatter$34.clicks;
	},
	get name() {
		return frontmatter$34.name;
	},
	get preload() {
		return frontmatter$34.preload;
	},
	slide: {
		"content": "",
		"revision": "uyno43",
		"frontmatterRaw": "layout: image\nimage: /goya/goya-3-maio.jpg\nbackgroundSize: 150%\n",
		"note": "",
		"index": 4,
		"noteHTML": "<p>============================================</p>\n",
		"images": ["/goya/goya-3-maio.jpg"],
		"raw": "",
		frontmatter: frontmatter$34,
		filepath: "",
		start: 81,
		sourceIndex: 4,
		id: 4,
		no: 5
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$33 = reactive({
	"layout": "image",
	"image": "/goya/goya-2-maio.jpg",
	"backgroundSize": "contain"
});
var meta$33 = shallowReactive({
	get layout() {
		return frontmatter$33.layout;
	},
	get transition() {
		return frontmatter$33.transition;
	},
	get class() {
		return frontmatter$33.class;
	},
	get clicks() {
		return frontmatter$33.clicks;
	},
	get name() {
		return frontmatter$33.name;
	},
	get preload() {
		return frontmatter$33.preload;
	},
	slide: {
		"content": "",
		"revision": "824lrm",
		"frontmatterRaw": "layout: image\nimage: /goya/goya-2-maio.jpg\nbackgroundSize: contain\n",
		"note": "",
		"index": 5,
		"noteHTML": "<p>Cheguei a Madrid no domingo, 3 de maio de 2026. Fim de semana inteiro de feriado, que celebrava, na véspera, este quadro: a violenta revolta popular de 2 de maio contra as tropas de Napoleão.</p>\n<p>Os quadros de Goya foram um dos elementos aglutinadores de toda a semana.</p>\n<p>Sete dias de formação Erasmus+. 40 horas sobre metodologias ativas, aprendizagem cooperativa, CLIL, Universal Design, Inteligência artificial na educação.</p>\n<p>No primeiro dia, Images of Spain. O coordenador contou a história de Espanha e mostrou uma península que mudou de mãos e de fés durante séculos. Camadas sobre camadas. E parou aqui, nestes quadros: o 2 e o 3 de maio, sem heróis nem vilões. Goya foi a grande referência da abertura.</p>\n",
		"images": ["/goya/goya-2-maio.jpg"],
		"raw": "",
		frontmatter: frontmatter$33,
		filepath: "",
		start: 103,
		sourceIndex: 5,
		id: 5,
		no: 6
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$32 = reactive({ "layout": "center" });
var meta$32 = shallowReactive({
	get layout() {
		return frontmatter$32.layout;
	},
	get transition() {
		return frontmatter$32.transition;
	},
	get class() {
		return frontmatter$32.class;
	},
	get clicks() {
		return frontmatter$32.clicks;
	},
	get name() {
		return frontmatter$32.name;
	},
	get preload() {
		return frontmatter$32.preload;
	},
	slide: {
		"content": "",
		"revision": "n093ck",
		"frontmatterRaw": "layout: center\n",
		"note": "",
		"index": 6,
		"noteHTML": "<p>Na tarde seguinte, num peddypaper pelas ruas do centro de Madrid, uma das perguntas levou-nos à placa do Palácio Real. O que aconteceu aqui a 2 de maio de 1808? O feriado que tínhamos acabado de viver era matéria do jogo.</p>\n",
		"images": ["./madrid-2026/palacio-real-2-maio.jpeg"],
		"raw": "",
		frontmatter: frontmatter$32,
		filepath: "",
		start: 120,
		sourceIndex: 6,
		id: 6,
		no: 7
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$31 = reactive({ "layout": "center" });
var meta$31 = shallowReactive({
	get layout() {
		return frontmatter$31.layout;
	},
	get transition() {
		return frontmatter$31.transition;
	},
	get class() {
		return frontmatter$31.class;
	},
	get clicks() {
		return frontmatter$31.clicks;
	},
	get name() {
		return frontmatter$31.name;
	},
	get preload() {
		return frontmatter$31.preload;
	},
	slide: {
		"content": "",
		"revision": "x7tonb",
		"frontmatterRaw": "layout: center\n",
		"note": "",
		"index": 7,
		"noteHTML": "<p>Na quarta-feira, visitámos o Museu do Prado, como parte integrante do curso.\nO ponto de encontro foi aos pés da estátua de Goya.</p>\n",
		"images": ["./madrid-2026/estatua-goya.jpg"],
		"raw": "",
		frontmatter: frontmatter$31,
		filepath: "",
		start: 132,
		sourceIndex: 7,
		id: 7,
		no: 8
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$30 = reactive({
	"layout": "two-cols",
	"layoutClass": "gap-10 items-center"
});
var meta$30 = shallowReactive({
	get layout() {
		return frontmatter$30.layout;
	},
	get transition() {
		return frontmatter$30.transition;
	},
	get class() {
		return frontmatter$30.class;
	},
	get clicks() {
		return frontmatter$30.clicks;
	},
	get name() {
		return frontmatter$30.name;
	},
	get preload() {
		return frontmatter$30.preload;
	},
	slide: {
		"content": "",
		"revision": "u8flxi",
		"frontmatterRaw": "layout: two-cols\nlayoutClass: gap-10 items-center\n",
		"note": "",
		"index": 8,
		"noteHTML": "<p>Das milhares de obras, a mediadora orientou-nos por 14 obras curadas como um argumento, não como uma visita.\nEstes quadros de Goya estavam lá.</p>\n",
		"images": ["./goya/goya-2-maio.jpg", "./goya/goya-3-maio.jpg"],
		"raw": "",
		frontmatter: frontmatter$30,
		filepath: "",
		start: 145,
		sourceIndex: 8,
		id: 8,
		no: 9
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$29 = reactive({ "layout": "center" });
var meta$29 = shallowReactive({
	get layout() {
		return frontmatter$29.layout;
	},
	get transition() {
		return frontmatter$29.transition;
	},
	get class() {
		return frontmatter$29.class;
	},
	get clicks() {
		return frontmatter$29.clicks;
	},
	get name() {
		return frontmatter$29.name;
	},
	get preload() {
		return frontmatter$29.preload;
	},
	slide: {
		"content": "",
		"revision": "-6p6tyh",
		"frontmatterRaw": "layout: center\n",
		"note": "",
		"index": 9,
		"noteHTML": "<p>Isto teve um nome: Context4Content.\nO contexto não ilustra o conteúdo. O contexto é o conteúdo.\nA cidade, o museu, a rua: tudo é sala de aula quando há uma pergunta certa.</p>\n<p>Em junho, quis testar isto com uma turma do 11.º ano, para o módulo de Neuromarketing: atenção, emoção, enquadramento — como é que as imagens nos fazem decidir?</p>\n<p>Dias antes, fui ao Centro de Arte Oliva. Preparei a visita com o Daniel. Escolhemos o percurso, desenhámos as perguntas.\nDá trabalho, mas é a diferença entre um passeio e uma aula.</p>\n",
		"images": [],
		"raw": "",
		frontmatter: frontmatter$29,
		filepath: "",
		start: 162,
		sourceIndex: 9,
		id: 9,
		no: 10
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$28 = reactive({
	"layout": "image-right",
	"image": "/oliva/sem-terra-vista.jpg",
	"class": "items-center"
});
var meta$28 = shallowReactive({
	get layout() {
		return frontmatter$28.layout;
	},
	get transition() {
		return frontmatter$28.transition;
	},
	get class() {
		return frontmatter$28.class;
	},
	get clicks() {
		return frontmatter$28.clicks;
	},
	get name() {
		return frontmatter$28.name;
	},
	get preload() {
		return frontmatter$28.preload;
	},
	slide: {
		"content": "",
		"revision": "omw59p",
		"frontmatterRaw": "layout: image-right\nimage: /oliva/sem-terra-vista.jpg\nclass: items-center\n",
		"note": "",
		"index": 10,
		"noteHTML": "<p>Uma das exposições chamava-se &quot;Sem Terra à Vista&quot;.\nÀ entrada, diante da parede com o título, a mediadora perguntou: o que acham que isto quer dizer?</p>\n<p>As respostas vieram: alto-mar, à deriva, vazio, no espaço, piratas, naufrágio.</p>\n",
		"images": ["/oliva/sem-terra-vista.jpg"],
		"raw": "",
		frontmatter: frontmatter$28,
		filepath: "",
		start: 184,
		sourceIndex: 10,
		id: 10,
		no: 11
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$27 = reactive({
	"layout": "image",
	"backgroundSize": "contain",
	"image": "/oliva/3-16.jpg"
});
var meta$27 = shallowReactive({
	get layout() {
		return frontmatter$27.layout;
	},
	get transition() {
		return frontmatter$27.transition;
	},
	get class() {
		return frontmatter$27.class;
	},
	get clicks() {
		return frontmatter$27.clicks;
	},
	get name() {
		return frontmatter$27.name;
	},
	get preload() {
		return frontmatter$27.preload;
	},
	slide: {
		"content": "",
		"revision": "-6re3gm",
		"frontmatterRaw": "layout: image\nbackgroundSize: contain\nimage: /oliva/3-16.jpg\n",
		"note": "",
		"index": 11,
		"noteHTML": "<p>Lá dentro, esta fotografia do Augusto Alves da Silva.</p>\n<p>Uma paisagem açoriana. Campos verdes, oceano azul, algumas nuvens brancas. Quase idílica.</p>\n<p>A obra chama-se 3.16.</p>\n",
		"images": ["/oliva/3-16.jpg"],
		"raw": "",
		frontmatter: frontmatter$27,
		filepath: "",
		start: 206,
		sourceIndex: 11,
		id: 11,
		no: 12
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$26 = reactive({ "layout": "center" });
var meta$26 = shallowReactive({
	get layout() {
		return frontmatter$26.layout;
	},
	get transition() {
		return frontmatter$26.transition;
	},
	get class() {
		return frontmatter$26.class;
	},
	get clicks() {
		return frontmatter$26.clicks;
	},
	get name() {
		return frontmatter$26.name;
	},
	get preload() {
		return frontmatter$26.preload;
	},
	slide: {
		"content": "",
		"revision": "-s0mlgf",
		"frontmatterRaw": "layout: center\n",
		"note": "",
		"index": 12,
		"noteHTML": "<p>Enquanto tentavam decifrar a imagem, a mediadora entregou um recorte a um aluno. Ele leu em voz alta.</p>\n<p>&quot;Primeiros-ministros britânico, espanhol e português aguardam chegada de Bush. Tony Blair e José Maria Aznar juntam-se a Durão nas Lajes. Público, 16 de março de 2003, 16:45.&quot;</p>\n",
		"images": ["./oliva/3-16-decifrar-imagem.jpg", "./oliva/3-16-jornal-publico.jpg"],
		"raw": "",
		frontmatter: frontmatter$26,
		filepath: "",
		start: 225,
		sourceIndex: 12,
		id: 12,
		no: 13
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$25 = reactive({
	"layout": "image",
	"backgroundSize": "contain",
	"image": "/oliva/3-16.jpg"
});
var meta$25 = shallowReactive({
	get layout() {
		return frontmatter$25.layout;
	},
	get transition() {
		return frontmatter$25.transition;
	},
	get class() {
		return frontmatter$25.class;
	},
	get clicks() {
		return frontmatter$25.clicks;
	},
	get name() {
		return frontmatter$25.name;
	},
	get preload() {
		return frontmatter$25.preload;
	},
	slide: {
		"content": "",
		"revision": "-2jewon",
		"frontmatterRaw": "layout: image\nbackgroundSize: contain\nimage: /oliva/3-16.jpg\n",
		"note": "",
		"index": 13,
		"noteHTML": "<p>A paisagem mudou à frente deles.</p>\n<p>O título é uma data: 16 de março de 2003.\nO dia da Cimeira das Lajes, a última encenação antes da guerra.</p>\n<p>O fotojornalismo oficial mostrou os quatro homens alinhados com as bandeiras, num pódio. Os fazedores da paz.</p>\n",
		"images": ["/oliva/3-16.jpg", "./oliva/cimeira-lajes.jpg"],
		"raw": "",
		frontmatter: frontmatter$25,
		filepath: "",
		start: 240,
		sourceIndex: 13,
		id: 13,
		no: 14
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$24 = reactive({
	"layout": "image",
	"backgroundSize": "contain",
	"image": "/oliva/3-16.jpg"
});
var meta$24 = shallowReactive({
	get layout() {
		return frontmatter$24.layout;
	},
	get transition() {
		return frontmatter$24.transition;
	},
	get class() {
		return frontmatter$24.class;
	},
	get clicks() {
		return frontmatter$24.clicks;
	},
	get name() {
		return frontmatter$24.name;
	},
	get preload() {
		return frontmatter$24.preload;
	},
	slide: {
		"content": "",
		"revision": "-ws4e6k",
		"frontmatterRaw": "layout: image\nbackgroundSize: contain\nimage: /oliva/3-16.jpg\n",
		"note": "",
		"index": 14,
		"noteHTML": "<p>O jornal desse dia ainda falava em diplomacia. Dois dias depois, começou a invasão do Iraque. Alves da Silva fotografou o silêncio antes da guerra.</p>\n<p>A mediadora lembrou-nos: o artista não é neutro.\nQuem produz uma obra fá-lo a partir do seu próprio contexto, com intenções, num determinado momento, com objetivos. Nada ali estava por acaso. Nada aqui está por acaso.</p>\n<p>O próprio Alves da Silva escreveu sobre esta série: &quot;o fotojornalismo não produz uma imagem imparcial, nunca. Porque nenhuma fotografia o é.&quot;</p>\n",
		"images": ["/oliva/3-16.jpg"],
		"raw": "",
		frontmatter: frontmatter$24,
		filepath: "",
		start: 265,
		sourceIndex: 14,
		id: 14,
		no: 15
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$23 = reactive({
	"layout": "image",
	"backgroundSize": "contain",
	"image": "/oliva/expo-sem-terra-2.jpg"
});
var meta$23 = shallowReactive({
	get layout() {
		return frontmatter$23.layout;
	},
	get transition() {
		return frontmatter$23.transition;
	},
	get class() {
		return frontmatter$23.class;
	},
	get clicks() {
		return frontmatter$23.clicks;
	},
	get name() {
		return frontmatter$23.name;
	},
	get preload() {
		return frontmatter$23.preload;
	},
	slide: {
		"content": "",
		"revision": "-7cy0ck",
		"frontmatterRaw": "layout: image\nbackgroundSize: contain\nimage: /oliva/expo-sem-terra-2.jpg\n",
		"note": "",
		"index": 15,
		"noteHTML": "<p>A obra estava numa zona da exposição dedicada à desinformação e à desmemória. Ao que se apaga.</p>\n",
		"images": ["/oliva/expo-sem-terra-2.jpg"],
		"raw": "",
		frontmatter: frontmatter$23,
		filepath: "",
		start: 287,
		sourceIndex: 15,
		id: 15,
		no: 16
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$22 = reactive({
	"layout": "image",
	"backgroundSize": "contain",
	"image": "/oliva/expo-sem-terra-3.jpg"
});
var meta$22 = shallowReactive({
	get layout() {
		return frontmatter$22.layout;
	},
	get transition() {
		return frontmatter$22.transition;
	},
	get class() {
		return frontmatter$22.class;
	},
	get clicks() {
		return frontmatter$22.clicks;
	},
	get name() {
		return frontmatter$22.name;
	},
	get preload() {
		return frontmatter$22.preload;
	},
	slide: {
		"content": "",
		"revision": "c51nse",
		"frontmatterRaw": "layout: image\nbackgroundSize: contain\nimage: /oliva/expo-sem-terra-3.jpg\n",
		"note": "",
		"index": 16,
		"noteHTML": "<p>Goya pintou para que não se esquecesse. O Cerco da Buciqueira, em Arrifana, não teve quem o pintasse. Esta fotografia guarda o que o frame oficial deixou de fora.</p>\n",
		"images": ["/oliva/expo-sem-terra-3.jpg"],
		"raw": "",
		frontmatter: frontmatter$22,
		filepath: "",
		start: 297,
		sourceIndex: 16,
		id: 16,
		no: 17
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$21 = reactive({
	"layout": "image",
	"backgroundSize": "contain",
	"image": "/oliva/expo-sem-terra-1.jpg"
});
var meta$21 = shallowReactive({
	get layout() {
		return frontmatter$21.layout;
	},
	get transition() {
		return frontmatter$21.transition;
	},
	get class() {
		return frontmatter$21.class;
	},
	get clicks() {
		return frontmatter$21.clicks;
	},
	get name() {
		return frontmatter$21.name;
	},
	get preload() {
		return frontmatter$21.preload;
	},
	slide: {
		"content": "",
		"revision": "bkdl33",
		"frontmatterRaw": "layout: image\nbackgroundSize: contain\nimage: /oliva/expo-sem-terra-1.jpg\n",
		"note": "",
		"index": 17,
		"noteHTML": "<p>Percorremos o resto: guerra, fronteiras, direitos humanos. O poder apresentado como pacífico. A paz distribuída à força.</p>\n",
		"images": ["/oliva/expo-sem-terra-1.jpg"],
		"raw": "",
		frontmatter: frontmatter$21,
		filepath: "",
		start: 307,
		sourceIndex: 17,
		id: 17,
		no: 18
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$20 = reactive({
	"layout": "image",
	"backgroundSize": "contain",
	"image": "/oliva/expo-sem-terra-4.jpg"
});
var meta$20 = shallowReactive({
	get layout() {
		return frontmatter$20.layout;
	},
	get transition() {
		return frontmatter$20.transition;
	},
	get class() {
		return frontmatter$20.class;
	},
	get clicks() {
		return frontmatter$20.clicks;
	},
	get name() {
		return frontmatter$20.name;
	},
	get preload() {
		return frontmatter$20.preload;
	},
	slide: {
		"content": "",
		"revision": "-hgu3ro",
		"frontmatterRaw": "layout: image\nbackgroundSize: contain\nimage: /oliva/expo-sem-terra-4.jpg\n",
		"note": "",
		"index": 18,
		"noteHTML": "<p>À saída, a mediadora voltou à mesma parede.</p>\n",
		"images": ["/oliva/expo-sem-terra-4.jpg"],
		"raw": "",
		frontmatter: frontmatter$20,
		filepath: "",
		start: 317,
		sourceIndex: 18,
		id: 18,
		no: 19
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$19 = reactive({
	"layout": "image-left",
	"image": "/oliva/sem-terra-vista.jpg",
	"class": "items-center"
});
var meta$19 = shallowReactive({
	get layout() {
		return frontmatter$19.layout;
	},
	get transition() {
		return frontmatter$19.transition;
	},
	get class() {
		return frontmatter$19.class;
	},
	get clicks() {
		return frontmatter$19.clicks;
	},
	get name() {
		return frontmatter$19.name;
	},
	get preload() {
		return frontmatter$19.preload;
	},
	slide: {
		"content": "",
		"revision": "dw39wx",
		"frontmatterRaw": "layout: image-left\nimage: /oliva/sem-terra-vista.jpg\nclass: items-center\n",
		"note": "",
		"index": 19,
		"noteHTML": "<p>Fez a mesma pergunta.\nSem terra à vista: o que quer isto dizer?</p>\n",
		"images": ["/oliva/sem-terra-vista.jpg"],
		"raw": "",
		frontmatter: frontmatter$19,
		filepath: "",
		start: 327,
		sourceIndex: 19,
		id: 19,
		no: 20
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$18 = reactive({ "layout": "center" });
var meta$18 = shallowReactive({
	get layout() {
		return frontmatter$18.layout;
	},
	get transition() {
		return frontmatter$18.transition;
	},
	get class() {
		return frontmatter$18.class;
	},
	get clicks() {
		return frontmatter$18.clicks;
	},
	get name() {
		return frontmatter$18.name;
	},
	get preload() {
		return frontmatter$18.preload;
	},
	slide: {
		"content": "",
		"revision": "-pg0dx1",
		"frontmatterRaw": "layout: center\n",
		"note": "",
		"index": 20,
		"noteHTML": "<p>Outra vez piratas, mas já não eram os mesmos piratas.</p>\n<p>A mesma parede. A mesma pergunta. Uma hora de diferença. O contexto tinha mudado tudo.</p>\n",
		"images": [],
		"raw": "",
		frontmatter: frontmatter$18,
		filepath: "",
		start: 347,
		sourceIndex: 20,
		id: 20,
		no: 21
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$17 = reactive({
	"layout": "two-cols",
	"layoutClass": "gap-10 items-center"
});
var meta$17 = shallowReactive({
	get layout() {
		return frontmatter$17.layout;
	},
	get transition() {
		return frontmatter$17.transition;
	},
	get class() {
		return frontmatter$17.class;
	},
	get clicks() {
		return frontmatter$17.clicks;
	},
	get name() {
		return frontmatter$17.name;
	},
	get preload() {
		return frontmatter$17.preload;
	},
	slide: {
		"content": "",
		"revision": "-7lgyx4",
		"frontmatterRaw": "layout: two-cols\nlayoutClass: gap-10 items-center\n",
		"note": "",
		"index": 21,
		"noteHTML": "<p>============================================</p>\n",
		"images": [],
		"raw": "",
		frontmatter: frontmatter$17,
		filepath: "",
		start: 361,
		sourceIndex: 21,
		id: 21,
		no: 22
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$16 = reactive({
	"layout": "image",
	"backgroundSize": "contain",
	"image": "/guernica/guernica.jpeg"
});
var meta$16 = shallowReactive({
	get layout() {
		return frontmatter$16.layout;
	},
	get transition() {
		return frontmatter$16.transition;
	},
	get class() {
		return frontmatter$16.class;
	},
	get clicks() {
		return frontmatter$16.clicks;
	},
	get name() {
		return frontmatter$16.name;
	},
	get preload() {
		return frontmatter$16.preload;
	},
	slide: {
		"content": "",
		"revision": "sze5hg",
		"frontmatterRaw": "layout: image\nbackgroundSize: contain\nimage: /guernica/guernica.jpeg\n",
		"note": "",
		"index": 22,
		"noteHTML": "<p>No sábado à tarde, já depois do encerramento do curso, visitei o Reina Sofía.\nFui rever Guernica. Picasso pintou o bombardeamento de uma cidade a partir das fotografias dos jornais. Um repórter, à distância.</p>\n<p>Na sala em frente, uma exposição com um título que era uma tese: <strong>History Doesn't Repeat Itself, but It Does Rhyme</strong>.</p>\n",
		"images": ["/guernica/guernica.jpeg", "./guernica/history-rhyme.jpeg"],
		"raw": "",
		frontmatter: frontmatter$16,
		filepath: "",
		start: 391,
		sourceIndex: 22,
		id: 22,
		no: 23
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$15 = reactive({
	"layout": "image",
	"backgroundSize": "contain",
	"image": "/guernica/african-guernica.jpg"
});
var meta$15 = shallowReactive({
	get layout() {
		return frontmatter$15.layout;
	},
	get transition() {
		return frontmatter$15.transition;
	},
	get class() {
		return frontmatter$15.class;
	},
	get clicks() {
		return frontmatter$15.clicks;
	},
	get name() {
		return frontmatter$15.name;
	},
	get preload() {
		return frontmatter$15.preload;
	},
	slide: {
		"content": "",
		"revision": "rnoeng",
		"frontmatterRaw": "layout: image\nbackgroundSize: contain\nimage: /guernica/african-guernica.jpg\n",
		"note": "",
		"index": 23,
		"noteHTML": "<p>Dumile Feni, artista da África do Sul, em 1967 produziu &quot;African Guernica&quot; — o apartheid contado com a gramática de Picasso.</p>\n",
		"images": ["/guernica/african-guernica.jpg"],
		"raw": "",
		frontmatter: frontmatter$15,
		filepath: "",
		start: 408,
		sourceIndex: 23,
		id: 23,
		no: 24
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$14 = reactive({
	"layout": "image",
	"backgroundSize": "contain",
	"image": "/guernica/guernica-gaza-1.jpg"
});
var meta$14 = shallowReactive({
	get layout() {
		return frontmatter$14.layout;
	},
	get transition() {
		return frontmatter$14.transition;
	},
	get class() {
		return frontmatter$14.class;
	},
	get clicks() {
		return frontmatter$14.clicks;
	},
	get name() {
		return frontmatter$14.name;
	},
	get preload() {
		return frontmatter$14.preload;
	},
	slide: {
		"content": "",
		"revision": "rt6sm8",
		"frontmatterRaw": "layout: image\nbackgroundSize: contain\nimage: /guernica/guernica-gaza-1.jpg\n",
		"note": "",
		"index": 24,
		"noteHTML": "<p>Já de volta a casa, descobri Mohammed Al-Hawajri, artista palestiniano. Na série Guernica-Gaza (2010-2013), sobrepôs as pinturas dos museus europeus a fotografias de Gaza.</p>\n",
		"images": ["/guernica/guernica-gaza-1.jpg"],
		"raw": "",
		frontmatter: frontmatter$14,
		filepath: "",
		start: 418,
		sourceIndex: 24,
		id: 24,
		no: 25
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$13 = reactive({
	"layout": "image",
	"backgroundSize": "contain",
	"image": "/guernica/guernica-gaza-2.jpg"
});
var meta$13 = shallowReactive({
	get layout() {
		return frontmatter$13.layout;
	},
	get transition() {
		return frontmatter$13.transition;
	},
	get class() {
		return frontmatter$13.class;
	},
	get clicks() {
		return frontmatter$13.clicks;
	},
	get name() {
		return frontmatter$13.name;
	},
	get preload() {
		return frontmatter$13.preload;
	},
	slide: {
		"content": "",
		"revision": "fgxzyx",
		"frontmatterRaw": "layout: image\nbackgroundSize: contain\nimage: /guernica/guernica-gaza-2.jpg\n",
		"note": "",
		"index": 25,
		"noteHTML": "<p>E ali estava o quadro com que começámos: o fuzilamento de Madrid a acontecer em Gaza.</p>\n<p>Guernica. O apartheid. Arrifana. Iraque. Gaza. Rimam.</p>\n",
		"images": ["/guernica/guernica-gaza-2.jpg"],
		"raw": "",
		frontmatter: frontmatter$13,
		filepath: "",
		start: 428,
		sourceIndex: 25,
		id: 25,
		no: 26
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$12 = reactive({ "layout": "center" });
var meta$12 = shallowReactive({
	get layout() {
		return frontmatter$12.layout;
	},
	get transition() {
		return frontmatter$12.transition;
	},
	get class() {
		return frontmatter$12.class;
	},
	get clicks() {
		return frontmatter$12.clicks;
	},
	get name() {
		return frontmatter$12.name;
	},
	get preload() {
		return frontmatter$12.preload;
	},
	slide: {
		"content": "",
		"revision": "-lqz1qm",
		"frontmatterRaw": "layout: center\n",
		"note": "",
		"index": 26,
		"noteHTML": "<p>O Picasso do Guernica é o mesmo que desenhou a pomba da paz. A Europa nasceu dessas ruínas, não de tratados. Jean Monnet dizia: não unimos Estados, unimos pessoas.</p>\n<p>Pomba (estreita/clara) e Guernica (largo/escuro) lado a lado, mesma altura,\ncontraste assimétrico intencional. Guernica surge ao clique.</p>\n",
		"images": ["./guernica/pomba-paz.jpg", "./guernica/guernica.jpeg"],
		"raw": "",
		frontmatter: frontmatter$12,
		filepath: "",
		start: 440,
		sourceIndex: 26,
		id: 26,
		no: 27
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$11 = reactive({
	"layout": "image",
	"image": "/madrid-2026/fiat-europa.jpg"
});
var meta$11 = shallowReactive({
	get layout() {
		return frontmatter$11.layout;
	},
	get transition() {
		return frontmatter$11.transition;
	},
	get class() {
		return frontmatter$11.class;
	},
	get clicks() {
		return frontmatter$11.clicks;
	},
	get name() {
		return frontmatter$11.name;
	},
	get preload() {
		return frontmatter$11.preload;
	},
	slide: {
		"content": "",
		"revision": "pvj1an",
		"frontmatterRaw": "layout: image\nimage: /madrid-2026/fiat-europa.jpg\n",
		"note": "",
		"index": 27,
		"noteHTML": "<p>Foi o que encontrei em Madrid: 9 países numa sala, de professores para professores. A dimensão europeia não é um requisito do Erasmus+. É a razão de ele existir.</p>\n",
		"images": ["/madrid-2026/fiat-europa.jpg"],
		"raw": "",
		frontmatter: frontmatter$11,
		filepath: "",
		start: 456,
		sourceIndex: 27,
		id: 27,
		no: 28
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$10 = reactive({ "layout": "center" });
var meta$10 = shallowReactive({
	get layout() {
		return frontmatter$10.layout;
	},
	get transition() {
		return frontmatter$10.transition;
	},
	get class() {
		return frontmatter$10.class;
	},
	get clicks() {
		return frontmatter$10.clicks;
	},
	get name() {
		return frontmatter$10.name;
	},
	get preload() {
		return frontmatter$10.preload;
	},
	slide: {
		"content": "",
		"revision": "ymw7fd",
		"frontmatterRaw": "layout: center\n",
		"note": "",
		"index": 28,
		"noteHTML": "<p>Goya pintou fuzilamentos. Em Arrifana, os Quintados não tiveram pintor.</p>\n<p>3 de maio. A data do fuzilamento em Madrid. A data em que cheguei a Madrid. E, coincidentemente ou talvez não, o Dia Mundial da Liberdade de Imprensa.</p>\n",
		"images": [],
		"raw": "",
		frontmatter: frontmatter$10,
		filepath: "",
		start: 465,
		sourceIndex: 28,
		id: 28,
		no: 29
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$9 = reactive({
	"layout": "image",
	"backgroundSize": "contain",
	"image": "/guernica/wear-the-peace.jpg"
});
var meta$9 = shallowReactive({
	get layout() {
		return frontmatter$9.layout;
	},
	get transition() {
		return frontmatter$9.transition;
	},
	get class() {
		return frontmatter$9.class;
	},
	get clicks() {
		return frontmatter$9.clicks;
	},
	get name() {
		return frontmatter$9.name;
	},
	get preload() {
		return frontmatter$9.preload;
	},
	slide: {
		"content": "",
		"revision": "8dwm0o",
		"frontmatterRaw": "layout: image\nbackgroundSize: contain\nimage: /guernica/wear-the-peace.jpg\n",
		"note": "",
		"index": 29,
		"noteHTML": "<p>Desde outubro de 2023, mais de duzentos jornalistas assassinados em Gaza por Israel. Mais do que nas duas Guerras Mundiais, no Vietname e no Afeganistão, somados.\nE as imagens continuam a sair.\nA história não se repete. Rima. Estava escrito na parede do museu.</p>\n",
		"images": ["/guernica/wear-the-peace.jpg", "./guernica/history-rhyme.jpeg"],
		"raw": "",
		frontmatter: frontmatter$9,
		filepath: "",
		start: 482,
		sourceIndex: 29,
		id: 29,
		no: 30
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$8 = reactive({ "layout": "center" });
var meta$8 = shallowReactive({
	get layout() {
		return frontmatter$8.layout;
	},
	get transition() {
		return frontmatter$8.transition;
	},
	get class() {
		return frontmatter$8.class;
	},
	get clicks() {
		return frontmatter$8.clicks;
	},
	get name() {
		return frontmatter$8.name;
	},
	get preload() {
		return frontmatter$8.preload;
	},
	slide: {
		"content": "",
		"revision": "-cvc0g7",
		"frontmatterRaw": "layout: center\n",
		"note": "",
		"index": 30,
		"noteHTML": "",
		"images": [],
		"raw": "",
		frontmatter: frontmatter$8,
		filepath: "",
		start: 499,
		sourceIndex: 30,
		id: 30,
		no: 31
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$7 = reactive({ "layout": "center" });
var meta$7 = shallowReactive({
	get layout() {
		return frontmatter$7.layout;
	},
	get transition() {
		return frontmatter$7.transition;
	},
	get class() {
		return frontmatter$7.class;
	},
	get clicks() {
		return frontmatter$7.clicks;
	},
	get name() {
		return frontmatter$7.name;
	},
	get preload() {
		return frontmatter$7.preload;
	},
	slide: {
		"content": "",
		"revision": "-5lkruy",
		"frontmatterRaw": "layout: center\n",
		"note": "",
		"index": 31,
		"noteHTML": "<p>O contexto não serve o conteúdo. O contexto é o conteúdo.</p>\n<p>Foi isto que fiz com os meus alunos: levei-os a um sítio onde a pergunta muda de significado. Só isso. Não precisei de Madrid. Precisei de um sítio a vinte minutos a pé da escola, de uma visita preparada e de uma pergunta certa. Qualquer disciplina o consegue fazer.</p>\n",
		"images": [],
		"raw": "",
		frontmatter: frontmatter$7,
		filepath: "",
		start: 520,
		sourceIndex: 31,
		id: 31,
		no: 32
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$6 = reactive({ "layout": "center" });
var meta$6 = shallowReactive({
	get layout() {
		return frontmatter$6.layout;
	},
	get transition() {
		return frontmatter$6.transition;
	},
	get class() {
		return frontmatter$6.class;
	},
	get clicks() {
		return frontmatter$6.clicks;
	},
	get name() {
		return frontmatter$6.name;
	},
	get preload() {
		return frontmatter$6.preload;
	},
	slide: {
		"content": "",
		"revision": "s3k91t",
		"frontmatterRaw": "layout: center\n",
		"note": "",
		"index": 32,
		"noteHTML": "<p>As três perguntas regressam no ecrã. Não as ler. Deixar que a sala as reconheça.</p>\n",
		"images": [],
		"raw": "",
		frontmatter: frontmatter$6,
		filepath: "",
		start: 537,
		sourceIndex: 32,
		id: 32,
		no: 33
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$5 = reactive({ "layout": "center" });
var meta$5 = shallowReactive({
	get layout() {
		return frontmatter$5.layout;
	},
	get transition() {
		return frontmatter$5.transition;
	},
	get class() {
		return frontmatter$5.class;
	},
	get clicks() {
		return frontmatter$5.clicks;
	},
	get name() {
		return frontmatter$5.name;
	},
	get preload() {
		return frontmatter$5.preload;
	},
	slide: {
		"content": "",
		"revision": "dkc6zi",
		"frontmatterRaw": "layout: center\n",
		"note": "",
		"index": 33,
		"noteHTML": "<p>No último dia do curso, nas Estratégias de Disseminação, o coordenador disse-nos:</p>\n<p>Nós, professores, fazemos coisas extraordinárias e não estamos cientes disso.</p>\n<p>E depois, quase como uma ordem:\nWrite! You are the intellectuals.\nEscrevam! Vocês são os intelectuais.</p>\n",
		"images": [],
		"raw": "",
		frontmatter: frontmatter$5,
		filepath: "",
		start: 551,
		sourceIndex: 33,
		id: 33,
		no: 34
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$4 = reactive({ "layout": "center" });
var meta$4 = shallowReactive({
	get layout() {
		return frontmatter$4.layout;
	},
	get transition() {
		return frontmatter$4.transition;
	},
	get class() {
		return frontmatter$4.class;
	},
	get clicks() {
		return frontmatter$4.clicks;
	},
	get name() {
		return frontmatter$4.name;
	},
	get preload() {
		return frontmatter$4.preload;
	},
	slide: {
		"content": "",
		"revision": "-5lzmmk",
		"frontmatterRaw": "layout: center\n",
		"note": "",
		"index": 34,
		"noteHTML": "<p>Foi o que fiz. Está tudo documentado aqui.</p>\n<p>Pausa. Apontar para o ecrã. Não ler o endereço.</p>\n",
		"images": ["./xtra/qr-footscapes.png"],
		"raw": "",
		frontmatter: frontmatter$4,
		filepath: "",
		start: 570,
		sourceIndex: 34,
		id: 34,
		no: 35
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$3 = reactive({ "layout": "center" });
var meta$3 = shallowReactive({
	get layout() {
		return frontmatter$3.layout;
	},
	get transition() {
		return frontmatter$3.transition;
	},
	get class() {
		return frontmatter$3.class;
	},
	get clicks() {
		return frontmatter$3.clicks;
	},
	get name() {
		return frontmatter$3.name;
	},
	get preload() {
		return frontmatter$3.preload;
	},
	slide: {
		"content": "",
		"revision": "jz9pj3",
		"frontmatterRaw": "layout: center\n\n",
		"note": "",
		"index": 35,
		"noteHTML": "<p>Uma última história.</p>\n<p>Numa noite, em Madrid, fui beber cañas à sala Equis com uma colega de curso, Julia, uma professora alemã.\nNa parede estava a ser projetado um filme-mudo: Metropolis, 1927.</p>\n",
		"images": ["./madrid-2026/sala-equis-1.jpg", "./madrid-2026/sala-equis-2.jpg"],
		"raw": "",
		frontmatter: frontmatter$3,
		filepath: "",
		start: 585,
		sourceIndex: 35,
		id: 35,
		no: 36
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$2 = reactive({
	"layout": "image",
	"backgroundSize": "contain",
	"image": "/madrid-2026/metropolis.png"
});
var meta$2 = shallowReactive({
	get layout() {
		return frontmatter$2.layout;
	},
	get transition() {
		return frontmatter$2.transition;
	},
	get class() {
		return frontmatter$2.class;
	},
	get clicks() {
		return frontmatter$2.clicks;
	},
	get name() {
		return frontmatter$2.name;
	},
	get preload() {
		return frontmatter$2.preload;
	},
	slide: {
		"content": "",
		"revision": "ccb6qb",
		"frontmatterRaw": "layout: image\nbackgroundSize: contain\nimage: /madrid-2026/metropolis.png\n",
		"note": "",
		"index": 36,
		"noteHTML": "<p>Metropolis, 1927.</p>\n<p>No ecrã, uma frase:\nO mediador entre a cabeça e as mãos tem de ser o coração.</p>\n<p>Pausa muito longa.</p>\n<p>Há dez minutos começámos com três perguntas:</p>\n<ul>\n<li>Quem decide?</li>\n<li>Quem paga?</li>\n<li>Quem fica fora do frame?</li>\n</ul>\n<p>Pausa.</p>\n",
		"images": ["/madrid-2026/metropolis.png"],
		"raw": "",
		frontmatter: frontmatter$2,
		filepath: "",
		start: 603,
		sourceIndex: 36,
		id: 36,
		no: 37
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter$1 = reactive({
	"layout": "image",
	"backgroundSize": "105%",
	"image": "/goya/goya-3-maio.jpg"
});
var meta$1 = shallowReactive({
	get layout() {
		return frontmatter$1.layout;
	},
	get transition() {
		return frontmatter$1.transition;
	},
	get class() {
		return frontmatter$1.class;
	},
	get clicks() {
		return frontmatter$1.clicks;
	},
	get name() {
		return frontmatter$1.name;
	},
	get preload() {
		return frontmatter$1.preload;
	},
	slide: {
		"content": "",
		"revision": "-u9z7s6",
		"frontmatterRaw": "layout: image\nbackgroundSize: 105%\nimage: /goya/goya-3-maio.jpg\n",
		"note": "",
		"index": 37,
		"noteHTML": "<p>No livro &quot;Hoje, 3 de Maio&quot;, a Patrícia Portela recusa contar a história por odem. Propõe vários caminhos de leitura. Num deles, abrir na página deste quadro, escolher uma personagem, uma cor, um detalhe, e começar a viagem por aí. A leitura termina quando já não houver nada a descobrir.</p>\n<p>Podia ter escolhido o homem de camisa branca e calças amarelas. Escolhi quem o pintou. E cheguei aqui.</p>\n<p>Agora é a vossa vez. Escolham o vosso detalhe. Comecem a vossa viagem.</p>\n<p>Pausa.</p>\n<p>Eu comecei a minha viagem agora. E já não tenho terra à vista.</p>\n<p>Silêncio. Deixar a frase cair. Só depois o ecrã muda.</p>\n",
		"images": ["/goya/goya-3-maio.jpg"],
		"raw": "",
		frontmatter: frontmatter$1,
		filepath: "",
		start: 625,
		sourceIndex: 37,
		id: 37,
		no: 38
	},
	__clicksContext: null,
	__preloaded: false
});
var frontmatter = reactive({ "layout": "center" });
var meta = shallowReactive({
	get layout() {
		return frontmatter.layout;
	},
	get transition() {
		return frontmatter.transition;
	},
	get class() {
		return frontmatter.class;
	},
	get clicks() {
		return frontmatter.clicks;
	},
	get name() {
		return frontmatter.name;
	},
	get preload() {
		return frontmatter.preload;
	},
	slide: {
		"content": "",
		"revision": "ihlbcu",
		"frontmatterRaw": "layout: center\n",
		"note": "",
		"index": 38,
		"noteHTML": "",
		"images": [],
		"raw": "",
		frontmatter,
		filepath: "",
		start: 645,
		sourceIndex: 38,
		id: 38,
		no: 39
	},
	__clicksContext: null,
	__preloaded: false
});
//#endregion
//#region ../../../../../@slidev/slides
var componentsCache = new Array(39);
var getAsyncComponent = (idx, loader) => defineAsyncComponent({
	loader,
	delay: 300,
	loadingComponent: SlideLoading_default,
	errorComponent: error_default,
	onError: (e) => console.error("Failed to load slide " + (idx + 1), e)
});
var load1 = async () => {
	try {
		return componentsCache[0] ?? (componentsCache[0] = await __vitePreload(() => import("./md-BuDW9b9e.js"), __vite__mapDeps([0,1,2,3,4,5,6,7])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load2 = async () => {
	try {
		return componentsCache[1] ?? (componentsCache[1] = await __vitePreload(() => import("./md-D3Ph8VCz.js"), __vite__mapDeps([8,1,2,3,4,5,6,7])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load3 = async () => {
	try {
		return componentsCache[2] ?? (componentsCache[2] = await __vitePreload(() => import("./md--h5sdOp3.js"), __vite__mapDeps([9,1,2,3,4,5,6,7])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load4 = async () => {
	try {
		return componentsCache[3] ?? (componentsCache[3] = await __vitePreload(() => import("./md-C_6a2Zrv2.js"), __vite__mapDeps([10,1,2,3,4,5,6,7])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load5 = async () => {
	try {
		return componentsCache[4] ?? (componentsCache[4] = await __vitePreload(() => import("./md-C_Tlk_Z22.js"), __vite__mapDeps([11,1,2,3,4,5,6,7])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load6 = async () => {
	try {
		return componentsCache[5] ?? (componentsCache[5] = await __vitePreload(() => import("./md-Bxf5Ul9x2.js"), __vite__mapDeps([12,1,2,3,4,5,6,7])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load7 = async () => {
	try {
		return componentsCache[6] ?? (componentsCache[6] = await __vitePreload(() => import("./md-DlUDqLJc.js"), __vite__mapDeps([13,1,2,3,4,5,14,15])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load8 = async () => {
	try {
		return componentsCache[7] ?? (componentsCache[7] = await __vitePreload(() => import("./md-DtXiyOsh2.js"), __vite__mapDeps([16,1,2,3,4,5,14,15])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load9 = async () => {
	try {
		return componentsCache[8] ?? (componentsCache[8] = await __vitePreload(() => import("./md-DmYyhvRe.js"), __vite__mapDeps([17,1,2,3,4,5,18])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load10 = async () => {
	try {
		return componentsCache[9] ?? (componentsCache[9] = await __vitePreload(() => import("./md-C8YZCCxI.js"), __vite__mapDeps([19,1,2,3,4,5,14,15])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load11 = async () => {
	try {
		return componentsCache[10] ?? (componentsCache[10] = await __vitePreload(() => import("./slidev/md-poe4avpH.js"), __vite__mapDeps([20,1,2,3,4,5,7])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load12 = async () => {
	try {
		return componentsCache[11] ?? (componentsCache[11] = await __vitePreload(() => import("./md-C0tN0KNl.js"), __vite__mapDeps([21,1,2,3,4,5,6,7])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load13 = async () => {
	try {
		return componentsCache[12] ?? (componentsCache[12] = await __vitePreload(() => import("./md-CYdjgpOQ.js"), __vite__mapDeps([22,1,2,3,4,5,14,15])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load14 = async () => {
	try {
		return componentsCache[13] ?? (componentsCache[13] = await __vitePreload(() => import("./md-DAq4x9g5.js"), __vite__mapDeps([23,1,2,3,4,5,6,7])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load15 = async () => {
	try {
		return componentsCache[14] ?? (componentsCache[14] = await __vitePreload(() => import("./md-FBwLtSZI.js"), __vite__mapDeps([24,1,2,3,4,5,6,7])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load16 = async () => {
	try {
		return componentsCache[15] ?? (componentsCache[15] = await __vitePreload(() => import("./md-Do_-NsPQ.js"), __vite__mapDeps([25,1,2,3,4,5,6,7])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load17 = async () => {
	try {
		return componentsCache[16] ?? (componentsCache[16] = await __vitePreload(() => import("./md-BoXw34J9.js"), __vite__mapDeps([26,1,2,3,4,5,6,7])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load18 = async () => {
	try {
		return componentsCache[17] ?? (componentsCache[17] = await __vitePreload(() => import("./md-kV9-Q_dQ.js"), __vite__mapDeps([27,1,2,3,4,5,6,7])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load19 = async () => {
	try {
		return componentsCache[18] ?? (componentsCache[18] = await __vitePreload(() => import("./md-D-gcx04r.js"), __vite__mapDeps([28,1,2,3,4,5,6,7])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load20 = async () => {
	try {
		return componentsCache[19] ?? (componentsCache[19] = await __vitePreload(() => import("./slidev/md-DnmQp1Je.js"), __vite__mapDeps([29,1,2,3,4,5,7])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load21 = async () => {
	try {
		return componentsCache[20] ?? (componentsCache[20] = await __vitePreload(() => import("./md-D_-o1ghO.js"), __vite__mapDeps([30,1,2,3,4,5,14,15])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load22 = async () => {
	try {
		return componentsCache[21] ?? (componentsCache[21] = await __vitePreload(() => import("./md-BYRA3tyq.js"), __vite__mapDeps([31,1,2,3,4,5,18])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load23 = async () => {
	try {
		return componentsCache[22] ?? (componentsCache[22] = await __vitePreload(() => import("./md-BOGzqUiV.js"), __vite__mapDeps([32,1,2,3,4,5,6,7,33])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load24 = async () => {
	try {
		return componentsCache[23] ?? (componentsCache[23] = await __vitePreload(() => import("./md-DAoe0aRW.js"), __vite__mapDeps([34,1,2,3,4,5,6,7])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load25 = async () => {
	try {
		return componentsCache[24] ?? (componentsCache[24] = await __vitePreload(() => import("./md-cXe-ibPq.js"), __vite__mapDeps([35,1,2,3,4,5,6,7])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load26 = async () => {
	try {
		return componentsCache[25] ?? (componentsCache[25] = await __vitePreload(() => import("./md-BspxS3uG.js"), __vite__mapDeps([36,1,2,3,4,5,6,7])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load27 = async () => {
	try {
		return componentsCache[26] ?? (componentsCache[26] = await __vitePreload(() => import("./md-BG2EwhTA.js"), __vite__mapDeps([37,1,2,3,4,5,14,15])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load28 = async () => {
	try {
		return componentsCache[27] ?? (componentsCache[27] = await __vitePreload(() => import("./md-CCPeJ3RT.js"), __vite__mapDeps([38,1,2,3,4,5,6,7])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load29 = async () => {
	try {
		return componentsCache[28] ?? (componentsCache[28] = await __vitePreload(() => import("./md-DAp3EnC9.js"), __vite__mapDeps([39,1,2,3,4,5,14,15])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load30 = async () => {
	try {
		return componentsCache[29] ?? (componentsCache[29] = await __vitePreload(() => import("./md-CkODPYUY2.js"), __vite__mapDeps([40,1,2,3,4,5,6,7,33])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load31 = async () => {
	try {
		return componentsCache[30] ?? (componentsCache[30] = await __vitePreload(() => import("./md-DcxbYQ_s.js"), __vite__mapDeps([41,1,2,3,4,5,14,15])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load32 = async () => {
	try {
		return componentsCache[31] ?? (componentsCache[31] = await __vitePreload(() => import("./md-CNiIJjW_2.js"), __vite__mapDeps([42,1,2,3,4,5,14,15])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load33 = async () => {
	try {
		return componentsCache[32] ?? (componentsCache[32] = await __vitePreload(() => import("./md-CwRrY-ij.js"), __vite__mapDeps([43,1,2,3,4,5,14,15])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load34 = async () => {
	try {
		return componentsCache[33] ?? (componentsCache[33] = await __vitePreload(() => import("./md-GWvp-rc52.js"), __vite__mapDeps([44,1,2,3,4,5,14,15])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load35 = async () => {
	try {
		return componentsCache[34] ?? (componentsCache[34] = await __vitePreload(() => import("./md-CpN2fawU2.js"), __vite__mapDeps([45,1,2,3,4,5,14,15])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load36 = async () => {
	try {
		return componentsCache[35] ?? (componentsCache[35] = await __vitePreload(() => import("./md-CLvNFM8N2.js"), __vite__mapDeps([46,1,2,3,4,5,14,15])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load37 = async () => {
	try {
		return componentsCache[36] ?? (componentsCache[36] = await __vitePreload(() => import("./md-u0OnPSiv2.js"), __vite__mapDeps([47,1,2,3,4,5,6,7])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load38 = async () => {
	try {
		return componentsCache[37] ?? (componentsCache[37] = await __vitePreload(() => import("./md-xjItg25A2.js"), __vite__mapDeps([48,1,2,3,4,5,6,7])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var load39 = async () => {
	try {
		return componentsCache[38] ?? (componentsCache[38] = await __vitePreload(() => import("./md-BtBzYvsR2.js"), __vite__mapDeps([49,1,2,3,4,5,14,15])));
	} catch (e) {
		console.error("slide failed to load", e);
		return error_default;
	}
};
var slides = shallowRef([
	{
		no: 1,
		meta: meta$38,
		load: load1,
		component: getAsyncComponent(0, load1)
	},
	{
		no: 2,
		meta: meta$37,
		load: load2,
		component: getAsyncComponent(1, load2)
	},
	{
		no: 3,
		meta: meta$36,
		load: load3,
		component: getAsyncComponent(2, load3)
	},
	{
		no: 4,
		meta: meta$35,
		load: load4,
		component: getAsyncComponent(3, load4)
	},
	{
		no: 5,
		meta: meta$34,
		load: load5,
		component: getAsyncComponent(4, load5)
	},
	{
		no: 6,
		meta: meta$33,
		load: load6,
		component: getAsyncComponent(5, load6)
	},
	{
		no: 7,
		meta: meta$32,
		load: load7,
		component: getAsyncComponent(6, load7)
	},
	{
		no: 8,
		meta: meta$31,
		load: load8,
		component: getAsyncComponent(7, load8)
	},
	{
		no: 9,
		meta: meta$30,
		load: load9,
		component: getAsyncComponent(8, load9)
	},
	{
		no: 10,
		meta: meta$29,
		load: load10,
		component: getAsyncComponent(9, load10)
	},
	{
		no: 11,
		meta: meta$28,
		load: load11,
		component: getAsyncComponent(10, load11)
	},
	{
		no: 12,
		meta: meta$27,
		load: load12,
		component: getAsyncComponent(11, load12)
	},
	{
		no: 13,
		meta: meta$26,
		load: load13,
		component: getAsyncComponent(12, load13)
	},
	{
		no: 14,
		meta: meta$25,
		load: load14,
		component: getAsyncComponent(13, load14)
	},
	{
		no: 15,
		meta: meta$24,
		load: load15,
		component: getAsyncComponent(14, load15)
	},
	{
		no: 16,
		meta: meta$23,
		load: load16,
		component: getAsyncComponent(15, load16)
	},
	{
		no: 17,
		meta: meta$22,
		load: load17,
		component: getAsyncComponent(16, load17)
	},
	{
		no: 18,
		meta: meta$21,
		load: load18,
		component: getAsyncComponent(17, load18)
	},
	{
		no: 19,
		meta: meta$20,
		load: load19,
		component: getAsyncComponent(18, load19)
	},
	{
		no: 20,
		meta: meta$19,
		load: load20,
		component: getAsyncComponent(19, load20)
	},
	{
		no: 21,
		meta: meta$18,
		load: load21,
		component: getAsyncComponent(20, load21)
	},
	{
		no: 22,
		meta: meta$17,
		load: load22,
		component: getAsyncComponent(21, load22)
	},
	{
		no: 23,
		meta: meta$16,
		load: load23,
		component: getAsyncComponent(22, load23)
	},
	{
		no: 24,
		meta: meta$15,
		load: load24,
		component: getAsyncComponent(23, load24)
	},
	{
		no: 25,
		meta: meta$14,
		load: load25,
		component: getAsyncComponent(24, load25)
	},
	{
		no: 26,
		meta: meta$13,
		load: load26,
		component: getAsyncComponent(25, load26)
	},
	{
		no: 27,
		meta: meta$12,
		load: load27,
		component: getAsyncComponent(26, load27)
	},
	{
		no: 28,
		meta: meta$11,
		load: load28,
		component: getAsyncComponent(27, load28)
	},
	{
		no: 29,
		meta: meta$10,
		load: load29,
		component: getAsyncComponent(28, load29)
	},
	{
		no: 30,
		meta: meta$9,
		load: load30,
		component: getAsyncComponent(29, load30)
	},
	{
		no: 31,
		meta: meta$8,
		load: load31,
		component: getAsyncComponent(30, load31)
	},
	{
		no: 32,
		meta: meta$7,
		load: load32,
		component: getAsyncComponent(31, load32)
	},
	{
		no: 33,
		meta: meta$6,
		load: load33,
		component: getAsyncComponent(32, load33)
	},
	{
		no: 34,
		meta: meta$5,
		load: load34,
		component: getAsyncComponent(33, load34)
	},
	{
		no: 35,
		meta: meta$4,
		load: load35,
		component: getAsyncComponent(34, load35)
	},
	{
		no: 36,
		meta: meta$3,
		load: load36,
		component: getAsyncComponent(35, load36)
	},
	{
		no: 37,
		meta: meta$2,
		load: load37,
		component: getAsyncComponent(36, load37)
	},
	{
		no: 38,
		meta: meta$1,
		load: load38,
		component: getAsyncComponent(37, load38)
	},
	{
		no: 39,
		meta,
		load: load39,
		component: getAsyncComponent(38, load39)
	}
]);
//#endregion
//#region node_modules/@slidev/client/logic/route.ts
function useRouteQuery(name, defaultValue, { mode = "replace" } = {}) {
	const router = useRouter();
	return computed({
		get() {
			const data = router.currentRoute.value.query[name];
			if (data == null) return defaultValue ?? null;
			if (Array.isArray(data)) return data.filter(Boolean);
			return data;
		},
		set(v) {
			nextTick(() => {
				if ((router.currentRoute.value.query[name] ?? defaultValue?.toString()) === v.toString()) return;
				router[unref(mode)]({ query: {
					...router.currentRoute.value.query,
					[name]: `${v}` === defaultValue ? void 0 : v
				} });
			});
		}
	});
}
//#endregion
//#region node_modules/@slidev/client/logic/slidePath.ts
function getSlideRoutePath(route, presenter, exporting = false) {
	const no = route.meta.slide?.frontmatter.routeAlias ?? route.no;
	return exporting ? `/export/${no}` : presenter ? `/presenter/${no}` : `/${no}`;
}
//#endregion
//#region node_modules/@slidev/client/logic/slides.ts
function getSlide(no) {
	return slides.value.find((s) => s.no === +no || s.meta.slide?.frontmatter.routeAlias === no);
}
function getSlidePath(route, presenter, exporting = false) {
	if (typeof route === "number" || typeof route === "string") route = getSlide(route);
	return getSlideRoutePath(route, presenter, exporting);
}
//#endregion
//#region node_modules/@slidev/client/logic/transition.ts
var transitionResolveMap = {
	"slide-left": "slide-left | slide-right",
	"slide-right": "slide-right | slide-left",
	"slide-up": "slide-up | slide-down",
	"slide-down": "slide-down | slide-up"
};
function resolveTransition(transition, isBackward = false) {
	if (!transition) return void 0;
	if (typeof transition === "string") transition = { name: transition };
	if (!transition.name) return void 0;
	let name = transition.name.includes("|") ? transition.name : transitionResolveMap[transition.name] || transition.name;
	if (name.includes("|")) {
		const [forward, backward] = name.split("|").map((i) => i.trim());
		name = isBackward ? backward : forward;
	}
	if (!name) return void 0;
	return {
		...transition,
		name
	};
}
function getCurrentTransition(direction, currentRoute, prevRoute) {
	let transition = direction > 0 ? prevRoute?.meta?.transition : currentRoute?.meta?.transition;
	if (!transition) transition = configs_default.transition || void 0;
	return resolveTransition(transition, direction < 0);
}
//#endregion
//#region node_modules/@slidev/client/state/storage.ts
var showRecordingDialog = ref(false);
var showInfoDialog = ref(false);
var showGotoDialog = ref(false);
var showOverview = ref(false);
/**
* Skip slides transition when triggered by HMR.
* Will reset automatically after user navigations
*/
var hmrSkipTransition = ref(false);
var disableTransition = ref(false);
var shortcutsEnabled = ref(true);
var shortcutsLocks = reactive(/* @__PURE__ */ new Set());
var shortcutsLocked = computed(() => shortcutsLocks.size > 0);
var breakpoints = useBreakpoints({
	xs: 460,
	...breakpointsTailwind
});
var windowSize = useWindowSize();
var magicKeys = useMagicKeys();
var isScreenVertical = computed(() => windowSize.height.value - windowSize.width.value / slideAspect.value > 120);
var fullscreen = useFullscreen(isClient ? document.body : null);
var activeElement = useActiveElement();
var isInputting = computed(() => ["INPUT", "TEXTAREA"].includes(activeElement.value?.tagName || ""));
var isOnFocus = computed(() => ["BUTTON", "A"].includes(activeElement.value?.tagName || ""));
useLocalStorage("slidev-camera", "default", { listenToStorageChanges: false });
useLocalStorage("slidev-mic", "default", { listenToStorageChanges: false });
var slideScale = useLocalStorage("slidev-scale", 0);
var wakeLockEnabled = useLocalStorage("slidev-wake-lock", true);
var hideCursorIdle = useLocalStorage("slidev-hide-cursor-idle", true);
useLocalStorage("slidev-skip-export-pdf-tip", false);
useLocalStorage("slidev-export-capture-delay", 400, { listenToStorageChanges: false });
var showPresenterCursor = useLocalStorage("slidev-presenter-cursor", true, { listenToStorageChanges: false });
var cursorStyle = useLocalStorage("slidev-cursor-style", "cursor", { listenToStorageChanges: false });
function togglePresenterCursor() {
	showPresenterCursor.value = !showPresenterCursor.value;
}
var showEditor = useLocalStorage("slidev-show-editor", false, { listenToStorageChanges: false });
var isEditorVertical = useLocalStorage("slidev-editor-vertical", false, { listenToStorageChanges: false });
var editorWidth = useLocalStorage("slidev-editor-width", isClient ? window.innerWidth * .4 : 318, { listenToStorageChanges: false });
var editorHeight = useLocalStorage("slidev-editor-height", isClient ? window.innerHeight * .4 : 300, { listenToStorageChanges: false });
var activeDragElement = shallowRef(null);
var presenterNotesFontSize = useLocalStorage("slidev-presenter-font-size", 1, { listenToStorageChanges: false });
var presenterLayout = useLocalStorage("slidev-presenter-layout", 1, { listenToStorageChanges: false });
var viewerCssFilterDefaults = {
	invert: false,
	contrast: 1,
	brightness: 1,
	hueRotate: 0,
	saturate: 1,
	sepia: 0
};
var viewerCssFilter = useLocalStorage("slidev-viewer-css-filter", viewerCssFilterDefaults, {
	listenToStorageChanges: false,
	mergeDefaults: true,
	deep: true
});
var hasViewerCssFilter = computed(() => {
	return Object.keys(viewerCssFilterDefaults).some((k) => viewerCssFilter.value[k] !== viewerCssFilterDefaults[k]);
});
function togglePresenterLayout() {
	presenterLayout.value = presenterLayout.value + 1;
	if (presenterLayout.value > 3) presenterLayout.value = 1;
}
function increasePresenterFontSize() {
	presenterNotesFontSize.value = Math.min(2, presenterNotesFontSize.value + .1);
}
function decreasePresenterFontSize() {
	presenterNotesFontSize.value = Math.max(.5, presenterNotesFontSize.value - .1);
}
var toggleOverview = useToggle(showOverview);
var syncDirections = useLocalStorage("slidev-sync-directions", {
	viewerSend: true,
	viewerReceive: true,
	presenterSend: true,
	presenterReceive: true
}, {
	listenToStorageChanges: false,
	mergeDefaults: true
});
//#endregion
//#region node_modules/@slidev/client/composables/useTocTree.ts
function addToTree(tree, route, level = 1) {
	const titleLevel = route.meta.slide.level ?? level;
	if (titleLevel && titleLevel > level && tree.length > 0) addToTree(tree[tree.length - 1].children, route, level + 1);
	else tree.push({
		no: route.no,
		children: [],
		level,
		titleLevel,
		path: getSlidePath(route.meta.slide?.frontmatter?.routeAlias ?? route.no, false),
		hideInToc: Boolean(route.meta?.slide?.frontmatter?.hideInToc),
		title: route.meta?.slide?.title
	});
}
function getTreeWithActiveStatuses(tree, currentRoute, hasActiveParent = false, parent, currentSlideNo) {
	return tree.map((item) => {
		const clone = {
			...item,
			active: item.no === currentSlideNo?.value,
			hasActiveParent
		};
		if (clone.children.length > 0) clone.children = getTreeWithActiveStatuses(clone.children, currentRoute, clone.active || clone.hasActiveParent, clone, currentSlideNo);
		if (parent && (clone.active || clone.activeParent)) parent.activeParent = true;
		return clone;
	});
}
function filterTree(tree, level = 1) {
	return tree.filter((item) => !item.hideInToc).map((item) => ({
		...item,
		children: filterTree(item.children, level + 1)
	}));
}
function useTocTree(slides, currentSlideNo, currentSlideRoute) {
	const rawTree = computed(() => slides.value.filter((route) => route.meta?.slide?.title).reduce((acc, route) => {
		addToTree(acc, route);
		return acc;
	}, []));
	const treeWithActiveStatuses = computed(() => getTreeWithActiveStatuses(rawTree.value, currentSlideRoute.value, void 0, void 0, currentSlideNo));
	return computed(() => filterTree(treeWithActiveStatuses.value));
}
//#endregion
//#region node_modules/@slidev/client/composables/useNav.ts
function useNavBase(currentSlideRoute, clicksContext, queryClicks = ref(0), isPresenter, isPrint, router) {
	const total = computed(() => slides.value.length);
	const navDirection = ref(0);
	const clicksDirection = ref(0);
	const currentPath = computed(() => getSlidePath(currentSlideRoute.value, isPresenter.value));
	const currentSlideNo = computed(() => currentSlideRoute.value.no);
	const currentLayout = computed(() => currentSlideRoute.value.meta?.layout || (currentSlideNo.value === 1 ? "cover" : "default"));
	const currentFrontmatter = computed(() => currentSlideRoute.value.meta.slide.frontmatter);
	const clicks = computed(() => clicksContext.value.current);
	const clicksStart = computed(() => clicksContext.value.clicksStart);
	const clicksTotal = computed(() => clicksContext.value.total);
	const nextRoute = computed(() => slides.value[Math.min(slides.value.length, currentSlideNo.value + 1) - 1]);
	const prevRoute = computed(() => slides.value[Math.max(1, currentSlideNo.value - 1) - 1]);
	const hasNext = computed(() => currentSlideNo.value < slides.value.length || clicks.value < clicksTotal.value);
	const hasPrev = computed(() => currentSlideNo.value > 1 || clicks.value > 0);
	const currentTransition = computed(() => isPrint.value ? void 0 : getCurrentTransition(navDirection.value, currentSlideRoute.value, prevRoute.value));
	watch(currentSlideRoute, (next, prev) => {
		navDirection.value = next.no - prev.no;
	});
	async function openInEditor(url) {
		return false;
	}
	const tocTree = useTocTree(slides, currentSlideNo, currentSlideRoute);
	async function next() {
		clicksDirection.value = 1;
		if (clicksTotal.value <= queryClicks.value) await nextSlide();
		else queryClicks.value += 1;
	}
	async function prev() {
		clicksDirection.value = -1;
		if (queryClicks.value <= clicksStart.value) await prevSlide(true);
		else queryClicks.value -= 1;
	}
	async function nextSlide(lastClicks = false) {
		clicksDirection.value = 1;
		if (currentSlideNo.value < slides.value.length) await go(currentSlideNo.value + 1, lastClicks && !isPrint.value ? CLICKS_MAX : void 0);
	}
	async function prevSlide(lastClicks = false) {
		clicksDirection.value = -1;
		if (currentSlideNo.value > 1) await go(currentSlideNo.value - 1, lastClicks && !isPrint.value ? CLICKS_MAX : void 0);
	}
	function goFirst() {
		return go(1);
	}
	function goLast() {
		return go(total.value);
	}
	async function go(no, clicks = 0, force = false) {
		hmrSkipTransition.value = false;
		const pageChanged = currentSlideNo.value !== no;
		const clicksChanged = clicks !== queryClicks.value;
		const meta = getSlide(no)?.meta;
		const clicksStart = meta?.slide?.frontmatter.clicksStart ?? 0;
		clicks = clamp(clicks, clicksStart, meta?.__clicksContext?.total ?? 999999);
		if (force || pageChanged || clicksChanged) await router?.push({
			path: getSlidePath(no, isPresenter.value, router.currentRoute.value.name === "export"),
			query: {
				...router.currentRoute.value.query,
				clicks: clicks === 0 ? void 0 : clicks.toString(),
				embedded: location.search.includes("embedded") ? "true" : void 0
			}
		});
	}
	function enterPresenter() {
		router?.push({
			path: getSlidePath(currentSlideNo.value, true),
			query: { ...router.currentRoute.value.query }
		});
	}
	function exitPresenter() {
		router?.push({
			path: getSlidePath(currentSlideNo.value, false),
			query: { ...router.currentRoute.value.query }
		});
	}
	return {
		slides,
		total,
		currentPath,
		currentSlideNo,
		currentPage: currentSlideNo,
		currentSlideRoute,
		currentLayout,
		currentFrontmatter,
		currentTransition,
		clicksDirection,
		nextRoute,
		prevRoute,
		clicksContext,
		clicks,
		clicksStart,
		clicksTotal,
		hasNext,
		hasPrev,
		tocTree,
		navDirection,
		openInEditor,
		next,
		prev,
		go,
		goLast,
		goFirst,
		nextSlide,
		prevSlide,
		enterPresenter,
		exitPresenter
	};
}
var useNavState = createSharedComposable(() => {
	const router = useRouter();
	const currentRoute = useRoute();
	const query = computed(() => {
		router?.currentRoute?.value?.query;
		return new URLSearchParams(location.search);
	});
	const isPrintMode = computed(() => query.value.has("print") || currentRoute.name === "export");
	const isPrintWithClicks = ref(query.value.get("print") === "clicks");
	const isEmbedded = computed(() => query.value.has("embedded"));
	const isPlaying = computed(() => currentRoute.name === "play");
	const isPresenter = computed(() => currentRoute.name === "presenter");
	const isNotesViewer = computed(() => currentRoute.name === "notes");
	const isPresenterAvailable = computed(() => !isPresenter.value && (!configs_default.remote || query.value.get("password") === configs_default.remote));
	const hasPrimarySlide = computed(() => !!currentRoute.params.no);
	const currentSlideNo = computed(() => hasPrimarySlide.value ? getSlide(currentRoute.params.no)?.no ?? 1 : 1);
	const currentSlideRoute = computed(() => slides.value[currentSlideNo.value - 1]);
	const printRange = ref(parseRangeString(slides.value.length, currentRoute?.query?.range));
	const queryClicksRaw = useRouteQuery("clicks", "0");
	const clicksContext = computed(() => getPrimaryClicks(currentSlideRoute.value));
	const queryClicks = computed({
		get() {
			let v = +(queryClicksRaw.value || 0);
			if (Number.isNaN(v)) v = 0;
			return v;
		},
		set(v) {
			hmrSkipTransition.value = false;
			queryClicksRaw.value = v.toString();
		}
	});
	function getPrimaryClicks(route) {
		if (route?.meta?.__clicksContext) return route.meta.__clicksContext;
		const thisNo = route.no;
		const context = createClicksContextBase(computed({
			get() {
				if (currentSlideNo.value === thisNo) return Math.max(+(queryClicksRaw.value ?? 0), context.clicksStart);
				else if (currentSlideNo.value > thisNo) return CLICKS_MAX;
				else return context.clicksStart;
			},
			set(v) {
				if (currentSlideNo.value === thisNo) queryClicksRaw.value = v.toString();
			}
		}), route?.meta.slide?.frontmatter.clicksStart ?? 0, route?.meta.clicks);
		if (route?.meta) route.meta.__clicksContext = context;
		return context;
	}
	return {
		router,
		currentRoute: computed(() => currentRoute),
		isPrintMode,
		isPrintWithClicks,
		isEmbedded,
		isPlaying,
		isPresenter,
		isNotesViewer,
		isPresenterAvailable,
		hasPrimarySlide,
		currentSlideNo,
		currentSlideRoute,
		clicksContext,
		queryClicksRaw,
		queryClicks,
		printRange,
		getPrimaryClicks
	};
});
var useNav = createSharedComposable(() => {
	const state = useNavState();
	const router = useRouter();
	const nav = useNavBase(state.currentSlideRoute, state.clicksContext, state.queryClicks, state.isPresenter, state.isPrintMode, router);
	watch([nav.total, state.currentRoute], async () => {
		const no = state.currentRoute.value.params.no;
		if (state.hasPrimarySlide.value && !getSlide(no)) if (no && no !== "index.html") await nav.go(nav.total.value, 0, true);
		else await nav.go(1, 0, true);
	}, {
		flush: "pre",
		immediate: true
	});
	return {
		...nav,
		...state
	};
});
//#endregion
export { clamp as $, slideScale as A, getSlidePath as B, shortcutsLocked as C, showOverview as D, showInfoDialog as E, viewerCssFilter as F, __vitePreload as G, parseTimeString as H, viewerCssFilterDefaults as I, slideHeight as J, mode as K, wakeLockEnabled as L, toggleOverview as M, togglePresenterCursor as N, showPresenterCursor as O, togglePresenterLayout as P, configs_default as Q, windowSize as R, shortcutsEnabled as S, showGotoDialog as T, createClicksContextBase as U, slides as V, createFixedClicks as W, slidesTitle as X, slideWidth as Y, themeVars as Z, isOnFocus as _, cursorStyle as a, presenterLayout as b, editorHeight as c, hasViewerCssFilter as d, range as et, hideCursorIdle as f, isInputting as g, isEditorVertical as h, breakpoints as i, syncDirections as j, showRecordingDialog as k, editorWidth as l, increasePresenterFontSize as m, activeDragElement as n, decreasePresenterFontSize as o, hmrSkipTransition as p, slideAspect as q, activeElement as r, disableTransition as s, useNav as t, fullscreen as u, isScreenVertical as v, showEditor as w, presenterNotesFontSize as x, magicKeys as y, getSlide as z };
