<script setup lang="ts">
import { computed } from "vue";
import MetricCard from "@/shared/ui/MetricCard.vue";
//import { useDashboardStore } from "@/stores/dashboard.store";

//const _store = useDashboardStore();

const metrics = computed(() => [
	{
		title: "Active Athletes",
		value: "124",
		change: "+8%",
		subtitle: "Compared to last week",
	},

	{
		title: "Sessions Today",
		value: "18",
		change: "+12%",
		subtitle: "Realtime capture",
	},

	{
		title: "Recovery Score",
		value: "92%",
		change: "+3%",
		subtitle: "Team average",
	},

	{
		title: "Devices Online",
		value: "46",
		change: "Healthy",
		subtitle: "Sensor network",
	},
]);
</script>

<template>
	<section>
		<div class="flex items-center justify-between mb-6">
			<div>
				<div class="text-2xl font-semibold">Overview</div>

				<div class="mt-1 text-sm text-[var(--text-soft)]">
					Realtime platform indicators
				</div>
			</div>
		</div>

		<div class="grid grid-cols-4 gap-6">
			<MetricCard
				v-for="item in metrics"
				:key="item.title"
				:title="item.title"
				:value="item.value"
				:change="item.change"
				:subtitle="item.subtitle"
			/>
		</div>
	</section>
</template>
