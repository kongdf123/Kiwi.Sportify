<script setup lang="ts">
import { computed } from "vue";
import type { EChartsOption } from "echarts";
import BaseChart from "@/shared/charts/BaseChart.vue";
import { useDashboardStore } from "@/stores/dashboard.store";

const store = useDashboardStore();

const option = computed<EChartsOption>(() => ({
	tooltip: {
		trigger: "axis",
	},

	legend: {
		top: 0,
	},

	grid: {
		left: 24,
		right: 24,
		top: 48,
		bottom: 24,
	},

	xAxis: {
		type: "category",
		boundaryGap: false,
		data: store.trend.map((v) => v.date),
	},

	yAxis: {
		type: "value",
		min: 0,
		max: 100,
	},

	series: [
		{
			name: "Performance",
			type: "line",
			smooth: true,
			data: store.trend.map((v) => v.performance),
		},

		{
			name: "Recovery",
			type: "line",
			smooth: true,
			data: store.trend.map((v) => v.recovery),
		},
	],
}));
</script>

<template>
	<div>
		<div class="mb-5">
			<div class="text-2xl font-semibold">Performance Trend</div>

			<div class="mt-1 text-sm text-[var(--text-soft)]">
				Weekly athlete readiness
			</div>
		</div>

		<BaseChart
			:option="option"
			height="420px"
		/>
	</div>
</template>
