//#region node_modules/@slidev/client/layoutHelper.ts
/**
* Resolve urls from frontmatter and append with the base url
*/
function resolveAssetUrl(url) {
	if (url.startsWith("/")) return "/" + url.slice(1);
	return url;
}
function handleBackground(background, dim = false, backgroundSize = "cover") {
	const isColor = background && (background[0] === "#" || background.startsWith("rgb"));
	const style = {
		background: isColor ? background : void 0,
		color: background && !isColor ? "white" : void 0,
		backgroundImage: isColor ? void 0 : background ? dim ? `linear-gradient(#0005, #0008), url(${resolveAssetUrl(background)})` : `url("${resolveAssetUrl(background)}")` : void 0,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		backgroundSize
	};
	if (!style.background) delete style.background;
	return style;
}
//#endregion
export { handleBackground as t };
