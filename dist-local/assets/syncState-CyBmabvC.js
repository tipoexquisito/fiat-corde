import { at as reactive, dt as toRaw, q as watch, st as ref } from "./modules/shiki-V2eyNvW-.js";
//#region node_modules/vite-plugin-vue-server-ref/dist/client.mjs
function randId() {
	return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(2, 10);
}
function define(target, key, value) {
	Object.defineProperty(target, key, {
		value,
		writable: true,
		enumerable: false
	});
}
var syncInterfaces = reactive([{
	channels: [],
	enabled: true,
	init(channelKey, onUpdate, state, persist = false) {
		let stateChannel;
		if (!persist) {
			stateChannel = new BroadcastChannel(channelKey);
			stateChannel.addEventListener("message", (event) => onUpdate(event.data));
			this.channels.push(stateChannel);
		} else if (persist) {
			this.listener = function(event) {
				if (event && event.key === channelKey && event.newValue) onUpdate(JSON.parse(event.newValue));
			};
			window.addEventListener("storage", this.listener);
			const serializedState = window.localStorage.getItem(channelKey);
			if (serializedState) onUpdate(JSON.parse(serializedState));
		}
		return (state, updating = false) => {
			if (this.enabled) {
				if (!persist && stateChannel && !updating) stateChannel.postMessage(toRaw(state));
				if (persist && !updating) window.localStorage.setItem(channelKey, JSON.stringify(state));
			}
		};
	},
	disable() {
		this.enabled = false;
		this.channels.forEach((channel) => channel.close());
		if (this.listener) window.removeEventListener("storage", this.listener);
	}
}]);
var channels = /* @__PURE__ */ new Map();
var syncWrites = ref({});
function createSyncState(serverState, defaultState, persist = false) {
	const onPatchCallbacks = [];
	let patching = false;
	let updating = false;
	let patchingTimeout;
	let updatingTimeout;
	const state = reactive(defaultState);
	function onPatch(fn) {
		onPatchCallbacks.push(fn);
	}
	function patch(key, value) {
		if (state[key] === value) return;
		clearTimeout(patchingTimeout);
		patching = true;
		state[key] = value;
		patchingTimeout = setTimeout(() => patching = false, 0);
	}
	function onUpdate(patch) {
		if (!patching) {
			clearTimeout(updatingTimeout);
			updating = true;
			Object.entries(patch).forEach(([key, value]) => {
				state[key] = value;
			});
			updatingTimeout = setTimeout(() => updating = false, 0);
		}
	}
	function init(channelKey) {
		channels.set(channelKey, {
			onUpdate,
			persist,
			state
		});
		syncWrites.value[channelKey] = syncInterfaces.map((sync) => sync.init(channelKey, onUpdate, state, persist)).filter((x) => Boolean(x));
		function onStateChanged() {
			syncWrites.value[channelKey].forEach((write) => write?.(toRaw(state), updating));
			if (!patching) onPatchCallbacks.forEach((fn) => fn(state));
		}
		watch(state, onStateChanged, { deep: true });
	}
	return {
		init,
		onPatch,
		onUpdate,
		patch,
		state
	};
}
//#endregion
export { define as n, randId as r, createSyncState as t };
