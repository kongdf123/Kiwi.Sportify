<template>
	<div class="space-y-8">
		<section>
			<div class="grid grid-cols-4 gap-6">
				<MetricCard title="Sessions" value="156" />

				<MetricCard title="Athletes" value="87" />

				<MetricCard title="Devices" value="24" />

				<MetricCard title="Recovery" value="92%" />
			</div>
		</section>

		<section>
			<BaseCard>
				<div class="flex justify-between">
					<div>
						<div class="text-xl font-semibold">
							Performance Trend
						</div>

						<div class="text-slate-500">Live telemetry</div>
					</div>
				</div>

				<div
					class="h-[420px] mt-8 rounded-[20px] bg-gradient-to-br from-slate-50 to-blue-50"
				/>
			</BaseCard>
		</section>
	</div>
</template>
<script setup lang="ts">
import BaseCard from "@/shared/ui/BaseCard.vue";
import MetricCard from "@/shared/ui/MetricCard.vue";
</script>

