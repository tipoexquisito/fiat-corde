import { C as defineComponent, L as openBlock, X as withCtx, Z as withDirectives, b as createTextVNode, g as createBaseVNode, l as vModelText, p as Fragment, st as ref, x as createVNode, y as createElementBlock } from "../modules/shiki-V2eyNvW-.js";
import { D as debouncedWatch } from "../modules/vue-j1EMyUNA.js";
import { X as slidesTitle, t as useNav } from "../useNav-BevVU56q.js";
import { p as useHead, t as useDynamicSlideInfo } from "../index-BrwRSUAk.js";
import { t as IconButton_default } from "./IconButton-CNvL6I62.js";
import { t as Modal_default } from "./Modal-5x7kcYR_.js";
//#region node_modules/@slidev/client/pages/notes-edit.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex my-1" };
var _hoisted_2 = { class: "h-full" };
var _hoisted_3 = { class: "slidev-glass-effect fixed bottom-5 right-5 rounded-full border border-main" };
//#endregion
//#region node_modules/@slidev/client/pages/notes-edit.vue
var notes_edit_default = /* @__PURE__ */ defineComponent({
	__name: "notes-edit",
	setup(__props) {
		const RE_SLIDE_HEADER = /^---\s*#(\d+)\s*$/;
		useHead({ title: `Notes Edit - ${slidesTitle}` });
		const { slides } = useNav();
		const showHelp = ref(false);
		const note = ref(serializeNotes(slides.value));
		function serializeNotes(slides) {
			const lines = [];
			for (const slide of slides) {
				if (!slide.meta.slide.note?.trim()) continue;
				lines.push(`--- #${slide.no}`);
				lines.push("");
				lines.push(slide.meta.slide.note);
				lines.push("");
			}
			return lines.join("\n");
		}
		function deserializeNotes(notes, slides) {
			const lines = notes.split(/^(---\s*#\d+\s*)$/gm);
			lines.forEach((line, index) => {
				const match = line.match(RE_SLIDE_HEADER);
				if (match) {
					const no = Number.parseInt(match[1]);
					const note = lines[index + 1].trim();
					const slide = slides.find((s) => s.no === no);
					if (slide) {
						slide.meta.slide.note = note;
						useDynamicSlideInfo(no).update({ note });
					}
				}
			});
		}
		debouncedWatch(note, (value) => {
			deserializeNotes(value, slides.value);
		}, { debounce: 300 });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(Modal_default, {
				modelValue: showHelp.value,
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => showHelp.value = $event),
				class: "px-6 py-4 flex flex-col gap-2"
			}, {
				default: withCtx(() => [
					_cache[4] || (_cache[4] = createBaseVNode("div", { class: "flex gap-2 text-xl" }, [createBaseVNode("div", { class: "i-carbon:information my-auto" }), createTextVNode(" Help ")], -1)),
					_cache[5] || (_cache[5] = createBaseVNode("div", { class: "prose dark:prose-invert" }, [createBaseVNode("p", null, "This is the batch notes editor. You can edit the notes for all the slides at once here."), createBaseVNode("p", null, [
						createTextVNode("The note for each slide are separated by "),
						createBaseVNode("code", null, "--- #[no]"),
						createTextVNode(" lines, you might want to keep them while editing.")
					])], -1)),
					createBaseVNode("div", _hoisted_1, [createBaseVNode("button", {
						class: "slidev-form-button",
						onClick: _cache[0] || (_cache[0] = ($event) => showHelp.value = false)
					}, " Close ")])
				]),
				_: 1
			}, 8, ["modelValue"]), createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createVNode(IconButton_default, {
				title: "Help",
				class: "rounded-full",
				onClick: _cache[2] || (_cache[2] = ($event) => showHelp.value = true)
			}, {
				default: withCtx(() => [..._cache[6] || (_cache[6] = [createBaseVNode("div", { class: "i-carbon:help text-2xl" }, null, -1)])]),
				_: 1
			})]), withDirectives(createBaseVNode("textarea", {
				"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => note.value = $event),
				class: "prose dark:prose-invert resize-none p5 outline-none bg-transparent block h-full w-full! max-w-full! max-h-full! min-h-full! min-w-full!"
			}, null, 512), [[vModelText, note.value]])])], 64);
		};
	}
});
//#endregion
export { notes_edit_default as default };
