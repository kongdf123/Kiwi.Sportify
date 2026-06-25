import * as echarts from "echarts";
import { ref, shallowRef, onMounted, onUnmounted, nextTick } from "vue";

export function useEChart() {
	const el = ref<HTMLElement>();
	const chart = shallowRef<echarts.ECharts>();
	let pendingOption: echarts.EChartsOption | null = null;

	async function init() {
		await nextTick();

		if (!el.value || chart.value) {
			return;
		}

		chart.value = echarts.init(el.value);

		if (pendingOption) {
			chart.value.setOption(pendingOption);
		}

		window.addEventListener("resize", resize);
	}

	function render(option: echarts.EChartsOption) {
		pendingOption = option;

		if (!chart.value) {
			return;
		}

		chart.value.setOption(option, true);
	}

	function resize() {
		chart.value?.resize();
	}

	function destroy() {
		window.removeEventListener("resize", resize);

		chart.value?.dispose();

		chart.value = undefined;
	}

	onMounted(init);

	onUnmounted(destroy);

	return {
		el,
		render,
		resize,
		chart,
	};
}
