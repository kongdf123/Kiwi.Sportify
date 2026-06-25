<script setup lang="ts">
import BaseCard from "@/shared/ui/BaseCard.vue";

import { useAnalysisStore } from "@/stores/analysis.store";

const store = useAnalysisStore();
</script>

<template>
	<div class="grid grid-cols-3 gap-5">
		<BaseCard v-for="m in store.metrics" :key="m.name">
			<div class="text-sm text-slate-500">
				{{ m.name }}
			</div>

			<div class="mt-4 text-5xl font-semibold">
				{{ m.value }}

				<span class="text-lg">
					{{ m.unit }}
				</span>
			</div>
		</BaseCard>
	</div>
</template>
