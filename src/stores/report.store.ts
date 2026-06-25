import { defineStore } from "pinia";

import type { ReportPoint } from "../types/report";

export type ReportState = {
	data: ReportPoint[];
};

export const useReportStore = defineStore(
	"report",

	{
		state: (): ReportState => ({
			data: [
				{
					date: "Mon",
					force: 820,
					velocity: 5.2,
					recovery: 86,
				},

				{
					date: "Tue",
					force: 860,
					velocity: 5.8,
					recovery: 91,
				},

				{
					date: "Wed",
					force: 900,
					velocity: 6.1,
					recovery: 95,
				},

				{
					date: "Thu",
					force: 880,
					velocity: 5.7,
					recovery: 89,
				},
			],
		}),
	},
);
