import { defineStore } from "pinia";

import type { SessionCreate } from "@/types/session";
import type { Athlete } from "@/types/athlete";

interface Protocol {
	id: string;

	name: string;

	description: string;
}

interface Device {
	id: string;

	name: string;
}

interface SessionCreateState {
	step: number;

	form: SessionCreate;

	protocols: Protocol[];

	devices: Device[];
}

export const useSessionCreateStore = defineStore(
	"session-create",

	{
		state: (): SessionCreateState => ({
			step: 0,

			form: {
				athleteId: "",

				athlete: {} as Athlete,
				protocolId: "",

				deviceIds: [],

				sessionName: "",

				notes: "",

				capture: {
					duration: 30,

					samplingRate: 100,

					autoStop: false,
				},
			},

			protocols: [
				{
					id: "sprint",
					name: "Sprint Test",
					description: "Acceleration and power",
				},

				{
					id: "jump",
					name: "Jump Assessment",
					description: "Explosive performance",
				},

				{
					id: "recovery",
					name: "Recovery Monitoring",
					description: "Post workload",
				},
			],

			devices: [
				{
					id: "gps",
					name: "GPS Sensor",
				},

				{
					id: "imu",
					name: "IMU",
				},

				{
					id: "hr",
					name: "Heart Rate",
				},
			],
		}),

		getters: {
			canContinue: (state) => {
				switch (state.step) {
					case 0:
						return Boolean(state.form.athlete.name);

					case 1:
						return Boolean(state.form.protocolId);

					case 2:
						return state.form.deviceIds.length > 0;

					default:
						return true;
				}
			},
		},

		actions: {
			next() {
				if (this.step < 4 && this.canContinue) {
					this.step++;
				}
			},

			prev() {
				if (this.step > 0) {
					this.step--;
				}
			},

			toggleDevice(id: string) {
				const index = this.form.deviceIds.indexOf(id);

				if (index >= 0) {
					this.form.deviceIds.splice(index, 1);

					return;
				}

				this.form.deviceIds.push(id);
			},

			reset() {
				this.$reset();
			},

			submit() {
				console.log(this.form);
			},
		},
	},
);
