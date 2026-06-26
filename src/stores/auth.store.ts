import { defineStore } from "pinia";
import type { AuthState, User } from "../types/auth";

const STORAGE_KEY = "sportify-auth";

export const useAuthStore = defineStore("auth", {
	state: (): AuthState => ({
		token: localStorage.getItem(STORAGE_KEY),
		user: JSON.parse(localStorage.getItem("user") || "null"),
	}),

	getters: {
		isLoggedIn: (state) => Boolean(state.token),
	},

	actions: {
		login(email: string, password: string) {
			// mock api
			const token = "mock-token";
			const user: User = {
				id: "1",
				name: "Sport Scientist",
				email,
				role: "admin",
			};

			console.log("Logged in as", user.name+" ("+password+")");

			this.token = token;
			this.user = user;

			localStorage.setItem(STORAGE_KEY, token);

			localStorage.setItem("user", JSON.stringify(user));
		},

		logout() {
			this.token = null;
			this.user = null;
			localStorage.removeItem(STORAGE_KEY);
			localStorage.removeItem("user");
		},

		persist: {
			key: "sportify-auth",
			storage: localStorage,
			pick: ["token", "user"],
		},
	},
});
