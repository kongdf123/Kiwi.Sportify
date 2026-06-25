<script setup lang="ts">
import ReportStats from "./components/ReportStats.vue";
import ReportFilters from "./components/ReportFilters.vue";
import ReportChart from "./components/ReportChart.vue";
import ReportInsight from "./components/ReportInsight.vue";
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-4xl font-semibold">Reports</h1>

			<div class="mt-2 text-[var(--text-soft)]">
				Scientific performance reports
			</div>
		</div>

		<ReportStats />

		<ReportFilters />

		<ReportChart />

		<ReportInsight />
	</div>
</template>
