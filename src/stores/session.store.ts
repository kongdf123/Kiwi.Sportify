import { defineStore } from "pinia";

import type { Session } from "../types/session";

interface SessionState {
	sessions: Session[];
}

export const useSessionStore = defineStore(
	"session",
	{
		state: (): SessionState => ({
			sessions: [
				{
					id: "1",
					title: "Acceleration Test",
					athlete: "Emma Carter",
					devices: 4,
					duration: "00:14:20",
					status: "capturing",
					updatedAt: "2 min",
				},
				{
					id: "2",
					title: "Recovery Monitoring",
					athlete: "Ryan Lee",
					devices: 2,
					duration: "00:26:10",
					status: "processing",
					updatedAt: "6 min",
				},

				{
					id: "3",
					title: "Sprint Evaluation",
					athlete: "Lucas Kim",
					devices: 3,
					duration: "00:18:55",
					status: "completed",
					updatedAt: "18 min",
				},
			],
		}),
	},
);
