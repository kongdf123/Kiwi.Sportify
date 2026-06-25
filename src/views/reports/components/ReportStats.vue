<script setup lang="ts">
import MetricCard from "@/shared/ui/MetricCard.vue";
</script>

<template>
	<div class="grid grid-cols-4 gap-5">
		<MetricCard title="Peak Force" value="900N" />

		<MetricCard title="Velocity" value="6.1" />

		<MetricCard title="Recovery" value="95%" />

		<MetricCard title="Sessions" value="42" />
	</div>
</template>
