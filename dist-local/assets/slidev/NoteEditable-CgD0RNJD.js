import { C as defineComponent, J as watchEffect, L as openBlock, Z as withDirectives, _ as createBlock, d as withKeys, ft as toRef, gt as normalizeClass, ht as unref, j as nextTick, l as vModelText, q as watch, st as ref, vt as normalizeStyle, y as createElementBlock } from "../modules/shiki-V2eyNvW-.js";
import { O as ignorableWatch, S as useVModel, o as onClickOutside } from "../modules/vue-j1EMyUNA.js";
import { t as useDynamicSlideInfo } from "../index-BrwRSUAk.js";
import { t as NoteDisplay_default } from "./NoteDisplay-C_9E7gEd.js";
//#region node_modules/@slidev/client/internals/NoteEditable.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["placeholder"];
//#endregion
//#region node_modules/@slidev/client/internals/NoteEditable.vue
var NoteEditable_default = /* @__PURE__ */ defineComponent({
	__name: "NoteEditable",
	props: {
		no: {
			type: Number,
			required: true
		},
		class: { default: "" },
		editing: { default: false },
		style: { default: () => ({}) },
		placeholder: { default: "No notes for this slide" },
		clicksContext: { type: Object },
		highlight: { default: true },
		autoHeight: { default: false }
	},
	emits: [
		"update:editing",
		"markerDblclick",
		"markerClick"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const editing = useVModel(props, "editing", emit, { passive: true });
		const { info, update } = useDynamicSlideInfo(toRef(props, "no"));
		const note = ref("");
		let timer;
		const { ignoreUpdates } = ignorableWatch(note, (v) => {
			if (!editing.value) return;
			const id = props.no;
			clearTimeout(timer);
			timer = setTimeout(() => {
				update({ note: v }, id);
			}, 500);
		});
		watch(() => info.value?.note, (value = "") => {
			if (editing.value) return;
			clearTimeout(timer);
			ignoreUpdates(() => {
				note.value = value;
			});
		}, {
			immediate: true,
			flush: "sync"
		});
		const inputEl = ref();
		const inputHeight = ref();
		watchEffect(() => {
			if (editing.value) inputEl.value?.focus();
		});
		onClickOutside(inputEl, () => {
			editing.value = false;
		});
		function calculateEditorHeight() {
			if (!props.autoHeight || !inputEl.value || !editing.value) return;
			if (inputEl.value.scrollHeight > inputEl.value.clientHeight) inputEl.value.style.height = `${inputEl.value.scrollHeight}px`;
		}
		function onKeyDown(e) {
			if (editing.value && e.metaKey && e.key === "s") {
				e.preventDefault();
				update({ note: note.value }, props.no);
			}
		}
		watch([note, editing], () => {
			nextTick(() => {
				calculateEditorHeight();
			});
		}, {
			flush: "post",
			immediate: true
		});
		return (_ctx, _cache) => {
			return !unref(editing) ? (openBlock(), createBlock(NoteDisplay_default, {
				key: 0,
				class: normalizeClass(["border-transparent border-2", [props.class, note.value ? "" : "opacity-25 italic select-none"]]),
				style: normalizeStyle(props.style),
				note: note.value || __props.placeholder,
				"note-html": unref(info)?.noteHTML,
				"clicks-context": __props.clicksContext,
				"auto-scroll": !__props.autoHeight,
				highlight: props.highlight,
				onMarkerClick: _cache[0] || (_cache[0] = (e, clicks) => emit("markerClick", e, clicks)),
				onMarkerDblclick: _cache[1] || (_cache[1] = (e, clicks) => emit("markerDblclick", e, clicks))
			}, null, 8, [
				"class",
				"style",
				"note",
				"note-html",
				"clicks-context",
				"auto-scroll",
				"highlight"
			])) : withDirectives((openBlock(), createElementBlock("textarea", {
				key: 1,
				ref_key: "inputEl",
				ref: inputEl,
				"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => note.value = $event),
				class: normalizeClass(["prose dark:prose-invert resize-none overflow-auto outline-none bg-transparent block border-primary border-2 slidev-note placeholder:op25", [props.class, note.value ? "" : "italic"]]),
				style: normalizeStyle([props.style, inputHeight.value != null ? { height: `${inputHeight.value}px` } : {}]),
				placeholder: __props.placeholder,
				onKeydown: [_cache[3] || (_cache[3] = withKeys(($event) => editing.value = false, ["esc"])), onKeyDown]
			}, null, 46, _hoisted_1)), [[vModelText, note.value]]);
		};
	}
});
//#endregion
export { NoteEditable_default as t };
