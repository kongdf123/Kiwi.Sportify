<script setup lang="ts">
import BaseCard from "@/shared/ui/BaseCard.vue";

import type { Device } from "@/types/device";

defineProps<{
	device: Device;
}>();

const statusMap = {
	online: "bg-emerald-500",
	warning: "bg-amber-500",
	offline: "bg-red-500",
};
</script>

<template>
	<BaseCard>
		<div class="flex justify-between items-start">
			<div>
				<div class="text-xl font-semibold">
					{{ device.name }}
				</div>

				<div class="text-sm text-slate-500">
					{{ device.category }}
				</div>
			</div>

			<div :class="['w-3 h-3 rounded-full', statusMap[device.status]]" />
		</div>

		<div class="mt-8 grid grid-cols-3 gap-4">
			<div>
				<div class="text-sm text-slate-500">Battery</div>

				<div class="text-2xl font-semibold">{{ device.battery }}%</div>
			</div>

			<div>
				<div>Signal</div>

				<div class="text-2xl font-semibold">
					{{ device.signal }}
				</div>
			</div>

			<div>
				<div>Sync</div>

				<div class="text-xl">
					{{ device.lastSync }}
				</div>
			</div>
		</div>
	</BaseCard>
</template>
