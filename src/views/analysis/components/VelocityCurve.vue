<script setup lang="ts">
import { computed } from "vue";
import BaseChart from "@/shared/charts/BaseChart.vue";
import type { EChartsOption } from "echarts";

const option = computed<EChartsOption>(() => ({
	xAxis: {
		type: "category",
		data: [1, 2, 3, 4, 5],
	},

	yAxis: {
		type: "value",
	},

	series: [
		{
			type: "line",
			smooth: true,
			data: [4.1, 5.3, 6.2, 5.9, 5.4],
		},
	],
}));
</script>

<template>
	<BaseChart
		:option="option"
		height="360px"
	/>
</template>
