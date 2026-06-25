<script setup lang="ts">
import { computed, watch } from "vue";
import type { EChartsOption } from "echarts";
import { useReportStore } from "@/stores/report.store";
import { useEChart } from "@/hooks/useEChart";

const store = useReportStore();

const { el, render } = useEChart();

const chartOption = computed<EChartsOption>(() => ({
	tooltip: {
		trigger: "axis",
	},

	legend: {
		top: 0,
	},

	grid: {
		left: 24,
		right: 24,
		top: 60,
		bottom: 24,
	},

	xAxis: {
		type: "category",
		boundaryGap: false,
		data: store.data.map((item) => item.date),
	},

	yAxis: {
		type: "value",
	},

	series: [
		{
			name: "Force",
			type: "line",
			smooth: true,
			symbol: "circle",
			symbolSize: 8,
			data: store.data.map((item) => item.force),
		},

		{
			name: "Velocity",
			type: "line",
			smooth: true,
			symbol: "circle",
			symbolSize: 8,
			data: store.data.map((item) => item.velocity),
		},
	],
}));

watch(
	chartOption,
	(option) => {
		render(option);
	},
	{
		immediate: true,
	},
);
</script>

<template>
	<div
		class="bg-[var(--surface)] rounded-[24px] border border-[var(--border)] shadow-[var(--shadow)] p-8"
	>
		<div class="flex items-center justify-between">
			<div>
				<div class="text-2xl font-semibold">Performance Trend</div>

				<div class="mt-2 text-sm text-[var(--text-soft)]">
					Force vs Velocity Analysis
				</div>
			</div>

			<div class="text-sm text-[var(--text-soft)]">Updated just now</div>
		</div>

		<div ref="el" class="mt-8 h-[520px] w-full" />
	</div>
</template>
