import { defineStore } from "pinia";

import type { Device } from "@/types/device";

interface DeviceState {
	devices: Device[];
}

export const useDeviceStore = defineStore("device", {
	state: (): DeviceState => ({
		devices: [
			{
				id: "1",
				name: "Force Plate",
				category: "Strength",
				battery: 92,
				status: "online",
				signal: 96,
				lastSync: "2 sec",
			},

			{
				id: "2",
				name: "Motion Sensor",
				category: "Wearable",
				battery: 61,
				status: "warning",
				signal: 82,
				lastSync: "15 sec",
			},

			{
				id: "3",
				name: "Heart Monitor",
				category: "Cardio",
				battery: 34,
				status: "offline",
				signal: 0,
				lastSync: "2 min",
			},
		],
	}),
});
