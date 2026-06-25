import { defineStore } from "pinia";

export const useAuthStore = defineStore(
	"auth",

	{
		state: () => ({
			token: null as string | null,
		}),

		getters: {
			isLoggedIn: (state) => state.token !== null,
		},
		actions: {
			login() {
				this.token = "mock";
			},
		},
	},
);
