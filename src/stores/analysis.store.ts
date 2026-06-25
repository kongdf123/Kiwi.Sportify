import { defineStore } from "pinia";

import type { AnalysisMetric } from "../types/analysis";

export type AnalysisState = {
	metrics: AnalysisMetric[];
};

export const useAnalysisStore = defineStore(
	"analysis",

	{
		state: (): AnalysisState => ({
			metrics: [
				{
					name: "Force",
					value: 864,
					unit: "N",
					trend: 8,
				},

				{
					name: "Power",
					value: 1200,
					unit: "W",
					trend: 6,
				},
				{
					name: "Velocity",
					value: 5.8,
					unit: "m/s",
					trend: 4,
				},

				{
					name: "Recovery",
					value: 91,
					unit: "%",
					trend: 2,
				},
			],
		}),
	},
);
