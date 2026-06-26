import { defineStore } from "pinia";

export type SessionStatus = "RUNNING" | "PAUSED" | "COMPLETED";

interface Device {
	id: string;

	name: string;

	connected: boolean;
}

interface SessionState {
	id: string | null;

	status: SessionStatus;

	elapsed: number;

	timer?: number;

	athlete: string;

	devices: Device[];

	force: number;

	velocity: number;

	heartRate: number;
}

export const useSessionLiveStore = defineStore(
	"session-live",

	{
		state: (): SessionState => ({
			id: null,

			status: "PAUSED",

			elapsed: 0,

			timer: undefined,

			athlete: "Emma Carter",

			force: 650,

			velocity: 6.2,

			heartRate: 126,

			devices: [
				{
					id: "gps",

					name: "GPS",

					connected: true,
				},

				{
					id: "imu",

					name: "IMU",

					connected: true,
				},
			],
		}),

		getters: {
			formattedTime: (state) => {
				const h = String(Math.floor(state.elapsed / 3600)).padStart(
					2,
					"0",
				);

				const m = String(
					Math.floor((state.elapsed % 3600) / 60),
				).padStart(2, "0");

				const s = String(state.elapsed % 60).padStart(2, "0");

				return `${h}:${m}:${s}`;
			},
		},

		actions: {
			async start() {
				this.id = Date.now().toString();

				this.status = "RUNNING";

				this.run();

				return this.id;
			},

			run() {
				this.stopTimer();

				this.timer = window.setInterval(
					() => {
						this.elapsed++;

						this.force += Math.random() * 10 - 5;

						this.velocity += Math.random() * 0.2 - 0.1;

						this.heartRate += Math.random() * 6 - 3;
					},

					1000,
				);
			},

			pause() {
				this.status = "PAUSED";

				this.stopTimer();
			},

			resume() {
				this.status = "RUNNING";

				this.run();
			},

			stop() {
				this.status = "COMPLETED";

				this.stopTimer();
			},

			stopTimer() {
				if (this.timer) {
					clearInterval(this.timer);

					this.timer = undefined;
				}
			},
		},
	},
);
