import { defineStore } from "pinia";
import type { Athlete } from "@/types/athlete";

interface AthleteState {
	athletes: Athlete[];
}

export const useAthleteStore = defineStore(
	"athlete",
	{
		state: (): AthleteState => ({
			athletes: [
				{
					id: "1",
					name: "Emma Carter",
					sport: "Running",
					status: "ready",
					recovery: 92,
					sessions: 114,
					avatar: "EC",
					team: ""
				},

				{
					id: "2",
					name: "Ryan Lee",
					sport: "Cycling",
					status: "training",
					recovery: 78,
					sessions: 84,
					avatar: "RL",
					team: ""
				},
			],
		}),
	},
);
// export const useAthleteStore = defineStore(
// 	"athlete",
// 	{
// 		state: () => ({
// 			athletes: [
// 				{
// 					id: "1",
// 					name: "Emma Carter",
// 					sport: "Running",
// 					status: "ready",
// 					recovery: 92,
// 					sessions: 114,
// 					avatar: "EC",
// 				},

// 				{
// 					id: "2",
// 					name: "Ryan Lee",
// 					sport: "Cycling",
// 					status: "training",
// 					recovery: 78,
// 					sessions: 84,
// 					avatar: "RL",
// 				},
// 			],
// 		}),
// 	},
// );
