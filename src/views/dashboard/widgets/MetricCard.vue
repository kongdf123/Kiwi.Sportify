<template>
	<BaseCard>
		<div class="text-sm text-slate-500">
			{{ title }}
		</div>

		<div class="text-4xl font-semibold mt-3">
			{{ value }}
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
