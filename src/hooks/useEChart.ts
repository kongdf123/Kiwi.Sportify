import * as echarts from "echarts";

import { ref, onMounted, onUnmounted } from "vue";

export function useEChart() {
	const el = ref();

	let chart: echarts.ECharts;

	onMounted(() => {
		chart = echarts.init(el.value);
	});

	function render(option: echarts.EChartsOption) {
		chart?.setOption(option);
	}

	onUnmounted(() => {
		chart?.dispose();
	});

	return {
		el,

		render,
	};
}
