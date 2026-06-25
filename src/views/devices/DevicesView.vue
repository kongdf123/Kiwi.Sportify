<script setup lang="ts">
import { useDeviceStore } from "@/stores/device.store";

import DeviceStats from "./components/DeviceStats.vue";
import DeviceSearch from "./components/DeviceSearch.vue";
import DeviceFilters from "./components/DeviceFilters.vue";
import DeviceCard from "./components/DeviceCard.vue";

const store = useDeviceStore();
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-4xl font-semibold">Devices</h1>

			<div class="mt-2 text-[var(--text-soft)]">
				Monitor sensors and telemetry
			</div>
		</div>

		<DeviceStats />

		<div class="flex justify-between">
			<DeviceSearch />
			<DeviceFilters />
		</div>

		<div class="grid grid-cols-3 gap-6">
			<DeviceCard
				v-for="device in store.devices"
				:key="device.id"
				:device="device"
			/>
		</div>
	</div>
</template>
