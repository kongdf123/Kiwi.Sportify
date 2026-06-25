<script setup lang="ts">
import { computed } from "vue";
import BaseChart from "@/shared/charts/BaseChart.vue";
import type { EChartsOption } from "echarts";

const option = computed<EChartsOption>(() => ({
	tooltip: {
		trigger: "axis",
	},

	grid: {
		left: 24,
		right: 24,
	},

	xAxis: {
		type: "category",
		data: [0, 1, 2, 3, 4, 5, 6],
	},

	yAxis: {
		type: "value",
	},

	series: [
		{
			type: "line",
			smooth: true,
			data: [200, 420, 630, 870, 720, 540, 320],
		},
	],
}));
</script>

<template>
	<div>
		<div class="mb-4">
			<div class="text-xl font-semibold">Force Curve</div>

			<div class="text-sm text-[var(--text-soft)]">
				Peak force timeline
			</div>
		</div>

		<BaseChart
			:option="option"
			height="520px"
		/>
	</div>
</template>
