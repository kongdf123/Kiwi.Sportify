<script setup lang="ts">
import DashboardStats from "./components/DashboardStats.vue";
import PerformanceTrend from "./components/PerformanceTrend.vue";
</script>

<template>
	<div class="space-y-8">
		<!-- <div>
			<h1 class="text-4xl font-semibold">Dashboard</h1>

			<div class="mt-2 text-[var(--text-soft)]">
				Sports science control center
			</div>
		</div> -->

		<DashboardStats />

		<PerformanceTrend />
	</div>
</template>
