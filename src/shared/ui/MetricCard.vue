<template>
	<BaseCard>
		<div class="flex justify-between">
			<div>
				<div class="text-sm text-slate-500">
					{{ title }}
				</div>

				<div class="mt-4 text-5xl font-semibold">
					{{ value }}
				</div>
			</div>

			<div class="w-14 h-14 rounded-2xl bg-blue-50" />
		</div>
	</BaseCard>
</template>

<script setup lang="ts">
import BaseCard from "@/shared/ui/BaseCard.vue";

defineProps<{
	title: string;

	value: string;
}>();
</script>
