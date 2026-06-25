<script setup lang="ts">
import BaseCard from "@/shared/ui/BaseCard.vue";

import type { Athlete } from "@/types/athlete";

interface Props {
	athlete: Athlete;
}

defineProps<Props>();
</script>

<template>
	<BaseCard>
		<div class="flex justify-between">
			<div class="flex gap-4">
				<div
					class="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center font-semibold"
				>
					{{ athlete.avatar }}
				</div>

				<div>
					<div class="font-semibold text-lg">
						{{ athlete.name }}
					</div>

					<div class="text-slate-500">
						{{ athlete.sport }}
					</div>
				</div>
			</div>

			<div>
				{{ athlete.status }}
			</div>
		</div>

		<div class="mt-8 flex justify-between">
			<div>
				<div class="text-sm text-slate-500">Recovery</div>

				<div class="text-3xl font-semibold">
					{{ athlete.recovery }}%
				</div>
			</div>

			<div>
				<div class="text-sm text-slate-500">Sessions</div>

				<div class="text-3xl font-semibold">
					{{ athlete.sessions }}
				</div>
			</div>
		</div>
	</BaseCard>
</template>
