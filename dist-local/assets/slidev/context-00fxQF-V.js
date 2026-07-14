import { ft as toRef, h as computed, st as ref } from "../modules/shiki-V2eyNvW-.js";
import { j as objectOmit, k as injectLocal } from "../modules/vue-j1EMyUNA.js";
//#region node_modules/@slidev/client/constants.ts
var injectionClicksContext = "$$slidev-clicks-context";
var injectionCurrentPage = "$$slidev-page";
var injectionSlideElement = "$$slidev-slide-element";
var injectionSlideScale = "$$slidev-slide-scale";
var injectionSlidevContext = "$$slidev-context";
var injectionRoute = "$$slidev-route";
var injectionRenderContext = "$$slidev-render-context";
var injectionFrontmatter = "$$slidev-fontmatter";
var injectionSlideZoom = "$$slidev-slide-zoom";
var CLASS_VCLICK_TARGET = "slidev-vclick-target";
var CLASS_VCLICK_HIDDEN = "slidev-vclick-hidden";
var CLASS_VCLICK_HIDDEN_EXP = "slidev-vclick-hidden-explicitly";
var CLASS_VCLICK_CURRENT = "slidev-vclick-current";
var CLASS_VCLICK_PRIOR = "slidev-vclick-prior";
var CLASS_VCLICK_ANIMATION_PREFIX = "slidev-vclick-anim-";
var CLICKS_MAX = 999999;
var TRUST_ORIGINS = ["localhost", "127.0.0.1"];
var FRONTMATTER_FIELDS = [
	"clicks",
	"clicksStart",
	"disabled",
	"hide",
	"hideInToc",
	"layout",
	"level",
	"preload",
	"routeAlias",
	"src",
	"title",
	"transition",
	"zoom",
	"dragPos",
	"lang",
	"clickAnimation"
];
var HEADMATTER_FIELDS = [
	...FRONTMATTER_FIELDS,
	"theme",
	"titleTemplate",
	"info",
	"author",
	"keywords",
	"presenter",
	"browserExporter",
	"download",
	"exportFilename",
	"export",
	"highlighter",
	"lineNumbers",
	"monaco",
	"monacoTypesSource",
	"monacoTypesAdditionalPackages",
	"monacoRunAdditionalDeps",
	"monacoRunUseStrict",
	"remoteAssets",
	"selectable",
	"record",
	"colorSchema",
	"routerMode",
	"aspectRatio",
	"canvasWidth",
	"themeConfig",
	"favicon",
	"plantUmlServer",
	"fonts",
	"defaults",
	"drawings",
	"htmlAttrs",
	"mdc",
	"comark",
	"contextMenu",
	"wakeLock",
	"pwa",
	"seoMeta",
	"notesAutoRuby",
	"magicMoveDuration",
	"preloadImages"
];
//#endregion
//#region node_modules/@slidev/client/context.ts
/**
* Get the current slide context, should be called inside the setup function of a component inside slide
*/
function useSlideContext() {
	const $slidev = injectLocal(injectionSlidevContext);
	const $nav = toRef($slidev, "nav");
	const $clicksContext = injectLocal(injectionClicksContext).value;
	const $clicks = toRef($clicksContext, "current");
	const $page = injectLocal(injectionCurrentPage);
	const $renderContext = injectLocal(injectionRenderContext);
	const $frontmatter = injectLocal(injectionFrontmatter, {});
	return {
		$slidev,
		$nav,
		$clicksContext,
		$clicks,
		$page,
		$route: injectLocal(injectionRoute, void 0),
		$renderContext,
		$frontmatter,
		$scale: injectLocal(injectionSlideScale, ref(1)),
		$zoom: injectLocal(injectionSlideZoom, computed(() => 1))
	};
}
/**
* Convert frontmatter options to props for v-bind
* It removes known options fields, and expose an extra `frontmatter` field that contains full frontmatter
*
* @internal
*/
function frontmatterToProps(frontmatter, pageNo) {
	return {
		...objectOmit(frontmatter, pageNo === 0 ? HEADMATTER_FIELDS : FRONTMATTER_FIELDS),
		frontmatter
	};
}
//#endregion
export { injectionSlideScale as _, CLASS_VCLICK_HIDDEN as a, CLASS_VCLICK_TARGET as c, injectionClicksContext as d, injectionCurrentPage as f, injectionSlideElement as g, injectionRoute as h, CLASS_VCLICK_CURRENT as i, CLICKS_MAX as l, injectionRenderContext as m, useSlideContext as n, CLASS_VCLICK_HIDDEN_EXP as o, injectionFrontmatter as p, CLASS_VCLICK_ANIMATION_PREFIX as r, CLASS_VCLICK_PRIOR as s, frontmatterToProps as t, TRUST_ORIGINS as u, injectionSlideZoom as v, injectionSlidevContext as y };
