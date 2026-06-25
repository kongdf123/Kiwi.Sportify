export type DeviceStatus = "online" | "warning" | "offline";

export interface Device {
	id: string;

	name: string;

	category: string;

	battery: number;

	status: DeviceStatus;

	signal: number;

	lastSync: string;
}
