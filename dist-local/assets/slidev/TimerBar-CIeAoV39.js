import { C as defineComponent, L as openBlock, X as withCtx, a as Transition, at as reactive, ft as toRef, gt as normalizeClass, h as computed, ht as unref, p as Fragment, v as createCommentVNode, vt as normalizeStyle, x as createVNode, y as createElementBlock, z as renderList } from "../modules/shiki-V2eyNvW-.js";
import { P as useInterval } from "../modules/vue-j1EMyUNA.js";
import { H as parseTimeString, Q as configs_default, t as useNav } from "../useNav-BevVU56q.js";
import { o as state } from "../index-BrwRSUAk.js";
//#region node_modules/@slidev/client/internals/CurrentProgressBar.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { class: "relative flex gap-px" };
//#endregion
//#region node_modules/@slidev/client/internals/CurrentProgressBar.vue
var CurrentProgressBar_default = /* @__PURE__ */ defineComponent({
	__name: "CurrentProgressBar",
	props: {
		clicksContext: {},
		current: {}
	},
	setup(__props) {
		const props = __props;
		const nav = useNav();
		const clicksContext = computed(() => props.clicksContext ?? nav.clicksContext.value);
		const current = computed(() => props.current ?? nav.currentSlideNo.value);
		const { total } = nav;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(total) - 1, (i) => {
				return openBlock(), createElementBlock("div", {
					key: i,
					class: normalizeClass(["border-x border-b border-main h-4px transition-all", i < current.value ? "bg-primary border-primary" : ""]),
					style: normalizeStyle({ width: `${1 / (unref(total) - 1) * 100}%` })
				}, [createVNode(Transition, { name: "fade" }, {
					default: withCtx(() => [i === current.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: "h-full bg-primary op75 transition-all",
						style: normalizeStyle({ width: `${clicksContext.value.total === 0 ? 0 : clicksContext.value.current / (clicksContext.value.total + 1) * 100}%` })
					}, null, 4)) : createCommentVNode("v-if", true)]),
					_: 2
				}, 1024)], 6);
			}), 128))]);
		};
	}
});
//#endregion
//#region node_modules/@slidev/client/composables/useTimer.ts
function useTimer() {
	const mode = computed(() => configs_default.timer || "stopwatch");
	const duration = computed(() => parseTimeString(configs_default.duration).seconds);
	const interval = useInterval(100, { controls: true });
	const state$1 = toRef(state, "timer");
	const status = computed(() => state$1.value?.status);
	const passedMs = computed(() => {
		interval.counter.value;
		if (state$1.value.status === "stopped" || !state$1.value.startedAt) return 0;
		if (state$1.value.status === "paused") return state$1.value.pausedAt - state$1.value.startedAt;
		return Date.now() - state$1.value.startedAt;
	});
	const passed = computed(() => passedMs.value / 1e3);
	const percentage = computed(() => passed.value / duration.value * 100);
	const timer = computed(() => {
		if (mode.value === "stopwatch") {
			if (state$1.value.status === "stopped" || !state$1.value.startedAt) return {
				h: "",
				m: "-",
				s: "--",
				ms: "-"
			};
		}
		const total = mode.value === "countdown" ? duration.value * 1e3 - passedMs.value : passedMs.value;
		let h = Math.floor(total / 1e3 / 60 / 60).toString();
		if (h === "0") h = "";
		let min = Math.floor(total / 1e3 / 60 % 60).toString();
		if (h) min = min.padStart(2, "0");
		const sec = Math.floor(total / 1e3 % 60).toString().padStart(2, "0");
		const ms = Math.floor(total % 1e3 / 100).toString();
		return {
			h,
			m: min,
			s: sec,
			ms
		};
	});
	function reset() {
		interval.pause();
		state$1.value = {
			status: "stopped",
			slides: {},
			startedAt: 0,
			pausedAt: 0
		};
	}
	function resume() {
		if (!state$1.value) return;
		if (state$1.value?.status === "stopped") {
			state$1.value.status = "running";
			state$1.value.startedAt = Date.now();
		} else if (state$1.value.status === "paused") {
			state$1.value.status = "running";
			state$1.value.startedAt = Date.now() - (state$1.value.pausedAt - state$1.value.startedAt);
		}
		interval.resume();
	}
	function pause() {
		state$1.value.status = "paused";
		state$1.value.pausedAt = Date.now();
		interval.pause();
	}
	function toggle() {
		if (state$1.value.status === "running") pause();
		else resume();
	}
	return {
		state: state$1,
		status,
		timer,
		reset,
		toggle,
		resume,
		pause,
		passed,
		percentage,
		duration,
		mode
	};
}
//#endregion
//#region node_modules/@slidev/client/internals/TimerBar.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "border-b mt-px border-main relative flex h-4px" };
//#endregion
//#region node_modules/@slidev/client/internals/TimerBar.vue
var TimerBar_default = /* @__PURE__ */ defineComponent({
	__name: "TimerBar",
	setup(__props) {
		const timer = reactive(useTimer());
		const color = computed(() => {
			if (timer.status === "stopped") return "op50";
			if (timer.status === "paused") return "bg-blue";
			if (timer.percentage > 100) return "bg-red";
			else if (timer.percentage > 80) return "bg-yellow";
			else return "bg-green";
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [timer.status !== "stopped" ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(["h-4px", color.value]),
				style: normalizeStyle({ width: `${timer.percentage}%` })
			}, null, 6)) : createCommentVNode("v-if", true), createCommentVNode(" {{ timesplits }} ")]);
		};
	}
});
//#endregion
export { useTimer as n, CurrentProgressBar_default as r, TimerBar_default as t };
