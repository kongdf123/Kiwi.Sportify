<template>
	<div class="space-y-6">
		<section>
			<h2 class="text-3xl font-semibold">Sports Overview</h2>
		</section>

		<section class="grid grid-cols-4 gap-6">
			<MetricCard title="Sessions" value="156" />
			<MetricCard title="Athletes" value="87" />
			<MetricCard title="Devices" value="24" />
			<MetricCard title="Recovery" value="92%" />
		</section>

		<section>
			<BaseCard>
				Realtime Analysis
				<div class="h-[400px] mt-4 rounded-xl bg-slate-100" />
			</BaseCard>
		</section>
	</div>
</template>

<script setup lang="ts">
import BaseCard from "@/shared/ui/BaseCard.vue";
import MetricCard from "./widgets/MetricCard.vue";
</script>
