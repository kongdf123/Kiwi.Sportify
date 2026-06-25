import { defineStore } from "pinia";

import type { TrendPoint } from "@/types/dashboard";

interface DashboardState {
	trend: TrendPoint[];
}

export const useDashboardStore = defineStore(
	"dashboard",

	{
		state: (): DashboardState => ({
			trend: [
				{
					date: "Mon",
					performance: 72,
					recovery: 80,
				},

				{
					date: "Tue",
					performance: 78,
					recovery: 84,
				},

				{
					date: "Wed",
					performance: 86,
					recovery: 88,
				},

				{
					date: "Thu",
					performance: 91,
					recovery: 90,
				},

				{
					date: "Fri",
					performance: 89,
					recovery: 93,
				},

				{
					date: "Sat",
					performance: 95,
					recovery: 92,
				},
			],
		}),
	},
);
