<script setup lang="ts">
import BaseCard from "@/shared/ui/BaseCard.vue";
</script>

<template>
	<div class="grid grid-cols-2 gap-6">
		<BaseCard>
			<div class="font-semibold">Performance</div>

			<div class="mt-3 text-slate-500">Peak force improved 12%</div>
		</BaseCard>

		<BaseCard>
			<div class="font-semibold">Recovery</div>

			<div class="mt-3 text-slate-500">
				Recovery stabilized after workload
			</div>
		</BaseCard>
	</div>
</template>
